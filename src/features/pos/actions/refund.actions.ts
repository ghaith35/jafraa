"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { generateRefundNumber } from "@/lib/sequences/refund-sequence";
import { returnStockFifo } from "@/lib/stock/return-fifo";

type ActionError = { error: string };

// ─── Types ───────────────────────────────────────────────────────────────────

export interface RefundableLine {
  id: string;
  lineType: string;
  productId: string | null;
  partId: string | null;
  serviceId: string | null;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  alreadyRefundedQty: number;
}

export interface RefundableSale {
  id: string;
  saleNumber: string;
  totalAmount: number;
  cashReceivedAmount: number;
  debtAmount: number;
  alreadyRefundedCash: number;
  lines: RefundableLine[];
}

export interface RefundConfirmation {
  refundId: string;
  refundNumber: string;
  totalRefunded: number;
}

// ─── Actions ─────────────────────────────────────────────────────────────────

/**
 * Get POS sale details for refund UI.
 */
export async function getPosSaleForRefund(
  saleNumber: string
): Promise<ActionError | RefundableSale> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (session.role === "Technician") return { error: "Accès refusé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const sale = await prisma.posSale.findFirst({
    where: {
      saleNumber: saleNumber.trim(),
      storeId,
      status: "completed",
    },
    include: {
      lines: {
        include: {
          refundLines: {
            select: { quantity: true },
          },
        },
      },
      refunds: {
        where: { status: "completed" },
        select: { totalRefundAmount: true },
      },
    },
  });

  if (!sale) {
    return { error: "Vente introuvable ou déjà annulée" };
  }

  const alreadyRefundedCash = sale.refunds.reduce(
    (sum, r) => sum + Number(r.totalRefundAmount),
    0
  );

  const refundableLines: RefundableLine[] = sale.lines.map((l) => ({
    id: l.id,
    lineType: l.lineType,
    productId: l.productId,
    partId: l.partId,
    serviceId: l.serviceId,
    description: l.description,
    quantity: Number(l.quantity),
    unitPrice: Number(l.unitPrice),
    totalPrice: Number(l.totalPrice),
    alreadyRefundedQty: l.refundLines.reduce((sum, rl) => sum + Number(rl.quantity), 0),
  }));

  return {
    id: sale.id,
    saleNumber: sale.saleNumber,
    totalAmount: Number(sale.totalAmount),
    cashReceivedAmount: Number(sale.cashReceivedAmount),
    debtAmount: Number(sale.debtAmount),
    alreadyRefundedCash,
    lines: refundableLines,
  };
}

/**
 * Process POS refund.
 */
export async function createPosRefund(
  saleId: string,
  linesToRefund: { lineId: string; quantity: number }[],
  reason: string
): Promise<ActionError | RefundConfirmation> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (session.role === "Technician") return { error: "Les techniciens ne peuvent pas effectuer de remboursements" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  if (!reason || reason.trim().length < 3) {
    return { error: "Veuillez fournir un motif valable pour le remboursement" };
  }

  if (!linesToRefund || linesToRefund.length === 0) {
    return { error: "Aucun article sélectionné pour le remboursement" };
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const cashSession = await tx.cashRegisterSession.findFirst({
        where: { storeId, status: "opened" },
      });
      if (!cashSession) {
        throw new Error("Aucune session de caisse ouverte.");
      }

      const sale = await tx.posSale.findFirstOrThrow({
        where: { id: saleId, storeId, status: "completed" },
        include: {
          lines: {
            include: {
              refundLines: { select: { quantity: true } },
            },
          },
          refunds: { where: { status: "completed" }, select: { totalRefundAmount: true } },
        },
      });

      if (session.role === "Cashier" && sale.cashSessionId !== cashSession.id) {
        throw new Error("Les caissiers ne peuvent rembourser que les ventes de la session en cours.");
      }

      if (Number(sale.debtAmount) > 0) {
        throw new Error("Le remboursement des ventes à crédit est différé. Contactez un administrateur.");
      }

      const store = await tx.store.findUniqueOrThrow({
        where: { id: storeId },
        select: { prefix: true },
      });

      let totalRefundAmount = 0;
      const linesData: {
        lineType: string;
        posSaleLineId: string;
        productId: string | null;
        partId: string | null;
        serviceId: string | null;
        description: string;
        quantity: number;
        unitPrice: number;
        totalRefundAmount: number;
      }[] = [];

      for (const reqLine of linesToRefund) {
        const saleLine = sale.lines.find((l) => l.id === reqLine.lineId);
        if (!saleLine) throw new Error(`Ligne de vente introuvable: ${reqLine.lineId}`);

        const alreadyRefunded = saleLine.refundLines.reduce((sum, rl) => sum + Number(rl.quantity), 0);
        const availableToRefund = Number(saleLine.quantity) - alreadyRefunded;

        if (reqLine.quantity > availableToRefund) {
          throw new Error(`Quantité demandée (${reqLine.quantity}) supérieure au reste remboursable (${availableToRefund}) pour ${saleLine.description}`);
        }

        if (reqLine.quantity <= 0) continue;

        const lineTotal = Number(saleLine.unitPrice) * reqLine.quantity;
        totalRefundAmount += lineTotal;

        linesData.push({
          lineType: saleLine.lineType,
          posSaleLineId: saleLine.id,
          productId: saleLine.productId,
          partId: saleLine.partId,
          serviceId: saleLine.serviceId,
          description: saleLine.description,
          quantity: reqLine.quantity,
          unitPrice: Number(saleLine.unitPrice),
          totalRefundAmount: lineTotal,
        });
      }

      if (totalRefundAmount === 0) {
        throw new Error("Le montant total du remboursement doit être supérieur à 0");
      }

      const alreadyRefundedCash = sale.refunds.reduce((sum, r) => sum + Number(r.totalRefundAmount), 0);
      const maxCashRefundable = Number(sale.cashReceivedAmount) - alreadyRefundedCash;

      if (totalRefundAmount > maxCashRefundable) {
        throw new Error(`Le montant demandé (${totalRefundAmount.toFixed(2)}) dépasse le montant payé en espèces restant (${maxCashRefundable.toFixed(2)})`);
      }

      const refundNumber = await generateRefundNumber(tx, storeId, store.prefix);

      const refund = await tx.refund.create({
        data: {
          companyId: session.companyId,
          storeId,
          refundNumber,
          refundType: "pos_sale",
          posSaleId: sale.id,
          cashSessionId: cashSession.id,
          totalRefundAmount,
          reason,
          status: "completed",
          createdByUserId: session.sub,
        },
      });

      for (const ld of linesData) {
        await tx.refundLine.create({
          data: {
            refundId: refund.id,
            ...ld,
          },
        });

        if (ld.lineType === "product" || ld.lineType === "part") {
          await returnStockFifo(tx, {
            storeId,
            companyId: session.companyId,
            itemType: ld.lineType as "product" | "part",
            productId: ld.productId || undefined,
            partId: ld.partId || undefined,
            quantity: ld.quantity,
            unitCost: 0, 
            sourceType: "refund",
            sourceId: refund.id,
            userId: session.sub,
            note: `Retour vente — REF ${refundNumber}`,
          });
        }
      }

      await tx.cashMovement.create({
        data: {
          companyId: session.companyId,
          storeId,
          cashSessionId: cashSession.id,
          movementType: "refund",
          direction: "out",
          amount: totalRefundAmount,
          sourceType: "refund",
          sourceId: refund.id,
          note: `Remboursement Vente ${sale.saleNumber} — REF ${refundNumber}`,
          createdByUserId: session.sub,
        },
      });

      await tx.cashRegisterSession.update({
        where: { id: cashSession.id },
        data: { expectedCashAmount: { decrement: totalRefundAmount } },
      });

      return {
        refundId: refund.id,
        refundNumber: refund.refundNumber,
        totalRefunded: totalRefundAmount,
      };
    });

    revalidatePath("/dashboard/pos");
    revalidatePath("/dashboard/pos/cash-register");
    revalidatePath("/dashboard/inventory");
    return result;
  } catch (e: unknown) {
    console.error("createPosRefund error:", e);
    const message = e instanceof Error ? e.message : "Erreur lors du remboursement";
    return { error: message };
  }
}
