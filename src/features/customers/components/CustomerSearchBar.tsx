"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useRef, useCallback } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";

interface GroupOption { id: string; name: string; }

interface Props { groups: GroupOption[]; rightSlot?: React.ReactNode; }

export function CustomerSearchBar({ groups, rightSlot }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const q = searchParams.get("q") ?? "";
  const groupId = searchParams.get("groupId") ?? "";
  const archived = searchParams.get("archived") === "1";

  const push = useCallback(
    (updates: Record<string, string | undefined>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        if (value !== undefined && value !== "") params.set(key, value);
        else params.delete(key);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  function handleSearch(value: string) {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => push({ q: value || undefined }), 300);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="shrink-0 space-y-2.5">
      {/* Search row */}
      <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
        <input
          ref={inputRef}
          type="search"
          defaultValue={q}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={t("customers.searchPlaceholder")}
          className="w-full rounded-lg border border-input bg-background ps-9 pe-8 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
        />
        {q && (
          <button onClick={() => { push({ q: undefined }); if (inputRef.current) inputRef.current.value = ""; }}
            className="absolute end-2 top-1/2 -translate-y-1/2 p-0.5 text-muted-foreground hover:text-foreground rounded transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      {rightSlot}
      </div>

      {/* Filter pills */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <button onClick={() => push({ groupId: undefined })}
          className={cn("rounded-lg px-2.5 py-1 text-xs font-medium transition-all", !groupId ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80")}
        >
          {t("customers.all")}
        </button>
        {groups.map((g) => (
          <button key={g.id} onClick={() => push({ groupId: g.id })}
            className={cn("rounded-lg px-2.5 py-1 text-xs font-medium transition-all", groupId === g.id ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80")}
          >
            {g.name}
          </button>
        ))}

        <label className="ms-auto flex items-center gap-1.5 cursor-pointer select-none py-0.5">
          <input type="checkbox" checked={archived} onChange={(e) => push({ archived: e.target.checked ? "1" : undefined })}
            className="h-3.5 w-3.5 rounded border-border accent-primary" />
          <span className="text-xs text-muted-foreground">{t("customers.showArchived")}</span>
        </label>
      </div>
    </div>
  );
}
