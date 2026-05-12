"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { paginate, type PaginatedResult } from "@/lib/pagination";
import {
  createPartSchema,
  type CreatePartInput,
} from "../schemas/inventory.schema";
import { generateSku } from "../lib/sku";
import { getStoreInventoryDeviceScopes } from "../lib/device-scope.server";
import {
  isDeviceCategoryKeyInScopes,
} from "../lib/device-scope";
import { isInventoryCategoryAllowedByScope } from "../lib/device-scope.server";

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
  recoveredOnly?: boolean;
  page?: number;
  perPage?: number;
}) {
  const session = await getSession();
  if (!session) return { data: [], total: 0, page: 1, perPage: 50, totalPages: 0 };

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return { data: [], total: 0, page: 1, perPage: 50, totalPages: 0 };
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);

  const page = opts?.page ?? 1;
  const perPage = opts?.perPage ?? 50;

  const searchFilter: Prisma.PartWhereInput | undefined = opts?.q
    ? {
        OR: [
          { name: { contains: opts.q, mode: "insensitive" as const } },
          { sku: { contains: opts.q, mode: "insensitive" as const } },
          { barcode: { contains: opts.q, mode: "insensitive" as const } },
          { brand: { contains: opts.q, mode: "insensitive" as const } },
          { notes: { contains: opts.q, mode: "insensitive" as const } },
          { category: { name: { contains: opts.q, mode: "insensitive" as const } } },
        ],
      }
    : undefined;

  const recoveredFilter: Prisma.PartWhereInput | undefined = opts?.recoveredOnly
    ? {
        OR: [
          { notes: { contains: "recovered", mode: "insensitive" as const } },
          { notes: { contains: "récup", mode: "insensitive" as const } },
          { notes: { contains: "recup", mode: "insensitive" as const } },
          { notes: { contains: "used", mode: "insensitive" as const } },
          { notes: { contains: "occasion", mode: "insensitive" as const } },
          { notes: { contains: "مستعمل", mode: "insensitive" as const } },
          { notes: { contains: "مسترجع", mode: "insensitive" as const } },
          { category: { name: { contains: "recovered", mode: "insensitive" as const } } },
          { category: { name: { contains: "récup", mode: "insensitive" as const } } },
          { category: { name: { contains: "recup", mode: "insensitive" as const } } },
          { category: { name: { contains: "occasion", mode: "insensitive" as const } } },
        ],
      }
    : undefined;

  const andFilters: Prisma.PartWhereInput[] = [];
  if (searchFilter) andFilters.push(searchFilter);
  if (recoveredFilter) andFilters.push(recoveredFilter);

  const where: Prisma.PartWhereInput = {
    storeId,
    isArchived: opts?.showArchived ? undefined : false,
    ...(andFilters.length ? { AND: andFilters } : {}),
  };

  const [parts, total] = await Promise.all([
    prisma.part.findMany({
      where,
      skip: (page - 1) * perPage,
      take: perPage,
      include: {
        category: { select: { name: true } },
        compatibleCategory: { select: { nameFr: true, key: true } },
        compatibleBrand: { select: { name: true } },
        compatibleFamily: { select: { name: true } },
      },
      orderBy: { name: "asc" },
    }),
    prisma.part.count({ where }),
  ]);

  const mapped = parts.map(p => ({
    ...p,
    sellingPrice: Number(p.sellingPrice),
  }));

  const scoped = !allowedScopes.length
    ? mapped
    : mapped.filter((part) => {
        if (isDeviceCategoryKeyInScopes(part.compatibleCategory?.key, allowedScopes)) return true;
        return isInventoryCategoryAllowedByScope(
          { name: part.category?.name, deviceCategoryKey: null },
          allowedScopes
        );
      });

  return paginate(scoped, total, page, perPage);
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getPart(id: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const part = await prisma.part.findFirst({
    where: { id, storeId },
    include: {
      category: { select: { id: true, name: true } },
      compatibleCategory: { select: { id: true, nameFr: true } },
      compatibleBrand: { select: { id: true, name: true } },
      compatibleFamily: { select: { id: true, name: true } },
    },
  });

  if (!part) return null;

  return {
    ...part,
    sellingPrice: Number(part.sellingPrice),
  };
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
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);
  if (allowedScopes.length && !d.compatibleCategoryId) {
    return { error: "Veuillez sélectionner le type d’appareil pour cette pièce" };
  }
  if (d.compatibleCategoryId) {
    const compatibleCategory = await prisma.deviceCategory.findUnique({
      where: { id: d.compatibleCategoryId },
      select: { key: true },
    });
    if (!compatibleCategory) return { error: "Type d’appareil introuvable" };
    if (allowedScopes.length && !isDeviceCategoryKeyInScopes(compatibleCategory.key, allowedScopes)) {
      return { error: "Ce type d’appareil n’est pas autorisé pour cette boutique" };
    }
  }
  if (d.categoryId) {
    const category = await prisma.inventoryCategory.findFirst({
      where: { id: d.categoryId, storeId, itemType: "part" },
      select: { name: true, deviceCategory: { select: { key: true } } },
    });
    if (!category) return { error: "Catégorie pièce introuvable" };
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
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);
  if (allowedScopes.length && !d.compatibleCategoryId) {
    return { error: "Veuillez sélectionner le type d’appareil pour cette pièce" };
  }
  if (d.compatibleCategoryId) {
    const compatibleCategory = await prisma.deviceCategory.findUnique({
      where: { id: d.compatibleCategoryId },
      select: { key: true },
    });
    if (!compatibleCategory) return { error: "Type d’appareil introuvable" };
    if (allowedScopes.length && !isDeviceCategoryKeyInScopes(compatibleCategory.key, allowedScopes)) {
      return { error: "Ce type d’appareil n’est pas autorisé pour cette boutique" };
    }
  }
  if (d.categoryId) {
    const category = await prisma.inventoryCategory.findFirst({
      where: { id: d.categoryId, storeId, itemType: "part" },
      select: { name: true, deviceCategory: { select: { key: true } } },
    });
    if (!category) return { error: "Catégorie pièce introuvable" };
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

// ─── Repair intake compatibility search ───────────────────────────────────────

export async function listCompatiblePartsForRepair(opts: {
  categoryId?: string;
  brandId?: string;
  familyId?: string;
  q?: string;
}) {
  const session = await getSession();
  if (!session) return [];

  const storeId = session.storeIds[0];
  if (!storeId) return [];

  const q = opts.q?.trim();
  const andFilters: Prisma.PartWhereInput[] = [];

  if (opts.categoryId) {
    andFilters.push({
      OR: [{ compatibleCategoryId: null }, { compatibleCategoryId: opts.categoryId }],
    });
  }
  if (opts.brandId) {
    andFilters.push({
      OR: [{ compatibleBrandId: null }, { compatibleBrandId: opts.brandId }],
    });
  }
  if (opts.familyId) {
    andFilters.push({
      OR: [{ compatibleFamilyId: null }, { compatibleFamilyId: opts.familyId }],
    });
  }

  const parts = await prisma.part.findMany({
    where: {
      storeId,
      isArchived: false,
      ...(andFilters.length ? { AND: andFilters } : {}),
      ...(q
        ? {
            OR: [
              { name: { contains: q, mode: "insensitive" } },
              { sku: { contains: q, mode: "insensitive" } },
              { barcode: { contains: q, mode: "insensitive" } },
              { brand: { contains: q, mode: "insensitive" } },
              { modelReference: { contains: q, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    select: {
      id: true,
      name: true,
      sku: true,
      barcode: true,
      brand: true,
      modelReference: true,
      sellingPrice: true,
      stockQty: true,
      imageUrl: true,
      compatibleCategoryId: true,
      compatibleBrandId: true,
      compatibleFamilyId: true,
    },
    orderBy: [{ compatibleFamilyId: "desc" }, { compatibleBrandId: "desc" }, { name: "asc" }],
    take: 80,
  });

  const partIds = parts.map((part) => part.id);
  const reservations = partIds.length
    ? await prisma.repairTicketPart.groupBy({
        by: ["partId"],
        where: { partId: { in: partIds }, storeId, status: "reserved" },
        _sum: { quantity: true },
      })
    : [];

  const reservedByPart = new Map(reservations.map((item) => [item.partId, item._sum.quantity || 0]));

  return parts.map((part) => {
    const reservedQty = reservedByPart.get(part.id) || 0;
    return {
      ...part,
      sellingPrice: Number(part.sellingPrice),
      reservedQty,
      availableQty: Math.max(0, part.stockQty - reservedQty),
    };
  });
}
