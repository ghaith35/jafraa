import { getRepairInvoiceDocument } from "@/features/documents/actions/document.actions";
import { DocumentShell } from "@/features/documents/components/DocumentShell";
import { DocumentHeader } from "@/features/documents/components/DocumentHeader";
import { DocumentFooter } from "@/features/documents/components/DocumentFooter";
import { DocumentTable, MoneySummary } from "@/features/documents/components/DocumentTable";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth/session";

export default async function RepairInvoiceReceiptPage({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session || session.role === "Technician") return notFound();

  const invoice = await getRepairInvoiceDocument(params.id).catch(() => null);
  if (!invoice) return notFound();
  
  const { repairTicket } = invoice;
  const tableData = invoice.lines.map((l) => ({
    desc: (
      <div className="space-y-0.5">
        <p className="font-bold">{l.description}</p>
        <p className="text-[10px] text-muted-foreground uppercase">{l.lineType}</p>
      </div>
    ),
    qty: Number(l.quantity),
    price: `${Number(l.unitPrice).toFixed(2)}`,
    total: `${Number(l.totalPrice).toFixed(2)}`,
  }));

  const deviceName = repairTicket.deviceBrand && repairTicket.deviceFamily 
    ? `${repairTicket.deviceBrand.name} ${repairTicket.deviceFamily.name}`
    : repairTicket.customDeviceBrand || "Appareil non spécifié";

  return (
    <DocumentShell title="Facture de réparation">
      <div className="p-8">
        <DocumentHeader
          store={invoice.store}
          documentTitle="Facture de réparation"
          documentNumber={invoice.invoiceNumber}
          date={invoice.createdAt}
          customer={invoice.customer}
        />

        <div className="grid grid-cols-2 gap-8 my-8 rounded-xl border bg-muted/20 p-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Appareil</p>
            <p className="font-bold text-lg">{deviceName}</p>
            <p className="text-xs font-mono">{repairTicket.imeiSerial || "IMEI/SN non spécifié"}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Ticket Référence</p>
            <p className="font-bold text-lg">{repairTicket.ticketNumber}</p>
            <p className="text-xs text-muted-foreground italic">Technicien : {repairTicket.assignedTechnician?.name || "-"}</p>
          </div>
        </div>

        <DocumentTable
          columns={[
            { header: "Description", key: "desc" },
            { header: "Qté", key: "qty", align: "center" },
            { header: "P.U", key: "price", align: "right" },
            { header: "Total", key: "total", align: "right" },
          ]}
          data={tableData}
        />

        <MoneySummary
          rows={[
            { label: "Sous-total", value: Number(invoice.totalAmount) + Number(invoice.discountAmount) },
            { label: "Remise", value: -Number(invoice.discountAmount) },
            { label: "Total à payer", value: Number(invoice.totalAmount), bold: true },
            { label: "Montant payé", value: Number(invoice.paidAmount) },
            ...(Number(invoice.debtAmount) > 0 ? [{ label: "Reste à payer (Dette)", value: Number(invoice.debtAmount), className: "text-red-600 font-bold" }] : []),
            ...(Number(invoice.refundedAmount) > 0 ? [{ label: "Total remboursé", value: -Number(invoice.refundedAmount), className: "text-amber-600 font-bold" }] : []),
          ]}
        />

        <DocumentFooter 
          note={repairTicket.customerNotes}
          warrantyInfo="Garantie limitée sur les pièces remplacées uniquement. La garantie ne couvre pas les chocs, l'oxydation ou toute intervention tierce." 
        />
      </div>
    </DocumentShell>
  );
}
