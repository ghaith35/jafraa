"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Boxes, ChevronRight, FolderTree, Layers3, Package, Pencil, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import type { ProductListItem } from "../lib/product-catalog";
import { isLowStock, splitCategoryPath } from "../lib/product-catalog";
import { ProductThumb } from "./ProductThumb";

interface Props {
  products: ProductListItem[];
  canManage: boolean;
}

type Selection = {
  category?: string;
  subcategory?: string;
  spec?: string;
  brand?: string;
};

type EnrichedProduct = ProductListItem & {
  browser: {
    category: string;
    subcategory: string;
    spec: string;
    brand: string;
  };
};

type GroupCard = {
  key: string;
  label: string;
  count: number;
  totalStock: number;
  lowStockCount: number;
};

function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-DZ", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value) + " DZD";
}

function extractSpec(product: ProductListItem): string | null {
  if (product.modelReference?.trim()) return product.modelReference.trim();
  const source = `${product.name} ${product.notes ?? ""}`;
  const patterns = [
    /\b\d+(?:[.,]\d+)?\s?(?:m|cm|mm|gb|tb|w|mah|hz)\b/i,
    /\bcat\s?[5-8]\b/i,
    /\b(?:ddr[3-5]|sata|nvme|m\.2|2\.5"|3\.5")\b/i,
    /\b(?:a3|a4|13\.3"|14"|15\.6"|16"|17\.3")\b/i,
    /\b(?:usb\s?-?c|type\s?-?c|lightning|micro\s?usb|hdmi|displayport|rj45)\b/i,
  ];
  for (const pattern of patterns) {
    const match = source.match(pattern);
    if (match?.[0]) return match[0].trim();
  }
  return null;
}

function deriveSubcategory(product: ProductListItem, fallback: string): string {
  const haystack = `${product.name} ${product.modelReference ?? ""} ${product.notes ?? ""}`.toLowerCase();
  const rules = [
    { label: "Network", keywords: ["network", "ethernet", "rj45", "lan", "cat5", "cat6", "cat7", "cat8"] },
    { label: "Charging", keywords: ["charger", "charge", "usb-c", "type-c", "lightning", "micro usb", "chargeur"] },
    { label: "Audio", keywords: ["audio", "jack", "aux", "speaker", "headset", "headphone", "earphone"] },
    { label: "Video", keywords: ["hdmi", "displayport", "vga", "dvi", "video"] },
    { label: "Storage", keywords: ["ssd", "hdd", "nvme", "storage", "usb flash", "sd card", "memory"] },
    { label: "Power", keywords: ["power", "adapter", "alimentation"] },
    { label: "Input", keywords: ["mouse", "keyboard", "clavier", "souris"] },
    { label: "Printing", keywords: ["ink", "toner", "printer", "printing", "cartouche"] },
  ];
  for (const rule of rules) {
    if (rule.keywords.some((keyword) => haystack.includes(keyword))) return rule.label;
  }
  return fallback;
}

function deriveHierarchy(
  product: ProductListItem,
  labels: { uncategorized: string; other: string; unknownBrand: string }
) {
  const path = splitCategoryPath(product.category?.name);
  const category = path[0] ?? labels.uncategorized;
  const subcategory = path[1] ?? deriveSubcategory(product, labels.other);
  const spec = path[2] ?? extractSpec(product) ?? labels.other;
  const brand = product.brand?.trim() || labels.unknownBrand;
  return { category, subcategory, spec, brand };
}

function filterProducts(items: EnrichedProduct[], selection: Selection): EnrichedProduct[] {
  return items.filter((product) => {
    if (selection.category && product.browser.category !== selection.category) return false;
    if (selection.subcategory && product.browser.subcategory !== selection.subcategory) return false;
    if (selection.spec && product.browser.spec !== selection.spec) return false;
    if (selection.brand && product.browser.brand !== selection.brand) return false;
    return true;
  });
}

function buildGroups(items: EnrichedProduct[], key: keyof EnrichedProduct["browser"]): GroupCard[] {
  const grouped = new Map<string, GroupCard>();
  for (const product of items) {
    const label = product.browser[key];
    const existing = grouped.get(label);
    if (existing) {
      existing.count += 1;
      existing.totalStock += product.stockQty;
      if (isLowStock(product)) existing.lowStockCount += 1;
    } else {
      grouped.set(label, {
        key: label,
        label,
        count: 1,
        totalStock: product.stockQty,
        lowStockCount: isLowStock(product) ? 1 : 0,
      });
    }
  }
  return Array.from(grouped.values()).sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.label.localeCompare(b.label);
  });
}

function LevelPill({ active, children }: { active?: boolean; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        active ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-muted/60 text-muted-foreground"
      )}
    >
      {children}
    </span>
  );
}

function EmptyLevel({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center">
      <FolderTree className="mx-auto h-6 w-6 text-muted-foreground" />
      <p className="mt-3 text-sm font-medium text-foreground">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{message}</p>
    </div>
  );
}

function GroupGrid({
  title,
  description,
  groups,
  onSelect,
  icon,
  emptyTitle,
  emptyMessage,
}: {
  title: string;
  description: string;
  groups: GroupCard[];
  onSelect: (key: string) => void;
  icon: ReactNode;
  emptyTitle: string;
  emptyMessage: string;
}) {
  const { t } = useAppI18n();

  if (groups.length === 0) {
    return <EmptyLevel title={emptyTitle} message={emptyMessage} />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="hidden rounded-2xl border border-border bg-card p-3 text-muted-foreground sm:flex">
          {icon}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => (
          <button
            key={group.key}
            type="button"
            onClick={() => onSelect(group.key)}
            className="group rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-accent/20"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">{group.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t("inventory.browserItemsCount", { count: group.count })}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <LevelPill>{t("inventory.browserStockUnits", { count: group.totalStock })}</LevelPill>
              {group.lowStockCount > 0 && <LevelPill active>{t("inventory.browserLowCount", { count: group.lowStockCount })}</LevelPill>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function FinalProductGrid({ products, canManage }: { products: EnrichedProduct[]; canManage: boolean }) {
  const { t } = useAppI18n();

  if (!products.length) {
    return <EmptyLevel title={t("inventory.browserNoProducts")} message={t("inventory.browserNoProductsDesc")} />;
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-semibold text-foreground">{t("inventory.productsInSelection")}</h3>
        <p className="text-sm text-muted-foreground">{t("inventory.productsInSelectionDescription", { count: products.length })}</p>
      </div>
      <div className="grid gap-3 lg:grid-cols-2 2xl:grid-cols-3">
        {products.map((product) => {
          const low = isLowStock(product);
          return (
            <div key={product.id} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <ProductThumb imageUrl={product.imageUrl} alt={product.name} className="h-12 w-12 shrink-0" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">{product.name}</p>
                    <p className="mt-1 truncate text-xs text-muted-foreground">{product.browser.category} • {product.browser.subcategory}</p>
                  </div>
                </div>
                <div className="rounded-xl bg-muted p-2 text-muted-foreground">
                  <Package className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-muted/60 p-2">
                  <div className="text-muted-foreground">SKU</div>
                  <div className="mt-1 font-medium text-foreground">{product.sku}</div>
                </div>
                <div className="rounded-xl bg-muted/60 p-2">
                  <div className="text-muted-foreground">{t("inventory.brand")}</div>
                  <div className="mt-1 font-medium text-foreground">{product.browser.brand}</div>
                </div>
                <div className="rounded-xl bg-muted/60 p-2">
                  <div className="text-muted-foreground">{t("inventory.reference")}</div>
                  <div className="mt-1 font-medium text-foreground">{product.browser.spec}</div>
                </div>
                <div className="rounded-xl bg-muted/60 p-2">
                  <div className="text-muted-foreground">{t("inventory.currentStock")}</div>
                  <div className={cn("mt-1 font-medium", low ? "text-warning" : "text-foreground")}>{product.stockQty}</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">{t("inventory.sellingPrice")}</p>
                  <p className="text-sm font-semibold text-foreground">{formatPrice(product.sellingPrice)}</p>
                </div>
                <div className="flex items-center gap-2">
                  {low && <LevelPill active>{t("inventory.lowStock")}</LevelPill>}
                  {canManage && (
                    <Link
                      href={`/dashboard/inventory/products/${product.id}/edit`}
                      className="inline-flex items-center gap-1 rounded-xl border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      {t("common.edit")}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProductCatalogView({ products, canManage }: Props) {
  const { t } = useAppI18n();
  const [selection, setSelection] = useState<Selection>({});

  const enrichedProducts = useMemo<EnrichedProduct[]>(() => {
    return products.map((product) => ({
      ...product,
      browser: deriveHierarchy(product, {
        uncategorized: t("inventory.uncategorizedGroup"),
        other: t("inventory.otherGroup"),
        unknownBrand: t("inventory.unknownBrand"),
      }),
    }));
  }, [products, t]);

  const filtered = useMemo(() => filterProducts(enrichedProducts, selection), [enrichedProducts, selection]);

  const currentLevel: "category" | "subcategory" | "spec" | "brand" | "products" = !selection.category
    ? "category"
    : !selection.subcategory
      ? "subcategory"
      : !selection.spec
        ? "spec"
        : !selection.brand
          ? "brand"
          : "products";

  const groups = useMemo(() => {
    if (currentLevel === "products") return [] as GroupCard[];
    const map = {
      category: "category",
      subcategory: "subcategory",
      spec: "spec",
      brand: "brand",
      products: "brand",
    } as const;
    return buildGroups(filtered, map[currentLevel]);
  }, [filtered, currentLevel]);

  const breadcrumbs = [
    { key: "category" as const, value: selection.category, label: t("inventory.levelCategory") },
    { key: "subcategory" as const, value: selection.subcategory, label: t("inventory.levelSubcategory") },
    { key: "spec" as const, value: selection.spec, label: t("inventory.levelSpec") },
    { key: "brand" as const, value: selection.brand, label: t("inventory.levelBrand") },
  ].filter((item) => Boolean(item.value));

  function goBack() {
    setSelection((prev) => {
      if (prev.brand) return { category: prev.category, subcategory: prev.subcategory, spec: prev.spec };
      if (prev.spec) return { category: prev.category, subcategory: prev.subcategory };
      if (prev.subcategory) return { category: prev.category };
      return {};
    });
  }

  function resetTo(key: keyof Selection) {
    setSelection((prev) => {
      if (key === "category") return { category: prev.category };
      if (key === "subcategory") return { category: prev.category, subcategory: prev.subcategory };
      if (key === "spec") return { category: prev.category, subcategory: prev.subcategory, spec: prev.spec };
      return { category: prev.category, subcategory: prev.subcategory, spec: prev.spec, brand: prev.brand };
    });
  }

  function handleSelect(value: string) {
    setSelection((prev) => {
      if (!prev.category) return { category: value };
      if (!prev.subcategory) return { category: prev.category, subcategory: value };
      if (!prev.spec) return { category: prev.category, subcategory: prev.subcategory, spec: value };
      if (!prev.brand) return { category: prev.category, subcategory: prev.subcategory, spec: prev.spec, brand: value };
      return prev;
    });
  }

  if (products.length === 0) {
    return <EmptyLevel title={t("inventory.noProducts")} message={t("inventory.noProductsDesc")} />;
  }

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold text-foreground">{t("inventory.categoryExplorerTitle")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("inventory.categoryExplorerDescription")}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <LevelPill active>{t("inventory.categoriesCount", { count: new Set(enrichedProducts.map((item) => item.browser.category)).size })}</LevelPill>
            <LevelPill>{t("inventory.brandsCount", { count: new Set(enrichedProducts.map((item) => item.browser.brand)).size })}</LevelPill>
            <LevelPill>{t("inventory.totalProductsCount", { count: enrichedProducts.length })}</LevelPill>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-muted/50 p-3 text-sm text-muted-foreground">
          {t("inventory.categoryExplorerHint")}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={goBack}
              disabled={!selection.category}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("common.back")}
            </button>
            <button
              type="button"
              onClick={() => setSelection({})}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <FolderTree className="h-4 w-4" />
              {t("inventory.rootCategories")}
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <LevelPill active={!selection.category}>{t("inventory.levelCategory")}</LevelPill>
            <LevelPill active={!!selection.category && !selection.subcategory}>{t("inventory.levelSubcategory")}</LevelPill>
            <LevelPill active={!!selection.subcategory && !selection.spec}>{t("inventory.levelSpec")}</LevelPill>
            <LevelPill active={!!selection.spec && !selection.brand}>{t("inventory.levelBrand")}</LevelPill>
          </div>
        </div>

        {breadcrumbs.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-border bg-background p-3">
            <button type="button" onClick={() => setSelection({})} className="text-sm font-medium text-primary hover:underline">
              {t("inventory.rootCategories")}
            </button>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.key} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <button
                  type="button"
                  onClick={() => resetTo(crumb.key)}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-sm transition-colors",
                    index === breadcrumbs.length - 1 ? "bg-primary/10 font-medium text-primary" : "text-foreground hover:bg-accent"
                  )}
                >
                  {crumb.value}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {currentLevel === "category" && (
        <GroupGrid
          title={t("inventory.rootCategories")}
          description={t("inventory.rootCategoriesDescription")}
          groups={groups}
          onSelect={handleSelect}
          icon={<FolderTree className="h-5 w-5" />}
          emptyTitle={t("inventory.browserNoCategories")}
          emptyMessage={t("inventory.browserNoCategoriesDesc")}
        />
      )}
      {currentLevel === "subcategory" && (
        <GroupGrid
          title={t("inventory.subcategories")}
          description={t("inventory.subcategoriesDescription", { category: selection.category ?? "" })}
          groups={groups}
          onSelect={handleSelect}
          icon={<Layers3 className="h-5 w-5" />}
          emptyTitle={t("inventory.browserNoSubcategories")}
          emptyMessage={t("inventory.browserNoSubcategoriesDesc")}
        />
      )}
      {currentLevel === "spec" && (
        <GroupGrid
          title={t("inventory.specifications")}
          description={t("inventory.specificationsDescription", { category: selection.category ?? "", subcategory: selection.subcategory ?? "" })}
          groups={groups}
          onSelect={handleSelect}
          icon={<Tag className="h-5 w-5" />}
          emptyTitle={t("inventory.browserNoSpecs")}
          emptyMessage={t("inventory.browserNoSpecsDesc")}
        />
      )}
      {currentLevel === "brand" && (
        <GroupGrid
          title={t("inventory.brandsTitle")}
          description={t("inventory.brandsDescription", { spec: selection.spec ?? "" })}
          groups={groups}
          onSelect={handleSelect}
          icon={<Boxes className="h-5 w-5" />}
          emptyTitle={t("inventory.browserNoBrands")}
          emptyMessage={t("inventory.browserNoBrandsDesc")}
        />
      )}
      {currentLevel === "products" && <FinalProductGrid products={filtered} canManage={canManage} />}
    </div>
  );
}
