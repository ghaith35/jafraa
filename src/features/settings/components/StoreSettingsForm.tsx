"use client";

import { useState, useTransition } from "react";
import { Save, CheckCircle2, Building2, Wrench, ShoppingCart, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { saveStoreProfile, saveStoreSettings } from "../actions/settings.actions";
import type { StoreProfileData, StoreSettingsData } from "../actions/settings.actions";

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="px-5 py-4 border-b border-border bg-muted/30 flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <div className="p-5 space-y-4">{children}</div>
    </div>
  );
}

// ─── Field row ────────────────────────────────────────────────────────────────

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-start">
      <div className="sm:text-right pt-1.5">
        <label className="text-sm font-medium text-foreground">{label}</label>
        {hint && <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>}
      </div>
      <div className="sm:col-span-2">{children}</div>
    </div>
  );
}

// ─── Shared input class ───────────────────────────────────────────────────────

const INPUT =
  "w-full h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50";

// ─── Store profile form ───────────────────────────────────────────────────────

function StoreProfileForm({
  initial,
  canEdit,
}: {
  initial: StoreProfileData;
  canEdit: boolean;
}) {
  const [form, setForm] = useState<StoreProfileData>(initial);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        await saveStoreProfile(form);
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Erreur");
      }
    });
  };

  const set = (key: keyof StoreProfileData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="Nom de la boutique" hint="Affiché sur les documents">
        <input
          className={INPUT}
          value={form.name}
          onChange={set("name")}
          disabled={!canEdit}
          required
        />
      </Field>
      <Field label="Adresse">
        <input
          className={INPUT}
          value={form.address ?? ""}
          onChange={set("address")}
          disabled={!canEdit}
          placeholder="Adresse complète"
        />
      </Field>
      <Field label="Téléphone">
        <input
          className={INPUT}
          value={form.phone ?? ""}
          onChange={set("phone")}
          disabled={!canEdit}
          placeholder="05XX XXX XXX"
        />
      </Field>
      <Field label="Email">
        <input
          type="email"
          className={INPUT}
          value={form.email ?? ""}
          onChange={set("email")}
          disabled={!canEdit}
          placeholder="boutique@exemple.com"
        />
      </Field>
      <Field label="Préfixe" hint="Utilisé dans les N° de documents — non modifiable">
        <input className={INPUT} value={form.prefix} disabled readOnly />
      </Field>

      {canEdit && (
        <div className="flex items-center justify-end gap-3 pt-2">
          {error && <p className="text-xs text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={isPending}
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
              saved
                ? "bg-emerald-100 text-emerald-700"
                : "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            )}
          >
            {saved ? (
              <><CheckCircle2 className="h-4 w-4" /> Enregistré</>
            ) : (
              <><Save className="h-4 w-4" /> Enregistrer</>
            )}
          </button>
        </div>
      )}
    </form>
  );
}

// ─── Repair & operational settings form ──────────────────────────────────────

function OperationalSettingsForm({
  initial,
  canEdit,
}: {
  initial: StoreSettingsData;
  canEdit: boolean;
}) {
  const [form, setForm] = useState({
    warrantyDaysDefault: initial.warrantyDaysDefault,
    abandonedDeviceNoticeDays: initial.abandonedDeviceNoticeDays,
    abandonedDeviceThresholdDays: initial.abandonedDeviceThresholdDays,
    pickupOverdueDays: initial.pickupOverdueDays,
    lowStockDefaultThreshold: initial.lowStockDefaultThreshold,
    cashierDiscountThresholdPct: initial.cashierDiscountThresholdPct,
    refundApprovalThreshold: initial.refundApprovalThreshold,
  });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      try {
        await saveStoreSettings(form);
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Erreur");
      }
    });
  };

  const setNum =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: Number(e.target.value) }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Repair section */}
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wide flex items-center gap-1.5">
          <Wrench className="h-3.5 w-3.5" /> Réparations
        </p>
        <Field label="Garantie par défaut" hint="Jours de garantie sur chaque réparation">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              max={365}
              className={cn(INPUT, "max-w-[100px]")}
              value={form.warrantyDaysDefault}
              onChange={setNum("warrantyDaysDefault")}
              disabled={!canEdit}
            />
            <span className="text-sm text-muted-foreground">jours</span>
          </div>
        </Field>
        <Field label="Délai avertissement abandon" hint="Jours avant notification d'abandon">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={90}
              className={cn(INPUT, "max-w-[100px]")}
              value={form.abandonedDeviceNoticeDays}
              onChange={setNum("abandonedDeviceNoticeDays")}
              disabled={!canEdit}
            />
            <span className="text-sm text-muted-foreground">jours</span>
          </div>
        </Field>
        <Field label="Seuil abandon définitif" hint="Jours avant classement abandonné">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={180}
              className={cn(INPUT, "max-w-[100px]")}
              value={form.abandonedDeviceThresholdDays}
              onChange={setNum("abandonedDeviceThresholdDays")}
              disabled={!canEdit}
            />
            <span className="text-sm text-muted-foreground">jours</span>
          </div>
        </Field>
        <Field label="Délai retrait en retard" hint="Jours depuis prêt avant alerte">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={60}
              className={cn(INPUT, "max-w-[100px]")}
              value={form.pickupOverdueDays}
              onChange={setNum("pickupOverdueDays")}
              disabled={!canEdit}
            />
            <span className="text-sm text-muted-foreground">jours</span>
          </div>
        </Field>
      </div>

      <div className="h-px bg-border" />

      {/* POS / cash section */}
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wide flex items-center gap-1.5">
          <ShoppingCart className="h-3.5 w-3.5" /> Caisse &amp; Ventes
        </p>
        <Field label="Remise max caissier" hint="Au-delà, approbation Manager requise">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              max={100}
              step={0.5}
              className={cn(INPUT, "max-w-[100px]")}
              value={form.cashierDiscountThresholdPct}
              onChange={setNum("cashierDiscountThresholdPct")}
              disabled={!canEdit}
            />
            <span className="text-sm text-muted-foreground">%</span>
          </div>
        </Field>
        <Field label="Seuil approbation remboursement" hint="Montant au-delà duquel le Manager doit valider">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              className={cn(INPUT, "max-w-[140px]")}
              value={form.refundApprovalThreshold}
              onChange={setNum("refundApprovalThreshold")}
              disabled={!canEdit}
            />
            <span className="text-sm text-muted-foreground">DZD</span>
          </div>
        </Field>
        <Field label="Seuil stock critique par défaut" hint="Quantité en dessous de laquelle une alerte est affichée">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              className={cn(INPUT, "max-w-[100px]")}
              value={form.lowStockDefaultThreshold}
              onChange={setNum("lowStockDefaultThreshold")}
              disabled={!canEdit}
            />
            <span className="text-sm text-muted-foreground">unités</span>
          </div>
        </Field>
      </div>

      {canEdit && (
        <div className="flex items-center justify-end gap-3 pt-2 border-t">
          {error && <p className="text-xs text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={isPending}
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
              saved
                ? "bg-emerald-100 text-emerald-700"
                : "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            )}
          >
            {saved ? (
              <><CheckCircle2 className="h-4 w-4" /> Enregistré</>
            ) : (
              <><Save className="h-4 w-4" /> Enregistrer</>
            )}
          </button>
        </div>
      )}
    </form>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

interface Props {
  profile: StoreProfileData;
  settings: StoreSettingsData;
  canEdit: boolean;
}

export function StoreSettingsForm({ profile, settings, canEdit }: Props) {
  return (
    <div className="space-y-6">
      {!canEdit && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 px-4 py-3 flex items-center gap-2 text-sm text-amber-800 dark:text-amber-300">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          Lecture seule. Seul un Administrateur peut modifier ces paramètres.
        </div>
      )}

      <Section title="Profil de la boutique" icon={<Building2 className="h-4 w-4" />}>
        <StoreProfileForm initial={profile} canEdit={canEdit} />
      </Section>

      <Section title="Paramètres opérationnels" icon={<Wrench className="h-4 w-4" />}>
        <OperationalSettingsForm initial={settings} canEdit={canEdit} />
      </Section>
    </div>
  );
}
