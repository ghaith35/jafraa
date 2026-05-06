export const dynamic = "force-dynamic";

import { getDebtReport } from "@/features/reports/actions/report.actions";
import { ReportShell } from "@/features/reports/components/ReportShell";
import { KpiGrid, KpiCard } from "@/features/reports/components/KpiGrid";
import { CreditCard, Users, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { getAppI18n } from "@/lib/i18n/server";

export default async function DebtReportPage() {
  const { t } = await getAppI18n();
  const data = await getDebtReport();

  return (
    <ReportShell
      title={t("reports.debt.title")}
      description={t("reports.debt.description")}
    >
      <KpiGrid cols={3}>
        <KpiCard
          label="Total Dû par les Clients"
          value={`${data.totalDebt.toLocaleString()} DZD`}
          icon={<CreditCard className="h-4 w-4" />}
          className="text-destructive"
        />
        <KpiCard
          label="Nombre de Débiteurs"
          value={data.count}
          icon={<Users className="h-4 w-4" />}
        />
        <KpiCard
          label="Risque Moyen par Client"
          value={`${data.count > 0 ? Math.round(data.totalDebt / data.count).toLocaleString() : 0} DZD`}
          icon={<AlertTriangle className="h-4 w-4" />}
        />
      </KpiGrid>

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/30 flex items-center justify-between">
          <h4 className="text-sm font-semibold">Top 50 des Clients Débiteurs</h4>
          <span className="text-xs text-muted-foreground italic">Classé par montant décroissant</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground font-medium uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-6 py-3">Client</th>
                <th className="px-6 py-3 text-right">Solde Dû</th>
                <th className="px-6 py-3 text-right print:hidden">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.topCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium">{c.name}</td>
                  <td className="px-6 py-4 text-right font-bold text-destructive">
                    {c.debt.toLocaleString()} DZD
                  </td>
                  <td className="px-6 py-4 text-right print:hidden">
                    <Link 
                      href={`/dashboard/customers/${c.id}`}
                      className="text-primary hover:underline font-medium"
                    >
                      Détails →
                    </Link>
                  </td>
                </tr>
              ))}
              {data.topCustomers.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-10 text-center text-muted-foreground italic">
                    Aucun client débiteur trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </ReportShell>
  );
}
