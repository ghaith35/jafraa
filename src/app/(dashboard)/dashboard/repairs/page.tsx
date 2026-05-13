import Link from "next/link";
import { Plus, Search, X } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Pagination } from "@/components/shared/Pagination";
import { getAppI18n } from "@/lib/i18n/server";
import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { listRepairTickets } from "@/features/repairs/actions/repair.actions";
import { RepairList } from "@/features/repairs/components/RepairList";
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
  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
  params.delete("page");
  return `/dashboard/repairs?${params.toString()}`;
}

export default async function RepairsPage(props: {
  searchParams: Promise<{ q?: string; status?: string; page?: string }>;
}) {
  const { t } = await getAppI18n();
  const searchParams = await props.searchParams;
  const session = await getSession();
  if (!session) redirect("/login");

  const currentStatus = searchParams.status || "";
  const currentQ = searchParams.q || "";
  const page = Number(searchParams.page) || 1;
  const perPage = 50;
  const result = await listRepairTickets({
    q: currentQ || undefined,
    status: currentStatus as RepairStatus | undefined,
    page,
    perPage,
  });

  const sp = new URLSearchParams(searchParams);

  return (
    <div className="mx-auto max-w-7xl space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader
          title={t("repairs.title")}
          description={t("repairs.subtitle")}
        />
        <Link
          href="/dashboard/repairs/new"
          className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-xs)] transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <Plus className="h-4 w-4" />
          {t("repairs.newTicket")}
        </Link>
      </div>

      {/* Filter bar */}
      <div className="space-y-3">
        {/* Search */}
        <form action="/dashboard/repairs" method="GET" className="relative max-w-md">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            name="q"
            defaultValue={currentQ}
            placeholder={t("repairs.searchPlaceholder")}
            className="h-10 w-full rounded-lg border border-border bg-card pl-10 pr-10 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
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
          <button type="submit" className="hidden" />
        </form>

        {/* Status filter tabs */}
        <div className="flex flex-wrap gap-1.5">
          {STATUS_FILTERS.map((filter) => {
            const isActive = currentStatus === filter.key;
            return (
              <Link
                key={filter.key}
                href={buildUrl(sp, "status", filter.key)}
                data-active={isActive}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                  FILTER_STYLES[filter.key],
                  isActive && "shadow-sm"
                )}
              >
                {t(filter.labelKey as any)}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        {t("repairs.ticketCount", { count: result.total })}
      </div>

      <RepairList tickets={result.data} userRole={session.role} />
      <Pagination page={result.page} totalPages={result.totalPages} total={result.total} perPage={result.perPage} />
    </div>
  );
}
