"use client";

import { useMemo, useState, useTransition } from "react";
import { Pencil, Power, PowerOff, Tag } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  createInventoryCategory,
  setInventoryCategoryActive,
  updateInventoryCategory,
  type InventoryCategoryRecord,
} from "../actions/category.actions";
import { useAppI18n } from "@/lib/i18n/ui";
import { normalizeCategoryPath, splitCategoryPath } from "../lib/product-catalog";
import { cn } from "@/lib/utils";

type ItemType = "product" | "part";

interface Props {
  categories: InventoryCategoryRecord[];
  deviceCategories: Array<{ id: string; key: string; nameFr: string }>;
  canManage: boolean;
}

interface FormState {
  id?: string;
  itemType: ItemType;
  deviceCategoryId: string;
  parentPath: string;
  name: string;
  sortOrder: number;
  isActive: boolean;
}

function buildFormFromCategory(category: InventoryCategoryRecord): FormState {
  const parts = splitCategoryPath(category.name);
  return {
    id: category.id,
    itemType: category.itemType,
    deviceCategoryId: category.deviceCategoryId ?? "",
    parentPath: normalizeCategoryPath(parts.slice(0, -1)),
    name: parts[parts.length - 1] ?? category.name,
    sortOrder: category.sortOrder,
    isActive: category.isActive,
  };
}

function getFullPathPreview(form: FormState): string {
  const parts = [form.parentPath, form.name].filter(Boolean);
  return normalizeCategoryPath(parts);
}

export function InventoryCategoryManager({ categories, deviceCategories, canManage }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [itemTypeFilter, setItemTypeFilter] = useState<ItemType>("product");
  const [showInactive, setShowInactive] = useState(true);
  const [serverError, setServerError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    itemType: "product",
    deviceCategoryId: "",
    parentPath: "",
    name: "",
    sortOrder: 0,
    isActive: true,
  });

  const filtered = useMemo(
    () =>
      categories
        .filter((category) => category.itemType === itemTypeFilter)
        .filter((category) => (showInactive ? true : category.isActive))
        .sort((a, b) => (a.sortOrder - b.sortOrder) || a.name.localeCompare(b.name)),
    [categories, itemTypeFilter, showInactive]
  );

  const availableParents = useMemo(
    () =>
      categories
        .filter((category) => category.itemType === form.itemType)
        .filter((category) =>
          form.deviceCategoryId ? category.deviceCategoryId === form.deviceCategoryId : true
        )
        .filter((category) => !form.id || category.id !== form.id)
        .map((category) => category.name),
    [categories, form.deviceCategoryId, form.id, form.itemType]
  );

  const groupedRoots = useMemo(() => {
    const map = new Map<string, InventoryCategoryRecord[]>();
    for (const category of filtered) {
      const root = splitCategoryPath(category.name)[0] ?? category.name;
      const list = map.get(root) ?? [];
      list.push(category);
      map.set(root, list);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  function resetForm(nextType: ItemType = form.itemType) {
    setForm({
      itemType: nextType,
      deviceCategoryId: "",
      parentPath: "",
      name: "",
      sortOrder: 0,
      isActive: true,
    });
    setServerError(null);
  }

  function submit() {
    setServerError(null);
    startTransition(async () => {
      const payload = {
        id: form.id,
        itemType: form.itemType,
        deviceCategoryId: form.deviceCategoryId || undefined,
        parentPath: form.parentPath || undefined,
        name: form.name,
        sortOrder: form.sortOrder,
        isActive: form.isActive,
      };

      const result = form.id
        ? await updateInventoryCategory(payload as Parameters<typeof updateInventoryCategory>[0])
        : await createInventoryCategory(payload as Parameters<typeof createInventoryCategory>[0]);

      if ("error" in result) {
        setServerError(result.error);
        return;
      }

      resetForm(form.itemType);
      router.refresh();
    });
  }

  function toggleActive(id: string, isActive: boolean) {
    startTransition(async () => {
      const result = await setInventoryCategoryActive({ id, isActive });
      if ("error" in result) {
        setServerError(result.error);
        return;
      }
      router.refresh();
    });
  }

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t("inventory.categoryItemType")}</span>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={form.itemType}
              onChange={(e) => {
                const nextType = e.target.value as ItemType;
                setForm((prev) => ({ ...prev, itemType: nextType, parentPath: "", deviceCategoryId: "" }));
              }}
              disabled={!canManage || isPending}
            >
              <option value="product">{t("inventory.productCategories")}</option>
              <option value="part">{t("inventory.partCategories")}</option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t("inventory.deviceType")}</span>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={form.deviceCategoryId}
              onChange={(e) => setForm((prev) => ({ ...prev, deviceCategoryId: e.target.value }))}
              disabled={!canManage || isPending}
            >
              <option value="">{t("inventory.categoryAllDeviceTypes")}</option>
              {deviceCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nameFr}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t("inventory.categoryParentPath")}</span>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={form.parentPath}
              onChange={(e) => setForm((prev) => ({ ...prev, parentPath: e.target.value }))}
              disabled={!canManage || isPending}
            >
              <option value="">{t("inventory.categoryRoot")}</option>
              {availableParents.map((path) => (
                <option key={path} value={path}>
                  {path}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t("inventory.categoryName")}</span>
            <input
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder={t("inventory.categoryNamePlaceholder")}
              disabled={!canManage || isPending}
            />
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t("inventory.categorySortOrder")}</span>
            <input
              type="number"
              value={form.sortOrder}
              onChange={(e) => setForm((prev) => ({ ...prev, sortOrder: Number(e.target.value || 0) }))}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              disabled={!canManage || isPending}
            />
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t("inventory.categoryIsActive")}</span>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={form.isActive ? "1" : "0"}
              onChange={(e) => setForm((prev) => ({ ...prev, isActive: e.target.value === "1" }))}
              disabled={!canManage || isPending}
            >
              <option value="1">{t("inventory.active")}</option>
              <option value="0">{t("inventory.inactive")}</option>
            </select>
          </label>

          <div className="rounded-md border border-border bg-muted/30 px-3 py-2">
            <p className="text-xs font-medium text-muted-foreground">{t("inventory.categoryFullPathPreview")}</p>
            <p className="mt-1 text-sm text-foreground">{getFullPathPreview(form) || "—"}</p>
          </div>
        </div>

        <div className="mt-3 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
          {t("inventory.categoryHierarchyHint")}
        </div>

        {serverError && (
          <p className="mt-3 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{serverError}</p>
        )}

        {canManage && (
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={submit}
              disabled={isPending || !getFullPathPreview(form)}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {form.id ? t("inventory.updateCategory") : t("inventory.createCategory")}
            </button>
            <button
              type="button"
              onClick={() => resetForm(form.itemType)}
              disabled={isPending}
              className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-accent disabled:opacity-50"
            >
              {t("inventory.newCategory")}
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setItemTypeFilter("product")}
          className={cn(
            "rounded-full border px-3 py-1.5 text-sm",
            itemTypeFilter === "product" ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-foreground"
          )}
        >
          {t("inventory.productCategories")}
        </button>
        <button
          type="button"
          onClick={() => setItemTypeFilter("part")}
          className={cn(
            "rounded-full border px-3 py-1.5 text-sm",
            itemTypeFilter === "part" ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-foreground"
          )}
        >
          {t("inventory.partCategories")}
        </button>
        <button
          type="button"
          onClick={() => setShowInactive((prev) => !prev)}
          className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
        >
          {showInactive ? t("inventory.hideInactive") : t("inventory.showInactive")}
        </button>
      </div>

      {groupedRoots.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
          <Tag className="mx-auto h-6 w-6 text-muted-foreground" />
          <p className="mt-3 text-sm font-medium text-foreground">{t("inventory.noCategoriesTitle")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t("inventory.noCategoriesDescription")}</p>
        </div>
      ) : (
        <div className="grid gap-3 xl:grid-cols-2">
          {groupedRoots.map(([root, rootItems]) => (
            <div key={root} className="rounded-2xl border border-border bg-card p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">{root}</h3>
                <span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
                  {t("inventory.browserItemsCount", { count: rootItems.length })}
                </span>
              </div>
              <div className="space-y-2">
                {rootItems.map((category) => {
                  const parts = splitCategoryPath(category.name);
                  const depth = Math.max(0, parts.length - 1);
                  const assignedCount =
                    category.itemType === "product" ? category.productCount : category.partCount;
                  return (
                    <div
                      key={category.id}
                      className="rounded-xl border border-border bg-background px-3 py-2"
                      style={{ marginInlineStart: `${depth * 16}px` }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">{parts[parts.length - 1] ?? category.name}</p>
                          <p className="truncate text-xs text-muted-foreground">{category.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "rounded-full border px-2 py-0.5 text-[11px]",
                              category.isActive
                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                                : "border-border bg-muted text-muted-foreground"
                            )}
                          >
                            {category.isActive ? t("inventory.active") : t("inventory.inactive")}
                          </span>
                          <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                            {t("inventory.categoryAssignedCount", { count: assignedCount })}
                          </span>
                          {category.deviceCategoryNameFr ? (
                            <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                              {category.deviceCategoryNameFr}
                            </span>
                          ) : null}
                          {canManage && (
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => {
                                  setForm(buildFormFromCategory(category));
                                  setServerError(null);
                                }}
                                className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                                title={t("common.edit")}
                              >
                                <Pencil className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => toggleActive(category.id, !category.isActive)}
                                className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                                title={category.isActive ? t("inventory.archiveCategory") : t("inventory.reactivateCategory")}
                              >
                                {category.isActive ? <PowerOff className="h-3.5 w-3.5" /> : <Power className="h-3.5 w-3.5" />}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
