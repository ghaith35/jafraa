"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { paginate, type PaginatedResult } from "@/lib/pagination";
import {
  createServiceSchema,
  type CreateServiceInput,
} from "../schemas/inventory.schema";
import { generateSku } from "../lib/sku";
import {
  getStoreInventoryDeviceScopes,
  isInventoryCategoryAllowedByScope,
} from "../lib/device-scope.server";
import { isDeviceCategoryKeyInScopes } from "../lib/device-scope";

type ActionError = { error: string };

function isP2002(e: unknown): boolean {
  return (
    e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002"
  );
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listServices(opts?: {
  storeId?: string;
  q?: string;
  showArchived?: boolean;
  category?: string;
  deviceCategoryId?: string;
  serviceCategoryId?: string;
  isPackage?: boolean;
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

  const where: Prisma.ServiceWhereInput = {
    storeId,
    isArchived: opts?.showArchived ? undefined : false,
    ...(opts?.deviceCategoryId ? { deviceCategoryId: opts.deviceCategoryId } : {}),
    ...(opts?.serviceCategoryId ? { serviceCategoryId: opts.serviceCategoryId } : {}),
    ...(opts?.isPackage === true ? { packageItems: { some: {} } } : {}),
    ...(opts?.category
      ? { category: { contains: opts.category, mode: "insensitive" } }
      : {}),
    ...(opts?.q
      ? {
          OR: [
            { name: { contains: opts.q, mode: "insensitive" as const } },
            { nameEn: { contains: opts.q, mode: "insensitive" as const } },
            { nameAr: { contains: opts.q, mode: "insensitive" as const } },
            { sku: { contains: opts.q, mode: "insensitive" as const } },
            { category: { contains: opts.q, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  const [services, total] = await Promise.all([
    prisma.service.findMany({
      where,
      skip: (page - 1) * perPage,
      take: perPage,
      include: {
        deviceCategory: { select: { key: true, nameFr: true, nameEn: true, nameAr: true } },
        serviceCategory: { select: { id: true, namePath: true, deviceCategory: { select: { key: true } } } },
        _count: { select: { packageItems: true } },
      },
      orderBy: { name: "asc" },
    }),
    prisma.service.count({ where }),
  ]);

  const mapped = services.map(s => ({
    ...s,
    sellingPrice: Number(s.sellingPrice),
    basePrice: s.basePrice == null ? null : Number(s.basePrice),
    costPrice: s.costPrice == null ? null : Number(s.costPrice),
  }));

  const scoped = !allowedScopes.length
    ? mapped
    : mapped.filter((service) =>
        isInventoryCategoryAllowedByScope(
          {
            name: service.serviceCategory?.namePath ?? service.category,
            deviceCategoryKey: service.deviceCategory?.key ?? service.serviceCategory?.deviceCategory?.key ?? null,
          },
          allowedScopes
        )
      );

  return paginate(scoped, total, page, perPage);
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getService(id: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const service = await prisma.service.findFirst({
    where: { id, storeId },
    include: {
      serviceCategory: { select: { id: true, namePath: true } },
      packageItems: {
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
        select: { serviceId: true },
      },
    },
  });
  if (!service) return null;
  return {
    ...service,
    sellingPrice: Number(service.sellingPrice),
    basePrice: service.basePrice == null ? null : Number(service.basePrice),
    costPrice: service.costPrice == null ? null : Number(service.costPrice),
  };
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createService(
  data: CreateServiceInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const parsed = createServiceSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);
  let scopeDeviceCategoryKey: string | null = null;
  if (d.deviceCategoryId) {
    const deviceCategory = await prisma.deviceCategory.findUnique({
      where: { id: d.deviceCategoryId },
      select: { key: true },
    });
    if (!deviceCategory) return { error: "Type d'appareil introuvable" };
    scopeDeviceCategoryKey = deviceCategory.key;
    if (allowedScopes.length && !isDeviceCategoryKeyInScopes(deviceCategory.key, allowedScopes)) {
      return { error: "Ce type d'appareil n'est pas autorisé pour cette boutique" };
    }
  }

  let normalizedServiceCategoryPath: string | null = null;
  if (d.serviceCategoryId) {
    const serviceCategory = await prisma.serviceCategory.findFirst({
      where: { id: d.serviceCategoryId, storeId, isArchived: false },
      select: { id: true, namePath: true, deviceCategory: { select: { key: true } }, deviceCategoryId: true },
    });
    if (!serviceCategory) return { error: "Catégorie service introuvable" };
    normalizedServiceCategoryPath = serviceCategory.namePath;
    if (!d.deviceCategoryId && serviceCategory.deviceCategoryId) {
      const categoryKey = serviceCategory.deviceCategory?.key ?? null;
      if (allowedScopes.length && !isInventoryCategoryAllowedByScope({ name: serviceCategory.namePath, deviceCategoryKey: categoryKey }, allowedScopes)) {
        return { error: "Cette catégorie service n'est pas autorisée pour cette boutique" };
      }
    }
    if (d.deviceCategoryId && serviceCategory.deviceCategoryId && serviceCategory.deviceCategoryId !== d.deviceCategoryId) {
      return { error: "La catégorie service ne correspond pas au type d'appareil sélectionné" };
    }
  }

  let sku = d.sku?.trim() || "";
  if (!sku) {
    sku = await generateSku(storeId, "service");
  }

  try {
    const service = await prisma.service.create({
      data: {
        storeId,
        name: d.name,
        nameFr: d.name,
        nameEn: d.nameEn || undefined,
        nameAr: d.nameAr || undefined,
        sku,
        category: d.category || normalizedServiceCategoryPath || undefined,
        serviceCategoryId: d.serviceCategoryId || undefined,
        deviceCategoryId: d.deviceCategoryId || undefined,
        basePrice: d.basePrice ?? d.sellingPrice,
        costPrice: d.costPrice ?? undefined,
        sellingPrice: d.sellingPrice,
        estimatedDurationMinutes: d.estimatedDurationMinutes ?? undefined,
        notes: d.notes || undefined,
      },
    });

    if (d.isPackage) {
      const packageEntity = await prisma.servicePackage.create({
        data: {
          storeId,
          deviceCategoryId: d.deviceCategoryId || undefined,
          serviceCategoryId: d.serviceCategoryId || undefined,
          name: d.name,
          description: d.packageDescription || d.notes || undefined,
          basePrice: d.basePrice ?? d.sellingPrice,
          costPrice: d.costPrice ?? undefined,
        },
      });

      const uniqueIds = Array.from(new Set((d.packageServiceIds ?? []).filter(Boolean)));
      if (uniqueIds.length) {
        await prisma.servicePackageItem.createMany({
          data: uniqueIds.map((serviceId, index) => ({
            packageId: packageEntity.id,
            serviceId,
            sortOrder: index,
          })),
          skipDuplicates: true,
        });
      }
    }

    if (d.groupPrices?.length) {
      await prisma.serviceGroupPrice.createMany({
        data: d.groupPrices.map((gp) => ({
          companyId: session.companyId,
          serviceId: service.id,
          groupId: gp.groupId,
          price: gp.price,
        })),
        skipDuplicates: true,
      });
    }

    revalidatePath("/dashboard/services");
    revalidatePath("/dashboard/inventory");
    return { id: service.id };
  } catch (e) {
    if (isP2002(e)) {
      return { error: "Ce SKU est déjà utilisé dans cette boutique" };
    }
    console.error("createService:", e);
    return { error: "Erreur lors de la création du service" };
  }
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updateService(
  id: string,
  data: CreateServiceInput
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const existing = await prisma.service.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true, sku: true },
  });
  if (!existing) return { error: "Service introuvable" };

  const parsed = createServiceSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);
  if (d.deviceCategoryId) {
    const deviceCategory = await prisma.deviceCategory.findUnique({
      where: { id: d.deviceCategoryId },
      select: { key: true },
    });
    if (!deviceCategory) return { error: "Type d'appareil introuvable" };
    if (allowedScopes.length && !isDeviceCategoryKeyInScopes(deviceCategory.key, allowedScopes)) {
      return { error: "Ce type d'appareil n'est pas autorisé pour cette boutique" };
    }
  }
  let normalizedServiceCategoryPath: string | null = null;
  if (d.serviceCategoryId) {
    const serviceCategory = await prisma.serviceCategory.findFirst({
      where: { id: d.serviceCategoryId, storeId, isArchived: false },
      select: { id: true, namePath: true, deviceCategoryId: true },
    });
    if (!serviceCategory) return { error: "Catégorie service introuvable" };
    normalizedServiceCategoryPath = serviceCategory.namePath;
    if (d.deviceCategoryId && serviceCategory.deviceCategoryId && serviceCategory.deviceCategoryId !== d.deviceCategoryId) {
      return { error: "La catégorie service ne correspond pas au type d'appareil sélectionné" };
    }
  }
  const sku = d.sku?.trim() || existing.sku;

  try {
    await prisma.service.update({
      where: { id },
      data: {
        name: d.name,
        nameFr: d.name,
        nameEn: d.nameEn || null,
        nameAr: d.nameAr || null,
        sku,
        category: d.category || normalizedServiceCategoryPath || null,
        serviceCategoryId: d.serviceCategoryId || null,
        deviceCategoryId: d.deviceCategoryId || null,
        basePrice: d.basePrice ?? d.sellingPrice,
        costPrice: d.costPrice ?? null,
        sellingPrice: d.sellingPrice,
        estimatedDurationMinutes: d.estimatedDurationMinutes ?? null,
        notes: d.notes || null,
      },
    });
  } catch (e) {
    if (isP2002(e)) {
      return { error: "Ce SKU est déjà utilisé dans cette boutique" };
    }
    console.error("updateService:", e);
    return { error: "Erreur lors de la mise à jour" };
  }

  if (d.groupPrices) {
    await prisma.serviceGroupPrice.deleteMany({ where: { serviceId: id } });
    if (d.groupPrices.length) {
      await prisma.serviceGroupPrice.createMany({
        data: d.groupPrices.map((gp) => ({
          companyId: session.companyId,
          serviceId: id,
          groupId: gp.groupId,
          price: gp.price,
        })),
      });
    }
  }

  revalidatePath("/dashboard/services");
  revalidatePath("/dashboard/inventory");
  revalidatePath(`/dashboard/services/${id}`);
  revalidatePath(`/dashboard/inventory/services/${id}`);
}

export async function listServiceCategories(opts?: {
  storeId?: string;
  deviceCategoryId?: string;
  includeArchived?: boolean;
}) {
  const session = await getSession();
  if (!session) return [];

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return [];

  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);
  const categories = await prisma.serviceCategory.findMany({
    where: {
      storeId,
      isArchived: opts?.includeArchived ? undefined : false,
      ...(opts?.deviceCategoryId ? { deviceCategoryId: opts.deviceCategoryId } : {}),
    },
    include: {
      deviceCategory: { select: { key: true, nameFr: true, nameEn: true, nameAr: true } },
    },
    orderBy: [{ sortOrder: "asc" }, { namePath: "asc" }],
  });

  if (!allowedScopes.length) return categories;
  return categories.filter((category) =>
    isInventoryCategoryAllowedByScope(
      {
        name: category.namePath,
        deviceCategoryKey: category.deviceCategory?.key ?? null,
      },
      allowedScopes
    )
  );
}

// ─── Archive ──────────────────────────────────────────────────────────────────

export async function archiveService(id: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  const existing = await prisma.service.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true },
  });
  if (!existing) return { error: "Service introuvable" };

  try {
    await prisma.service.update({ where: { id }, data: { isArchived: true } });
  } catch (e) {
    console.error("archiveService:", e);
    return { error: "Erreur lors de l'archivage" };
  }

  revalidatePath("/dashboard/services");
  revalidatePath("/dashboard/inventory");
}

export async function reactivateService(id: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  const existing = await prisma.service.findFirst({
    where: { id, storeId, isArchived: true },
    select: { id: true },
  });
  if (!existing) return { error: "Service introuvable" };

  try {
    await prisma.service.update({ where: { id }, data: { isArchived: false } });
  } catch (e) {
    console.error("reactivateService:", e);
    return { error: "Erreur lors de la réactivation" };
  }

  revalidatePath("/dashboard/services");
  revalidatePath("/dashboard/inventory");
}
