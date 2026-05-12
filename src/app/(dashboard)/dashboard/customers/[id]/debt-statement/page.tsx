import { getCustomerDebtStatement } from "@/features/documents/actions/document.actions";
import { DocumentShell } from "@/features/documents/components/DocumentShell";
import { DocumentHeader } from "@/features/documents/components/DocumentHeader";
import { DocumentTable } from "@/features/documents/components/DocumentTable";
import { MoneySummary } from "@/features/documents/components/MoneySummary";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth/session";

export default async function DebtStatementPage({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session || session.role === "Technician") return notFound();

  const customer = await getCustomerDebtStatement(params.id).catch(() => null);
  if (!customer) return notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = customer as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ledgerData = data.debtTransactions.map((t: any) => ({
    date: new Date(t.createdAt).toLocaleDateString("fr-FR"),
    desc: (
      <div className="space-y-0.5">
        <p className="font-bold uppercase text-[12px]">{t.type}</p>
        <p className="text-[12px] text-muted-foreground">{t.note || "-"}</p>
      </div>
    ),
    debit: t.direction === "debit" ? Number(t.amount).toFixed(2) : "-",
    credit: t.direction === "credit" ? Number(t.amount).toFixed(2) : "-",
  }));

  return (
    <DocumentShell title="Relevé de compte client">
      <div className="p-8">
        <DocumentHeader
          store={data.store!}
          documentTitle="Relevé de compte"
          documentNumber={`STMT-${data.id.slice(-6).toUpperCase()}`}
          date={new Date()}
          customer={data}
        />

        <div className="my-8 rounded-xl border bg-primary/5 p-8 flex justify-between items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Solde Actuel</p>
            <p className="text-4xl font-black text-primary">
              {Number(data.debtBalance?.totalDebt || 0).toFixed(2)} DZD
            </p>
          </div>
          <div className="text-right space-y-1 text-sm">
              <p className="text-muted-foreground">Type : <span className="font-bold text-foreground">{data.customerType === "individual" ? "Particulier" : "Professionnel"}</span></p>
              <p className="text-muted-foreground">Groupe : <span className="font-bold text-foreground">Défaut</span></p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Historique des transactions</h3>
          <DocumentTable
              columns={[
              { header: "Date", key: "date" },
              { header: "Opération / Note", key: "desc" },
              { header: "Débit (+)", key: "debit", align: "right", className: "text-rose-600" },
              { header: "Crédit (-)", key: "credit", align: "right", className: "text-emerald-600" },
              ]}
              data={ledgerData}
          />
        </div>

        <MoneySummary
          rows={[
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            { label: "Total Dettes accumulées", value: data.debtTransactions.filter((t: any) => t.direction === "debit").reduce((sum: number, t: any) => sum + Number(t.amount), 0) },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            { label: "Total Paiements effectués", value: data.debtTransactions.filter((t: any) => t.direction === "credit").reduce((sum: number, t: any) => sum + Number(t.amount), 0) },
            { label: "Solde à régler", value: Number(data.debtBalance?.totalDebt || 0), bold: true },
          ]}
        />

        <div className="mt-20 pt-10 border-t">
            <p className="text-xs text-muted-foreground italic text-center">Ce relevé est arrêté à la date du {new Date().toLocaleString("fr-FR")}.</p>
        </div>
      </div>
    </DocumentShell>
  );
}
