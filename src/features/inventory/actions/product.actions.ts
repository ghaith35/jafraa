"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import {
  createProductSchema,
  type CreateProductInput,
} from "../schemas/inventory.schema";
import { generateSku } from "../lib/sku";

type ActionError = { error: string };

function isP2002(e: unknown): boolean {
  return (
    e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002"
  );
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listProducts(opts?: {
  storeId?: string;
  q?: string;
  showArchived?: boolean;
}) {
  const session = await getSession();
  if (!session) return [];

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return [];

  return prisma.product.findMany({
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
    include: { category: { select: { name: true } } },
    orderBy: { name: "asc" },
    take: 200,
  });
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getProduct(id: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  return prisma.product.findFirst({
    where: { id, storeId },
    include: { category: { select: { id: true, name: true } } },
  });
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createProduct(
  data: CreateProductInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const parsed = createProductSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;

  // Generate SKU if not provided
  let sku = d.sku?.trim() || "";
  if (!sku) {
    sku = await generateSku(storeId, "product");
  }

  try {
    const product = await prisma.product.create({
      data: {
        storeId,
        categoryId: d.categoryId || undefined,
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
    return { id: product.id };
  } catch (e) {
    if (isP2002(e)) {
      return { error: "Ce SKU ou code-barres est déjà utilisé dans cette boutique" };
    }
    console.error("createProduct:", e);
    return { error: "Erreur lors de la création du produit" };
  }
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updateProduct(
  id: string,
  data: CreateProductInput
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const existing = await prisma.product.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true, sku: true },
  });
  if (!existing) return { error: "Produit introuvable" };

  const parsed = createProductSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;
  const sku = d.sku?.trim() || existing.sku;

  try {
    await prisma.product.update({
      where: { id },
      data: {
        categoryId: d.categoryId || null,
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
    console.error("updateProduct:", e);
    return { error: "Erreur lors de la mise à jour" };
  }

  revalidatePath("/dashboard/inventory");
  revalidatePath(`/dashboard/inventory/products/${id}`);
}

// ─── Archive ──────────────────────────────────────────────────────────────────

export async function archiveProduct(
  id: string
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  const existing = await prisma.product.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true },
  });
  if (!existing) return { error: "Produit introuvable" };

  try {
    await prisma.product.update({ where: { id }, data: { isArchived: true } });
  } catch (e) {
    console.error("archiveProduct:", e);
    return { error: "Erreur lors de l'archivage" };
  }

  revalidatePath("/dashboard/inventory");
}
