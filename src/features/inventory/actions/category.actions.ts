"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { normalizeCategoryPath } from "../lib/product-catalog";
import {
  getStoreInventoryDeviceScopes,
  isInventoryCategoryAllowedByScope,
} from "../lib/device-scope.server";

type ItemType = "product" | "part";

type ActionError = { error: string };

export interface InventoryCategoryRecord {
  id: string;
  name: string;
  itemType: ItemType;
  deviceCategoryId: string | null;
  deviceCategoryKey: string | null;
  deviceCategoryNameFr: string | null;
  sortOrder: number;
  isActive: boolean;
  productCount: number;
  partCount: number;
}

function normalizeName(name: string): string {
  return normalizeCategoryPath([name]);
}

function buildFullPath(parentPath: string | undefined, name: string): string {
  const segments = [parentPath ?? "", name].filter(Boolean);
  return normalizeCategoryPath(segments);
}

function hasCategoryManagePermission(role: Parameters<typeof hasPermission>[0]): boolean {
  return hasPermission(role, "inventory:manage");
}

async function assertUniquePath(args: {
  storeId: string;
  itemType: ItemType;
  fullPath: string;
  excludeId?: string;
}): Promise<boolean> {
  const existing = await prisma.inventoryCategory.findFirst({
    where: {
      storeId: args.storeId,
      itemType: args.itemType,
      name: { equals: args.fullPath, mode: "insensitive" },
      ...(args.excludeId ? { id: { not: args.excludeId } } : {}),
    },
    select: { id: true },
  });
  return !existing;
}

export async function listInventoryCategories(opts?: { itemType?: ItemType; includeInactive?: boolean }) {
  const session = await getSession();
  if (!session) return [] as InventoryCategoryRecord[];
  if (!hasPermission(session.role, "inventory:view")) return [] as InventoryCategoryRecord[];

  const storeId = session.storeIds[0];
  if (!storeId) return [] as InventoryCategoryRecord[];
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);

  const categories = await prisma.inventoryCategory.findMany({
    where: {
      storeId,
      ...(opts?.itemType ? { itemType: opts.itemType } : {}),
      ...(opts?.includeInactive ? {} : { isActive: true }),
    },
    select: {
      id: true,
      name: true,
      itemType: true,
      deviceCategoryId: true,
      deviceCategory: { select: { key: true, nameFr: true } },
      sortOrder: true,
      isActive: true,
      _count: { select: { products: true, parts: true } },
    },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
  });

  const scoped = allowedScopes.length
    ? categories.filter((category) =>
        isInventoryCategoryAllowedByScope(
          { name: category.name, deviceCategoryKey: category.deviceCategory?.key },
          allowedScopes
        )
      )
    : categories;

  return scoped.map((category) => ({
    id: category.id,
    name: category.name,
    itemType: category.itemType as ItemType,
    deviceCategoryId: category.deviceCategoryId,
    deviceCategoryKey: category.deviceCategory?.key ?? null,
    deviceCategoryNameFr: category.deviceCategory?.nameFr ?? null,
    sortOrder: category.sortOrder,
    isActive: category.isActive,
    productCount: category._count.products,
    partCount: category._count.parts,
  }));
}

export async function createInventoryCategory(input: {
  itemType: ItemType;
  deviceCategoryId?: string;
  parentPath?: string;
  name: string;
  sortOrder?: number;
  isActive?: boolean;
}): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasCategoryManagePermission(session.role)) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const label = normalizeName(input.name);
  if (!label) return { error: "Le nom de catégorie est requis" };

  const parentPath = input.parentPath ? normalizeCategoryPath([input.parentPath]) : undefined;
  const fullPath = buildFullPath(parentPath, label);
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);
  let deviceCategoryKey: string | null = null;
  if (input.deviceCategoryId) {
    const deviceCategory = await prisma.deviceCategory.findUnique({
      where: { id: input.deviceCategoryId },
      select: { key: true },
    });
    if (!deviceCategory) return { error: "Catégorie appareil introuvable" };
    deviceCategoryKey = deviceCategory.key;
  }
  if (allowedScopes.length && !isInventoryCategoryAllowedByScope({ name: fullPath, deviceCategoryKey }, allowedScopes)) {
    return { error: "Cette catégorie n’est pas autorisée pour le scope de la boutique" };
  }

  const unique = await assertUniquePath({
    storeId,
    itemType: input.itemType,
    fullPath,
  });
  if (!unique) return { error: "Cette catégorie existe déjà pour ce type d’article" };

  const category = await prisma.inventoryCategory.create({
    data: {
      storeId,
      itemType: input.itemType,
      deviceCategoryId: input.deviceCategoryId || null,
      name: fullPath,
      sortOrder: Number.isFinite(input.sortOrder) ? Number(input.sortOrder) : 0,
      isActive: input.isActive ?? true,
    },
    select: { id: true },
  });

  revalidatePath("/dashboard/inventory/categories");
  revalidatePath("/dashboard/inventory/products");
  revalidatePath("/dashboard/inventory/parts");
  return category;
}

export async function updateInventoryCategory(input: {
  id: string;
  itemType: ItemType;
  deviceCategoryId?: string;
  parentPath?: string;
  name: string;
  sortOrder?: number;
  isActive?: boolean;
}): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasCategoryManagePermission(session.role)) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const existing = await prisma.inventoryCategory.findFirst({
    where: { id: input.id, storeId },
    select: { id: true },
  });
  if (!existing) return { error: "Catégorie introuvable" };

  const label = normalizeName(input.name);
  if (!label) return { error: "Le nom de catégorie est requis" };

  const parentPath = input.parentPath ? normalizeCategoryPath([input.parentPath]) : undefined;
  const fullPath = buildFullPath(parentPath, label);
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);
  let deviceCategoryKey: string | null = null;
  if (input.deviceCategoryId) {
    const deviceCategory = await prisma.deviceCategory.findUnique({
      where: { id: input.deviceCategoryId },
      select: { key: true },
    });
    if (!deviceCategory) return { error: "Catégorie appareil introuvable" };
    deviceCategoryKey = deviceCategory.key;
  }
  if (allowedScopes.length && !isInventoryCategoryAllowedByScope({ name: fullPath, deviceCategoryKey }, allowedScopes)) {
    return { error: "Cette catégorie n’est pas autorisée pour le scope de la boutique" };
  }

  const unique = await assertUniquePath({
    storeId,
    itemType: input.itemType,
    fullPath,
    excludeId: input.id,
  });
  if (!unique) return { error: "Cette catégorie existe déjà pour ce type d’article" };

  await prisma.inventoryCategory.update({
    where: { id: input.id },
    data: {
      itemType: input.itemType,
      deviceCategoryId: input.deviceCategoryId || null,
      name: fullPath,
      sortOrder: Number.isFinite(input.sortOrder) ? Number(input.sortOrder) : 0,
      isActive: input.isActive ?? true,
    },
  });

  revalidatePath("/dashboard/inventory/categories");
  revalidatePath("/dashboard/inventory/products");
  revalidatePath("/dashboard/inventory/parts");
  return { id: input.id };
}

export async function setInventoryCategoryActive(input: {
  id: string;
  isActive: boolean;
}): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasCategoryManagePermission(session.role)) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const existing = await prisma.inventoryCategory.findFirst({
    where: { id: input.id, storeId },
    select: { id: true },
  });
  if (!existing) return { error: "Catégorie introuvable" };

  await prisma.inventoryCategory.update({
    where: { id: input.id },
    data: { isActive: input.isActive },
  });

  revalidatePath("/dashboard/inventory/categories");
  revalidatePath("/dashboard/inventory/products");
  revalidatePath("/dashboard/inventory/parts");
  return { id: input.id };
}
