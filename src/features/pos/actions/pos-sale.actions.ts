"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { generateSaleNumber } from "@/lib/sequences/sale-sequence";
import { consumeStockFifo } from "@/lib/stock/consume-fifo";

type ActionError = { error: string };

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CartLine {
  lineType: "product" | "part" | "service";
  itemId: string;
  name: string;
  sku: string;
  quantity: number;
  unitPrice: number;
}

export interface SellableItem {
  id: string;
  type: "product" | "part" | "service";
  name: string;
  sku: string;
  barcode: string | null;
  sellingPrice: number;
  stockQty: number | null; // null for services
}

export interface SaleConfirmation {
  saleId: string;
  saleNumber: string;
  totalAmount: number;
  cashReceived: number;
  debtAmount: number;
  changeAmount: number;
  lineCount: number;
}

// ─── Search sellable items ───────────────────────────────────────────────────

export async function searchSellableItems(
  query: string
): Promise<SellableItem[]> {
  const session = await getSession();
  if (!session) return [];
  if (session.role === "Technician") return [];

  const storeId = session.storeIds[0];
  if (!storeId) return [];

  const q = query.trim();
  if (q.length < 1) return [];

  const containsFilter = { contains: q, mode: "insensitive" as const };

  // Search products, parts, services in parallel
  const [products, parts, services] = await Promise.all([
    prisma.product.findMany({
      where: {
        storeId,
        isArchived: false,
        OR: [
          { name: containsFilter },
          { sku: containsFilter },
          { barcode: containsFilter },
        ],
      },
      select: {
        id: true,
        name: true,
        sku: true,
        barcode: true,
        sellingPrice: true,
        stockQty: true,
      },
      take: 10,
    }),
    prisma.part.findMany({
      where: {
        storeId,
        isArchived: false,
        OR: [
          { name: containsFilter },
          { sku: containsFilter },
          { barcode: containsFilter },
        ],
      },
      select: {
        id: true,
        name: true,
        sku: true,
        barcode: true,
        sellingPrice: true,
        stockQty: true,
      },
      take: 10,
    }),
    prisma.service.findMany({
      where: {
        storeId,
        isArchived: false,
        OR: [
          { name: containsFilter },
          { sku: containsFilter },
        ],
      },
      select: {
        id: true,
        name: true,
        sku: true,
        sellingPrice: true,
      },
      take: 10,
    }),
  ]);

  const results: SellableItem[] = [
    ...products.map((p) => ({
      id: p.id,
      type: "product" as const,
      name: p.name,
      sku: p.sku,
      barcode: p.barcode,
      sellingPrice: Number(p.sellingPrice),
      stockQty: p.stockQty,
    })),
    ...parts.map((p) => ({
      id: p.id,
      type: "part" as const,
      name: p.name,
      sku: p.sku,
      barcode: p.barcode,
      sellingPrice: Number(p.sellingPrice),
      stockQty: p.stockQty,
    })),
    ...services.map((s) => ({
      id: s.id,
      type: "service" as const,
      name: s.name,
      sku: s.sku,
      barcode: null,
      sellingPrice: Number(s.sellingPrice),
      stockQty: null,
    })),
  ];

  return results;
}

// ─── Checkout cash sale ──────────────────────────────────────────────────────

export async function checkoutCashSale(
  lines: CartLine[],
  cashReceived: number,
  customerId?: string | null,
  discountAmount?: number,
  debtEnabled?: boolean
): Promise<ActionError | SaleConfirmation> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  if (session.role === "Technician") {
    return { error: "Les techniciens ne peuvent pas effectuer de ventes" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  // Basic validations
  if (!lines || lines.length === 0) {
    return { error: "Le panier est vide" };
  }

  const discount = discountAmount && discountAmount > 0 ? discountAmount : 0;

  // Only Admin/Manager can apply discounts
  if (discount > 0 && session.role !== "Admin" && session.role !== "Manager") {
    return { error: "Seuls les gérants ou administrateurs peuvent appliquer une remise" };
  }

  // Calculate subtotal
  const subtotal = lines.reduce(
    (sum, line) => sum + line.unitPrice * line.quantity,
    0
  );

  if (discount > subtotal) {
    return { error: "La remise ne peut pas dépasser le sous-total" };
  }

  const total = subtotal - discount;

  // Debt mode: named customer required, cash may be less than total
  const useDebt = !!(debtEnabled && customerId);
  const debtAmount = useDebt && cashReceived < total ? total - cashReceived : 0;
  const changeAmount = !useDebt && cashReceived > total ? cashReceived - total : 0;

  // Full-cash path: cash must cover total
  if (!useDebt && cashReceived < total) {
    return {
      error: `Espèces reçues insuffisantes. Total: ${total.toFixed(2)} DZD, reçu: ${cashReceived.toFixed(2)} DZD`,
    };
  }

    try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Verify open cash session (always required — even for debt-only sales)
      const cashSession = await tx.cashRegisterSession.findFirst({
        where: { storeId, status: "opened" },
      });

      if (!cashSession) {
        throw new Error("Aucune session de caisse ouverte. Veuillez ouvrir la caisse avant de vendre.");
      }

      // 2. Get store for prefix
      const store = await tx.store.findUniqueOrThrow({
        where: { id: storeId },
        select: { prefix: true },
      });

      // 3. Validate customer if provided
      if (customerId) {
        const customer = await tx.customer.findFirst({
          where: { id: customerId, companyId: session.companyId, isArchived: false },
          include: { debtBalance: true },
        });
        if (!customer) {
          throw new Error("Client introuvable");
        }
        // Debt mode validation
        if (useDebt && debtAmount > 0) {
          if (customer.customerType === "walkin") {
            throw new Error("Les clients de passage ne peuvent pas avoir de dette");
          }
        }
      }

      // 4. Validate all items exist and belong to store + pre-check stock
      for (const line of lines) {
        if (line.quantity <= 0) {
          throw new Error(`Quantité invalide pour ${line.name}`);
        }

        if (line.lineType === "product") {
          const product = await tx.product.findFirst({
            where: { id: line.itemId, storeId, isArchived: false },
          });
          if (!product) throw new Error(`Produit introuvable: ${line.name}`);
          if (product.stockQty < line.quantity) {
            throw new Error(
              `Stock insuffisant pour "${product.name}". Disponible: ${product.stockQty}, demandé: ${line.quantity}`
            );
          }
        } else if (line.lineType === "part") {
          const part = await tx.part.findFirst({
            where: { id: line.itemId, storeId, isArchived: false },
          });
          if (!part) throw new Error(`Pièce introuvable: ${line.name}`);
          if (part.stockQty < line.quantity) {
            throw new Error(
              `Stock insuffisant pour "${part.name}". Disponible: ${part.stockQty}, demandé: ${line.quantity}`
            );
          }
        } else if (line.lineType === "service") {
          const service = await tx.service.findFirst({
            where: { id: line.itemId, storeId, isArchived: false },
          });
          if (!service) throw new Error(`Service introuvable: ${line.name}`);
        }
      }

      // 5. Generate sale number
      const saleNumber = await generateSaleNumber(tx, storeId, store.prefix);

      // 6. Create PosSale
      const sale = await tx.posSale.create({
        data: {
          companyId: session.companyId,
          storeId,
          saleNumber,
          customerId: customerId || null,
          cashSessionId: cashSession.id,
          subtotalAmount: subtotal,
          discountAmount: discount,
          totalAmount: total,
          cashReceivedAmount: cashReceived,
          changeAmount,
          debtAmount,
          status: "completed",
          createdByUserId: session.sub,
        },
      });

      // 7. Process each line — FIFO consumption + sale lines
      for (const line of lines) {
        let costTotal: number | null = null;

        // Consume FIFO stock for products and parts
        if (line.lineType === "product" || line.lineType === "part") {
          const fifoResult = await consumeStockFifo(tx, {
            storeId,
            companyId: session.companyId,
            itemType: line.lineType,
            productId: line.lineType === "product" ? line.itemId : undefined,
            partId: line.lineType === "part" ? line.itemId : undefined,
            quantity: line.quantity,
            sourceType: "pos_sale",
            sourceId: sale.id,
            userId: session.sub,
          });
          costTotal = fifoResult.costTotal;
        }

        await tx.posSaleLine.create({
          data: {
            posSaleId: sale.id,
            lineType: line.lineType,
            productId: line.lineType === "product" ? line.itemId : null,
            partId: line.lineType === "part" ? line.itemId : null,
            serviceId: line.lineType === "service" ? line.itemId : null,
            description: line.name,
            quantity: line.quantity,
            unitPrice: line.unitPrice,
            totalPrice: line.unitPrice * line.quantity,
            costTotal,
          },
        });
      }

      // 8. Create CashMovement (only when cash was actually received)
      const cashForMovement = useDebt ? cashReceived : total;
      if (cashForMovement > 0) {
        await tx.cashMovement.create({
          data: {
            companyId: session.companyId,
            storeId,
            cashSessionId: cashSession.id,
            movementType: "pos_sale",
            direction: "in",
            amount: cashForMovement,
            sourceType: "pos_sale",
            sourceId: sale.id,
            note: `Vente ${saleNumber}`,
            createdByUserId: session.sub,
          },
        });
      }

      // 9. Update cash session expected amount
      if (cashForMovement > 0) {
        await tx.cashRegisterSession.update({
          where: { id: cashSession.id },
          data: { expectedCashAmount: { increment: cashForMovement } },
        });
      }

      // 10. Create customer debt entry if debt mode
      if (useDebt && debtAmount > 0 && customerId) {
        // Load customer with debtBalance for update
        const customerForDebt = await tx.customer.findUniqueOrThrow({
          where: { id: customerId },
          include: { debtBalance: true },
        });

        await tx.customerDebtTransaction.create({
          data: {
            customerId,
            storeId,
            type: "sale_debt",
            direction: "debit",
            amount: debtAmount,
            note: `Vente à crédit — ${saleNumber}`,
            createdBy: session.sub,
          },
        });

        if (customerForDebt.debtBalance) {
          await tx.customerDebtBalance.update({
            where: { customerId },
            data: {
              saleDebt: { increment: debtAmount },
              totalDebt: { increment: debtAmount },
            },
          });
        } else {
          await tx.customerDebtBalance.create({
            data: { customerId, saleDebt: debtAmount, totalDebt: debtAmount },
          });
        }
      }

      return {
        saleId: sale.id,
        saleNumber: sale.saleNumber,
        totalAmount: total,
        cashReceived,
        debtAmount,
        changeAmount,
        lineCount: lines.length,
      } satisfies SaleConfirmation;
    });

    revalidatePath("/dashboard/pos");
    revalidatePath("/dashboard/pos/cash-register");
    revalidatePath("/dashboard/inventory");
    revalidatePath("/dashboard");
    return result;
  } catch (e: unknown) {
    const message =
      e instanceof Error ? e.message : "Erreur lors de l'encaissement";
    console.error("checkoutCashSale error:", e);
    return { error: message };
  }
}
