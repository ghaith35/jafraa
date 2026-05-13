"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Settings, Pencil, Archive, RotateCcw, Plus, Check, X, Loader2 } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { createCustomerGroup, updateCustomerGroup, archiveCustomerGroup, unarchiveCustomerGroup } from "../actions/customer-group.actions";

interface Group {
  id: string;
  name: string;
  isArchived: boolean;
}

interface Props {
  groups: { id: string; name: string }[];
  onUpdated: (groups: { id: string; name: string }[]) => void;
}

export function ManageGroupsDialog({ groups: initialGroups, onUpdated }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState(initialGroups);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [newName, setNewName] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setGroups(initialGroups);
  }, [initialGroups]);

  function sync() {
    onUpdated(groups);
    router.refresh();
  }

  async function handleCreate() {
    if (!newName.trim()) return;
    setSaving(true);
    const result = await createCustomerGroup({ name: newName.trim() });
    setSaving(false);
    if (result && "error" in result) { alert(result.error); return; }
    const updated = [...groups, { id: result.id, name: result.name }];
    setGroups(updated);
    setNewName("");
    sync();
  }

  async function handleRename(id: string) {
    if (!editName.trim()) return;
    setSaving(true);
    const result = await updateCustomerGroup(id, { name: editName.trim() });
    setSaving(false);
    if (result && "error" in result) { alert(result.error); return; }
    const updated = groups.map((g) => g.id === id ? { ...g, name: editName.trim() } : g);
    setGroups(updated);
    setEditId(null);
    sync();
  }

  async function handleArchive(id: string) {
    await archiveCustomerGroup(id);
    setGroups((prev) => prev.filter((g) => g.id !== id));
    sync();
  }

  async function handleUnarchive(id: string) {
    await unarchiveCustomerGroup(id);
    const group = initialGroups.find((g) => g.id === id) || { id, name: "" };
    const result = await updateCustomerGroup(id, { name: group.name });
    if (result && "success" in result) {
      setGroups((prev) => [...prev, { id, name: group.name }]);
      sync();
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        title="Gérer les groupes"
      >
        <Settings className="h-4 w-4" />
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} title={t("customers.groups")} className="max-w-md">
        <div className="space-y-3">
          {/* New group inline */}
          <div className="flex gap-2">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleCreate(); }}
              placeholder={t("customers.groupName")}
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60"
              disabled={saving}
            />
            <button
              onClick={handleCreate}
              disabled={saving || !newName.trim()}
              className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-50 transition-all"
            >
              {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
              {t("common.create")}
            </button>
          </div>

          {/* Groups list */}
          <div className="space-y-1 max-h-64 overflow-y-auto">
            {groups.length === 0 && (
              <p className="text-sm text-muted-foreground py-4 text-center">{t("customers.noGroups")}</p>
            )}
            {groups.map((g) => (
              <div
                key={g.id}
                className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2"
              >
                {editId === g.id ? (
                  <div className="flex flex-1 items-center gap-1.5">
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleRename(g.id);
                        if (e.key === "Escape") setEditId(null);
                      }}
                      className="flex-1 rounded border border-input bg-background px-2 py-1 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      autoFocus
                      disabled={saving}
                    />
                    <button onClick={() => handleRename(g.id)} disabled={saving} className="p-1 text-green-600 hover:text-green-700">
                      <Check className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => setEditId(null)} className="p-1 text-muted-foreground hover:text-foreground">
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="flex-1 text-sm font-medium truncate">{g.name}</span>
                    <button
                      onClick={() => { setEditId(g.id); setEditName(g.name); }}
                      className="p-1 text-muted-foreground hover:text-foreground rounded transition-colors"
                      title={t("common.edit")}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => handleArchive(g.id)}
                      className="p-1 text-muted-foreground hover:text-destructive rounded transition-colors"
                      title={t("common.archive")}
                    >
                      <Archive className="h-3.5 w-3.5" />
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Dialog>
    </>
  );
}
