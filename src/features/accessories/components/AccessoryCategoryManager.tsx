"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import {
  ChevronDown,
  ChevronRight,
  FolderPlus,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import {
  createAccessoryCategory,
  updateAccessoryCategory,
  deleteAccessoryCategory,
  type AccessoryCategoryNode,
} from "../actions/accessory-category.actions";

interface Props {
  tree: AccessoryCategoryNode[];
  canManage: boolean;
}

function CategoryTreeItem({
  node,
  depth,
  onEdit,
  onDelete,
  onAddChild,
  canManage,
}: {
  node: AccessoryCategoryNode;
  depth: number;
  onEdit: (id: string, name: string, sortOrder: number) => void;
  onDelete: (id: string) => void;
  onAddChild: (parentId: string) => void;
  canManage: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children.length > 0;

  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm",
          node.isActive ? "text-foreground" : "text-muted-foreground"
        )}
        style={{ paddingInlineStart: `${12 + depth * 20}px` }}
      >
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 rounded p-0.5 hover:bg-muted"
        >
          {hasChildren ? (
            expanded ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground rtl:rotate-180" />
            )
          ) : (
            <span className="inline-block w-4" />
          )}
        </button>

        <span className="min-w-0 flex-1 truncate">{node.name}</span>

        <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          {node.itemCount}
        </span>

        {canManage && (
          <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              type="button"
              onClick={() => onAddChild(node.id)}
              className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              title="Add child category"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onEdit(node.id, node.name, node.sortOrder)}
              className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              title="Edit"
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>
            {!hasChildren && node.itemCount === 0 && (
              <button
                type="button"
                onClick={() => onDelete(node.id)}
                className="rounded-md p-1 text-muted-foreground hover:bg-red-100 hover:text-red-600"
                title="Delete"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {expanded && hasChildren && (
        <div>
          {node.children.map((child) => (
            <CategoryTreeItem
              key={child.id}
              node={child}
              depth={depth + 1}
              onEdit={onEdit}
              onDelete={onDelete}
              onAddChild={onAddChild}
              canManage={canManage}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function AccessoryCategoryManager({ tree, canManage }: Props) {
  const { t, dir } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Inline form state
  const [showForm, setShowForm] = useState(false);
  const [formParentId, setFormParentId] = useState<string | null>(null);
  const [formName, setFormName] = useState("");
  const [formSortOrder, setFormSortOrder] = useState(0);

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editSortOrder, setEditSortOrder] = useState(0);

  function openAdd(parentId: string | null = null) {
    setFormParentId(parentId);
    setFormName("");
    setFormSortOrder(0);
    setEditingId(null);
    setShowForm(true);
    setError(null);
  }

  function openEdit(id: string, name: string, sortOrder: number) {
    setEditingId(id);
    setEditName(name);
    setEditSortOrder(sortOrder);
    setShowForm(false);
    setError(null);
  }

  function handleCreate() {
    if (!formName.trim()) return;
    setError(null);
    startTransition(async () => {
      const result = await createAccessoryCategory({
        parentId: formParentId,
        name: formName.trim(),
        sortOrder: formSortOrder,
      });
      if ("error" in result) {
        setError(result.error ?? null);
        return;
      }
      setShowForm(false);
      setFormName("");
      router.refresh();
    });
  }

  function handleUpdate() {
    if (!editName.trim() || !editingId) return;
    setError(null);
    startTransition(async () => {
      const result = await updateAccessoryCategory({
        id: editingId,
        name: editName.trim(),
        sortOrder: editSortOrder,
      });
      if ("error" in result) {
        setError(result.error ?? null);
        return;
      }
      setEditingId(null);
      router.refresh();
    });
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this category?")) return;
    setError(null);
    startTransition(async () => {
      const result = await deleteAccessoryCategory(id);
      if ("error" in result) {
        setError(result.error ?? null);
        return;
      }
      router.refresh();
    });
  }

  return (
    <div dir={dir} className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-foreground">Categories</h2>
        {canManage && (
          <button
            type="button"
            onClick={() => openAdd(null)}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"
          >
            <FolderPlus className="h-4 w-4" />
            {t("inventory.newCategory")}
          </button>
        )}
      </div>

      {error && (
        <div className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {showForm && (
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            {formParentId ? "Add subcategory" : "New root category"}
          </h3>
          <div className="flex items-end gap-3">
            <div className="flex-1 space-y-1">
              <label className="text-xs font-medium text-muted-foreground">{t("common.name")}</label>
              <input
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                placeholder="Category name"
                autoFocus
              />
            </div>
            <div className="w-24 space-y-1">
              <label className="text-xs font-medium text-muted-foreground">{t("inventory.categorySortOrder")}</label>
              <input
                type="number"
                value={formSortOrder}
                onChange={(e) => setFormSortOrder(Number(e.target.value))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <button
              type="button"
              onClick={handleCreate}
              disabled={isPending || !formName.trim()}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {t("common.create")}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:bg-accent"
            >
              {t("common.cancel")}
            </button>
          </div>
        </div>
      )}

      {editingId && (
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold text-foreground">{t("common.edit")}</h3>
          <div className="flex items-end gap-3">
            <div className="flex-1 space-y-1">
              <label className="text-xs font-medium text-muted-foreground">{t("common.name")}</label>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                autoFocus
              />
            </div>
            <div className="w-24 space-y-1">
              <label className="text-xs font-medium text-muted-foreground">{t("inventory.categorySortOrder")}</label>
              <input
                type="number"
                value={editSortOrder}
                onChange={(e) => setEditSortOrder(Number(e.target.value))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <button
              type="button"
              onClick={handleUpdate}
              disabled={isPending || !editName.trim()}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {t("common.save")}
            </button>
            <button
              type="button"
              onClick={() => setEditingId(null)}
              className="rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:bg-accent"
            >
              {t("common.cancel")}
            </button>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-card">
        {tree.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <FolderPlus className="mb-2 h-8 w-8 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">{t("inventory.noCategoriesTitle")}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("inventory.noCategoriesDescription")}</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {tree.map((node) => (
              <div key={node.id} className="group">
                <CategoryTreeItem
                  node={node}
                  depth={0}
                  onEdit={openEdit}
                  onDelete={handleDelete}
                  onAddChild={(parentId) => openAdd(parentId)}
                  canManage={canManage}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
