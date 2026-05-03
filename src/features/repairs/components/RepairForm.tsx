"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2, Loader2, Save } from "lucide-react";
import { createRepairTicketSchema, type CreateRepairTicketInput } from "../schemas/repair.schema";
import { createRepairTicket } from "../actions/repair.actions";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */ 
export function RepairForm({ customers, technicians, catalog }: any) {
  const router = useRouter();
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
        setError(res.error);
        setIsSubmitting(false);
      } else {
        router.push(`/dashboard/repairs/${res.id}`);
      }
    } catch (e) {
      setError("Une erreur inattendue est survenue");
      setIsSubmitting(false);
    }
  };

  const watchCustomer = form.watch("customerId");
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ 
  const customerAssets = customers.find((c: any) => c.id === watchCustomer)?.assets || [];

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {error && (
        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* 1. Client & Appareil */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold text-lg">1. Client</h3>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Sélectionner un client *</label>
            <select
              {...form.register("customerId")}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="">Choisir un client...</option>
              {customers.map((c: { id: string, name: string, phones?: Array<{ phoneNumber: string }> }) => (
                <option key={c.id} value={c.id}>{c.name} {c.phones?.[0] ? `(${c.phones[0].phoneNumber})` : ""}</option>
              ))}
            </select>
            {form.formState.errors.customerId && (
              <p className="text-xs text-destructive mt-1">{form.formState.errors.customerId.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold text-lg">2. Appareil</h3>
          
          {customerAssets.length > 0 && (
            <div>
              <label className="text-sm font-medium mb-1.5 block">Appareil existant</label>
              <select
                {...form.register("customerDeviceId")}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="">-- Saisir un nouvel appareil --</option>
                {customerAssets.map((a: { id: string, customBrand: string | null, customModel: string | null, imeiSerial: string | null }) => (
                  <option key={a.id} value={a.id}>
                    {a.customBrand} {a.customModel} {a.imeiSerial ? `(IMEI: ${a.imeiSerial})` : ""}
                  </option>
                ))}
              </select>
            </div>
          )}

          {!form.watch("customerDeviceId") && (
            <div className="grid grid-cols-2 gap-3 p-4 bg-muted/30 rounded-lg border border-border">
              <div className="col-span-2">
                <label className="text-sm font-medium mb-1.5 block">Marque *</label>
                <input
                  type="text"
                  {...form.register("customDeviceBrand")}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Ex: Apple, Samsung..."
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium mb-1.5 block">Modèle *</label>
                <input
                  type="text"
                  {...form.register("customDeviceModel")}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Ex: iPhone 13, Galaxy S21..."
                />
                {form.formState.errors.customDeviceModel && (
                  <p className="text-xs text-destructive mt-1">{form.formState.errors.customDeviceModel.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Couleur</label>
                <input
                  type="text"
                  {...form.register("deviceColor")}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Mot de passe / Code</label>
                <input
                  type="text"
                  {...form.register("imeiSerial")}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Code de déverrouillage"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Problèmes */}
      <div className="space-y-4 rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">3. Problèmes signalés *</h3>
          <button
            type="button"
            onClick={() => append({ problemText: "" })}
            className="text-sm flex items-center gap-1 text-primary hover:underline font-medium"
          >
            <Plus className="h-4 w-4" /> Ajouter un problème
          </button>
        </div>
        
        <div className="space-y-3">
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <div className="flex-1">
                <input
                  {...form.register(`problems.${index}.problemText`)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder={`Description du problème ${index + 1}...`}
                />
                {form.formState.errors.problems?.[index]?.problemText && (
                  <p className="text-xs text-destructive mt-1">
                    {form.formState.errors.problems[index]?.problemText?.message}
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
          <p className="text-xs text-destructive mt-1">{form.formState.errors.problems.message}</p>
        )}
      </div>

      {/* 4. Assignation & Priorité */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold text-lg">4. Suivi</h3>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Assigner à un technicien</label>
            <select
              {...form.register("assignedTechnicianId")}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="">-- Ne pas assigner dans l&apos;immédiat --</option>
              {technicians.map((t: { id: string, name: string }) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Priorité</label>
            <select
              {...form.register("priority")}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="normal">Normale</option>
              <option value="rush">Urgent (Prioritaire)</option>
            </select>
          </div>
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold text-lg">5. Notes (Optionnel)</h3>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Notes internes (visibles par l&apos;équipe)</label>
            <textarea
              {...form.register("internalNotes")}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="Ex: Vérifier le connecteur de charge..."
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="h-10 px-4 py-2 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-10 px-4 py-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Créer le ticket
        </button>
      </div>
    </form>
  );
}
