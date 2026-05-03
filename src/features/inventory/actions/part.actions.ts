"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import {
  createPartSchema,
  type CreatePartInput,
} from "../schemas/inventory.schema";
import { generateSku } from "../lib/sku";

type ActionError = { error: string };

function isP2002(e: unknown): boolean {
  return (
    e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002"
  );
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listParts(opts?: {
  storeId?: string;
  q?: string;
  showArchived?: boolean;
}) {
  const session = await getSession();
  if (!session) return [];

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return [];

  return prisma.part.findMany({
    where: {
      storeId,
      isArchived: opts?.showArchived ? undefined : false,
      ...(opts?.q
        ? {
            OR: [
              { name: { contains: opts.q, mode: "insensitive" } },
              { sku: { contains: opts.q, mode: "insensitive" } },
              { barcode: { contains: opts.q, mode: "insensitive" } },
              { brand: { contains: opts.q, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    include: {
      category: { select: { name: true } },
      compatibleCategory: { select: { nameFr: true } },
      compatibleBrand: { select: { name: true } },
      compatibleFamily: { select: { name: true } },
    },
    orderBy: { name: "asc" },
    take: 200,
  });
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getPart(id: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  return prisma.part.findFirst({
    where: { id, storeId },
    include: {
      category: { select: { id: true, name: true } },
      compatibleCategory: { select: { id: true, nameFr: true } },
      compatibleBrand: { select: { id: true, name: true } },
      compatibleFamily: { select: { id: true, name: true } },
    },
  });
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createPart(
  data: CreatePartInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const parsed = createPartSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;

  let sku = d.sku?.trim() || "";
  if (!sku) {
    sku = await generateSku(storeId, "part");
  }

  try {
    const part = await prisma.part.create({
      data: {
        storeId,
        categoryId: d.categoryId || undefined,
        compatibleCategoryId: d.compatibleCategoryId || undefined,
        compatibleBrandId: d.compatibleBrandId || undefined,
        compatibleFamilyId: d.compatibleFamilyId || undefined,
        name: d.name,
        sku,
        barcode: d.barcode || undefined,
        brand: d.brand || undefined,
        modelReference: d.modelReference || undefined,
        sellingPrice: d.sellingPrice,
        stockQty: d.stockQty ?? 0,
        lowStockThreshold: d.lowStockThreshold ?? undefined,
        notes: d.notes || undefined,
        imageUrl: d.imageUrl || undefined,
      },
    });
    revalidatePath("/dashboard/inventory");
    return { id: part.id };
  } catch (e) {
    if (isP2002(e)) {
      return { error: "Ce SKU ou code-barres est déjà utilisé dans cette boutique" };
    }
    console.error("createPart:", e);
    return { error: "Erreur lors de la création de la pièce" };
  }
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updatePart(
  id: string,
  data: CreatePartInput
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const existing = await prisma.part.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true, sku: true },
  });
  if (!existing) return { error: "Pièce introuvable" };

  const parsed = createPartSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;
  const sku = d.sku?.trim() || existing.sku;

  try {
    await prisma.part.update({
      where: { id },
      data: {
        categoryId: d.categoryId || null,
        compatibleCategoryId: d.compatibleCategoryId || null,
        compatibleBrandId: d.compatibleBrandId || null,
        compatibleFamilyId: d.compatibleFamilyId || null,
        name: d.name,
        sku,
        barcode: d.barcode || null,
        brand: d.brand || null,
        modelReference: d.modelReference || null,
        sellingPrice: d.sellingPrice,
        stockQty: d.stockQty ?? 0,
        lowStockThreshold: d.lowStockThreshold ?? null,
        notes: d.notes || null,
        imageUrl: d.imageUrl || null,
      },
    });
  } catch (e) {
    if (isP2002(e)) {
      return { error: "Ce SKU ou code-barres est déjà utilisé dans cette boutique" };
    }
    console.error("updatePart:", e);
    return { error: "Erreur lors de la mise à jour" };
  }

  revalidatePath("/dashboard/inventory");
  revalidatePath(`/dashboard/inventory/parts/${id}`);
}

// ─── Archive ──────────────────────────────────────────────────────────────────

export async function archivePart(id: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  const existing = await prisma.part.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true },
  });
  if (!existing) return { error: "Pièce introuvable" };

  try {
    await prisma.part.update({ where: { id }, data: { isArchived: true } });
  } catch (e) {
    console.error("archivePart:", e);
    return { error: "Erreur lors de l'archivage" };
  }

  revalidatePath("/dashboard/inventory");
}
