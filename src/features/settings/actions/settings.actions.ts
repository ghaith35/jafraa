"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { revalidatePath } from "next/cache";
import {
  INVENTORY_DEVICE_SCOPE_KEYS,
  normalizeDeviceScopeKeys,
  type InventoryDeviceScopeKey,
} from "@/features/inventory/lib/device-scope";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StoreProfileData {
  name: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  prefix: string;
}

export interface StoreSettingsData {
  warrantyDaysDefault: number;
  abandonedDeviceNoticeDays: number;
  abandonedDeviceThresholdDays: number;
  pickupOverdueDays: number;
  lowStockDefaultThreshold: number;
  cashierDiscountThresholdPct: number;
  refundApprovalThreshold: number;
  whatsappPhone: string | null;
  inventoryDeviceScopes: InventoryDeviceScopeKey[];
}

export interface FullStoreConfig {
  profile: StoreProfileData;
  settings: StoreSettingsData;
}

// ─── Fetch ────────────────────────────────────────────────────────────────────

export async function getStoreConfig(): Promise<FullStoreConfig | null> {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const [store, settings] = await Promise.all([
    prisma.store.findUnique({
      where: { id: storeId },
      select: { name: true, address: true, phone: true, email: true, prefix: true, businessHoursJson: true },
    }),
    prisma.storeSettings.findUnique({
      where: { storeId },
    }),
  ]);

  if (!store) return null;
  const businessHoursJson =
    store.businessHoursJson && typeof store.businessHoursJson === "object"
      ? (store.businessHoursJson as Record<string, unknown>)
      : {};
  const rawScopes = Array.isArray(businessHoursJson.inventoryDeviceScopes)
    ? businessHoursJson.inventoryDeviceScopes.filter((item): item is string => typeof item === "string")
    : [];
  const normalizedScopes = normalizeDeviceScopeKeys(rawScopes);
  const inventoryDeviceScopes =
    normalizedScopes.length && normalizedScopes.length < INVENTORY_DEVICE_SCOPE_KEYS.length
      ? normalizedScopes
      : [...INVENTORY_DEVICE_SCOPE_KEYS];

  return {
    profile: {
      name: store.name,
      address: store.address,
      phone: store.phone,
      email: store.email,
      prefix: store.prefix,
    },
    settings: {
      warrantyDaysDefault: settings?.warrantyDaysDefault ?? 30,
      abandonedDeviceNoticeDays: settings?.abandonedDeviceNoticeDays ?? 14,
      abandonedDeviceThresholdDays: settings?.abandonedDeviceThresholdDays ?? 30,
      pickupOverdueDays: settings?.pickupOverdueDays ?? 7,
      lowStockDefaultThreshold: settings?.lowStockDefaultThreshold ?? 5,
      cashierDiscountThresholdPct: Number(settings?.cashierDiscountThresholdPct ?? 5),
      refundApprovalThreshold: Number(settings?.refundApprovalThreshold ?? 10000),
      whatsappPhone: settings?.whatsappPhone ?? null,
      inventoryDeviceScopes,
    },
  };
}

// ─── Save profile ─────────────────────────────────────────────────────────────

export async function saveStoreProfile(data: StoreProfileData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  if (!hasPermission(session.role, "settings:manage")) throw new Error("Forbidden");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("No store");

  // Don't allow changing prefix — it affects document numbering
  await prisma.store.update({
    where: { id: storeId },
    data: {
      name: data.name.trim(),
      address: data.address?.trim() || null,
      phone: data.phone?.trim() || null,
      email: data.email?.trim() || null,
    },
  });

  revalidatePath("/dashboard/settings/store");
  revalidatePath("/dashboard");
  return { success: true };
}

// ─── Save settings ────────────────────────────────────────────────────────────

export async function saveStoreSettings(data: Partial<StoreSettingsData>) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  if (!hasPermission(session.role, "settings:manage")) throw new Error("Forbidden");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("No store");

  const updateData: Record<string, unknown> = { updatedBy: session.sub };

  if (data.warrantyDaysDefault !== undefined)
    updateData.warrantyDaysDefault = data.warrantyDaysDefault;
  if (data.abandonedDeviceNoticeDays !== undefined)
    updateData.abandonedDeviceNoticeDays = data.abandonedDeviceNoticeDays;
  if (data.abandonedDeviceThresholdDays !== undefined)
    updateData.abandonedDeviceThresholdDays = data.abandonedDeviceThresholdDays;
  if (data.pickupOverdueDays !== undefined)
    updateData.pickupOverdueDays = data.pickupOverdueDays;
  if (data.lowStockDefaultThreshold !== undefined)
    updateData.lowStockDefaultThreshold = data.lowStockDefaultThreshold;
  if (data.cashierDiscountThresholdPct !== undefined)
    updateData.cashierDiscountThresholdPct = data.cashierDiscountThresholdPct;
  if (data.refundApprovalThreshold !== undefined)
    updateData.refundApprovalThreshold = data.refundApprovalThreshold;
  if (data.whatsappPhone !== undefined)
    updateData.whatsappPhone = data.whatsappPhone || null;

  if (data.inventoryDeviceScopes !== undefined) {
    const incoming = normalizeDeviceScopeKeys(data.inventoryDeviceScopes);
    const nextScopes =
      incoming.length && incoming.length < INVENTORY_DEVICE_SCOPE_KEYS.length
        ? incoming
        : [...INVENTORY_DEVICE_SCOPE_KEYS];

    const store = await prisma.store.findUnique({
      where: { id: storeId },
      select: { businessHoursJson: true },
    });
    const current =
      store?.businessHoursJson && typeof store.businessHoursJson === "object"
        ? (store.businessHoursJson as Record<string, unknown>)
        : {};
    await prisma.store.update({
      where: { id: storeId },
      data: {
        businessHoursJson: {
          ...current,
          inventoryDeviceScopes: nextScopes,
        },
      },
    });
  }

  await prisma.storeSettings.upsert({
    where: { storeId },
    update: updateData,
    create: { storeId, ...updateData },
  });

  revalidatePath("/dashboard/settings/store");
  return { success: true };
}
