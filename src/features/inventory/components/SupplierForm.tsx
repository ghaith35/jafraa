"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  createSupplierSchema,
  type CreateSupplierInput,
} from "../schemas/supplier.schema";
import { createSupplier, updateSupplier } from "../actions/supplier.actions";
import { useAppI18n } from "@/lib/i18n/ui";

// ─── Types ───────────────────────────────────────────────────────────────────

interface SupplierData {
  id: string;
  name: string;
  phone: string | null;
  address: string | null;
  notes: string | null;
}

interface Props {
  supplier?: SupplierData; // Edit mode if provided
}

// ─── Shared input style ───────────────────────────────────────────────────────

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

// ─── Component ───────────────────────────────────────────────────────────────

export function SupplierForm({ supplier }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const isEdit = !!supplier;

  const form = useForm<CreateSupplierInput>({
    resolver: zodResolver(createSupplierSchema),
    defaultValues: {
      name: supplier?.name ?? "",
      phone: supplier?.phone ?? "",
      address: supplier?.address ?? "",
      notes: supplier?.notes ?? "",
    },
  });

  const errors = form.formState.errors;

  function onSubmit(data: CreateSupplierInput) {
    setServerError(null);
    startTransition(async () => {
      if (isEdit && supplier) {
        const result = await updateSupplier(supplier.id, data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/suppliers");
        }
      } else {
        const result = await createSupplier(data);
        if (result && "error" in result && result.error) {
          setServerError(result.error);
        } else {
          router.push("/dashboard/suppliers");
        }
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field label={t("suppliers.nameLabel")} required error={errors.name?.message}>
            <input
              {...form.register("name")}
              type="text"
              placeholder={t("suppliers.namePlaceholder")}
              className={inputCls}
              disabled={isPending}
            />
          </Field>
        </div>

        <Field label={t("common.phone")} error={errors.phone?.message}>
          <input
            {...form.register("phone")}
            type="tel"
            placeholder="0555 123 456…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field label={t("common.address")} error={errors.address?.message}>
          <input
            {...form.register("address")}
            type="text"
            placeholder={t("suppliers.addressPlaceholder")}
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label={t("common.notes")} error={errors.notes?.message}>
            <textarea
              {...form.register("notes")}
              rows={3}
              placeholder={t("suppliers.notesPlaceholder")}
              className={cn(inputCls, "resize-y")}
              disabled={isPending}
            />
          </Field>
        </div>
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
              ? t("suppliers.updating")
              : t("suppliers.creating")
            : isEdit
              ? t("suppliers.updateSupplier")
              : t("suppliers.createSupplier")}
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard/suppliers")}
          disabled={isPending}
          className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
