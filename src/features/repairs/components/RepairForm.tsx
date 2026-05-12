"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2, Loader2, Save } from "lucide-react";
import { createRepairTicketSchema, type CreateRepairTicketInput } from "../schemas/repair.schema";
import { createRepairTicket } from "../actions/repair.actions";
import { useRepairI18n } from "./RepairLanguageSwitcher";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RepairForm({ customers, technicians }: any) {
  const router = useRouter();
  const { locale, dir, t, trMessage } = useRepairI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CreateRepairTicketInput>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(createRepairTicketSchema as any),
    defaultValues: {
      customerId: "",
      customerDeviceId: "",
      deviceCategoryId: "",
      deviceBrandId: "",
      deviceFamilyId: "",
      customDeviceBrand: "",
      customDeviceModel: "",
      deviceColor: "",
      deviceStorageRam: "",
      imeiSerial: "",
      priority: "normal",
      assignedTechnicianId: "",
      diagnosisNote: "",
      internalNotes: "",
      customerNotes: "",
      problems: [{ problemText: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "problems",
  });

  const onSubmit = async (data: CreateRepairTicketInput) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await createRepairTicket(data);
      if ("error" in res) {
        setError(trMessage(res.error));
        setIsSubmitting(false);
      } else {
        router.push(`/dashboard/repairs/${res.id}`);
      }
    } catch {
      setError(t("form_unexpectedError"));
      setIsSubmitting(false);
    }
  };

  // eslint-disable-next-line react-hooks/incompatible-library
  const watchCustomer = form.watch("customerId");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customerAssets = customers.find((c: any) => c.id === watchCustomer)?.assets || [];

  return (
    <div dir={dir} lang={locale} className="space-y-4">

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {error && (
          <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-lg">{t("form_sectionCustomer")}</h3>
            <div>
              <label className="text-sm font-medium mb-1.5 block">{t("form_selectCustomer")}</label>
              <select
                {...form.register("customerId")}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="">{t("form_chooseCustomer")}</option>
                {customers.map((c: { id: string, name: string, phones?: Array<{ phoneNumber: string }> }) => (
                  <option key={c.id} value={c.id}>{c.name} {c.phones?.[0] ? `(${c.phones[0].phoneNumber})` : ""}</option>
                ))}
              </select>
              {form.formState.errors.customerId && (
                <p className="text-xs text-destructive mt-1">{trMessage(form.formState.errors.customerId.message)}</p>
              )}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-lg">{t("form_sectionDevice")}</h3>
            
            {customerAssets.length > 0 && (
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t("form_existingDevice")}</label>
                <select
                  {...form.register("customerDeviceId")}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">{t("form_newDeviceOption")}</option>
                  {customerAssets.map((a: { id: string, customBrand: string | null, customModel: string | null, imeiSerial: string | null }) => (
                    <option key={a.id} value={a.id}>
                      {a.customBrand} {a.customModel} {a.imeiSerial ? `(IMEI: ${a.imeiSerial})` : ""}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {!form.watch("customerDeviceId") && (
              <div className="grid grid-cols-1 gap-3 rounded-lg border border-border bg-muted/30 p-4 sm:grid-cols-2">
                <div className="col-span-2">
                  <label className="text-sm font-medium mb-1.5 block">{t("form_brand")}</label>
                  <input
                    type="text"
                    {...form.register("customDeviceBrand")}
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder={t("form_brandPlaceholder")}
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium mb-1.5 block">{t("form_model")}</label>
                  <input
                    type="text"
                    {...form.register("customDeviceModel")}
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder={t("form_modelPlaceholder")}
                  />
                  {form.formState.errors.customDeviceModel && (
                    <p className="text-xs text-destructive mt-1">{trMessage(form.formState.errors.customDeviceModel.message)}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("color")}</label>
                  <input
                    type="text"
                    {...form.register("deviceColor")}
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">{t("form_unlockCode")}</label>
                  <input
                    type="text"
                    {...form.register("imeiSerial")}
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder={t("form_unlockCodePlaceholder")}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-lg">{t("form_sectionProblems")}</h3>
            <button
              type="button"
              onClick={() => append({ problemText: "" })}
              className="text-sm flex items-center gap-1 text-primary hover:underline font-medium"
            >
              <Plus className="h-4 w-4" /> {t("form_addProblem")}
            </button>
          </div>
          
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2">
                <div className="flex-1">
                  <input
                    {...form.register(`problems.${index}.problemText`)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder={t("form_problemPlaceholder", { index: index + 1 })}
                  />
                  {form.formState.errors.problems?.[index]?.problemText && (
                    <p className="text-xs text-destructive mt-1">
                      {trMessage(form.formState.errors.problems[index]?.problemText?.message)}
                    </p>
                  )}
                </div>
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="h-9 w-9 flex items-center justify-center rounded-md border border-input bg-transparent text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
          {form.formState.errors.problems && (
            <p className="text-xs text-destructive mt-1">{trMessage(form.formState.errors.problems.message)}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-lg">{t("form_sectionTracking")}</h3>
            <div>
              <label className="text-sm font-medium mb-1.5 block">{t("form_assignTechnician")}</label>
              <div className="space-y-1 rounded-lg border border-input bg-transparent p-2">
                {technicians.map((technician: { id: string, name: string }) => {
                  const techIds = form.watch("technicianIds") ?? [];
                  const leadId = form.watch("assignedTechnicianId");
                  const isSelected = techIds.includes(technician.id);
                  const isLead = leadId === technician.id;
                  return (
                    <label
                      key={technician.id}
                      className={`flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition hover:bg-muted/60 ${isSelected ? "bg-primary/5 font-medium" : ""}`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {
                          const next = isSelected
                            ? techIds.filter((id: string) => id !== technician.id)
                            : [...techIds, technician.id];
                          form.setValue("technicianIds", next);
                          if (!isLead && !isSelected && !leadId) {
                            form.setValue("assignedTechnicianId", technician.id);
                          }
                          if (isLead && isSelected) {
                            const remaining = next.filter((id: string) => id !== technician.id);
                            form.setValue("assignedTechnicianId", remaining[0] ?? "");
                          }
                        }}
                        className="h-4 w-4 accent-primary rounded"
                      />
                      <span className="flex-1">{technician.name}</span>
                      {isLead && (
                        <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">Lead</span>
                      )}
                      {isSelected && !isLead && (
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); form.setValue("assignedTechnicianId", technician.id); }}
                          className="text-[10px] font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          Définir lead
                        </button>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">{t("form_priority")}</label>
              <select
                {...form.register("priority")}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="normal">{t("form_priorityNormal")}</option>
                <option value="rush">{t("form_priorityRush")}</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-lg">{t("form_sectionNotes")}</h3>
            <div>
              <label className="text-sm font-medium mb-1.5 block">{t("form_internalNotes")}</label>
              <textarea
                {...form.register("internalNotes")}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                placeholder={t("form_internalNotesPlaceholder")}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="h-10 px-4 py-2 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {t("cancel")}
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-10 px-4 py-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            {t("form_createTicket")}
          </button>
        </div>
      </form>
    </div>
  );
}
