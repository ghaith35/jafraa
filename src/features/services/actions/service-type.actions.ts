"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { BASE_SERVICE_TYPE_KEYS } from "../config/service-types";

type ActionError = { error: string };

export interface ServiceTypeRecord {
  id: string;
  baseKey: string | null;
  isBase: boolean;
  nameFr: string;
  nameEn: string | null;
  nameAr: string | null;
  sortOrder: number;
  isActive: boolean;
  serviceCount: number;
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listServiceTypes(opts?: {
  includeInactive?: boolean;
}): Promise<ServiceTypeRecord[]> {
  const session = await getSession();
  if (!session) return [];

  const types = await prisma.serviceType.findMany({
    where: {
      companyId: session.companyId,
      ...(opts?.includeInactive ? {} : { isActive: true }),
    },
    include: { _count: { select: { services: true } } },
    orderBy: [{ sortOrder: "asc" }, { nameFr: "asc" }],
  });

  return types.map((t) => ({
    id: t.id,
    baseKey: t.baseKey,
    isBase: t.isBase,
    nameFr: t.nameFr,
    nameEn: t.nameEn,
    nameAr: t.nameAr,
    sortOrder: t.sortOrder,
    isActive: t.isActive,
    serviceCount: t._count.services,
  }));
}

// ─── Create custom type ────────────────────────────────────────────────────────

export async function createServiceType(data: {
  nameFr: string;
  nameEn?: string;
  nameAr?: string;
  sortOrder?: number;
}): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const nameFr = data.nameFr.trim();
  if (!nameFr) return { error: "Le nom FR est obligatoire" };

  const existing = await prisma.serviceType.findFirst({
    where: { companyId: session.companyId, nameFr: { equals: nameFr, mode: "insensitive" }, baseKey: null },
  });
  if (existing) return { error: "Un type de service avec ce nom existe déjà" };

  const created = await prisma.serviceType.create({
    data: {
      companyId: session.companyId,
      baseKey: null,
      isBase: false,
      nameFr,
      nameEn: data.nameEn?.trim() || null,
      nameAr: data.nameAr?.trim() || null,
      sortOrder: data.sortOrder ?? 99,
      isActive: true,
    },
    select: { id: true },
  });

  revalidatePath("/dashboard/services");
  return created;
}

// ─── Update (rename) ──────────────────────────────────────────────────────────

export async function updateServiceType(
  id: string,
  data: { nameFr: string; nameEn?: string; nameAr?: string; sortOrder?: number }
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const nameFr = data.nameFr.trim();
  if (!nameFr) return { error: "Le nom FR est obligatoire" };

  const existing = await prisma.serviceType.findFirst({
    where: { id, companyId: session.companyId },
    select: { id: true },
  });
  if (!existing) return { error: "Type de service introuvable" };

  await prisma.serviceType.update({
    where: { id },
    data: {
      nameFr,
      nameEn: data.nameEn?.trim() || null,
      nameAr: data.nameAr?.trim() || null,
      ...(data.sortOrder !== undefined ? { sortOrder: data.sortOrder } : {}),
    },
  });

  revalidatePath("/dashboard/services");
  revalidatePath("/dashboard/settings/services");
}

// ─── Toggle active/inactive ────────────────────────────────────────────────────

export async function toggleServiceType(id: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const existing = await prisma.serviceType.findFirst({
    where: { id, companyId: session.companyId },
    select: { id: true, isActive: true },
  });
  if (!existing) return { error: "Type de service introuvable" };

  await prisma.serviceType.update({
    where: { id },
    data: { isActive: !existing.isActive },
  });

  revalidatePath("/dashboard/services");
  revalidatePath("/dashboard/settings/services");
}

// ─── Delete (custom only) ──────────────────────────────────────────────────────

export async function deleteServiceType(id: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission insuffisante" };

  const existing = await prisma.serviceType.findFirst({
    where: { id, companyId: session.companyId },
    select: { id: true, isBase: true, _count: { select: { services: true } } },
  });
  if (!existing) return { error: "Type de service introuvable" };
  if (existing.isBase) return { error: "Les types de base ne peuvent pas être supprimés" };
  if (existing._count.services > 0) return { error: "Impossible de supprimer un type utilisé par des services" };

  await prisma.serviceType.delete({ where: { id } });

  revalidatePath("/dashboard/services");
  revalidatePath("/dashboard/settings/services");
}

// ─── Ensure base types exist for company (called on company creation) ──────────

export async function ensureBaseServiceTypes(companyId: string): Promise<void> {
  const { BASE_SERVICE_TYPE_DEFAULTS } = await import("../config/service-types");

  for (const key of BASE_SERVICE_TYPE_KEYS) {
    const defaults = BASE_SERVICE_TYPE_DEFAULTS[key];
    const exists = await prisma.serviceType.findFirst({
      where: { companyId, baseKey: key },
      select: { id: true },
    });
    if (!exists) {
      await prisma.serviceType.create({
        data: {
          companyId,
          baseKey: key,
          isBase: true,
          nameFr: defaults.nameFr,
          nameEn: defaults.nameEn,
          nameAr: defaults.nameAr,
          sortOrder: defaults.sortOrder,
          isActive: true,
        },
      });
    }
  }
}
