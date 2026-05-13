"use client";

import { Bell, Menu, Search } from "lucide-react";
import type { UserRole } from "@prisma/client";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useAppI18n } from "@/lib/i18n/ui";

interface Props {
  user: {
    name: string;
    role: UserRole;
  };
  company: { name: string };
  onMobileMenuToggle: () => void;
}

function userInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export function Topbar({ user, onMobileMenuToggle }: Props) {
  const { t } = useAppI18n();

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-2 border-b border-[var(--border)] bg-[var(--bg-glass)] backdrop-blur-xl px-3 sm:px-5">
      {/* Mobile menu trigger */}
      <button
        onClick={onMobileMenuToggle}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)] transition-colors lg:hidden"
        aria-label={t("topbar.openMenu")}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Page title */}
      <div className="hidden text-[15px] font-semibold text-[var(--text-primary)] sm:block">
        {t("nav.dashboard")}
      </div>

      {/* Right actions */}
      <div className="ms-auto flex items-center gap-1 sm:gap-2">
        {/* Search */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
          aria-label={t("common.search")}
        >
          <Search className="h-4 w-4" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)] transition-colors"
          aria-label={t("topbar.notifications")}
        >
          <Bell className="h-4 w-4" />
          <span className="absolute end-2 top-2 h-2 w-2 rounded-full bg-[var(--destructive)] ring-2 ring-[var(--background)]" />
        </button>

        <LanguageSwitcher />
        <ThemeToggle />

        {/* User pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-md px-2.5 py-1.5 shadow-[var(--shadow-xs)]">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold text-white shadow-[var(--shadow-xs)]"
            style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)" }}
          >
            {userInitials(user.name)}
          </div>
          <span className="hidden max-w-[140px] truncate text-[13px] font-medium text-[var(--text-primary)] sm:block">
            {user.name}
          </span>
        </div>
      </div>
    </header>
  );
}
