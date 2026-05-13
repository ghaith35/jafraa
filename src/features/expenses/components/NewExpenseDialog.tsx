"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { ExpenseForm } from "./ExpenseForm";
import { useAppI18n } from "@/lib/i18n/ui";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
  defaultDate: string;
}

export function NewExpenseDialog({ categories, defaultDate }: Props) {
  const { t } = useAppI18n();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200"
      >
        <Plus className="h-4 w-4" />
        {t("expenses.newExpense")}
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} title={t("expenses.newExpense")}>
        <ExpenseForm categories={categories} defaultDate={defaultDate} onSaved={() => setOpen(false)} />
      </Dialog>
    </>
  );
}
