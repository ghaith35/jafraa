"use client";

import { useForm, useWatch, Controller, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "../schemas/customer.schema";
import { createCustomer, updateCustomer } from "../actions/customer.actions";

interface CustomerGroup {
  id: string;
  name: string;
}

interface EditValues {
  id: string;
  name: string;
  languagePreference: "fr" | "ar" | "en";
  notes?: string | null;
  customerGroupId?: string | null;
}

interface Props {
  mode: "create" | "edit";
  defaultValues?: EditValues;
  groups?: CustomerGroup[];
}

// Superset of both create and edit fields so one useForm covers both modes
type CustomerFormValues = {
  customerType: "named" | "walkin";
  name: string;
  phone?: string;
  languagePreference: "fr" | "ar" | "en";
  notes?: string;
  customerGroupId?: string;
};

const LANG_OPTIONS = [
  { value: "fr", label: "Français" },
  { value: "ar", label: "العربية" },
  { value: "en", label: "English" },
] as const;

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
        {required && <span className="text-destructive ms-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50";

export function CustomerForm({ mode, defaultValues, groups = [] }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const schema = mode === "create" ? createCustomerSchema : updateCustomerSchema;

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(schema) as Resolver<CustomerFormValues>,
    defaultValues:
      mode === "create"
        ? {
            customerType: "named",
            name: "",
            phone: "",
            languagePreference: "fr",
            notes: "",
            customerGroupId: "",
          }
        : {
            customerType: "named",
            name: defaultValues?.name ?? "",
            languagePreference: defaultValues?.languagePreference ?? "fr",
            notes: defaultValues?.notes ?? "",
            customerGroupId: defaultValues?.customerGroupId ?? "",
          },
  });

  const customerType = useWatch({ control: form.control, name: "customerType" });

  function onSubmit(data: CustomerFormValues) {
    setServerError(null);
    startTransition(async () => {
      const result =
        mode === "create"
          ? await createCustomer({
              customerType: data.customerType,
              name: data.name,
              phone: data.phone,
              languagePreference: data.languagePreference,
              notes: data.notes || undefined,
              customerGroupId: data.customerGroupId || undefined,
            })
          : await updateCustomer(defaultValues!.id, {
              name: data.name,
              languagePreference: data.languagePreference,
              notes: data.notes || undefined,
              customerGroupId: data.customerGroupId || undefined,
            });

      if (result && "error" in result && result.error) {
        setServerError(result.error);
      }
      // On success: redirect() was called inside the server action
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      {/* Customer type toggle — create mode only */}
      {mode === "create" && (
        <Field label={t("customers.customerType")} required>
          <Controller
            name="customerType"
            control={form.control}
            render={({ field }) => (
              <div className="flex gap-0 rounded-md border border-input overflow-hidden">
                {(
                  [
                    { value: "named", label: t("customers.named") },
                    { value: "walkin", label: t("customers.walkin") },
                  ] as const
                ).map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => field.onChange(value)}
                    className={cn(
                      "flex-1 py-2 text-sm font-medium transition-colors",
                      field.value === value
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          />
        </Field>
      )}

      {/* Name */}
      <Field label={t("customers.name")} required error={form.formState.errors.name?.message}>
        <input
          {...form.register("name")}
          type="text"
          placeholder={customerType === "walkin" ? t("customers.walkinName") : t("customers.customerNamePlaceholder")}
          className={inputCls}
          disabled={isPending}
        />
      </Field>

      {/* Phone — create mode only */}
      {mode === "create" && (
        <Field
          label={t("customers.phone")}
          required={customerType === "named"}
          error={form.formState.errors.phone?.message}
        >
          <input
            {...form.register("phone")}
            type="tel"
            placeholder="0555 123 456"
            className={inputCls}
            disabled={isPending}
          />
          {customerType === "walkin" && (
            <p className="mt-1 text-xs text-muted-foreground">
              {t("customers.phoneOptionalWalkin")}
            </p>
          )}
        </Field>
      )}

      {/* Language */}
      <Field
        label={t("customers.preferredLanguage")}
        error={form.formState.errors.languagePreference?.message}
      >
        <select {...form.register("languagePreference")} className={inputCls} disabled={isPending}>
          {LANG_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Customer group */}
      {groups.length > 0 && (
        <Field label={t("customers.customerGroup")}>
          <select
            {...form.register("customerGroupId")}
            className={inputCls}
            disabled={isPending}
          >
            <option value="">{t("customers.noGroup")}</option>
            {groups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </Field>
      )}

      {/* Notes */}
      <Field label={t("common.notes")} error={form.formState.errors.notes?.message}>
        <textarea
          {...form.register("notes")}
          rows={3}
          placeholder={t("customers.notesPlaceholder")}
          className={cn(inputCls, "resize-y")}
          disabled={isPending}
        />
      </Field>

      {/* Server error */}
      {serverError && (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {serverError}
        </p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {isPending
            ? t("common.saving")
            : mode === "create"
            ? t("customers.createCustomer")
            : t("customers.updateCustomer")}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          disabled={isPending}
          className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
        >
          {t("common.cancel")}
        </button>
      </div>
    </form>
  );
}
