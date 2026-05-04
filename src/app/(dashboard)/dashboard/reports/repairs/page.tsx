export const dynamic = "force-dynamic";

import { getRepairsReport } from "@/features/reports/actions/report.actions";
import { ReportShell } from "@/features/reports/components/ReportShell";
import { KpiGrid, KpiCard } from "@/features/reports/components/KpiGrid";
import { Wrench, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { parseISO, subDays } from "date-fns";
import { cn } from "@/lib/utils";

export default async function RepairsReportPage({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; end?: string }>;
}) {
  const params = await searchParams;
  const startDate = params.start ? parseISO(params.start) : subDays(new Date(), 30);
  const endDate = params.end ? parseISO(params.end) : new Date();

  const data = await getRepairsReport({ startDate, endDate });

  return (
    <ReportShell
      title="Rapport des Réparations"
      description="Performance de l'atelier et suivi des tickets"
    >
      <KpiGrid>
        <KpiCard
          label="Total Tickets"
          value={data.summary.total}
          icon={<Wrench className="h-4 w-4" />}
        />
        <KpiCard
          label="Réparations Terminées"
          value={data.summary.completed}
          icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />}
        />
        <KpiCard
          label="En Cours / Diagnostic"
          value={data.summary.inRepair}
          icon={<Clock className="h-4 w-4 text-primary" />}
        />
        <KpiCard
          label="Prêts pour Retrait"
          value={data.summary.ready}
          icon={<AlertCircle className="h-4 w-4 text-amber-500" />}
        />
      </KpiGrid>

      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border bg-muted/30">
          <h4 className="text-sm font-semibold">Répartition par Statut</h4>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {Object.entries(data.statusCounts).map(([status, count]) => {
              const percentage = (count / data.summary.total) * 100;
              return (
                <div key={status} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider">
                    <span>{status.replace(/_/g, " ")}</span>
                    <span className="text-muted-foreground">{count} tickets ({percentage.toFixed(0)}%)</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all",
                        status === "completed" ? "bg-emerald-500" :
                        status === "ready_for_pickup" ? "bg-amber-500" :
                        status === "in_repair" ? "bg-primary" : "bg-slate-400"
                      )}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ReportShell>
  );
}
