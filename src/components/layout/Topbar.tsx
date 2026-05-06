"use client";

import { Bell, Menu, Search } from "lucide-react";
import type { UserRole } from "@prisma/client";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

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
  return (
    <header className="sticky top-0 z-10 flex h-12 shrink-0 items-center gap-2 border-b border-[var(--border)] bg-[var(--surface)] px-5">
      <button
        onClick={onMobileMenuToggle}
        className="rounded-md p-1.5 text-[var(--tx2)] hover:bg-[var(--muted)] hover:text-[var(--tx)] lg:hidden"
        aria-label="Ouvrir le menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="text-sm font-semibold text-[var(--tx)]">Tableau de bord</div>

      <div className="ms-auto flex items-center gap-2">
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--tx2)] hover:bg-[var(--muted)] hover:text-[var(--tx)]"
          aria-label="Rechercher"
        >
          <Search className="h-4 w-4" />
        </button>

        <button
          type="button"
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--tx2)] hover:bg-[var(--muted)] hover:text-[var(--tx)]"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute end-2 top-2 h-2 w-2 rounded-full bg-[var(--destructive)]" />
        </button>

        <LanguageSwitcher />
        <ThemeToggle />

        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-1 shadow-[var(--shadow-sm)]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-[11px] font-semibold text-[var(--primary-fg)]">
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
