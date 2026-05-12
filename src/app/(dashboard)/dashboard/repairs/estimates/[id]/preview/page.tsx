import { getEstimateDocument } from "@/features/documents/actions/document.actions";
import { DocumentShell } from "@/features/documents/components/DocumentShell";
import { DocumentHeader } from "@/features/documents/components/DocumentHeader";
import { DocumentFooter } from "@/features/documents/components/DocumentFooter";
import { DocumentTable } from "@/features/documents/components/DocumentTable";
import { MoneySummary } from "@/features/documents/components/MoneySummary";
import { notFound } from "next/navigation";

export default async function EstimatePreviewPage({ params }: { params: { id: string } }) {
  const estimate = await getEstimateDocument(params.id).catch(() => null);
  if (!estimate) return notFound();

  const { repairTicket } = estimate;
  const tableData = estimate.lines.map((l) => ({
    desc: (
      <div className="space-y-0.5">
        <p className="font-bold">{l.description}</p>
        <p className="text-[12px] text-muted-foreground uppercase">{l.lineType}</p>
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
    <DocumentShell title="Devis de réparation">
      <div className="p-8">
        <DocumentHeader
          store={estimate.store}
          documentTitle="Devis de réparation"
          documentNumber={`EST-${repairTicket.ticketNumber}`}
          date={estimate.createdAt}
          customer={repairTicket.customer}
        />

        <div className="grid grid-cols-2 gap-8 my-8 rounded-xl border bg-muted/20 p-4">
          <div className="space-y-1">
            <p className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground">Appareil</p>
            <p className="font-bold text-lg">{deviceName}</p>
            <p className="text-xs font-mono">{repairTicket.imeiSerial || "IMEI/SN non spécifié"}</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground">Statut</p>
            <p className="font-bold text-lg uppercase">{estimate.status}</p>
            <p className="text-xs text-muted-foreground italic">Valable 15 jours</p>
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
            { label: "Total Devis", value: Number(estimate.totalAmount), bold: true },
          ]}
        />

        <DocumentFooter 
          note="Ce devis est une estimation. Le prix final peut varier selon les découvertes lors de l'intervention." 
          warrantyInfo="Les prix sont indiqués en DZD."
        />
      </div>
    </DocumentShell>
  );
}
