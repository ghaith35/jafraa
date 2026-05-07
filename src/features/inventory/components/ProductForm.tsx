"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  createProductSchema,
  type CreateProductInput,
} from "../schemas/inventory.schema";
import { createProduct, updateProduct } from "../actions/product.actions";
import { useAppI18n } from "@/lib/i18n/ui";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Category {
  id: string;
  name: string;
}

interface ProductData {
  id: string;
  categoryId: string | null;
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
  product?: ProductData; // Edit mode if provided
}

// ─── Shared input style ───────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50";

function Field({
  label,
  error,
  required,
  children,
  half,
  third,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  half?: boolean;
  third?: boolean;
}) {
  return (
    <div className={half ? "" : third ? "" : "col-span-1 md:col-span-2"}>
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

export function ProductForm({ categories, product }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const isEdit = !!product;

  const sellingPriceDefault =
    product?.sellingPrice != null
      ? typeof product.sellingPrice === "object"
        ? product.sellingPrice.toNumber()
        : Number(product.sellingPrice)
      : 0;

  const form = useForm<CreateProductInput>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      categoryId: product?.categoryId ?? undefined,
      name: product?.name ?? "",
      sku: product?.sku ?? "",
      barcode: product?.barcode ?? "",
      brand: product?.brand ?? "",
      modelReference: product?.modelReference ?? "",
      sellingPrice: sellingPriceDefault,
      stockQty: product?.stockQty ?? 0,
      lowStockThreshold: product?.lowStockThreshold ?? undefined,
      notes: product?.notes ?? "",
      imageUrl: product?.imageUrl ?? "",
    },
  });

  const errors = form.formState.errors;

  function onSubmit(data: CreateProductInput) {
    setServerError(null);
    startTransition(async () => {
      if (isEdit && product) {
        const result = await updateProduct(product.id, data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/inventory/products");
        }
      } else {
        const result = await createProduct(data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/inventory/products");
        }
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Name */}
        <Field label={t("inventory.productName")} required error={errors.name?.message}>
          <input
            {...form.register("name")}
            type="text"
            placeholder="Chargeur USB-C 65W…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Category */}
        <Field label={t("inventory.category")} error={errors.categoryId?.message} half>
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
          <p className="mt-1 text-xs text-muted-foreground">
            {t("inventory.categoryFieldHint")}
          </p>
        </Field>

        {/* Brand */}
        <Field label={t("inventory.brand")} error={errors.brand?.message} half>
          <input
            {...form.register("brand")}
            type="text"
            placeholder="Samsung, Belkin…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Model Reference */}
        <Field label={t("inventory.specificationVariant")} error={errors.modelReference?.message} half>
          <input
            {...form.register("modelReference")}
            type="text"
            placeholder="1.5m, Cat6, USB-C, 256GB, A4, TN-760…"
            className={inputCls}
            disabled={isPending}
          />
          <p className="mt-1 text-xs text-muted-foreground">
            {t("inventory.specificationVariantHint")}
          </p>
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

        {/* Barcode */}
        <Field label={t("inventory.barcode")} error={errors.barcode?.message} half>
          <input
            {...form.register("barcode")}
            type="text"
            placeholder="EAN-13…"
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

        {/* Stock qty */}
        <Field
          label={isEdit ? t("inventory.currentStock") : t("inventory.initialStock")}
          error={errors.stockQty?.message}
          half
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

        {/* Low stock threshold */}
        <Field label={t("inventory.lowStockThreshold")} error={errors.lowStockThreshold?.message} half>
          <input
            {...form.register("lowStockThreshold", { valueAsNumber: true })}
            type="number"
            min={0}
            step={1}
            placeholder="Ex: 5"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Image URL placeholder */}
        <Field label={t("inventory.imageUrlOptional")} error={errors.imageUrl?.message} half>
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
            placeholder={t("inventory.internalNotes")}
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
              ? t("inventory.updateProduct")
              : t("inventory.createProduct")}
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard/inventory/products")}
          disabled={isPending}
          className="h-11 rounded-md border border-border px-4 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 sm:border-0 sm:px-0"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
