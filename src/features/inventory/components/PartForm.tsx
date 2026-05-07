"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState, useCallback, useEffect, useMemo } from "react";
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
import { DEVICE_SCOPE_KEYWORDS } from "@/features/inventory/lib/device-scope";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Category {
  id: string;
  name: string;
  deviceCategoryKey?: string | null;
}

interface DeviceCategory {
  id: string;
  key: string;
  nameFr: string;
  nameAr?: string | null;
  nameEn?: string | null;
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
  recoveredMode?: boolean;
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50";

function normalizeText(value: string): string {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

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
    <p className="col-span-1 border-t border-border pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground md:col-span-2">
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
  recoveredMode = false,
}: Props) {
  const { t, locale } = useAppI18n();
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
  const selectedDeviceCategoryId = form.watch("compatibleCategoryId");
  const selectedDeviceBrandId = form.watch("compatibleBrandId");
  const selectedPartCategoryId = form.watch("categoryId");

  const selectedDeviceCategory = useMemo(
    () => deviceCategories.find((c) => c.id === selectedDeviceCategoryId),
    [deviceCategories, selectedDeviceCategoryId]
  );

  const selectedDeviceCategoryLabel = useMemo(() => {
    if (!selectedDeviceCategory) return "";
    if (locale === "ar") return selectedDeviceCategory.nameAr || selectedDeviceCategory.nameFr;
    if (locale === "en") return selectedDeviceCategory.nameEn || selectedDeviceCategory.nameFr;
    return selectedDeviceCategory.nameFr;
  }, [locale, selectedDeviceCategory]);

  const filteredPartCategories = useMemo(() => {
    if (!selectedDeviceCategory) return categories;

    const byFk = categories.filter((category) => category.deviceCategoryKey === selectedDeviceCategory.key);
    if (byFk.length) return byFk;

    const keywords = DEVICE_SCOPE_KEYWORDS[selectedDeviceCategory.key as keyof typeof DEVICE_SCOPE_KEYWORDS] ?? [];
    if (!keywords.length) return categories;

    const filtered = categories.filter((category) => {
      const name = normalizeText(category.name);
      return keywords.some((keyword) => name.includes(normalizeText(keyword)));
    });

    return filtered.length ? filtered : categories;
  }, [categories, selectedDeviceCategory]);

  // ── Compatibility cascading ──────────────────────────────────────────────

  const handleDeviceCategoryChange = useCallback(
    (categoryId: string) => {
      form.setValue("compatibleBrandId", undefined);
      form.setValue("compatibleFamilyId", undefined);
      setDeviceBrands([]);
      setDeviceFamilies([]);
    },
    [form]
  );

  const handleDeviceBrandChange = useCallback(
    (brandId: string) => {
      form.setValue("compatibleFamilyId", undefined);
      setDeviceFamilies([]);
    },
    [form]
  );

  useEffect(() => {
    let active = true;

    async function loadBrands() {
      if (!selectedDeviceCategoryId) {
        setDeviceBrands([]);
        return;
      }

      setLoadingBrands(true);
      try {
        const data = await listBrandsByCategory(selectedDeviceCategoryId, { companyId, storeId });
        if (active) setDeviceBrands(data);
      } catch {
        if (active) setDeviceBrands([]);
      } finally {
        if (active) setLoadingBrands(false);
      }
    }

    void loadBrands();
    return () => {
      active = false;
    };
  }, [selectedDeviceCategoryId, companyId, storeId]);

  useEffect(() => {
    let active = true;

    async function loadFamilies() {
      if (!selectedDeviceBrandId) {
        setDeviceFamilies([]);
        return;
      }

      setLoadingFamilies(true);
      try {
        const data = await listFamiliesByBrand(selectedDeviceBrandId, { companyId, storeId });
        if (active) setDeviceFamilies(data);
      } catch {
        if (active) setDeviceFamilies([]);
      } finally {
        if (active) setLoadingFamilies(false);
      }
    }

    void loadFamilies();
    return () => {
      active = false;
    };
  }, [selectedDeviceBrandId, companyId, storeId]);

  useEffect(() => {
    if (!selectedPartCategoryId) return;
    const stillVisible = filteredPartCategories.some((category) => category.id === selectedPartCategoryId);
    if (!stillVisible) {
      form.setValue("categoryId", undefined);
    }
  }, [filteredPartCategories, selectedPartCategoryId, form]);

  function onSubmit(data: CreatePartInput) {
    const payload = recoveredMode
      ? {
          ...data,
          notes: data.notes?.toLowerCase().includes("recovered")
            ? data.notes
            : [data.notes?.trim(), "recovered"]
                .filter(Boolean)
                .join(" · "),
        }
      : data;

    setServerError(null);
    startTransition(async () => {
      if (isEdit && part) {
        const result = await updatePart(part.id, payload);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push(recoveredMode ? "/dashboard/inventory/recovered-parts" : "/dashboard/inventory/parts");
        }
      } else {
        const result = await createPart(payload);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push(recoveredMode ? "/dashboard/inventory/recovered-parts" : "/dashboard/inventory/parts");
        }
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                {locale === "ar" ? c.nameAr || c.nameFr : locale === "en" ? c.nameEn || c.nameFr : c.nameFr}
              </option>
            ))}
          </select>
        </Field>

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
            disabled={isPending || !selectedDeviceCategoryId}
          >
            <option value="">
              {selectedDeviceCategoryId ? t("inventory.noCategory") : t("inventory.selectDeviceTypeFirst")}
            </option>
            {filteredPartCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-muted-foreground">
            {selectedDeviceCategoryLabel
              ? t("inventory.partCategoryFilteredHint", { category: selectedDeviceCategoryLabel })
              : t("inventory.selectDeviceTypeFirstHint")}
          </p>
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

        <Field label={t("inventory.deviceBrand")} error={errors.compatibleBrandId?.message}>
          <select
            {...form.register("compatibleBrandId", {
              onChange: (e) => handleDeviceBrandChange(e.target.value),
            })}
            className={inputCls}
            disabled={isPending || loadingBrands || !selectedDeviceCategoryId}
          >
            <option value="">
              {!selectedDeviceCategoryId
                ? t("inventory.selectDeviceTypeFirst")
                : loadingBrands
                ? t("common.loading")
                : t("inventory.allBrands")}
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
            disabled={isPending || loadingFamilies || !selectedDeviceBrandId}
          >
            <option value="">
              {!selectedDeviceBrandId
                ? t("inventory.selectBrandFirst")
                : loadingFamilies
                ? t("common.loading")
                : t("inventory.allModels")}
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
            placeholder={recoveredMode ? `${t("inventory.recoveredPartsHelp")} (${t("common.optional")})` : "Qualité OEM, pré-assemblé, compatible uniquement LCD…"}
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

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isPending}
          className="h-11 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
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
          onClick={() => router.push(recoveredMode ? "/dashboard/inventory/recovered-parts" : "/dashboard/inventory/parts")}
          disabled={isPending}
          className="h-11 rounded-md border border-border px-4 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 sm:border-0 sm:px-0"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
