import { getLocale } from "next-intl/server";
import {
  formatUiDate,
  formatUiDateTime,
  getDirection,
  tApp,
  type AppTranslationKey,
  type Params,
} from "./ui-core";

export async function getAppI18n() {
  const locale = await getLocale();
  return {
    locale,
    dir: getDirection(locale),
    t: (key: AppTranslationKey, params?: Params) => tApp(locale, key, params),
    formatDate: (value: string | number | Date) => formatUiDate(value, locale),
    formatDateTime: (value: string | number | Date) => formatUiDateTime(value, locale),
  };
}
