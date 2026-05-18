"use client";

import { Moon, Sun } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import type { Locale } from "@/i18n/routing";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "repaire-theme";
const THEME_EVENT = "repaire-theme-change";

const LANGS: Array<{ locale: Locale; label: string }> = [
  { locale: "ar", label: "AR" },
  { locale: "fr", label: "FR" },
  { locale: "en", label: "EN" },
];

function resolveTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  try { localStorage.setItem(THEME_STORAGE_KEY, theme); } catch {}
  window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: theme }));
}

export function LoginControls() {
  const [theme, setTheme] = useState<Theme>(resolveTheme);
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [requestedLocale, setRequestedLocale] = useState<Locale | null>(null);

  useEffect(() => {
    const handleThemeChange = () => setTheme(resolveTheme());
    window.addEventListener(THEME_EVENT, handleThemeChange);
    return () => window.removeEventListener(THEME_EVENT, handleThemeChange);
  }, []);

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

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  const btnBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.75)",
    cursor: "pointer",
    transition: "background 0.15s, color 0.15s",
  };

  return (
    <div
      className="absolute top-4 end-4 z-20 flex items-center gap-2"
      data-no-auto-translate
    >
      {/* Theme toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Mode clair" : "Mode sombre"}
        style={{ ...btnBase, width: 36 }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.14)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; }}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      {/* Language switcher */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: 36,
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.06)",
          padding: "3px",
          gap: 2,
        }}
      >
        {LANGS.map(({ locale: lang, label }) => {
          const active = lang === locale;
          return (
            <button
              key={lang}
              type="button"
              disabled={isPending}
              onClick={() => setRequestedLocale(lang)}
              style={{
                height: 28,
                paddingInline: 10,
                borderRadius: 6,
                border: "none",
                fontSize: 12,
                fontWeight: active ? 700 : 500,
                cursor: isPending ? "not-allowed" : "pointer",
                background: active ? "rgba(99,102,241,0.85)" : "transparent",
                color: active ? "#fff" : "rgba(255,255,255,0.6)",
                transition: "background 0.15s, color 0.15s",
                opacity: isPending ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                if (!active) (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.9)";
              }}
              onMouseLeave={(e) => {
                if (!active) (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
