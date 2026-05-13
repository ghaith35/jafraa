"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { revalidatePath } from "next/cache";
import {
  createCustomerGroupSchema,
  updateCustomerGroupSchema,
  type CreateCustomerGroupInput,
  type UpdateCustomerGroupInput,
} from "../schemas/customer-group.schema";

type ActionError = { error: string };

export async function listCustomerGroups() {
  const session = await getSession();
  if (!session) return [];

  return prisma.customerGroup.findMany({
    where: { companyId: session.companyId, isArchived: false },
    orderBy: { name: "asc" },
    include: { _count: { select: { customers: true } } },
  });
}

export async function listAllCustomerGroups() {
  const session = await getSession();
  if (!session) return [];

  return prisma.customerGroup.findMany({
    where: { companyId: session.companyId },
    orderBy: { name: "asc" },
    include: { _count: { select: { customers: true } } },
  });
}

export async function getCustomerGroup(id: string) {
  const session = await getSession();
  if (!session) return null;

  return prisma.customerGroup.findFirst({
    where: { id, companyId: session.companyId },
    include: { _count: { select: { customers: true } } },
  });
}

export async function createCustomerGroup(
  data: CreateCustomerGroupInput
): Promise<ActionError | { id: string; name: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const parsed = createCustomerGroupSchema.safeParse(data);
  if (!parsed.success) return { error: parsed.error.errors[0]?.message || "Données invalides" };

  const group = await prisma.customerGroup.create({
    data: {
      companyId: session.companyId,
      name: parsed.data.name,
      defaultDiscountPercent: 0,
    },
    select: { id: true, name: true },
  });

  revalidatePath("/dashboard/customers");
  revalidatePath("/dashboard/customers/groups");

  return group;
}

export async function updateCustomerGroup(
  id: string,
  data: UpdateCustomerGroupInput
): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const parsed = updateCustomerGroupSchema.safeParse(data);
  if (!parsed.success) return { error: parsed.error.errors[0]?.message || "Données invalides" };

  const existing = await prisma.customerGroup.findFirst({
    where: { id, companyId: session.companyId },
  });
  if (!existing) return { error: "Groupe introuvable" };

  await prisma.customerGroup.update({
    where: { id },
    data: { name: parsed.data.name },
  });

  revalidatePath("/dashboard/customers");
  revalidatePath("/dashboard/customers/groups");

  return { success: true };
}

export async function archiveCustomerGroup(id: string): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const existing = await prisma.customerGroup.findFirst({
    where: { id, companyId: session.companyId },
  });
  if (!existing) return { error: "Groupe introuvable" };

  await prisma.customerGroup.update({
    where: { id },
    data: { isArchived: true },
  });

  revalidatePath("/dashboard/customers");
  revalidatePath("/dashboard/customers/groups");

  return { success: true };
}

export async function unarchiveCustomerGroup(id: string): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const existing = await prisma.customerGroup.findFirst({
    where: { id, companyId: session.companyId },
  });
  if (!existing) return { error: "Groupe introuvable" };

  await prisma.customerGroup.update({
    where: { id },
    data: { isArchived: false },
  });

  revalidatePath("/dashboard/customers");
  revalidatePath("/dashboard/customers/groups");

  return { success: true };
}
