"use server";

import { revalidatePath } from "next/cache";
import { Prisma, CashSessionStatus } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { paginate, type PaginatedResult } from "@/lib/pagination";
import {
  createExpenseSchema,
  updateExpenseSchema,
  createExpenseCategorySchema,
  type CreateExpenseInput,
  type UpdateExpenseInput,
  type CreateExpenseCategoryInput,
} from "../schemas/expense.schema";

type ActionError = { error: string };

function isP2002(e: unknown): boolean {
  return (
    e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002"
  );
}

// ─── Category Actions ─────────────────────────────────────────────────────────

export async function listExpenseCategories(storeId: string) {
  const session = await getSession();
  if (!session) return [];

  return prisma.expenseCategory.findMany({
    where: {
      OR: [
        { storeId, companyId: session.companyId },
        { storeId: null, companyId: null },
      ],
    },
    orderBy: { name: "asc" },
    include: { _count: { select: { expenses: true } } },
  });
}

export async function createExpenseCategory(
  data: CreateExpenseCategoryInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "expenses:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const parsed = createExpenseCategorySchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  try {
    const category = await prisma.expenseCategory.create({
      data: { companyId: session.companyId, storeId, name: parsed.data.name },
    });
    revalidatePath("/dashboard/expenses/categories");
    return { id: category.id };
  } catch (e) {
    if (isP2002(e)) {
      return { error: "Cette catégorie existe déjà" };
    }
    console.error("createExpenseCategory:", e);
    return { error: "Erreur lors de la création" };
  }
}

export async function deleteExpenseCategory(
  id: string
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "expenses:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const category = await prisma.expenseCategory.findFirst({
    where: { id, storeId, companyId: session.companyId },
    include: { _count: { select: { expenses: true } } },
  });

  if (!category) return { error: "Catégorie introuvable" };
  if (category._count.expenses > 0) {
    return { error: "Impossible de supprimer : cette catégorie contient des dépenses" };
  }

  try {
    await prisma.expenseCategory.delete({ where: { id } });
    revalidatePath("/dashboard/expenses/categories");
  } catch (e) {
    console.error("deleteExpenseCategory:", e);
    return { error: "Erreur lors de la suppression" };
  }
}

// ─── Expense Actions ──────────────────────────────────────────────────────────

export async function listExpenses(storeId: string, period?: string, page = 1, perPage = 50) {
  const session = await getSession();
  if (!session) return { data: [], total: 0, page: 1, perPage: 50, totalPages: 0 };

  const where: Prisma.ExpenseWhereInput = { storeId, companyId: session.companyId };

  if (period && period !== "forever") {
    const now = new Date();
    let start: Date;
    if (period === "daily") {
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (period === "monthly") {
      start = new Date(now.getFullYear(), now.getMonth(), 1);
    } else if (period === "yearly") {
      start = new Date(now.getFullYear(), 0, 1);
    } else {
      start = new Date(0);
    }
    where.expenseDate = { gte: start };
  }

  const [expenses, total] = await Promise.all([
    prisma.expense.findMany({
      where,
      skip: (page - 1) * perPage,
      take: perPage,
      include: { category: { select: { name: true } } },
      orderBy: { expenseDate: "desc" },
    }),
    prisma.expense.count({ where }),
  ]);

  return paginate(
    expenses.map((e) => ({
      id: e.id,
      amount: Number(e.amount),
      expenseDate: e.expenseDate,
      note: e.note,
      categoryName: e.category.name,
      categoryId: e.categoryId,
      createdAt: e.createdAt,
    })),
    total,
    page,
    perPage
  );
}

export async function getExpense(id: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const expense = await prisma.expense.findFirst({
    where: { id, storeId, companyId: session.companyId },
  });
  if (!expense) return null;

  return {
    ...expense,
    amount: Number(expense.amount),
    expenseDate: expense.expenseDate.toISOString().split("T")[0],
    note: expense.note ?? null,
    cashSessionId: expense.cashSessionId ?? null,
  };
}

export async function createExpense(
  data: CreateExpenseInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "expenses:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const parsed = createExpenseSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;

  // Verify category belongs to this store/company
  const category = await prisma.expenseCategory.findFirst({
    where: {
      id: d.categoryId,
      OR: [
        { storeId, companyId: session.companyId },
        { storeId: null, companyId: null },
      ],
    },
  });
  if (!category) return { error: "Catégorie introuvable" };

  // Find active cash session
  const cashSession = await prisma.cashRegisterSession.findFirst({
    where: { storeId, status: CashSessionStatus.opened },
    orderBy: { openedAt: "desc" },
    select: { id: true },
  });

  try {
    const expense = await prisma.expense.create({
      data: {
        companyId: session.companyId,
        storeId,
        categoryId: d.categoryId,
        amount: d.amount,
        expenseDate: new Date(d.expenseDate),
        note: d.note || undefined,
        cashSessionId: cashSession?.id ?? null,
        createdByUserId: session.sub,
      },
    });
    revalidatePath("/dashboard/expenses");
    return { id: expense.id };
  } catch (e) {
    console.error("createExpense:", e);
    return { error: "Erreur lors de la création" };
  }
}

export async function updateExpense(
  id: string,
  data: UpdateExpenseInput
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "expenses:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const existing = await prisma.expense.findFirst({
    where: { id, storeId, companyId: session.companyId },
    select: { id: true },
  });
  if (!existing) return { error: "Dépense introuvable" };

  const parsed = updateExpenseSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;

  try {
    await prisma.expense.update({
      where: { id },
      data: {
        categoryId: d.categoryId,
        amount: d.amount,
        expenseDate: new Date(d.expenseDate),
        note: d.note || null,
      },
    });
  } catch (e) {
    console.error("updateExpense:", e);
    return { error: "Erreur lors de la mise à jour" };
  }

  revalidatePath("/dashboard/expenses");
  revalidatePath(`/dashboard/expenses/${id}`);
}

export async function deleteExpense(
  id: string
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "expenses:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  const existing = await prisma.expense.findFirst({
    where: { id, storeId, companyId: session.companyId },
    select: { id: true },
  });
  if (!existing) return { error: "Dépense introuvable" };

  try {
    await prisma.expense.delete({ where: { id } });
  } catch (e) {
    console.error("deleteExpense:", e);
    return { error: "Erreur lors de la suppression" };
  }

  revalidatePath("/dashboard/expenses");
}
