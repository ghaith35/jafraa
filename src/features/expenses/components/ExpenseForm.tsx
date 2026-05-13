"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Loader2 } from "lucide-react";
import {
  createExpenseSchema,
  type CreateExpenseInput,
} from "../schemas/expense.schema";
import { createExpense, updateExpense, createExpenseCategory } from "../actions/expense.actions";
import { useAppI18n } from "@/lib/i18n/ui";
import { ManageExpenseCategoriesDialog } from "./ManageExpenseCategoriesDialog";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  isDefault?: boolean;
}

interface ExpenseData {
  id: string;
  categoryId: string;
  amount: number;
  expenseDate: string;
  note: string | null;
}

interface Props {
  categories: Category[];
  expense?: ExpenseData;
  defaultDate?: string;
  onSaved?: () => void;
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50";

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label}
        {required && <span className="ms-0.5 text-destructive">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function ExpenseForm({ categories: initialCategories, expense, defaultDate, onSaved }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [categories, setCategories] = useState(initialCategories);
  const [showNewCat, setShowNewCat] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [creatingCat, setCreatingCat] = useState(false);
  const isEdit = !!expense;

  const amountDefault =
    expense?.amount != null
      ? Number(expense.amount)
      : 0;

  const today = new Date().toISOString().split("T")[0];

  const form = useForm<CreateExpenseInput>({
    resolver: zodResolver(createExpenseSchema),
    defaultValues: {
      categoryId: expense?.categoryId ?? "",
      amount: amountDefault || 0,
      expenseDate: expense?.expenseDate ?? defaultDate ?? today,
      note: expense?.note ?? "",
    },
  });

  const errors = form.formState.errors;

  async function handleCreateCategory() {
    if (!newCatName.trim()) return;
    setCreatingCat(true);
    const result = await createExpenseCategory({ name: newCatName.trim() });
    setCreatingCat(false);
    if (result && "error" in result) { alert(result.error); return; }
    const updated = [...categories, { id: result.id, name: newCatName.trim() }];
    setCategories(updated);
    form.setValue("categoryId", result.id);
    setNewCatName("");
    setShowNewCat(false);
  }

  function onSubmit(data: CreateExpenseInput) {
    setServerError(null);
    startTransition(async () => {
      if (isEdit && expense) {
        const result = await updateExpense(expense.id, data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          onSaved ? onSaved() : router.push("/dashboard/expenses");
        }
      } else {
        const result = await createExpense(data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          onSaved ? onSaved() : router.push("/dashboard/expenses");
        }
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-4">
        {/* Category */}
        <Field label={t("expenses.category")} required error={errors.categoryId?.message}>
          <div className="flex gap-2">
            <select
              {...form.register("categoryId")}
              className={cn(inputCls, "flex-1")}
              disabled={isPending}
            >
              <option value="">{t("common.select")}</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setShowNewCat(true)}
              disabled={isPending}
              className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
              title={t("expenses.newCategory")}
            >
              <Plus className="h-4 w-4" />
            </button>
            <ManageExpenseCategoriesDialog
              categories={categories}
              onUpdated={(updated) => setCategories(updated)}
            />
          </div>
          {showNewCat && (
            <div className="mt-2 flex gap-2 items-center rounded-md border border-input bg-background p-2">
              <input
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCreateCategory();
                  if (e.key === "Escape") { setShowNewCat(false); setNewCatName(""); }
                }}
                placeholder={t("expenses.categoryName")}
                className="flex-1 bg-transparent px-2 py-1 text-sm outline-none placeholder:text-muted-foreground/60"
                autoFocus
                disabled={creatingCat}
              />
              <button
                type="button"
                onClick={handleCreateCategory}
                disabled={creatingCat || !newCatName.trim()}
                className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-50"
              >
                {creatingCat && <Loader2 className="h-3 w-3 animate-spin" />}
                {t("common.create")}
              </button>
              <button
                type="button"
                onClick={() => { setShowNewCat(false); setNewCatName(""); }}
                className="text-xs text-muted-foreground hover:text-foreground px-1.5 py-1"
              >
                {t("common.cancel")}
              </button>
            </div>
          )}
        </Field>

        {/* Amount */}
        <Field label={t("expenses.amount")} required error={errors.amount?.message}>
          <input
            {...form.register("amount", { valueAsNumber: true })}
            type="number"
            min={1}
            step={1}
            placeholder="0"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Date */}
        <Field label={t("expenses.date")} required error={errors.expenseDate?.message}>
          <input
            {...form.register("expenseDate")}
            type="date"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Note */}
        <Field label={t("expenses.note")} error={errors.note?.message}>
          <textarea
            {...form.register("note")}
            rows={2}
            placeholder={t("common.notes")}
            className={`${inputCls} resize-y`}
            disabled={isPending}
          />
        </Field>
      </div>

      {serverError && (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <div className="flex items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-50 transition-all active:scale-95"
        >
          {isPending
            ? t("common.saving")
            : isEdit
              ? t("expenses.editExpense")
              : t("expenses.newExpense")}
        </button>
        <button
          type="button"
          onClick={() => onSaved ? onSaved() : router.push("/dashboard/expenses")}
          disabled={isPending}
          className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
