import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { PageHeader } from "@/components/shared/PageHeader";
import { DateFilter } from "@/components/shared/DateFilter";
import { getSession } from "@/lib/auth/session";
import { getAppI18n } from "@/lib/i18n/server";
import { prisma } from "@/lib/db";
import { getAvailableMonths, getAvailableDays } from "@/lib/date-filter";
import { TechnicianBoard } from "@/features/repairs/components/TechnicianBoard";
import type { LaneTicket } from "@/features/repairs/components/LaneColumn";
import type { AppTranslationKey } from "@/lib/i18n/ui-core";

const STATUS_META: Record<string, { border: string; dot: string }> = {
  received:                   { border: "border-blue-200", dot: "bg-blue-500" },
  in_diagnosis:               { border: "border-purple-200", dot: "bg-purple-500" },
  waiting_customer_approval:  { border: "border-cyan-200", dot: "bg-cyan-500" },
  in_repair:                  { border: "border-amber-200", dot: "bg-amber-500" },
  ready_for_pickup:           { border: "border-emerald-200", dot: "bg-emerald-500" },
};

const ACTIVE_STATUSES = ["received", "in_diagnosis", "waiting_customer_approval", "in_repair", "ready_for_pickup"];

const ticketInclude = {
  customer: { select: { name: true } },
  deviceBrand: { select: { name: true } },
  deviceFamily: { select: { name: true } },
  assignedTechnician: { select: { name: true } },
  problems: { select: { problemText: true } },
} satisfies Prisma.RepairTicketInclude;

export default async function TechnicianWorkspacePage(props: {
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

  const extraWhere = session.role === "Technician" ? `"assignedTechnicianId" = '${session.sub}'` : undefined;

  const months = await getAvailableMonths(storeId, extraWhere);

  const days = selectedYear && selectedMonth
    ? await getAvailableDays(storeId, selectedYear, selectedMonth, extraWhere)
    : [];

  let dateFilter: Prisma.DateTimeFilter | undefined;
  if (selectedYear && selectedMonth) {
    if (selectedDay) {
      const start = new Date(selectedYear, selectedMonth - 1, selectedDay);
      const end = new Date(selectedYear, selectedMonth - 1, selectedDay + 1);
      dateFilter = { gte: start, lt: end };
    } else {
      const start = new Date(selectedYear, selectedMonth - 1);
      const end = new Date(selectedYear, selectedMonth);
      dateFilter = { gte: start, lt: end };
    }
  }

  const rawTickets = await prisma.repairTicket.findMany({
    where: {
      storeId,
      isArchived: false,
      ...(dateFilter ? { createdAt: dateFilter } : {}),
      ...(session.role === "Technician" ? { assignedTechnicianId: session.sub } : {}),
    },
    include: ticketInclude,
    orderBy: [{ priority: "desc" }, { dueAt: "asc" }, { createdAt: "asc" }],
    take: 200,
  });

  const tickets = rawTickets.map((t) => ({
    ...t,
    estimatedPrice: t.estimatedPrice ? Number(t.estimatedPrice) : null,
    finalPrice: t.finalPrice ? Number(t.finalPrice) : null,
  })) as unknown as LaneTicket[];

  const lanes = ACTIVE_STATUSES.map((s) => ({
    label: t(`status.${s}` as AppTranslationKey) || s,
    tickets: tickets.filter((t) => t.currentStatus === s),
    ...STATUS_META[s],
    status: s,
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("technician.title")}
        description={t("technician.description")}
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

      <TechnicianBoard key={[selectedYear, selectedMonth, selectedDay].join("-")} initialLanes={lanes} />
    </div>
  );
}
