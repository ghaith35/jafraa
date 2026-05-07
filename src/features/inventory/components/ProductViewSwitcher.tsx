"use client";

import Link from "next/link";
import { LayoutGrid, List, Rows4, Table2, FolderTree } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import type { ProductViewMode } from "../lib/product-catalog";

interface Props {
  view: ProductViewMode;
}

export function ProductViewSwitcher({ view }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function makeHref(nextView: ProductViewMode) {
    const params = new URLSearchParams(searchParams.toString());
    if (nextView === "list") {
      params.delete("view");
    } else {
      params.set("view", nextView);
    }
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  }

  const options: { value: ProductViewMode; label: string; icon: ComponentType<{ className?: string }> }[] = [
    { value: "list", label: t("inventory.listView"), icon: List },
    { value: "table", label: t("inventory.tableView"), icon: Table2 },
    { value: "card", label: t("inventory.cardView"), icon: LayoutGrid },
    { value: "compact", label: t("inventory.compactView"), icon: Rows4 },
    { value: "categories", label: t("inventory.categoryView"), icon: FolderTree },
  ];

  return (
    <div className="w-full sm:w-auto">
      {/* Mobile: dense selector (5+ modes do not fit as tabs) */}
      <div className="sm:hidden">
        <select
          id="product-view-select"
          aria-label={t("inventory.listView")}
          value={view}
          onChange={(event) => {
            const nextView = event.target.value as ProductViewMode;
            router.push(makeHref(nextView));
          }}
          className="h-11 w-full rounded-xl border border-border bg-card px-3 text-sm font-medium text-foreground"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tablet/Desktop: segmented switcher */}
      <div className="hidden sm:inline-flex sm:rounded-xl sm:border sm:border-border sm:bg-card sm:p-1">
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <Link
              key={option.value}
              href={makeHref(option.value)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors sm:text-sm",
                view === option.value
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent"
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">{option.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
