"use client";

import { useForm, Controller, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Loader2, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import {
  createCustomerSchema,
  updateCustomerSchema,
} from "../schemas/customer.schema";
import { createCustomer, updateCustomer } from "../actions/customer.actions";
import { createCustomerGroup } from "../actions/customer-group.actions";
import { ManageGroupsDialog } from "./ManageGroupsDialog";

interface CustomerGroup {
  id: string;
  name: string;
}

interface EditValues {
  id: string;
  name: string;
  languagePreference: "fr" | "ar" | "en";
  address?: string | null;
  notes?: string | null;
  customerGroupId?: string | null;
}

interface Props {
  mode: "create" | "edit";
  defaultValues?: EditValues;
  groups?: CustomerGroup[];
}

type CustomerFormValues = {
  name: string;
  phone?: string;
  languagePreference: "fr" | "ar" | "en";
  address?: string;
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

export function CustomerForm({ mode, defaultValues, groups: initialGroups = [] }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [groups, setGroups] = useState(initialGroups);
  const [showNewGroup, setShowNewGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [creatingGroup, setCreatingGroup] = useState(false);

  const schema = mode === "create" ? createCustomerSchema : updateCustomerSchema;

  async function handleCreateGroup() {
    if (!newGroupName.trim()) return;
    setCreatingGroup(true);
    const result = await createCustomerGroup({ name: newGroupName.trim() });
    setCreatingGroup(false);
    if (result && "error" in result) {
      alert(result.error);
      return;
    }
    if ("id" in result && "name" in result) {
      setGroups((prev) => [...prev, { id: result.id, name: result.name }]);
      form.setValue("customerGroupId", result.id);
    }
    setNewGroupName("");
    setShowNewGroup(false);
  }

  const form = useForm<CustomerFormValues>({
    resolver: zodResolver(schema) as Resolver<CustomerFormValues>,
    defaultValues:
      mode === "create"
        ? {
            name: "",
            phone: "",
            languagePreference: "fr",
            address: "",
            notes: "",
            customerGroupId: "",
          }
        : {
            name: defaultValues?.name ?? "",
            languagePreference: defaultValues?.languagePreference ?? "fr",
            address: defaultValues?.address ?? "",
            notes: defaultValues?.notes ?? "",
            customerGroupId: defaultValues?.customerGroupId ?? "",
          },
  });

  function onSubmit(data: CustomerFormValues) {
    setServerError(null);
    startTransition(async () => {
      const result =
        mode === "create"
          ? await createCustomer({
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
      } else if (result && "redirect" in result && result.redirect) {
        router.push(result.redirect);
        router.refresh();
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <Field label={t("customers.name")} required error={form.formState.errors.name?.message}>
        <input
          {...form.register("name")}
          type="text"
          placeholder={t("customers.customerNamePlaceholder")}
          className={inputCls}
          disabled={isPending}
        />
      </Field>

      {/* Phone — create mode only */}
      {mode === "create" && (
        <Field
          label={t("customers.phone")}
          required
          error={form.formState.errors.phone?.message}
        >
          <input
            {...form.register("phone")}
            type="tel"
            maxLength={10}
            placeholder="0555123456"
            className={inputCls}
            disabled={isPending}
          />
        </Field>
      )}

      {/* Address */}
      <Field label={t("customers.address")} error={form.formState.errors.address?.message}>
        <input
          {...form.register("address")}
          type="text"
          placeholder={t("customers.addressPlaceholder")}
          className={inputCls}
          disabled={isPending}
        />
      </Field>

      {/* Language */}
      <Field
        label={t("customers.conversationLanguage")}
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
      <Field label={t("customers.customerGroup")}>
        <div className="flex gap-2">
          <select
            {...form.register("customerGroupId")}
            className={cn(inputCls, "flex-1")}
            disabled={isPending}
          >
            <option value="">{t("customers.noGroup")}</option>
            {groups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setShowNewGroup(true)}
            disabled={isPending}
            className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
            title={t("customers.newGroup")}
          >
            <Plus className="h-4 w-4" />
          </button>
          <ManageGroupsDialog
            groups={groups}
            onUpdated={(updated) => setGroups(updated)}
          />
        </div>
        {/* Inline new group form */}
        {showNewGroup && (
          <div className="mt-2 flex gap-2 items-center rounded-md border border-input bg-background p-2">
            <input
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCreateGroup();
                if (e.key === "Escape") {
                  setShowNewGroup(false);
                  setNewGroupName("");
                }
              }}
              placeholder={t("customers.groupName")}
              className="flex-1 bg-transparent px-2 py-1 text-sm outline-none placeholder:text-muted-foreground/60"
              autoFocus
              disabled={creatingGroup}
            />
            <button
              type="button"
              onClick={handleCreateGroup}
              disabled={creatingGroup || !newGroupName.trim()}
              className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-50 transition-all"
            >
              {creatingGroup && <Loader2 className="h-3 w-3 animate-spin" />}
              {t("common.create")}
            </button>
            <button
              type="button"
              onClick={() => { setShowNewGroup(false); setNewGroupName(""); }}
              className="text-xs text-muted-foreground hover:text-foreground px-1.5 py-1"
            >
              {t("common.cancel")}
            </button>
          </div>
        )}
      </Field>

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
