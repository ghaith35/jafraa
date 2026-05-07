"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { generateEstimateNumber } from "@/lib/sequences/estimate-sequence";
import {
  createEstimateSchema,
  approveEstimateSchema,
  type CreateEstimateInput,
  type ApproveEstimateInput,
} from "../schemas/estimate.schema";

type ActionError = { error: string };

const ESTIMATE_SAFE_SELECT = {
  id: true,
  companyId: true,
  storeId: true,
  repairTicketId: true,
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
  createdByUserId: true,
  createdAt: true,
  updatedAt: true,
} as const;

// ─── List / Get ───────────────────────────────────────────────────────────────

export async function getEstimatesForTicket(ticketId: string) {
  const session = await getSession();
  if (!session) return [];

  const storeId = session.storeIds[0];
  if (!storeId) return [];

  const estimates = await prisma.estimate.findMany({
    where: { repairTicketId: ticketId, storeId, companyId: session.companyId },
    select: {
      ...ESTIMATE_SAFE_SELECT,
      lines: { orderBy: { sortOrder: "asc" } },
      createdBy: { select: { name: true } },
      approvalLogs: {
        include: { confirmedBy: { select: { name: true } } },
        orderBy: { createdAt: "desc" },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  // Do not query publicApprovalToken/publicApprovalExpiresAt here. Some existing
  // databases do not have the optional public-approval columns yet, and default
  // Prisma reads would crash when opening the repair detail page.
  return estimates.map((estimate) => ({
    ...estimate,
    publicApprovalToken: null,
    publicApprovalExpiresAt: null,
  }));
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createEstimate(
  data: CreateEstimateInput,
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const store = await prisma.store.findFirst({
    where: { id: storeId },
    select: { prefix: true },
  });
  if (!store) return { error: "Boutique introuvable" };

  const parsed = createEstimateSchema.safeParse(data);
  if (!parsed.success) return { error: "Données de devis invalides" };

  const d = parsed.data;

  const ticket = await prisma.repairTicket.findFirst({
    where: { id: d.repairTicketId, storeId },
    select: { id: true },
  });
  if (!ticket) return { error: "Ticket introuvable" };

  let subtotalAmount = 0;
  const processedLines = d.lines.map((line, index) => {
    const totalPrice = line.quantity * line.unitPrice;
    subtotalAmount += totalPrice;
    return { ...line, totalPrice, sortOrder: index };
  });

  const discountAmount = d.discountAmount || 0;
  if (discountAmount > subtotalAmount)
    return { error: "La remise ne peut pas dépasser le sous-total" };
  const totalAmount = subtotalAmount - discountAmount;

  try {
    const result = await prisma.$transaction(async (tx) => {
      const estimateNumber = await generateEstimateNumber(
        tx,
        storeId,
        store.prefix,
      );

      return tx.estimate.create({
        data: {
          companyId: session.companyId,
          storeId,
          repairTicketId: d.repairTicketId,
          estimateNumber,
          status: "draft",
          subtotalAmount,
          discountAmount,
          totalAmount,
          customerNote: d.customerNote || null,
          internalNote: d.internalNote || null,
          createdByUserId: session.sub,
          lines: {
            create: processedLines.map((line) => ({
              lineType: line.lineType,
              description: line.description,
              productId: line.productId || null,
              partId: line.partId || null,
              serviceId: line.serviceId || null,
              quantity: line.quantity,
              unitPrice: line.unitPrice,
              totalPrice: line.totalPrice,
              sortOrder: line.sortOrder,
            })),
          },
        },
        select: { id: true },
      });
    });

    revalidatePath(`/dashboard/repairs/${d.repairTicketId}`);
    return { id: result.id };
  } catch (error) {
    console.error("createEstimate error:", error);
    return { error: "Erreur lors de la création du devis" };
  }
}

// ─── Mark Sent ────────────────────────────────────────────────────────────────

export async function markEstimateSent(
  estimateId: string,
): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique" };

  const estimate = await prisma.estimate.findFirst({
    where: { id: estimateId, storeId },
    select: {
      id: true,
      status: true,
      repairTicketId: true,
      repairTicket: { select: { currentStatus: true } },
    },
  });

  if (!estimate) return { error: "Devis introuvable" };
  if (estimate.status !== "draft")
    return { error: "Seul un devis brouillon peut être envoyé" };

  try {
    await prisma.$transaction(async (tx) => {
      await tx.estimate.updateMany({
        where: { id: estimateId, storeId },
        data: { status: "sent", sentAt: new Date() },
      });

      if (
        estimate.repairTicket.currentStatus === "received" ||
        estimate.repairTicket.currentStatus === "in_diagnosis"
      ) {
        await tx.repairTicket.update({
          where: { id: estimate.repairTicketId },
          data: { currentStatus: "waiting_customer_approval" },
        });

        await tx.repairStatusHistory.create({
          data: {
            repairTicketId: estimate.repairTicketId,
            oldStatus: estimate.repairTicket.currentStatus,
            newStatus: "waiting_customer_approval",
            changedByUserId: session.sub,
            note: "Devis envoyé au client, en attente d'approbation.",
          },
        });
      }
    });

    revalidatePath(`/dashboard/repairs/${estimate.repairTicketId}`);
    return { success: true };
  } catch (error) {
    console.error("markEstimateSent error:", error);
    return { error: "Erreur lors de l'envoi" };
  }
}

// ─── Accept / Reject ──────────────────────────────────────────────────────────

export async function approveEstimate(
  data: ApproveEstimateInput,
): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique" };

  const parsed = approveEstimateSchema.safeParse(data);
  if (!parsed.success) return { error: "Données d'approbation invalides" };
  const d = parsed.data;

  const estimate = await prisma.estimate.findFirst({
    where: { id: d.estimateId, storeId },
    select: {
      id: true,
      status: true,
      repairTicketId: true,
      repairTicket: { select: { currentStatus: true } },
    },
  });

  if (!estimate) return { error: "Devis introuvable" };
  if (estimate.status !== "sent")
    return { error: "Le devis doit être envoyé avant approbation" };

  try {
    await prisma.$transaction(async (tx) => {
      await tx.estimate.updateMany({
        where: { id: estimate.id, storeId },
        data: {
          status: d.decision,
          acceptedAt: d.decision === "accepted" ? new Date() : null,
          rejectedAt: d.decision === "rejected" ? new Date() : null,
        },
      });

      await tx.customerApprovalLog.create({
        data: {
          companyId: session.companyId,
          storeId,
          repairTicketId: estimate.repairTicketId,
          estimateId: estimate.id,
          decision: d.decision,
          confirmationMethod: d.confirmationMethod,
          confirmedByUserId: session.sub,
          note: d.note || null,
        },
      });

      const newTicketStatus =
        d.decision === "accepted" ? "in_repair" : "not_repaired";
      await tx.repairTicket.update({
        where: { id: estimate.repairTicketId },
        data: { currentStatus: newTicketStatus },
      });

      await tx.repairStatusHistory.create({
        data: {
          repairTicketId: estimate.repairTicketId,
          oldStatus: estimate.repairTicket.currentStatus,
          newStatus: newTicketStatus,
          changedByUserId: session.sub,
          note: `Devis ${d.decision === "accepted" ? "accepté" : "refusé"} par le client.`,
        },
      });
    });

    revalidatePath(`/dashboard/repairs/${estimate.repairTicketId}`);
    return { success: true };
  } catch (error) {
    console.error("approveEstimate error:", error);
    return { error: "Erreur lors de l'enregistrement de la décision" };
  }
}

// ─── Reopen to Draft ──────────────────────────────────────────────────────────

export async function reopenEstimateToDraft(
  estimateId: string,
): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  if (session.role !== "Admin" && session.role !== "Manager") {
    return {
      error: "Permission refusée : Seuls les gérants peuvent rouvrir un devis.",
    };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique" };

  const estimate = await prisma.estimate.findFirst({
    where: { id: estimateId, storeId },
    select: { id: true, status: true, repairTicketId: true },
  });

  if (!estimate) return { error: "Devis introuvable" };
  if (estimate.status !== "accepted" && estimate.status !== "rejected") {
    return { error: "Seul un devis accepté ou refusé peut être rouvert" };
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.estimate.updateMany({
        where: { id: estimate.id, storeId },
        data: {
          status: "draft",
          acceptedAt: null,
          rejectedAt: null,
          sentAt: null,
        },
      });

      const ticket = await tx.repairTicket.findUnique({
        where: { id: estimate.repairTicketId },
        select: { currentStatus: true },
      });

      if (
        ticket?.currentStatus === "in_repair" ||
        ticket?.currentStatus === "not_repaired"
      ) {
        await tx.repairTicket.update({
          where: { id: estimate.repairTicketId },
          data: { currentStatus: "in_diagnosis" },
        });

        await tx.repairStatusHistory.create({
          data: {
            repairTicketId: estimate.repairTicketId,
            oldStatus: ticket.currentStatus,
            newStatus: "in_diagnosis",
            changedByUserId: session.sub,
            note: "Devis rouvert en brouillon par un administrateur.",
          },
        });
      }
    });

    revalidatePath(`/dashboard/repairs/${estimate.repairTicketId}`);
    return { success: true };
  } catch (error) {
    console.error("reopenEstimate error:", error);
    return { error: "Erreur lors de la réouverture" };
  }
}

// ─── Public Customer Approval ────────────────────────────────────────────────

export async function getPublicEstimateByToken(token: string) {
  if (!token || token.length < 20) return null;

  try {
    const estimate = await prisma.estimate.findUnique({
      where: { publicApprovalToken: token },
      include: {
        lines: { orderBy: { sortOrder: "asc" } },
        store: true,
        repairTicket: {
          include: {
            customer: {
              select: {
                name: true,
                phones: { select: { phoneNumber: true }, take: 1 },
              },
            },
            deviceBrand: { select: { name: true } },
            deviceFamily: { select: { name: true } },
          },
        },
      },
    });

    if (!estimate) return null;
    if (
      estimate.publicApprovalExpiresAt &&
      estimate.publicApprovalExpiresAt < new Date()
    )
      return null;
    return estimate;
  } catch (error) {
    console.error("getPublicEstimateByToken:", error);
    return null;
  }
}

export async function submitPublicEstimateDecision(input: {
  token: string;
  decision: "accepted" | "rejected";
  note?: string;
  userAgent?: string;
  ip?: string;
}): Promise<ActionError | { success: true }> {
  try {
    const estimate = await prisma.estimate.findUnique({
      where: { publicApprovalToken: input.token },
      include: { repairTicket: { select: { currentStatus: true } } },
    });

    if (!estimate) return { error: "Devis introuvable" };
    if (
      estimate.publicApprovalExpiresAt &&
      estimate.publicApprovalExpiresAt < new Date()
    )
      return { error: "Ce lien de validation a expiré" };
    if (estimate.status !== "sent")
      return { error: "Ce devis a déjà été traité" };

    await prisma.$transaction(async (tx) => {
      await tx.estimate.update({
        where: { id: estimate.id },
        data: {
          status: input.decision,
          acceptedAt: input.decision === "accepted" ? new Date() : null,
          rejectedAt: input.decision === "rejected" ? new Date() : null,
          publicDecisionIp: input.ip || null,
          publicDecisionUserAgent: input.userAgent?.slice(0, 300) || null,
        },
      });

      await tx.customerApprovalLog.create({
        data: {
          companyId: estimate.companyId,
          storeId: estimate.storeId,
          repairTicketId: estimate.repairTicketId,
          estimateId: estimate.id,
          decision: input.decision,
          confirmationMethod: "other",
          confirmedByUserId: estimate.createdByUserId,
          note: input.note || "Décision client depuis le lien public.",
        },
      });

      const newTicketStatus =
        input.decision === "accepted" ? "in_repair" : "not_repaired";
      await tx.repairTicket.update({
        where: { id: estimate.repairTicketId },
        data: { currentStatus: newTicketStatus },
      });

      await tx.repairStatusHistory.create({
        data: {
          repairTicketId: estimate.repairTicketId,
          oldStatus: estimate.repairTicket.currentStatus,
          newStatus: newTicketStatus,
          changedByUserId: estimate.createdByUserId,
          note:
            input.decision === "accepted"
              ? "Devis accepté par le client via lien public."
              : "Devis refusé par le client via lien public.",
        },
      });
    });

    revalidatePath(`/dashboard/repairs/${estimate.repairTicketId}`);
    return { success: true };
  } catch (error) {
    console.error("submitPublicEstimateDecision:", error);
    return {
      error:
        "Le lien public de devis n'est pas disponible avec la base de données actuelle",
    };
  }
}
