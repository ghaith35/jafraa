import { prisma } from "@/lib/db";
import {
  INVENTORY_DEVICE_SCOPE_KEYS,
  isDeviceCategoryKeyInScopes,
  isCategoryPathInScopes,
  normalizeDeviceScopeKeys,
  type InventoryDeviceScopeKey,
} from "./device-scope";

function readScopesFromBusinessHoursJson(value: unknown): InventoryDeviceScopeKey[] {
  if (!value || typeof value !== "object") return [];
  const raw = (value as Record<string, unknown>).inventoryDeviceScopes;
  if (!Array.isArray(raw)) return [];
  const values = raw.filter((item): item is string => typeof item === "string");
  const scopes = normalizeDeviceScopeKeys(values);
  if (!scopes.length || scopes.length === INVENTORY_DEVICE_SCOPE_KEYS.length) return [];
  return scopes;
}

export async function getStoreInventoryDeviceScopes(storeId: string): Promise<InventoryDeviceScopeKey[]> {
  const store = await prisma.store.findUnique({
    where: { id: storeId },
    select: { businessHoursJson: true },
  });
  return readScopesFromBusinessHoursJson(store?.businessHoursJson);
}

export async function getAllowedInventoryCategoryIds(opts: {
  storeId: string;
  itemType: "product" | "part";
}): Promise<string[] | null> {
  const scopes = await getStoreInventoryDeviceScopes(opts.storeId);
  if (!scopes.length) return null;

  const categories = await prisma.inventoryCategory.findMany({
    where: { storeId: opts.storeId, itemType: opts.itemType },
    select: { id: true, name: true, deviceCategory: { select: { key: true } } },
  });

  const allowed = categories
    .filter((category) => {
      if (category.deviceCategory?.key) {
        return isDeviceCategoryKeyInScopes(category.deviceCategory.key, scopes);
      }
      return isCategoryPathInScopes(category.name, scopes);
    })
    .map((category) => category.id);

  return allowed;
}

export function isInventoryCategoryAllowedByScope(
  input: {
    name: string | null | undefined;
    deviceCategoryKey?: string | null;
  },
  scopes: InventoryDeviceScopeKey[]
): boolean {
  if (!scopes.length) return true;
  if (input.deviceCategoryKey) {
    return isDeviceCategoryKeyInScopes(input.deviceCategoryKey, scopes);
  }
  return isCategoryPathInScopes(input.name, scopes);
}
