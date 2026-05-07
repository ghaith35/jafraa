"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  createServiceSchema,
  type CreateServiceInput,
} from "../schemas/inventory.schema";
import { createService, updateService } from "../actions/service.actions";
import { useAppI18n } from "@/lib/i18n/ui";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceData {
  id: string;
  name: string;
  nameEn: string | null;
  nameAr: string | null;
  sku: string;
  category: string | null;
  serviceCategoryId: string | null;
  deviceCategoryId: string | null;
  basePrice: number | null;
  costPrice: number | null;
  sellingPrice: number | { toNumber: () => number };
  estimatedDurationMinutes: number | null;
  notes: string | null;
  packageItems?: Array<{ serviceId: string }>;
}

interface Props {
  service?: ServiceData;
  categories: Array<{ id: string; namePath: string; deviceCategoryId: string | null }>;
  deviceCategories: Array<{ id: string; nameFr: string; nameEn: string; nameAr: string }>;
  packageCandidates: Array<{ id: string; name: string; deviceCategoryId: string | null }>;
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50";

function Field({
  label,
  error,
  required,
  children,
  half,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  half?: boolean;
}) {
  return (
    <div className={half ? "" : "col-span-1 md:col-span-2"}>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label}
        {required && <span className="ms-0.5 text-destructive">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function ServiceForm({ service, categories, deviceCategories, packageCandidates }: Props) {
  const { t, locale } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const isEdit = !!service;

  const sellingPriceDefault =
    service?.sellingPrice != null
      ? typeof service.sellingPrice === "object"
        ? service.sellingPrice.toNumber()
        : Number(service.sellingPrice)
      : 0;
  const basePriceDefault = service?.basePrice ?? sellingPriceDefault;
  const costPriceDefault = service?.costPrice ?? undefined;
  const selectedPackageServiceIds = useMemo(
    () => (service?.packageItems ?? []).map((item) => item.serviceId),
    [service?.packageItems]
  );

  const form = useForm<CreateServiceInput>({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      name: service?.name ?? "",
      nameEn: service?.nameEn ?? "",
      nameAr: service?.nameAr ?? "",
      sku: service?.sku ?? "",
      category: service?.category ?? "",
      serviceCategoryId: service?.serviceCategoryId ?? "",
      deviceCategoryId: service?.deviceCategoryId ?? "",
      isPackage: false,
      packageServiceIds: selectedPackageServiceIds,
      packageDescription: "",
      basePrice: basePriceDefault,
      costPrice: costPriceDefault,
      sellingPrice: sellingPriceDefault,
      estimatedDurationMinutes: service?.estimatedDurationMinutes ?? undefined,
      notes: service?.notes ?? "",
    },
  });

  const errors = form.formState.errors;
  const selectedDeviceCategoryId = form.watch("deviceCategoryId");
  const isPackage = form.watch("isPackage");
  const selectedCategoryId = form.watch("serviceCategoryId");
  const filteredCategories = useMemo(
    () => categories.filter((category) => (selectedDeviceCategoryId ? category.deviceCategoryId === selectedDeviceCategoryId : true)),
    [categories, selectedDeviceCategoryId]
  );
  const filteredPackageCandidates = useMemo(
    () =>
      packageCandidates.filter((candidate) =>
        selectedDeviceCategoryId ? candidate.deviceCategoryId === selectedDeviceCategoryId : true
      ),
    [packageCandidates, selectedDeviceCategoryId]
  );
  const selectedCategoryPath = useMemo(
    () => categories.find((category) => category.id === selectedCategoryId)?.namePath ?? "",
    [categories, selectedCategoryId]
  );
  const sellingPrice = form.watch("sellingPrice");
  const costPrice = form.watch("costPrice");
  const marginValue = useMemo(() => {
    const price = Number(sellingPrice ?? 0);
    const cost = Number(costPrice ?? 0);
    if (!Number.isFinite(price) || !Number.isFinite(cost)) return null;
    const marginAmount = price - cost;
    const marginPercent = price > 0 ? (marginAmount / price) * 100 : 0;
    return { amount: marginAmount, percent: marginPercent };
  }, [sellingPrice, costPrice]);

  const formatMoney = useMemo(
    () =>
      new Intl.NumberFormat(locale === "ar" ? "ar-DZ" : locale === "en" ? "en-GB" : "fr-DZ", {
        maximumFractionDigits: 0,
      }),
    [locale]
  );

  function deviceLabel(category: { nameFr: string; nameEn: string; nameAr: string }) {
    if (locale === "ar") return category.nameAr || category.nameFr;
    if (locale === "en") return category.nameEn || category.nameFr;
    return category.nameFr;
  }

  function onSubmit(data: CreateServiceInput) {
    setServerError(null);
    startTransition(async () => {
      if (isEdit && service) {
        const result = await updateService(service.id, data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/services");
        }
      } else {
        const result = await createService(data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/services");
        }
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Name */}
        <Field label={t("inventory.serviceName")} required error={errors.name?.message}>
          <input
            {...form.register("name")}
            type="text"
            placeholder={t("services.serviceNamePlaceholder")}
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field label={t("inventory.deviceType")} error={errors.deviceCategoryId?.message} half>
          <select {...form.register("deviceCategoryId")} className={inputCls} disabled={isPending}>
            <option value="">{t("inventory.categoryAllDeviceTypes")}</option>
            {deviceCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {deviceLabel(category)}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t("inventory.category")} error={errors.serviceCategoryId?.message} half>
          <select
            {...form.register("serviceCategoryId", {
              onChange: (event) => {
                const category = categories.find((item) => item.id === event.target.value);
                if (category) form.setValue("category", category.namePath);
              },
            })}
            className={inputCls}
            disabled={isPending}
          >
            <option value="">{t("inventory.noCategory")}</option>
            {filteredCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.namePath}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t("services.categoryPathLabel")} error={errors.category?.message} half>
          <input
            {...form.register("category")}
            type="text"
            placeholder={t("services.categoryPathPlaceholder")}
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field label={t("services.nameEn")} error={errors.nameEn?.message} half>
          <input {...form.register("nameEn")} type="text" className={inputCls} disabled={isPending} />
        </Field>

        <Field label={t("services.nameAr")} error={errors.nameAr?.message} half>
          <input {...form.register("nameAr")} type="text" className={inputCls} disabled={isPending} />
        </Field>

        {/* SKU */}
        <Field label="SKU" error={errors.sku?.message} half>
          <input
            {...form.register("sku")}
            type="text"
            placeholder={t("inventory.skuAuto")}
            className={cn(inputCls, "font-mono")}
            disabled={isPending}
          />
        </Field>

        {/* Selling price */}
        <Field label={t("inventory.sellingPrice")} required error={errors.sellingPrice?.message} half>
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

        <Field label={t("services.basePrice")} error={errors.basePrice?.message} half>
          <input
            {...form.register("basePrice", { valueAsNumber: true })}
            type="number"
            min={0}
            step={1}
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field label={t("services.costPrice")} error={errors.costPrice?.message} half>
          <input
            {...form.register("costPrice", { valueAsNumber: true })}
            type="number"
            min={0}
            step={1}
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Duration */}
        <Field label={t("inventory.durationMinutes")} error={errors.estimatedDurationMinutes?.message} half>
          <input
            {...form.register("estimatedDurationMinutes", { valueAsNumber: true })}
            type="number"
            min={0}
            step={5}
            placeholder="30"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Notes */}
        <Field label={t("common.notes")}>
          <textarea
            {...form.register("notes")}
            rows={3}
            placeholder={t("inventory.internalNotes")}
            className={cn(inputCls, "resize-y")}
            disabled={isPending}
          />
        </Field>

        <div className="col-span-2 rounded-md border border-border bg-muted/20 p-3">
          <label className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <input type="checkbox" {...form.register("isPackage")} disabled={isPending} />
            {t("services.isPackage")}
          </label>
          {isPackage ? (
            <div className="mt-3 space-y-3">
              <p className="text-xs font-medium text-muted-foreground">{t("services.packageItems")}</p>
              <select
                multiple
                className={cn(inputCls, "h-28 py-2")}
                value={form.watch("packageServiceIds") ?? []}
                onChange={(event) => {
                  const values = Array.from(event.target.selectedOptions).map((option) => option.value);
                  form.setValue("packageServiceIds", values);
                }}
                disabled={isPending}
              >
                {filteredPackageCandidates
                  .filter((candidate) => candidate.id !== service?.id)
                  .map((candidate) => (
                    <option key={candidate.id} value={candidate.id}>
                      {candidate.name}
                    </option>
                  ))}
              </select>
              <textarea
                {...form.register("packageDescription")}
                rows={2}
                placeholder={t("services.packageDescription")}
                className={cn(inputCls, "resize-y")}
                disabled={isPending}
              />
            </div>
          ) : null}
        </div>

        {selectedCategoryPath ? (
          <div className="col-span-2 rounded-md border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
            {t("inventory.categoryFullPathPreview")}: <span className="text-foreground">{selectedCategoryPath}</span>
          </div>
        ) : null}
        {marginValue ? (
          <div className="col-span-2 rounded-md border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
            {t("services.margin")}:{" "}
            <span className="font-medium text-foreground">
              {formatMoney.format(marginValue.amount)} DZD ({marginValue.percent.toFixed(1)}%)
            </span>
          </div>
        ) : null}
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
              ? t("inventory.updateService")
              : t("inventory.createService")}
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard/services")}
          disabled={isPending}
          className="h-11 rounded-md border border-border px-4 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 sm:border-0 sm:px-0"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
