"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useRef, useCallback } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";

interface GroupOption {
  id: string;
  name: string;
}

interface Props {
  groups: GroupOption[];
}

export function CustomerSearchBar({ groups }: Props) {
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
      <div className="relative">
        <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          defaultValue={q}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={t("customers.searchPlaceholder")}
          className="w-full rounded-md border border-input bg-background ps-9 pe-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:max-w-sm"
        />
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => push({ groupId: undefined })}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium transition-colors",
            !groupId
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {t("customers.all")}
        </button>

        {groups.map((g) => (
          <button
            key={g.id}
            onClick={() => push({ groupId: g.id })}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              groupId === g.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {g.name}
          </button>
        ))}

        <label className="ms-auto flex items-center gap-1.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={archived}
            onChange={(e) => push({ archived: e.target.checked ? "1" : undefined })}
            className="h-3.5 w-3.5 rounded border-input accent-primary"
          />
          <span className="text-xs text-muted-foreground">{t("customers.showArchived")}</span>
        </label>
      </div>
    </div>
  );
}
