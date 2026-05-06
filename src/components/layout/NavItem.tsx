"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { NavItem as NavItemType } from "./nav-items";

interface Props {
  item: NavItemType;
  onClick?: () => void;
}

export function NavItem({ item, onClick }: Props) {
  const pathname = usePathname();
  const t = useTranslations("nav");

  // Exact match for dashboard root, prefix match for sub-routes
  const isActive =
    item.href === "/dashboard"
      ? pathname === "/dashboard"
      : pathname.startsWith(item.href);

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent",
        isActive
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-muted-foreground hover:bg-sidebar-muted hover:text-sidebar-foreground"
      )}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{t(item.labelKey)}</span>
    </Link>
  );
}
