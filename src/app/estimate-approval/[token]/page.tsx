import { notFound } from "next/navigation";
import { getPublicEstimateByToken } from "@/features/estimates/actions/estimate.actions";
import { ApprovalDecisionForm } from "./ApprovalDecisionForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Validation devis" };

export default async function PublicEstimateApprovalPage(props: { params: Promise<{ token: string }> }) {
  const params = await props.params;
  const estimate = await getPublicEstimateByToken(params.token);
  if (!estimate) notFound();

  const ticket = estimate.repairTicket;
  const deviceName = [ticket.deviceBrand?.name, ticket.deviceFamily?.name].filter(Boolean).join(" ") || "Appareil";

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-950">
      <section className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
        <header className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white">
          <p className="text-sm font-black uppercase tracking-wide opacity-80">Validation client</p>
          <h1 className="mt-2 text-3xl font-black">Devis {estimate.estimateNumber}</h1>
          <p className="mt-2 text-sm opacity-90">{estimate.store.name} · Ticket {ticket.ticketNumber}</p>
        </header>

        <div className="grid gap-6 p-6 md:grid-cols-[1fr_280px]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-black uppercase text-slate-500">Client</p>
              <p className="mt-1 font-black">{ticket.customer.name}</p>
              <p className="text-sm text-slate-500">{ticket.customer.phones[0]?.phoneNumber ?? ""}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-black uppercase text-slate-500">Appareil</p>
              <p className="mt-1 font-black">{deviceName}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs uppercase text-slate-500"><tr><th className="px-4 py-3">Description</th><th className="px-4 py-3 text-right">Total</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {estimate.lines.map((line) => <tr key={line.id}><td className="px-4 py-3 font-semibold">{line.description}</td><td className="px-4 py-3 text-right font-black">{line.totalPrice.toLocaleString()} DZD</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <aside className="space-y-5">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-xs font-black uppercase text-emerald-700">Total devis</p>
              <p className="mt-2 text-3xl font-black text-emerald-700">{estimate.totalAmount.toLocaleString()} DZD</p>
              <p className="mt-2 text-xs text-emerald-700/80">Ce montant peut évoluer si le client demande des travaux supplémentaires.</p>
            </div>
            <ApprovalDecisionForm token={params.token} />
          </aside>
        </div>
      </section>
    </main>
  );
}
