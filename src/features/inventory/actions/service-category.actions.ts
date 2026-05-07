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

type ActionError = { error: string };

export interface ServiceCategoryRecord {
  id: string;
  namePath: string;
  nameFr: string;
  nameEn: string | null;
  nameAr: string | null;
  deviceCategoryId: string | null;
  deviceCategoryNameFr: string | null;
  deviceCategoryNameEn: string | null;
  deviceCategoryNameAr: string | null;
  sortOrder: number;
  isActive: boolean;
  isArchived: boolean;
  serviceCount: number;
}

function buildFullPath(parentPath: string | undefined, name: string): string {
  const segments = [parentPath ?? "", name].filter(Boolean);
  return normalizeCategoryPath(segments);
}

export async function listServiceCategoriesManaged(opts?: { includeArchived?: boolean }) {
  const session = await getSession();
  if (!session) return [] as ServiceCategoryRecord[];
  if (!hasPermission(session.role, "inventory:view")) return [] as ServiceCategoryRecord[];

  const storeId = session.storeIds[0];
  if (!storeId) return [] as ServiceCategoryRecord[];
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);

  const categories = await prisma.serviceCategory.findMany({
    where: {
      storeId,
      ...(opts?.includeArchived ? {} : { isArchived: false }),
    },
    include: {
      deviceCategory: { select: { key: true, nameFr: true, nameEn: true, nameAr: true } },
      _count: { select: { services: true } },
    },
    orderBy: [{ sortOrder: "asc" }, { namePath: "asc" }],
  });

  const scoped = allowedScopes.length
    ? categories.filter((category) =>
        isInventoryCategoryAllowedByScope(
          { name: category.namePath, deviceCategoryKey: category.deviceCategory?.key ?? null },
          allowedScopes
        )
      )
    : categories;

  return scoped.map((category) => ({
    id: category.id,
    namePath: category.namePath,
    nameFr: category.nameFr,
    nameEn: category.nameEn ?? null,
    nameAr: category.nameAr ?? null,
    deviceCategoryId: category.deviceCategoryId ?? null,
    deviceCategoryNameFr: category.deviceCategory?.nameFr ?? null,
    deviceCategoryNameEn: category.deviceCategory?.nameEn ?? null,
    deviceCategoryNameAr: category.deviceCategory?.nameAr ?? null,
    sortOrder: category.sortOrder,
    isActive: category.isActive,
    isArchived: category.isArchived,
    serviceCount: category._count.services,
  }));
}

export async function createServiceCategory(input: {
  name: string;
  parentPath?: string;
  deviceCategoryId?: string;
  sortOrder?: number;
  isActive?: boolean;
  nameEn?: string;
  nameAr?: string;
}): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const nameFr = normalizeCategoryPath([input.name]);
  if (!nameFr) return { error: "Le nom de catégorie est requis" };
  const namePath = buildFullPath(input.parentPath, nameFr);

  let deviceCategoryKey: string | null = null;
  if (input.deviceCategoryId) {
    const deviceCategory = await prisma.deviceCategory.findUnique({
      where: { id: input.deviceCategoryId },
      select: { key: true },
    });
    if (!deviceCategory) return { error: "Type d'appareil introuvable" };
    deviceCategoryKey = deviceCategory.key;
  }

  const scopes = await getStoreInventoryDeviceScopes(storeId);
  if (scopes.length && !isInventoryCategoryAllowedByScope({ name: namePath, deviceCategoryKey }, scopes)) {
    return { error: "Catégorie non autorisée pour ce type de boutique" };
  }

  const existing = await prisma.serviceCategory.findFirst({
    where: { storeId, namePath: { equals: namePath, mode: "insensitive" } },
    select: { id: true },
  });
  if (existing) return { error: "Cette catégorie existe déjà" };

  const created = await prisma.serviceCategory.create({
    data: {
      storeId,
      namePath,
      nameFr,
      nameEn: input.nameEn?.trim() || null,
      nameAr: input.nameAr?.trim() || null,
      sortOrder: Number.isFinite(input.sortOrder) ? Number(input.sortOrder) : 0,
      isActive: input.isActive ?? true,
      deviceCategoryId: input.deviceCategoryId || null,
    },
    select: { id: true },
  });

  revalidatePath("/dashboard/services/categories");
  revalidatePath("/dashboard/services/new");
  revalidatePath("/dashboard/services");
  return created;
}

export async function updateServiceCategory(input: {
  id: string;
  name: string;
  parentPath?: string;
  deviceCategoryId?: string;
  sortOrder?: number;
  isActive?: boolean;
  nameEn?: string;
  nameAr?: string;
}): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const existing = await prisma.serviceCategory.findFirst({
    where: { id: input.id, storeId },
    select: { id: true },
  });
  if (!existing) return { error: "Catégorie introuvable" };

  const nameFr = normalizeCategoryPath([input.name]);
  if (!nameFr) return { error: "Le nom de catégorie est requis" };
  const namePath = buildFullPath(input.parentPath, nameFr);

  let deviceCategoryKey: string | null = null;
  if (input.deviceCategoryId) {
    const deviceCategory = await prisma.deviceCategory.findUnique({
      where: { id: input.deviceCategoryId },
      select: { key: true },
    });
    if (!deviceCategory) return { error: "Type d'appareil introuvable" };
    deviceCategoryKey = deviceCategory.key;
  }

  const scopes = await getStoreInventoryDeviceScopes(storeId);
  if (scopes.length && !isInventoryCategoryAllowedByScope({ name: namePath, deviceCategoryKey }, scopes)) {
    return { error: "Catégorie non autorisée pour ce type de boutique" };
  }

  const duplicate = await prisma.serviceCategory.findFirst({
    where: {
      storeId,
      id: { not: input.id },
      namePath: { equals: namePath, mode: "insensitive" },
    },
    select: { id: true },
  });
  if (duplicate) return { error: "Cette catégorie existe déjà" };

  await prisma.serviceCategory.update({
    where: { id: input.id },
    data: {
      namePath,
      nameFr,
      nameEn: input.nameEn?.trim() || null,
      nameAr: input.nameAr?.trim() || null,
      sortOrder: Number.isFinite(input.sortOrder) ? Number(input.sortOrder) : 0,
      isActive: input.isActive ?? true,
      deviceCategoryId: input.deviceCategoryId || null,
    },
  });

  revalidatePath("/dashboard/services/categories");
  revalidatePath("/dashboard/services/new");
  revalidatePath("/dashboard/services");
  return { id: input.id };
}

export async function archiveServiceCategory(id: string): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const category = await prisma.serviceCategory.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true },
  });
  if (!category) return { error: "Catégorie introuvable" };

  await prisma.serviceCategory.update({
    where: { id },
    data: { isArchived: true, isActive: false },
  });

  revalidatePath("/dashboard/services/categories");
  revalidatePath("/dashboard/services");
  return { id };
}

export async function reactivateServiceCategory(id: string): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const category = await prisma.serviceCategory.findFirst({
    where: { id, storeId, isArchived: true },
    select: { id: true },
  });
  if (!category) return { error: "Catégorie introuvable" };

  await prisma.serviceCategory.update({
    where: { id },
    data: { isArchived: false, isActive: true },
  });

  revalidatePath("/dashboard/services/categories");
  revalidatePath("/dashboard/services");
  return { id };
}
