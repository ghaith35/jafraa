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
import type { ProductListFilters, ProductListItem } from "../lib/product-catalog";
import { isInStock, isLowStock, isOutOfStock } from "../lib/product-catalog";
import {
  getStoreInventoryDeviceScopes,
  isInventoryCategoryAllowedByScope,
} from "../lib/device-scope.server";

type ActionError = { error: string };

function isP2002(e: unknown): boolean {
  return (
    e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002"
  );
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listProducts(opts?: ProductListFilters): Promise<ProductListItem[]> {
  const session = await getSession();
  if (!session) return [];

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return [];
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);

  const stockFilter = opts?.stock ?? (opts?.showArchived ? "archived" : "all");
  const andFilters: Prisma.ProductWhereInput[] = [];

  if (opts?.q) {
    andFilters.push({
      OR: [
        { name: { contains: opts.q, mode: "insensitive" } },
        { sku: { contains: opts.q, mode: "insensitive" } },
        { barcode: { contains: opts.q, mode: "insensitive" } },
        { brand: { contains: opts.q, mode: "insensitive" } },
        { modelReference: { contains: opts.q, mode: "insensitive" } },
      ],
    });
  }
  if (opts?.category) {
    andFilters.push({ categoryId: opts.category });
  }
  if (opts?.brand) {
    andFilters.push({ brand: { equals: opts.brand, mode: "insensitive" } });
  }
  if (opts?.spec) {
    andFilters.push({ modelReference: { contains: opts.spec, mode: "insensitive" } });
  }

  const orderBy: Prisma.ProductOrderByWithRelationInput[] = (() => {
    switch (opts?.sort) {
      case "newest":
        return [{ createdAt: "desc" }, { name: "asc" }];
      case "price_high":
        return [{ sellingPrice: "desc" }, { name: "asc" }];
      case "price_low":
        return [{ sellingPrice: "asc" }, { name: "asc" }];
      case "stock_low_first":
        return [{ stockQty: "asc" }, { name: "asc" }];
      case "name_asc":
      default:
        return [{ name: "asc" }];
    }
  })();

  const products = await prisma.product.findMany({
    where: {
      storeId,
      isArchived:
        stockFilter === "archived"
          ? true
          : stockFilter === "all"
            ? undefined
            : false,
      ...(andFilters.length ? { AND: andFilters } : {}),
    },
    include: { category: { select: { name: true, deviceCategory: { select: { key: true } } } } },
    orderBy,
    take: 500,
  });

  const mapped = products.map((p) => ({
    ...p,
    sellingPrice: Number(p.sellingPrice),
    modelReference: p.modelReference ?? null,
    notes: p.notes ?? null,
    imageUrl: p.imageUrl ?? null,
    categoryId: p.categoryId ?? null,
  }));

  const scoped = allowedScopes.length
    ? mapped.filter((item) =>
        isInventoryCategoryAllowedByScope(
          {
            name: item.category?.name,
            deviceCategoryKey: item.category?.deviceCategory?.key,
          },
          allowedScopes
        )
      )
    : mapped;

  if (stockFilter === "low_stock") return scoped.filter((item) => isLowStock(item));
  if (stockFilter === "out_of_stock") return scoped.filter((item) => isOutOfStock(item));
  if (stockFilter === "in_stock") return scoped.filter((item) => isInStock(item) && !isLowStock(item));

  return scoped;
}

export async function listProductFilterOptions(storeIdInput?: string) {
  const session = await getSession();
  if (!session) {
    return { categories: [] as { id: string; name: string; isActive: boolean }[], brands: [] as string[] };
  }

  const storeId = storeIdInput ?? session.storeIds[0];
  if (!storeId) {
    return { categories: [] as { id: string; name: string; isActive: boolean }[], brands: [] as string[] };
  }
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);

  const [categories, productsForBrands] = await Promise.all([
    prisma.inventoryCategory.findMany({
      where: { storeId, itemType: "product" },
      select: { id: true, name: true, isActive: true, sortOrder: true, deviceCategory: { select: { key: true } } },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    }),
    prisma.product.findMany({
      where: { storeId, brand: { not: null }, isArchived: false },
      select: { brand: true, category: { select: { name: true, deviceCategory: { select: { key: true } } } } },
    }),
  ]);

  const scopedCategories = allowedScopes.length
    ? categories.filter((category) =>
        isInventoryCategoryAllowedByScope(
          {
            name: category.name,
            deviceCategoryKey: category.deviceCategory?.key,
          },
          allowedScopes
        )
      )
    : categories;

  const brandsRaw = allowedScopes.length
    ? productsForBrands.filter((item) =>
        isInventoryCategoryAllowedByScope(
          {
            name: item.category?.name,
            deviceCategoryKey: item.category?.deviceCategory?.key,
          },
          allowedScopes
        )
      )
    : productsForBrands;
  const uniqueBrands = Array.from(
    new Set(
      brandsRaw
        .map((item) => item.brand?.trim() ?? "")
        .filter(Boolean)
    )
  ).sort((a, b) => a.localeCompare(b));

  return {
    categories: scopedCategories.map((item) => ({ id: item.id, name: item.name, isActive: item.isActive })),
    brands: uniqueBrands,
  };
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getProduct(id: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const product = await prisma.product.findFirst({
    where: { id, storeId },
    include: { category: { select: { id: true, name: true } } },
  });

  if (!product) return null;

  return {
    ...product,
    sellingPrice: Number(product.sellingPrice),
  };
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
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);
  if (allowedScopes.length && !d.categoryId) {
    return { error: "Veuillez sélectionner une catégorie liée à votre activité" };
  }
  if (d.categoryId) {
    const category = await prisma.inventoryCategory.findFirst({
      where: { id: d.categoryId, storeId, itemType: "product" },
      select: { name: true, deviceCategory: { select: { key: true } } },
    });
    if (!category) return { error: "Catégorie produit introuvable" };
    if (
      allowedScopes.length &&
      !isInventoryCategoryAllowedByScope(
        { name: category.name, deviceCategoryKey: category.deviceCategory?.key },
        allowedScopes
      )
    ) {
      return { error: "Cette catégorie n’est pas autorisée pour ce type de boutique" };
    }
  }

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
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);
  if (allowedScopes.length && !d.categoryId) {
    return { error: "Veuillez sélectionner une catégorie liée à votre activité" };
  }
  if (d.categoryId) {
    const category = await prisma.inventoryCategory.findFirst({
      where: { id: d.categoryId, storeId, itemType: "product" },
      select: { name: true, deviceCategory: { select: { key: true } } },
    });
    if (!category) return { error: "Catégorie produit introuvable" };
    if (
      allowedScopes.length &&
      !isInventoryCategoryAllowedByScope(
        { name: category.name, deviceCategoryKey: category.deviceCategory?.key },
        allowedScopes
      )
    ) {
      return { error: "Cette catégorie n’est pas autorisée pour ce type de boutique" };
    }
  }

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
