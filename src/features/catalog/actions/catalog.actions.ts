"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";

// ─── Types ───────────────────────────────────────────────────────────────────

type ActionError = { error: string };

// ─── Read queries ────────────────────────────────────────────────────────────

/** List all active device categories, ordered by sortOrder */
export async function listDeviceCategories() {
  return prisma.deviceCategory.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });
}

/**
 * List brands for a category.
 * Includes global defaults + custom entries for the current company/store.
 */
export async function listBrandsByCategory(
  categoryId: string,
  opts?: { companyId?: string; storeId?: string }
) {
  return prisma.deviceBrand.findMany({
    where: {
      categoryId,
      isActive: true,
      OR: [
        // Global defaults
        { isGlobalDefault: true },
        // Company/store custom entries
        ...(opts?.companyId
          ? [{ companyId: opts.companyId, storeId: opts.storeId ?? null }]
          : []),
        ...(opts?.companyId
          ? [{ companyId: opts.companyId, storeId: null }]
          : []),
      ],
    },
    orderBy: { sortOrder: "asc" },
  });
}

/**
 * List model families for a brand.
 * Includes global defaults + custom entries for the current company/store.
 */
export async function listFamiliesByBrand(
  brandId: string,
  opts?: { companyId?: string; storeId?: string }
) {
  return prisma.deviceModelFamily.findMany({
    where: {
      brandId,
      isActive: true,
      OR: [
        { isGlobalDefault: true },
        ...(opts?.companyId
          ? [{ companyId: opts.companyId, storeId: opts.storeId ?? null }]
          : []),
        ...(opts?.companyId
          ? [{ companyId: opts.companyId, storeId: null }]
          : []),
      ],
    },
    orderBy: { sortOrder: "asc" },
  });
}

/** Search brands across all categories (for autocomplete/search) */
export async function searchCatalog(
  query: string,
  opts?: { companyId?: string; storeId?: string }
) {
  const q = query.trim();
  if (!q) return { brands: [], families: [] };

  const [brands, families] = await Promise.all([
    prisma.deviceBrand.findMany({
      where: {
        name: { contains: q, mode: "insensitive" },
        isActive: true,
        OR: [
          { isGlobalDefault: true },
          ...(opts?.companyId
            ? [{ companyId: opts.companyId }]
            : []),
        ],
      },
      include: { category: { select: { nameFr: true, key: true } } },
      take: 20,
      orderBy: { sortOrder: "asc" },
    }),
    prisma.deviceModelFamily.findMany({
      where: {
        name: { contains: q, mode: "insensitive" },
        isActive: true,
        OR: [
          { isGlobalDefault: true },
          ...(opts?.companyId
            ? [{ companyId: opts.companyId }]
            : []),
        ],
      },
      include: {
        brand: {
          select: {
            name: true,
            category: { select: { nameFr: true, key: true } },
          },
        },
      },
      take: 20,
      orderBy: { sortOrder: "asc" },
    }),
  ]);

  return { brands, families };
}

// ─── Mutations (Admin/Manager only) ──────────────────────────────────────────

/** Create a store-custom brand under a category */
export async function createStoreCustomBrand(
  categoryId: string,
  name: string
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const trimmed = name.trim();
  if (!trimmed || trimmed.length > 120) {
    return { error: "Le nom de la marque est requis (max 120 caractères)" };
  }

  // Check category exists
  const category = await prisma.deviceCategory.findUnique({
    where: { id: categoryId },
    select: { id: true },
  });
  if (!category) return { error: "Catégorie introuvable" };

  // Check for duplicate in same scope
  const storeId = session.storeIds[0] ?? null;
  const existing = await prisma.deviceBrand.findFirst({
    where: {
      categoryId,
      name: { equals: trimmed, mode: "insensitive" },
      OR: [
        { isGlobalDefault: true },
        { companyId: session.companyId, storeId },
      ],
    },
  });
  if (existing) return { error: "Cette marque existe déjà" };

  try {
    const brand = await prisma.deviceBrand.create({
      data: {
        categoryId,
        companyId: session.companyId,
        storeId,
        name: trimmed,
        sortOrder: 50,
        isGlobalDefault: false,
        isActive: true,
      },
    });
    revalidatePath("/dashboard/settings/catalog");
    return { id: brand.id };
  } catch {
    return { error: "Erreur lors de la création de la marque" };
  }
}

/** Create a store-custom model family under a brand */
export async function createStoreCustomFamily(
  brandId: string,
  name: string
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const trimmed = name.trim();
  if (!trimmed || trimmed.length > 120) {
    return { error: "Le nom de la famille est requis (max 120 caractères)" };
  }

  // Check brand exists
  const brand = await prisma.deviceBrand.findUnique({
    where: { id: brandId },
    select: { id: true },
  });
  if (!brand) return { error: "Marque introuvable" };

  const storeId = session.storeIds[0] ?? null;
  const existing = await prisma.deviceModelFamily.findFirst({
    where: {
      brandId,
      name: { equals: trimmed, mode: "insensitive" },
      OR: [
        { isGlobalDefault: true },
        { companyId: session.companyId, storeId },
      ],
    },
  });
  if (existing) return { error: "Cette famille de modèle existe déjà" };

  try {
    const family = await prisma.deviceModelFamily.create({
      data: {
        brandId,
        companyId: session.companyId,
        storeId,
        name: trimmed,
        sortOrder: 50,
        isGlobalDefault: false,
        isActive: true,
      },
    });
    revalidatePath("/dashboard/settings/catalog");
    return { id: family.id };
  } catch {
    return { error: "Erreur lors de la création de la famille" };
  }
}

/**
 * Get full catalog data for the catalog management page.
 * Returns categories with brands and families.
 */
export async function getCatalogPageData(
  categoryKey?: string,
  opts?: { companyId?: string; storeId?: string }
) {
  const categories = await listDeviceCategories();

  // Use first category if no key specified
  const targetKey = categoryKey ?? categories[0]?.key;
  const selectedCategory = categories.find((c) => c.key === targetKey) ?? null;

  let brands: Awaited<ReturnType<typeof listBrandsByCategory>> = [];
  if (selectedCategory) {
    brands = await listBrandsByCategory(selectedCategory.id, opts);
  }

  return { categories, selectedCategory, brands };
}
