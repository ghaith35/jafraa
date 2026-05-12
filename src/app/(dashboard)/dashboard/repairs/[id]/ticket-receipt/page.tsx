import { getRepairTicketDocument } from "@/features/documents/actions/document.actions";
import { DocumentShell } from "@/features/documents/components/DocumentShell";
import { DocumentHeader } from "@/features/documents/components/DocumentHeader";
import { DocumentFooter } from "@/features/documents/components/DocumentFooter";
import { notFound } from "next/navigation";

export default async function RepairTicketReceiptPage({ params }: { params: { id: string } }) {
  const ticket = await getRepairTicketDocument(params.id).catch(() => null);
  if (!ticket) return notFound();

  const deviceName = ticket.deviceBrand && ticket.deviceFamily 
    ? `${ticket.deviceBrand.name} ${ticket.deviceFamily.name}`
    : ticket.customDeviceBrand || "Appareil non spécifié";

  return (
    <DocumentShell title="Bon de réception">
      <div className="p-8">
        <DocumentHeader
          store={ticket.store}
          documentTitle="Bon de réception"
          documentNumber={ticket.ticketNumber}
          date={ticket.createdAt}
          customer={ticket.customer}
        />

        <div className="grid grid-cols-2 gap-8 my-10">
          <div className="space-y-4">
              <div>
              <p className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Appareil</p>
              <p className="font-bold text-xl">{deviceName}</p>
              <p className="text-sm font-mono text-muted-foreground">{ticket.imeiSerial || "IMEI/SN non spécifié"}</p>
            </div>
            
            <div>
              <p className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Détails</p>
              <p className="text-sm">{ticket.deviceColor || ""} {ticket.deviceStorageRam || ""}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border p-4 bg-muted/20">
              <p className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Problèmes signalés</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {ticket.problems.map((p, i) => (
                  <li key={i}>{p.problemText}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border p-4 border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
              <p className="text-[12px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-500 mb-1">Note client</p>
              <p className="text-xs italic">{ticket.customerNotes || "Aucune note particulière"}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t flex justify-between">
          <div className="text-center w-48">
            <div className="h-20 border-b border-dashed border-border mb-2"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Signature Client</p>
          </div>
          <div className="text-center w-48">
            <div className="h-20 border-b border-dashed border-border mb-2"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Cachet du magasin</p>
          </div>
        </div>

        <DocumentFooter 
          note="Conservez ce bon pour retirer votre appareil. Toute réparation non retirée après 90 jours pourra être recyclée." 
        />
      </div>
    </DocumentShell>
  );
}
