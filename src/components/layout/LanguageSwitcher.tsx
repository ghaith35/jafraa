"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import type { Locale } from "@/i18n/routing";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const LANGUAGE_OPTIONS: { value: Locale; shortLabel: string }[] = [
  { value: "fr", shortLabel: "FR" },
  { value: "en", shortLabel: "EN" },
  { value: "ar", shortLabel: "AR" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleLanguageChange(nextLocale: Locale) {
    if (nextLocale === locale) return;

    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => {
      router.replace(pathname);
      router.refresh();
    });
  }

  return (
    <label className={cn("inline-flex items-center gap-2 text-xs text-muted-foreground", className)}>
      <span className="hidden sm:inline">{t("language")}</span>
      <select
        value={locale}
        onChange={(event) => handleLanguageChange(event.target.value as Locale)}
        disabled={isPending}
        aria-label={t("changeLanguage")}
        className="h-8 min-w-20 rounded-md border border-border bg-background px-2 text-xs font-semibold text-foreground"
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.shortLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
