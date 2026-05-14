"use client";

import { ChevronDown, PanelLeftClose, PanelLeft, Store, Wrench, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useAppI18n } from "@/lib/i18n/ui";
import { cn } from "@/lib/utils";
import { NavItem } from "./NavItem";
import { getNavSectionsForRole } from "./nav-items";
import type { UserRole, LanguagePreference } from "@prisma/client";

interface Props {
  user: {
    name: string;
    role: UserRole;
    languagePreference: LanguagePreference;
  };
  company: { name: string };
  mobileOpen: boolean;
  collapsed: boolean;
  onMobileClose: () => void;
  onToggleCollapse: () => void;
  dir: "ltr" | "rtl";
}

export function Sidebar({ user, company, mobileOpen, collapsed, onMobileClose, onToggleCollapse, dir }: Props) {
  const navSections = getNavSectionsForRole(user.role);
  const tCommon = useTranslations("common");
  const { t } = useAppI18n();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 start-0 z-30 flex flex-col",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-[64px]" : "w-[232px]",
        "lg:translate-x-0",
        mobileOpen
          ? "translate-x-0"
          : dir === "rtl"
          ? "translate-x-full"
          : "-translate-x-full"
      )}
      style={{
        background: `linear-gradient(180deg, var(--sidebar-bg-start) 0%, var(--sidebar-bg-end) 100%)`,
        borderRight: `1px solid var(--sidebar-border)`,
      }}
    >
      {/* Brand header */}
      <div className={cn("shrink-0", collapsed ? "px-2 pt-4 pb-2" : "px-4 pt-5 pb-3")}>
        <div className={cn("flex items-center", collapsed ? "justify-center" : "gap-3")}>
          {/* Logo mark */}
          <div
            className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 shadow-[var(--shadow-sm)]"
            style={{
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
            }}
          >
            <Wrench className="h-4 w-4 text-white" />
          </div>

          {!collapsed && (
            <>
              <div className="min-w-0">
                <div className="text-lg font-bold tracking-tight">
                  <span className="text-[var(--sidebar-fg)]">RE</span>
                  <span className="gradient-text">PAIRE</span>
                </div>
              </div>
              {/* Mobile close */}
              <button
                onClick={onMobileClose}
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-[var(--sidebar-muted-fg)] hover:text-[var(--sidebar-fg)] hover:bg-[var(--sidebar-hover-bg)] transition-colors lg:hidden"
                aria-label={tCommon("close")}
              >
                <X className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={onToggleCollapse}
          className={cn(
            "hidden lg:inline-flex items-center justify-center rounded-lg text-[var(--sidebar-muted-fg)] hover:text-[var(--sidebar-fg)] hover:bg-[var(--sidebar-hover-bg)] transition-all duration-200",
            collapsed ? "mt-3 h-8 w-full" : "mt-4 h-8 w-full"
          )}
          aria-label={collapsed ? tCommon("expand") : tCommon("collapse")}
        >
          {collapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </button>

        {/* Store selector */}
        {!collapsed && (
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.04] px-3 py-2 transition-colors hover:bg-white/[0.07] cursor-pointer">
            <Store className="h-3.5 w-3.5 shrink-0 text-[var(--sidebar-muted-fg)]" />
            <span className="truncate text-xs font-medium text-[var(--sidebar-fg)]">{company.name}</span>
            <ChevronDown className="ms-auto h-3 w-3 shrink-0 text-[var(--sidebar-muted-fg)]" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="sidebar-scroll flex-1 overflow-y-auto px-2 py-1">
        {navSections.map((section) => (
          <div key={section.titleKey} className="mb-1">
            {!collapsed && (
              <Link
                href={section.href}
                onClick={onMobileClose}
                className="block px-2.5 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--sidebar-section-fg)] hover:text-[var(--sidebar-active-fg)] transition-colors"
              >
                {t(section.titleKey) || section.fallbackTitle}
              </Link>
            )}
            {section.items.map((item) => (
              <NavItem key={item.href} item={item} onClick={onMobileClose} collapsed={collapsed} />
            ))}
          </div>
        ))}
      </nav>

      {/* Footer: user */}
      {!collapsed && (
        <div className="shrink-0 border-t border-[var(--sidebar-footer-border)] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }}>
              <span className="text-[11px] font-semibold text-white">
                {user.name.split(" ").slice(0, 2).map(w => w[0]?.toUpperCase()).join("")}
              </span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-[var(--sidebar-fg)]">{user.name}</p>
              <p className="truncate text-[11px] text-[var(--sidebar-muted-fg)]">{user.role}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
