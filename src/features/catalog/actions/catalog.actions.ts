"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";

// ─── Types ───────────────────────────────────────────────────────────────────

type ActionError = { error: string };
type CatalogManagerAuth =
  | { ok: false; error: string }
  | { ok: true; session: NonNullable<Awaited<ReturnType<typeof getSession>>> };

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
    include: {
      _count: { select: { modelFamilies: true } },
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

// ─── Catalog Suggestions ────────────────────────────────────────────────────

export type CatalogSuggestionStatusFilter = "pending" | "approved" | "rejected" | "merged" | "all";

export type CreateCatalogSuggestionInput = {
  categoryId?: string | null;
  categoryKey?: string | null;
  brandId?: string | null;
  brandName?: string | null;
  familyId?: string | null;
  printerType?: string | null;
  seriesName?: string | null;
  modelLine?: string | null;
  generation?: string | null;
  modelName: string;
  processor?: string | null;
  ram?: string | null;
  storage?: string | null;
  gpu?: string | null;
  sku?: string | null;
  notes?: string | null;
  source?: string | null;
};

function cleanNullable(value?: string | null) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

async function requireCatalogManager(): Promise<CatalogManagerAuth> {
  const session = await getSession();
  if (!session) return { ok: false, error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { ok: false, error: "Permission insuffisante" };
  }
  return { ok: true, session };
}

export async function createCatalogSuggestion(
  input: CreateCatalogSuggestionInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const modelName = input.modelName.trim().replace(/\s+/g, " ");
  if (!modelName || modelName.length > 180) {
    return { error: "Le nom du modèle est requis (max 180 caractères)" };
  }

  const storeId = session.storeIds[0] ?? null;

  const existingPending = await prisma.deviceCatalogSuggestion.findFirst({
    where: {
      companyId: session.companyId,
      storeId,
      status: "pending",
      modelName: { equals: modelName, mode: "insensitive" },
      ...(input.categoryId ? { categoryId: input.categoryId } : {}),
      ...(input.brandId ? { brandId: input.brandId } : {}),
    },
    select: { id: true },
  });

  if (existingPending) return { id: existingPending.id };

  const suggestion = await prisma.deviceCatalogSuggestion.create({
    data: {
      companyId: session.companyId,
      storeId,
      createdByUserId: session.sub,
      categoryId: cleanNullable(input.categoryId),
      categoryKey: cleanNullable(input.categoryKey),
      brandId: cleanNullable(input.brandId),
      brandName: cleanNullable(input.brandName),
      familyId: cleanNullable(input.familyId),
      printerType: cleanNullable(input.printerType),
      seriesName: cleanNullable(input.seriesName),
      modelLine: cleanNullable(input.modelLine),
      generation: cleanNullable(input.generation),
      modelName,
      processor: cleanNullable(input.processor),
      ram: cleanNullable(input.ram),
      storage: cleanNullable(input.storage),
      gpu: cleanNullable(input.gpu),
      sku: cleanNullable(input.sku),
      notes: cleanNullable(input.notes),
      source: cleanNullable(input.source) ?? "repair_intake",
      status: "pending",
    },
    select: { id: true },
  });

  revalidatePath("/dashboard/settings/catalog");
  revalidatePath("/dashboard/settings/catalog/suggestions");
  return suggestion;
}

export async function listCatalogSuggestions(status: CatalogSuggestionStatusFilter = "pending") {
  const session = await getSession();
  if (!session) return [];

  const suggestions = await prisma.deviceCatalogSuggestion.findMany({
    where: {
      companyId: session.companyId,
      OR: [{ storeId: session.storeIds[0] ?? null }, { storeId: null }],
      ...(status === "all" ? {} : { status }),
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  const categoryIds = Array.from(new Set(suggestions.map((s) => s.categoryId).filter(Boolean))) as string[];
  const brandIds = Array.from(new Set(suggestions.map((s) => s.brandId).filter(Boolean))) as string[];
  const familyIds = Array.from(new Set(suggestions.map((s) => s.familyId).filter(Boolean))) as string[];

  const [categories, brands, families] = await Promise.all([
    categoryIds.length
      ? prisma.deviceCategory.findMany({ where: { id: { in: categoryIds } }, select: { id: true, key: true, nameFr: true, nameEn: true, nameAr: true } })
      : Promise.resolve([]),
    brandIds.length ? prisma.deviceBrand.findMany({ where: { id: { in: brandIds } }, select: { id: true, name: true } }) : Promise.resolve([]),
    familyIds.length ? prisma.deviceModelFamily.findMany({ where: { id: { in: familyIds } }, select: { id: true, name: true } }) : Promise.resolve([]),
  ]);

  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const brandById = new Map(brands.map((brand) => [brand.id, brand]));
  const familyById = new Map(families.map((family) => [family.id, family]));

  return suggestions.map((suggestion) => ({
    ...suggestion,
    category: suggestion.categoryId ? categoryById.get(suggestion.categoryId) ?? null : null,
    brand: suggestion.brandId ? brandById.get(suggestion.brandId) ?? null : null,
    family: suggestion.familyId ? familyById.get(suggestion.familyId) ?? null : null,
  }));
}

export async function approveCatalogSuggestion(id: string): Promise<ActionError | { id: string; familyId: string }> {
  const auth = await requireCatalogManager();
  if (!auth.ok) return { error: auth.error };
  const { session } = auth;
  const storeId = session.storeIds[0] ?? null;

  const suggestion = await prisma.deviceCatalogSuggestion.findFirst({
    where: {
      id,
      companyId: session.companyId,
      OR: [{ storeId }, { storeId: null }],
    },
  });
  if (!suggestion) return { error: "Suggestion introuvable" };
  if (suggestion.status !== "pending") return { error: "Cette suggestion est déjà traitée" };

  const modelName = suggestion.modelName.trim().replace(/\s+/g, " ");
  if (!modelName) return { error: "Modèle invalide" };

  try {
    const result = await prisma.$transaction(async (tx) => {
      let categoryId = suggestion.categoryId;
      if (!categoryId && suggestion.categoryKey) {
        const category = await tx.deviceCategory.findUnique({ where: { key: suggestion.categoryKey }, select: { id: true } });
        categoryId = category?.id ?? null;
      }
      if (!categoryId) throw new Error("Catégorie manquante");

      let brandId = suggestion.brandId;
      if (!brandId) {
        const brandName = suggestion.brandName?.trim();
        if (!brandName) throw new Error("Marque manquante");
        const existingBrand = await tx.deviceBrand.findFirst({
          where: {
            categoryId,
            name: { equals: brandName, mode: "insensitive" },
            OR: [{ isGlobalDefault: true }, { companyId: session.companyId, storeId }, { companyId: session.companyId, storeId: null }],
          },
          select: { id: true },
        });
        brandId = existingBrand?.id ?? (await tx.deviceBrand.create({
          data: {
            categoryId,
            companyId: session.companyId,
            storeId,
            name: brandName,
            sortOrder: 50,
            isGlobalDefault: false,
            isActive: true,
          },
          select: { id: true },
        })).id;
      }

      const existingFamily = await tx.deviceModelFamily.findFirst({
        where: {
          brandId,
          name: { equals: modelName, mode: "insensitive" },
          OR: [{ isGlobalDefault: true }, { companyId: session.companyId, storeId }, { companyId: session.companyId, storeId: null }],
        },
        select: { id: true },
      });

      const familyId = existingFamily?.id ?? (await tx.deviceModelFamily.create({
        data: {
          brandId,
          companyId: session.companyId,
          storeId,
          name: modelName,
          sortOrder: 50,
          isGlobalDefault: false,
          isActive: true,
        },
        select: { id: true },
      })).id;

      await tx.deviceCatalogSuggestion.update({
        where: { id },
        data: {
          status: existingFamily ? "merged" : "approved",
          approvedFamilyId: familyId,
          reviewedAt: new Date(),
          reviewedByUserId: session.sub,
        },
      });

      return { id, familyId };
    });

    revalidatePath("/dashboard/settings/catalog");
    revalidatePath("/dashboard/settings/catalog/suggestions");
    return result;
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Erreur lors de l’approbation" };
  }
}

export async function rejectCatalogSuggestion(id: string, reason?: string): Promise<ActionError | { success: true }> {
  const auth = await requireCatalogManager();
  if (!auth.ok) return { error: auth.error };
  const { session } = auth;
  const storeId = session.storeIds[0] ?? null;

  const suggestion = await prisma.deviceCatalogSuggestion.findFirst({
    where: { id, companyId: session.companyId, OR: [{ storeId }, { storeId: null }] },
    select: { id: true, status: true },
  });
  if (!suggestion) return { error: "Suggestion introuvable" };
  if (suggestion.status !== "pending") return { error: "Cette suggestion est déjà traitée" };

  await prisma.deviceCatalogSuggestion.update({
    where: { id },
    data: {
      status: "rejected",
      rejectionReason: cleanNullable(reason),
      reviewedAt: new Date(),
      reviewedByUserId: session.sub,
    },
  });
  revalidatePath("/dashboard/settings/catalog/suggestions");
  return { success: true };
}

export async function archiveStoreCustomBrand(id: string): Promise<ActionError | { success: true }> {
  const auth = await requireCatalogManager();
  if (!auth.ok) return { error: auth.error };
  const { session } = auth;
  const storeId = session.storeIds[0] ?? null;

  const brand = await prisma.deviceBrand.findFirst({
    where: { id, companyId: session.companyId, storeId, isGlobalDefault: false },
    select: { id: true },
  });
  if (!brand) return { error: "Seules les marques boutique peuvent être archivées" };

  await prisma.deviceBrand.update({ where: { id }, data: { isActive: false } });
  revalidatePath("/dashboard/settings/catalog");
  return { success: true };
}

export async function archiveStoreCustomFamily(id: string): Promise<ActionError | { success: true }> {
  const auth = await requireCatalogManager();
  if (!auth.ok) return { error: auth.error };
  const { session } = auth;
  const storeId = session.storeIds[0] ?? null;

  const family = await prisma.deviceModelFamily.findFirst({
    where: { id, companyId: session.companyId, storeId, isGlobalDefault: false },
    select: { id: true },
  });
  if (!family) return { error: "Seuls les modèles boutique peuvent être archivés" };

  await prisma.deviceModelFamily.update({ where: { id }, data: { isActive: false } });
  revalidatePath("/dashboard/settings/catalog");
  return { success: true };
}
