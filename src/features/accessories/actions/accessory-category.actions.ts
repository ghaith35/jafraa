"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";

export interface AccessoryCategoryNode {
  id: string;
  parentId: string | null;
  name: string;
  sortOrder: number;
  isActive: boolean;
  children: AccessoryCategoryNode[];
  itemCount: number;
}

function buildTree(
  flat: Array<{
    id: string;
    parentId: string | null;
    name: string;
    sortOrder: number;
    isActive: boolean;
    _count: { items: number; children: number };
  }>,
  parentId: string | null = null
): AccessoryCategoryNode[] {
  return flat
    .filter((c) => c.parentId === parentId)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name))
    .map((c) => ({
      id: c.id,
      parentId: c.parentId,
      name: c.name,
      sortOrder: c.sortOrder,
      isActive: c.isActive,
      itemCount: c._count.items,
      children: buildTree(flat, c.id),
    }));
}

export async function listAccessoryCategories() {
  const session = await getSession();
  if (!session) return [];
  const storeId = session.storeIds[0];
  if (!storeId) return [];

  const categories = await prisma.accessoryCategory.findMany({
    where: { storeId },
    include: { _count: { select: { items: true, children: true } } },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
  });

  return buildTree(categories as typeof categories);
}

export async function createAccessoryCategory(data: {
  parentId?: string | null;
  name: string;
  sortOrder?: number;
}) {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission refusée" };
  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucun magasin" };

  const existing = await prisma.accessoryCategory.findFirst({
    where: { storeId, parentId: data.parentId ?? null, name: { equals: data.name, mode: "insensitive" } },
    select: { id: true },
  });
  if (existing) return { error: "Une catégorie avec ce nom existe déjà à ce niveau" };

  const sortOrder = data.sortOrder ?? 0;
  await prisma.accessoryCategory.create({
    data: { storeId, parentId: data.parentId ?? null, name: data.name, sortOrder },
  });

  revalidatePath("/dashboard/inventory/accessories");
  return { success: true };
}

export async function updateAccessoryCategory(data: {
  id: string;
  name?: string;
  sortOrder?: number;
  isActive?: boolean;
}) {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission refusée" };

  await prisma.accessoryCategory.update({ where: { id: data.id }, data });

  revalidatePath("/dashboard/inventory/accessories");
  return { success: true };
}

export async function deleteAccessoryCategory(id: string) {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) return { error: "Permission refusée" };

  const cat = await prisma.accessoryCategory.findUnique({
    where: { id },
    include: { _count: { select: { children: true, items: true } } },
  });
  if (!cat) return { error: "Catégorie introuvable" };
  if (cat._count.children > 0) return { error: "Supprimez d'abord les sous-catégories" };
  if (cat._count.items > 0) return { error: "Supprimez d'abord les articles de cette catégorie" };

  await prisma.accessoryCategory.delete({ where: { id } });

  revalidatePath("/dashboard/inventory/accessories");
  return { success: true };
}

export async function getCategoryBreadcrumb(id: string) {
  const session = await getSession();
  if (!session) return [];
  const storeId = session.storeIds[0];
  if (!storeId) return [];

  const all = await prisma.accessoryCategory.findMany({
    where: { storeId },
    select: { id: true, parentId: true, name: true },
  });

  const map = new Map(all.map((c) => [c.id, c]));
  const breadcrumb: { id: string; name: string }[] = [];
  let current = map.get(id);
  while (current) {
    breadcrumb.unshift({ id: current.id, name: current.name });
    current = current.parentId ? map.get(current.parentId) : undefined;
  }
  return breadcrumb;
}
