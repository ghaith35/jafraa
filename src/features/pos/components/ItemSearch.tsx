"use client";

import { useState, useCallback } from "react";
import { Search, Package, Cpu, Wrench, Plus } from "lucide-react";
import { searchSellableItems, type SellableItem, type CartLine } from "../actions/pos-sale.actions";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { StockBadge, getStockState } from "@/components/ui/stock-badge";

const TYPE_CONFIG = {
  product: { label: "Produit", icon: Package, bg: "var(--kpi-revenue-bg)", fg: "var(--kpi-revenue-fg)" },
  part: { label: "Pièce", icon: Cpu, bg: "var(--inv-low-bg)", fg: "var(--inv-low-fg)" },
  service: { label: "Service", icon: Wrench, bg: "var(--inv-ok-bg)", fg: "var(--inv-ok-fg)" },
};

interface ItemSearchProps {
  onAddToCart: (item: SellableItem) => void;
  cartLines: CartLine[];
}

export function ItemSearch({ onAddToCart, cartLines }: ItemSearchProps) {
  const t = useTranslations("pos");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SellableItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(
    async (q: string) => {
      setQuery(q);
      if (q.trim().length < 1) {
        setResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const items = await searchSellableItems(q);
        setResults(items);
      } finally {
        setIsSearching(false);
      }
    },
    []
  );

  // Debounce-like: use onChange directly for simplicity
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    handleSearch(val);
  };

  // How much of this item is already in cart?
  const getCartQty = (itemId: string) => {
    const line = cartLines.find((l) => l.itemId === itemId);
    return line ? line.quantity : 0;
  };

  return (
    <div className="space-y-4">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={t("searchPlaceholder")}
          className="flex h-11 w-full rounded-md border border-input bg-card ps-10 pe-4 py-2 text-sm shadow-[var(--shadow-xs)] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          autoFocus
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        )}
      </div>

      {/* Results */}
      <div className="grid max-h-[calc(100vh-320px)] grid-cols-1 gap-3 overflow-y-auto xl:grid-cols-2">
        {results.length === 0 && query.length > 0 && !isSearching && (
          <div className="text-center py-8 text-sm text-muted-foreground">
            {t("noItemFound", { query })}
          </div>
        )}

        {results.map((item) => {
          const config = TYPE_CONFIG[item.type];
          const Icon = config.icon;
          const cartQty = getCartQty(item.id);
          const isOutOfStock =
            item.stockQty !== null && item.stockQty <= 0;
          const effectiveStock =
            item.stockQty !== null ? item.stockQty - cartQty : null;

          return (
            <div
              key={`${item.type}-${item.id}`}
              onClick={() => {
                if (!isOutOfStock && !(effectiveStock !== null && effectiveStock <= 0)) {
                  onAddToCart(item);
                }
              }}
              className={cn(
                "flex min-h-[94px] items-center justify-between rounded-md border border-border bg-card p-3 text-start shadow-[var(--shadow-xs)] transition-colors",
                isOutOfStock
                  ? "cursor-not-allowed opacity-[var(--pos-item-out-opacity)]"
                  : effectiveStock !== null && effectiveStock <= 3
                    ? "border-[var(--inv-low-border)] hover:border-primary/50"
                    : "hover:border-primary/40 hover:bg-muted/30"
              )}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="shrink-0">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <span
                      className="inline-flex shrink-0 items-center rounded px-1.5 py-0.5 text-[12px] font-semibold"
                      style={{ backgroundColor: config.bg, color: config.fg }}
                    >
                      {config.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-muted-foreground">
                    <span>{item.sku}</span>
                    {item.stockQty !== null && (
                      <StockBadge
                        state={getStockState(effectiveStock ?? 0, 3)}
                        quantity={effectiveStock ?? 0}
                        label={t("stock", { value: String(effectiveStock) })}
                      />
                    )}
                    {cartQty > 0 && (
                      <span className="text-primary font-medium">
                        {t("inCart", { count: String(cartQty) })}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="font-bold text-sm">
                  {item.sellingPrice.toFixed(2)} DZD
                </span>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    onAddToCart(item);
                  }}
                  disabled={
                    isOutOfStock ||
                    (effectiveStock !== null && effectiveStock <= 0)
                  }
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title={t("addToCart")}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
