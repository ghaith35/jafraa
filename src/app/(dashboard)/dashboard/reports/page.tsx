export const dynamic = "force-dynamic";

import {
  TrendingUp,
  BarChart3,
  Wrench,
  CreditCard,
  Package,
  Users2,
  ArrowRightLeft,
  ChevronRight,
  Shield,
  AlertTriangle,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { getExecutiveDashboardReport } from "@/features/reports/actions/report.actions";

interface ReportLink {
  titleKey: string;
  descriptionKey: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

export default async function ReportsIndexPage() {
  const t = await getTranslations("reportsPage");
  const session = await getSession();
  if (!session) redirect("/login");
  
  const canView = hasPermission(session.role, "reports:view");
  if (!canView) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <CreditCard className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-xl font-bold">{t("restrictedTitle")}</h2>
        <p className="mt-2 max-w-sm text-muted-foreground">{t("restrictedDescription")}</p>
      </div>
    );
  }

  const executive = await getExecutiveDashboardReport();
  const maxDailyRevenue = Math.max(...executive.daily.map((d) => d.revenue), 1);

  const reports: ReportLink[] = [
    { titleKey: "salesTitle", descriptionKey: "salesDescription", href: "/dashboard/reports/sales", icon: <TrendingUp className="h-6 w-6" />, color: "bg-primary/10 text-primary" },
    { titleKey: "profitTitle", descriptionKey: "profitDescription", href: "/dashboard/reports/profit", icon: <BarChart3 className="h-6 w-6" />, color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { titleKey: "repairsTitle", descriptionKey: "repairsDescription", href: "/dashboard/reports/repairs", icon: <Wrench className="h-6 w-6" />, color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { titleKey: "debtTitle", descriptionKey: "debtDescription", href: "/dashboard/reports/debt", icon: <CreditCard className="h-6 w-6" />, color: "bg-destructive/10 text-destructive" },
    { titleKey: "staffTitle", descriptionKey: "staffDescription", href: "/dashboard/reports/technicians", icon: <Users2 className="h-6 w-6" />, color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    { titleKey: "inventoryTitle", descriptionKey: "inventoryDescription", href: "/dashboard/reports/inventory", icon: <Package className="h-6 w-6" />, color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" },
    { titleKey: "cashFlowTitle", descriptionKey: "cashFlowDescription", href: "/dashboard/reports/cash-flow", icon: <ArrowRightLeft className="h-6 w-6" />, color: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
    { titleKey: "auditTitle", descriptionKey: "auditDescription", href: "/dashboard/reports/audit", icon: <Shield className="h-6 w-6" />, color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400" },
  ];

  return (
    <div className="space-y-7">
      <div className="rounded-[2rem] border border-border bg-gradient-to-br from-card via-card to-primary/5 p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-primary">Executive dashboard</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight">{t("title")}</h1>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">Vue complète chiffre d’affaires, réparations, dettes, stock et commandes fournisseurs.</p>
          </div>
          <Link href="/dashboard/inventory/purchase-orders" className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-bold hover:bg-muted">
            <Truck className="h-4 w-4" /> Commandes stock
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Kpi title="CA 30 jours" value={`${Math.round(executive.summary.totalRevenue).toLocaleString()} DZD`} icon={<TrendingUp className="h-5 w-5" />} tone="text-emerald-600" />
        <Kpi title="Réparations" value={executive.summary.ticketCount.toString()} icon={<Wrench className="h-5 w-5" />} tone="text-blue-600" />
        <Kpi title="Dette totale" value={`${Math.round(executive.summary.totalDebt).toLocaleString()} DZD`} icon={<CreditCard className="h-5 w-5" />} tone="text-red-600" />
        <Kpi title="Alertes stock" value={executive.summary.lowStockCount.toString()} icon={<AlertTriangle className="h-5 w-5" />} tone="text-amber-600" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-black">Évolution CA + réparations</h2>
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">30 jours</span>
          </div>
          <div className="flex h-56 items-end gap-1.5">
            {executive.daily.map((d) => (
              <div key={d.date} className="group relative flex flex-1 flex-col items-center gap-1">
                <div className="w-full rounded-t-md bg-primary/30 transition-all group-hover:bg-primary/60" style={{ height: `${Math.max(3, (d.revenue / maxDailyRevenue) * 100)}%` }} />
                <span className="hidden text-[12px] text-muted-foreground sm:block">{new Date(d.date).getDate()}</span>
                <div className="pointer-events-none absolute -top-12 hidden rounded-lg border bg-popover px-2 py-1 text-[12px] font-bold shadow group-hover:block">
                  {Math.round(d.revenue).toLocaleString()} DZD · {d.repairs} tickets
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <h2 className="mb-4 font-black">Catégories les plus réparées</h2>
          <div className="space-y-3">
            {executive.categories.map((cat) => {
              const max = Math.max(...executive.categories.map((c) => c.count), 1);
              return (
                <div key={cat.name} className="space-y-1">
                  <div className="flex justify-between text-sm font-bold"><span>{cat.name}</span><span>{cat.count}</span></div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${(cat.count / max) * 100}%` }} /></div>
                </div>
              );
            })}
            {executive.categories.length === 0 && <p className="py-8 text-center text-sm text-muted-foreground">Aucune réparation dans la période.</p>}
          </div>
        </section>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Link key={report.href} href={report.href} className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md">
            <div className={cn("shrink-0 rounded-lg p-3 transition-transform group-hover:scale-110", report.color)}>{report.icon}</div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="truncate font-bold text-foreground transition-colors group-hover:text-primary">{t(report.titleKey)}</h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{t(report.descriptionKey)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Kpi({ title, value, icon, tone }: { title: string; value: string; icon: React.ReactNode; tone: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className={`rounded-2xl bg-muted p-3 ${tone}`}>{icon}</div>
        <ShoppingCart className="h-4 w-4 text-muted-foreground/40" />
      </div>
      <p className="mt-5 text-sm font-bold text-muted-foreground">{title}</p>
      <p className="mt-1 text-2xl font-black tracking-tight">{value}</p>
    </div>
  );
}
