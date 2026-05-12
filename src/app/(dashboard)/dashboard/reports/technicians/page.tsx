export const dynamic = "force-dynamic";

import { getTechnicianPerformance } from "@/features/reports/actions/report.actions";
import { ReportShell } from "@/features/reports/components/ReportShell";
import { Users, TrendingUp } from "lucide-react";
import { parseISO, subDays } from "date-fns";
import { getAppI18n } from "@/lib/i18n/server";

export default async function TechniciansReportPage({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; end?: string }>;
}) {
  const { t } = await getAppI18n();
  const params = await searchParams;
  const startDate = params.start ? parseISO(params.start) : subDays(new Date(), 30);
  const endDate = params.end ? parseISO(params.end) : new Date();

  const data = await getTechnicianPerformance({ startDate, endDate });

  return (
    <ReportShell
      title={t("reports.technicians.title")}
      description={t("reports.technicians.description")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((tech) => {
          const successRate = tech.total > 0 ? (tech.completed / tech.total) * 100 : 0;
          return (
            <div key={tech.id} className="rounded-xl border border-border bg-card shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-border bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {tech.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{tech.name}</h4>
                    <p className="text-xs text-muted-foreground">{tech.total} tickets assignés</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-semibold">Réussite</p>
                    <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{successRate.toFixed(0)}%</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-semibold">Réparés</p>
                    <p className="text-xl font-bold">{tech.completed}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    <span>CA Généré</span>
                  </div>
                  <span className="font-bold text-primary">{tech.revenue.toLocaleString()} DZD</span>
                </div>

                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${successRate}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {data.length === 0 && (
          <div className="col-span-full py-20 text-center rounded-xl border border-dashed border-border">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <p className="text-muted-foreground">Aucune donnée technique pour cette période.</p>
          </div>
        )}
      </div>
    </ReportShell>
  );
}
