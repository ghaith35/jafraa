"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { cn } from "@/lib/utils";
import { createAssetSchema, DEVICE_TYPES, type CreateAssetInput } from "../schemas/asset.schema";
import { createAsset } from "../actions/asset.actions";

interface Props {
  customerId: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50";

function Field({
  label,
  error,
  children,
  half,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  half?: boolean;
}) {
  return (
    <div className={half ? "" : "col-span-2"}>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function AssetForm({ customerId, onSuccess, onCancel }: Props) {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<CreateAssetInput>({
    resolver: zodResolver(createAssetSchema),
    defaultValues: {
      deviceTypeName: undefined,
      customBrand: "",
      customModel: "",
      color: "",
      storage: "",
      imeiSerial: "",
      notes: "",
    },
  });

  function onSubmit(data: CreateAssetInput) {
    setServerError(null);
    startTransition(async () => {
      const result = await createAsset(customerId, data);
      if (result?.error) {
        setServerError(result.error);
      } else {
        form.reset();
        onSuccess();
      }
    });
  }

  const errors = form.formState.errors;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="rounded-lg border border-border bg-card p-4 space-y-4"
    >
      <p className="text-sm font-semibold text-foreground">Ajouter un appareil</p>

      <div className="grid grid-cols-2 gap-3">
        {/* Device type */}
        <Field label="Type d'appareil" error={errors.deviceTypeName?.message}>
          <select
            {...form.register("deviceTypeName")}
            className={inputCls}
            disabled={isPending}
          >
            <option value="">— Sélectionner —</option>
            {DEVICE_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>

        {/* Brand */}
        <Field label="Marque" error={errors.customBrand?.message} half>
          <input
            {...form.register("customBrand")}
            type="text"
            placeholder="Apple, Samsung…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Model */}
        <Field label="Modèle" error={errors.customModel?.message} half>
          <input
            {...form.register("customModel")}
            type="text"
            placeholder="iPhone 13, Galaxy S22…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Color */}
        <Field label="Couleur" half>
          <input
            {...form.register("color")}
            type="text"
            placeholder="Noir, Blanc…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* Storage */}
        <Field label="Stockage / RAM" half>
          <input
            {...form.register("storage")}
            type="text"
            placeholder="128 Go, 8 Go RAM…"
            className={inputCls}
            disabled={isPending}
          />
        </Field>

        {/* IMEI */}
        <Field label="IMEI / Numéro de série">
          <input
            {...form.register("imeiSerial")}
            type="text"
            placeholder="356789102345678"
            className={cn(inputCls, "font-mono")}
            disabled={isPending}
          />
        </Field>

        {/* Notes */}
        <Field label="Notes">
          <textarea
            {...form.register("notes")}
            rows={2}
            placeholder="État de l'appareil, accessoires inclus…"
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

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {isPending ? "Ajout en cours…" : "Ajouter l'appareil"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isPending}
          className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}
