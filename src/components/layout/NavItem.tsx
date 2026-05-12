"use client";

import { ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { useState } from "react";
import type { NavItem as NavItemType } from "./nav-items";

interface Props {
  item: NavItemType;
  onClick?: () => void;
  child?: boolean;
  collapsed?: boolean;
}

function isItemActive(pathname: string, href: string) {
  return pathname === href;
}

export function NavItem({ item, onClick, child = false, collapsed = false }: Props) {
  const pathname = usePathname();
  const { t } = useAppI18n();
  const hasChildren = (item.children?.length ?? 0) > 0;
  const isActive = hasChildren
    ? item.children!.some((childItem) => isItemActive(pathname, childItem.href))
    : isItemActive(pathname, item.href);
  const isParentActive = hasChildren && isItemActive(pathname, item.href);
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  const label = t(item.labelKey) || item.fallbackLabel;

  function handleToggle(e: React.MouseEvent) {
    e.stopPropagation();
    setOpen((o) => !o);
  }

  if (collapsed && !child) {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className={cn(
          "group relative mb-px flex h-11 w-full items-center justify-center rounded-md transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent",
          isActive
            ? "bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-fg)]"
            : "text-[var(--sidebar-muted-fg)] hover:bg-[var(--sidebar-hover-bg)] hover:text-[var(--sidebar-hover-fg)]"
        )}
      >
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="absolute start-full ms-2 top-1/2 -translate-y-1/2 z-50 hidden rounded-md bg-popover px-2.5 py-1.5 text-[13px] font-medium text-popover-foreground shadow-[var(--shadow-md)] whitespace-nowrap group-hover:block">
          {label}
        </span>
      </Link>
    );
  }

  if (child && collapsed) return null;

  return (
    <div className={cn(child ? "ms-3" : "")}>
      {hasChildren ? (
        <>
          <button
            onClick={handleToggle}
            className={cn(
              "mb-px flex w-full min-h-11 items-center gap-2 rounded-md px-2.5 py-2 text-[12.5px] transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent",
              isActive || isParentActive
                ? "bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-fg)]"
                : "text-[var(--sidebar-muted-fg)] hover:bg-[var(--sidebar-hover-bg)] hover:text-[var(--sidebar-hover-fg)]"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{label}</span>
            {item.badge && (
              <span
                className={cn(
                  "ms-auto rounded-full px-1.5 py-px text-[12px] font-medium text-white",
                  item.alert ? "bg-[var(--sidebar-badge-alert-bg)]" : "bg-[var(--sidebar-badge-bg)]"
                )}
              >
                {item.badge}
              </span>
            )}
            <ChevronDown
              className={cn(
                "h-3 w-3 shrink-0 text-current opacity-70 transition-transform",
                open && "rotate-180"
              )}
            />
          </button>
          {open && (
            <div className="mt-1 border-s border-[var(--sidebar-border)] ps-1">
              {item.children!.map((childItem) => (
                <NavItem key={childItem.href} item={childItem} onClick={onClick} child />
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onClick}
          className={cn(
            "mb-px flex min-h-11 items-center gap-2 rounded-md px-2.5 py-2 text-[12.5px] transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent",
            child && "min-h-10 py-1.5 text-[14px]",
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
                "ms-auto rounded-full px-1.5 py-px text-[12px] font-medium text-white",
                item.alert ? "bg-[var(--sidebar-badge-alert-bg)]" : "bg-[var(--sidebar-badge-bg)]"
              )}
            >
              {item.badge}
            </span>
          )}
        </Link>
      )}
    </div>
  );
}
