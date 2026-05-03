"use client";

import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import {
  createPurchaseInvoiceSchema,
  type CreatePurchaseInvoiceInput,
} from "../schemas/purchase.schema";
import { createPurchaseInvoice } from "../actions/purchase.actions";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Supplier { id: string; name: string; }
interface Item { id: string; name: string; sku: string; }

interface Props {
  suppliers: Supplier[];
  products: Item[];
  parts: Item[];
}

// ─── Shared Styles ───────────────────────────────────────────────────────────

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

export function PurchaseForm({ suppliers, products, parts }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<CreatePurchaseInvoiceInput>({
    resolver: zodResolver(createPurchaseInvoiceSchema),
    defaultValues: {
      supplierId: "",
      invoiceNumber: "",
      invoiceDate: new Date().toISOString().split("T")[0],
      amountPaid: 0,
      notes: "",
      lines: [
        {
          itemType: "product",
          productId: "",
          partId: "",
          quantity: 1,
          unitCost: 0,
          totalCost: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "lines",
  });

  // Watch lines to auto-calculate totals
  const lines = useWatch({ control: form.control, name: "lines" });
  const amountPaid = useWatch({ control: form.control, name: "amountPaid" }) || 0;

  const totalAmount = lines.reduce((acc, line) => acc + (line.totalCost || 0), 0);
  const remaining = Math.max(0, totalAmount - amountPaid);

  function onSubmit(data: CreatePurchaseInvoiceInput) {
    setServerError(null);
    startTransition(async () => {
      const result = await createPurchaseInvoice(data);
      if ("error" in result) {
        setServerError(result.error);
      } else {
        router.push("/dashboard/inventory/purchases");
      }
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {/* ─── Header Info ─── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Fournisseur" required error={form.formState.errors.supplierId?.message}>
          <select {...form.register("supplierId")} className={inputCls} disabled={isPending}>
            <option value="">Sélectionnez un fournisseur</option>
            {suppliers.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </Field>

        <Field label="Numéro de facture" required error={form.formState.errors.invoiceNumber?.message}>
          <input
            {...form.register("invoiceNumber")}
            type="text"
            placeholder="INV-2026-..."
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        <Field label="Date de facturation" required error={form.formState.errors.invoiceDate?.message}>
          <input
            {...form.register("invoiceDate")}
            type="date"
            className={inputCls}
            disabled={isPending}
          />
        </Field>
      </div>

      {/* ─── Lines ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Articles</h3>
          <button
            type="button"
            onClick={() =>
              append({
                itemType: "product",
                productId: "",
                partId: "",
                quantity: 1,
                unitCost: 0,
                totalCost: 0,
              })
            }
            disabled={isPending}
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
          >
            <Plus className="h-4 w-4" />
            Ajouter une ligne
          </button>
        </div>

        {form.formState.errors.lines?.root?.message && (
          <p className="text-sm text-destructive">{form.formState.errors.lines.root.message}</p>
        )}

        <div className="space-y-3">
          {fields.map((field, index) => {
            const itemType = lines[index]?.itemType;
            const qty = lines[index]?.quantity || 0;
            const unitCost = lines[index]?.unitCost || 0;
            
            // Auto calculate total cost when qty or unitCost changes
            // Note: we just display it, but user could override if needed. For simplicity we enforce standard math.
            const calculatedTotal = qty * unitCost;
            if (lines[index]?.totalCost !== calculatedTotal) {
               form.setValue(`lines.${index}.totalCost`, calculatedTotal, { shouldValidate: true });
            }

            return (
              <div key={field.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-lg border border-border bg-muted/20">
                
                <div className="w-full sm:w-auto">
                  <select
                    {...form.register(`lines.${index}.itemType`)}
                    className={cn(inputCls, "w-full sm:w-32")}
                    disabled={isPending}
                    onChange={(e) => {
                      // Reset IDs when type changes
                      form.setValue(`lines.${index}.productId`, "");
                      form.setValue(`lines.${index}.partId`, "");
                      form.setValue(`lines.${index}.itemType`, e.target.value as "product" | "part");
                    }}
                  >
                    <option value="product">Produit</option>
                    <option value="part">Pièce</option>
                  </select>
                </div>

                <div className="flex-1 w-full">
                  {itemType === "product" ? (
                    <select
                      {...form.register(`lines.${index}.productId`)}
                      className={inputCls}
                      disabled={isPending}
                    >
                      <option value="">Sélectionnez un produit...</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>[{p.sku}] {p.name}</option>
                      ))}
                    </select>
                  ) : (
                    <select
                      {...form.register(`lines.${index}.partId`)}
                      className={inputCls}
                      disabled={isPending}
                    >
                      <option value="">Sélectionnez une pièce...</option>
                      {parts.map((p) => (
                        <option key={p.id} value={p.id}>[{p.sku}] {p.name}</option>
                      ))}
                    </select>
                  )}
                  {form.formState.errors.lines?.[index]?.productId && (
                     <p className="mt-1 text-[10px] text-destructive">{form.formState.errors.lines[index]?.productId?.message}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="w-20">
                    <input
                      {...form.register(`lines.${index}.quantity`, { valueAsNumber: true })}
                      type="number"
                      min="1"
                      placeholder="Qté"
                      className={inputCls}
                      disabled={isPending}
                    />
                  </div>
                  <span className="text-muted-foreground text-sm">x</span>
                  <div className="w-28">
                    <input
                      {...form.register(`lines.${index}.unitCost`, { valueAsNumber: true })}
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="Prix unit."
                      className={inputCls}
                      disabled={isPending}
                    />
                  </div>
                  <span className="text-muted-foreground text-sm">=</span>
                  <div className="w-28 font-medium text-sm text-right px-2">
                    {formatCurrency(calculatedTotal)}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => remove(index)}
                  disabled={isPending || fields.length === 1}
                  className="p-2 text-muted-foreground hover:text-destructive disabled:opacity-30 transition-colors"
                  title="Supprimer la ligne"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Footer / Totals ─── */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-end border-t border-border pt-6">
        <div className="w-full sm:w-1/2">
          <Field label="Notes" error={form.formState.errors.notes?.message}>
            <textarea
              {...form.register("notes")}
              rows={2}
              placeholder="Notes optionnelles..."
              className={cn(inputCls, "resize-y")}
              disabled={isPending}
            />
          </Field>
        </div>

        <div className="w-full sm:w-72 space-y-3 bg-muted/30 p-4 rounded-xl border border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Facture:</span>
            <span className="font-semibold text-foreground">{formatCurrency(totalAmount)}</span>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Montant payé:</span>
            <div className="w-32">
              <input
                {...form.register("amountPaid", { valueAsNumber: true })}
                type="number"
                min="0"
                step="0.01"
                className={cn(inputCls, "py-1.5 text-right")}
                disabled={isPending}
              />
            </div>
          </div>
          {form.formState.errors.amountPaid && (
            <p className="text-xs text-destructive text-right">{form.formState.errors.amountPaid.message}</p>
          )}

          <div className="flex justify-between text-sm pt-2 border-t border-border/50">
            <span className="font-medium text-foreground">Reste à payer:</span>
            <span className={cn("font-bold", remaining > 0 ? "text-destructive" : "text-emerald-600")}>
              {formatCurrency(remaining)}
            </span>
          </div>
        </div>
      </div>

      {serverError && (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive text-center">
          {serverError}
        </p>
      )}

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={() => router.push("/dashboard/inventory/purchases")}
          disabled={isPending}
          className="text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-50"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {isPending ? "Enregistrement..." : "Enregistrer l'achat"}
        </button>
      </div>
    </form>
  );
}
