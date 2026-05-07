"use client";

import { ChevronDown, LogOut, MoreVertical, Store, Wrench, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useAppI18n, type AppTranslationKey } from "@/lib/i18n/ui";
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NavItem } from "./NavItem";
import { getNavSectionsForRole } from "./nav-items";
import type { UserRole, LanguagePreference } from "@prisma/client";

interface Props {
  user: {
    name: string;
    email: string;
    role: UserRole;
    languagePreference: LanguagePreference;
  };
  company: { name: string };
  mobileOpen: boolean;
  onMobileClose: () => void;
  dir: "ltr" | "rtl";
}

function userInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function roleTranslationKey(role: UserRole): AppTranslationKey {
  return `role.${role}` as AppTranslationKey;
}

export function Sidebar({ user, company, mobileOpen, onMobileClose, dir }: Props) {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);
  const navSections = getNavSectionsForRole(user.role);
  const tCommon = useTranslations("common");
  const tAuth = useTranslations("auth");
  const { t } = useAppI18n();

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <>
      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed inset-y-0 start-0 z-30 flex w-[220px] flex-col",
          "bg-[var(--sidebar-bg)] border-e border-[var(--sidebar-border)]",
          "transition-transform duration-200 ease-in-out",
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
        {/* Header: Logo + close button */}
        <div className="px-[14px] pb-3 pt-4 shrink-0">
          <div className="flex items-center gap-2">
            <div className="h-[30px] w-[30px] rounded-md bg-[var(--sidebar-logo-icon-bg)] flex items-center justify-center shrink-0 text-[var(--sidebar-logo-icon-fg)]">
              <Wrench className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[15px] font-semibold tracking-[-0.3px] text-[var(--sidebar-fg)]">
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
          </div>
          <div className="mt-[14px] flex items-center gap-[7px] rounded-[calc(var(--radius)-1px)] border border-white/10 bg-[var(--sidebar-muted)] px-[9px] py-[7px]">
            <Store className="h-[13px] w-[13px] shrink-0 text-[var(--sidebar-muted-fg)]" />
            <span className="truncate text-[12px] font-medium text-[var(--sidebar-fg)]">{company.name}</span>
            <ChevronDown className="ms-auto h-[11px] w-[11px] shrink-0 text-[var(--sidebar-muted-fg)]" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2 py-1">
          {navSections.map((section) => (
            <div key={section.titleKey}>
              <div className="px-1.5 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.07em] text-[var(--sidebar-muted-fg)]">
                {t(section.titleKey) || section.fallbackTitle}
              </div>
              {section.items.map((item) => (
                <NavItem key={item.href} item={item} onClick={onMobileClose} />
              ))}
            </div>
          ))}
        </nav>

        {/* User footer */}
        <div className="border-t border-[var(--sidebar-footer-border)] p-3 shrink-0">
          <div className="flex items-center gap-3 rounded-md px-2 py-2">
            <div className="h-8 w-8 rounded-full bg-[var(--sidebar-accent)] flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-white">
                {userInitials(user.name)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--sidebar-fg)] truncate">
                {user.name}
              </p>
              <p className="text-xs text-[var(--sidebar-muted-fg)]">
                {t(roleTranslationKey(user.role))}
              </p>
            </div>
            <MoreVertical className="h-[15px] w-[15px] shrink-0 text-[var(--sidebar-muted-fg)]" />
          </div>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className={cn(
              "mt-1 w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm",
              "text-[var(--sidebar-muted-fg)] hover:text-[var(--sidebar-fg)] hover:bg-[var(--sidebar-hover-bg)]",
              "transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sidebar-accent)]"
            )}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            <span>{loggingOut ? `${tAuth("signOut")}…` : tAuth("signOut")}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
