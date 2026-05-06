"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  createPartSchema,
  type CreatePartInput,
} from "../schemas/inventory.schema";
import { createPart, updatePart } from "../actions/part.actions";
import {
  listBrandsByCategory,
  listFamiliesByBrand,
} from "@/features/catalog/actions/catalog.actions";
import { useAppI18n } from "@/lib/i18n/ui";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Category {
  id: string;
  name: string;
}

interface DeviceCategory {
  id: string;
  key: string;
  nameFr: string;
}

interface DeviceBrand {
  id: string;
  name: string;
}

interface DeviceFamily {
  id: string;
  name: string;
}

interface PartData {
  id: string;
  categoryId: string | null;
  compatibleCategoryId: string | null;
  compatibleBrandId: string | null;
  compatibleFamilyId: string | null;
  name: string;
  sku: string;
  barcode: string | null;
  brand: string | null;
  modelReference: string | null;
  sellingPrice: number | { toNumber: () => number };
  stockQty: number;
  lowStockThreshold: number | null;
  notes: string | null;
  imageUrl: string | null;
}

interface Props {
  categories: Category[];
  deviceCategories: DeviceCategory[];
  companyId: string;
  storeId: string | undefined;
  part?: PartData;
}

// ─── Styles ──────────────────────────────────────────────────────────────────

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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="col-span-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide pt-2 border-t border-border">
      {children}
    </p>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function PartForm({
  categories,
  deviceCategories,
  companyId,
  storeId,
  part,
}: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [deviceBrands, setDeviceBrands] = useState<DeviceBrand[]>([]);
  const [deviceFamilies, setDeviceFamilies] = useState<DeviceFamily[]>([]);
  const [loadingBrands, setLoadingBrands] = useState(false);
  const [loadingFamilies, setLoadingFamilies] = useState(false);
  const isEdit = !!part;

  const sellingPriceDefault =
    part?.sellingPrice != null
      ? typeof part.sellingPrice === "object"
        ? part.sellingPrice.toNumber()
        : Number(part.sellingPrice)
      : 0;

  const form = useForm<CreatePartInput>({
    resolver: zodResolver(createPartSchema),
    defaultValues: {
      categoryId: part?.categoryId ?? undefined,
      compatibleCategoryId: part?.compatibleCategoryId ?? undefined,
      compatibleBrandId: part?.compatibleBrandId ?? undefined,
      compatibleFamilyId: part?.compatibleFamilyId ?? undefined,
      name: part?.name ?? "",
      sku: part?.sku ?? "",
      barcode: part?.barcode ?? "",
      brand: part?.brand ?? "",
      modelReference: part?.modelReference ?? "",
      sellingPrice: sellingPriceDefault,
      stockQty: part?.stockQty ?? 0,
      lowStockThreshold: part?.lowStockThreshold ?? undefined,
      notes: part?.notes ?? "",
      imageUrl: part?.imageUrl ?? "",
    },
  });

  const errors = form.formState.errors;

  // ── Compatibility cascading ──────────────────────────────────────────────

  const handleDeviceCategoryChange = useCallback(
    async (categoryId: string) => {
      form.setValue("compatibleBrandId", undefined);
      form.setValue("compatibleFamilyId", undefined);
      setDeviceFamilies([]);
      if (!categoryId) {
        setDeviceBrands([]);
        return;
      }
      setLoadingBrands(true);
      try {
        const data = await listBrandsByCategory(categoryId, { companyId, storeId });
        setDeviceBrands(data);
      } catch {
        setDeviceBrands([]);
      } finally {
        setLoadingBrands(false);
      }
    },
    [companyId, storeId, form]
  );

  const handleDeviceBrandChange = useCallback(
    async (brandId: string) => {
      form.setValue("compatibleFamilyId", undefined);
      if (!brandId) {
        setDeviceFamilies([]);
        return;
      }
      setLoadingFamilies(true);
      try {
        const data = await listFamiliesByBrand(brandId, { companyId, storeId });
        setDeviceFamilies(data);
      } catch {
        setDeviceFamilies([]);
      } finally {
        setLoadingFamilies(false);
      }
    },
    [companyId, storeId, form]
  );

  function onSubmit(data: CreatePartInput) {
    setServerError(null);
    startTransition(async () => {
      if (isEdit && part) {
        const result = await updatePart(part.id, data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/inventory?tab=parts");
        }
      } else {
        const result = await createPart(data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/inventory?tab=parts");
        }
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {/* ── Part info ──────────────────────────────────────────────── */}
        <SectionTitle>{t("inventory.partInfo")}</SectionTitle>

        <Field label={t("inventory.partName")} required error={errors.name?.message}>
          <input
            {...form.register("name")}
            type="text"
            placeholder="Écran iPhone 13, Batterie Galaxy A52…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field label={t("inventory.partCategory")} error={errors.categoryId?.message}>
          <select
            {...form.register("categoryId")}
            className={inputCls}
            disabled={isPending}
          >
            <option value="">{t("inventory.noCategory")}</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t("inventory.supplierBrand")} error={errors.brand?.message}>
          <input
            {...form.register("brand")}
            type="text"
            placeholder="OEM, Aftermarket…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field label={t("inventory.reference")} error={errors.modelReference?.message}>
          <input
            {...form.register("modelReference")}
            type="text"
            placeholder="BN44-01234A…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* ── Compatibility ─────────────────────────────────────────── */}
        <SectionTitle>{t("inventory.deviceCompatibilityOptional")}</SectionTitle>

        <Field label={t("inventory.deviceType")} error={errors.compatibleCategoryId?.message}>
          <select
            {...form.register("compatibleCategoryId", {
              onChange: (e) => handleDeviceCategoryChange(e.target.value),
            })}
            className={inputCls}
            disabled={isPending}
          >
            <option value="">{t("inventory.all")}</option>
            {deviceCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nameFr}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t("inventory.deviceBrand")} error={errors.compatibleBrandId?.message}>
          <select
            {...form.register("compatibleBrandId", {
              onChange: (e) => handleDeviceBrandChange(e.target.value),
            })}
            className={inputCls}
            disabled={isPending || loadingBrands}
          >
            <option value="">
              {loadingBrands ? t("common.loading") : t("inventory.allBrands")}
            </option>
            {deviceBrands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t("inventory.familyModel")} error={errors.compatibleFamilyId?.message}>
          <select
            {...form.register("compatibleFamilyId")}
            className={inputCls}
            disabled={isPending || loadingFamilies}
          >
            <option value="">
              {loadingFamilies ? t("common.loading") : t("inventory.allModels")}
            </option>
            {deviceFamilies.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </Field>

        {/* ── Stock & pricing ───────────────────────────────────────── */}
        <SectionTitle>{t("inventory.stockAndPrice")}</SectionTitle>

        <Field label="SKU" error={errors.sku?.message}>
          <input
            {...form.register("sku")}
            type="text"
            placeholder={t("inventory.skuAuto")}
            className={cn(inputCls, "font-mono")}
            disabled={isPending}
          />
        </Field>

        <Field label={t("inventory.barcode")} error={errors.barcode?.message}>
          <input
            {...form.register("barcode")}
            type="text"
            placeholder="EAN-13…"
            className={cn(inputCls, "font-mono")}
            disabled={isPending}
          />
        </Field>

        <Field label={t("inventory.sellingPrice")} required error={errors.sellingPrice?.message}>
          <input
            {...form.register("sellingPrice", { valueAsNumber: true })}
            type="number"
            min={0}
            step={1}
            placeholder="0"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field
          label={isEdit ? t("inventory.currentStock") : t("inventory.initialStock")}
          error={errors.stockQty?.message}
        >
          <input
            {...form.register("stockQty", { valueAsNumber: true })}
            type="number"
            min={0}
            step={1}
            placeholder="0"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field label={t("inventory.lowStockThreshold")} error={errors.lowStockThreshold?.message}>
          <input
            {...form.register("lowStockThreshold", { valueAsNumber: true })}
            type="number"
            min={0}
            step={1}
            placeholder="Ex: 3"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field label={t("inventory.imageUrlOptional")} error={errors.imageUrl?.message}>
          <input
            {...form.register("imageUrl")}
            type="url"
            placeholder="https://…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Notes */}
        <Field label={t("common.notes")}>
          <textarea
            {...form.register("notes")}
            rows={2}
            placeholder="Qualité OEM, pré-assemblé, compatible uniquement LCD…"
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

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {isPending
            ? isEdit
              ? t("inventory.updating")
              : t("inventory.creating")
            : isEdit
              ? t("inventory.updatePart")
              : t("inventory.createPart")}
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard/inventory?tab=parts")}
          disabled={isPending}
          className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
