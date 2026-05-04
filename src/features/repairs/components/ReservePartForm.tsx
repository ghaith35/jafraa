"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2, Plus, AlertTriangle } from "lucide-react";
import { searchPartsForReservation, addReservedPartToTicket } from "../actions/reservation.actions";

interface PartResult {
  id: string;
  name: string;
  sku: string;
  stockQty: number;
  sellingPrice: number;
  reservedQty: number;
  availableQty: number;
}

export function ReservePartForm({ ticketId, onSuccess }: { ticketId: string; onSuccess: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PartResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [selectedPart, setSelectedPart] = useState<PartResult | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async (q: string) => {
    setQuery(q);
    if (q.length < 2) {
      setResults([]);
      return;
    }
    setSearching(true);
    const data = await searchPartsForReservation(q);
    setResults(data);
    setSearching(false);
  }, []);

  const handleSelect = (part: PartResult) => {
    setSelectedPart(part);
    setResults([]);
    setQuery(part.name);
    setQuantity(1);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!selectedPart) return;
    if (quantity < 1) {
      setError("La quantité doit être supérieure à 0");
      return;
    }
    if (quantity > selectedPart.availableQty) {
      setError(`Stock insuffisant. Disponible: ${selectedPart.availableQty}`);
      return;
    }

    setSubmitting(true);
    setError(null);
    const res = await addReservedPartToTicket(ticketId, selectedPart.id, quantity, note || undefined);
    if ("error" in res) {
      setError(res.error);
      setSubmitting(false);
    } else {
      router.refresh();
      onSuccess();
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <label className="text-sm font-medium mb-1.5 block">Rechercher une pièce (nom, SKU, code-barres)</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              handleSearch(e.target.value);
              if (selectedPart) setSelectedPart(null);
            }}
            className="flex h-10 w-full rounded-md border border-input bg-transparent pl-10 pr-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="Rechercher..."
          />
          {searching && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />}
        </div>

        {/* Search Results Dropdown */}
        {results.length > 0 && !selectedPart && (
          <div className="absolute z-10 mt-1 w-full rounded-md border border-border bg-popover shadow-lg max-h-60 overflow-auto">
            {results.map((part) => (
              <button
                key={part.id}
                type="button"
                onClick={() => handleSelect(part)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm hover:bg-accent text-left border-b border-border last:border-0"
              >
                <div>
                  <div className="font-medium">{part.name}</div>
                  <div className="text-xs text-muted-foreground">{part.sku}</div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-medium">{part.sellingPrice.toFixed(2)} DZD</div>
                  <div className={part.availableQty > 0 ? "text-emerald-600" : "text-destructive"}>
                    Dispo: {part.availableQty} / {part.stockQty}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected Part Details */}
      {selectedPart && (
        <div className="rounded-lg border bg-muted/20 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{selectedPart.name}</p>
              <p className="text-xs text-muted-foreground">{selectedPart.sku}</p>
            </div>
            <button
              onClick={() => {
                setSelectedPart(null);
                setQuery("");
              }}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Changer
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-md border bg-background p-2">
              <div className="text-xs text-muted-foreground">Stock total</div>
              <div className="font-bold text-lg">{selectedPart.stockQty}</div>
            </div>
            <div className="rounded-md border bg-background p-2">
              <div className="text-xs text-muted-foreground">Réservé</div>
              <div className="font-bold text-lg text-amber-600">{selectedPart.reservedQty}</div>
            </div>
            <div className="rounded-md border bg-background p-2">
              <div className="text-xs text-muted-foreground">Disponible</div>
              <div className={`font-bold text-lg ${selectedPart.availableQty > 0 ? "text-emerald-600" : "text-destructive"}`}>
                {selectedPart.availableQty}
              </div>
            </div>
          </div>

          {selectedPart.availableQty === 0 && (
            <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Stock épuisé. Impossible de réserver cette pièce.
            </div>
          )}

          {selectedPart.availableQty > 0 && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Quantité</label>
                  <input
                    type="number"
                    min={1}
                    max={selectedPart.availableQty}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Note (optionnel)</label>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Note..."
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="h-9 px-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                  Réserver
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
