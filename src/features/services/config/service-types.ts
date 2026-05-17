// SaaS-level service type configuration.
// BASE_SERVICE_TYPE_KEYS are fixed by the platform — tenants can rename them
// but cannot delete them. Tenants may also add custom types (baseKey = null).

export const BASE_SERVICE_TYPE_KEYS = [
  "repair",
  "software",
  "unlocking",
  "maintenance",
  "diagnostic",
  "upgrade",
  "cleaning",
  "other",
] as const;

export type BaseServiceTypeKey = (typeof BASE_SERVICE_TYPE_KEYS)[number];

// Default multilingual names for each base type
export const BASE_SERVICE_TYPE_DEFAULTS: Record<
  BaseServiceTypeKey,
  { nameFr: string; nameEn: string; nameAr: string; sortOrder: number }
> = {
  repair:      { nameFr: "Réparation",    nameEn: "Repair",       nameAr: "إصلاح",         sortOrder: 1 },
  software:    { nameFr: "Logiciel",      nameEn: "Software",     nameAr: "برمجيات",       sortOrder: 2 },
  unlocking:   { nameFr: "Déverrouillage",nameEn: "Unlocking",    nameAr: "فتح القفل",     sortOrder: 3 },
  maintenance: { nameFr: "Maintenance",   nameEn: "Maintenance",  nameAr: "صيانة",         sortOrder: 4 },
  diagnostic:  { nameFr: "Diagnostic",    nameEn: "Diagnostic",   nameAr: "تشخيص",         sortOrder: 5 },
  upgrade:     { nameFr: "Upgrade",       nameEn: "Upgrade",      nameAr: "ترقية",         sortOrder: 6 },
  cleaning:    { nameFr: "Nettoyage",     nameEn: "Cleaning",     nameAr: "تنظيف",         sortOrder: 7 },
  other:       { nameFr: "Autre",         nameEn: "Other",        nameAr: "أخرى",          sortOrder: 8 },
};

// Which service types are relevant for each device category key.
// Used to filter the service type picker when creating a service for a given device.
// Also used to order group headers on the services list page.
// Device categories not listed here fall back to DEVICE_DEFAULT_SERVICE_TYPES.
export const DEVICE_SERVICE_TYPE_MAP: Record<string, BaseServiceTypeKey[]> = {
  phone:    ["repair", "software", "unlocking", "maintenance", "diagnostic", "cleaning", "other"],
  tablet:   ["repair", "software", "unlocking", "maintenance", "diagnostic", "cleaning", "other"],
  laptop:   ["repair", "software", "upgrade", "maintenance", "diagnostic", "cleaning", "other"],
  desktop:  ["repair", "software", "upgrade", "maintenance", "diagnostic", "cleaning", "other"],
  printer:  ["repair", "maintenance", "diagnostic", "cleaning", "other"],
  console:  ["repair", "maintenance", "diagnostic", "cleaning", "other"],
  screen:   ["repair", "diagnostic", "other"],
  other:    ["repair", "maintenance", "diagnostic", "other"],
};

export const DEVICE_DEFAULT_SERVICE_TYPES: BaseServiceTypeKey[] = [
  "repair", "maintenance", "diagnostic", "other",
];

export function getAllowedServiceTypeKeys(deviceKey: string | null): BaseServiceTypeKey[] {
  if (!deviceKey) return BASE_SERVICE_TYPE_KEYS.slice();
  return DEVICE_SERVICE_TYPE_MAP[deviceKey] ?? DEVICE_DEFAULT_SERVICE_TYPES;
}

// Locale-aware name resolver for a service record.
// Always returns a string — falls back to FR if the requested locale is missing.
export function resolveServiceName(
  service: { nameFr: string; nameEn?: string | null; nameAr?: string | null },
  locale: string
): string {
  if (locale === "ar" && service.nameAr) return service.nameAr;
  if (locale === "en" && service.nameEn) return service.nameEn;
  return service.nameFr;
}

// Locale-aware name resolver for a ServiceType record.
export function resolveServiceTypeName(
  serviceType: { nameFr: string; nameEn?: string | null; nameAr?: string | null },
  locale: string
): string {
  if (locale === "ar" && serviceType.nameAr) return serviceType.nameAr;
  if (locale === "en" && serviceType.nameEn) return serviceType.nameEn;
  return serviceType.nameFr;
}
