"use client";

import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";
import {
  formatUiDate,
  formatUiDateTime,
  getDirection,
  tApp,
  type AppTranslationKey,
  type Params,
} from "./ui-core";

export function useAppI18n() {
  const locale = useLocale() as Locale;
  return {
    locale,
    dir: getDirection(locale),
    t: (key: AppTranslationKey, params?: Params) => tApp(locale, key, params),
    formatDate: (value: string | number | Date) => formatUiDate(value, locale),
    formatDateTime: (value: string | number | Date) => formatUiDateTime(value, locale),
  };
}

export type { AppTranslationKey, Params } from "./ui-core";
