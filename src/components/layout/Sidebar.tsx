"use client";

import { X, LogOut } from "lucide-react";
import { useTranslations } from "next-intl";
import { useAppI18n, type AppTranslationKey } from "@/lib/i18n/ui";
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { NavItem } from "./NavItem";
import { getNavItemsForRole } from "./nav-items";
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
  const navItems = getNavItemsForRole(user.role);
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
          "fixed inset-y-0 start-0 z-30 flex w-64 flex-col",
          "bg-sidebar-background border-e border-sidebar-border",
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
        <div className="flex h-14 items-center justify-between px-4 border-b border-sidebar-border shrink-0">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-sidebar-accent flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-white">R</span>
            </div>
            <span className="text-sm font-semibold text-sidebar-foreground truncate">
              {company.name}
            </span>
          </div>
          <button
            onClick={onMobileClose}
            className="lg:hidden rounded-md p-1 text-sidebar-muted-foreground hover:text-sidebar-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent"
            aria-label={tCommon("close")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {navItems.map((item) => (
            <NavItem key={item.href} item={item} onClick={onMobileClose} />
          ))}
        </nav>

        {/* User footer */}
        <div className="border-t border-sidebar-border p-3 shrink-0">
          <div className="flex items-center gap-3 rounded-md px-2 py-2">
            <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center shrink-0">
              <span className="text-xs font-semibold text-white">
                {userInitials(user.name)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                {user.name}
              </p>
              <p className="text-xs text-sidebar-muted-foreground">
                {t(roleTranslationKey(user.role))}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className={cn(
              "mt-1 w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm",
              "text-sidebar-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-muted",
              "transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent"
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
