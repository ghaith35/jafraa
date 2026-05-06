"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LANGS: Array<{ locale: Locale; label: string; lang?: string }> = [
  { locale: "ar", label: "العربية", lang: "ar" },
  { locale: "fr", label: "French" },
  { locale: "en", label: "English" },
];

export function LanguageSwitcher({
  currentLocale,
  className,
}: {
  currentLocale?: string;
  className?: string;
}) {
  const detectedLocale = useLocale() as Locale;
  const locale = (currentLocale ?? detectedLocale) as Locale;
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [requestedLocale, setRequestedLocale] = useState<Locale | null>(null);

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    if (!requestedLocale || requestedLocale === locale) return;

    document.cookie = `NEXT_LOCALE=${requestedLocale}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.dir = requestedLocale === "ar" ? "rtl" : "ltr";

    startTransition(() => {
      const segments = pathname.split("/");
      if (segments[1] && ["ar", "fr", "en"].includes(segments[1])) {
        segments[1] = requestedLocale;
        window.location.assign(segments.join("/") || "/");
      } else {
        window.location.assign(pathname);
      }
    });
  }, [locale, pathname, requestedLocale, startTransition]);

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    setRequestedLocale(nextLocale);
  }

  return (
    <div
      className={cn(
        "flex h-9 items-center rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] p-1 shadow-[var(--shadow-sm)]",
        className
      )}
      data-no-auto-translate
      aria-label="Changer la langue"
    >
      {LANGS.map((item) => {
        const active = item.locale === locale;
        return (
          <button
            key={item.locale}
            type="button"
            lang={item.lang}
            aria-pressed={active}
            disabled={isPending}
            onClick={() => switchLocale(item.locale)}
            className={cn(
              "rounded-[calc(var(--radius)-2px)] px-3 py-1.5 text-[12px] transition-[background,color] duration-150 disabled:opacity-60",
              active
                ? "bg-[var(--primary)] text-[var(--primary-fg)]"
                : "text-[var(--tx2)] hover:bg-[var(--surface)] hover:text-[var(--tx)]"
            )}
            style={{
              fontWeight: active ? 600 : 500,
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
