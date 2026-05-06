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
    <aside className={cn("overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm", className)}>
      <div className="border-b border-slate-100 bg-slate-50/80 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">{title}</h3>
      </div>
      <div className="space-y-4 p-4 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{row.label}</div>
            <div className="min-h-5 font-semibold text-slate-900">{row.value || "—"}</div>
          </div>
        ))}
        <div className="rounded-2xl bg-slate-50 p-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">{emptyIssuesLabel}</span>
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">{issuesCount}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-slate-600">
            <span>{partsLabel}</span>
            <span className="font-semibold text-slate-900">{partsCount}</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            {currencyLabel}
          </div>
          <div className="text-lg font-black text-slate-900">{estimatedTotal}</div>
        </div>
      </div>
    </aside>
  );
}
