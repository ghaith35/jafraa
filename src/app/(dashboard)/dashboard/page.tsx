import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { prisma } from "@/lib/db";
import { getDashboardStats } from "@/features/reports/actions/report.actions";
import { hasPermission } from "@/lib/auth/permissions";
import {
  TrendingUp,
  Wrench,
  AlertTriangle,
  CreditCard,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

  const storeId = session.storeIds[0];
  const canViewCash = hasPermission(session.role, "payments:manage") || hasPermission(session.role, "payments:view");
  const canViewDebt = hasPermission(session.role, "debt:view");

  // Parallel data fetches — scoped to store/company
  const [activeSession, stats] = await Promise.all([
    canViewCash && storeId 
      ? prisma.cashRegisterSession.findFirst({
          where: { storeId, status: "opened" },
          include: { openedBy: { select: { name: true } } }
        })
      : Promise.resolve(null),
    getDashboardStats()
  ]);

  if (!stats) return null;

  return (
    <>
      <PageHeader
        title="Tableau de bord"
        description="Vue d'ensemble de votre boutique"
      />

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Chiffre d'affaires (Jour)"
          value={`${stats.dailyRevenue.toLocaleString()} DZD`}
          sub="Ventes POS aujourd'hui"
          icon={<TrendingUp className="h-5 w-5 text-primary" />}
          iconBg="bg-primary/10"
        />
        <StatCard
          label="Réparations en cours"
          value={String(stats.openTickets)}
          sub="Tickets actifs"
          icon={<Wrench className="h-5 w-5 text-warning" />}
          iconBg="bg-warning/10"
        />
        <StatCard
          label="Stock Critique"
          value={String(stats.lowStock)}
          sub="Articles en rupture ou bas"
          icon={<AlertTriangle className="h-5 w-5 text-destructive" />}
          iconBg="bg-destructive/10"
        />
        <StatCard
          label="Dettes clients"
          value={canViewDebt ? `${stats.totalDebt.toLocaleString()} DZD` : "—"}
          sub={canViewDebt ? "Total impayé clients" : "Accès restreint"}
          icon={<CreditCard className="h-5 w-5 text-muted-foreground" />}
          iconBg="bg-muted"
        />
      </div>

      {/* Cash register status — only for users with payment access */}
      {canViewCash && (
        <Link
          href="/dashboard/pos/cash-register"
          className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all mb-6"
        >
          <div className="flex items-center gap-3">
            <div className={cn(
              "rounded-lg p-2.5",
              activeSession ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-muted"
            )}>
              {activeSession ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Lock className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Session de caisse
              </p>
              {activeSession ? (
                <p className="text-xs text-muted-foreground">
                  Ouverte par{" "}
                  <span className="font-medium text-foreground">
                    {activeSession.openedBy.name}
                  </span>{" "}
                  à{" "}
                  {new Date(activeSession.openedAt).toLocaleTimeString("fr-FR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  — {Number(activeSession.expectedCashAmount).toFixed(2)} DZD attendus
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Aucune session active pour cette boutique
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
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
            <span className="text-xs text-primary font-medium group-hover:underline hidden sm:block">
              Gérer →
            </span>
          </div>
        </Link>
      )}

      {/* Placeholder notice */}
      <div className="rounded-lg border border-border bg-muted/40 px-4 py-3">
        <p className="text-xs text-muted-foreground">
          Les données du tableau de bord seront alimentées au fil des blocs suivants
          (caisse, réparations, stock, dettes).
        </p>
      </div>
    </>
  );
}
