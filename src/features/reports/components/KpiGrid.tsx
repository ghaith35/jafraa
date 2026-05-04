import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

export function KpiCard({ label, value, subValue, trend, icon, className }: KpiCardProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-5 shadow-sm", className)}>
      <div className="flex items-center justify-between gap-2 mb-2">
        <p className="text-sm font-medium text-muted-foreground truncate">{label}</p>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
        {trend && (
          <span className={cn(
            "text-xs font-medium px-1.5 py-0.5 rounded-full",
            trend.isPositive ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-destructive/10 text-destructive"
          )}>
            {trend.isPositive ? "+" : "-"}{trend.value}%
          </span>
        )}
      </div>
      {subValue && (
        <p className="mt-1 text-xs text-muted-foreground">{subValue}</p>
      )}
    </div>
  );
}

export function KpiGrid({ children, cols = 4 }: { children: React.ReactNode, cols?: number }) {
  return (
    <div className={cn(
      "grid gap-4 mb-6",
      cols === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : 
      cols === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
    )}>
      {children}
    </div>
  );
}
