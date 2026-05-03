"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useRef, useCallback } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const TYPE_FILTERS = [
  { value: "", label: "Tous" },
  { value: "named", label: "Nommés" },
  { value: "walkin", label: "De passage" },
] as const;

export function CustomerSearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const q = searchParams.get("q") ?? "";
  const type = searchParams.get("type") ?? "";
  const archived = searchParams.get("archived") === "1";

  const push = useCallback(
    (updates: Record<string, string | undefined>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        if (value !== undefined && value !== "") {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  function handleSearch(value: string) {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => push({ q: value || undefined }), 300);
  }

  return (
    <div className="flex flex-col gap-3 mb-5">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          defaultValue={q}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Rechercher par nom ou téléphone…"
          className="w-full rounded-md border border-input bg-background ps-9 pe-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:max-w-sm"
        />
      </div>

      {/* Type filter tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        {TYPE_FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => push({ type: f.value || undefined })}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              type === f.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {f.label}
          </button>
        ))}

        <label className="ms-auto flex items-center gap-1.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={archived}
            onChange={(e) => push({ archived: e.target.checked ? "1" : undefined })}
            className="h-3.5 w-3.5 rounded border-input accent-primary"
          />
          <span className="text-xs text-muted-foreground">Afficher archivés</span>
        </label>
      </div>
    </div>
  );
}
