import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { ExpenseCategoryManager } from "@/features/expenses/components/ExpenseCategoryManager";
import { listExpenseCategories } from "@/features/expenses/actions/expense.actions";

export const metadata = { title: "Catégories de dépenses" };

export default async function ExpenseCategoriesPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "expenses:manage")) redirect("/dashboard/expenses");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/expenses");

  const categories = await listExpenseCategories(storeId);

  return (
    <div className="space-y-5">
      <PageHeader
        title={t("expenses.categories")}
        description=""
      />
      <div className="max-w-xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ExpenseCategoryManager categories={categories} />
        </div>
      </div>
    </div>
  );
}
