import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { localizedCategoryName } from "@/lib/i18n/expense-categories";
import { ExpenseList } from "@/features/expenses/components/ExpenseList";
import { NewExpenseDialog } from "@/features/expenses/components/NewExpenseDialog";
import { ExpenseDateFilter } from "@/features/expenses/components/ExpenseDateFilter";
import { Pagination } from "@/components/shared/Pagination";
import { listExpenses } from "@/features/expenses/actions/expense.actions";

export const metadata = { title: "Dépenses" };

export default async function ExpensesPage({
  searchParams,
}: {
  searchParams: Promise<{ month?: string; day?: string; page?: string }>;
}) {
  const { t, locale } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "expenses:view")) redirect("/dashboard");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const sp = await searchParams;
  const selectedMonth = sp.month ?? "";
  const selectedDay = sp.day ?? "";
  const page = Number(sp.page) || 1;
  const perPage = 50;
  const canManage = hasPermission(session.role, "expenses:manage");

  const result = await listExpenses(storeId, selectedMonth, selectedDay, page, perPage);

  // Fetch available months (distinct months with expenses)
  const monthRows = await prisma.$queryRawUnsafe<Array<{ ym: string }>>(
    `SELECT DISTINCT TO_CHAR("expenseDate", 'YYYY-MM') AS ym FROM expenses WHERE "storeId" = $1 AND "companyId" = $2 ORDER BY ym DESC`,
    storeId, session.companyId
  );

  // Fetch available days for selected month
  let dayRows: Array<{ yd: string }> = [];
  if (selectedMonth) {
    dayRows = await prisma.$queryRawUnsafe<Array<{ yd: string }>>(
      `SELECT DISTINCT TO_CHAR("expenseDate", 'YYYY-MM-DD') AS yd FROM expenses WHERE "storeId" = $1 AND "companyId" = $2 AND TO_CHAR("expenseDate", 'YYYY-MM') = $3 ORDER BY yd DESC`,
      storeId, session.companyId, selectedMonth
    );
  }

  const rawCategories = await prisma.expenseCategory.findMany({
    where: {
      OR: [
        { isDefault: true },
        { storeId, companyId: session.companyId },
      ],
    },
    orderBy: [{ isDefault: "desc" }, { name: "asc" }],
    select: { id: true, name: true, nameFr: true, nameAr: true, nameEn: true, isDefault: true },
  });

  const categories = rawCategories.map((c) => ({
    id: c.id,
    name: localizedCategoryName(c, locale),
    nameFr: c.nameFr,
    nameAr: c.nameAr,
    nameEn: c.nameEn,
    isDefault: c.isDefault,
  }));

  const defaultCategoryIds = [
    "seed-expense-cat-electricite",
    "seed-expense-cat-loyer",
    "seed-expense-cat-eau",
    "seed-expense-cat-entretien",
    "seed-expense-cat-transport",
  ];

  const categoryColors = [
    { text: "#d97706", light: "#fbbf24", bg: "#fef3c7" },
    { text: "#2563eb", light: "#60a5fa", bg: "#dbeafe" },
    { text: "#0891b2", light: "#22d3ee", bg: "#cffafe" },
    { text: "#059669", light: "#34d399", bg: "#d1fae5" },
    { text: "#7c3aed", light: "#a78bfa", bg: "#ede9fe" },
  ];

  const today = new Date().toISOString().split("T")[0];

  const total = result.data.reduce((sum, e) => sum + e.amount, 0);

  const categoryTotals: Record<string, { name: string; total: number }> = {};
  for (const expense of result.data) {
    if (!categoryTotals[expense.categoryId]) {
      const cat = categories.find((c) => c.id === expense.categoryId);
      categoryTotals[expense.categoryId] = { name: cat?.name ?? "Inconnue", total: 0 };
    }
    categoryTotals[expense.categoryId].total += expense.amount;
  }

  const months = monthRows.map((r) => ({ value: r.ym, label: r.ym }));
  const days = dayRows.map((r) => ({ value: r.yd, label: r.yd }));

  return (
    <div className="space-y-5">
      <PageHeader
        title={t("expenses.title")}
        description={t("expenses.subtitle")}
        actions={
          canManage && (
            <NewExpenseDialog categories={categories} defaultDate={today} />
          )
        }
      />

      {/* Date filter */}
      <ExpenseDateFilter
        months={months}
        days={days}
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
      />

      {/* KPI: total + 5 categories in one line */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
        <div className="flex flex-wrap items-stretch divide-x divide-[var(--border)]">
          <div className="p-4 min-w-[160px] flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">{t("expenses.total")}</p>
            <p className="mt-1 text-xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums">
              {total.toLocaleString()}
            </p>
            <p className="text-xs text-[var(--text-tertiary)]">{t("common.currency")}</p>
          </div>

          {defaultCategoryIds.map((catId, idx) => {
            const cat = categories.find((c) => c.id === catId);
            if (!cat) return null;
            const catTotal = categoryTotals[catId]?.total ?? 0;
            const pct = total > 0 ? Math.round((catTotal / total) * 100) : 0;
            const color = categoryColors[idx % categoryColors.length];
            return (
              <div key={catId} className="flex-1 p-4 min-w-[100px] flex flex-col justify-center">
                <p className="text-xs font-medium truncate" style={{ color: color.text }}>{cat.name}</p>
                <p className="mt-0.5 text-base font-bold tracking-tight tabular-nums" style={{ color: color.text }}>
                  {catTotal.toLocaleString()}
                </p>
                <div className="mt-1.5 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: color.bg }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, ${color.text}, ${color.light})`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ExpenseList expenses={result.data} canManage={canManage} />
      <Pagination page={result.page} totalPages={result.totalPages} total={result.total} perPage={result.perPage} />
    </div>
  );
}
