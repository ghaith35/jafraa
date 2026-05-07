"use client";

import Link from "next/link";
import { Archive, Pencil } from "lucide-react";
import { useMemo, useState, useTransition } from "react";
import { archiveProduct } from "../actions/product.actions";
import type { ProductListItem } from "../lib/product-catalog";
import { isLowStock, suggestedReorderQty } from "../lib/product-catalog";
import { useAppI18n } from "@/lib/i18n/ui";
import { cn } from "@/lib/utils";

interface Props {
  products: ProductListItem[];
  canManage: boolean;
}

function CompactRow({
  product,
  canManage,
  checked,
  onToggle,
}: {
  product: ProductListItem;
  canManage: boolean;
  checked: boolean;
  onToggle: () => void;
}) {
  const { t } = useAppI18n();
  const [isPending, startTransition] = useTransition();
  const low = isLowStock(product);
  const reorder = suggestedReorderQty(product);
  const hint = [product.category?.name, product.brand].filter(Boolean).join(" · ");

  return (
    <div
      className={cn(
        "grid grid-cols-1 items-start gap-3 rounded-xl border border-border bg-card px-3 py-3 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:py-2",
        low && !product.isArchived && "border-warning/30 bg-warning/5"
      )}
    >
      <div className="flex items-center gap-3 sm:contents">
        <input type="checkbox" checked={checked} onChange={onToggle} className="h-5 w-5 rounded border-border" />
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-foreground">{product.name}</p>
        <p className="truncate text-xs text-muted-foreground">{hint || t("inventory.compactNoHint")}</p>
      </div>
      </div>
      <div className="text-right">
        <div className="flex flex-wrap items-center justify-start gap-2 text-xs sm:justify-end">
          <span className={cn("font-semibold", low ? "text-warning" : "text-foreground")}>{t("inventory.compactQty", { qty: product.stockQty })}</span>
          <span className="text-muted-foreground">{t("inventory.compactThreshold", { qty: product.lowStockThreshold ?? 0 })}</span>
          {reorder > 0 && <span className="font-medium text-primary">{t("inventory.compactReorder", { qty: reorder })}</span>}
        </div>
        {canManage && !product.isArchived && (
          <div className="mt-2 flex items-center justify-start gap-1 sm:justify-end">
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
    </div>
  );
}

export function ProductCompactView({ products, canManage }: Props) {
  const { t } = useAppI18n();
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const selectedCount = useMemo(
    () => Object.values(selected).filter(Boolean).length,
    [selected]
  );

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2 text-sm text-muted-foreground">
        <span>{t("inventory.compactHint")}</span>
        <span>{t("inventory.compactSelected", { count: selectedCount })}</span>
      </div>
      <div className="space-y-2">
        {products.map((product) => (
          <CompactRow
            key={product.id}
            product={product}
            canManage={canManage}
            checked={Boolean(selected[product.id])}
            onToggle={() =>
              setSelected((prev) => ({ ...prev, [product.id]: !prev[product.id] }))
            }
          />
        ))}
      </div>
    </div>
  );
}
