"use client";

import { ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import type { NavItem as NavItemType } from "./nav-items";

interface Props {
  item: NavItemType;
  onClick?: () => void;
  child?: boolean;
}

function isItemActive(pathname: string, href: string) {
  const exactOnly = href === "/dashboard" || href === "/dashboard/inventory" || href === "/dashboard/services";
  return exactOnly ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export function NavItem({ item, onClick, child = false }: Props) {
  const pathname = usePathname();
  const { t } = useAppI18n();
  const hasChildren = (item.children?.length ?? 0) > 0;
  const isActive = hasChildren
    ? item.children!.some((childItem) => isItemActive(pathname, childItem.href)) || isItemActive(pathname, item.href)
    : isItemActive(pathname, item.href);
  const Icon = item.icon;
  const label = t(item.labelKey) || item.fallbackLabel;

  return (
    <div className={cn(child ? "ms-3" : "")}> 
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          "mb-px flex min-h-11 items-center gap-2 rounded-md px-2.5 py-2 text-[12.5px] transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent",
          child && "min-h-10 py-1.5 text-[12px]",
          isActive
            ? "bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-fg)]"
            : "text-[var(--sidebar-muted-fg)] hover:bg-[var(--sidebar-hover-bg)] hover:text-[var(--sidebar-hover-fg)]"
        )}
      >
        <Icon className={cn("shrink-0", child ? "h-3.5 w-3.5" : "h-4 w-4")} aria-hidden="true" />
        <span className="truncate">{label}</span>
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
        {hasChildren && <ChevronDown className="ms-auto h-3 w-3 text-current opacity-70" />}
      </Link>

      {hasChildren && (
        <div className="mt-1 border-s border-[var(--sidebar-border)] ps-1">
          {item.children!.map((childItem) => (
            <NavItem key={childItem.href} item={childItem} onClick={onClick} child />
          ))}
        </div>
      )}
    </div>
  );
}
