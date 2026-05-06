"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";
import {
  getRepairDirection,
  isRepairLocale,
  type RepairLocale,
  type RepairTranslationKey,
  tRepair,
  translateRepairMessage,
  formatRepairDate,
  formatRepairDateTime,
} from "../i18n";

const DEFAULT_LOCALE: RepairLocale = "fr";

function normalizeLocale(locale: string): RepairLocale {
  const shortLocale = locale.slice(0, 2);
  return isRepairLocale(shortLocale) ? shortLocale : DEFAULT_LOCALE;
}

export function useRepairI18n() {
  const globalLocale = useLocale();
  const locale = normalizeLocale(globalLocale);

  return useMemo(() => ({
    locale,
    dir: getRepairDirection(locale),
    t: (key: RepairTranslationKey, params?: Record<string, string | number>) => tRepair(locale, key, params),
    formatDate: (value: string | number | Date) => formatRepairDate(value, locale),
    formatDateTime: (value: string | number | Date) => formatRepairDateTime(value, locale),
    trMessage: (message: unknown) => translateRepairMessage(message, locale),
  }), [locale]);
}

// Kept as a compatibility no-op. The app now uses the single global language selector in the top bar.
export function RepairLanguageSwitcher() {
  return null;
}
