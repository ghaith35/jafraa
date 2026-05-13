"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";
import {
  AlertTriangle,
  Archive,
  ChevronRight,
  FolderPlus,
  Package,
  Pencil,
  Plus,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import type { AccessoryCategoryNode } from "../actions/accessory-category.actions";
import {
  listAccessoryItems,
  archiveAccessoryItem,
  type AccessoryItemRecord,
} from "../actions/accessory-item.actions";

function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-DZ", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value) + " DZD";
}

interface Props {
  tree: AccessoryCategoryNode[];
  canManage: boolean;
}

export function AccessoriesBrowser({ tree, canManage }: Props) {
  const { t, dir } = useAppI18n();
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [items, setItems] = useState<AccessoryItemRecord[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const [itemsError, setItemsError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");

  // Add item form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [addName, setAddName] = useState("");
  const [addBrand, setAddBrand] = useState("");
  const [addRef, setAddRef] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const [addStock, setAddStock] = useState("0");
  const [addThreshold, setAddThreshold] = useState("");

  // Edit form state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editBrand, setEditBrand] = useState("");
  const [editRef, setEditRef] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState("");
  const [editThreshold, setEditThreshold] = useState("");

  // Load items when category changes
  useEffect(() => {
    if (!selectedId) {
      setItems([]);
      return;
    }
    setLoadingItems(true);
    setItemsError(null);
    listAccessoryItems(selectedId).then((result) => {
      setItems(result);
      setLoadingItems(false);
    }).catch(() => {
      setItemsError("Failed to load items");
      setLoadingItems(false);
    });
  }, [selectedId]);

  const filteredItems = useMemo(() => {
    if (!search.trim()) return items;
    const q = search.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q) ||
        (item.brand ?? "").toLowerCase().includes(q) ||
        (item.reference ?? "").toLowerCase().includes(q)
    );
  }, [items, search]);

  // Find selected category + breadcrumb
  const selectedCategory = useMemo(() => {
    function find(nodes: AccessoryCategoryNode[], id: string): AccessoryCategoryNode | null {
      for (const n of nodes) {
        if (n.id === id) return n;
        const found = find(n.children, id);
        if (found) return found;
      }
      return null;
    }
    return selectedId ? find(tree, selectedId) : null;
  }, [tree, selectedId]);

  const breadcrumb = useMemo(() => {
    function build(
      nodes: AccessoryCategoryNode[],
      id: string,
      path: { id: string; name: string }[]
    ): boolean {
      for (const n of nodes) {
        if (n.id === id) {
          path.push({ id: n.id, name: n.name });
          return true;
        }
        if (build(n.children, id, path)) {
          path.unshift({ id: n.id, name: n.name });
          return true;
        }
      }
      return false;
    }
    const path: { id: string; name: string }[] = [];
    if (selectedId) build(tree, selectedId, path);
    return path;
  }, [tree, selectedId]);

  const isLeaf = selectedCategory?.children.length === 0;

  function handleAddItem() {
    if (!selectedId || !addName.trim() || !addPrice.trim()) return;
    startTransition(async () => {
      const { createAccessoryItem } = await import("../actions/accessory-item.actions");
      const result = await createAccessoryItem({
        categoryId: selectedId,
        name: addName.trim(),
        brand: addBrand.trim() || undefined,
        reference: addRef.trim() || undefined,
        sellingPrice: Number(addPrice),
        stockQty: Number(addStock) || 0,
        lowStockThreshold: addThreshold.trim() ? Number(addThreshold) : undefined,
      });
      if ("error" in result) {
        setItemsError(result.error ?? null);
        return;
      }
      setShowAddForm(false);
      setAddName("");
      setAddBrand("");
      setAddRef("");
      setAddPrice("");
      setAddStock("0");
      setAddThreshold("");
      // Reload items
      const fresh = await listAccessoryItems(selectedId);
      setItems(fresh);
    });
  }

  function handleUpdateItem() {
    if (!editingId || !editName.trim() || !editPrice.trim()) return;
    startTransition(async () => {
      const { updateAccessoryItem } = await import("../actions/accessory-item.actions");
      const result = await updateAccessoryItem({
        id: editingId,
        name: editName.trim(),
        brand: editBrand.trim() || undefined,
        reference: editRef.trim() || undefined,
        sellingPrice: Number(editPrice),
        stockQty: Number(editStock) || 0,
        lowStockThreshold: editThreshold.trim() ? Number(editThreshold) : undefined,
      });
      if ("error" in result) {
        setItemsError(result.error ?? null);
        return;
      }
      setEditingId(null);
      const fresh = await listAccessoryItems(selectedId!);
      setItems(fresh);
    });
  }

  function handleArchive(id: string) {
    if (!confirm("Archive this item?")) return;
    startTransition(async () => {
      await archiveAccessoryItem(id);
      const fresh = await listAccessoryItems(selectedId!);
      setItems(fresh);
    });
  }

  function startEdit(item: AccessoryItemRecord) {
    setEditingId(item.id);
    setEditName(item.name);
    setEditBrand(item.brand ?? "");
    setEditRef(item.reference ?? "");
    setEditPrice(String(item.sellingPrice));
    setEditStock(String(item.stockQty));
    setEditThreshold(item.lowStockThreshold != null ? String(item.lowStockThreshold) : "");
    setShowAddForm(false);
    setItemsError(null);
  }

  return (
    <div dir={dir} className="flex gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Left panel: category tree */}
      <div className="w-64 shrink-0 border-e border-border bg-muted/30">
        <div className="flex items-center justify-between border-b border-border p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Categories
          </p>
          {canManage && (
            <button
              type="button"
              onClick={() => router.push("/dashboard/inventory/accessories/categories")}
              className="rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
              title="Manage categories"
            >
              <FolderPlus className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="overflow-y-auto p-2">
          <TreeNav
            nodes={tree}
            selectedId={selectedId}
            onSelect={setSelectedId}
            depth={0}
          />
        </div>
      </div>

      {/* Right panel */}
      <div className="min-w-0 flex-1">
        {!selectedCategory ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <Package className="mb-3 h-10 w-10 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">{t("common.select")}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Select a category from the tree to browse items
            </p>
          </div>
        ) : (
          <div className="flex h-full flex-col">
            {/* Breadcrumb header */}
            <div className="flex items-center justify-between gap-4 border-b border-border p-4">
              <div className="flex min-w-0 items-center gap-2">
                {breadcrumb.map((crumb, i) => (
                  <div key={crumb.id} className="flex items-center gap-2">
                    {i > 0 && <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />}
                    <button
                      type="button"
                      onClick={() => setSelectedId(crumb.id)}
                      className={cn(
                        "truncate rounded-full px-2.5 py-1 text-sm transition-colors",
                        i === breadcrumb.length - 1
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      )}
                    >
                      {crumb.name}
                    </button>
                  </div>
                ))}
              </div>

              {canManage && isLeaf && (
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(true);
                    setEditingId(null);
                    setItemsError(null);
                  }}
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"
                >
                  <Plus className="h-4 w-4" />
                  + Add
                </button>
              )}
            </div>

            {/* Show child categories if not a leaf */}
            {!isLeaf && selectedCategory.children.length > 0 && (
              <div className="border-b border-border p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Subcategories
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.children.map((child) => (
                    <button
                      key={child.id}
                      type="button"
                      onClick={() => setSelectedId(child.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-accent"
                    >
                      {child.name}
                      <span className="rounded-full bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">
                        {child.itemCount}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search */}
            {isLeaf && items.length > 0 && (
              <div className="border-b border-border p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t("common.search")}
                    className="w-full rounded-lg border border-input bg-background py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* Add form */}
              {showAddForm && (
                <div className="mb-6 rounded-xl border border-border bg-card p-4">
                  <h3 className="mb-3 text-sm font-semibold text-foreground">New item in &quot;{selectedCategory.name}&quot;</h3>
                  <div className="mb-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Name *</label>
                      <input value={addName} onChange={(e) => setAddName(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="Item name" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Brand</label>
                      <input value={addBrand} onChange={(e) => setAddBrand(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="UGREEN, Dell..." />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Reference</label>
                      <input value={addRef} onChange={(e) => setAddRef(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="Model/part number" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Price (DZD) *</label>
                      <input type="number" value={addPrice} onChange={(e) => setAddPrice(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="0" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Stock</label>
                      <input type="number" value={addStock} onChange={(e) => setAddStock(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Low stock threshold</label>
                      <input type="number" value={addThreshold} onChange={(e) => setAddThreshold(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" placeholder="Optional" />
                    </div>
                  </div>
                  {itemsError && <p className="mb-3 text-sm text-destructive">{itemsError}</p>}
                  <div className="flex items-center gap-2">
                    <button onClick={handleAddItem} disabled={isPending || !addName.trim() || !addPrice.trim()} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
                      {t("common.create")}
                    </button>
                    <button onClick={() => setShowAddForm(false)} className="rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:bg-accent">
                      {t("common.cancel")}
                    </button>
                  </div>
                </div>
              )}

              {/* Edit form */}
              {editingId && (
                <div className="mb-6 rounded-xl border border-border bg-card p-4">
                  <h3 className="mb-3 text-sm font-semibold text-foreground">Edit item</h3>
                  <div className="mb-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Name *</label>
                      <input value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Brand</label>
                      <input value={editBrand} onChange={(e) => setEditBrand(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Reference</label>
                      <input value={editRef} onChange={(e) => setEditRef(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Price (DZD)</label>
                      <input type="number" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Stock</label>
                      <input type="number" value={editStock} onChange={(e) => setEditStock(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-muted-foreground">Low stock threshold</label>
                      <input type="number" value={editThreshold} onChange={(e) => setEditThreshold(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={handleUpdateItem} disabled={isPending || !editName.trim() || !editPrice.trim()} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
                      {t("common.save")}
                    </button>
                    <button onClick={() => setEditingId(null)} className="rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:bg-accent">
                      {t("common.cancel")}
                    </button>
                  </div>
                </div>
              )}

              {/* Items grid or empty state */}
              {loadingItems ? (
                <div className="flex items-center justify-center p-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
              ) : isLeaf && filteredItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border p-12 text-center">
                  <Package className="mb-3 h-8 w-8 text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground">
                    {search ? "No items match your search" : "No items yet"}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {search ? "Try a different search" : canManage ? "Add the first item to this category" : ""}
                  </p>
                </div>
              ) : isLeaf ? (
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.sku}</p>
                          {(item.brand || item.reference) && (
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {[item.brand, item.reference].filter(Boolean).join(" · ")}
                            </p>
                          )}
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                          <Package className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-2">
                        <p className="text-base font-bold text-foreground">{formatPrice(item.sellingPrice)}</p>
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "rounded-full px-2.5 py-0.5 text-xs font-bold",
                              item.stockQty <= 0
                                ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                : item.lowStockThreshold != null && item.stockQty <= item.lowStockThreshold
                                  ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                  : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                            )}
                          >
                            {item.stockQty}
                          </span>
                          {item.lowStockThreshold != null && item.stockQty <= item.lowStockThreshold && (
                            <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                          )}
                        </div>
                      </div>

                      {canManage && (
                        <div className="mt-3 flex items-center justify-end gap-1 border-t border-border pt-2 opacity-0 transition-opacity group-hover:opacity-100">
                          <button
                            type="button"
                            onClick={() => startEdit(item)}
                            className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                            title="Edit"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleArchive(item.id)}
                            className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                            title="Archive"
                          >
                            <Archive className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TreeNav({
  nodes,
  selectedId,
  onSelect,
  depth,
}: {
  nodes: AccessoryCategoryNode[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  depth: number;
}) {
  return (
    <>
      {nodes.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          selectedId={selectedId}
          onSelect={onSelect}
          depth={depth}
        />
      ))}
    </>
  );
}

function TreeNode({
  node,
  selectedId,
  onSelect,
  depth,
}: {
  node: AccessoryCategoryNode;
  selectedId: string | null;
  onSelect: (id: string) => void;
  depth: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children.length > 0;

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onSelect(node.id);
          if (!hasChildren && node.itemCount > 0) {
            // Select leaf category
          }
        }}
        className={cn(
          "flex w-full items-center gap-1.5 rounded-lg px-2 py-1.5 text-start text-sm transition-colors",
          selectedId === node.id
            ? "bg-primary/10 font-semibold text-primary"
            : "text-muted-foreground hover:bg-accent hover:text-foreground"
        )}
        style={{ paddingInlineStart: `${8 + depth * 16}px` }}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="shrink-0 rounded p-0.5 hover:bg-muted"
          >
            {expanded ? (
              <ChevronRight className="h-3 w-3 -rotate-90 text-muted-foreground transition-transform" />
            ) : (
              <ChevronRight className="h-3 w-3 text-muted-foreground transition-transform rtl:rotate-180" />
            )}
          </button>
        ) : (
          <span className="inline-block w-4 shrink-0" />
        )}
        <span className="min-w-0 flex-1 truncate">{node.name}</span>
        <span className="shrink-0 rounded-full bg-muted px-1.5 py-0.5 text-[11px] tabular-nums text-muted-foreground">
          {node.itemCount}
        </span>
      </button>
      {expanded && hasChildren && (
        <TreeNav
          nodes={node.children}
          selectedId={selectedId}
          onSelect={onSelect}
          depth={depth + 1}
        />
      )}
    </div>
  );
}
