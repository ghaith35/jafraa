"use client";

import Link from "next/link";
import { AlertTriangle, Archive, Pencil } from "lucide-react";
import { useTransition } from "react";
import { archiveProduct } from "../actions/product.actions";
import type { ProductListItem } from "../lib/product-catalog";
import { isLowStock, splitCategoryPath } from "../lib/product-catalog";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { ProductThumb } from "./ProductThumb";

interface Props {
  products: ProductListItem[];
  canManage: boolean;
}

function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-DZ", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value) + " DZD";
}

function ProductCard({ product, canManage }: { product: ProductListItem; canManage: boolean }) {
  const { t } = useAppI18n();
  const [isPending, startTransition] = useTransition();
  const low = isLowStock(product);
  const path = splitCategoryPath(product.category?.name);
  const categoryLabel = path.join(" > ") || t("inventory.uncategorizedGroup");
  const stockStatus = product.isArchived
    ? t("inventory.stockStatus.archived")
    : product.stockQty <= 0
      ? t("inventory.stockStatus.out")
      : low
        ? t("inventory.stockStatus.low")
        : t("inventory.stockStatus.in");

  return (
    <div className={cn("rounded-2xl border border-border bg-card p-4 shadow-sm", product.isArchived && "opacity-60")}>
      <div className="flex items-start gap-3">
        <ProductThumb imageUrl={product.imageUrl} alt={product.name} className="h-16 w-16 shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">{product.name}</p>
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{categoryLabel}</p>
          <p className="mt-1 text-xs text-muted-foreground">{[product.brand, product.modelReference].filter(Boolean).join(" · ") || "—"}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-muted/60 p-2">
          <div className="text-muted-foreground">SKU</div>
          <div className="mt-1 font-mono text-foreground">{product.sku}</div>
        </div>
        <div className="rounded-xl bg-muted/60 p-2">
          <div className="text-muted-foreground">{t("inventory.currentStock")}</div>
          <div className={cn("mt-1 font-semibold", low ? "text-warning" : "text-foreground")}>{product.stockQty}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">{t("inventory.sellingPrice")}</p>
          <p className="text-sm font-semibold text-foreground">{formatPrice(product.sellingPrice)}</p>
        </div>
        <div className="flex items-center gap-2">
          {low && !product.isArchived && (
            <span className="inline-flex items-center gap-1 rounded-full border border-warning/30 bg-warning/10 px-2 py-1 text-xs font-medium text-warning">
              <AlertTriangle className="h-3 w-3" />
              {t("inventory.lowStock")}
            </span>
          )}
          {!low && (
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-2 py-1 text-xs text-muted-foreground">
              {stockStatus}
            </span>
          )}
        </div>
      </div>
      {canManage && !product.isArchived && (
        <div className="mt-4 flex items-center justify-end gap-1">
          <Link
            href={`/dashboard/inventory/products/${product.id}/edit`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
            title={t("common.edit")}
          >
            <Pencil className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
              onClick={() => {
                startTransition(async () => {
                  await archiveProduct(product.id);
                });
              }}
              disabled={isPending}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive disabled:opacity-50"
              title={t("inventory.archiveProduct")}
            >
              <Archive className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

export function ProductCardView({ products, canManage }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} canManage={canManage} />
      ))}
    </div>
  );
}
