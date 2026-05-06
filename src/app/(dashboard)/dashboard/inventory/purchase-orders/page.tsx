export const dynamic = "force-dynamic";

import Link from "next/link";
import { redirect } from "next/navigation";
import { ClipboardList, PackageCheck, Send, Clock, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { getSession } from "@/lib/auth/session";
import { listPurchaseOrders } from "@/features/inventory/actions/purchase-order.actions";
import { GenerateLowStockPurchaseOrderButton } from "@/features/inventory/components/PurchaseOrderActions";

const STATUS: Record<string, { label: string; cls: string }> = {
  draft: { label: "Brouillon", cls: "bg-slate-100 text-slate-700 border-slate-200" },
  sent: { label: "Envoyée", cls: "bg-blue-100 text-blue-700 border-blue-200" },
  confirmed: { label: "Confirmée", cls: "bg-amber-100 text-amber-700 border-amber-200" },
  received: { label: "Réceptionnée", cls: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  cancelled: { label: "Annulée", cls: "bg-red-100 text-red-700 border-red-200" },
};

export default async function PurchaseOrdersPage() {
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
        title="Commandes fournisseurs"
        description="Préparez, envoyez et suivez les bons de commande de stock."
        actions={<GenerateLowStockPurchaseOrderButton />}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Metric icon={<ClipboardList className="h-5 w-5" />} label="Commandes" value={orders.length.toString()} />
        <Metric icon={<Clock className="h-5 w-5" />} label="Ouvertes" value={openCount.toString()} />
        <Metric icon={<PackageCheck className="h-5 w-5" />} label="Montant ouvert" value={`${Math.round(totalPending).toLocaleString()} DZD`} />
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="border-b border-border bg-muted/30 px-5 py-4">
          <h2 className="text-sm font-black uppercase tracking-wide text-muted-foreground">Historique des commandes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Commande</th>
                <th className="px-5 py-3">Fournisseur</th>
                <th className="px-5 py-3">Lignes</th>
                <th className="px-5 py-3">Statut</th>
                <th className="px-5 py-3 text-right">Total</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.map((order) => {
                const cfg = STATUS[order.status] ?? STATUS.draft;
                return (
                  <tr key={order.id} className="hover:bg-muted/20">
                    <td className="px-5 py-4">
                      <div className="font-black">{order.orderNumber}</div>
                      <div className="text-xs text-muted-foreground">{new Date(order.createdAt).toLocaleDateString("fr-DZ")}</div>
                    </td>
                    <td className="px-5 py-4">{order.supplier?.name ?? "—"}</td>
                    <td className="px-5 py-4">{order.lines.length}</td>
                    <td className="px-5 py-4"><span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-bold ${cfg.cls}`}>{cfg.label}</span></td>
                    <td className="px-5 py-4 text-right font-bold">{Number(order.subtotalAmount).toLocaleString()} DZD</td>
                    <td className="px-5 py-4 text-right"><Link href={`/dashboard/inventory/purchase-orders/${order.id}`} className="font-bold text-primary hover:underline">Ouvrir →</Link></td>
                  </tr>
                );
              })}
              {orders.length === 0 && (
                <tr><td colSpan={6} className="px-5 py-16 text-center text-muted-foreground"><AlertTriangle className="mx-auto mb-3 h-8 w-8 opacity-40" />Aucune commande fournisseur.</td></tr>
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
