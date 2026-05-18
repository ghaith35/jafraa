import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Users, Archive } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { EmptyState } from "@/components/shared/EmptyState";
import { Pagination } from "@/components/shared/Pagination";
import { KpiStrip } from "@/components/shared/KpiStrip";
import { CustomerSearchBar } from "@/features/customers/components/CustomerSearchBar";
import { CustomerCard } from "@/features/customers/components/CustomerCard";
import { NewCustomerDialog } from "@/features/customers/components/NewCustomerDialog";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Clients" };

export default async function CustomersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; groupId?: string; archived?: string; page?: string }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const sp = await searchParams;
  const q = sp.q;
  const groupId = sp.groupId;
  const page = Number(sp.page) || 1;
  const perPage = 50;
  const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  const [activeGroupOptions, totalCustomers, withDebt, newMonth] = await Promise.all([
    prisma.customerGroup.findMany({
      where: { companyId: session.companyId, isArchived: false },
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    }),
    prisma.customer.count({ where: { companyId: session.companyId, isArchived: false, customerType: "named" } }),
    prisma.customerDebtBalance.count({ where: { customer: { companyId: session.companyId, isArchived: false }, totalDebt: { gt: 0 } } }),
    prisma.customer.count({ where: { companyId: session.companyId, isArchived: false, createdAt: { gte: startOfMonth } } }),
  ]);

  return (
    <div className="flex flex-col" style={{ height: "calc(100svh - 5.5rem)" }}>
      <div className="shrink-0 mb-3 space-y-3">
        <KpiStrip items={[
          { label: t("kpi.totalCustomers"), value: String(totalCustomers) },
          { label: t("kpi.withDebt"), value: String(withDebt), tone: withDebt > 0 ? "red" : "default" },
          { label: t("kpi.newMonth"), value: String(newMonth), tone: newMonth > 0 ? "green" : "default" },
        ]} />
      </div>

      <CustomerTabContent
        q={q}
        groupId={groupId}
        page={page}
        perPage={perPage}
      />
    </div>
  );
}

async function CustomerTabContent({
  q, groupId, page, perPage,
}: {
  q?: string; groupId?: string; page: number; perPage: number;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const activeGroups = await prisma.customerGroup.findMany({
    where: { companyId: session.companyId, isArchived: false },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const where = {
    companyId: session.companyId,
    ...(q ? {
      OR: [
        { name: { contains: q, mode: "insensitive" as const } },
        { phones: { some: { phoneNumber: { contains: q } } } },
      ],
    } : {}),
    ...(groupId ? { customerGroupId: groupId } : {}),
  };

  const [customers, total, archivedCount] = await Promise.all([
    prisma.customer.findMany({
      where,
      include: {
        phones: true,
        customerGroup: { select: { name: true } },
        debtBalance: { select: { totalDebt: true } },
        _count: { select: { repairTickets: true, assets: true } },
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * perPage,
      take: perPage,
    }),
    prisma.customer.count({ where }),
    prisma.customer.count({ where: { companyId: session.companyId, isArchived: true } }),
  ]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="flex flex-col flex-1 min-h-0 gap-3">
      <Suspense>
        <CustomerSearchBar groups={activeGroups} rightSlot={<NewCustomerDialog groups={activeGroups} />} />
      </Suspense>

      {/* Stats strip */}
      <div className="shrink-0 flex items-center gap-4 px-1">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Users className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">{total}</span> {t("customers.title")}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Archive className="h-3.5 w-3.5" />
          <span className="font-semibold text-foreground">{archivedCount}</span> archivés
        </span>
      </div>

      {customers.length === 0 ? (
        <EmptyState
          icon={Users}
          title={q ? t("customers.noResults") : t("customers.emptyTitle")}
          description={q ? t("customers.noMatch", { query: q }) : t("customers.emptyDescription")}
          action={!q ? <NewCustomerDialog groups={activeGroups} /> : undefined}
        />
      ) : (
        <div className="flex-1 overflow-y-auto">
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {customers.map((c: any) => (
              <CustomerCard key={c.id} customer={c} />
            ))}
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <div className="shrink-0">
          <Pagination page={page} totalPages={totalPages} total={total} perPage={perPage} />
        </div>
      )}
    </div>
  );
}
