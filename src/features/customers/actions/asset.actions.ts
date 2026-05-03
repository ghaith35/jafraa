"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import {
  createAssetSchema,
  type CreateAssetInput,
} from "../schemas/asset.schema";

type ActionError = { error: string };

export async function createAsset(
  customerId: string,
  data: CreateAssetInput
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  // Verify the customer belongs to the user's company
  const customer = await prisma.customer.findFirst({
    where: { id: customerId, companyId: session.companyId, isArchived: false },
    select: { id: true },
  });
  if (!customer) return { error: "Client introuvable" };

  const parsed = createAssetSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const {
    deviceCategoryId,
    deviceBrandId,
    deviceModelFamilyId,
    deviceTypeName,
    customBrand,
    customModel,
    color,
    storage,
    imeiSerial,
    notes,
  } = parsed.data;

  try {
    await prisma.customerAsset.create({
      data: {
        customerId,
        deviceCategoryId: deviceCategoryId || undefined,
        deviceBrandId: deviceBrandId || undefined,
        deviceModelFamilyId: deviceModelFamilyId || undefined,
        deviceTypeName: deviceTypeName ?? undefined,
        customBrand: customBrand ?? undefined,
        customModel: customModel ?? undefined,
        color: color ?? undefined,
        storage: storage ?? undefined,
        imeiSerial: imeiSerial ?? undefined,
        notes: notes ?? undefined,
      },
    });
  } catch (e) {
    console.error("createAsset:", e);
    return { error: "Une erreur est survenue lors de l'ajout de l'appareil" };
  }

  revalidatePath(`/dashboard/customers/${customerId}`);
}

export async function updateAsset(
  assetId: string,
  customerId: string,
  data: CreateAssetInput
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  // Verify asset belongs to a customer in the user's company
  const asset = await prisma.customerAsset.findFirst({
    where: {
      id: assetId,
      customer: { companyId: session.companyId },
      isArchived: false,
    },
    select: { id: true },
  });
  if (!asset) return { error: "Appareil introuvable" };

  const parsed = createAssetSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const {
    deviceCategoryId,
    deviceBrandId,
    deviceModelFamilyId,
    deviceTypeName,
    customBrand,
    customModel,
    color,
    storage,
    imeiSerial,
    notes,
  } = parsed.data;

  try {
    await prisma.customerAsset.update({
      where: { id: assetId },
      data: {
        deviceCategoryId: deviceCategoryId || null,
        deviceBrandId: deviceBrandId || null,
        deviceModelFamilyId: deviceModelFamilyId || null,
        deviceTypeName: deviceTypeName ?? null,
        customBrand: customBrand ?? null,
        customModel: customModel ?? null,
        color: color ?? null,
        storage: storage ?? null,
        imeiSerial: imeiSerial ?? null,
        notes: notes ?? null,
      },
    });
  } catch (e) {
    console.error("updateAsset:", e);
    return { error: "Une erreur est survenue lors de la mise à jour" };
  }

  revalidatePath(`/dashboard/customers/${customerId}`);
}

export async function archiveAsset(
  assetId: string,
  customerId: string
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const asset = await prisma.customerAsset.findFirst({
    where: {
      id: assetId,
      customer: { companyId: session.companyId },
      isArchived: false,
    },
    select: { id: true },
  });
  if (!asset) return { error: "Appareil introuvable" };

  try {
    await prisma.customerAsset.update({
      where: { id: assetId },
      data: { isArchived: true },
    });
  } catch (e) {
    console.error("archiveAsset:", e);
    return { error: "Une erreur est survenue" };
  }

  revalidatePath(`/dashboard/customers/${customerId}`);
}
