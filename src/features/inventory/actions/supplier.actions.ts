"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import {
  createSupplierSchema,
  updateSupplierSchema,
  type CreateSupplierInput,
  type UpdateSupplierInput,
} from "../schemas/supplier.schema";

type ActionError = { error: string };

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listSuppliers(opts?: {
  storeId?: string;
  q?: string;
  showArchived?: boolean;
}) {
  const session = await getSession();
  if (!session) return [];
  if (!hasPermission(session.role, "inventory:manage")) return [];

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return [];

  const suppliers = await prisma.supplier.findMany({
    where: {
      storeId,
      isArchived: opts?.showArchived ? undefined : false,
      ...(opts?.q
        ? {
            OR: [
              { name: { contains: opts.q, mode: "insensitive" } },
              { phone: { contains: opts.q, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    orderBy: { name: "asc" },
  });

  return suppliers.map(s => ({
    ...s,
    balance: Number(s.balance),
  }));
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getSupplier(id: string) {
  const session = await getSession();
  if (!session) return null;
  if (!hasPermission(session.role, "inventory:manage")) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const supplier = await prisma.supplier.findFirst({
    where: { id, storeId },
  });

  if (!supplier) return null;

  return {
    ...supplier,
    balance: Number(supplier.balance),
  };
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createSupplier(
  data: CreateSupplierInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const parsed = createSupplierSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;

  try {
    const supplier = await prisma.supplier.create({
      data: {
        companyId: session.companyId,
        storeId,
        name: d.name,
        phone: d.phone || undefined,
        address: d.address || undefined,
        notes: d.notes || undefined,
      },
    });
    revalidatePath("/dashboard/suppliers");
    return { id: supplier.id };
  } catch (e) {
    console.error("createSupplier:", e);
    return { error: "Erreur lors de la création du fournisseur" };
  }
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updateSupplier(
  id: string,
  data: UpdateSupplierInput
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const existing = await prisma.supplier.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true },
  });
  if (!existing) return { error: "Fournisseur introuvable" };

  const parsed = updateSupplierSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;

  try {
    await prisma.supplier.update({
      where: { id },
      data: {
        name: d.name,
        phone: d.phone || null,
        address: d.address || null,
        notes: d.notes || null,
      },
    });
  } catch (e) {
    console.error("updateSupplier:", e);
    return { error: "Erreur lors de la mise à jour" };
  }

  revalidatePath("/dashboard/suppliers");
  revalidatePath(`/dashboard/suppliers/${id}`);
}

// ─── Archive ──────────────────────────────────────────────────────────────────

export async function archiveSupplier(
  id: string
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  const existing = await prisma.supplier.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true },
  });
  if (!existing) return { error: "Fournisseur introuvable" };

  try {
    await prisma.supplier.update({ where: { id }, data: { isArchived: true } });
  } catch (e) {
    console.error("archiveSupplier:", e);
    return { error: "Erreur lors de l'archivage" };
  }

  revalidatePath("/dashboard/suppliers");
}
