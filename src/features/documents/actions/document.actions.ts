"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";

/**
 * Fetch a POS Sale with all related data for printing.
 */
export async function getPosSaleDocument(saleId: string) {
  const session = await getSession();
  if (!session) throw new Error("Non autorisé");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("Aucune boutique assignée");

  const sale = await prisma.posSale.findFirst({
    where: {
      id: saleId,
      storeId,
      companyId: session.companyId,
    },
    include: {
      store: true,
      customer: true,
      createdBy: { select: { name: true } },
      lines: {
        include: {
          product: { select: { name: true, sku: true } },
          part: { select: { name: true, sku: true } },
          service: { select: { name: true, sku: true } },
        },
      },
      refunds: {
        where: { status: "completed" },
        select: { totalRefundAmount: true },
      },
    },
  });

  if (!sale) throw new Error("Vente introuvable");

  return sale;
}

/**
 * Fetch a Repair Invoice with all related data for printing.
 */
export async function getRepairInvoiceDocument(invoiceId: string) {
  const session = await getSession();
  if (!session) throw new Error("Non autorisé");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("Aucune boutique assignée");

  const invoice = await prisma.repairInvoice.findFirst({
    where: {
      id: invoiceId,
      storeId,
      companyId: session.companyId,
    },
    include: {
      store: true,
      customer: true,
      createdBy: { select: { name: true } },
      lines: true,
      repairTicket: {
        include: {
          deviceCategory: true,
          deviceBrand: true,
          deviceFamily: true,
          assignedTechnician: { select: { name: true } },
        },
      },
    },
  });

  if (!invoice) throw new Error("Facture introuvable");

  return invoice;
}

/**
 * Fetch a Repair Ticket for Intake receipt.
 */
export async function getRepairTicketDocument(ticketId: string) {
  const session = await getSession();
  if (!session) throw new Error("Non autorisé");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("Aucune boutique assignée");

  const ticket = await prisma.repairTicket.findFirst({
    where: {
      id: ticketId,
      storeId,
      companyId: session.companyId,
    },
    include: {
      store: true,
      customer: true,
      deviceCategory: true,
      deviceBrand: true,
      deviceFamily: true,
      problems: true,
      createdBy: { select: { name: true } },
    },
  });

  if (!ticket) throw new Error("Ticket introuvable");

  return ticket;
}

/**
 * Fetch an Estimate for printing.
 */
export async function getEstimateDocument(estimateId: string) {
  const session = await getSession();
  if (!session) throw new Error("Non autorisé");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("Aucune boutique assignée");

  const estimate = await prisma.estimate.findFirst({
    where: {
      id: estimateId,
      storeId,
      companyId: session.companyId,
    },
    select: {
      id: true,
      estimateNumber: true,
      status: true,
      subtotalAmount: true,
      discountAmount: true,
      totalAmount: true,
      customerNote: true,
      internalNote: true,
      sentAt: true,
      acceptedAt: true,
      rejectedAt: true,
      createdAt: true,
      updatedAt: true,
      store: true,
      createdBy: { select: { name: true } },
      lines: true,
      repairTicket: {
        include: {
          customer: true,
          deviceCategory: true,
          deviceBrand: true,
          deviceFamily: true,
        },
      },
    },
  });

  if (!estimate) throw new Error("Devis introuvable");

  return estimate;
}

/**
 * Fetch a Refund for printing.
 */
export async function getRefundDocument(refundId: string) {
  const session = await getSession();
  if (!session) throw new Error("Non autorisé");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("Aucune boutique assignée");

  const refund = await prisma.refund.findFirst({
    where: {
      id: refundId,
      storeId,
      companyId: session.companyId,
    },
    include: {
      store: true,
      createdBy: { select: { name: true } },
      lines: true,
      posSale: { select: { saleNumber: true } },
      repairInvoice: { select: { invoiceNumber: true } },
    },
  });

  if (!refund) throw new Error("Remboursement introuvable");

  return refund;
}

/**
 * Fetch Cash Session for Z-Report.
 */
export async function getCashSessionDocument(sessionId: string) {
  const session = await getSession();
  if (!session) throw new Error("Non autorisé");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("Aucune boutique assignée");

  const cashSession = await prisma.cashRegisterSession.findFirst({
    where: {
      id: sessionId,
      storeId,
      companyId: session.companyId,
    },
    include: {
      store: true,
      openedBy: { select: { name: true } },
      closedBy: { select: { name: true } },
      cashMovements: {
        include: {
          createdBy: { select: { name: true } },
        },
      },
      _count: {
        select: { posSales: true }
      }
    },
  });

  if (!cashSession) throw new Error("Session introuvable");

  // Map _count to posSalesCount for the UI
  return {
    ...cashSession,
    posSalesCount: cashSession._count.posSales
  };
}

/**
 * Fetch Customer Debt Statement data.
 */
export async function getCustomerDebtStatement(customerId: string) {
  const session = await getSession();
  if (!session) throw new Error("Non autorisé");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("Aucune boutique assignée");

  const store = await prisma.store.findUnique({ where: { id: storeId } });
  if (!store) throw new Error("Boutique introuvable");

  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
      companyId: session.companyId,
    },
    include: {
      debtBalance: true,
      debtTransactions: {
        where: { storeId },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!customer) throw new Error("Client introuvable");

  return { ...customer, store };
}
