"use client";

import { useMemo, useState, useTransition } from "react";
import { Pencil, Plus, PowerOff } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  archiveServiceCategory,
  createServiceCategory,
  reactivateServiceCategory,
  type ServiceCategoryRecord,
  updateServiceCategory,
} from "../actions/service-category.actions";
import { normalizeCategoryPath, splitCategoryPath } from "../lib/product-catalog";
import { useAppI18n } from "@/lib/i18n/ui";

interface Props {
  categories: ServiceCategoryRecord[];
  deviceCategories: Array<{ id: string; nameFr: string; nameEn: string; nameAr: string }>;
  canManage: boolean;
}

interface FormState {
  id?: string;
  deviceCategoryId: string;
  parentPath: string;
  name: string;
  nameEn: string;
  nameAr: string;
  sortOrder: number;
  isActive: boolean;
}

export function ServiceCategoryManager({ categories, deviceCategories, canManage }: Props) {
  const { t, locale } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [showArchived, setShowArchived] = useState(false);
  const [form, setForm] = useState<FormState>({
    deviceCategoryId: "",
    parentPath: "",
    name: "",
    nameEn: "",
    nameAr: "",
    sortOrder: 0,
    isActive: true,
  });

  const visible = useMemo(
    () =>
      categories.filter((category) => (showArchived ? true : !category.isArchived)),
    [categories, showArchived]
  );
  const parentChoices = useMemo(
    () =>
      categories
        .filter((category) => !form.id || category.id !== form.id)
        .filter((category) =>
          form.deviceCategoryId ? category.deviceCategoryId === form.deviceCategoryId : true
        )
        .map((category) => category.namePath),
    [categories, form.deviceCategoryId, form.id]
  );
  const fullPath = normalizeCategoryPath([form.parentPath, form.name].filter(Boolean));
  function deviceLabel(category: { nameFr: string; nameEn: string; nameAr: string }) {
    if (locale === "ar") return category.nameAr || category.nameFr;
    if (locale === "en") return category.nameEn || category.nameFr;
    return category.nameFr;
  }
  function categoryDeviceLabel(category: ServiceCategoryRecord): string {
    if (locale === "ar") return category.deviceCategoryNameAr ?? category.deviceCategoryNameFr ?? t("inventory.categoryAllDeviceTypes");
    if (locale === "en") return category.deviceCategoryNameEn ?? category.deviceCategoryNameFr ?? t("inventory.categoryAllDeviceTypes");
    return category.deviceCategoryNameFr ?? t("inventory.categoryAllDeviceTypes");
  }

  function resetForm() {
    setForm({
      deviceCategoryId: "",
      parentPath: "",
      name: "",
      nameEn: "",
      nameAr: "",
      sortOrder: 0,
      isActive: true,
    });
    setError(null);
  }

  function submit() {
    setError(null);
    startTransition(async () => {
      const payload = {
        id: form.id,
        name: form.name,
        nameEn: form.nameEn || undefined,
        nameAr: form.nameAr || undefined,
        parentPath: form.parentPath || undefined,
        deviceCategoryId: form.deviceCategoryId || undefined,
        sortOrder: form.sortOrder,
        isActive: form.isActive,
      };
      const result = form.id
        ? await updateServiceCategory(payload as Parameters<typeof updateServiceCategory>[0])
        : await createServiceCategory(payload as Parameters<typeof createServiceCategory>[0]);
      if ("error" in result) {
        setError(result.error);
        return;
      }
      resetForm();
      router.refresh();
    });
  }

  function editFrom(category: ServiceCategoryRecord) {
    const parts = splitCategoryPath(category.namePath);
    setForm({
      id: category.id,
      deviceCategoryId: category.deviceCategoryId ?? "",
      parentPath: normalizeCategoryPath(parts.slice(0, -1)),
      name: parts.at(-1) ?? category.nameFr,
      nameEn: category.nameEn ?? "",
      nameAr: category.nameAr ?? "",
      sortOrder: category.sortOrder,
      isActive: category.isActive,
    });
    setError(null);
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="grid gap-3 md:grid-cols-2">
          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t("inventory.deviceType")}</span>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={form.deviceCategoryId}
              onChange={(event) => setForm((prev) => ({ ...prev, deviceCategoryId: event.target.value }))}
              disabled={!canManage || isPending}
            >
              <option value="">{t("inventory.categoryAllDeviceTypes")}</option>
              {deviceCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {deviceLabel(category)}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t("inventory.categoryParentPath")}</span>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={form.parentPath}
              onChange={(event) => setForm((prev) => ({ ...prev, parentPath: event.target.value }))}
              disabled={!canManage || isPending}
            >
              <option value="">{t("inventory.categoryRoot")}</option>
              {parentChoices.map((path) => (
                <option key={path} value={path}>
                  {path}
                </option>
              ))}
            </select>
          </label>
          <input
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder={t("inventory.categoryName")}
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            disabled={!canManage || isPending}
          />
          <input
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder={t("services.nameEn")}
            value={form.nameEn}
            onChange={(event) => setForm((prev) => ({ ...prev, nameEn: event.target.value }))}
            disabled={!canManage || isPending}
          />
          <input
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder={t("services.nameAr")}
            value={form.nameAr}
            onChange={(event) => setForm((prev) => ({ ...prev, nameAr: event.target.value }))}
            disabled={!canManage || isPending}
          />
          <input
            type="number"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={form.sortOrder}
            onChange={(event) => setForm((prev) => ({ ...prev, sortOrder: Number(event.target.value || 0) }))}
            disabled={!canManage || isPending}
          />
        </div>

        <p className="mt-2 text-xs text-muted-foreground">
          {t("inventory.categoryFullPathPreview")}: {fullPath || "—"}
        </p>
        {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}

        {canManage ? (
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={submit}
              disabled={isPending || !fullPath}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50"
            >
              <Plus className="h-4 w-4" />
              {form.id ? t("inventory.updateCategory") : t("inventory.createCategory")}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-md border border-border px-4 py-2 text-sm"
              disabled={isPending}
            >
              {t("inventory.newCategory")}
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setShowArchived((prev) => !prev)}
          className="rounded-full border border-border px-3 py-1.5 text-sm"
        >
          {showArchived ? t("inventory.hideInactive") : t("inventory.showInactive")}
        </button>
      </div>

      <div className="grid gap-2">
        {visible.map((category) => (
          <div key={category.id} className="rounded-xl border border-border bg-card p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">{category.namePath}</p>
                <p className="text-xs text-muted-foreground">
                  {categoryDeviceLabel(category)} · {t("inventory.categoryAssignedCount", { count: String(category.serviceCount) })}
                </p>
              </div>
              {canManage ? (
                <div className="flex items-center gap-1">
                  <button type="button" onClick={() => editFrom(category)} className="rounded-md p-1.5 hover:bg-muted">
                    <Pencil className="h-4 w-4" />
                  </button>
                  {!category.isArchived ? (
                    <button
                      type="button"
                      onClick={() => {
                        startTransition(async () => {
                          const result = await archiveServiceCategory(category.id);
                          if ("error" in result) setError(result.error);
                          else router.refresh();
                        });
                      }}
                      className="rounded-md p-1.5 hover:bg-muted"
                    >
                      <PowerOff className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        startTransition(async () => {
                          const result = await reactivateServiceCategory(category.id);
                          if ("error" in result) setError(result.error);
                          else router.refresh();
                        });
                      }}
                      className="rounded-md p-1.5 hover:bg-muted"
                      title={t("inventory.reactivateCategory")}
                    >
                      <PowerOff className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
