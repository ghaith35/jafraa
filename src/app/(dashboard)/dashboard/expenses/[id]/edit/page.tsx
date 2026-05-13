import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { localizedCategoryName } from "@/lib/i18n/expense-categories";
import { ExpenseForm } from "@/features/expenses/components/ExpenseForm";

export const metadata = { title: "Modifier la dépense" };

export default async function EditExpensePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { t, locale } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "expenses:manage")) redirect("/dashboard/expenses");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/expenses");

  const { id } = await params;

  const [expense, categories] = await Promise.all([
    prisma.expense.findFirst({
      where: { id, storeId, companyId: session.companyId },
    }),
    prisma.expenseCategory.findMany({
      where: {
        OR: [
          { isDefault: true },
          { storeId, companyId: session.companyId },
        ],
      },
      orderBy: [{ isDefault: "desc" }, { name: "asc" }],
      select: { id: true, name: true, nameFr: true, nameAr: true, nameEn: true, isDefault: true },
    }).then((cats) => cats.map((c) => ({
      id: c.id,
      name: localizedCategoryName(c, locale),
      isDefault: c.isDefault,
    }))),
  ]);

  if (!expense) notFound();

  return (
    <>
      <PageHeader
        title={t("expenses.editExpense")}
        description=""
      />
      <div className="max-w-lg">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ExpenseForm
            categories={categories}
            expense={{
              id: expense.id,
              categoryId: expense.categoryId,
              amount: Number(expense.amount),
              expenseDate: expense.expenseDate.toISOString().split("T")[0],
              note: expense.note,
            }}
          />
        </div>
      </div>
    </>
  );
}
