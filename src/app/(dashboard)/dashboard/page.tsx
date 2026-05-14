import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { getDashboardStats } from "@/features/reports/actions/report.actions";
import { hasPermission } from "@/lib/auth/permissions";
import { listRepairTickets } from "@/features/repairs/actions/repair.actions";
import { getAppI18n } from "@/lib/i18n/server";
import { getIntlLocale, type AppTranslationKey } from "@/lib/i18n/ui-core";
import {
  AlertTriangle, ArrowRight, BarChart3, CheckCircle, CircleDollarSign, Clock3,
  FileText, Plus, ShoppingCart, TrendingUp, Users, Wrench,
} from "lucide-react";
import type { RepairStatus } from "@prisma/client";
import { Sparkline, DonutChart } from "@/components/ui/charts";

export const metadata = { title: "Tableau de bord" };

const statusStyles: Record<RepairStatus, { labelKey: AppTranslationKey; bg: string; fg: string }> = {
  received: { labelKey: "dashboard.status.received", bg: "var(--status-received-bg)", fg: "var(--status-received-fg)" },
  in_diagnosis: { labelKey: "dashboard.status.inDiagnosis", bg: "var(--status-diagnosis-bg)", fg: "var(--status-diagnosis-fg)" },
  waiting_customer_approval: { labelKey: "dashboard.status.waitingCustomer", bg: "var(--status-waiting-bg)", fg: "var(--status-waiting-fg)" },
  in_repair: { labelKey: "dashboard.status.inRepair", bg: "var(--status-inrepair-bg)", fg: "var(--status-inrepair-fg)" },
  ready_for_pickup: { labelKey: "dashboard.status.readyForPickup", bg: "var(--status-ready-bg)", fg: "var(--status-ready-fg)" },
  completed: { labelKey: "dashboard.status.completed", bg: "var(--status-received-bg)", fg: "var(--status-received-tx)" },
  not_repaired: { labelKey: "dashboard.status.notRepaired", bg: "var(--status-norepair-bg)", fg: "var(--status-norepair-fg)" },
};

const kpiConfigs = [
  { key: "activeTickets" as const, icon: Wrench, color: "var(--kpi-revenue-fg)", bg: "var(--kpi-revenue-bg)", glowColor: "rgba(99,102,241,0.15)" },
  { key: "readyPickup" as const, icon: CheckCircle, color: "var(--s-ready-tx)", bg: "var(--s-ready-bg)", glowColor: "rgba(22,163,74,0.15)" },
  { key: "todayRevenue" as const, icon: CircleDollarSign, color: "var(--s-inrepair-tx)", bg: "var(--s-inrepair-bg)", glowColor: "rgba(21,128,61,0.15)" },
  { key: "criticalStock" as const, icon: AlertTriangle, color: "var(--s-diagnosis-tx)", bg: "var(--s-diagnosis-bg)", glowColor: "rgba(161,98,7,0.15)" },
];

type DashboardTicket = Awaited<ReturnType<typeof listRepairTickets>>["data"][number];

function formatCurrency(value: number, locale: string) {
  return `${Math.round(value).toLocaleString(getIntlLocale(locale))} DZD`;
}

function deviceName(ticket: DashboardTicket, fallback: string) {
  return (
    [
      ticket.deviceBrand?.name ?? ticket.customerDevice?.customBrand,
      ticket.deviceFamily?.name ?? ticket.customerDevice?.customModel,
    ]
      .filter(Boolean)
      .join(" ") ||
    ticket.customerDevice?.deviceTypeName ||
    fallback
  );
}

function KpiCard({ label, value, delta, Icon, color, bg }: {
  label: string; value: string; delta: string; Icon: React.ElementType; color: string; bg: string;
}) {
  return (
    <div className="group relative rounded-xl border border-border bg-surface p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${bg}, transparent 70%)` }} />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
          <p className="mt-1.5 text-2xl font-bold tracking-tight text-foreground">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm transition-transform duration-200 group-hover:scale-110"
          style={{ backgroundColor: bg, color }}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="relative mt-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <TrendingUp className="h-3 w-3" />{delta}
      </div>
    </div>
  );
}

function StatusPill({ status, label }: { status: RepairStatus; label: string }) {
  const cfg = statusStyles[status];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{ backgroundColor: cfg.bg, color: cfg.fg }}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />{label}
    </span>
  );
}

export default async function DashboardPage() {
  const { t, formatDate, locale } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const storeId = session.storeIds[0];
  const canViewCash =
    hasPermission(session.role, "payments:manage") ||
    hasPermission(session.role, "payments:view");

  const [stats, { data: tickets }, activeSession, user] = await Promise.all([
    getDashboardStats(),
    listRepairTickets(),
    canViewCash && storeId
      ? prisma.cashRegisterSession.findFirst({
          where: { storeId, status: "opened" },
          select: { id: true },
        })
      : Promise.resolve(null),
    prisma.user.findUnique({
      where: { id: session.sub },
      select: { name: true },
    }),
  ]);

  if (!stats) return null;

  const recentTickets = tickets.slice(0, 5);
  const readyCount = tickets.filter((ticket) => ticket.currentStatus === "ready_for_pickup").length;

  const kpiValues: Record<string, string> = {
    activeTickets: String(stats.openTickets),
    readyPickup: String(readyCount),
    todayRevenue: formatCurrency(stats.dailyRevenue, locale),
    criticalStock: String(stats.lowStock),
  };
  const kpiDeltas: Record<string, string> = {
    activeTickets: t("dashboard.kpi.activeTicketsDelta"),
    readyPickup: t("dashboard.kpi.readyPickupDelta"),
    todayRevenue: activeSession ? t("dashboard.cashOpen") : t("dashboard.cashClosed"),
    criticalStock: t("dashboard.kpi.criticalStockDelta"),
  };

  const activities = recentTickets.slice(0, 6).map((ticket, index) => ({
    id: ticket.id,
    icon: index % 3 === 0 ? FileText : index % 3 === 1 ? Clock3 : CheckCircle,
    text: `${ticket.ticketNumber} · ${ticket.customer.name} · ${t(statusStyles[ticket.currentStatus].labelKey)}`,
    time: index === 0 ? t("dashboard.activity.justNow") : t("dashboard.activity.hoursAgo", { count: index + 1 }),
  }));

  return (
    <div className="flex flex-col gap-4" style={{ height: "calc(100svh - 5.5rem)" }}>
      {/* Header — only date */}
      <div className="shrink-0 flex justify-end">
        <div className="text-xs text-muted-foreground">{Intl.DateTimeFormat(getIntlLocale(locale), { dateStyle: "long" }).format(new Date())}</div>
      </div>

      {/* KPI row */}
      <div className="shrink-0 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpiConfigs.map((config) => (
          <KpiCard key={config.key} label={t(`dashboard.kpi.${config.key}` as AppTranslationKey)}
            value={kpiValues[config.key]} delta={kpiDeltas[config.key]} Icon={config.icon} color={config.color} bg={config.bg} />
        ))}
      </div>

      {/* Charts row — 2 columns (revenue + status) */}
      <div className="shrink-0 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Revenue sparkline */}
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t("dashboard.revenue7Days" as AppTranslationKey)}</p>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </div>
          <Sparkline data={stats.weeklyRevenue} color="var(--primary)" width={400} height={40} />
          <div className="mt-1.5 flex justify-between text-[11px] text-muted-foreground">
            <span>{formatDate(new Date(Date.now() - 6 * 86400000))}</span>
            <span>{formatDate(new Date())}</span>
          </div>
        </div>

        {/* Status distribution */}
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{t("dashboard.repairStatus")}</p>
          {stats.statusDistribution.length > 0 ? (
            <div className="flex items-center gap-6">
              <DonutChart
                segments={stats.statusDistribution.map((s) => {
                  const cfg = Object.entries(statusStyles).find(([k]) => k === s.status)?.[1];
                  return { value: s.count, color: cfg?.fg ?? "var(--primary)", label: s.status };
                })}
                size={90} strokeWidth={14}
              />
              <div className="flex flex-col gap-1.5">
                {stats.statusDistribution.slice(0, 4).map((s) => {
                  const st = statusStyles[s.status as RepairStatus];
                  return (
                    <div key={s.status} className="flex items-center gap-2 text-xs">
                      <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: st?.fg ?? "var(--primary)" }} />
                      <span className="font-medium text-muted-foreground">{st ? t(st.labelKey) : s.status}</span>
                      <span className="font-bold text-foreground ms-auto">{s.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">{t("common.none")}</p>
          )}
        </div>
      </div>

      {/* Bottom section: table + activity — flex-1 to fill remaining */}
      <div className="flex-1 min-h-0 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_280px] overflow-hidden">
        {/* Pipeline table */}
        <section className="rounded-xl border border-border bg-surface shadow-sm flex flex-col overflow-hidden">
          <div className="shrink-0 relative flex items-center justify-between px-4 py-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent" />
            <h2 className="relative text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="flex h-5 w-1 rounded-full bg-primary" />
              {t("dashboard.pipeline")}
            </h2>
            <Link href="/dashboard/repairs" className="relative inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline group">
              {t("dashboard.viewAll")} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sticky top-0 bg-surface/95 backdrop-blur-sm border-b border-border">
                  <th className="w-[15%] px-4 py-2.5">{t("dashboard.table.ticket")}</th>
                  <th className="w-[20%] px-4 py-2.5">{t("dashboard.table.customer")}</th>
                  <th className="w-[23%] px-4 py-2.5">{t("dashboard.table.device")}</th>
                  <th className="w-[18%] px-4 py-2.5">{t("dashboard.table.status")}</th>
                  <th className="w-[14%] px-4 py-2.5">{t("dashboard.table.technician")}</th>
                  <th className="w-[10%] px-4 py-2.5">{t("common.date")}</th>
                </tr>
              </thead>
              <tbody>
                {recentTickets.map((ticket, idx) => (
                  <tr key={ticket.id} className="group relative border-b border-border last:border-b-0 transition-all duration-150 hover:bg-gradient-to-r hover:from-primary/[0.03] hover:to-transparent">
                    <td className="px-4 py-3">
                      <Link href={`/dashboard/repairs/${ticket.id}`} className="font-semibold text-primary hover:underline text-sm">{ticket.ticketNumber}</Link>
                    </td>
                    <td className="truncate px-4 py-3 text-sm font-medium text-foreground">
                      <span className="flex items-center gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-[10px] font-bold text-primary">
                          {ticket.customer.name.charAt(0)}
                        </span>
                        {ticket.customer.name}
                      </span>
                    </td>
                    <td className="truncate px-4 py-3 text-sm text-muted-foreground max-w-[180px]">{deviceName(ticket, t("dashboard.table.deviceFallback"))}</td>
                    <td className="px-4 py-3"><StatusPill status={ticket.currentStatus} label={t(statusStyles[ticket.currentStatus].labelKey)} /></td>
                    <td className="truncate px-4 py-3 text-sm text-muted-foreground">{ticket.assignedTechnician?.name ?? <span className="text-muted-foreground/60 italic">{t("common.none")}</span>}</td>
                    <td className="truncate px-4 py-3 text-xs text-muted-foreground/70">{formatDate(ticket.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Activity feed */}
        <section className="rounded-xl border border-border bg-surface shadow-sm flex flex-col overflow-hidden">
          <div className="shrink-0 relative px-4 py-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent" />
            <h2 className="relative text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="flex h-5 w-1 rounded-full bg-primary" />
              {t("dashboard.recentActivity")}
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <div className="flex flex-col gap-0">
              {activities.length ? activities.map((activity, i) => {
                const Icon = activity.icon;
                const statusKey = recentTickets[i]?.currentStatus;
                const statusCfg = statusKey ? statusStyles[statusKey] : null;
                const iconColor = statusCfg?.fg ?? "var(--muted-foreground)";
                const iconBg = statusCfg?.bg ?? "var(--surface)";
                return (
                  <div key={activity.id} className="relative flex gap-3 py-2.5 group">
                    {i < activities.length - 1 && (
                      <div className="absolute start-[14px] top-8 bottom-0 w-px bg-gradient-to-b from-border to-transparent" />
                    )}
                    <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-border z-10 transition-all duration-200 group-hover:scale-110 group-hover:shadow-sm"
                      style={{ backgroundColor: iconBg, color: iconColor, borderColor: iconColor }}>
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 pt-0.5 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">{activity.text}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-xs text-muted-foreground/70">{activity.time}</p>
                        {statusCfg && (
                          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full" style={{ backgroundColor: statusCfg.bg, color: statusCfg.fg }}>
                            {t(statusCfg.labelKey)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }) : (
                <p className="text-sm text-muted-foreground py-6 text-center">{t("dashboard.noRecentActivity")}</p>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Bottom actions */}
      <div className="shrink-0 flex flex-wrap items-center gap-2 justify-end">
        <Link href="/dashboard/repairs/new"
          className="inline-flex h-9 items-center gap-2 rounded-lg px-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)", boxShadow: "0 0 0 1px rgba(99,102,241,0.3), 0 2px 8px rgba(99,102,241,0.25)" }}>
          <Plus className="h-4 w-4" />{t("repairs.newTicket")}
        </Link>
        <Link href="/dashboard/pos/cash-register"
          className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-surface px-3.5 text-sm font-medium shadow-xs hover:bg-muted transition-colors">
          <ShoppingCart className="h-4 w-4" />{t("dashboard.openCash")}
        </Link>
        <Link href="/dashboard/customers/new"
          className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-surface px-3.5 text-sm font-medium shadow-xs hover:bg-muted transition-colors">
          <Users className="h-4 w-4" />{t("customers.new")}
        </Link>
      </div>
    </div>
  );
}
