export const dynamic = "force-dynamic";

import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Printer, Truck, CalendarDays } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { getPurchaseOrder } from "@/features/inventory/actions/purchase-order.actions";
import { PurchaseOrderStatusButton } from "@/features/inventory/components/PurchaseOrderActions";
import { PrintButton } from "@/features/repairs/components/PrintButton";

export default async function PurchaseOrderDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.role === "Technician") redirect("/dashboard");

  const order = await getPurchaseOrder(params.id);
  if (!order) redirect("/dashboard/inventory/purchase-orders");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link href="/dashboard/inventory/purchase-orders" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card hover:bg-muted"><ArrowLeft className="h-4 w-4" /></Link>
          <div>
            <h1 className="text-2xl font-black tracking-tight">{order.orderNumber}</h1>
            <p className="text-sm text-muted-foreground">Créée par {order.createdBy.name} le {new Date(order.createdAt).toLocaleDateString("fr-DZ")}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {order.status === "draft" && <PurchaseOrderStatusButton orderId={order.id} status="sent" />}
          {order.status === "sent" && <PurchaseOrderStatusButton orderId={order.id} status="confirmed" />}
          {order.status !== "received" && order.status !== "cancelled" && <PurchaseOrderStatusButton orderId={order.id} status="received" />}
          {order.status !== "cancelled" && order.status !== "received" && <PurchaseOrderStatusButton orderId={order.id} status="cancelled" />}
          <PrintButton label="Imprimer" />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs font-black uppercase text-muted-foreground">Fournisseur</p>
          <div className="mt-3 flex items-center gap-3"><Truck className="h-5 w-5 text-primary" /><div><p className="font-black">{order.supplier?.name ?? "Non défini"}</p><p className="text-xs text-muted-foreground">{order.supplier?.phone ?? "—"}</p></div></div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs font-black uppercase text-muted-foreground">Statut</p>
          <p className="mt-3 text-xl font-black capitalize">{order.status}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs font-black uppercase text-muted-foreground">Échéance</p>
          <div className="mt-3 flex items-center gap-2"><CalendarDays className="h-5 w-5 text-primary" /><p className="font-black">{order.expectedAt ? new Date(order.expectedAt).toLocaleDateString("fr-DZ") : "—"}</p></div>
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm print:border-slate-900">
        <div className="border-b border-border bg-muted/30 px-5 py-4"><h2 className="font-black">Lignes de commande</h2></div>
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase text-muted-foreground"><tr><th className="px-5 py-3">Article</th><th className="px-5 py-3">Type</th><th className="px-5 py-3 text-right">Qté</th><th className="px-5 py-3 text-right">Coût</th><th className="px-5 py-3 text-right">Total</th></tr></thead>
          <tbody className="divide-y divide-border">
            {order.lines.map((line) => (
              <tr key={line.id}><td className="px-5 py-4 font-semibold">{line.description}</td><td className="px-5 py-4 capitalize text-muted-foreground">{line.itemType}</td><td className="px-5 py-4 text-right font-bold">{line.quantity}</td><td className="px-5 py-4 text-right">{Number(line.unitCost).toLocaleString()} DZD</td><td className="px-5 py-4 text-right font-black">{Number(line.totalCost).toLocaleString()} DZD</td></tr>
            ))}
          </tbody>
          <tfoot className="border-t border-border bg-muted/20"><tr><td colSpan={4} className="px-5 py-4 text-right font-black">Total</td><td className="px-5 py-4 text-right text-lg font-black text-primary">{Number(order.subtotalAmount).toLocaleString()} DZD</td></tr></tfoot>
        </table>
      </section>

      {order.notes && <div className="rounded-2xl border border-border bg-card p-5"><p className="text-xs font-black uppercase text-muted-foreground">Notes</p><p className="mt-2 whitespace-pre-wrap text-sm">{order.notes}</p></div>}
    </div>
  );
}
