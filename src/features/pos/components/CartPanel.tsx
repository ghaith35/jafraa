"use client";

import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import type { CartLine } from "../actions/pos-sale.actions";

interface CartPanelProps {
  lines: CartLine[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveLine: (itemId: string) => void;
  onClearCart: () => void;
}

export function CartPanel({
  lines,
  onUpdateQuantity,
  onRemoveLine,
  onClearCart,
}: CartPanelProps) {
  const subtotal = lines.reduce(
    (sum, line) => sum + line.unitPrice * line.quantity,
    0
  );

  if (lines.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <ShoppingCart className="h-10 w-10 text-muted-foreground/40 mb-3" />
        <p className="text-sm text-muted-foreground">Panier vide</p>
        <p className="text-xs text-muted-foreground mt-1">
          Recherchez et ajoutez des articles
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
        <h3 className="font-bold text-sm">
          Panier ({lines.length} article{lines.length > 1 ? "s" : ""})
        </h3>
        <button
          onClick={onClearCart}
          className="text-xs text-destructive hover:underline font-medium"
        >
          Vider
        </button>
      </div>

      {/* Lines */}
      <div className="flex-1 overflow-y-auto space-y-2 min-h-0">
        {lines.map((line) => (
          <div
            key={line.itemId}
            className="rounded-lg border border-border bg-background p-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{line.name}</p>
                <p className="text-xs text-muted-foreground">{line.sku}</p>
              </div>
              <button
                onClick={() => onRemoveLine(line.itemId)}
                className="shrink-0 p-1 text-muted-foreground hover:text-destructive transition-colors"
                title="Supprimer"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-between mt-2">
              {/* Quantity controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onUpdateQuantity(line.itemId, -1)}
                  className="inline-flex h-7 w-7 items-center justify-center rounded border border-input bg-background hover:bg-muted text-sm"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="w-8 text-center text-sm font-semibold">
                  {line.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(line.itemId, 1)}
                  className="inline-flex h-7 w-7 items-center justify-center rounded border border-input bg-background hover:bg-muted text-sm"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>

              {/* Line total */}
              <span className="font-bold text-sm">
                {(line.unitPrice * line.quantity).toFixed(2)} DZD
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="pt-3 mt-3 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Sous-total
          </span>
          <span className="text-lg font-bold">
            {subtotal.toFixed(2)} DZD
          </span>
        </div>
      </div>
    </div>
  );
}
