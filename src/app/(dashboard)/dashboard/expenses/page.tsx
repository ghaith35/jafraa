import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus, Tags } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { ExpenseList } from "@/features/expenses/components/ExpenseList";
import { Pagination } from "@/components/shared/Pagination";
import { listExpenses } from "@/features/expenses/actions/expense.actions";

export const metadata = { title: "Dépenses" };

export default async function ExpensesPage({
  searchParams,
}: {
  searchParams: Promise<{ period?: string; page?: string }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "expenses:view")) redirect("/dashboard");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const sp = await searchParams;
  const period = sp.period ?? "forever";
  const page = Number(sp.page) || 1;
  const perPage = 50;
  const canManage = hasPermission(session.role, "expenses:manage");

  const result = await listExpenses(storeId, period, page, perPage);

  const periods = [
    { value: "daily", label: t("expenses.dailyTotal") },
    { value: "monthly", label: t("expenses.thisMonth") },
    { value: "yearly", label: t("expenses.thisYear") },
    { value: "forever", label: t("expenses.forever") },
  ] as const;

  const total = result.data.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="space-y-5">
      <PageHeader
        title={t("expenses.title")}
        description={t("expenses.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            {canManage && (
              <>
                <Link
                  href="/dashboard/expenses/categories"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
                >
                  <Tags className="h-4 w-4" />
                  {t("expenses.manageCategories")}
                </Link>
                <Link
                  href="/dashboard/expenses/new"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"
                >
                  <Plus className="h-4 w-4" />
                  {t("expenses.newExpense")}
                </Link>
              </>
            )}
          </div>
        }
      />

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          Période:
        </span>
        <div className="flex flex-wrap gap-1">
          {periods.map((p) => (
            <Link
              key={p.value}
              href={`/dashboard/expenses?period=${p.value}`}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                period === p.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <div className="text-sm text-muted-foreground">{t("expenses.total")}</div>
        <div className="text-2xl font-bold text-foreground">
          {total.toLocaleString()} {t("common.currency")}
        </div>
      </div>

      <ExpenseList expenses={result.data} canManage={canManage} />
      <Pagination page={result.page} totalPages={result.totalPages} total={result.total} perPage={result.perPage} />
    </div>
  );
}
