export const INVENTORY_DEVICE_SCOPE_KEYS = [
  "phone",
  "tablet",
  "laptop",
  "desktop",
  "printer",
  "console",
] as const;

export type InventoryDeviceScopeKey = (typeof INVENTORY_DEVICE_SCOPE_KEYS)[number];

export const DEVICE_SCOPE_KEYWORDS: Record<InventoryDeviceScopeKey, string[]> = {
  phone: ["phone", "mobile", "iphone", "smartphone", "galaxy", "telephone", "téléphone", "android"],
  tablet: ["tablet", "tablette", "ipad", "tab"],
  laptop: ["laptop", "notebook", "portable", "macbook", "ultrabook", "chromebook"],
  desktop: ["desktop", "ordinateur", "pc bureau", "all-in-one", "tour", "workstation"],
  printer: ["printer", "imprimante", "toner", "ink", "cartouche", "fuser", "duplicateur", "risograph"],
  console: ["console", "playstation", "xbox", "nintendo", "switch"],
};

export function normalizeText(value: string): string {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function normalizeDeviceScopeKey(value: string): InventoryDeviceScopeKey | null {
  if (INVENTORY_DEVICE_SCOPE_KEYS.includes(value as InventoryDeviceScopeKey)) {
    return value as InventoryDeviceScopeKey;
  }
  return null;
}

export function normalizeDeviceScopeKeys(values: string[] | null | undefined): InventoryDeviceScopeKey[] {
  if (!values?.length) return [];
  const normalized = values
    .map((value) => normalizeDeviceScopeKey(value))
    .filter((value): value is InventoryDeviceScopeKey => Boolean(value));
  return Array.from(new Set(normalized));
}

export function isCategoryPathInScopes(
  categoryName: string | null | undefined,
  scopes: InventoryDeviceScopeKey[]
): boolean {
  if (!scopes.length) return true;
  if (!categoryName) return false;

  const haystack = normalizeText(categoryName);
  return scopes.some((scope) =>
    DEVICE_SCOPE_KEYWORDS[scope].some((keyword) => haystack.includes(normalizeText(keyword)))
  );
}

export function isDeviceCategoryKeyInScopes(
  categoryKey: string | null | undefined,
  scopes: InventoryDeviceScopeKey[]
): boolean {
  if (!scopes.length) return true;
  if (!categoryKey) return false;
  return scopes.includes(categoryKey as InventoryDeviceScopeKey);
}
