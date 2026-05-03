"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { generateTicketNumber } from "@/lib/sequences/ticket-sequence";
import {
  createRepairTicketSchema,
  updateRepairStatusSchema,
  type CreateRepairTicketInput,
  type UpdateRepairStatusInput,
} from "../schemas/repair.schema";
import type { RepairStatus } from "@prisma/client";

type ActionError = { error: string };

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listRepairTickets(opts?: {
  storeId?: string;
  q?: string;
  status?: RepairStatus;
}) {
  const session = await getSession();
  if (!session) return [];

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return [];

  // Technician sees only assigned tickets (unless they created it and it's not assigned yet)
  // For simplicity: Technician only sees assigned tickets.
  const isTechnician = session.role === "Technician";

  return prisma.repairTicket.findMany({
    where: {
      storeId,
      ...(isTechnician ? { assignedTechnicianId: session.sub } : {}),
      ...(opts?.status ? { currentStatus: opts.status } : {}),
      ...(opts?.q
        ? {
            OR: [
              { ticketNumber: { contains: opts.q, mode: "insensitive" } },
              { customer: { name: { contains: opts.q, mode: "insensitive" } } },
              { customer: { phones: { some: { phoneNumber: { contains: opts.q } } } } },
            ],
          }
        : {}),
    },
    include: {
      customer: { select: { name: true, phones: { select: { phoneNumber: true } } } },
      customerDevice: { select: { customBrand: true, customModel: true, deviceTypeName: true } },
      deviceCategory: { select: { nameFr: true } },
      deviceBrand: { select: { name: true } },
      deviceFamily: { select: { name: true } },
      assignedTechnician: { select: { name: true } },
      problems: { select: { problemText: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getRepairTicket(id: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const isTechnician = session.role === "Technician";

  return prisma.repairTicket.findFirst({
    where: {
      id,
      storeId,
      ...(isTechnician ? { assignedTechnicianId: session.sub } : {}),
    },
    include: {
      customer: { select: { name: true, phones: { select: { phoneNumber: true } }, address: true, wilayaCode: true } },
      customerDevice: true,
      deviceCategory: true,
      deviceBrand: true,
      deviceFamily: true,
      assignedTechnician: { select: { id: true, name: true } },
      createdBy: { select: { name: true } },
      problems: true,
      statusHistory: {
        include: { changedBy: { select: { name: true } } },
        orderBy: { createdAt: "desc" },
      },
    },
  });
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createRepairTicket(
  data: CreateRepairTicketInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const store = await prisma.store.findFirst({ where: { id: storeId }, select: { prefix: true } });
  if (!store) return { error: "Boutique introuvable" };

  const parsed = createRepairTicketSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;

  // Technicians auto-assign to themselves if they create it
  let assignedTechnicianId = d.assignedTechnicianId || null;
  if (session.role === "Technician") {
    assignedTechnicianId = session.sub;
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const ticketNumber = await generateTicketNumber(tx, storeId, store.prefix);

      const ticket = await tx.repairTicket.create({
        data: {
          companyId: session.companyId,
          storeId,
          ticketNumber,
          customerId: d.customerId,
          customerDeviceId: d.customerDeviceId || null,
          deviceCategoryId: d.deviceCategoryId || null,
          deviceBrandId: d.deviceBrandId || null,
          deviceFamilyId: d.deviceFamilyId || null,
          customDeviceBrand: d.customDeviceBrand || null,
          customDeviceModel: d.customDeviceModel || null,
          deviceColor: d.deviceColor || null,
          deviceStorageRam: d.deviceStorageRam || null,
          imeiSerial: d.imeiSerial || null,
          priority: d.priority,
          assignedTechnicianId,
          diagnosisNote: d.diagnosisNote || null,
          internalNotes: d.internalNotes || null,
          customerNotes: d.customerNotes || null,
          estimatedPrice: d.estimatedPrice ?? null,
          warrantyDays: d.warrantyDays ?? null,
          dueAt: d.dueAt ? new Date(d.dueAt) : null,
          createdByUserId: session.sub,
          currentStatus: "received",
          problems: {
            create: d.problems.map((p) => ({
              problemText: p.problemText,
            })),
          },
        },
      });

      // Initial status history
      await tx.repairStatusHistory.create({
        data: {
          repairTicketId: ticket.id,
          oldStatus: null,
          newStatus: "received",
          changedByUserId: session.sub,
          note: "Création du ticket",
        },
      });

      return ticket;
    });

    revalidatePath("/dashboard/repairs");
    return { id: result.id };
  } catch (e) {
    console.error("createRepairTicket:", e);
    return { error: "Erreur lors de la création du ticket" };
  }
}

// ─── Change Status ────────────────────────────────────────────────────────────

export async function changeRepairTicketStatus(
  id: string,
  data: UpdateRepairStatusInput
): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const isTechnician = session.role === "Technician";

  const ticket = await prisma.repairTicket.findFirst({
    where: {
      id,
      storeId,
      ...(isTechnician ? { assignedTechnicianId: session.sub } : {}),
    },
    select: { id: true, currentStatus: true },
  });

  if (!ticket) return { error: "Ticket introuvable ou non autorisé" };

  const parsed = updateRepairStatusSchema.safeParse(data);
  if (!parsed.success) {
    return { error: "Statut invalide" };
  }

  const { newStatus, note } = parsed.data;

  if (ticket.currentStatus === newStatus) {
    return { success: true }; // No change
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.repairTicket.update({
        where: { id },
        data: { currentStatus: newStatus },
      });

      await tx.repairStatusHistory.create({
        data: {
          repairTicketId: id,
          oldStatus: ticket.currentStatus,
          newStatus,
          changedByUserId: session.sub,
          note: note || null,
        },
      });
    });

    revalidatePath("/dashboard/repairs");
    revalidatePath(`/dashboard/repairs/${id}`);
    return { success: true };
  } catch (e) {
    console.error("changeRepairTicketStatus:", e);
    return { error: "Erreur lors du changement de statut" };
  }
}

// ─── Assign Technician ────────────────────────────────────────────────────────

export async function assignTechnician(
  id: string,
  technicianId: string | null
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  // Only Admin, Manager, Cashier can assign technicians
  if (session.role === "Technician") {
    return { error: "Action non autorisée" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  try {
    await prisma.repairTicket.update({
      where: { id, storeId },
      data: { assignedTechnicianId: technicianId },
    });
    revalidatePath("/dashboard/repairs");
    revalidatePath(`/dashboard/repairs/${id}`);
  } catch (e) {
    console.error("assignTechnician:", e);
    return { error: "Erreur lors de l'assignation" };
  }
}
