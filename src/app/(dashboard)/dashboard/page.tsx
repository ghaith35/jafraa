import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { LogoutButton } from "./_components/LogoutButton";

export const metadata = {
  title: "Tableau de bord — REPAIRE",
};

const ROLE_LABELS: Record<string, string> = {
  Admin: "Administrateur",
  Manager: "Gérant",
  Cashier: "Caissier",
  Technician: "Technicien",
};

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-foreground">REPAIRE</span>
        <LogoutButton />
      </header>

      <div className="p-6 max-w-2xl mx-auto space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h1 className="text-xl font-bold text-foreground">
            Bienvenue sur le tableau de bord
          </h1>
          <p className="text-sm text-muted-foreground">
            Le tableau de bord complet sera construit au Bloc 4. Cette page
            confirme que l&apos;authentification fonctionne correctement.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Session active
          </h2>
          <dl className="space-y-3">
            <div className="flex justify-between text-sm">
              <dt className="text-muted-foreground">Identifiant</dt>
              <dd className="font-mono text-xs text-foreground">{session.sub}</dd>
            </div>
            <div className="flex justify-between text-sm">
              <dt className="text-muted-foreground">Rôle</dt>
              <dd className="text-foreground font-medium">
                {ROLE_LABELS[session.role] ?? session.role}
              </dd>
            </div>
            <div className="flex justify-between text-sm">
              <dt className="text-muted-foreground">Entreprise</dt>
              <dd className="font-mono text-xs text-foreground">
                {session.companyId}
              </dd>
            </div>
            <div className="flex justify-between text-sm">
              <dt className="text-muted-foreground">Boutiques accessibles</dt>
              <dd className="text-foreground">
                {session.storeIds.length === 0
                  ? "Aucune"
                  : session.storeIds.length}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
