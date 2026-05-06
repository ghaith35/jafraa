import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { getDashboardStats } from "@/features/reports/actions/report.actions";
import { hasPermission } from "@/lib/auth/permissions";
import { listRepairTickets } from "@/features/repairs/actions/repair.actions";
import {
  AlertTriangle,
  ArrowRight,
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

export const metadata = {
  title: "Tableau de bord",
};

const statusStyles: Record<RepairStatus, { label: string; bg: string; fg: string }> = {
  received: { label: "Reçu", bg: "var(--s-received-bg)", fg: "var(--s-received-tx)" },
  in_diagnosis: { label: "Diagnostic", bg: "var(--s-diagnosis-bg)", fg: "var(--s-diagnosis-tx)" },
  waiting_customer_approval: { label: "Attente client", bg: "var(--s-waiting-bg)", fg: "var(--s-waiting-tx)" },
  in_repair: { label: "En réparation", bg: "var(--s-inrepair-bg)", fg: "var(--s-inrepair-tx)" },
  ready_for_pickup: { label: "Prêt à livrer", bg: "var(--s-ready-bg)", fg: "var(--s-ready-tx)" },
  completed: { label: "Terminé", bg: "var(--s-received-bg)", fg: "var(--s-received-tx)" },
  not_repaired: { label: "Non réparé", bg: "var(--s-norepair-bg)", fg: "var(--s-norepair-tx)" },
};

type DashboardTicket = Awaited<ReturnType<typeof listRepairTickets>>[number];

function formatCurrency(value: number) {
  return `${value.toLocaleString("fr-DZ")} DZD`;
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("fr-DZ", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(value);
}

function deviceName(ticket: DashboardTicket) {
  return (
    [
      ticket.deviceBrand?.name ?? ticket.customerDevice?.customBrand,
      ticket.deviceFamily?.name ?? ticket.customerDevice?.customModel,
    ]
      .filter(Boolean)
      .join(" ") ||
    ticket.customerDevice?.deviceTypeName ||
    "Appareil"
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
    <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-sm)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium text-[var(--tx2)]">{label}</p>
          <p className="mt-2 text-[22px] font-semibold tracking-tight text-[var(--tx)]">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: bg, color }}>
          {icon}
        </div>
      </div>
      <p className="mt-3 text-[11px] font-medium text-[var(--tx3)]">{delta}</p>
    </div>
  );
}

function StatusPill({ status }: { status: RepairStatus }) {
  const cfg = statusStyles[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
      style={{ backgroundColor: cfg.bg, color: cfg.fg }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {cfg.label}
    </span>
  );
}

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const storeId = session.storeIds[0];
  const canViewCash =
    hasPermission(session.role, "payments:manage") ||
    hasPermission(session.role, "payments:view");

  const [stats, tickets, activeSession, user] = await Promise.all([
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
    text: `${ticket.ticketNumber} · ${ticket.customer.name} · ${statusStyles[ticket.currentStatus].label}`,
    time: index === 0 ? "il y a 10 min" : `il y a ${index + 1} h`,
  }));

  return (
    <div className="min-h-[calc(100svh-88px)] bg-[var(--bg)] px-6 py-5 text-[var(--tx)]">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[22px] font-semibold tracking-tight">Tableau de bord</h1>
          <p className="mt-1 text-[13px] text-[var(--tx2)]">
            Bienvenue, {user?.name ?? "équipe REPAIRE"}
          </p>
        </div>
        <div className="text-[12px] font-medium text-[var(--tx3)]">{formatDate(today)}</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Tickets actifs"
          value={String(stats.openTickets)}
          delta="+3 depuis hier"
          icon={<Wrench className="h-5 w-5" />}
          color="var(--primary)"
          bg="var(--accent)"
        />
        <KpiCard
          label="Prêts à livrer"
          value={String(readyCount)}
          delta="À contacter aujourd’hui"
          icon={<CheckCircle className="h-5 w-5" />}
          color="var(--s-ready-tx)"
          bg="var(--s-ready-bg)"
        />
        <KpiCard
          label="Recettes aujourd’hui"
          value={formatCurrency(stats.dailyRevenue)}
          delta={activeSession ? "Caisse ouverte" : "Caisse fermée"}
          icon={<CircleDollarSign className="h-5 w-5" />}
          color="var(--s-inrepair-tx)"
          bg="var(--s-inrepair-bg)"
        />
        <KpiCard
          label="Stock critique"
          value={String(stats.lowStock)}
          delta="À réapprovisionner"
          icon={<AlertTriangle className="h-5 w-5" />}
          color="var(--s-diagnosis-tx)"
          bg="var(--s-diagnosis-bg)"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,40%)]">
        <section className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <h2 className="text-[13px] font-semibold">Pipeline réparations</h2>
            <Link href="/dashboard/repairs" className="inline-flex items-center gap-1 text-[12px] font-medium text-[var(--primary)]">
              Voir tous <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-left text-[12px]">
              <thead>
                <tr className="border-b border-[var(--border)] text-[10px] font-semibold uppercase tracking-[0.04em] text-[var(--tx3)]">
                  <th className="w-[14%] px-4 py-2 text-start">Ticket</th>
                  <th className="w-[20%] px-4 py-2 text-start">Client</th>
                  <th className="w-[24%] px-4 py-2 text-start">Appareil</th>
                  <th className="w-[18%] px-4 py-2 text-start">Statut</th>
                  <th className="w-[14%] px-4 py-2 text-start">Technicien</th>
                  <th className="w-[10%] px-4 py-2 text-start">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--muted)]">
                    <td className="px-4 py-3 font-semibold text-[var(--primary)]">
                      <Link href={`/dashboard/repairs/${ticket.id}`}>{ticket.ticketNumber}</Link>
                    </td>
                    <td className="truncate px-4 py-3 font-medium">{ticket.customer.name}</td>
                    <td className="truncate px-4 py-3 text-[var(--tx2)]">{deviceName(ticket)}</td>
                    <td className="px-4 py-3"><StatusPill status={ticket.currentStatus} /></td>
                    <td className="truncate px-4 py-3 text-[var(--tx2)]">{ticket.assignedTechnician?.name ?? "—"}</td>
                    <td className="px-4 py-3 text-[var(--tx3)]">{formatDate(ticket.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
          <div className="border-b border-[var(--border)] px-4 py-3">
            <h2 className="text-[13px] font-semibold">Activité récente</h2>
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
                    <p className="truncate text-[12px] font-medium text-[var(--tx)]">{activity.text}</p>
                    <p className="mt-0.5 text-[11px] text-[var(--tx3)]">{activity.time}</p>
                  </div>
                </div>
              );
            }) : (
              <p className="text-[12px] text-[var(--tx2)]">Aucune activité récente.</p>
            )}
          </div>
        </section>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex flex-col gap-3 rounded-[var(--radius)] border border-[var(--s-diagnosis-bg)] bg-[var(--s-diagnosis-bg)] p-4 text-[var(--s-diagnosis-tx)] shadow-[var(--shadow-sm)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <div>
              <p className="text-[13px] font-semibold">Stock critique</p>
              <p className="text-[12px] opacity-80">
                {stats.lowStock > 0
                  ? `${stats.lowStock} article(s) sous le seuil de réapprovisionnement.`
                  : "Aucun article critique pour le moment."}
              </p>
            </div>
          </div>
          <Link href="/dashboard/inventory/reorder" className="inline-flex items-center gap-1 text-[12px] font-semibold">
            Commander <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link href="/dashboard/repairs/new" className="inline-flex h-9 items-center gap-2 rounded-[var(--radius)] bg-[var(--primary)] px-3 text-[12px] font-medium text-[var(--primary-fg)] shadow-[var(--shadow-sm)]">
            <Plus className="h-4 w-4" />
            Nouveau ticket
          </Link>
          <Link href="/dashboard/pos/cash-register" className="inline-flex h-9 items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 text-[12px] font-medium shadow-[var(--shadow-sm)] hover:bg-[var(--muted)]">
            <ShoppingCart className="h-4 w-4" />
            Ouvrir caisse
          </Link>
          <Link href="/dashboard/customers/new" className="inline-flex h-9 items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 text-[12px] font-medium shadow-[var(--shadow-sm)] hover:bg-[var(--muted)]">
            <Users className="h-4 w-4" />
            Nouveau client
          </Link>
        </div>
      </div>
    </div>
  );
}
