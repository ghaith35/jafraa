"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { createAssetSchema, type CreateAssetInput } from "../schemas/asset.schema";
import { createAsset } from "../actions/asset.actions";
import {
  listBrandsByCategory,
  listFamiliesByBrand,
} from "@/features/catalog/actions/catalog.actions";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Category {
  id: string;
  key: string;
  nameFr: string;
}

interface Brand {
  id: string;
  name: string;
  isGlobalDefault: boolean;
}

interface Family {
  id: string;
  name: string;
  isGlobalDefault: boolean;
}

interface Props {
  customerId: string;
  categories: Category[];
  companyId: string;
  storeId: string | undefined;
  onSuccess: () => void;
  onCancel: () => void;
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50";

function Field({
  label,
  error,
  children,
  half,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  half?: boolean;
}) {
  return (
    <div className={half ? "" : "col-span-2"}>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function AssetForm({
  customerId,
  categories,
  companyId,
  storeId,
  onSuccess,
  onCancel,
}: Props) {
  const { t } = useAppI18n();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [families, setFamilies] = useState<Family[]>([]);
  const [loadingBrands, setLoadingBrands] = useState(false);
  const [loadingFamilies, setLoadingFamilies] = useState(false);

  const form = useForm<CreateAssetInput>({
    resolver: zodResolver(createAssetSchema),
    defaultValues: {
      deviceCategoryId: undefined,
      deviceBrandId: undefined,
      deviceModelFamilyId: undefined,
      deviceTypeName: undefined,
      customBrand: "",
      customModel: "",
      color: "",
      storage: "",
      imeiSerial: "",
      notes: "",
    },
  });

  const selectedBrandId = useWatch({ control: form.control, name: "deviceBrandId" });

  // ── Category change handler (no useEffect — called from onChange) ────────

  const handleCategoryChange = useCallback(
    async (categoryId: string) => {
      // Reset downstream fields
      form.setValue("deviceBrandId", undefined);
      form.setValue("deviceModelFamilyId", undefined);
      setFamilies([]);

      if (!categoryId) {
        setBrands([]);
        return;
      }

      // Sync deviceTypeName for backward compat
      const cat = categories.find((c) => c.id === categoryId);
      if (cat) {
        form.setValue("deviceTypeName", cat.key as CreateAssetInput["deviceTypeName"]);
      }

      setLoadingBrands(true);
      try {
        const data = await listBrandsByCategory(categoryId, { companyId, storeId });
        setBrands(data);
      } catch {
        setBrands([]);
      } finally {
        setLoadingBrands(false);
      }
    },
    [categories, companyId, storeId, form]
  );

  // ── Brand change handler ────────────────────────────────────────────────

  const handleBrandChange = useCallback(
    async (brandId: string) => {
      form.setValue("deviceModelFamilyId", undefined);

      if (!brandId) {
        setFamilies([]);
        return;
      }

      setLoadingFamilies(true);
      try {
        const data = await listFamiliesByBrand(brandId, { companyId, storeId });
        setFamilies(data);
      } catch {
        setFamilies([]);
      } finally {
        setLoadingFamilies(false);
      }
    },
    [companyId, storeId, form]
  );

  function onSubmit(data: CreateAssetInput) {
    setServerError(null);
    startTransition(async () => {
      const result = (await createAsset(customerId, data)) as { error?: string } | void;
      if (result && "error" in result && result.error) {
        setServerError(result.error);
      } else {
        form.reset();
        setBrands([]);
        setFamilies([]);
        onSuccess();
      }
    });
  }

  const errors = form.formState.errors;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="rounded-lg border border-border bg-card p-4 space-y-4"
    >
      <p className="text-sm font-semibold text-foreground">{t("customers.asset.add")}</p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Category (from catalog) */}
        <Field
          label={t("customers.asset.category")}
          error={errors.deviceCategoryId?.message ?? errors.deviceTypeName?.message}
        >
          <select
            {...form.register("deviceCategoryId", {
              onChange: (e) => handleCategoryChange(e.target.value),
            })}
            className={inputCls}
            disabled={isPending}
          >
            <option value="">{t("common.select")}</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nameFr}
              </option>
            ))}
          </select>
        </Field>

        {/* Brand (from catalog — cascading) */}
        <Field
          label={t("customers.asset.brand")}
          error={errors.deviceBrandId?.message ?? errors.customBrand?.message}
        >
          {brands.length > 0 || loadingBrands ? (
            <select
              {...form.register("deviceBrandId", {
                onChange: (e) => handleBrandChange(e.target.value),
              })}
              className={inputCls}
              disabled={isPending || loadingBrands}
            >
              <option value="">
                {loadingBrands ? t("common.loading") : t("common.select")}
              </option>
              {brands.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          ) : (
            <input
              {...form.register("customBrand")}
              type="text"
              placeholder={t("customers.asset.placeholderBrand")}
              className={inputCls}
              disabled={isPending}
            />
          )}
        </Field>

        {/* Model family (from catalog — cascading) */}
        <Field
          label={t("customers.asset.family")}
          error={errors.deviceModelFamilyId?.message ?? errors.customModel?.message}
        >
          {families.length > 0 || loadingFamilies ? (
            <select
              {...form.register("deviceModelFamilyId")}
              className={inputCls}
              disabled={isPending || loadingFamilies}
            >
              <option value="">
                {loadingFamilies ? t("common.loading") : t("common.select")}
              </option>
              {families.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
          ) : (
            <input
              {...form.register("customModel")}
              type="text"
              placeholder="iPhone 13, Galaxy S22…"
              className={inputCls}
              disabled={isPending}
            />
          )}
        </Field>

        {/* Custom brand (shown when brand dropdown has items, as override) */}
        {brands.length > 0 && (
          <Field label={t("customers.asset.customBrand")} half>
            <input
              {...form.register("customBrand")}
              type="text"
              placeholder={t("customers.asset.placeholderMissing")}
              className={inputCls}
              disabled={isPending}
            />
          </Field>
        )}

        {/* Custom model (shown when family dropdown has items, as override) */}
        {(families.length > 0 || selectedBrandId) && (
          <Field label={t("customers.asset.customModel")} half>
            <input
              {...form.register("customModel")}
              type="text"
              placeholder={t("customers.asset.placeholderMissing")}
              className={inputCls}
              disabled={isPending}
            />
          </Field>
        )}

        {/* Color */}
        <Field label={t("customers.asset.color")} half>
          <input
            {...form.register("color")}
            type="text"
            placeholder={t("customers.asset.placeholderColor")}
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Storage */}
        <Field label={t("customers.asset.storage")} half>
          <input
            {...form.register("storage")}
            type="text"
            placeholder="128 Go, 8 Go RAM…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* IMEI */}
        <Field label={t("customers.asset.imei")}>
          <input
            {...form.register("imeiSerial")}
            type="text"
            placeholder="356789102345678"
            className={cn(inputCls, "font-mono")}
            disabled={isPending}
          />
        </Field>

        {/* Notes */}
        <Field label={t("customers.asset.notes")}>
          <textarea
            {...form.register("notes")}
            rows={2}
            placeholder={t("customers.asset.placeholderNotes")}
            className={cn(inputCls, "resize-y")}
            disabled={isPending}
          />
        </Field>
      </div>

      {serverError && (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {isPending ? t("customers.asset.adding") : t("customers.asset.addButton")}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isPending}
          className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
