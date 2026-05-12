export const dynamic = "force-dynamic";

import { getInventoryHealthReport } from "@/features/reports/actions/report.actions";
import { ReportShell } from "@/features/reports/components/ReportShell";
import { KpiGrid, KpiCard } from "@/features/reports/components/KpiGrid";
import { Package, AlertTriangle, Smartphone, Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAppI18n } from "@/lib/i18n/server";

export default async function InventoryReportPage() {
  const { t } = await getAppI18n();
  const data = await getInventoryHealthReport();

  return (
    <ReportShell
      title={t("reports.inventory.title")}
      description={t("reports.inventory.description")}
    >
      <KpiGrid>
        <KpiCard
          label="Valeur Totale Estime (Vente)"
          value={`${data.summary.estimatedStockValue.toLocaleString()} DZD`}
          icon={<Coins className="h-4 w-4" />}
          className="text-emerald-600 dark:text-emerald-400"
        />
        <KpiCard
          label="Articles en Stock Critique"
          value={data.summary.lowStockCount}
          icon={<AlertTriangle className="h-4 w-4 text-destructive" />}
          className={data.summary.lowStockCount > 0 ? "border-destructive/50" : ""}
        />
        <KpiCard
          label="Total Références"
          value={data.summary.totalItems}
          icon={<Package className="h-4 w-4" />}
        />
        <KpiCard
          label="Appareils en Stock"
          value={data.summary.activeDevices}
          icon={<Smartphone className="h-4 w-4" />}
        />
      </KpiGrid>

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border bg-muted/30">
          <h4 className="text-sm font-semibold flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-4 w-4" />
            Articles à Réapprovisionner
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground font-medium uppercase text-[12px] tracking-wider">
              <tr>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Article</th>
                <th className="px-6 py-3 text-right">Stock Actuel</th>
                <th className="px-6 py-3 text-right">Seuil d&apos;Alerte</th>
                <th className="px-6 py-3 text-right">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.lowStockItems.map((item) => (
                <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[12px] font-medium bg-muted border border-border">
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4 text-right">{item.qty}</td>
                  <td className="px-6 py-4 text-right text-muted-foreground">{item.threshold}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={cn(
                      "inline-flex items-center px-2 py-0.5 rounded-full text-[12px] font-bold",
                      item.qty === 0 ? "bg-destructive/10 text-destructive" : "bg-amber-100 text-amber-800"
                    )}>
                      {item.qty === 0 ? "RUPTURE" : "BAS"}
                    </span>
                  </td>
                </tr>
              ))}
              {data.lowStockItems.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-muted-foreground italic">
                    Aucun article en stock bas. Félicitations !
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

