import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus, Users } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Pagination } from "@/components/shared/Pagination";
import { CustomerSearchBar } from "@/features/customers/components/CustomerSearchBar";
import { NewCustomerDialog } from "@/features/customers/components/NewCustomerDialog";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Clients" };

const LANG_LABELS: Record<string, string> = { fr: "FR", ar: "AR", en: "EN" };

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default async function CustomersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; groupId?: string; archived?: string; page?: string }>;
}) {
  const { t, formatDate } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const sp = await searchParams;
  const q = sp.q;
  const groupId = sp.groupId;
  const archived = sp.archived;
  const page = Number(sp.page) || 1;
  const perPage = 50;
  const showArchived = archived === "1";

  const activeGroupOptions = await prisma.customerGroup.findMany({
    where: { companyId: session.companyId, isArchived: false },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  return (
    <>
      <PageHeader
        title={t("customers.title")}
        description={t("customers.countFound", { count: 0, plural: "s" })}
        actions={<NewCustomerDialog groups={activeGroupOptions} />}
      />

      <CustomerTabContent
        q={q}
        groupId={groupId}
        showArchived={showArchived}
        page={page}
        perPage={perPage}
      />
    </>
  );
}

/* ─── Inline Customer Tab Content ──────────────────────────────────── */

async function CustomerTabContent({
  q,
  groupId,
  showArchived,
  page,
  perPage,
}: {
  q?: string;
  groupId?: string;
  showArchived: boolean;
  page: number;
  perPage: number;
}) {
  const { t, formatDate } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const activeGroups = await prisma.customerGroup.findMany({
    where: { companyId: session.companyId, isArchived: false },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const where = {
    companyId: session.companyId,
    isArchived: showArchived ? undefined : false,
    ...(groupId ? { customerGroupId: groupId } : {}),
    ...(q
      ? {
          OR: [
            { name: { contains: q, mode: "insensitive" as const } },
            {
              phones: {
                some: { phoneNumber: { contains: q } },
              },
            },
          ],
        }
      : {}),
  };

  const [customers, total] = await Promise.all([
    prisma.customer.findMany({
      where,
      include: {
        phones: { where: { isPrimary: true }, take: 1 },
        customerGroup: { select: { name: true } },
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * perPage,
      take: perPage,
    }),
    prisma.customer.count({ where }),
  ]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <>
      <Suspense>
        <CustomerSearchBar groups={activeGroups} />
      </Suspense>

      {customers.length === 0 ? (
        <EmptyState
          icon={Users}
          title={q ? t("customers.noResults") : t("customers.emptyTitle")}
          description={q ? t("customers.noMatch", { query: q }) : t("customers.emptyDescription")}
          action={
            !q ? <NewCustomerDialog groups={activeGroups} /> : undefined
          }
        />
      ) : (
        <>
          <div className="mb-3 text-sm text-[var(--text-secondary)]">
            {t("customers.countFound", { count: total, plural: total !== 1 ? "s" : "" })}
          </div>

          <ul className="space-y-1.5">
            {customers.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/dashboard/customers/${c.id}`}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div
                    className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0 shadow-[var(--shadow-xs)]"
                    style={{
                      background: "linear-gradient(135deg, var(--accent), var(--accent))",
                    }}
                  >
                    <span className="text-xs font-semibold text-[var(--primary)]">
                      {initials(c.name)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-[var(--text-primary)] truncate group-hover:text-[var(--primary)] transition-colors">
                        {c.name}
                      </span>
                      {c.isArchived && <StatusBadge label={t("customers.archived")} variant="outline" />}
                    </div>
                    <div className="flex items-center gap-3 mt-0.5 text-xs text-[var(--text-secondary)] flex-wrap">
                      {c.phones[0] ? (
                        <span className="font-mono">{c.phones[0].phoneNumber}</span>
                      ) : (
                        <span className="italic text-[var(--text-tertiary)]">{t("customers.noPhone")}</span>
                      )}
                      {c.customerGroup && <span>· {c.customerGroup.name}</span>}
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-medium text-[var(--text-tertiary)] rounded-md border border-[var(--border)] px-1.5 py-0.5">
                      {LANG_LABELS[c.languagePreference] ?? c.languagePreference}
                    </span>
                    <span className="text-xs text-[var(--text-tertiary)]">{formatDate(c.createdAt)}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Pagination page={page} totalPages={totalPages} total={total} perPage={perPage} />
          </div>
        </>
      )}
    </>
  );
}
