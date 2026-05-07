"use client";

import Link from "next/link";
import { Archive, Pencil } from "lucide-react";
import { useTransition } from "react";
import { archiveProduct } from "../actions/product.actions";
import type { ProductListItem } from "../lib/product-catalog";
import { isLowStock, splitCategoryPath } from "../lib/product-catalog";
import { useAppI18n } from "@/lib/i18n/ui";
import { cn } from "@/lib/utils";
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

function getStockStatus(t: ReturnType<typeof useAppI18n>["t"], product: ProductListItem): {
  label: string;
  className: string;
} {
  if (product.isArchived) {
    return { label: t("inventory.stockStatus.archived"), className: "text-muted-foreground" };
  }
  if (product.stockQty <= 0) {
    return { label: t("inventory.stockStatus.out"), className: "text-destructive" };
  }
  if (isLowStock(product)) {
    return { label: t("inventory.stockStatus.low"), className: "text-warning" };
  }
  return { label: t("inventory.stockStatus.in"), className: "text-emerald-600 dark:text-emerald-400" };
}

function TableRow({ product, canManage }: { product: ProductListItem; canManage: boolean }) {
  const { t } = useAppI18n();
  const [isPending, startTransition] = useTransition();
  const path = splitCategoryPath(product.category?.name);
  const category = path[0] ?? t("inventory.uncategorizedGroup");
  const subcategory = path[1] ?? "—";
  const spec = path[2] ?? product.modelReference ?? "—";
  const stockStatus = getStockStatus(t, product);

  return (
    <tr className={cn("border-b border-border", product.isArchived && "opacity-60")}>
      <td className="sticky start-0 bg-card p-3">
        <div className="flex items-center gap-2">
          <ProductThumb imageUrl={product.imageUrl} alt={product.name} className="h-10 w-10 shrink-0" />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">{product.name}</p>
            <p className="truncate text-xs text-muted-foreground">{product.modelReference || "—"}</p>
          </div>
        </div>
      </td>
      <td className="p-3 text-sm text-foreground">{category}</td>
      <td className="p-3 text-sm text-muted-foreground">{subcategory}</td>
      <td className="p-3 text-sm text-muted-foreground">{spec}</td>
      <td className="p-3 text-sm text-foreground">{product.brand || "—"}</td>
      <td className="p-3 text-xs font-mono text-foreground">{product.sku}</td>
      <td className="p-3 text-xs font-mono text-muted-foreground">{product.barcode || "—"}</td>
      <td className="p-3 text-sm text-foreground">{product.stockQty}</td>
      <td className="p-3 text-sm font-semibold text-foreground">{formatPrice(product.sellingPrice)}</td>
      <td className={cn("p-3 text-sm font-medium", stockStatus.className)}>{stockStatus.label}</td>
      <td className="p-3">
        {canManage && !product.isArchived ? (
          <div className="flex items-center gap-1">
            <Link
              href={`/dashboard/inventory/products/${product.id}/edit`}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
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
              className="rounded-md p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive disabled:opacity-50"
              title={t("inventory.archiveProduct")}
            >
              <Archive className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground">—</span>
        )}
      </td>
    </tr>
  );
}

export function ProductTableView({ products, canManage }: Props) {
  const { t } = useAppI18n();

  if (!products.length) return null;

  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground sm:hidden">{t("inventory.horizontalScrollHint")}</p>
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full min-w-[1180px] text-left">
        <thead className="bg-muted/40 text-xs uppercase text-muted-foreground">
          <tr>
            <th className="sticky start-0 z-[1] bg-muted/40 p-3">{t("inventory.table.product")}</th>
            <th className="p-3">{t("inventory.table.category")}</th>
            <th className="p-3">{t("inventory.table.subcategory")}</th>
            <th className="p-3">{t("inventory.table.spec")}</th>
            <th className="p-3">{t("inventory.table.brand")}</th>
            <th className="p-3">SKU</th>
            <th className="p-3">{t("inventory.table.barcode")}</th>
            <th className="p-3">{t("inventory.table.qty")}</th>
            <th className="p-3">{t("inventory.table.price")}</th>
            <th className="p-3">{t("inventory.table.stockStatus")}</th>
            <th className="p-3">{t("common.actions")}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow key={product.id} product={product} canManage={canManage} />
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
