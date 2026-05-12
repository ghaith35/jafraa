import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { ExpenseForm } from "@/features/expenses/components/ExpenseForm";

export const metadata = { title: "Nouvelle dépense" };

export default async function NewExpensePage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "expenses:manage")) redirect("/dashboard/expenses");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/expenses");

  const categories = await prisma.expenseCategory.findMany({
    where: {
      OR: [
        { storeId, companyId: session.companyId },
        { storeId: null, companyId: null },
      ],
    },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <PageHeader
        title={t("expenses.newExpense")}
        description={t("expenses.newExpenseDescription")}
      />
      <div className="max-w-lg">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ExpenseForm categories={categories} defaultDate={today} />
        </div>
      </div>
    </>
  );
}
