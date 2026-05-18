import Link from "next/link";
import { Plus, Search, X } from "lucide-react";
import { Pagination } from "@/components/shared/Pagination";
import { KpiStrip } from "@/components/shared/KpiStrip";
import { DateFilter } from "@/components/shared/DateFilter";
import { getAppI18n } from "@/lib/i18n/server";
import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { listRepairTickets } from "@/features/repairs/actions/repair.actions";
import { RepairList } from "@/features/repairs/components/RepairList";
import { prisma } from "@/lib/db";
import { getAvailableMonths, getAvailableDays } from "@/lib/date-filter";
import { cn } from "@/lib/utils";
import type { RepairStatus } from "@prisma/client";

export const metadata = { title: "Réparations" };

const STATUS_FILTERS = [
  { key: "", labelKey: "repairs.filterAll" },
  { key: "received", labelKey: "repairs.filterReceived" },
  { key: "in_diagnosis", labelKey: "repairs.filterDiagnosis" },
  { key: "waiting_customer_approval", labelKey: "repairs.filterWaiting" },
  { key: "in_repair", labelKey: "repairs.filterInRepair" },
  { key: "ready_for_pickup", labelKey: "repairs.filterReady" },
  { key: "completed", labelKey: "repairs.filterCompleted" },
  { key: "not_repaired", labelKey: "repairs.filterNotRepaired" },
];

const FILTER_STYLES: Record<string, string> = {
  "": "bg-muted text-muted-foreground hover:bg-muted/80 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground",
  received: "bg-[var(--status-received-bg)] text-[var(--status-received-fg)] hover:opacity-80 data-[active=true]:ring-2 data-[active=true]:ring-[var(--status-received-fg)]",
  in_diagnosis: "bg-[var(--status-diagnosis-bg)] text-[var(--status-diagnosis-fg)] hover:opacity-80 data-[active=true]:ring-2 data-[active=true]:ring-[var(--status-diagnosis-fg)]",
  waiting_customer_approval: "bg-[var(--status-waiting-bg)] text-[var(--status-waiting-fg)] hover:opacity-80 data-[active=true]:ring-2 data-[active=true]:ring-[var(--status-waiting-fg)]",
  in_repair: "bg-[var(--status-inrepair-bg)] text-[var(--status-inrepair-fg)] hover:opacity-80 data-[active=true]:ring-2 data-[active=true]:ring-[var(--status-inrepair-fg)]",
  ready_for_pickup: "bg-[var(--status-ready-bg)] text-[var(--status-ready-fg)] hover:opacity-80 data-[active=true]:ring-2 data-[active=true]:ring-[var(--status-ready-fg)]",
  completed: "bg-[var(--status-completed-bg)] text-[var(--status-completed-fg)] hover:opacity-80 data-[active=true]:ring-2 data-[active=true]:ring-[var(--status-completed-fg)]",
  not_repaired: "bg-[var(--status-norepair-bg)] text-[var(--status-norepair-fg)] hover:opacity-80 data-[active=true]:ring-2 data-[active=true]:ring-[var(--status-norepair-fg)]",
};

function buildUrl(current: URLSearchParams, key: string, value: string): string {
  const params = new URLSearchParams(current);
  if (value) params.set(key, value);
  else params.delete(key);
  params.delete("page");
  return `/dashboard/repairs?${params.toString()}`;
}

export default async function RepairsPage(props: {
  searchParams: Promise<{ q?: string; status?: string; page?: string; year?: string; month?: string; day?: string }>;
}) {
  const { t } = await getAppI18n();
  const searchParams = await props.searchParams;
  const session = await getSession();
  if (!session) redirect("/login");

  const storeId = session.storeIds[0];
  const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  const currentStatus = searchParams.status || "";
  const currentQ = searchParams.q || "";
  const page = Number(searchParams.page) || 1;
  const selectedYear = searchParams.year ? Number(searchParams.year) : undefined;
  const selectedMonth = searchParams.month ? Number(searchParams.month) : undefined;
  const selectedDay = searchParams.day ? Number(searchParams.day) : undefined;
  const perPage = 20;

  const [activeCount, readyCount, rushCount, completedMonth, months, days] = await Promise.all([
    prisma.repairTicket.count({
      where: { storeId, isArchived: false, currentStatus: { in: ["received", "in_diagnosis", "waiting_customer_approval", "in_repair"] } },
    }),
    prisma.repairTicket.count({ where: { storeId, isArchived: false, currentStatus: "ready_for_pickup" } }),
    prisma.repairTicket.count({
      where: { storeId, isArchived: false, priority: "rush", currentStatus: { in: ["received", "in_diagnosis", "waiting_customer_approval", "in_repair"] } },
    }),
    prisma.repairStatusHistory.count({
      where: { newStatus: "completed", createdAt: { gte: startOfMonth }, repairTicket: { storeId } },
    }),
    getAvailableMonths(storeId),
    selectedYear && selectedMonth ? getAvailableDays(storeId, selectedYear, selectedMonth) : Promise.resolve([]),
  ]);

  const result = await listRepairTickets({
    q: currentQ || undefined,
    status: currentStatus as RepairStatus | undefined,
    page,
    perPage,
    year: selectedYear,
    month: selectedMonth,
    day: selectedDay,
  });

  const sp = new URLSearchParams(searchParams as Record<string, string>);

  return (
    <div className="mx-auto max-w-7xl space-y-4">
      <KpiStrip items={[
        { label: t("kpi.activeTickets"), value: String(activeCount) },
        { label: t("kpi.readyPickup"), value: String(readyCount), tone: readyCount > 0 ? "green" : "default" },
        { label: t("kpi.rush"), value: String(rushCount), tone: rushCount > 0 ? "amber" : "default" },
        { label: t("kpi.completedMonth"), value: String(completedMonth) },
      ]} />

      {/* Row 1: Search + Add button */}
      <div className="flex items-center gap-3">
        <form action="/dashboard/repairs" method="GET" className="relative flex-1 max-w-md">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            name="q"
            defaultValue={currentQ}
            placeholder={t("repairs.searchPlaceholder")}
            className="h-10 w-full rounded-lg border border-border bg-card ps-10 pe-10 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
          />
          {currentQ && (
            <Link
              href={buildUrl(sp, "q", "")}
              className="absolute end-2 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </Link>
          )}
          {currentStatus && <input type="hidden" name="status" value={currentStatus} />}
          {selectedYear && <input type="hidden" name="year" value={selectedYear} />}
          {selectedMonth && <input type="hidden" name="month" value={selectedMonth} />}
          {selectedDay && <input type="hidden" name="day" value={selectedDay} />}
          <button type="submit" className="hidden" />
        </form>

        <Link
          href="/dashboard/repairs/new"
          className="shrink-0 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-xs)] transition-colors hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          {t("repairs.newTicket")}
        </Link>
      </div>

      {/* Row 2: Status pills + Date filter — all on one line */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {STATUS_FILTERS.map((filter) => {
          const isActive = currentStatus === filter.key;
          return (
            <Link
              key={filter.key}
              href={buildUrl(sp, "status", filter.key)}
              data-active={isActive}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 whitespace-nowrap",
                FILTER_STYLES[filter.key],
                isActive && "shadow-sm"
              )}
            >
              {t(filter.labelKey as any)}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="h-5 w-px bg-border mx-1 shrink-0" />

        {/* Date filter selects inline */}
        <DateFilter
          months={months}
          days={days}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          selectedDay={selectedDay}
        />
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        {t("repairs.ticketCount", { count: result.total })}
      </p>

      <RepairList tickets={result.data} userRole={session.role} />
      <Pagination page={result.page} totalPages={result.totalPages} total={result.total} perPage={result.perPage} />
    </div>
  );
}
