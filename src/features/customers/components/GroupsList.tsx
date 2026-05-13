"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Pencil, Archive, RotateCcw, Users, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { archiveCustomerGroup, unarchiveCustomerGroup, updateCustomerGroup } from "../actions/customer-group.actions";

interface GroupWithCount {
  id: string;
  name: string;
  isArchived: boolean;
  _count: { customers: number };
}

export function GroupsList({ groups }: { groups: GroupWithCount[] }) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleArchive(id: string) {
    const result = await archiveCustomerGroup(id);
    if (result && "error" in result) alert(result.error);
    router.refresh();
  }

  async function handleUnarchive(id: string) {
    const result = await unarchiveCustomerGroup(id);
    if (result && "error" in result) alert(result.error);
    router.refresh();
  }

  function startEdit(group: GroupWithCount) {
    setEditId(group.id);
    setEditName(group.name);
  }

  function cancelEdit() {
    setEditId(null);
    setEditName("");
  }

  async function saveEdit(id: string) {
    if (!editName.trim()) return;
    setSaving(true);
    const result = await updateCustomerGroup(id, { name: editName.trim() });
    setSaving(false);
    if (result && "error" in result) {
      alert(result.error);
      return;
    }
    setEditId(null);
    setEditName("");
    router.refresh();
  }

  if (groups.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-10 text-center">
        <Users className="h-8 w-8 text-muted-foreground mb-2 opacity-40" />
        <p className="text-sm font-medium text-muted-foreground">
          {t("customers.noGroups")}
        </p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          {t("customers.noGroupsHint")}
        </p>
      </div>
    );
  }

  const activeGroups = groups.filter((g) => !g.isArchived);
  const archivedGroups = groups.filter((g) => g.isArchived);

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        {activeGroups.map((group) => (
          <div
            key={group.id}
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-2.5 shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)] transition-all duration-200"
          >
            {editId === group.id ? (
              <div className="flex flex-1 items-center gap-2">
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit(group.id);
                    if (e.key === "Escape") cancelEdit();
                  }}
                  className="flex-1 rounded-md border border-input bg-background px-2.5 py-1.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  autoFocus
                  disabled={saving}
                />
                <button
                  onClick={() => saveEdit(group.id)}
                  disabled={saving}
                  className="p-1.5 text-green-600 hover:text-green-700 rounded-md hover:bg-green-50 transition-colors"
                  title="Enregistrer"
                >
                  <Check className="h-4 w-4" />
                </button>
                <button
                  onClick={cancelEdit}
                  className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
                  title="Annuler"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-primary shrink-0">
                  <Users className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{group.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t("customers.customersCount")}: {group._count.customers}
                  </p>
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                  <button
                    onClick={() => startEdit(group)}
                    className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
                    title={t("common.edit")}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => handleArchive(group.id)}
                    className="p-1.5 text-muted-foreground hover:text-destructive rounded-md hover:bg-destructive/10 transition-colors"
                    title={t("common.archive")}
                  >
                    <Archive className="h-3.5 w-3.5" />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {archivedGroups.length > 0 && (
        <details className="group">
          <summary className="text-xs font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors py-1 select-none">
            {t("customers.archived")} ({archivedGroups.length})
          </summary>
          <div className="space-y-1 mt-1.5 opacity-60">
            {archivedGroups.map((group) => (
              <div
                key={group.id}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-2.5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground shrink-0">
                  <Users className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{group.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t("customers.customersCount")}: {group._count.customers}
                  </p>
                </div>
                <button
                  onClick={() => handleUnarchive(group.id)}
                  className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
                  title="Restaurer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
