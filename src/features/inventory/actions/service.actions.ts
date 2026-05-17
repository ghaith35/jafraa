"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { paginate } from "@/lib/pagination";
import { generateSku } from "../lib/sku";

type ActionError = { error: string };

function isP2002(e: unknown): boolean {
  return e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002";
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceListItem {
  id: string;
  sku: string;
  nameFr: string;
  nameEn: string | null;
  nameAr: string | null;
  sellingPrice: number;
  basePrice: number | null;
  costPrice: number | null;
  estimatedDurationMinutes: number | null;
  notes: string | null;
  isArchived: boolean;
  groupPrices: { groupId: string; price: number }[];
  deviceCategories: { id: string; key: string; nameFr: string; nameEn: string; nameAr: string }[];
  serviceType: { id: string; baseKey: string | null; nameFr: string; nameEn: string | null; nameAr: string | null } | null;
  _count: { packageItems: number };
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listServices(opts?: {
  storeId?: string;
  q?: string;
  showArchived?: boolean;
  deviceCategoryId?: string;
  serviceTypeId?: string;
  page?: number;
  perPage?: number;
}) {
  const session = await getSession();
  if (!session) return { data: [] as ServiceListItem[], total: 0, page: 1, perPage: 50, totalPages: 0 };

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return { data: [] as ServiceListItem[], total: 0, page: 1, perPage: 50, totalPages: 0 };

  const page = opts?.page ?? 1;
  const perPage = opts?.perPage ?? 50;

  const where: Prisma.ServiceWhereInput = {
    storeId,
    isArchived: opts?.showArchived ? undefined : false,
    ...(opts?.deviceCategoryId
      ? { deviceCategories: { some: { deviceCategoryId: opts.deviceCategoryId } } }
      : {}),
    ...(opts?.serviceTypeId ? { serviceTypeId: opts.serviceTypeId } : {}),
    ...(opts?.q
      ? {
          OR: [
            { nameFr: { contains: opts.q, mode: "insensitive" } },
            { nameEn: { contains: opts.q, mode: "insensitive" } },
            { nameAr: { contains: opts.q, mode: "insensitive" } },
            { sku: { contains: opts.q, mode: "insensitive" } },
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
        deviceCategories: {
          include: { deviceCategory: { select: { id: true, key: true, nameFr: true, nameEn: true, nameAr: true } } },
        },
        serviceType: { select: { id: true, baseKey: true, nameFr: true, nameEn: true, nameAr: true } },
        groupPrices: { select: { groupId: true, price: true } },
        _count: { select: { packageItems: true } },
      },
      orderBy: [{ serviceType: { sortOrder: "asc" } }, { nameFr: "asc" }],
    }),
    prisma.service.count({ where }),
  ]);

  const mapped: ServiceListItem[] = services.map((s) => ({
    id: s.id,
    sku: s.sku,
    nameFr: s.nameFr,
    nameEn: s.nameEn,
    nameAr: s.nameAr,
    sellingPrice: Number(s.sellingPrice),
    basePrice: s.basePrice == null ? null : Number(s.basePrice),
    costPrice: s.costPrice == null ? null : Number(s.costPrice),
    estimatedDurationMinutes: s.estimatedDurationMinutes,
    notes: s.notes,
    isArchived: s.isArchived,
    groupPrices: s.groupPrices.map((gp) => ({ groupId: gp.groupId, price: Number(gp.price) })),
    deviceCategories: s.deviceCategories.map((dc) => dc.deviceCategory),
    serviceType: s.serviceType,
    _count: s._count,
  }));

  return paginate(mapped, total, page, perPage);
}

// ─── Count services per device category (for sidebar badges) ─────────────────

export async function countServicesByDeviceCategory(storeId: string): Promise<Record<string, number>> {
  const session = await getSession();
  if (!session) return {};

  const [total, byCategoryRows] = await Promise.all([
    prisma.service.count({ where: { storeId, isArchived: false } }),
    prisma.serviceDeviceCategory.groupBy({
      by: ["deviceCategoryId"],
      where: { service: { storeId, isArchived: false } },
      _count: { serviceId: true },
    }),
  ]);

  const result: Record<string, number> = { all: total };
  for (const row of byCategoryRows) {
    result[row.deviceCategoryId] = row._count.serviceId;
  }
  return result;
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
      serviceType: { select: { id: true, baseKey: true, nameFr: true, nameEn: true, nameAr: true } },
      deviceCategories: {
        include: { deviceCategory: { select: { id: true, key: true, nameFr: true, nameEn: true, nameAr: true } } },
      },
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

export async function createService(data: {
  nameFr: string;
  nameEn?: string;
  nameAr?: string;
  sku?: string;
  serviceTypeId?: string;
  deviceCategoryIds?: string[];
  basePrice?: number;
  costPrice?: number;
  sellingPrice: number;
  estimatedDurationMinutes?: number;
  notes?: string;
  groupPrices?: { groupId: string; price: number }[];
}): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const nameFr = data.nameFr.trim();
  if (!nameFr) return { error: "Un nom est requis" };

  // Validate serviceType belongs to this company
  if (data.serviceTypeId) {
    const st = await prisma.serviceType.findFirst({
      where: { id: data.serviceTypeId, companyId: session.companyId },
      select: { id: true },
    });
    if (!st) return { error: "Type de service introuvable" };
  }

  const sku = data.sku?.trim() || (await generateSku(storeId, "service"));

  try {
    const service = await prisma.service.create({
      data: {
        storeId,
        nameFr,
        nameEn: data.nameEn?.trim() || null,
        nameAr: data.nameAr?.trim() || null,
        sku,
        serviceTypeId: data.serviceTypeId || null,
        basePrice: data.basePrice ?? data.sellingPrice,
        costPrice: data.costPrice ?? null,
        sellingPrice: data.sellingPrice,
        estimatedDurationMinutes: data.estimatedDurationMinutes ?? null,
        notes: data.notes?.trim() || null,
      },
      select: { id: true },
    });
    if (data.deviceCategoryIds?.length) {
      await prisma.serviceDeviceCategory.createMany({
        data: data.deviceCategoryIds.map((dcId) => ({
          serviceId: service.id,
          deviceCategoryId: dcId,
        })),
        skipDuplicates: true,
      });
    }
    if (data.groupPrices?.length) {
      await prisma.serviceGroupPrice.createMany({
        data: data.groupPrices.map((gp) => ({
          companyId: session.companyId,
          serviceId: service.id,
          groupId: gp.groupId,
          price: gp.price,
        })),
        skipDuplicates: true,
      });
    }
    revalidatePath("/dashboard/services");
    return service;
  } catch (e) {
    if (isP2002(e)) return { error: "Ce SKU est déjà utilisé dans cette boutique" };
    console.error("createService:", e);
    return { error: "Erreur lors de la création du service" };
  }
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updateService(
  id: string,
  data: {
    nameFr: string;
    nameEn?: string;
    nameAr?: string;
    sku?: string;
    serviceTypeId?: string;
    deviceCategoryIds?: string[];
    basePrice?: number;
    costPrice?: number;
    sellingPrice: number;
    estimatedDurationMinutes?: number;
    notes?: string;
    groupPrices?: { groupId: string; price: number }[];
  }
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const existing = await prisma.service.findFirst({
    where: { id, storeId },
    select: { id: true, sku: true },
  });
  if (!existing) return { error: "Service introuvable" };

  const nameFr = data.nameFr.trim();
  if (!nameFr) return { error: "Un nom est requis" };

  if (data.serviceTypeId) {
    const st = await prisma.serviceType.findFirst({
      where: { id: data.serviceTypeId, companyId: session.companyId },
      select: { id: true },
    });
    if (!st) return { error: "Type de service introuvable" };
  }

  const sku = data.sku?.trim() || existing.sku;

  try {
    await prisma.service.update({
      where: { id },
      data: {
        nameFr,
        nameEn: data.nameEn?.trim() || null,
        nameAr: data.nameAr?.trim() || null,
        sku,
        serviceTypeId: data.serviceTypeId || null,
        basePrice: data.basePrice ?? data.sellingPrice,
        costPrice: data.costPrice ?? null,
        sellingPrice: data.sellingPrice,
        estimatedDurationMinutes: data.estimatedDurationMinutes ?? null,
        notes: data.notes?.trim() || null,
      },
    });
    if (data.deviceCategoryIds !== undefined) {
      await prisma.serviceDeviceCategory.deleteMany({ where: { serviceId: id } });
      if (data.deviceCategoryIds.length > 0) {
        await prisma.serviceDeviceCategory.createMany({
          data: data.deviceCategoryIds.map((dcId) => ({ serviceId: id, deviceCategoryId: dcId })),
        });
      }
    }
    if (data.groupPrices !== undefined) {
      await prisma.serviceGroupPrice.deleteMany({ where: { serviceId: id } });
      if (data.groupPrices.length > 0) {
        await prisma.serviceGroupPrice.createMany({
          data: data.groupPrices.map((gp) => ({
            companyId: session.companyId,
            serviceId: id,
            groupId: gp.groupId,
            price: gp.price,
          })),
        });
      }
    }
  } catch (e) {
    if (isP2002(e)) return { error: "Ce SKU est déjà utilisé dans cette boutique" };
    console.error("updateService:", e);
    return { error: "Erreur lors de la mise à jour" };
  }

  revalidatePath("/dashboard/services");
}

// ─── Archive / Reactivate ─────────────────────────────────────────────────────

export async function archiveService(id: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  const existing = await prisma.service.findFirst({
    where: { id, storeId, isArchived: false },
    select: { id: true },
  });
  if (!existing) return { error: "Service introuvable" };

  await prisma.service.update({ where: { id }, data: { isArchived: true } });
  revalidatePath("/dashboard/services");
}

export async function reactivateService(id: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const storeId = session.storeIds[0];
  const existing = await prisma.service.findFirst({
    where: { id, storeId, isArchived: true },
    select: { id: true },
  });
  if (!existing) return { error: "Service introuvable" };

  await prisma.service.update({ where: { id }, data: { isArchived: false } });
  revalidatePath("/dashboard/services");
}
