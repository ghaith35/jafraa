"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import {
  createServiceSchema,
  type CreateServiceInput,
} from "../schemas/inventory.schema";
import { generateSku } from "../lib/sku";

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
}) {
  const session = await getSession();
  if (!session) return [];

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return [];

  const services = await prisma.service.findMany({
    where: {
      storeId,
      isArchived: opts?.showArchived ? undefined : false,
      ...(opts?.q
        ? {
            OR: [
              { name: { contains: opts.q, mode: "insensitive" } },
              { sku: { contains: opts.q, mode: "insensitive" } },
              { category: { contains: opts.q, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    orderBy: { name: "asc" },
    take: 200,
  });

  return services.map(s => ({
    ...s,
    sellingPrice: Number(s.sellingPrice),
  }));
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getService(id: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const service = await prisma.service.findFirst({ where: { id, storeId } });
  if (!service) return null;
  return {
    ...service,
    sellingPrice: Number(service.sellingPrice),
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

  let sku = d.sku?.trim() || "";
  if (!sku) {
    sku = await generateSku(storeId, "service");
  }

  try {
    const service = await prisma.service.create({
      data: {
        storeId,
        name: d.name,
        sku,
        category: d.category || undefined,
        sellingPrice: d.sellingPrice,
        estimatedDurationMinutes: d.estimatedDurationMinutes ?? undefined,
        notes: d.notes || undefined,
      },
    });
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
  const sku = d.sku?.trim() || existing.sku;

  try {
    await prisma.service.update({
      where: { id },
      data: {
        name: d.name,
        sku,
        category: d.category || null,
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

  revalidatePath("/dashboard/inventory");
  revalidatePath(`/dashboard/inventory/services/${id}`);
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

  revalidatePath("/dashboard/inventory");
}
