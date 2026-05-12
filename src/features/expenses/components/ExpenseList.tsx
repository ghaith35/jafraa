"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { deleteExpense } from "../actions/expense.actions";
import { useAppI18n } from "@/lib/i18n/ui";

interface ExpenseItem {
  id: string;
  amount: number;
  expenseDate: Date;
  note: string | null;
  categoryName: string;
  categoryId: string;
  createdAt: Date;
}

interface Props {
  expenses: ExpenseItem[];
  canManage: boolean;
}

export function ExpenseList({ expenses, canManage }: Props) {
  const { t, formatDate } = useAppI18n();
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
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">
              {t("expenses.date")}
            </th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">
              {t("expenses.category")}
            </th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">
              {t("expenses.note")}
            </th>
            <th className="px-4 py-3 text-right font-medium text-muted-foreground">
              {t("expenses.amount")}
            </th>
            {canManage && (
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                {t("common.actions")}
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-muted/30 transition-colors">
              <td className="px-4 py-3 text-foreground">
                {formatDate(expense.expenseDate)}
              </td>
              <td className="px-4 py-3 text-foreground">
                {expense.categoryName}
              </td>
              <td className="px-4 py-3 text-muted-foreground max-w-[200px] truncate">
                {expense.note ?? "—"}
              </td>
              <td className="px-4 py-3 text-right font-mono font-medium text-foreground">
                {expense.amount.toLocaleString()}
              </td>
              {canManage && (
                <td className="px-4 py-3 text-right">
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
