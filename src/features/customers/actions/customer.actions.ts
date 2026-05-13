"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import {
  createCustomerSchema,
  updateCustomerSchema,
  type CreateCustomerInput,
  type UpdateCustomerInput,
} from "../schemas/customer.schema";

type ActionError = { error: string };
type ActionSuccess = { success: true; redirect?: string };

function normalizePhone(p: string): string {
  return p.replace(/[\s\-\(\)\.]/g, "");
}

function isP2002(e: unknown): boolean {
  return (
    e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002"
  );
}

export async function createCustomer(
  data: CreateCustomerInput
): Promise<ActionError | ActionSuccess> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const parsed = createCustomerSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const { name, phone, languagePreference, address, notes, customerGroupId } =
    parsed.data;

  let newId: string;
  try {
    const customer = await prisma.$transaction(async (tx) => {
      const c = await tx.customer.create({
        data: {
          companyId: session.companyId,
          customerType: "named",
          name,
          languagePreference: languagePreference ?? "fr",
          address: address ?? undefined,
          notes: notes ?? undefined,
          customerGroupId: customerGroupId ?? undefined,
        },
      });

      if (phone) {
        await tx.customerPhone.create({
          data: {
            customerId: c.id,
            companyId: session.companyId,
            phoneNumber: normalizePhone(phone),
            isPrimary: true,
          },
        });
      }

      return c;
    });
    newId = customer.id;
  } catch (e) {
    if (isP2002(e)) {
      return { error: "Ce numéro est déjà associé à un autre client de cette entreprise" };
    }
    console.error("createCustomer:", e);
    return { error: "Une erreur est survenue lors de la création" };
  }

  revalidatePath("/dashboard/customers");
  return { success: true, redirect: `/dashboard/customers/${newId}` };
}

export async function updateCustomer(
  id: string,
  data: UpdateCustomerInput
): Promise<ActionError | ActionSuccess> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const parsed = updateCustomerSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const existing = await prisma.customer.findFirst({
    where: { id, companyId: session.companyId, isArchived: false },
    select: { id: true },
  });
  if (!existing) return { error: "Client introuvable" };

  const { name, languagePreference, address, notes, customerGroupId } = parsed.data;

  try {
    await prisma.customer.update({
      where: { id },
      data: {
        name,
        languagePreference,
        address: address ?? undefined,
        notes: notes ?? undefined,
        customerGroupId: customerGroupId ?? undefined,
      },
    });
  } catch (e) {
    console.error("updateCustomer:", e);
    return { error: "Une erreur est survenue lors de la mise à jour" };
  }

  revalidatePath(`/dashboard/customers/${id}`);
  revalidatePath("/dashboard/customers");
  return { success: true, redirect: `/dashboard/customers/${id}` };
}

export async function archiveCustomer(id: string): Promise<ActionError | ActionSuccess> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  if (!hasPermission(session.role, "customers:manage")) {
    return { error: "Permission refusée" };
  }

  const existing = await prisma.customer.findFirst({
    where: { id, companyId: session.companyId, isArchived: false },
    select: { id: true },
  });
  if (!existing) return { error: "Client introuvable" };

  try {
    await prisma.customer.update({
      where: { id },
      data: { isArchived: true },
    });
  } catch (e) {
    console.error("archiveCustomer:", e);
    return { error: "Une erreur est survenue" };
  }

  revalidatePath("/dashboard/customers");
  return { success: true, redirect: "/dashboard/customers" };
}

export async function addPhone(
  customerId: string,
  phoneNumber: string,
  isPrimary: boolean = false
): Promise<ActionError | { success: true }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const customer = await prisma.customer.findFirst({
    where: { id: customerId, companyId: session.companyId, isArchived: false },
    select: { id: true },
  });
  if (!customer) return { error: "Client introuvable" };

  const normalized = normalizePhone(phoneNumber.trim());

  try {
    if (isPrimary) {
      await prisma.$transaction([
        prisma.customerPhone.updateMany({
          where: { customerId },
          data: { isPrimary: false },
        }),
        prisma.customerPhone.create({
          data: {
            customerId,
            companyId: session.companyId,
            phoneNumber: normalized,
            isPrimary: true,
          },
        }),
      ]);
    } else {
      await prisma.customerPhone.create({
        data: {
          customerId,
          companyId: session.companyId,
          phoneNumber: normalized,
          isPrimary: false,
        },
      });
    }
  } catch (e) {
    if (isP2002(e)) {
      return { error: "Ce numéro est déjà utilisé dans cette entreprise" };
    }
    console.error("addPhone:", e);
    return { error: "Une erreur est survenue" };
  }

  revalidatePath(`/dashboard/customers/${customerId}`);
  return { success: true };
}

export async function removePhone(
  phoneId: string,
  customerId: string
): Promise<ActionError | { success: true }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const phone = await prisma.customerPhone.findFirst({
    where: { id: phoneId, companyId: session.companyId },
    select: { id: true, isPrimary: true },
  });
  if (!phone) return { error: "Numéro introuvable" };
  if (phone.isPrimary) {
    return { error: "Impossible de supprimer le numéro principal" };
  }

  try {
    await prisma.customerPhone.delete({ where: { id: phoneId } });
  } catch (e) {
    console.error("removePhone:", e);
    return { error: "Une erreur est survenue" };
  }

  revalidatePath(`/dashboard/customers/${customerId}`);
  return { success: true };
}
