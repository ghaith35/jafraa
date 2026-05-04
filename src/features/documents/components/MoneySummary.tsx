import { cn } from "@/lib/utils";

interface MoneySummaryProps {
  rows: {
    label: string;
    value: number | string;
    bold?: boolean;
    className?: string;
  }[];
}

export function MoneySummary({ rows }: MoneySummaryProps) {
  return (
    <div className="mt-8 flex justify-end">
      <div className="w-full max-w-[300px] space-y-2">
        {rows.map((row, i) => (
          <div
            key={i}
            className={cn(
              "flex justify-between items-center text-sm px-2 py-1",
              row.bold ? "font-bold text-base border-t pt-2 mt-2 border-border" : "text-muted-foreground",
              row.className
            )}
          >
            <span>{row.label}</span>
            <span>
              {typeof row.value === "number" ? `${row.value.toFixed(2)} DZD` : row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
