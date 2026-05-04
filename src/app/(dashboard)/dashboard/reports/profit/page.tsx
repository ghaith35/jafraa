export const dynamic = "force-dynamic";

import { getProfitReport } from "@/features/reports/actions/report.actions";
import { ReportShell } from "@/features/reports/components/ReportShell";
import { KpiGrid, KpiCard } from "@/features/reports/components/KpiGrid";
import { Wallet, BarChart3, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { parseISO, subDays } from "date-fns";

export default async function ProfitReportPage({
  searchParams,
}: {
  searchParams: Promise<{ start?: string; end?: string }>;
}) {
  const params = await searchParams;
  const startDate = params.start ? parseISO(params.start) : subDays(new Date(), 30);
  const endDate = params.end ? parseISO(params.end) : new Date();

  const data = await getProfitReport({ startDate, endDate });

  const grossMargin = data.revenue.total > 0 
    ? (data.grossProfit / data.revenue.total) * 100 
    : 0;

  return (
    <ReportShell
      title="Analyse de Rentabilité"
      description="Chiffre d'affaires, coûts (COGS) et bénéfices"
    >
      <KpiGrid>
        <KpiCard
          label="Chiffre d'Affaires Total"
          value={`${data.revenue.total.toLocaleString()} DZD`}
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <KpiCard
          label="Coût d'Achat (COGS)"
          value={`${data.cost.total.toLocaleString()} DZD`}
          icon={<ArrowDownCircle className="h-4 w-4" />}
          className="text-amber-600 dark:text-amber-400"
        />
        <KpiCard
          label="Bénéfice Brut"
          value={`${data.grossProfit.toLocaleString()} DZD`}
          subValue={`Marge brute : ${grossMargin.toFixed(1)}%`}
          icon={<ArrowUpCircle className="h-4 w-4" />}
          className="text-emerald-600 dark:text-emerald-400"
        />
        <KpiCard
          label="Dépenses & Frais"
          value={`${data.expenses.toLocaleString()} DZD`}
          icon={<Wallet className="h-4 w-4" />}
          className="text-destructive"
        />
      </KpiGrid>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h4 className="text-sm font-semibold mb-4">Répartition du Chiffre d&apos;Affaires</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Ventes POS</span>
              <span className="text-sm font-medium">{data.revenue.pos.toLocaleString()} DZD</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Réparations</span>
              <span className="text-sm font-medium">{data.revenue.repairs.toLocaleString()} DZD</span>
            </div>
            <div className="pt-2 border-t border-border flex items-center justify-between font-bold">
              <span>Total</span>
              <span>{data.revenue.total.toLocaleString()} DZD</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-center items-center text-center">
          <p className="text-sm text-muted-foreground mb-1">Bénéfice Net Estimé</p>
          <h3 className={cn(
            "text-4xl font-black tracking-tight",
            data.netProfit >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"
          )}>
            {data.netProfit.toLocaleString()} DZD
          </h3>
          <p className="text-xs text-muted-foreground mt-2">
            Après déduction des frais et charges enregistrés
          </p>
        </div>
      </div>
    </ReportShell>
  );
}

// Utility import needed for cn
import { cn } from "@/lib/utils";
