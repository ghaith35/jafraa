import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted/70",
        className
      )}
      {...props}
    />
  );
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-[var(--radius)] border border-border bg-card p-5 shadow-[var(--shadow-sm)]", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-7 w-32" />
        </div>
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
      <Skeleton className="mt-4 h-3 w-40" />
    </div>
  );
}

function SkeletonTable({ rows = 5, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-[var(--shadow-sm)]">
      {/* Header */}
      <div className="flex gap-4 border-b border-border px-4 py-3">
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-3 flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} className="flex gap-4 border-b border-border px-4 py-4 last:border-b-0">
          {Array.from({ length: cols }).map((_, col) => (
            <Skeleton key={col} className={cn("h-4", col === 0 ? "w-24" : "flex-1")} />
          ))}
        </div>
      ))}
    </div>
  );
}

function SkeletonDetail({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-5", className)}>
      {/* Hero section */}
      <div className="rounded-[var(--radius)] border border-border bg-card shadow-[var(--shadow-sm)]">
        <div className="flex items-start gap-4 p-5">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-3 w-48" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20 rounded-md" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-4 border-t border-border">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border-e border-border p-4 last:border-e-0">
              <Skeleton className="h-3 w-16 mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <Skeleton className="h-48 rounded-[var(--radius)]" />
          <Skeleton className="h-64 rounded-[var(--radius)]" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-40 rounded-[var(--radius)]" />
          <Skeleton className="h-52 rounded-[var(--radius)]" />
        </div>
      </div>
    </div>
  );
}

export { Skeleton, SkeletonCard, SkeletonTable, SkeletonDetail };
