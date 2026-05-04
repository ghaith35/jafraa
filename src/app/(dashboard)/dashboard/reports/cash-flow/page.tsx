export const dynamic = "force-dynamic";

import { getProfitReport } from "@/features/reports/actions/report.actions";
import { ReportShell } from "@/features/reports/components/ReportShell";
import { KpiGrid, KpiCard } from "@/features/reports/components/KpiGrid";
import { ArrowRightLeft, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { parseISO, subDays } from "date-fns";

export default async function CashFlowReportPage({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; end?: string }>;
}) {
  const params = await searchParams;
  const startDate = params.start ? parseISO(params.start) : subDays(new Date(), 30);
  const endDate = params.end ? parseISO(params.end) : new Date();

  // We reuse the profit report data as it contains revenue/expenses/COGS
  const data = await getProfitReport({ startDate, endDate });

  return (
    <ReportShell
      title="Flux de Trésorerie"
      description="Suivi des entrées et sorties de caisse réelles"
    >
      <KpiGrid cols={3}>
        <KpiCard
          label="Entrées de Caisse"
          value={`${data.revenue.total.toLocaleString()} DZD`}
          icon={<ArrowUpRight className="h-4 w-4 text-emerald-500" />}
          className="text-emerald-600 dark:text-emerald-400"
        />
        <KpiCard
          label="Sorties de Caisse"
          value={`${(data.cost.total + data.expenses).toLocaleString()} DZD`}
          icon={<ArrowDownRight className="h-4 w-4 text-destructive" />}
          className="text-destructive"
        />
        <KpiCard
          label="Trésorerie Nette"
          value={`${(data.revenue.total - data.cost.total - data.expenses).toLocaleString()} DZD`}
          icon={<ArrowRightLeft className="h-4 w-4 text-primary" />}
          className="text-primary"
        />
      </KpiGrid>

      <div className="rounded-xl border border-border bg-card p-8 text-center text-muted-foreground italic shadow-sm">
        <ArrowRightLeft className="h-12 w-12 mx-auto mb-4 opacity-20" />
        <p>Analyse détaillée des flux par catégorie (V1.5)</p>
        <p className="text-xs mt-2">Le flux net correspond au Chiffre d&apos;Affaires encaissé moins les dépenses et achats effectués.</p>
      </div>
    </ReportShell>
  );
}
