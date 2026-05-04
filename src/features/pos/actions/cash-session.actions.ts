"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";

type ActionError = { error: string };

// ─── Get current cash session ────────────────────────────────────────────────

export async function getCurrentCashSession() {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  return prisma.cashRegisterSession.findFirst({
    where: {
      storeId,
      status: "opened",
    },
    include: {
      openedBy: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}

// ─── List cash session history ───────────────────────────────────────────────

export async function listCashSessions() {
  const session = await getSession();
  if (!session) return [];

  const storeId = session.storeIds[0];
  if (!storeId) return [];

  return prisma.cashRegisterSession.findMany({
    where: {
      storeId,
    },
    include: {
      openedBy: { select: { name: true } },
      closedBy: { select: { name: true } },
      forceClosedBy: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });
}

// ─── Open cash session ───────────────────────────────────────────────────────

export async function openCashSession(
  openingCashAmount: number,
  notes?: string
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  if (session.role === "Technician") {
    return { error: "Les techniciens ne peuvent pas ouvrir la caisse" };
  }

  if (openingCashAmount < 0) {
    return { error: "Le montant d'ouverture ne peut pas être négatif" };
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      // Check for an existing open session
      const existingSession = await tx.cashRegisterSession.findFirst({
        where: { storeId, status: "opened" },
      });

      if (existingSession) {
        throw new Error("Une session de caisse est déjà ouverte pour cette boutique");
      }

      // Create the new session
      const newSession = await tx.cashRegisterSession.create({
        data: {
          companyId: session.companyId,
          storeId,
          openedByUserId: session.sub,
          status: "opened",
          openingCashAmount,
          expectedCashAmount: openingCashAmount, // For MVP, no payments yet
          notes: notes || null,
        },
      });

      return newSession;
    });

    revalidatePath("/dashboard/pos");
    revalidatePath("/dashboard/pos/cash-register");
    return { id: result.id };
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Erreur lors de l'ouverture de la caisse";
    console.error("openCashSession error:", e);
    return { error: message };
  }
}

// ─── Close cash session ──────────────────────────────────────────────────────

export async function closeCashSession(
  sessionId: string,
  countedCashAmount: number,
  notes?: string
): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique" };

  if (countedCashAmount < 0) {
    return { error: "Le montant compté ne peut pas être négatif" };
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const activeSession = await tx.cashRegisterSession.findFirst({
        where: { id: sessionId, storeId },
      });

      if (!activeSession) throw new Error("Session introuvable");
      if (activeSession.status !== "opened") throw new Error("Cette session est déjà fermée");

      // Verify permission: User must be the one who opened it, or Manager/Admin
      if (
        activeSession.openedByUserId !== session.sub &&
        session.role !== "Admin" &&
        session.role !== "Manager"
      ) {
        throw new Error("Seul l'utilisateur ayant ouvert la caisse ou un gérant peut la fermer");
      }

      // In the future: Re-calculate expected cash based on movements.
      // For this block, expectedCashAmount remains what it was (opening amount).
      const expectedCashAmount = Number(activeSession.expectedCashAmount);
      const varianceAmount = countedCashAmount - expectedCashAmount;

      await tx.cashRegisterSession.update({
        where: { id: sessionId },
        data: {
          status: "closed",
          closedByUserId: session.sub,
          closedAt: new Date(),
          countedCashAmount,
          varianceAmount,
          notes: notes ? `${activeSession.notes ? activeSession.notes + " | " : ""}Fermeture: ${notes}` : activeSession.notes,
        },
      });

      return true;
    });

    revalidatePath("/dashboard/pos");
    revalidatePath("/dashboard/pos/cash-register");
    return { success: result };
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Erreur lors de la fermeture de la caisse";
    console.error("closeCashSession error:", e);
    return { error: message };
  }
}

// ─── Force close cash session ────────────────────────────────────────────────

export async function forceCloseCashSession(
  sessionId: string,
  countedCashAmount: number,
  forceCloseNote: string
): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique" };

  if (session.role !== "Admin" && session.role !== "Manager") {
    return { error: "Seuls les gérants ou administrateurs peuvent forcer la fermeture d'une caisse" };
  }

  if (countedCashAmount < 0) {
    return { error: "Le montant compté ne peut pas être négatif" };
  }

  if (!forceCloseNote || forceCloseNote.trim().length === 0) {
    return { error: "Une note explicative est obligatoire pour la fermeture forcée" };
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const activeSession = await tx.cashRegisterSession.findFirst({
        where: { id: sessionId, storeId },
      });

      if (!activeSession) throw new Error("Session introuvable");
      if (activeSession.status !== "opened") throw new Error("Cette session est déjà fermée");

      const expectedCashAmount = Number(activeSession.expectedCashAmount);
      const varianceAmount = countedCashAmount - expectedCashAmount;

      await tx.cashRegisterSession.update({
        where: { id: sessionId },
        data: {
          status: "force_closed",
          forceClosedByUserId: session.sub,
          closedAt: new Date(),
          countedCashAmount,
          varianceAmount,
          forceCloseNote: forceCloseNote.trim(),
        },
      });

      return true;
    });

    revalidatePath("/dashboard/pos");
    revalidatePath("/dashboard/pos/cash-register");
    return { success: result };
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Erreur lors de la fermeture forcée de la caisse";
    console.error("forceCloseCashSession error:", e);
    return { error: message };
  }
}
