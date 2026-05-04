import { getCashSessionDocument } from "@/features/documents/actions/document.actions";
import { DocumentShell } from "@/features/documents/components/DocumentShell";
import { DocumentHeader } from "@/features/documents/components/DocumentHeader";
import { DocumentTable } from "@/features/documents/components/DocumentTable";
import { StatCard } from "@/features/documents/components/StatCard";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth/session";

export default async function ZReportPage({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session || session.role === "Technician") return notFound();

  const cashSession = await getCashSessionDocument(params.id).catch(() => null);
  if (!cashSession) return notFound();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const data = cashSession as any;
  const movements = data.cashMovements.map((m: any) => ({
    time: new Date(m.createdAt).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
    type: (
      <div className="space-y-0.5">
        <p className="font-bold uppercase text-[10px]">{m.movementType}</p>
        <p className="text-[10px] text-muted-foreground">{m.note}</p>
      </div>
    ),
    in: m.direction === "in" ? Number(m.amount).toFixed(2) : "-",
    out: m.direction === "out" ? Number(m.amount).toFixed(2) : "-",
  }));

  const totalIn = (data.cashMovements as any[])
    .filter((m: any) => m.direction === "in")
    .reduce((sum: number, m: any) => sum + Number(m.amount), 0);
  
  const totalOut = (data.cashMovements as any[])
    .filter((m: any) => m.direction === "out")
    .reduce((sum: number, m: any) => sum + Number(m.amount), 0);
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <DocumentShell title="Rapport de caisse (Z-Report)">
      <div className="p-8">
        <DocumentHeader
          store={data.store}
          documentTitle="Rapport de caisse"
          documentNumber={`Z-${data.id.slice(-6).toUpperCase()}`}
          date={data.closedAt || data.forceClosedAt || data.openedAt}
        />

        <div className="grid grid-cols-3 gap-4 my-8">
          <StatCard label="Ouvert par" value={data.openedBy.name} />
          <StatCard label="Clôturé par" value={data.closedBy?.name || data.forceClosedBy?.name || "-"} />
          <StatCard label="Statut" value={data.status} className="uppercase" />
          <StatCard label="Ouverture" value={new Date(data.openedAt).toLocaleString("fr-FR")} />
          <StatCard label="Clôture" value={data.closedAt ? new Date(data.closedAt).toLocaleString("fr-FR") : data.forceClosedAt ? new Date(data.forceClosedAt).toLocaleString("fr-FR") : "-"} />
          <StatCard label="Fond de caisse" value={`${Number(data.openingAmount).toFixed(2)} DZD`} />
          <StatCard label="Ventes POS" value={data.posSalesCount} />
        </div>

        <div className="rounded-xl border bg-muted/20 p-6 my-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Espèces attendues</p>
              <p className="text-2xl font-black">{Number(data.expectedAmount).toFixed(2)} DZD</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Espèces déclarées</p>
              <p className="text-2xl font-black">{data.actualAmount ? Number(data.actualAmount).toFixed(2) : "-"} DZD</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Écart</p>
              <p className={`text-2xl font-black ${Number(data.differenceAmount) < 0 ? "text-red-600" : "text-emerald-600"}`}>
                {data.differenceAmount ? Number(data.differenceAmount).toFixed(2) : "0.00"} DZD
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Mouvements de caisse</h3>
          <DocumentTable
            columns={[
              { header: "Heure", key: "time" },
              { header: "Type / Note", key: "type" },
              { header: "Entrée (+)", key: "in", align: "right" },
              { header: "Sortie (-)", key: "out", align: "right" },
            ]}
            data={movements}
          />
          
          <div className="mt-4 flex justify-end gap-12 text-sm font-bold p-4 bg-muted/10 rounded-lg">
            <div className="flex gap-4">
              <span className="text-muted-foreground">Total Entrées :</span>
              <span className="text-emerald-600">+{totalIn.toFixed(2)} DZD</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted-foreground">Total Sorties :</span>
              <span className="text-rose-600">-{totalOut.toFixed(2)} DZD</span>
            </div>
          </div>
        </div>
      </div>
    </DocumentShell>
  );
}
