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
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle,
  CircleDollarSign,
  Clock3,
  FileText,
  Plus,
  ShoppingCart,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import type { RepairStatus } from "@prisma/client";
import { Sparkline, DonutChart, BarChart } from "@/components/ui/charts";

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
  label: string;
  value: string;
  delta: string;
  Icon: React.ElementType;
  color: string;
  bg: string;
}) {
  return (
    <div className="group relative rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]">
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${bg}, transparent 70%)` }}
      />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wider">{label}</p>
          <p className="mt-2 text-[28px] font-bold tracking-tight text-[var(--text-primary)]">{value}</p>
        </div>
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl shadow-[var(--shadow-sm)] transition-transform duration-200 group-hover:scale-110"
          style={{ backgroundColor: bg, color }}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="relative mt-3 flex items-center gap-1.5 text-xs font-medium text-[var(--text-tertiary)]">
        <TrendingUp className="h-3 w-3" />
        {delta}
      </div>
    </div>
  );
}

function StatusPill({ status, label }: { status: RepairStatus; label: string }) {
  const cfg = statusStyles[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{ backgroundColor: cfg.bg, color: cfg.fg }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {label}
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
  const today = new Date();

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
    <div className="page-enter space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">{t("nav.dashboard")}</h1>
          <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
            {t("dashboard.welcome")}, {user?.name ?? t("dashboard.repaireTeam")}
          </p>
        </div>
        <div className="text-sm text-[var(--text-tertiary)]">{formatDate(today)}</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpiConfigs.map((config) => (
          <KpiCard
            key={config.key}
            label={t(`dashboard.kpi.${config.key}` as AppTranslationKey)}
            value={kpiValues[config.key]}
            delta={kpiDeltas[config.key]}
            Icon={config.icon}
            color={config.color}
            bg={config.bg}
          />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Revenue sparkline */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-200">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Revenu 7 jours</p>
            <BarChart3 className="h-4 w-4 text-[var(--text-tertiary)]" />
          </div>
          <Sparkline data={stats.weeklyRevenue} color="var(--primary)" width={200} height={40} />
          <div className="mt-2 flex justify-between text-[11px] text-[var(--text-tertiary)]">
            <span>{formatDate(new Date(Date.now() - 6 * 86400000))}</span>
            <span>{formatDate(new Date())}</span>
          </div>
        </div>

        {/* Status donut */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">Statut des réparations</p>
          {stats.statusDistribution.length > 0 ? (
            <div className="flex items-center gap-4">
              <DonutChart
                segments={stats.statusDistribution.map((s) => {
                  const statusKey = s.status.replace(/_/g, "-") as keyof typeof statusStyles;
                  const cfg = Object.entries(statusStyles).find(([k]) => k === s.status)?.[1];
                  return {
                    value: s.count,
                    color: cfg?.fg ?? "var(--primary)",
                    label: s.status,
                  };
                })}
                size={84}
                strokeWidth={12}
              />
              <div className="flex flex-col gap-1">
                {stats.statusDistribution.slice(0, 4).map((s) => (
                  <span key={s.status} className="text-[11px] text-[var(--text-secondary)]">{s.status.replace(/_/g, " ")}: {s.count}</span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-[var(--text-tertiary)]">{t("common.none")}</p>
          )}
        </div>

        {/* Technician workload */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">Charge techniciens</p>
          {stats.technicianWorkload.length > 0 ? (
            <BarChart
              data={stats.technicianWorkload.map((t, i) => ({
                label: t.name,
                value: t.count,
                color: i === 0 ? "var(--primary)" : "var(--text-tertiary)",
              }))}
              height={64}
            />
          ) : (
            <p className="text-sm text-[var(--text-tertiary)]">{t("common.none")}</p>
          )}
        </div>
      </div>

      {/* Table + Activity */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_310px]">
        {/* Pipeline table */}
        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] overflow-hidden">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">{t("dashboard.pipeline")}</h2>
            <Link href="/dashboard/repairs" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] hover:underline">
              {t("dashboard.viewAll")} <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--border)] text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                  <th className="w-[15%] px-5 py-2.5">{t("dashboard.table.ticket")}</th>
                  <th className="w-[20%] px-5 py-2.5">{t("dashboard.table.customer")}</th>
                  <th className="w-[23%] px-5 py-2.5">{t("dashboard.table.device")}</th>
                  <th className="w-[18%] px-5 py-2.5">{t("dashboard.table.status")}</th>
                  <th className="w-[14%] px-5 py-2.5">{t("dashboard.table.technician")}</th>
                  <th className="w-[10%] px-5 py-2.5">{t("common.date")}</th>
                </tr>
              </thead>
              <tbody>
                {recentTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--muted)]/50 transition-colors">
                    <td className="px-5 py-3 font-semibold text-[var(--primary)]">
                      <Link href={`/dashboard/repairs/${ticket.id}`} className="hover:underline">{ticket.ticketNumber}</Link>
                    </td>
                    <td className="truncate px-5 py-3 text-sm font-medium text-[var(--text-primary)]">{ticket.customer.name}</td>
                    <td className="truncate px-5 py-3 text-sm text-[var(--text-secondary)]">{deviceName(ticket, t("dashboard.table.deviceFallback"))}</td>
                    <td className="px-5 py-3"><StatusPill status={ticket.currentStatus} label={t(statusStyles[ticket.currentStatus].labelKey)} /></td>
                    <td className="truncate px-5 py-3 text-sm text-[var(--text-secondary)]">{ticket.assignedTechnician?.name ?? t("common.none")}</td>
                    <td className="truncate px-5 py-3 text-xs text-[var(--text-tertiary)]">{formatDate(ticket.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Activity feed */}
        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
          <div className="border-b border-[var(--border)] px-5 py-3.5">
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">{t("dashboard.recentActivity")}</h2>
          </div>
          <div className="flex flex-col gap-0 px-5 py-3.5">
            {activities.length ? activities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="relative flex gap-3 pb-4 last:pb-0">
                  {/* Connector line */}
                  {i < activities.length - 1 && (
                    <div className="absolute start-[13px] top-7 bottom-0 w-px bg-[var(--border)]" />
                  )}
                  <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-tertiary)] z-10">
                    <Icon className="h-3 w-3" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="truncate text-sm font-medium text-[var(--text-primary)]">{activity.text}</p>
                    <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">{activity.time}</p>
                  </div>
                </div>
              );
            }) : (
              <p className="text-sm text-[var(--text-secondary)]">{t("dashboard.noRecentActivity")}</p>
            )}
          </div>
        </section>
      </div>

      {/* Bottom actions */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_auto]">
        {/* Critical stock alert */}
        <div className="flex flex-col gap-3 rounded-xl border border-[var(--s-diagnosis-border)] bg-[var(--s-diagnosis-bg)]/50 p-4 text-[var(--s-diagnosis-tx)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--s-diagnosis-bg)]">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold">{t("dashboard.kpi.criticalStock")}</p>
              <p className="text-xs opacity-80">
                {stats.lowStock > 0
                  ? t("dashboard.criticalStockSummary", { count: stats.lowStock })
                  : t("dashboard.criticalStockEmpty")}
              </p>
            </div>
          </div>
          <Link href="/dashboard/inventory/reorder" className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline">
            {t("dashboard.orderNow")} <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Quick actions */}
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/dashboard/repairs/new"
            className="inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              boxShadow: "0 0 0 1px rgba(99,102,241,0.3), 0 2px 8px rgba(99,102,241,0.25)",
            }}
          >
            <Plus className="h-4 w-4" />
            {t("repairs.newTicket")}
          </Link>
          <Link href="/dashboard/pos/cash-register" className="inline-flex h-10 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-medium shadow-[var(--shadow-xs)] hover:bg-[var(--muted)] transition-colors">
            <ShoppingCart className="h-4 w-4" />
            {t("dashboard.openCash")}
          </Link>
          <Link href="/dashboard/customers/new" className="inline-flex h-10 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-medium shadow-[var(--shadow-xs)] hover:bg-[var(--muted)] transition-colors">
            <Users className="h-4 w-4" />
            {t("customers.new")}
          </Link>
        </div>
      </div>
    </div>
  );
}
