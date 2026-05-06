"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
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
  sku: string;
  category: string | null;
  sellingPrice: number | { toNumber: () => number };
  estimatedDurationMinutes: number | null;
  notes: string | null;
}

interface Props {
  service?: ServiceData;
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
    <div className={half ? "" : "col-span-2 sm:col-span-2"}>
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

export function ServiceForm({ service }: Props) {
  const { t } = useAppI18n();
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

  const form = useForm<CreateServiceInput>({
    resolver: zodResolver(createServiceSchema),
    defaultValues: {
      name: service?.name ?? "",
      sku: service?.sku ?? "",
      category: service?.category ?? "",
      sellingPrice: sellingPriceDefault,
      estimatedDurationMinutes: service?.estimatedDurationMinutes ?? undefined,
      notes: service?.notes ?? "",
    },
  });

  const errors = form.formState.errors;

  function onSubmit(data: CreateServiceInput) {
    setServerError(null);
    startTransition(async () => {
      if (isEdit && service) {
        const result = await updateService(service.id, data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/inventory?tab=services");
        }
      } else {
        const result = await createService(data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/inventory?tab=services");
        }
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {/* Name */}
        <Field label={t("inventory.serviceName")} required error={errors.name?.message}>
          <input
            {...form.register("name")}
            type="text"
            placeholder="Remplacement écran, Diagnostic…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Category */}
        <Field label={t("inventory.category")} error={errors.category?.message} half>
          <input
            {...form.register("category")}
            type="text"
            placeholder="Réparation, Logiciel, Entretien…"
            className={inputCls}
            disabled={isPending}
          />
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
              ? t("inventory.updateService")
              : t("inventory.createService")}
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard/inventory?tab=services")}
          disabled={isPending}
          className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
