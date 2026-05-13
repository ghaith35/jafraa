"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Settings, Plus, Trash2, Loader2, X } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { useAppI18n } from "@/lib/i18n/ui";
import { createExpenseCategory, deleteExpenseCategory } from "../actions/expense.actions";

interface Category {
  id: string;
  name: string;
  isDefault?: boolean;
}

interface Props {
  categories: Category[];
  onUpdated: (categories: Category[]) => void;
}

export function ManageExpenseCategoriesDialog({ categories: initialCategories, onUpdated }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(initialCategories);
  const [newName, setNewName] = useState("");
  const [saving, setSaving] = useState(false);

  function sync() {
    onUpdated(categories);
    router.refresh();
  }

  async function handleCreate() {
    if (!newName.trim()) return;
    setSaving(true);
    const result = await createExpenseCategory({ name: newName.trim() });
    setSaving(false);
    if (result && "error" in result) { alert(result.error); return; }
    const updated = [...categories, { id: result.id, name: newName.trim() }];
    setCategories(updated);
    setNewName("");
    sync();
  }

  async function handleDelete(id: string) {
    const result = await deleteExpenseCategory(id);
    if (result && "error" in result) { alert(result.error); return; }
    setCategories((prev) => prev.filter((c) => c.id !== id));
    sync();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        title={t("expenses.manageCategories")}
      >
        <Settings className="h-4 w-4" />
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} title={t("expenses.categories")} className="max-w-md">
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleCreate(); }}
              placeholder={t("expenses.categoryName")}
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
              disabled={saving}
            />
            <button
              onClick={handleCreate}
              disabled={saving || !newName.trim()}
              className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-50"
            >
              {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
              {t("expenses.createCategory")}
            </button>
          </div>

          <div className="space-y-1 max-h-64 overflow-y-auto">
            {categories.length === 0 && (
              <p className="text-sm text-muted-foreground py-4 text-center">{t("expenses.noResults")}</p>
            )}
            {categories.map((c) => (
              <div key={c.id} className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2">
                <span className="flex-1 text-sm font-medium truncate">{c.name}</span>
                {c.isDefault ? (
                  <span className="text-[11px] font-medium text-muted-foreground bg-muted rounded-full px-2 py-0.5">Défaut</span>
                ) : (
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="p-1 text-muted-foreground hover:text-destructive rounded transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Dialog>
    </>
  );
}
