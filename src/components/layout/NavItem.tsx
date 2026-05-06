"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { NavItem as NavItemType } from "./nav-items";

interface Props {
  item: NavItemType;
  onClick?: () => void;
}

export function NavItem({ item, onClick }: Props) {
  const pathname = usePathname();

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
        "mb-px flex items-center gap-2 rounded-md px-2 py-[7px] text-[12px] transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent",
        isActive
          ? "bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-fg)]"
          : "text-[var(--sidebar-muted-fg)] hover:bg-[var(--sidebar-hover-bg)] hover:text-[var(--sidebar-hover-fg)]"
      )}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="truncate">{item.label}</span>
      {item.badge && (
        <span
          className={cn(
            "ms-auto rounded-full px-1.5 py-px text-[10px] font-medium text-white",
            item.alert ? "bg-[var(--sidebar-badge-alert-bg)]" : "bg-[var(--sidebar-badge-bg)]"
          )}
        >
          {item.badge}
        </span>
      )}
    </Link>
  );
}
