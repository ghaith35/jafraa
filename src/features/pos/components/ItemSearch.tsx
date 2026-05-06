"use client";

import { useState, useCallback } from "react";
import { Search, Package, Cpu, Wrench, Plus } from "lucide-react";
import { searchSellableItems, type SellableItem, type CartLine } from "../actions/pos-sale.actions";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const TYPE_CONFIG = {
  product: { label: "Produit", icon: Package, cls: "bg-blue-100 text-blue-800 border-blue-200" },
  part: { label: "Pièce", icon: Cpu, cls: "bg-amber-100 text-amber-800 border-amber-200" },
  service: { label: "Service", icon: Wrench, cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
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
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={t("searchPlaceholder")}
          className="flex h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          autoFocus
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        )}
      </div>

      {/* Results */}
      <div className="space-y-2 max-h-[calc(100vh-320px)] overflow-y-auto">
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
              className={cn(
                "flex items-center justify-between rounded-lg border border-border bg-card p-3 transition-colors",
                isOutOfStock
                  ? "opacity-50"
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
                      className={cn(
                        "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border shrink-0",
                        config.cls
                      )}
                    >
                      {config.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-muted-foreground">
                    <span>{item.sku}</span>
                    {item.stockQty !== null && (
                      <span
                        className={cn(
                          "font-medium",
                          effectiveStock !== null && effectiveStock <= 0
                            ? "text-red-600"
                            : effectiveStock !== null && effectiveStock <= 3
                            ? "text-amber-600"
                            : "text-emerald-600"
                        )}
                      >
                        {t("stock", { value: String(effectiveStock) })}
                      </span>
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
                  onClick={() => onAddToCart(item)}
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
