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
    <header className="sticky top-0 z-10 flex min-h-14 shrink-0 items-center gap-1 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md px-2 sm:gap-2 sm:px-4 lg:h-12 lg:min-h-12 lg:px-5">
      <button
        onClick={onMobileMenuToggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--tx2)] hover:bg-[var(--muted)] hover:text-[var(--tx)] lg:hidden"
        aria-label={t("topbar.openMenu")}
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="hidden text-sm font-semibold text-[var(--tx)] sm:block">{t("nav.dashboard")}</div>

      <div className="ms-auto flex min-w-0 items-center gap-1 sm:gap-2">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--tx2)] hover:bg-[var(--muted)] hover:text-[var(--tx)] sm:h-9 sm:w-9"
          aria-label={t("common.search")}
        >
          <Search className="h-4 w-4" />
        </button>

        <button
          type="button"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--tx2)] hover:bg-[var(--muted)] hover:text-[var(--tx)] sm:h-9 sm:w-9"
          aria-label={t("topbar.notifications")}
        >
          <Bell className="h-4 w-4" />
          <span className="absolute end-2 top-2 h-2 w-2 rounded-full bg-[var(--destructive)]" />
        </button>

        <LanguageSwitcher />
        <ThemeToggle />

        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-1 shadow-[var(--shadow-sm)]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[13px] font-semibold text-[var(--primary-fg)]">
            {userInitials(user.name)}
          </div>
          <span className="hidden max-w-[150px] truncate text-xs font-medium text-[var(--tx)] sm:block">
            {user.name}
          </span>
        </div>
      </div>
    </header>
  );
}
