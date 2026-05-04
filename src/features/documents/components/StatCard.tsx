import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  className?: string;
}

export function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div className={cn("rounded-lg border p-3 bg-muted/10", className)}>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </p>
      <p className="text-sm font-bold truncate">
        {value}
      </p>
    </div>
  );
}
