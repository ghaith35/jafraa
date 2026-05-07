"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppI18n } from "@/lib/i18n/ui";
import type { ProductSort, ProductStockFilter } from "../lib/product-catalog";
import { cn } from "@/lib/utils";

interface CategoryOption {
  id: string;
  name: string;
  isActive?: boolean;
}

interface Props {
  category?: string;
  brand?: string;
  stock?: ProductStockFilter;
  sort?: ProductSort;
  spec?: string;
  categories: CategoryOption[];
  brands: string[];
}

const inputCls =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

export function ProductFilters({ category, brand, stock, sort, spec, categories, brands }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = useCallback(
    (key: string, value?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value.trim()) params.set(key, value.trim());
      else params.delete(key);
      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname);
    },
    [pathname, router, searchParams]
  );

  return (
    <div className="space-y-3 rounded-2xl border border-border bg-card p-4">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        <label className="space-y-1">
          <span className="text-xs font-medium text-muted-foreground">{t("inventory.filterCategory")}</span>
          <select
            className={inputCls}
            value={category ?? ""}
            onChange={(e) => updateParam("category", e.target.value)}
          >
            <option value="">{t("inventory.filterAllCategories")}</option>
            {categories.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
                {option.isActive === false ? ` (${t("inventory.inactive")})` : ""}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-xs font-medium text-muted-foreground">{t("inventory.filterStock")}</span>
          <select
            className={inputCls}
            value={stock ?? "all"}
            onChange={(e) => updateParam("stock", e.target.value === "all" ? "" : e.target.value)}
          >
            <option value="all">{t("inventory.stockFilter.all")}</option>
            <option value="in_stock">{t("inventory.stockFilter.in")}</option>
            <option value="low_stock">{t("inventory.stockFilter.low")}</option>
            <option value="out_of_stock">{t("inventory.stockFilter.out")}</option>
            <option value="archived">{t("inventory.stockFilter.archived")}</option>
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-xs font-medium text-muted-foreground">{t("inventory.filterBrand")}</span>
          <select className={inputCls} value={brand ?? ""} onChange={(e) => updateParam("brand", e.target.value)}>
            <option value="">{t("inventory.filterAllBrands")}</option>
            {brands.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-xs font-medium text-muted-foreground">{t("inventory.filterSpec")}</span>
          <input
            className={inputCls}
            defaultValue={spec ?? ""}
            placeholder={t("inventory.filterSpecPlaceholder")}
            onBlur={(e) => updateParam("spec", e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                updateParam("spec", (e.target as HTMLInputElement).value);
              }
            }}
          />
        </label>

        <label className="space-y-1">
          <span className="text-xs font-medium text-muted-foreground">{t("inventory.filterSort")}</span>
          <select
            className={inputCls}
            value={sort ?? "name_asc"}
            onChange={(e) => updateParam("sort", e.target.value === "name_asc" ? "" : e.target.value)}
          >
            <option value="name_asc">{t("inventory.sort.nameAsc")}</option>
            <option value="newest">{t("inventory.sort.newest")}</option>
            <option value="stock_low_first">{t("inventory.sort.stockLowFirst")}</option>
            <option value="price_high">{t("inventory.sort.priceHigh")}</option>
            <option value="price_low">{t("inventory.sort.priceLow")}</option>
          </select>
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            ["category", "brand", "stock", "sort", "spec"].forEach((key) => params.delete(key));
            router.push(params.toString() ? `${pathname}?${params.toString()}` : pathname);
          }}
          className={cn("h-11 rounded-md border border-border px-3 text-sm text-foreground hover:bg-accent")}
        >
          {t("inventory.clearFilters")}
        </button>
      </div>
    </div>
  );
}
