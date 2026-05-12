"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function RepairSummaryPanel({
  title,
  rows,
  issuesCount,
  partsCount,
  estimatedTotal,
  currencyLabel,
  emptyIssuesLabel,
  partsLabel,
  className,
}: {
  title: string;
  rows: Array<{ label: string; value?: string | null }>;
  issuesCount: number;
  partsCount: number;
  estimatedTotal: string;
  currencyLabel: string;
  emptyIssuesLabel: string;
  partsLabel: string;
  className?: string;
}) {
  return (
    <aside className={cn("overflow-hidden rounded-3xl border border-border bg-card shadow-sm", className)}>
      <div className="border-b border-border/60 bg-muted/60 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">{title}</h3>
      </div>
      <div className="space-y-4 p-4 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="space-y-1">
            <div className="text-[13px] font-bold uppercase tracking-wide text-muted-foreground">{row.label}</div>
            <div className="min-h-5 font-semibold text-foreground">{row.value || "—"}</div>
          </div>
        ))}
        <div className="rounded-2xl bg-muted/50 p-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">{emptyIssuesLabel}</span>
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">{issuesCount}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-muted-foreground">
            <span>{partsLabel}</span>
            <span className="font-semibold text-foreground">{partsCount}</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border/60 pt-4">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            {currencyLabel}
          </div>
          <div className="text-lg font-black text-foreground">{estimatedTotal}</div>
        </div>
      </div>
    </aside>
  );
}
