import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import {
  TrendingUp,
  Wrench,
  AlertTriangle,
  CreditCard,
  ShieldAlert,
} from "lucide-react";

export const metadata = {
  title: "Tableau de bord",
};

interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
  iconBg: string;
}

function StatCard({ label, value, sub, icon, iconBg }: StatCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 flex items-start gap-4 shadow-sm">
      <div className={`rounded-lg p-2.5 shrink-0 ${iconBg}`}>{icon}</div>
      <div className="min-w-0">
        <p className="text-sm text-muted-foreground truncate">{label}</p>
        <p className="mt-0.5 text-2xl font-bold text-foreground tracking-tight">
          {value}
        </p>
        {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
      </div>
    </div>
  );
}

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <>
      <PageHeader
        title="Tableau de bord"
        description="Vue d'ensemble de votre boutique"
      />

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Chiffre d'affaires du jour"
          value="0 DZD"
          sub="Données disponibles après ouverture de caisse"
          icon={<TrendingUp className="h-5 w-5 text-primary" />}
          iconBg="bg-primary/10"
        />
        <StatCard
          label="Réparations en cours"
          value="0"
          sub="Tickets ouverts"
          icon={<Wrench className="h-5 w-5 text-warning" />}
          iconBg="bg-warning/10"
        />
        <StatCard
          label="Articles en stock critique"
          value="0"
          sub="Sous le seuil d'alerte"
          icon={<AlertTriangle className="h-5 w-5 text-destructive" />}
          iconBg="bg-destructive/10"
        />
        <StatCard
          label="Dettes clients"
          value="0 DZD"
          sub="Total impayé"
          icon={<CreditCard className="h-5 w-5 text-muted-foreground" />}
          iconBg="bg-muted"
        />
      </div>

      {/* Cash register status */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-muted p-2.5">
            <ShieldAlert className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Session de caisse</p>
            <p className="text-xs text-muted-foreground">
              Aucune session active pour cette boutique
            </p>
          </div>
        </div>
        <StatusBadge label="Fermée" variant="outline" />
      </div>

      {/* Placeholder notice */}
      <div className="mt-6 rounded-lg border border-border bg-muted/40 px-4 py-3">
        <p className="text-xs text-muted-foreground">
          Les données du tableau de bord seront alimentées au fil des blocs suivants
          (caisse, réparations, stock, dettes).
        </p>
      </div>
    </>
  );
}
