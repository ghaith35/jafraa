export const dynamic = "force-dynamic";

import { getSalesReport } from "@/features/reports/actions/report.actions";
import { ReportShell } from "@/features/reports/components/ReportShell";
import { KpiGrid, KpiCard } from "@/features/reports/components/KpiGrid";
import { TrendingUp, CreditCard, ShoppingBag, Receipt } from "lucide-react";
import { format, parseISO, subDays } from "date-fns";
import { getAppI18n } from "@/lib/i18n/server";

export default async function SalesReportPage({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; end?: string }>;
}) {
  const { t } = await getAppI18n();
  const params = await searchParams;
  const startDate = params.start ? parseISO(params.start) : subDays(new Date(), 30);
  const endDate = params.end ? parseISO(params.end) : new Date();

  const data = await getSalesReport({ startDate, endDate });

  return (
    <ReportShell
      title={t("reports.sales.title")}
      description={t("reports.sales.description")}
    >
      <KpiGrid>
        <KpiCard
          label="Chiffre d'Affaires"
          value={`${data.summary.totalRevenue.toLocaleString()} DZD`}
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <KpiCard
          label="Paiements Encaissés"
          value={`${data.summary.totalPaid.toLocaleString()} DZD`}
          icon={<CreditCard className="h-4 w-4" />}
          className="text-emerald-600 dark:text-emerald-400"
        />
        <KpiCard
          label="Ventes à Crédit"
          value={`${data.summary.totalDebt.toLocaleString()} DZD`}
          icon={<ShoppingBag className="h-4 w-4" />}
          className="text-amber-600 dark:text-amber-400"
        />
        <KpiCard
          label="Nombre de Ventes"
          value={data.summary.count}
          icon={<Receipt className="h-4 w-4" />}
        />
      </KpiGrid>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Chart Placeholder - Simple CSS Bar Chart for now */}
        <div className="lg:col-span-3 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h4 className="text-sm font-semibold mb-6 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Évolution du Chiffre d&apos;Affaires
          </h4>
          <div className="h-[200px] flex items-end gap-1 sm:gap-2">
            {data.chartData.map((d, i) => {
              const max = Math.max(...data.chartData.map(v => v.value), 1);
              const height = (d.value / max) * 100;
              return (
                <div key={i} className="group relative flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-primary/20 hover:bg-primary/40 transition-all rounded-t-sm"
                    style={{ height: `${height}%` }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[10px] px-1.5 py-0.5 rounded border border-border shadow-md whitespace-nowrap z-10">
                      {d.value.toLocaleString()} DZD
                    </div>
                  </div>
                  {/* Show date for every 7th day or first/last */}
                  {(i % 7 === 0 || i === data.chartData.length - 1) && (
                    <span className="text-[10px] text-muted-foreground rotate-45 mt-2 origin-left whitespace-nowrap">
                      {format(parseISO(d.date), "dd/MM")}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ReportShell>
  );
}
