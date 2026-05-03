export type Locale = "fr" | "ar" | "en";

export const LOCALES: Locale[] = ["fr", "ar", "en"];
export const DEFAULT_LOCALE: Locale = "fr";
export const RTL_LOCALES: Locale[] = ["ar"];

export type Direction = "ltr" | "rtl";

export function getDirection(locale: Locale): Direction {
  return RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
}

export type UserRole = "Admin" | "Manager" | "Cashier" | "Technician";
export type SuperAdminRole = "SuperAdmin";
