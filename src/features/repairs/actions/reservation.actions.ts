"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";

type ActionError = { error: string };

// ─── Availability Helper ──────────────────────────────────────────────────────

export async function getPartAvailability(partId: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const part = await prisma.part.findFirst({
    where: { id: partId, storeId, isArchived: false },
    select: { id: true, name: true, sku: true, stockQty: true, sellingPrice: true },
  });
  if (!part) return null;

  const reserved = await prisma.repairTicketPart.aggregate({
    where: { partId, storeId, status: "reserved" },
    _sum: { quantity: true },
  });

  const reservedQty = reserved._sum.quantity || 0;
  const availableQty = Math.max(0, part.stockQty - reservedQty);

  return {
    ...part,
    sellingPrice: Number(part.sellingPrice),
    reservedQty,
    availableQty,
  };
}

// ─── Search parts for reservation ─────────────────────────────────────────────

export async function searchPartsForReservation(q: string) {
  const session = await getSession();
  if (!session) return [];

  const storeId = session.storeIds[0];
  if (!storeId) return [];

  const parts = await prisma.part.findMany({
    where: {
      storeId,
      isArchived: false,
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { sku: { contains: q, mode: "insensitive" } },
        ...(q.length > 2 ? [{ barcode: { contains: q, mode: "insensitive" as const } }] : []),
      ],
    },
    select: { id: true, name: true, sku: true, stockQty: true, sellingPrice: true },
    take: 15,
    orderBy: { name: "asc" },
  });

  // Batch-calculate reserved quantities
  const partIds = parts.map((p) => p.id);
  const reservations = await prisma.repairTicketPart.groupBy({
    by: ["partId"],
    where: { partId: { in: partIds }, storeId, status: "reserved" },
    _sum: { quantity: true },
  });

  const reservedMap = new Map(reservations.map((r) => [r.partId, r._sum.quantity || 0]));

  return parts.map((p) => ({
    ...p,
    sellingPrice: Number(p.sellingPrice),
    reservedQty: reservedMap.get(p.id) || 0,
    availableQty: Math.max(0, p.stockQty - (reservedMap.get(p.id) || 0)),
  }));
}

// ─── List reserved parts for ticket ───────────────────────────────────────────

export async function listReservedPartsForTicket(ticketId: string) {
  const session = await getSession();
  if (!session) return [];

  const storeId = session.storeIds[0];
  if (!storeId) return [];

  const isTechnician = session.role === "Technician";

  // Technician: verify they are assigned
  if (isTechnician) {
    const ticket = await prisma.repairTicket.findFirst({
      where: {
        id: ticketId,
        storeId,
        OR: [
          { assignedTechnicianId: session.sub },
          { technicians: { some: { userId: session.sub } } },
        ],
      },
      select: { id: true },
    });
    if (!ticket) return [];
  }

  return prisma.repairTicketPart.findMany({
    where: { repairTicketId: ticketId, storeId },
    include: {
      part: { select: { name: true, sku: true, sellingPrice: true } },
      reservedBy: { select: { name: true } },
      releasedBy: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}

// ─── Add reserved part to ticket ──────────────────────────────────────────────

// Statuses where reservation is blocked
const BLOCKED_STATUSES = ["completed", "not_repaired"];
// Statuses where reservation requires Manager/Admin
const RESTRICTED_STATUSES = ["ready_for_pickup"];

export async function addReservedPartToTicket(
  ticketId: string,
  partId: string,
  quantity: number,
  note?: string
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  if (!quantity || quantity < 1) return { error: "La quantité doit être supérieure à 0" };

  // Fetch ticket
  const ticket = await prisma.repairTicket.findFirst({
    where: { id: ticketId, storeId, companyId: session.companyId },
    select: { id: true, currentStatus: true, assignedTechnicianId: true, isArchived: true },
  });
  if (!ticket) return { error: "Ticket introuvable" };
  if (ticket.isArchived) return { error: "Ticket archivé" };

  // Block on completed/not_repaired
  if (BLOCKED_STATUSES.includes(ticket.currentStatus)) {
    return { error: "Impossible de réserver des pièces sur un ticket terminé ou non réparé" };
  }

  // Restrict ready_for_pickup to Manager/Admin
  if (RESTRICTED_STATUSES.includes(ticket.currentStatus)) {
    if (session.role !== "Admin" && session.role !== "Manager") {
      return { error: "Seuls les gérants peuvent réserver des pièces sur un ticket prêt à retirer" };
    }
  }

  // Technician: can only act on assigned tickets
  if (session.role === "Technician") {
    const isAssigned = ticket.assignedTechnicianId === session.sub ||
      (await prisma.repairTicketTechnician.findFirst({
        where: { repairTicketId: ticketId, userId: session.sub },
        select: { id: true },
      }));
    if (!isAssigned) {
      return { error: "Vous n'êtes pas assigné à ce ticket" };
    }
  }

  // Verify part
  const part = await prisma.part.findFirst({
    where: { id: partId, storeId, isArchived: false },
    select: { id: true, stockQty: true },
  });
  if (!part) return { error: "Pièce introuvable ou archivée" };

  // Transaction: check availability + create reservation
  try {
    const result = await prisma.$transaction(async (tx) => {
      // Re-check availability inside transaction to prevent races
      const reserved = await tx.repairTicketPart.aggregate({
        where: { partId, storeId, status: "reserved" },
        _sum: { quantity: true },
      });
      const reservedQty = reserved._sum.quantity || 0;
      const availableQty = part.stockQty - reservedQty;

      if (quantity > availableQty) {
        throw new Error(`Stock insuffisant. Disponible: ${availableQty}`);
      }

      const reservation = await tx.repairTicketPart.create({
        data: {
          companyId: session.companyId,
          storeId,
          repairTicketId: ticketId,
          partId,
          quantity,
          status: "reserved",
          reservedByUserId: session.sub,
          note: note || null,
        },
      });

      return reservation;
    });

    revalidatePath(`/dashboard/repairs/${ticketId}`);
    return { id: result.id };
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Erreur lors de la réservation";
    console.error("addReservedPartToTicket:", e);
    return { error: message };
  }
}

// ─── Release reserved part ────────────────────────────────────────────────────

export async function releaseReservedPart(
  reservationId: string,
  note?: string
): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique" };

  const reservation = await prisma.repairTicketPart.findFirst({
    where: { id: reservationId, storeId },
    include: { repairTicket: { select: { id: true, assignedTechnicianId: true } } },
  });

  if (!reservation) return { error: "Réservation introuvable" };
  if (reservation.status === "released") return { error: "Cette réservation a déjà été libérée" };
  if (reservation.status === "used") return { error: "Impossible de libérer une pièce déjà utilisée" };

  // Technician: can only release on assigned tickets
  if (session.role === "Technician") {
    const isAssigned = reservation.repairTicket.assignedTechnicianId === session.sub ||
      (await prisma.repairTicketTechnician.findFirst({
        where: { repairTicketId: reservation.repairTicketId, userId: session.sub },
        select: { id: true },
      }));
    if (!isAssigned) {
      return { error: "Vous n'êtes pas assigné à ce ticket" };
    }
  }

  try {
    await prisma.repairTicketPart.update({
      where: { id: reservationId },
      data: {
        status: "released",
        releasedByUserId: session.sub,
        releasedAt: new Date(),
        note: note ? `${reservation.note ? reservation.note + " | " : ""}Libéré: ${note}` : reservation.note,
      },
    });

    revalidatePath(`/dashboard/repairs/${reservation.repairTicketId}`);
    return { success: true };
  } catch (e) {
    console.error("releaseReservedPart:", e);
    return { error: "Erreur lors de la libération" };
  }
}
