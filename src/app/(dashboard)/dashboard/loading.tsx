import { SkeletonCard, SkeletonTable } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="min-h-[calc(100svh-88px)] bg-[var(--bg)] px-6 py-5">
      {/* Page header */}
      <div className="mb-5">
        <div className="h-6 w-48 animate-pulse rounded bg-muted/70" />
        <div className="mt-2 h-4 w-64 animate-pulse rounded bg-muted/50" />
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>

      {/* Pipeline table */}
      <div className="mt-5">
        <SkeletonTable rows={5} cols={5} />
      </div>
    </div>
  );
}
