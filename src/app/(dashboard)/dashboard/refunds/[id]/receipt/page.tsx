import { getRefundDocument } from "@/features/documents/actions/document.actions";
import { DocumentShell } from "@/features/documents/components/DocumentShell";
import { DocumentHeader } from "@/features/documents/components/DocumentHeader";
import { DocumentFooter } from "@/features/documents/components/DocumentFooter";
import { DocumentTable } from "@/features/documents/components/DocumentTable";
import { MoneySummary } from "@/features/documents/components/MoneySummary";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth/session";

export default async function RefundReceiptPage({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session || session.role === "Technician") return notFound();

  const refund = await getRefundDocument(params.id).catch(() => null);
  if (!refund) return notFound();

  const tableData = refund.lines.map((l) => ({
    desc: l.description,
    qty: Number(l.quantity),
    price: `${Number(l.unitPrice).toFixed(2)}`,
    total: `${Number(l.totalRefundAmount).toFixed(2)}`,
  }));

  const sourceNumber = refund.posSale?.saleNumber || refund.repairInvoice?.invoiceNumber || "-";

  return (
    <DocumentShell title="Reçu de remboursement">
      <div className="p-8">
        <DocumentHeader
          store={refund.store}
          documentTitle="Reçu de remboursement"
          documentNumber={refund.refundNumber}
          date={refund.createdAt}
        />

        <div className="my-8 p-4 rounded-xl border bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900">
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500 mb-1">Source du remboursement</p>
          <p className="font-bold text-lg">{sourceNumber}</p>
          <p className="text-xs text-muted-foreground italic">Motif : {refund.reason}</p>
        </div>

        <DocumentTable
          columns={[
            { header: "Article", key: "desc" },
            { header: "Qté", key: "qty", align: "center" },
            { header: "P.U", key: "price", align: "right" },
            { header: "Total remboursé", key: "total", align: "right" },
          ]}
          data={tableData}
        />

        <MoneySummary
          rows={[
            { label: "Total Remboursé (Espèces)", value: Number(refund.totalRefundAmount), bold: true },
          ]}
        />

        <DocumentFooter 
          note="Ce document atteste du remboursement des articles mentionnés ci-dessus." 
        />
      </div>
    </DocumentShell>
  );
}
