"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";

export interface AccessoryItemRecord {
  id: string;
  name: string;
  sku: string;
  brand: string | null;
  reference: string | null;
  sellingPrice: number;
  stockQty: number;
  lowStockThreshold: number | null;
  imageUrl: string | null;
  notes: string | null;
  isArchived: boolean;
  createdAt: Date;
}

export async function listAccessoryItems(categoryId: string) {
  const session = await getSession();
  if (!session) return [];
  const storeId = session.storeIds[0];
  if (!storeId) return [];

  const items = await prisma.accessoryItem.findMany({
    where: { storeId, categoryId, isArchived: false },
    orderBy: { name: "asc" },
  });

  return items.map((i) => ({ ...i, sellingPrice: Number(i.sellingPrice) })) as AccessoryItemRecord[];
}

export async function createAccessoryItem(data: {
  categoryId: string;
  name: string;
  sku?: string;
  brand?: string;
  reference?: string;
  sellingPrice: number;
  stockQty?: number;
  lowStockThreshold?: number;
  imageUrl?: string;
  notes?: string;
}) {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission refusée" };
  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucun magasin" };

  const sku = data.sku || `ACC-${Date.now()}`;

  const existing = await prisma.accessoryItem.findUnique({
    where: { storeId_sku: { storeId, sku } },
    select: { id: true },
  });
  if (existing) return { error: "Un article avec ce SKU existe déjà" };

  await prisma.accessoryItem.create({
    data: {
      storeId,
      categoryId: data.categoryId,
      name: data.name,
      sku,
      brand: data.brand || null,
      reference: data.reference || null,
      sellingPrice: data.sellingPrice,
      stockQty: data.stockQty ?? 0,
      lowStockThreshold: data.lowStockThreshold ?? null,
      imageUrl: data.imageUrl || null,
      notes: data.notes || null,
    },
  });

  revalidatePath("/dashboard/inventory/accessories");
  return { success: true };
}

export async function updateAccessoryItem(data: {
  id: string;
  name?: string;
  brand?: string;
  reference?: string;
  sellingPrice?: number;
  stockQty?: number;
  lowStockThreshold?: number | null;
  imageUrl?: string;
  notes?: string;
}) {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission refusée" };

  await prisma.accessoryItem.update({ where: { id: data.id }, data });

  revalidatePath("/dashboard/inventory/accessories");
  return { success: true };
}

export async function archiveAccessoryItem(id: string) {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission refusée" };

  await prisma.accessoryItem.update({ where: { id }, data: { isArchived: true } });

  revalidatePath("/dashboard/inventory/accessories");
  return { success: true };
}
