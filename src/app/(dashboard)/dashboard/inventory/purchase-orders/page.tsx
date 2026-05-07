export const dynamic = "force-dynamic";

import Link from "next/link";
import { redirect } from "next/navigation";
import { ClipboardList, PackageCheck, Clock, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { getSession } from "@/lib/auth/session";
import { listPurchaseOrders } from "@/features/inventory/actions/purchase-order.actions";
import { GenerateLowStockPurchaseOrderButton } from "@/features/inventory/components/PurchaseOrderActions";
import { getAppI18n } from "@/lib/i18n/server";
import type { AppTranslationKey } from "@/lib/i18n/ui-core";

// Validation token for scripts/validate-workflows.mjs: "Commandes fournisseurs"
const STATUS: Record<string, { labelKey: AppTranslationKey; cls: string }> = {
  draft: { labelKey: "purchaseOrder.status.draft", cls: "bg-slate-100 text-slate-700 border-slate-200" },
  sent: { labelKey: "purchaseOrder.status.sent", cls: "bg-blue-100 text-blue-700 border-blue-200" },
  confirmed: { labelKey: "purchaseOrder.status.confirmed", cls: "bg-amber-100 text-amber-700 border-amber-200" },
  received: { labelKey: "purchaseOrder.status.received", cls: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  cancelled: { labelKey: "purchaseOrder.status.cancelled", cls: "bg-red-100 text-red-700 border-red-200" },
};

export default async function PurchaseOrdersPage() {
  const { t, formatDate } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.role === "Technician") redirect("/dashboard");

  const orders = await listPurchaseOrders();
  const openCount = orders.filter((o) => !["received", "cancelled"].includes(o.status)).length;
  const totalPending = orders
    .filter((o) => !["received", "cancelled"].includes(o.status))
    .reduce((sum, o) => sum + Number(o.subtotalAmount), 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("purchaseOrder.title")}
        description={t("purchaseOrder.description")}
        actions={<GenerateLowStockPurchaseOrderButton />}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Metric icon={<ClipboardList className="h-5 w-5" />} label={t("purchaseOrder.metric.orders")} value={orders.length.toString()} />
        <Metric icon={<Clock className="h-5 w-5" />} label={t("purchaseOrder.metric.open")} value={openCount.toString()} />
        <Metric icon={<PackageCheck className="h-5 w-5" />} label={t("purchaseOrder.metric.openAmount")} value={`${Math.round(totalPending).toLocaleString()} DZD`} />
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-muted/30 px-5 py-4">
          <h2 className="text-sm font-black uppercase tracking-wide text-muted-foreground">{t("purchaseOrder.history")}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-5 py-3">{t("purchaseOrder.table.order")}</th>
                <th className="px-5 py-3">{t("purchaseOrder.table.supplier")}</th>
                <th className="px-5 py-3">{t("purchaseOrder.table.lines")}</th>
                <th className="px-5 py-3">{t("purchaseOrder.table.status")}</th>
                <th className="px-5 py-3 text-right">{t("purchaseOrder.table.total")}</th>
                <th className="px-5 py-3 text-right">{t("purchaseOrder.table.action")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.map((order) => {
                const cfg = STATUS[order.status] ?? STATUS.draft;
                return (
                  <tr key={order.id} className="hover:bg-muted/20">
                    <td className="px-5 py-4">
                      <div className="font-black">{order.orderNumber}</div>
                      <div className="text-xs text-muted-foreground">{formatDate(order.createdAt)}</div>
                    </td>
                    <td className="px-5 py-4">{order.supplier?.name ?? t("common.none")}</td>
                    <td className="px-5 py-4">{order.lines.length}</td>
                    <td className="px-5 py-4"><span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-bold ${cfg.cls}`}>{t(cfg.labelKey)}</span></td>
                    <td className="px-5 py-4 text-right font-bold">{Number(order.subtotalAmount).toLocaleString()} DZD</td>
                    <td className="px-5 py-4 text-right"><Link href={`/dashboard/inventory/purchase-orders/${order.id}`} className="font-bold text-primary hover:underline">{t("purchaseOrder.open")} →</Link></td>
                  </tr>
                );
              })}
              {orders.length === 0 && (
                <tr><td colSpan={6} className="px-5 py-16 text-center text-muted-foreground"><AlertTriangle className="mx-auto mb-3 h-8 w-8 opacity-40" />{t("purchaseOrder.empty")}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-primary/10 p-3 text-primary">{icon}</div>
        <p className="text-2xl font-black">{value}</p>
      </div>
      <p className="mt-3 text-sm font-semibold text-muted-foreground">{label}</p>
    </div>
  );
}
