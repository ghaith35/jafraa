"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Plus } from "lucide-react";
import {
  createExpenseCategory,
  deleteExpenseCategory,
} from "../actions/expense.actions";
import { useAppI18n } from "@/lib/i18n/ui";

interface Category {
  id: string;
  name: string;
  _count: { expenses: number };
}

interface Props {
  categories: Category[];
}

export function ExpenseCategoryManager({ categories }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [newName, setNewName] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleCreate() {
    const trimmed = newName.trim();
    if (!trimmed) return;
    setError(null);
    startTransition(async () => {
      const result = await createExpenseCategory({ name: trimmed });
      if (result && "error" in result && result.error) {
        setError(result.error);
      } else {
        setNewName("");
        router.refresh();
      }
    });
  }

  function handleDelete(id: string, name: string, expenseCount: number) {
    if (expenseCount > 0) {
      setError(t("expenses.deleteWarning"));
      return;
    }
    if (!confirm(t("expenses.deleteConfirm", { name }))) return;
    setError(null);
    startTransition(async () => {
      const result = await deleteExpenseCategory(id);
      if (result && "error" in result && result.error) {
        setError(result.error);
      } else {
        router.refresh();
      }
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-end gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-1.5">
            {t("expenses.newCategory")}
          </label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder={t("expenses.categoryName")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            disabled={isPending}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleCreate(); } }}
          />
        </div>
        <button
          onClick={handleCreate}
          disabled={isPending || !newName.trim()}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          <Plus className="h-4 w-4" />
          {t("expenses.createCategory")}
        </button>
      </div>

      {error && (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      )}

      <div className="overflow-hidden rounded-xl border border-border">
        {categories.length === 0 ? (
          <div className="p-6 text-center text-sm text-muted-foreground">
            {t("expenses.noResults")}
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  {t("expenses.categoryName")}
                </th>
                <th className="px-4 py-3 text-center font-medium text-muted-foreground">
                  {t("common.quantityShort")}
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  {t("common.actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-foreground font-medium">
                    {cat.name}
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground">
                    {cat._count.expenses}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => handleDelete(cat.id, cat.name, cat._count.expenses)}
                      disabled={isPending}
                      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-destructive hover:bg-destructive/10 transition-colors disabled:opacity-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
