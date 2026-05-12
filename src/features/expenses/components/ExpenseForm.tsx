"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createExpenseSchema,
  type CreateExpenseInput,
} from "../schemas/expense.schema";
import { createExpense, updateExpense } from "../actions/expense.actions";
import { useAppI18n } from "@/lib/i18n/ui";

interface Category {
  id: string;
  name: string;
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

export function ExpenseForm({ categories, expense, defaultDate }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
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

  function onSubmit(data: CreateExpenseInput) {
    setServerError(null);
    startTransition(async () => {
      if (isEdit && expense) {
        const result = await updateExpense(expense.id, data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/expenses");
        }
      } else {
        const result = await createExpense(data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/expenses");
        }
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-4">
        <Field label={t("expenses.category")} required error={errors.categoryId?.message}>
          <select
            {...form.register("categoryId")}
            className={inputCls}
            disabled={isPending}
          >
            <option value="">{t("common.select")}</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>

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

        <Field label={t("expenses.date")} required error={errors.expenseDate?.message}>
          <input
            {...form.register("expenseDate")}
            type="date"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

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

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isPending}
          className="h-11 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {isPending
            ? t("common.saving")
            : isEdit
              ? t("expenses.editExpense")
              : t("expenses.newExpense")}
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard/expenses")}
          disabled={isPending}
          className="h-11 rounded-md border border-border px-4 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 sm:border-0 sm:px-0"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
