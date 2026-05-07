"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "repaire-theme";
const THEME_EVENT = "repaire-theme-change";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function systemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;

  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(storedTheme) ? storedTheme : null;
  } catch {
    return null;
  }
}

function resolveTheme(): Theme {
  return getStoredTheme() ?? systemTheme();
}

function applyTheme(theme: Theme, persist = true, notify = true) {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors. The visible theme should still change.
    }
  }

  if (notify) {
    window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: theme }));
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const nextTheme = resolveTheme();
    setTheme(nextTheme);
    applyTheme(nextTheme, false, false);

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = () => {
      const updatedTheme = resolveTheme();
      setTheme(updatedTheme);
      applyTheme(updatedTheme, false, false);
    };

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) handleThemeChange();
    };

    const handleSystemChange = () => {
      if (!getStoredTheme()) handleThemeChange();
    };

    window.addEventListener(THEME_EVENT, handleThemeChange);
    window.addEventListener("storage", handleStorageChange);
    media.addEventListener("change", handleSystemChange);

    return () => {
      window.removeEventListener(THEME_EVENT, handleThemeChange);
      window.removeEventListener("storage", handleStorageChange);
      media.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const isDark = theme === "dark";

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--tx2)] shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--tx)] sm:h-9 sm:w-9"
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      aria-pressed={isDark}
      title={isDark ? "Mode clair" : "Mode sombre"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
