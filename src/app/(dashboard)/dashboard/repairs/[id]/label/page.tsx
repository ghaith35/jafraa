import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { PrintButton } from "@/features/repairs/components/PrintButton";

export const metadata = { title: "Étiquette réparation" };

function barcodeBits(value: string) {
  const chars = Array.from(value || "REPAIR");
  const bits: number[] = [];
  for (const char of chars) {
    const code = char.charCodeAt(0);
    for (let i = 0; i < 7; i++) bits.push((code >> i) & 1 ? 3 : 1);
    bits.push(1);
  }
  return bits.slice(0, 96);
}

export default async function RepairLabelPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await getSession();
  if (!session) redirect("/login");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const ticket = await prisma.repairTicket.findFirst({
    where: { id: params.id, storeId, isArchived: false },
    include: {
      customer: { select: { name: true, phones: { select: { phoneNumber: true }, take: 1 } } },
      deviceBrand: { select: { name: true } },
      deviceFamily: { select: { name: true } },
      problems: { select: { problemText: true }, take: 2 },
      store: { select: { name: true, phone: true } },
    },
  });

  if (!ticket) redirect("/dashboard/repairs");

  const deviceName = [ticket.deviceBrand?.name, ticket.deviceFamily?.name || ticket.customDeviceModel].filter(Boolean).join(" ") || "Appareil";
  const bars = barcodeBits(ticket.ticketNumber);

  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-950 print:bg-white print:p-0">
      <style>{`@media print {.no-print{display:none}.label{box-shadow:none!important;border:1px solid #000!important}}`}</style>
      <div className="no-print mx-auto mb-4 flex max-w-md justify-between">
        <a href={`/dashboard/repairs/${ticket.id}`} className="rounded-lg border bg-white px-3 py-2 text-sm font-bold">Retour</a>
        <PrintButton />
      </div>
      <section className="label mx-auto w-[420px] rounded-2xl border border-slate-300 bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between border-b border-slate-200 pb-3">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{ticket.store.name}</p>
            <h1 className="font-mono text-2xl font-black">{ticket.ticketNumber}</h1>
          </div>
          <div className="rounded-xl border border-slate-200 px-2 py-1 text-center text-[12px] font-black uppercase">
            Repair<br />Label
          </div>
        </div>

        <div className="my-4 flex h-16 items-end overflow-hidden rounded-lg bg-white px-1">
          {bars.map((width, index) => (
            <span key={index} style={{ width: `${width}px`, height: `${index % 3 === 0 ? 58 : 48}px` }} className={index % 2 === 0 ? "bg-black" : "bg-white"} />
          ))}
        </div>

        <div className="space-y-2 text-sm">
          <Row label="Client" value={ticket.customer.name} />
          <Row label="Téléphone" value={ticket.customer.phones[0]?.phoneNumber ?? "—"} />
          <Row label="Appareil" value={deviceName} />
          <Row label="IMEI/Série" value={ticket.imeiSerial ?? "—"} />
          <Row label="Problème" value={ticket.problems.map((p) => p.problemText).join(" / ") || "—"} />
          <Row label="Échéance" value={ticket.dueAt ? new Intl.DateTimeFormat("fr-DZ", { dateStyle: "short" }).format(ticket.dueAt) : "—"} />
        </div>

        <div className="mt-4 border-t border-slate-200 pt-3 text-center text-[13px] font-semibold text-slate-500">
          {ticket.store.phone ? `Boutique: ${ticket.store.phone} · ` : ""}Coller cette étiquette sur le sachet ou le bon de dépôt.
        </div>
      </section>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[88px_1fr] gap-2">
      <span className="font-bold text-slate-500">{label}</span>
      <span className="font-black text-slate-900">{value}</span>
    </div>
  );
}
