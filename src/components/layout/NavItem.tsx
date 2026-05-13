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
          "group relative mb-0.5 flex h-10 w-full items-center justify-center rounded-lg transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent/50",
          isActive
            ? "bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-fg)] shadow-[0_0_0_1px_rgba(99,102,241,0.15)]"
            : "text-[var(--sidebar-muted-fg)] hover:bg-[var(--sidebar-hover-bg)] hover:text-[var(--sidebar-hover-fg)]"
        )}
      >
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        {/* Tooltip on hover in collapsed mode */}
        <span className="absolute start-full ms-3 top-1/2 -translate-y-1/2 z-50 hidden rounded-lg bg-[var(--popover)] px-2.5 py-1.5 text-xs font-medium text-[var(--popover-foreground)] shadow-[var(--shadow-lg)] whitespace-nowrap group-hover:block border border-[var(--border)]">
          {label}
        </span>
      </Link>
    );
  }

  if (child && collapsed) return null;

  return (
    <div className={cn("relative", child ? "ms-2" : "")}>
      {hasChildren ? (
        <>
          <button
            onClick={handleToggle}
            className={cn(
              "group mb-0.5 flex w-full min-h-[38px] items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent/50",
              isActive || isParentActive
                ? "bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-fg)] shadow-[0_0_0_1px_rgba(99,102,241,0.12)]"
                : "text-[var(--sidebar-muted-fg)] hover:bg-[var(--sidebar-hover-bg)] hover:text-[var(--sidebar-hover-fg)]"
            )}
          >
            {/* Active indicator bar */}
            {isActive && (
              <span className="absolute inset-y-1 start-0 w-0.5 rounded-full bg-[var(--sidebar-active-fg)]" />
            )}
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{label}</span>
            {item.badge && (
              <span
                className={cn(
                  "ms-auto rounded-full px-1.5 py-px text-[11px] font-medium text-white",
                  item.alert ? "bg-[var(--sidebar-badge-alert-bg)]" : "bg-[var(--sidebar-badge-bg)]"
                )}
              >
                {item.badge}
              </span>
            )}
            <ChevronDown
              className={cn(
                "h-3 w-3 shrink-0 text-current/60 transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          </button>
          {/* Children with smooth expand */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="mt-0.5 border-s border-[var(--sidebar-border)] ms-2 ps-1.5">
              {item.children!.map((childItem) => (
                <NavItem key={childItem.href} item={childItem} onClick={onClick} child />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onClick}
          className={cn(
            "group relative mb-0.5 flex min-h-[38px] items-center gap-2 rounded-lg px-2.5 py-1.5 text-[13px] transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-accent/50",
            child && "min-h-[34px] py-1 text-[13px]",
            isActive
              ? "bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-fg)] shadow-[0_0_0_1px_rgba(99,102,241,0.12)]"
              : "text-[var(--sidebar-muted-fg)] hover:bg-[var(--sidebar-hover-bg)] hover:text-[var(--sidebar-hover-fg)]"
          )}
        >
          {/* Active indicator bar */}
          {isActive && (
            <span className={cn(
              "absolute inset-y-1 start-0 w-0.5 rounded-full",
              "bg-[var(--sidebar-active-fg)]"
            )} />
          )}
          <Icon className={cn("shrink-0 transition-transform duration-200 group-hover:scale-110", child ? "h-3.5 w-3.5" : "h-4 w-4")} aria-hidden="true" />
          <span className="truncate">{label}</span>
          {item.badge && (
            <span
              className={cn(
                "ms-auto rounded-full px-1.5 py-px text-[11px] font-medium text-white",
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
