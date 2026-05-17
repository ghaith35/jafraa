"use client";

import { usePathname } from "next/navigation";
import { Bell, Menu, Search } from "lucide-react";
import type { UserRole } from "@prisma/client";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useAppI18n } from "@/lib/i18n/ui";
import type { AppTranslationKey } from "@/lib/i18n/ui-core";

interface Props {
  user: {
    name: string;
    role: UserRole;
  };
  company: { name: string };
  onMobileMenuToggle: () => void;
}

// Ordered longest-first so more specific paths match before their parents
const ROUTE_TITLES: { path: string; key: AppTranslationKey }[] = [
  { path: "/dashboard/settings/catalog", key: "nav.catalog" as AppTranslationKey },
  { path: "/dashboard/technician/archived", key: "nav.archived" as AppTranslationKey },
  { path: "/dashboard/inventory/accessories", key: "nav.inventory.accessories" as AppTranslationKey },
  { path: "/dashboard/inventory/recovered-parts", key: "nav.inventory.recoveredParts" as AppTranslationKey },
  { path: "/dashboard/inventory/purchases", key: "nav.inventory.purchaseInvoices" as AppTranslationKey },
  { path: "/dashboard/inventory/parts", key: "nav.inventory.parts" as AppTranslationKey },
  { path: "/dashboard/pos/cash-register", key: "nav.cashRegister" as AppTranslationKey },
  { path: "/dashboard/inventory", key: "nav.inventory" as AppTranslationKey },
  { path: "/dashboard/technician", key: "nav.technician" as AppTranslationKey },
  { path: "/dashboard/customers", key: "nav.customers" as AppTranslationKey },
  { path: "/dashboard/suppliers", key: "nav.inventory.suppliers" as AppTranslationKey },
  { path: "/dashboard/services", key: "nav.services" as AppTranslationKey },
  { path: "/dashboard/repairs", key: "nav.repairs" as AppTranslationKey },
  { path: "/dashboard/reports", key: "nav.reports" as AppTranslationKey },
  { path: "/dashboard/expenses", key: "nav.expenses" as AppTranslationKey },
  { path: "/dashboard/settings", key: "nav.settings" as AppTranslationKey },
  { path: "/dashboard/pos", key: "nav.pos" as AppTranslationKey },
  { path: "/dashboard", key: "nav.dashboard" as AppTranslationKey },
];

function userInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export function Topbar({ user, onMobileMenuToggle }: Props) {
  const { t } = useAppI18n();
  const pathname = usePathname();

  const pageTitle = (() => {
    const match = ROUTE_TITLES.find(
      ({ path }) => pathname === path || pathname.startsWith(path + "/")
    );
    return match ? t(match.key) : t("nav.dashboard");
  })();

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

      {/* Dynamic page title */}
      <div className="hidden text-[15px] font-semibold text-[var(--text-primary)] sm:block">
        {pageTitle}
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
