"use client";

import { useState, useCallback } from "react";
import { Search, User, X } from "lucide-react";
import { searchNamedCustomers, type NamedCustomerResult } from "../actions/customer-search.actions";
import { useTranslations } from "next-intl";

interface CustomerSearchProps {
  onSelect: (customer: NamedCustomerResult | null) => void;
  selectedCustomer: NamedCustomerResult | null;
}

export function CustomerSearch({ onSelect, selectedCustomer }: CustomerSearchProps) {
  const t = useTranslations("pos");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<NamedCustomerResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = useCallback(async (q: string) => {
    setQuery(q);
    if (q.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    setShowResults(true);
    try {
      const customers = await searchNamedCustomers(q);
      setResults(customers);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  const handleSelect = (customer: NamedCustomerResult) => {
    onSelect(customer);
    setQuery("");
    setResults([]);
    setShowResults(false);
  };

  const handleClear = () => {
    onSelect(null);
  };

  if (selectedCustomer) {
    return (
      <div className="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 p-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sm truncate">{selectedCustomer.name}</p>
            <p className="text-xs text-muted-foreground truncate">
              {selectedCustomer.phone || t("noPhone")} • {t("debtLabel")}: {selectedCustomer.totalDebt.toFixed(2)} DZD
            </p>
          </div>
        </div>
        <button
          onClick={handleClear}
          className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-primary/10 transition-colors"
          title={t("changeCustomer")}
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          placeholder={t("customerPlaceholder")}
          className="flex h-10 w-full rounded-lg border border-input bg-background pl-9 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        )}
      </div>

      {showResults && query.length >= 2 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-border bg-popover p-1 shadow-md outline-none">
          {results.length === 0 && !isSearching ? (
            <div className="py-2 px-3 text-sm text-muted-foreground italic">
              {t("noCustomerFound")}
            </div>
          ) : (
            <div className="max-h-[200px] overflow-y-auto">
              {results.map((customer) => (
                <button
                  key={customer.id}
                  onClick={() => handleSelect(customer)}
                  className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm text-left hover:bg-accent transition-colors"
                >
                  <User className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium truncate">{customer.name}</p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {customer.phone || "—"} • {t("debtLabel")}: {customer.totalDebt.toFixed(2)} DZD
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
