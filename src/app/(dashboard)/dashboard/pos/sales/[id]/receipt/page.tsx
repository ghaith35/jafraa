import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { PrintButton } from "@/features/repairs/components/PrintButton";

export const dynamic = "force-dynamic";
export const metadata = { title: "Ticket de caisse" };

function receiptBarcode(value: string) {
  const bits: number[] = [];
  for (const char of value) {
    const code = char.charCodeAt(0);
    for (let i = 0; i < 6; i++) bits.push((code >> i) & 1 ? 3 : 1);
    bits.push(1);
  }
  return bits.slice(0, 90);
}

export default async function PosReceiptPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await getSession();
  if (!session) redirect("/login");
  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const sale = await prisma.posSale.findFirst({
    where: { id: params.id, storeId },
    include: {
      store: true,
      customer: { select: { name: true, phones: { select: { phoneNumber: true }, take: 1 } } },
      createdBy: { select: { name: true } },
      lines: { orderBy: { createdAt: "asc" } },
    },
  });

  if (!sale) redirect("/dashboard/pos");
  const bars = receiptBarcode(sale.saleNumber);
  const subtotal = Number(sale.subtotalAmount);
  const discount = Number(sale.discountAmount);
  const total = Number(sale.totalAmount);
  const cash = Number(sale.cashReceivedAmount);
  const debt = Number(sale.debtAmount);
  const change = Number(sale.changeAmount);

  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-950 print:bg-white print:p-0">
      <style>{`@media print {.no-print{display:none!important}.receipt{box-shadow:none!important;border:0!important;margin:0!important;width:78mm!important}.cut{border-top:1px dashed #111}} @page { size: 80mm auto; margin: 4mm; }`}</style>
      <div className="no-print mx-auto mb-4 flex max-w-[360px] justify-between">
        <a href="/dashboard/pos" className="rounded-lg border bg-white px-3 py-2 text-sm font-bold">Retour POS</a>
        <PrintButton />
      </div>

      <section className="receipt mx-auto w-[360px] rounded-2xl border border-slate-300 bg-white p-5 font-mono shadow-xl">
        <header className="text-center">
          <h1 className="text-xl font-black tracking-tight">{sale.store.name}</h1>
          {sale.store.address && <p className="mt-1 text-[13px] leading-tight">{sale.store.address}</p>}
          {sale.store.phone && <p className="text-[13px]">Tél: {sale.store.phone}</p>}
          <p className="mt-3 text-xs font-bold">TICKET DE CAISSE</p>
          <p className="text-lg font-black">{sale.saleNumber}</p>
        </header>

        <div className="my-3 text-[13px]">
          <Line label="Date" value={new Intl.DateTimeFormat("fr-DZ", { dateStyle: "short", timeStyle: "short" }).format(sale.createdAt)} />
          <Line label="Caissier" value={sale.createdBy.name} />
          <Line label="Client" value={sale.customer?.name ?? "Client comptoir"} />
          {sale.customer?.phones[0]?.phoneNumber && <Line label="Téléphone" value={sale.customer.phones[0].phoneNumber} />}
        </div>

        <div className="cut py-2">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-slate-300 text-left">
                <th className="py-1">Article</th>
                <th className="py-1 text-right">Qté</th>
                <th className="py-1 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {sale.lines.map((line) => (
                <tr key={line.id} className="align-top">
                  <td className="py-1 pr-2"><div className="font-bold">{line.description}</div><div className="text-[12px] text-slate-500">{Number(line.unitPrice).toLocaleString()} DZD</div></td>
                  <td className="py-1 text-right">{line.quantity}</td>
                  <td className="py-1 text-right font-bold">{Number(line.totalPrice).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cut py-3 text-[14px]">
          <Line label="Sous-total" value={`${subtotal.toLocaleString()} DZD`} />
          {discount > 0 && <Line label="Remise" value={`-${discount.toLocaleString()} DZD`} />}
          <div className="my-2 flex items-center justify-between text-base font-black"><span>TOTAL</span><span>{total.toLocaleString()} DZD</span></div>
          <Line label="Reçu" value={`${cash.toLocaleString()} DZD`} />
          {debt > 0 ? <Line label="Reste dû" value={`${debt.toLocaleString()} DZD`} strong /> : <Line label="Monnaie" value={`${change.toLocaleString()} DZD`} strong />}
        </div>

        <div className="my-3 flex h-12 items-end overflow-hidden px-1">
          {bars.map((w, i) => <span key={i} style={{ width: `${w}px`, height: `${i % 3 === 0 ? 42 : 34}px` }} className={i % 2 === 0 ? "bg-black" : "bg-white"} />)}
        </div>
        <p className="text-center text-[12px] font-bold">Merci pour votre achat.</p>
        <p className="mt-1 text-center text-[9px] text-slate-500">Gardez ce reçu pour garantie, échange ou remboursement.</p>
      </section>
    </main>
  );
}

function Line({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return <div className={`flex justify-between gap-4 ${strong ? "font-black" : ""}`}><span>{label}</span><span className="text-right">{value}</span></div>;
}
