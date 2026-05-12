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
  Users,
  Wrench,
} from "lucide-react";
import type { RepairStatus } from "@prisma/client";
import { Sparkline, DonutChart, BarChart } from "@/components/ui/charts";

export const metadata = {
  title: "Tableau de bord",
};

const statusStyles: Record<RepairStatus, { labelKey: AppTranslationKey; bg: string; fg: string }> = {
  received: { labelKey: "dashboard.status.received", bg: "var(--s-received-bg)", fg: "var(--s-received-tx)" },
  in_diagnosis: { labelKey: "dashboard.status.inDiagnosis", bg: "var(--s-diagnosis-bg)", fg: "var(--s-diagnosis-tx)" },
  waiting_customer_approval: { labelKey: "dashboard.status.waitingCustomer", bg: "var(--s-waiting-bg)", fg: "var(--s-waiting-tx)" },
  in_repair: { labelKey: "dashboard.status.inRepair", bg: "var(--s-inrepair-bg)", fg: "var(--s-inrepair-tx)" },
  ready_for_pickup: { labelKey: "dashboard.status.readyForPickup", bg: "var(--s-ready-bg)", fg: "var(--s-ready-tx)" },
  completed: { labelKey: "dashboard.status.completed", bg: "var(--s-received-bg)", fg: "var(--s-received-tx)" },
  not_repaired: { labelKey: "dashboard.status.notRepaired", bg: "var(--s-norepair-bg)", fg: "var(--s-norepair-tx)" },
};

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

function KpiCard({
  label,
  value,
  delta,
  icon,
  color,
  bg,
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
}) {
  return (
    <div className="group relative rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-sm)] transition-all duration-200 hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5">
      <div className="absolute inset-0 rounded-[var(--radius)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" style={{ background: `linear-gradient(135deg, ${bg}10, transparent 60%)` }} />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-[13px] font-medium text-[var(--tx2)]">{label}</p>
          <p className="mt-2 text-[24px] font-semibold tracking-tight text-[var(--tx)]">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: bg, color }}>
          {icon}
        </div>
      </div>
      <p className="relative mt-3 text-[13px] font-medium text-[var(--tx3)]">{delta}</p>
    </div>
  );
}

function StatusPill({ status, label }: { status: RepairStatus; label: string }) {
  const cfg = statusStyles[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[13px] font-medium"
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

  const activities = recentTickets.slice(0, 6).map((ticket, index) => ({
    id: ticket.id,
    icon: index % 3 === 0 ? FileText : index % 3 === 1 ? Clock3 : CheckCircle,
    text: `${ticket.ticketNumber} · ${ticket.customer.name} · ${t(statusStyles[ticket.currentStatus].labelKey)}`,
    time: index === 0 ? t("dashboard.activity.justNow") : t("dashboard.activity.hoursAgo", { count: index + 1 }),
  }));

  return (
    <div className="min-h-[calc(100svh-88px)] bg-[var(--bg)] px-6 py-5 text-[var(--tx)]">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-tight">{t("nav.dashboard")}</h1>
          <p className="mt-1 text-[15px] text-[var(--tx2)]">
            {t("dashboard.welcome")}, {user?.name ?? t("dashboard.repaireTeam")}
          </p>
        </div>
        <div className="text-[14px] font-medium text-[var(--tx3)]">{formatDate(today)}</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label={t("dashboard.kpi.activeTickets")}
          value={String(stats.openTickets)}
          delta={t("dashboard.kpi.activeTicketsDelta")}
          icon={<Wrench className="h-5 w-5" />}
          color="var(--primary)"
          bg="var(--accent)"
        />
        <KpiCard
          label={t("dashboard.kpi.readyPickup")}
          value={String(readyCount)}
          delta={t("dashboard.kpi.readyPickupDelta")}
          icon={<CheckCircle className="h-5 w-5" />}
          color="var(--s-ready-tx)"
          bg="var(--s-ready-bg)"
        />
        <KpiCard
          label={t("dashboard.kpi.todayRevenue")}
          value={formatCurrency(stats.dailyRevenue, locale)}
          delta={activeSession ? t("dashboard.cashOpen") : t("dashboard.cashClosed")}
          icon={<CircleDollarSign className="h-5 w-5" />}
          color="var(--s-inrepair-tx)"
          bg="var(--s-inrepair-bg)"
        />
        <KpiCard
          label={t("dashboard.kpi.criticalStock")}
          value={String(stats.lowStock)}
          delta={t("dashboard.kpi.criticalStockDelta")}
          icon={<AlertTriangle className="h-5 w-5" />}
          color="var(--s-diagnosis-tx)"
          bg="var(--s-diagnosis-bg)"
        />
      </div>

      {/* Charts row */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-sm)]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[13px] font-medium text-[var(--tx2)]">Revenu 7 jours</p>
            <BarChart3 className="h-4 w-4 text-[var(--tx3)]" />
          </div>
          <Sparkline data={stats.weeklyRevenue} color="var(--primary)" width={200} height={36} />
          <div className="mt-2 flex justify-between text-[11px] text-[var(--tx3)]">
            <span>{formatDate(new Date(Date.now() - 6 * 86400000))}</span>
            <span>{formatDate(new Date())}</span>
          </div>
        </div>

        <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-sm)]">
          <p className="text-[13px] font-medium text-[var(--tx2)] mb-3">Statut des réparations</p>
          {stats.statusDistribution.length > 0 ? (
            <div className="flex items-center gap-4">
              <DonutChart
                segments={stats.statusDistribution.map((s) => ({
                  value: s.count,
                  color: `var(--${s.status === "received" ? "s-received" : s.status === "in_diagnosis" ? "s-diagnosis" : s.status === "waiting_customer_approval" ? "s-waiting" : s.status === "in_repair" ? "s-inrepair" : s.status === "ready_for_pickup" ? "s-ready" : "s-norepair"}-tx)`,
                  label: s.status,
                }))}
                size={80}
                strokeWidth={14}
              />
              <div className="flex flex-col gap-1">
                {stats.statusDistribution.slice(0, 4).map((s) => (
                  <span key={s.status} className="text-[11px] text-[var(--tx2)]">{s.status.replace(/_/g, " ")}: {s.count}</span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-[13px] text-[var(--tx3)]">{t("common.none")}</p>
          )}
        </div>

        <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-sm)]">
          <p className="text-[13px] font-medium text-[var(--tx2)] mb-3">Charge techniciens</p>
          {stats.technicianWorkload.length > 0 ? (
            <BarChart
              data={stats.technicianWorkload.map((t, i) => ({
                label: t.name,
                value: t.count,
                color: i === 0 ? "var(--primary)" : "var(--tx3)",
              }))}
              height={60}
            />
          ) : (
            <p className="text-[13px] text-[var(--tx3)]">{t("common.none")}</p>
          )}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,40%)]">
        <section className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <h2 className="text-[15px] font-semibold">{t("dashboard.pipeline")}</h2>
            <Link href="/dashboard/repairs" className="inline-flex items-center gap-1 text-[14px] font-medium text-[var(--primary)]">
              {t("dashboard.viewAll")} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-left text-[14px]">
              <thead>
                <tr className="border-b border-[var(--border)] text-[12px] font-semibold uppercase tracking-[0.04em] text-[var(--tx3)]">
                  <th className="w-[14%] px-4 py-2 text-start">{t("dashboard.table.ticket")}</th>
                  <th className="w-[20%] px-4 py-2 text-start">{t("dashboard.table.customer")}</th>
                  <th className="w-[24%] px-4 py-2 text-start">{t("dashboard.table.device")}</th>
                  <th className="w-[18%] px-4 py-2 text-start">{t("dashboard.table.status")}</th>
                  <th className="w-[14%] px-4 py-2 text-start">{t("dashboard.table.technician")}</th>
                  <th className="w-[10%] px-4 py-2 text-start">{t("common.date")}</th>
                </tr>
              </thead>
              <tbody>
                {recentTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--muted)]">
                    <td className="px-4 py-3 font-semibold text-[var(--primary)]">
                      <Link href={`/dashboard/repairs/${ticket.id}`}>{ticket.ticketNumber}</Link>
                    </td>
                    <td className="truncate px-4 py-3 font-medium">{ticket.customer.name}</td>
                    <td className="truncate px-4 py-3 text-[var(--tx2)]">{deviceName(ticket, t("dashboard.table.deviceFallback"))}</td>
                    <td className="px-4 py-3"><StatusPill status={ticket.currentStatus} label={t(statusStyles[ticket.currentStatus].labelKey)} /></td>
                    <td className="truncate px-4 py-3 text-[var(--tx2)]">{ticket.assignedTechnician?.name ?? t("common.none")}</td>
                    <td className="px-4 py-3 text-[var(--tx3)]">{formatDate(ticket.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
          <div className="border-b border-[var(--border)] px-4 py-3">
            <h2 className="text-[15px] font-semibold">{t("dashboard.recentActivity")}</h2>
          </div>
          <div className="flex flex-col gap-0 px-4 py-3">
            {activities.length ? activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="relative flex gap-3 pb-4 last:pb-0">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--tx3)]">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="truncate text-[14px] font-medium text-[var(--tx)]">{activity.text}</p>
                    <p className="mt-0.5 text-[13px] text-[var(--tx3)]">{activity.time}</p>
                  </div>
                </div>
              );
            }) : (
              <p className="text-[14px] text-[var(--tx2)]">{t("dashboard.noRecentActivity")}</p>
            )}
          </div>
        </section>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex flex-col gap-3 rounded-[var(--radius)] border border-[var(--s-diagnosis-bg)] bg-[var(--s-diagnosis-bg)] p-4 text-[var(--s-diagnosis-tx)] shadow-[var(--shadow-sm)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <div>
              <p className="text-[15px] font-semibold">{t("dashboard.kpi.criticalStock")}</p>
              <p className="text-[14px] opacity-80">
                {stats.lowStock > 0
                  ? t("dashboard.criticalStockSummary", { count: stats.lowStock })
                  : t("dashboard.criticalStockEmpty")}
              </p>
            </div>
          </div>
          <Link href="/dashboard/inventory/reorder" className="inline-flex items-center gap-1 text-[14px] font-semibold">
            {t("dashboard.orderNow")} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link href="/dashboard/repairs/new" className="inline-flex h-9 items-center gap-2 rounded-[var(--radius)] bg-[var(--primary)] px-3 text-[14px] font-medium text-[var(--primary-fg)] shadow-[var(--shadow-sm)]">
            <Plus className="h-4 w-4" />
            {t("repairs.newTicket")}
          </Link>
          <Link href="/dashboard/pos/cash-register" className="inline-flex h-9 items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 text-[14px] font-medium shadow-[var(--shadow-sm)] hover:bg-[var(--muted)]">
            <ShoppingCart className="h-4 w-4" />
            {t("dashboard.openCash")}
          </Link>
          <Link href="/dashboard/customers/new" className="inline-flex h-9 items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 text-[14px] font-medium shadow-[var(--shadow-sm)] hover:bg-[var(--muted)]">
            <Users className="h-4 w-4" />
            {t("customers.new")}
          </Link>
        </div>
      </div>
    </div>
  );
}
