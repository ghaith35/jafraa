"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { generateInvoiceNumber } from "@/lib/sequences/invoice-sequence";

type ActionError = { error: string };

// ─── Types ────────────────────────────────────────────────────────────────────

export interface InvoiceLine {
  id: string;
  lineType: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface InvoiceSummary {
  id: string;
  invoiceNumber: string;
  status: string;
  subtotalAmount: number;
  discountAmount: number;
  totalAmount: number;
  paidAmount: number;
  debtAmount: number;
  refundedAmount: number;
  lines: InvoiceLine[];
  createdAt: Date;
}

export interface PaymentConfirmation {
  invoiceNumber: string;
  cashReceived: number;
  debtCreated: number;
  changeAmount: number;
  invoiceStatus: string;
  ticketCompleted: boolean;
}

// ─── Get invoice for a repair ticket ─────────────────────────────────────────

export async function getRepairInvoice(
  ticketId: string
): Promise<InvoiceSummary | null | ActionError> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const invoice = await prisma.repairInvoice.findFirst({
    where: {
      repairTicketId: ticketId,
      storeId,
      status: { not: "cancelled" },
    },
    include: { lines: { orderBy: { createdAt: "asc" } } },
  });

  if (!invoice) return null;

  return {
    id: invoice.id,
    invoiceNumber: invoice.invoiceNumber,
    status: invoice.status,
    subtotalAmount: Number(invoice.subtotalAmount),
    discountAmount: Number(invoice.discountAmount),
    totalAmount: Number(invoice.totalAmount),
    paidAmount: Number(invoice.paidAmount),
    debtAmount: Number(invoice.debtAmount),
    refundedAmount: Number(invoice.refundedAmount),
    createdAt: invoice.createdAt,
    lines: invoice.lines.map((l) => ({
      id: l.id,
      lineType: l.lineType,
      description: l.description,
      quantity: Number(l.quantity),
      unitPrice: Number(l.unitPrice),
      totalPrice: Number(l.totalPrice),
    })),
  };
}

// ─── Generate repair invoice ──────────────────────────────────────────────────

export async function generateRepairInvoice(
  ticketId: string
): Promise<ActionError | { invoiceId: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "tickets:view")) return { error: "Accès refusé" };
  if (session.role === "Technician") return { error: "Les techniciens ne peuvent pas générer de factures" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Load ticket with estimate and accepted estimate
      const ticket = await tx.repairTicket.findFirst({
        where: { id: ticketId, storeId, isArchived: false },
        include: {
          customer: { select: { id: true, name: true, customerType: true } },
          estimates: {
            where: { status: "accepted" },
            include: { lines: { orderBy: { sortOrder: "asc" } } },
            orderBy: { createdAt: "desc" },
            take: 1,
          },
        },
      });

      if (!ticket) throw new Error("Ticket introuvable");

      // 2. Verify no active invoice already exists
      const existing = await tx.repairInvoice.findFirst({
        where: { repairTicketId: ticketId, status: { not: "cancelled" } },
      });
      if (existing) throw new Error("Une facture active existe déjà pour ce ticket");

      // 3. Get store prefix
      const store = await tx.store.findUniqueOrThrow({
        where: { id: storeId },
        select: { prefix: true },
      });

      // 4. Build invoice lines
      const invoiceLines: {
        lineType: string;
        description: string;
        quantity: number;
        unitPrice: number;
        totalPrice: number;
      }[] = [];

      const acceptedEstimate = ticket.estimates[0];

      if (acceptedEstimate && acceptedEstimate.lines.length > 0) {
        // Use accepted estimate lines
        for (const line of acceptedEstimate.lines) {
          invoiceLines.push({
            lineType: line.lineType,
            description: line.description,
            quantity: line.quantity,
            unitPrice: line.unitPrice,
            totalPrice: line.totalPrice,
          });
        }
      } else {
        // Fallback: single labor line from finalPrice or estimatedPrice
        const price = ticket.finalPrice ?? ticket.estimatedPrice ?? 0;
        invoiceLines.push({
          lineType: "labor",
          description: "Main d'œuvre réparation",
          quantity: 1,
          unitPrice: Number(price),
          totalPrice: Number(price),
        });
      }

      // 5. Calculate totals
      const subtotal = invoiceLines.reduce((s, l) => s + l.totalPrice, 0);
      const discount = acceptedEstimate ? (acceptedEstimate.discountAmount ?? 0) : 0;
      const total = Math.max(0, subtotal - discount);

      // 6. Generate invoice number
      const invoiceNumber = await generateInvoiceNumber(tx, storeId, store.prefix);

      // 7. Create invoice + lines
      const invoice = await tx.repairInvoice.create({
        data: {
          companyId: session.companyId,
          storeId,
          repairTicketId: ticketId,
          invoiceNumber,
          customerId: ticket.customerId,
          subtotalAmount: subtotal,
          discountAmount: discount,
          totalAmount: total,
          paidAmount: 0,
          debtAmount: 0,
          status: "unpaid",
          createdByUserId: session.sub,
          lines: {
            create: invoiceLines.map((l) => ({
              lineType: l.lineType,
              description: l.description,
              quantity: l.quantity,
              unitPrice: l.unitPrice,
              totalPrice: l.totalPrice,
            })),
          },
        },
      });

      return { invoiceId: invoice.id };
    });

    revalidatePath(`/dashboard/repairs/${ticketId}`);
    return result;
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Erreur lors de la génération de la facture" };
  }
}

// ─── Pay repair invoice ───────────────────────────────────────────────────────

export async function payRepairInvoice(
  invoiceId: string,
  cashReceivedAmount: number
): Promise<ActionError | PaymentConfirmation> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "payments:manage")) return { error: "Accès refusé" };
  if (session.role === "Technician") return { error: "Les techniciens ne peuvent pas encaisser" };

  if (cashReceivedAmount < 0) return { error: "Le montant reçu ne peut pas être négatif" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  try {
    let ticketIdForRevalidate = "";
    const result = await prisma.$transaction(async (tx) => {
      // 1. Load invoice + customer
      const invoice = await tx.repairInvoice.findFirst({
        where: { id: invoiceId, storeId },
        include: {
          customer: {
            include: { debtBalance: true },
          },
        },
      });
      if (!invoice) throw new Error("Facture introuvable");
      if (invoice.status === "paid") throw new Error("Cette facture est déjà réglée");
      if (invoice.status === "cancelled") throw new Error("Cette facture a été annulée");

      // 2. Calculate amounts
      const totalAmount = Number(invoice.totalAmount);
      const alreadyPaid = Number(invoice.paidAmount);
      const remainingBefore = totalAmount - alreadyPaid;

      if (remainingBefore <= 0) throw new Error("Cette facture est déjà entièrement réglée");

      // Cash to apply must not exceed remaining
      const cashToApply = Math.min(cashReceivedAmount, remainingBefore);
      const newPaidAmount = alreadyPaid + cashToApply;
      const debtRemaining = totalAmount - newPaidAmount;

      // 3. Walk-in cannot have debt
      if (debtRemaining > 0 && invoice.customer.customerType === "walkin") {
        throw new Error("Les clients de passage doivent payer la totalité en espèces");
      }

      // 4. Require open cash session if cash is received
      let cashSession = null;
      if (cashToApply > 0) {
        cashSession = await tx.cashRegisterSession.findFirst({
          where: { storeId, status: "opened" },
        });
        if (!cashSession) {
          throw new Error("Aucune session de caisse ouverte. Veuillez ouvrir la caisse avant d'encaisser.");
        }
      }

      // 5. Create CashMovement for cash portion
      if (cashToApply > 0 && cashSession) {
        await tx.cashMovement.create({
          data: {
            companyId: session.companyId,
            storeId,
            cashSessionId: cashSession.id,
            movementType: "repair_payment",
            direction: "in",
            amount: cashToApply,
            sourceType: "repair_invoice",
            sourceId: invoice.id,
            note: `Paiement facture ${invoice.invoiceNumber}`,
            createdByUserId: session.sub,
          },
        });

        // Update cash session expected amount
        await tx.cashRegisterSession.update({
          where: { id: cashSession.id },
          data: { expectedCashAmount: { increment: cashToApply } },
        });
      }

      // 6. Debt Ledger Sync
      if (debtRemaining > 0 && Number(invoice.debtAmount) === 0) {
        // A. INITIAL DEBT RECORDING: Create debt entry for the unpaid remainder
        await tx.customerDebtTransaction.create({
          data: {
            customerId: invoice.customerId,
            storeId,
            type: "repair_debt",
            direction: "debit",
            amount: debtRemaining,
            note: `Dette réparation — Facture ${invoice.invoiceNumber}`,
            createdBy: session.sub,
          },
        });

        // Update denormalized balance
        if (invoice.customer.debtBalance) {
          await tx.customerDebtBalance.update({
            where: { customerId: invoice.customerId },
            data: {
              repairDebt: { increment: debtRemaining },
              totalDebt: { increment: debtRemaining },
            },
          });
        } else {
          await tx.customerDebtBalance.create({
            data: {
              customerId: invoice.customerId,
              repairDebt: debtRemaining,
              totalDebt: debtRemaining,
            },
          });
        }
      } else if (Number(invoice.debtAmount) > 0 && cashToApply > 0) {
        // B. DEBT PAYMENT: If invoice already had debt, this cash payment reduces that debt
        const reductionAmount = Math.min(cashToApply, Number(invoice.debtAmount));
        
        await tx.customerDebtTransaction.create({
          data: {
            customerId: invoice.customerId,
            storeId,
            type: "payment", // Crediting the debt
            direction: "credit",
            amount: reductionAmount,
            note: `Paiement sur facture à crédit ${invoice.invoiceNumber}`,
            createdBy: session.sub,
          },
        });

        if (invoice.customer.debtBalance) {
          await tx.customerDebtBalance.update({
            where: { customerId: invoice.customerId },
            data: {
              repairDebt: { decrement: reductionAmount },
              totalDebt: { decrement: reductionAmount },
            },
          });
        }
      }

      // 7. Determine new invoice status
      const newStatus =
        debtRemaining > 0 ? "partial" : "paid";

      // 8. Update invoice
      await tx.repairInvoice.update({
        where: { id: invoiceId },
        data: {
          paidAmount: newPaidAmount,
          debtAmount: debtRemaining,
          status: newStatus,
        },
      });

      // 9. Transition ticket to completed
      ticketIdForRevalidate = invoice.repairTicketId;
      await tx.repairTicket.update({
        where: { id: invoice.repairTicketId },
        data: { currentStatus: "completed" },
      });

      await tx.repairStatusHistory.create({
        data: {
          repairTicketId: invoice.repairTicketId,
          oldStatus: "ready_for_pickup",
          newStatus: "completed",
          changedByUserId: session.sub,
          note: debtRemaining > 0
            ? `Facture partiellement réglée. Dette enregistrée: ${debtRemaining.toFixed(2)} DZD`
            : `Facture ${invoice.invoiceNumber} réglée intégralement`,
        },
      });

      return {
        invoiceNumber: invoice.invoiceNumber,
        cashReceived: cashToApply,
        debtCreated: debtRemaining,
        changeAmount: 0,
        invoiceStatus: newStatus,
        ticketCompleted: true,
      } satisfies PaymentConfirmation;
    });

    revalidatePath(`/dashboard/repairs/${ticketIdForRevalidate}`);
    revalidatePath("/dashboard/customers");
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/pos/cash-register");
    return result;
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Erreur lors du paiement" };
  }
}
