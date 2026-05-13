"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { deleteExpense } from "../actions/expense.actions";
import { useAppI18n } from "@/lib/i18n/ui";
import { localizedCategoryName } from "@/lib/i18n/expense-categories";

interface ExpenseItem {
  id: string;
  amount: number;
  expenseDate: Date;
  note: string | null;
  categoryName: string;
  categoryNameFr?: string | null;
  categoryNameAr?: string | null;
  categoryNameEn?: string | null;
  categoryId: string;
  createdAt: Date;
}

interface Props {
  expenses: ExpenseItem[];
  canManage: boolean;
}

const categoryColors: Record<string, { border: string; bg: string }> = {
  "seed-expense-cat-electricite": { border: "#d97706", bg: "#fef3c7" },
  "seed-expense-cat-loyer":      { border: "#2563eb", bg: "#dbeafe" },
  "seed-expense-cat-eau":        { border: "#0891b2", bg: "#cffafe" },
  "seed-expense-cat-entretien":  { border: "#059669", bg: "#d1fae5" },
  "seed-expense-cat-transport":  { border: "#7c3aed", bg: "#ede9fe" },
};

export function ExpenseList({ expenses, canManage }: Props) {
  const { t, formatDate, locale } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  if (expenses.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
        {t("expenses.noResults")}
      </div>
    );
  }

  function handleDelete(id: string) {
    if (!confirm(t("common.delete"))) return;
    setDeletingId(id);
    startTransition(async () => {
      await deleteExpense(id);
      setDeletingId(null);
      router.refresh();
    });
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 text-start font-medium text-muted-foreground">
              {t("expenses.date")}
            </th>
            <th className="px-4 py-3 text-start font-medium text-muted-foreground">
              {t("expenses.category")}
            </th>
            <th className="px-4 py-3 text-start font-medium text-muted-foreground">
              {t("expenses.note")}
            </th>
            <th className="px-4 py-3 text-end font-medium text-muted-foreground">
              {t("expenses.amount")}
            </th>
            {canManage && (
              <th className="px-4 py-3 text-end font-medium text-muted-foreground">
                {t("common.actions")}
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {expenses.map((expense) => {
            const catColor = categoryColors[expense.categoryId];
            return (
            <tr key={expense.id} className="hover:bg-muted/30 transition-colors"
              style={catColor ? { borderInlineStart: `3px solid ${catColor.border}` } : undefined}
            >
              <td className="px-4 py-3 text-foreground">
                {formatDate(expense.expenseDate)}
              </td>
              <td className="px-4 py-3 text-foreground">
                {localizedCategoryName({
                  name: expense.categoryName,
                  nameFr: expense.categoryNameFr,
                  nameAr: expense.categoryNameAr,
                  nameEn: expense.categoryNameEn,
                }, locale)}
              </td>
              <td className="px-4 py-3 text-muted-foreground max-w-[200px] truncate">
                {expense.note ?? "—"}
              </td>
              <td className="px-4 py-3 text-end font-mono font-medium text-foreground tabular-nums">
                {expense.amount.toLocaleString()}
              </td>
              {canManage && (
                <td className="px-4 py-3 text-end">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/dashboard/expenses/${expense.id}/edit`}
                      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(expense.id)}
                      disabled={isPending && deletingId === expense.id}
                      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-destructive hover:bg-destructive/10 transition-colors disabled:opacity-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              )}
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
