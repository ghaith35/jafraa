"use client";

import { ChevronDown, PanelLeftClose, PanelLeft, Store, Wrench, X } from "lucide-react";
import { useTranslations } from "next-intl";
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
    <>
      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed inset-y-0 start-0 z-30 flex flex-col",
          "bg-[var(--sidebar-bg)] border-e border-[var(--sidebar-border)]",
          "transition-all duration-200 ease-in-out",
          collapsed ? "w-[60px]" : "w-[220px]",
          // Desktop: always visible regardless of mobile state
          "lg:translate-x-0",
          // Mobile: slide in or out based on open state and direction
          mobileOpen
            ? "translate-x-0"
            : dir === "rtl"
            ? "translate-x-full"
            : "-translate-x-full"
        )}
      >
        {/* Header: Logo + collapse toggle */}
        <div className={cn("shrink-0", collapsed ? "px-3 pb-2 pt-3" : "px-[14px] pb-3 pt-4")}>
          <div className={cn("flex items-center", collapsed ? "justify-center" : "gap-2")}>
            <div className="h-[30px] w-[30px] rounded-md bg-[var(--sidebar-logo-icon-bg)] flex items-center justify-center shrink-0 text-[var(--sidebar-logo-icon-fg)]">
              <Wrench className="h-4 w-4" />
            </div>
            {!collapsed && (
              <>
                <div className="min-w-0">
                  <div className="text-[17px] font-semibold tracking-[-0.3px] text-[var(--sidebar-fg)]">
                    RE<span className="text-[var(--sidebar-brand-accent)]">PAIRE</span>
                  </div>
                </div>
                <button
                  onClick={onMobileClose}
                  className="ms-auto inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--sidebar-muted-fg)] hover:text-[var(--sidebar-fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sidebar-accent)] lg:hidden"
                  aria-label={tCommon("close")}
                >
                  <X className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Collapse toggle — desktop only */}
          <button
            onClick={onToggleCollapse}
            className={cn(
              "hidden lg:inline-flex items-center justify-center rounded-md text-[var(--sidebar-muted-fg)] hover:text-[var(--sidebar-fg)] hover:bg-[var(--sidebar-hover-bg)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sidebar-accent)]",
              collapsed ? "mt-3 h-8 w-full" : "mt-[14px] h-8 w-full"
            )}
            aria-label={collapsed ? tCommon("expand") : tCommon("collapse")}
          >
            {collapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>

          {!collapsed && (
            <div className="mt-[14px] flex items-center gap-[7px] rounded-[calc(var(--radius)-1px)] border border-white/10 bg-[var(--sidebar-muted)] px-[9px] py-[7px]">
              <Store className="h-[13px] w-[13px] shrink-0 text-[var(--sidebar-muted-fg)]" />
              <span className="truncate text-[14px] font-medium text-[var(--sidebar-fg)]">{company.name}</span>
              <ChevronDown className="ms-auto h-[11px] w-[11px] shrink-0 text-[var(--sidebar-muted-fg)]" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="sidebar-scroll flex-1 overflow-y-auto px-2 py-1">
          {navSections.map((section) => (
            <div key={section.titleKey}>
              {!collapsed && (
                <div className="px-1.5 pb-1 pt-3 text-[12px] font-semibold uppercase tracking-[0.07em] text-[var(--sidebar-muted-fg)]">
                  {t(section.titleKey) || section.fallbackTitle}
                </div>
              )}
              {section.items.map((item) => (
                <NavItem key={item.href} item={item} onClick={onMobileClose} collapsed={collapsed} />
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
