import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { PageHeader } from "@/components/shared/PageHeader";
import { getCurrentCashSession } from "@/features/pos/actions/cash-session.actions";
import { ShoppingCart, CreditCard, Lock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = { title: "Caisse" };

export default async function PosPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  // Technician has no access to POS module
  if (session.role === "Technician") redirect("/dashboard");

  const activeSession = await getCurrentCashSession();

  return (
    <>
      <PageHeader
        title="Caisse"
        description="Point de vente — ventes directes en espèces"
      />

      {/* Cash register status card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link
          href="/dashboard/pos/cash-register"
          className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className={cn(
              "rounded-lg p-3",
              activeSession ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-muted"
            )}>
              {activeSession ? (
                <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Lock className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
            <span className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border",
              activeSession
                ? "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800"
                : "bg-gray-100 text-gray-700 border-gray-200 dark:bg-muted dark:text-muted-foreground"
            )}>
              {activeSession ? (
                <><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Ouverte</>
              ) : (
                "Fermée"
              )}
            </span>
          </div>

          <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
            Gestion de la Caisse
          </h3>

          {activeSession ? (
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Ouverte par <span className="font-medium text-foreground">{activeSession.openedBy.name}</span></p>
              <p>à {new Date(activeSession.openedAt).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</p>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400 mt-2">
                {Number(activeSession.expectedCashAmount).toFixed(2)} DZD attendus
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Aucune session active. Ouvrez la caisse pour commencer à encaisser.
            </p>
          )}

          <div className="mt-4 text-xs text-primary font-medium group-hover:underline">
            {activeSession ? "Gérer la session →" : "Ouvrir la caisse →"}
          </div>
        </Link>

        {/* POS Checkout — coming soon */}
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 opacity-60">
          <div className="flex items-start gap-4 mb-4">
            <div className="rounded-lg p-3 bg-muted">
              <ShoppingCart className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-1">Vente directe (POS)</h3>
          <p className="text-sm text-muted-foreground">
            Module de caisse enregistreuse — disponible au Bloc 13.
          </p>
        </div>

        {/* Payments — coming soon */}
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 opacity-60">
          <div className="flex items-start gap-4 mb-4">
            <div className="rounded-lg p-3 bg-muted">
              <CreditCard className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-1">Encaissements Réparations</h3>
          <p className="text-sm text-muted-foreground">
            Paiement des tickets de réparation — disponible dans un prochain bloc.
          </p>
        </div>
      </div>
    </>
  );
}
