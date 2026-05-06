import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "ar", "en"] as const,
  defaultLocale: "fr",
  // Keep existing non-prefixed routes (/login, /dashboard, ...).
  // Locale changes are handled without adding /ar or /en path prefixes.
  localePrefix: "never",
});

export type Locale = (typeof routing.locales)[number];
