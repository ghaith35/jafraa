import { Skeleton } from "@/components/ui/skeleton";

export default function RepairsLoading() {
  return (
    <div className="mx-auto max-w-7xl space-y-5">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <Skeleton className="h-6 w-36" />
          <Skeleton className="h-4 w-56" />
        </div>
        <Skeleton className="h-9 w-32 rounded-md" />
      </div>

      {/* Filters line */}
      <div className="flex gap-2">
        <Skeleton className="h-8 w-48 rounded-md" />
        <Skeleton className="h-8 w-32 rounded-md" />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-[var(--shadow-sm)]">
        <div className="flex gap-4 border-b border-border px-4 py-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-3 flex-1" />
          ))}
        </div>
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="flex gap-4 border-b border-border px-4 py-4 last:border-b-0">
            {Array.from({ length: 5 }).map((_, col) => (
              <Skeleton key={col} className={cn("h-4", col === 0 ? "w-24" : "flex-1")} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
