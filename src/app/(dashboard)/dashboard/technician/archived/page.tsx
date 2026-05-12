import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { PageHeader } from "@/components/shared/PageHeader";
import { DateFilter } from "@/components/shared/DateFilter";
import { getSession } from "@/lib/auth/session";
import { getAppI18n } from "@/lib/i18n/server";
import { prisma } from "@/lib/db";
import { getAvailableMonths, getAvailableDays } from "@/lib/date-filter";
import { LaneColumn, type LaneTicket } from "@/features/repairs/components/LaneColumn";
import type { AppTranslationKey } from "@/lib/i18n/ui-core";

const STATUS_META: Record<string, { border: string; dot: string }> = {
  completed:    { border: "border-slate-200", dot: "bg-slate-500" },
  not_repaired: { border: "border-red-200", dot: "bg-red-500" },
};

const TERMINAL_STATUSES = ["completed", "not_repaired"];

const ticketInclude = {
  customer: { select: { name: true } },
  deviceBrand: { select: { name: true } },
  deviceFamily: { select: { name: true } },
  assignedTechnician: { select: { name: true } },
  problems: { select: { problemText: true } },
} satisfies Prisma.RepairTicketInclude;

export default async function ArchivedPage(props: {
  searchParams: Promise<{ year?: string; month?: string; day?: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const searchParams = await props.searchParams;
  const { t, formatDate } = await getAppI18n();

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const selectedYear = searchParams.year ? Number(searchParams.year) : undefined;
  const selectedMonth = searchParams.month ? Number(searchParams.month) : undefined;
  const selectedDay = searchParams.day ? Number(searchParams.day) : undefined;

  const months = await getAvailableMonths(storeId);

  const days = selectedYear && selectedMonth
    ? await getAvailableDays(storeId, selectedYear, selectedMonth)
    : [];

  let dateFilter: { gte?: Date; lt?: Date } | undefined;
  if (selectedYear && selectedMonth) {
    if (selectedDay) {
      dateFilter = {
        gte: new Date(selectedYear, selectedMonth - 1, selectedDay),
        lt: new Date(selectedYear, selectedMonth - 1, selectedDay + 1),
      };
    } else {
      dateFilter = {
        gte: new Date(selectedYear, selectedMonth - 1),
        lt: new Date(selectedYear, selectedMonth),
      };
    }
  }

  const tickets = (await prisma.repairTicket.findMany({
    where: {
      storeId,
      currentStatus: { in: ["completed", "not_repaired"] },
      ...(dateFilter ? { createdAt: dateFilter } : {}),
    },
    include: ticketInclude,
    orderBy: { createdAt: "desc" },
    take: 200,
  })) as unknown as LaneTicket[];

  const lanes = TERMINAL_STATUSES.map((s) => ({
    label: t(`status.${s}` as AppTranslationKey) || s,
    tickets: tickets.filter((t) => t.currentStatus === s),
    ...STATUS_META[s],
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("technician.archivedTitle")}
        description={t("technician.archivedDescription")}
        actions={
          <DateFilter
            months={months}
            days={days}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            selectedDay={selectedDay}
          />
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {lanes.map((lane) => (
          <LaneColumn
            key={lane.border}
            label={lane.label}
            tickets={lane.tickets}
            borderColor={lane.border}
            dotColor={lane.dot}
            t={t}
            formatDate={formatDate}
          />
        ))}
      </div>
    </div>
  );
}
