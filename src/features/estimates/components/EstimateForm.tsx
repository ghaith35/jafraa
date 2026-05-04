"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2, Loader2, Save } from "lucide-react";
import { createEstimateSchema, type CreateEstimateInput } from "../schemas/estimate.schema";
import { createEstimate } from "../actions/estimate.actions";

export function EstimateForm({ ticketId, onSuccess }: { ticketId: string, onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(createEstimateSchema) as any,
    defaultValues: {
      repairTicketId: ticketId,
      customerNote: "",
      internalNote: "",
      discountAmount: 0,
      lines: [{ lineType: "labor", description: "", quantity: 1, unitPrice: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "lines",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await createEstimate(data as CreateEstimateInput);
      if ("error" in res) {
        setError(res.error);
        setIsSubmitting(false);
      } else {
        onSuccess();
      }
    } catch {
      setError("Une erreur inattendue est survenue");
      setIsSubmitting(false);
    }
  };

  // React Compiler memoization warning bypass (rule react-hooks/incompatible-library)
  // eslint-disable-next-line react-hooks/incompatible-library
  const watchLines = form.watch("lines");
  // eslint-disable-next-line react-hooks/incompatible-library
  const watchDiscount = form.watch("discountAmount") || 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subtotal = watchLines.reduce((acc, line: any) => acc + (Number(line.quantity || 0) * Number(line.unitPrice || 0)), 0);
  const total = subtotal - Number(watchDiscount || 0);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Lignes du devis */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-sm">Lignes de devis</h4>
          <button
            type="button"
            onClick={() => append({ lineType: "custom", description: "", quantity: 1, unitPrice: 0 })}
            className="text-xs flex items-center gap-1 text-primary hover:underline font-medium"
          >
            <Plus className="h-3 w-3" /> Ajouter une ligne
          </button>
        </div>

        <div className="border rounded-md divide-y overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-3 py-2 w-32">Type</th>
                <th className="px-3 py-2">Description</th>
                <th className="px-3 py-2 w-24">Qté</th>
                <th className="px-3 py-2 w-32">Prix unitaire</th>
                <th className="px-3 py-2 w-32 text-right">Total</th>
                <th className="px-3 py-2 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {fields.map((field, index) => {
                const lineQty = Number(watchLines[index]?.quantity || 0);
                const linePrice = Number(watchLines[index]?.unitPrice || 0);
                const lineTotal = lineQty * linePrice;

                return (
                  <tr key={field.id} className="bg-background">
                    <td className="p-2">
                      <select
                        {...form.register(`lines.${index}.lineType`)}
                        className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="labor">Main d&apos;œuvre</option>
                        <option value="part">Pièce</option>
                        <option value="service">Service</option>
                        <option value="custom">Autre</option>
                      </select>
                    </td>
                    <td className="p-2">
                      <input
                        {...form.register(`lines.${index}.description`)}
                        className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        placeholder="Description..."
                      />
                      {form.formState.errors.lines?.[index]?.description && (
                        <p className="text-[10px] text-destructive mt-1">{form.formState.errors.lines[index]?.description?.message}</p>
                      )}
                    </td>
                    <td className="p-2">
                      <input
                        type="number"
                        step="0.01"
                        {...form.register(`lines.${index}.quantity`)}
                        className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="number"
                        step="0.01"
                        {...form.register(`lines.${index}.unitPrice`)}
                        className="flex h-8 w-full rounded-md border border-input bg-transparent px-2 py-1 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                    </td>
                    <td className="p-2 text-right font-medium">
                      {lineTotal.toFixed(2)} DZD
                    </td>
                    <td className="p-2 text-center">
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        disabled={fields.length === 1}
                        className="text-destructive hover:bg-destructive/10 p-1.5 rounded disabled:opacity-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Totaux */}
      <div className="flex justify-end">
        <div className="w-64 space-y-3 rounded-lg border bg-muted/20 p-4 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sous-total</span>
            <span>{subtotal.toFixed(2)} DZD</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Remise</span>
            <div className="flex items-center gap-1 w-24">
              <input
                type="number"
                step="0.01"
                {...form.register("discountAmount")}
                className="flex h-7 w-full rounded-md border border-input bg-background px-2 py-1 text-xs shadow-sm text-right focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>
          {form.formState.errors.discountAmount && (
            <p className="text-[10px] text-destructive text-right">{form.formState.errors.discountAmount.message}</p>
          )}
          <div className="flex justify-between border-t pt-3 font-bold text-base">
            <span>Total</span>
            <span>{Math.max(0, total).toFixed(2)} DZD</span>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Note au client</label>
          <textarea
            {...form.register("customerNote")}
            className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="Ex: Garantie de 3 mois sur la pièce..."
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Note interne</label>
          <textarea
            {...form.register("internalNote")}
            className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="Ex: Pièce commandée chez le fournisseur..."
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t">
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-9 px-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Enregistrer le brouillon
        </button>
      </div>
    </form>
  );
}
