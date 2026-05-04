import { getPosSaleDocument } from "@/features/documents/actions/document.actions";
import { DocumentShell } from "@/features/documents/components/DocumentShell";
import { DocumentHeader } from "@/features/documents/components/DocumentHeader";
import { DocumentFooter } from "@/features/documents/components/DocumentFooter";
import { DocumentTable, MoneySummary } from "@/features/documents/components/DocumentTable";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth/session";

export default async function PosReceiptPage({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session || session.role === "Technician") return notFound();

  const sale = await getPosSaleDocument(params.id).catch(() => null);
  if (!sale) return notFound();

  const tableData = sale.lines.map((l) => {
    const itemName = l.product?.name || l.part?.name || l.service?.name || l.description;
    const sku = l.product?.sku || l.part?.sku || l.service?.sku || "-";
    return {
      item: (
        <div className="space-y-0.5">
          <p className="font-bold">{itemName}</p>
          <p className="text-[10px] font-mono text-muted-foreground uppercase">{sku}</p>
        </div>
      ),
      qty: l.quantity,
      price: `${Number(l.unitPrice).toFixed(2)}`,
      total: `${Number(l.totalPrice).toFixed(2)}`,
    };
  });

  const alreadyRefunded = sale.refunds.reduce((sum, r) => sum + Number(r.totalRefundAmount), 0);

  return (
    <DocumentShell title="Reçu de vente" className="print:max-w-[80mm] print:text-[12px]">
      <div className="p-8 print:p-4">
        <DocumentHeader
          store={sale.store}
          documentTitle="Reçu de vente"
          documentNumber={sale.saleNumber}
          date={sale.createdAt}
          customer={sale.customer}
        />

        <div className="my-6">
            <p className="text-xs text-muted-foreground mb-4 italic">
            Vendeur : <span className="font-bold text-foreground">{sale.createdBy.name}</span>
          </p>
          <DocumentTable
            columns={[
              { header: "Article", key: "item" },
              { header: "Qté", key: "qty", align: "center" },
              { header: "P.U", key: "price", align: "right" },
              { header: "Total", key: "total", align: "right" },
            ]}
            data={tableData}
          />
        </div>

        <MoneySummary
          rows={[
            { label: "Sous-total", value: Number(sale.totalAmount) + Number(sale.discountAmount) },
            { label: "Remise", value: -Number(sale.discountAmount) },
            { label: "Total", value: Number(sale.totalAmount), bold: true },
            { label: "Espèces reçues", value: Number(sale.cashReceivedAmount) },
            { label: "Rendu", value: Number(sale.cashReceivedAmount) - (Number(sale.totalAmount) - Number(sale.debtAmount)) },
            ...(Number(sale.debtAmount) > 0 ? [{ label: "Reste à payer (Dette)", value: Number(sale.debtAmount), className: "text-red-600 font-bold" }] : []),
            ...(alreadyRefunded > 0 ? [{ label: "Total remboursé", value: -alreadyRefunded, className: "text-amber-600 font-bold" }] : []),
          ]}
        />

        <DocumentFooter 
          note="Merci de votre visite ! Les articles ne sont ni repris ni échangés sauf défaut de fabrication." 
        />
      </div>
    </DocumentShell>
  );
}
