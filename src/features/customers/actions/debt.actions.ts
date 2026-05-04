"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";

type ActionError = { error: string };

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Load and validate a named customer that belongs to the current company.
 * Returns the customer with debtBalance included, or throws a descriptive error.
 */
async function loadNamedCustomer(
  customerId: string,
  companyId: string
) {
  const customer = await prisma.customer.findFirst({
    where: { id: customerId, companyId, isArchived: false },
    include: { debtBalance: true },
  });

  if (!customer) throw new Error("Client introuvable");
  if (customer.customerType === "walkin") {
    throw new Error("Les clients de passage ne peuvent pas avoir de dette");
  }

  return customer;
}

// ─── Read: debt summary ───────────────────────────────────────────────────────

export interface DebtSummary {
  customerId: string;
  customerName: string;
  customerType: string;
  totalDebt: number;
  repairDebt: number;
  saleDebt: number;
  manualDebt: number;
  alertLimit: number | null;
  isOverLimit: boolean;
  isWalkin: boolean;
}

export async function getCustomerDebtSummary(
  customerId: string
): Promise<DebtSummary | ActionError> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "debt:view")) return { error: "Accès refusé" };

  const customer = await prisma.customer.findFirst({
    where: { id: customerId, companyId: session.companyId },
    include: {
      debtBalance: true,
      customerGroup: { select: { debtAlertLimit: true } },
    },
  });

  if (!customer) return { error: "Client introuvable" };

  const balance = customer.debtBalance;
  const totalDebt = balance ? Number(balance.totalDebt) : 0;

  // Alert limit: customer override → group default → null
  const alertLimit =
    customer.debtAlertLimitOverride !== null
      ? Number(customer.debtAlertLimitOverride)
      : customer.customerGroup?.debtAlertLimit !== null
      ? Number(customer.customerGroup?.debtAlertLimit)
      : null;

  return {
    customerId: customer.id,
    customerName: customer.name,
    customerType: customer.customerType,
    totalDebt,
    repairDebt: balance ? Number(balance.repairDebt) : 0,
    saleDebt: balance ? Number(balance.saleDebt) : 0,
    manualDebt: balance ? Number(balance.manualDebt) : 0,
    alertLimit,
    isOverLimit: alertLimit !== null && totalDebt >= alertLimit,
    isWalkin: customer.customerType === "walkin",
  };
}

// ─── Read: ledger entries ─────────────────────────────────────────────────────

export interface DebtEntry {
  id: string;
  type: string;
  direction: string;
  amount: number;
  note: string | null;
  createdBy: string;
  createdAt: Date;
  // Computed running balance (calculated client-side from sorted entries)
  runningBalance?: number;
}

export async function listCustomerDebtEntries(
  customerId: string
): Promise<DebtEntry[] | ActionError> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "debt:view")) return { error: "Accès refusé" };

  // Verify customer belongs to company
  const customer = await prisma.customer.findFirst({
    where: { id: customerId, companyId: session.companyId },
    select: { id: true },
  });
  if (!customer) return { error: "Client introuvable" };

  const entries = await prisma.customerDebtTransaction.findMany({
    where: { customerId },
    orderBy: { createdAt: "asc" },
    take: 200,
  });

  return entries.map((e) => ({
    id: e.id,
    type: e.type,
    direction: e.direction,
    amount: Number(e.amount),
    note: e.note,
    createdBy: e.createdBy,
    createdAt: e.createdAt,
  }));
}

// ─── Write: add opening balance ───────────────────────────────────────────────

export async function addOpeningBalance(
  customerId: string,
  amount: number,
  note?: string
): Promise<ActionError | { success: true }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "debt:manage")) return { error: "Accès refusé" };

  if (amount <= 0) return { error: "Le montant doit être supérieur à 0" };

  try {
    await prisma.$transaction(async (tx) => {
      const customer = await loadNamedCustomer(customerId, session.companyId);
      const storeId = session.storeIds[0] ?? null;

      // Create the ledger entry
      await tx.customerDebtTransaction.create({
        data: {
          customerId,
          storeId,
          type: "opening_balance",
          direction: "debit",
          amount,
          note: note || "Solde d'ouverture",
          createdBy: session.sub,
        },
      });

      // Update denormalized balance
      const current = customer.debtBalance;
      if (current) {
        await tx.customerDebtBalance.update({
          where: { customerId },
          data: {
            manualDebt: { increment: amount },
            totalDebt: { increment: amount },
          },
        });
      } else {
        await tx.customerDebtBalance.create({
          data: {
            customerId,
            manualDebt: amount,
            totalDebt: amount,
          },
        });
      }
    });

    revalidatePath(`/dashboard/customers/${customerId}`);
    revalidatePath("/dashboard");
    return { success: true };
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Erreur lors de l'ajout du solde" };
  }
}

// ─── Write: add manual debt ───────────────────────────────────────────────────

export async function addManualDebt(
  customerId: string,
  amount: number,
  note: string
): Promise<ActionError | { success: true }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "debt:manage")) return { error: "Accès refusé" };

  if (amount <= 0) return { error: "Le montant doit être supérieur à 0" };
  if (!note.trim()) return { error: "Une note est obligatoire" };

  try {
    await prisma.$transaction(async (tx) => {
      const customer = await loadNamedCustomer(customerId, session.companyId);
      const storeId = session.storeIds[0] ?? null;

      await tx.customerDebtTransaction.create({
        data: {
          customerId,
          storeId,
          type: "manual_debt",
          direction: "debit",
          amount,
          note: note.trim(),
          createdBy: session.sub,
        },
      });

      const current = customer.debtBalance;
      if (current) {
        await tx.customerDebtBalance.update({
          where: { customerId },
          data: {
            manualDebt: { increment: amount },
            totalDebt: { increment: amount },
          },
        });
      } else {
        await tx.customerDebtBalance.create({
          data: { customerId, manualDebt: amount, totalDebt: amount },
        });
      }
    });

    revalidatePath(`/dashboard/customers/${customerId}`);
    revalidatePath("/dashboard");
    return { success: true };
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Erreur lors de l'ajout de la dette" };
  }
}

// ─── Write: add manual credit / correction ────────────────────────────────────

export async function addManualCredit(
  customerId: string,
  amount: number,
  note: string
): Promise<ActionError | { success: true }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "debt:manage")) return { error: "Accès refusé" };

  if (amount <= 0) return { error: "Le montant doit être supérieur à 0" };
  if (!note.trim()) return { error: "Une note est obligatoire" };

  try {
    await prisma.$transaction(async (tx) => {
      const customer = await loadNamedCustomer(customerId, session.companyId);
      const storeId = session.storeIds[0] ?? null;

      // Check that credit doesn't push balance below 0
      const currentTotal = customer.debtBalance
        ? Number(customer.debtBalance.totalDebt)
        : 0;
      if (amount > currentTotal) {
        throw new Error(
          `La correction (${amount.toFixed(2)} DZD) dépasse la dette actuelle (${currentTotal.toFixed(2)} DZD)`
        );
      }

      await tx.customerDebtTransaction.create({
        data: {
          customerId,
          storeId,
          type: "adjustment",
          direction: "credit",
          amount,
          note: note.trim(),
          createdBy: session.sub,
        },
      });

      await tx.customerDebtBalance.update({
        where: { customerId },
        data: {
          manualDebt: { decrement: amount },
          totalDebt: { decrement: amount },
        },
      });
    });

    revalidatePath(`/dashboard/customers/${customerId}`);
    revalidatePath("/dashboard");
    return { success: true };
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Erreur lors de la correction" };
  }
}

// ─── Write: pay customer debt (cash) ─────────────────────────────────────────

export async function payCustomerDebt(
  customerId: string,
  cashAmount: number,
  note?: string
): Promise<ActionError | { success: true }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "debt:view")) return { error: "Accès refusé" };
  if (!hasPermission(session.role, "payments:manage")) {
    return { error: "Vous n'avez pas la permission d'encaisser des paiements" };
  }

  if (cashAmount <= 0) return { error: "Le montant doit être supérieur à 0" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  try {
    await prisma.$transaction(async (tx) => {
      // 1. Validate named customer
      const customer = await loadNamedCustomer(customerId, session.companyId);

      // 2. Check payment doesn't exceed balance
      const currentTotal = customer.debtBalance
        ? Number(customer.debtBalance.totalDebt)
        : 0;
      if (currentTotal <= 0) {
        throw new Error("Ce client n'a pas de dette à payer");
      }
      if (cashAmount > currentTotal) {
        throw new Error(
          `Le paiement (${cashAmount.toFixed(2)} DZD) dépasse la dette actuelle (${currentTotal.toFixed(2)} DZD)`
        );
      }

      // 3. Require open cash session
      const cashSession = await tx.cashRegisterSession.findFirst({
        where: { storeId, status: "opened" },
      });
      if (!cashSession) {
        throw new Error(
          "Aucune session de caisse ouverte. Veuillez ouvrir la caisse avant d'encaisser."
        );
      }

      // 4. Create debt ledger credit entry
      await tx.customerDebtTransaction.create({
        data: {
          customerId,
          storeId,
          type: "payment",
          direction: "credit",
          amount: cashAmount,
          note: note?.trim() || `Paiement de dette — ${customer.name}`,
          createdBy: session.sub,
        },
      });

      // 5. Update denormalized balance
      // Reduce proportionally across categories — simplest approach: reduce totalDebt and manualDebt first
      await tx.customerDebtBalance.update({
        where: { customerId },
        data: { totalDebt: { decrement: cashAmount } },
      });

      // 6. Create cash movement
      await tx.cashMovement.create({
        data: {
          companyId: session.companyId,
          storeId,
          cashSessionId: cashSession.id,
          movementType: "debt_payment",
          direction: "in",
          amount: cashAmount,
          sourceType: "customer_debt",
          sourceId: customerId,
          note: `Paiement dette — ${customer.name}`,
          createdByUserId: session.sub,
        },
      });

      // 7. Update cash session expected amount
      await tx.cashRegisterSession.update({
        where: { id: cashSession.id },
        data: { expectedCashAmount: { increment: cashAmount } },
      });
    });

    revalidatePath(`/dashboard/customers/${customerId}`);
    revalidatePath("/dashboard/pos/cash-register");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (e: unknown) {
    return { error: e instanceof Error ? e.message : "Erreur lors du paiement" };
  }
}
