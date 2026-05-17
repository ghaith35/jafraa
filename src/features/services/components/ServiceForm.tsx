"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { createService, updateService } from "@/features/inventory/actions/service.actions";
import { createServiceType } from "@/features/services/actions/service-type.actions";
import {
  resolveServiceTypeName,
  getAllowedServiceTypeKeys,
} from "@/features/services/config/service-types";
import type { ServiceTypeRecord } from "@/features/services/actions/service-type.actions";

export interface ServiceFormDeviceCategory {
  id: string;
  key: string;
  nameFr: string;
  nameEn: string | null;
  nameAr: string | null;
}

export interface CustomerGroup {
  id: string;
  name: string;
}

interface Props {
  deviceCategories: ServiceFormDeviceCategory[];
  serviceTypes: ServiceTypeRecord[];
  customerGroups: CustomerGroup[];
  onSuccess?: () => void;
  defaultValues?: {
    id: string;
    nameFr: string;
    nameEn: string | null;
    nameAr: string | null;
    sku: string;
    deviceCategoryIds: string[];
    serviceTypeId: string | null;
    sellingPrice: number;
    basePrice: number | null;
    costPrice: number | null;
    estimatedDurationMinutes: number | null;
    notes: string | null;
    groupPrices: { groupId: string; price: number }[];
  };
}

type DurationUnit = "minutes" | "hours" | "days";

function minutesToDisplay(min: number | null): { value: number; unit: DurationUnit } {
  if (!min || min <= 0) return { value: 0, unit: "minutes" };
  if (min % 1440 === 0) return { value: min / 1440, unit: "days" };
  if (min % 60 === 0) return { value: min / 60, unit: "hours" };
  return { value: min, unit: "minutes" };
}

function displayToMinutes(value: number, unit: DurationUnit): number {
  if (unit === "hours") return value * 60;
  if (unit === "days") return value * 1440;
  return value;
}

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50";
const labelCls = "block space-y-1";
const labelTextCls = "text-xs font-medium text-muted-foreground";
const sectionTitleCls = "text-xs font-semibold uppercase tracking-wider text-muted-foreground";
const dividerCls = "h-px bg-border";

export function ServiceForm({
  deviceCategories,
  serviceTypes: initialServiceTypes,
  customerGroups,
  defaultValues,
  onSuccess,
}: Props) {
  const { t, locale } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // ─── Names ────────────────────────────────────────────────────────────────────
  const [nameFr, setNameFr] = useState(defaultValues?.nameFr ?? "");
  const [nameEn, setNameEn] = useState(defaultValues?.nameEn ?? "");
  const [nameAr, setNameAr] = useState(defaultValues?.nameAr ?? "");
  const [nameLang, setNameLang] = useState<"fr" | "en" | "ar">(
    locale === "ar" ? "ar" : locale === "en" ? "en" : "fr"
  );

  // ─── Classification ───────────────────────────────────────────────────────────
  const [deviceCategoryIds, setDeviceCategoryIds] = useState<string[]>(
    defaultValues?.deviceCategoryIds ?? []
  );
  const [serviceTypes, setServiceTypes] = useState<ServiceTypeRecord[]>(initialServiceTypes);
  const [serviceTypeId, setServiceTypeId] = useState(defaultValues?.serviceTypeId ?? "");

  // Quick-add service type
  const [showNewType, setShowNewType] = useState(false);
  const [newTypeName, setNewTypeName] = useState("");
  const [creatingType, setCreatingType] = useState(false);

  // ─── Pricing ──────────────────────────────────────────────────────────────────
  const [sellingPrice, setSellingPrice] = useState(String(defaultValues?.sellingPrice ?? "0"));
  const [basePrice, setBasePrice] = useState(String(defaultValues?.basePrice ?? ""));
  const [costPrice, setCostPrice] = useState(String(defaultValues?.costPrice ?? ""));

  const [groupPrices, setGroupPrices] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const gp of defaultValues?.groupPrices ?? []) {
      init[gp.groupId] = String(gp.price);
    }
    return init;
  });

  // ─── Duration ─────────────────────────────────────────────────────────────────
  const initDur = minutesToDisplay(defaultValues?.estimatedDurationMinutes ?? null);
  const [durationValue, setDurationValue] = useState(String(initDur.value));
  const [durationUnit, setDurationUnit] = useState<DurationUnit>(initDur.unit);

  // ─── Notes + SKU ─────────────────────────────────────────────────────────────
  const [notes, setNotes] = useState(defaultValues?.notes ?? "");
  const [sku, setSku] = useState(defaultValues?.sku ?? "");

  // ─── Derived: allowed service types based on selected devices ─────────────────
  const selectedKeys = deviceCategoryIds
    .map((id) => deviceCategories.find((d) => d.id === id)?.key)
    .filter(Boolean) as string[];

  // Union of all allowed keys across selected device categories
  const allowedKeys =
    selectedKeys.length === 0
      ? ([] as string[]) // no filter when no device selected → show all
      : Array.from(new Set(selectedKeys.flatMap((k) => getAllowedServiceTypeKeys(k))));

  const filteredServiceTypes =
    allowedKeys.length === 0
      ? serviceTypes
      : serviceTypes.filter((st) => !st.baseKey || allowedKeys.includes(st.baseKey));

  function toggleDevice(id: string) {
    setDeviceCategoryIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    // clear service type if it's no longer valid for any selected device
    if (serviceTypeId) {
      const st = serviceTypes.find((s) => s.id === serviceTypeId);
      if (st?.baseKey) {
        const newIds = deviceCategoryIds.includes(id)
          ? deviceCategoryIds.filter((x) => x !== id)
          : [...deviceCategoryIds, id];
        const newKeys = newIds
          .map((i) => deviceCategories.find((d) => d.id === i)?.key)
          .filter(Boolean) as string[];
        const newAllowed =
          newKeys.length === 0
            ? ([] as string[])
            : Array.from(new Set(newKeys.flatMap((k) => getAllowedServiceTypeKeys(k))));
        if (newAllowed.length > 0 && !newAllowed.includes(st.baseKey)) {
          setServiceTypeId("");
        }
      }
    }
  }

  function deviceLabel(d: ServiceFormDeviceCategory): string {
    if (locale === "ar") return d.nameAr || d.nameFr;
    if (locale === "en") return d.nameEn || d.nameFr;
    return d.nameFr;
  }

  async function handleCreateType() {
    if (!newTypeName.trim()) return;
    setCreatingType(true);
    const result = await createServiceType({ nameFr: newTypeName.trim() });
    setCreatingType(false);
    if ("error" in result) { setError(result.error); return; }
    const newType: ServiceTypeRecord = {
      id: result.id,
      baseKey: null,
      isBase: false,
      nameFr: newTypeName.trim(),
      nameEn: null,
      nameAr: null,
      sortOrder: 99,
      isActive: true,
      serviceCount: 0,
    };
    setServiceTypes((prev) => [...prev, newType]);
    setServiceTypeId(result.id);
    setNewTypeName("");
    setShowNewType(false);
  }

  function handleSubmit() {
    setError(null);
    const selling = parseFloat(sellingPrice);

    // At least one name is required in any language
    const resolvedNameFr = nameFr.trim() || nameEn.trim() || nameAr.trim();
    if (!resolvedNameFr) {
      setError(
        locale === "ar"
          ? "الاسم مطلوب في أي لغة"
          : locale === "en"
          ? "A name is required in at least one language"
          : "Un nom est requis dans au moins une langue"
      );
      return;
    }
    if (isNaN(selling) || selling < 0) { setError("Prix de vente invalide"); return; }

    const dv = parseFloat(durationValue) || 0;
    const estimatedDurationMinutes = displayToMinutes(dv, durationUnit) || undefined;

    const gps = Object.entries(groupPrices)
      .filter(([, v]) => v.trim() !== "" && !isNaN(parseFloat(v)))
      .map(([groupId, v]) => ({ groupId, price: parseFloat(v) }));

    startTransition(async () => {
      const payload = {
        nameFr: resolvedNameFr,
        nameEn: nameEn.trim() || undefined,
        nameAr: nameAr.trim() || undefined,
        sku: sku.trim() || undefined,
        deviceCategoryIds,
        serviceTypeId: serviceTypeId || undefined,
        sellingPrice: selling,
        basePrice: basePrice ? parseFloat(basePrice) : undefined,
        costPrice: costPrice ? parseFloat(costPrice) : undefined,
        estimatedDurationMinutes,
        notes: notes.trim() || undefined,
        groupPrices: gps,
      };

      if (defaultValues?.id) {
        const result = await updateService(defaultValues.id, payload);
        if (result && "error" in result) { setError(result.error); return; }
        if (onSuccess) onSuccess(); else router.push("/dashboard/services");
      } else {
        const result = await createService(payload);
        if ("error" in result) { setError(result.error); return; }
        if (onSuccess) onSuccess(); else router.push("/dashboard/services");
      }
    });
  }

  const saveLabel = locale === "ar" ? "حفظ" : locale === "en" ? "Save" : "Enregistrer";
  const savingLabel = locale === "ar" ? "جارٍ الحفظ…" : locale === "en" ? "Saving…" : "Enregistrement…";
  const cancelLabel = locale === "ar" ? "إلغاء" : locale === "en" ? "Cancel" : "Annuler";

  const unitOptions: { value: DurationUnit; label: string }[] = [
    { value: "minutes", label: locale === "ar" ? "دقيقة" : "min" },
    { value: "hours",   label: locale === "ar" ? "ساعة" : "h" },
    { value: "days",    label: locale === "ar" ? "يوم" : locale === "en" ? "day" : "jour" },
  ];

  return (
    <div className="space-y-5">

      {/* ── Names ─────────────────────────────────────────────────────────── */}
      <div className="space-y-2">
        {/* Language tab bar */}
        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 p-0.5 w-fit">
          {(["fr", "en", "ar"] as const).map((lang) => {
            const hasValue = lang === "fr" ? !!nameFr.trim() : lang === "en" ? !!nameEn.trim() : !!nameAr.trim();
            const label = lang === "fr" ? "FR" : lang === "en" ? "EN" : "AR";
            return (
              <button
                key={lang}
                type="button"
                onClick={() => setNameLang(lang)}
                disabled={isPending}
                className={cn(
                  "relative inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold transition-colors disabled:opacity-50",
                  nameLang === lang
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
                {hasValue && nameLang !== lang && (
                  <span className="absolute top-0.5 right-0.5 h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active language input */}
        {nameLang === "fr" && (
          <input
            key="fr"
            className={inputCls}
            value={nameFr}
            onChange={(e) => setNameFr(e.target.value)}
            placeholder={t("services.nameFrPlaceholder")}
            disabled={isPending}
            dir="ltr"
            autoFocus
          />
        )}
        {nameLang === "en" && (
          <input
            key="en"
            className={inputCls}
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
            placeholder={t("services.nameEnPlaceholder")}
            disabled={isPending}
            dir="ltr"
            autoFocus
          />
        )}
        {nameLang === "ar" && (
          <input
            key="ar"
            className={inputCls}
            value={nameAr}
            onChange={(e) => setNameAr(e.target.value)}
            placeholder={t("services.nameArPlaceholder")}
            disabled={isPending}
            dir="rtl"
            autoFocus
          />
        )}
        <p className="text-[11px] text-muted-foreground">
          {locale === "ar"
            ? "اسم واحد على الأقل مطلوب — باقي اللغات اختيارية"
            : locale === "en"
            ? "At least one name is required — other languages are optional"
            : "Au moins un nom est requis — les autres langues sont facultatives"}
        </p>
      </div>

      <div className={dividerCls} />

      {/* ── Classification ────────────────────────────────────────────────── */}
      <div className="space-y-3">
        {/* Device categories — multi-select checkboxes */}
        <div className="space-y-2">
          <span className={labelTextCls}>{t("services.deviceType")}</span>
          <div className="flex flex-wrap gap-2">
            {deviceCategories.map((d) => {
              const checked = deviceCategoryIds.includes(d.id);
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => toggleDevice(d.id)}
                  disabled={isPending}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors disabled:opacity-50",
                    checked
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:bg-accent"
                  )}
                >
                  <span className={cn(
                    "h-3 w-3 rounded-full border flex items-center justify-center shrink-0",
                    checked ? "border-primary-foreground bg-primary-foreground/20" : "border-muted-foreground"
                  )}>
                    {checked && <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />}
                  </span>
                  {deviceLabel(d)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Service type + quick-add */}
        <div className="space-y-1">
          <span className={labelTextCls}>{t("services.serviceType")}</span>
          <div className="flex gap-2">
            <select className={cn(inputCls, "flex-1")} value={serviceTypeId}
              onChange={(e) => setServiceTypeId(e.target.value)} disabled={isPending}>
              <option value="">{t("services.serviceTypeNone")}</option>
              {filteredServiceTypes.map((st) => (
                <option key={st.id} value={st.id}>
                  {resolveServiceTypeName(st, locale)}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setShowNewType(true)}
              disabled={isPending}
              title={locale === "ar" ? "إضافة نوع جديد" : locale === "en" ? "Add type" : "Ajouter un type"}
              className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          {showNewType && (
            <div className="flex gap-2 items-center rounded-md border border-input bg-background p-2">
              <input
                value={newTypeName}
                onChange={(e) => setNewTypeName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCreateType();
                  if (e.key === "Escape") { setShowNewType(false); setNewTypeName(""); }
                }}
                placeholder={locale === "ar" ? "اسم النوع…" : locale === "en" ? "Type name…" : "Nom du type…"}
                className="flex-1 bg-transparent px-2 py-1 text-sm outline-none placeholder:text-muted-foreground/60"
                autoFocus
                disabled={creatingType}
                dir={locale === "ar" ? "rtl" : "ltr"}
              />
              <button
                type="button"
                onClick={handleCreateType}
                disabled={creatingType || !newTypeName.trim()}
                className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-50 transition-all"
              >
                {creatingType && <Loader2 className="h-3 w-3 animate-spin" />}
                {t("common.create")}
              </button>
              <button
                type="button"
                onClick={() => { setShowNewType(false); setNewTypeName(""); }}
                className="text-xs text-muted-foreground hover:text-foreground px-1.5 py-1"
              >
                {t("common.cancel")}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={dividerCls} />

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <div className="space-y-3">
        <p className={sectionTitleCls}>
          {locale === "ar" ? "الأسعار" : locale === "en" ? "Pricing" : "Tarification"}
        </p>

        {/* Principal prices row */}
        <div className="grid grid-cols-3 gap-3">
          <label className={labelCls}>
            <span className={labelTextCls}>
              {locale === "ar" ? "سعر البيع (دج)" : locale === "en" ? "Selling price (DZD)" : "Prix de vente (DZD)"}
              {" "}<span className="text-destructive">*</span>
            </span>
            <input type="number" min={0} step={50} className={inputCls} value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)} disabled={isPending} placeholder="0" />
          </label>
          <label className={labelCls}>
            <span className={labelTextCls}>
              {locale === "ar" ? "السعر الأساسي (دج)" : locale === "en" ? "Base price (DZD)" : "Prix de base (DZD)"}
            </span>
            <input type="number" min={0} step={50} className={inputCls} value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)} disabled={isPending} placeholder="—" />
          </label>
          <label className={labelCls}>
            <span className={labelTextCls}>
              {locale === "ar" ? "التكلفة الداخلية (دج)" : locale === "en" ? "Cost price (DZD)" : "Coût interne (DZD)"}
            </span>
            <input type="number" min={0} step={50} className={inputCls} value={costPrice}
              onChange={(e) => setCostPrice(e.target.value)} disabled={isPending} placeholder="—" />
          </label>
        </div>

        {/* Customer group prices — same grid style */}
        {customerGroups.length > 0 && (
          <div className="rounded-lg border border-border bg-muted/30 p-3 space-y-2">
            <p className={labelTextCls}>
              {locale === "ar"
                ? "أسعار خاصة بمجموعات العملاء (اختياري)"
                : locale === "en"
                ? "Group-specific prices (optional)"
                : "Prix par groupe client (facultatif)"}
            </p>
            <div className={cn(
              "grid gap-3",
              customerGroups.length === 1 ? "grid-cols-1" :
              customerGroups.length === 2 ? "grid-cols-2" : "grid-cols-3"
            )}>
              {customerGroups.map((g) => (
                <label key={g.id} className={labelCls}>
                  <span className={labelTextCls}>{g.name}</span>
                  <input
                    type="number"
                    min={0}
                    step={50}
                    className={inputCls}
                    placeholder="—"
                    value={groupPrices[g.id] ?? ""}
                    onChange={(e) =>
                      setGroupPrices((prev) => ({ ...prev, [g.id]: e.target.value }))
                    }
                    disabled={isPending}
                  />
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={dividerCls} />

      {/* ── Details ───────────────────────────────────────────────────────── */}
      <div className="space-y-3">
        <p className={sectionTitleCls}>
          {locale === "ar" ? "التفاصيل" : locale === "en" ? "Details" : "Détails"}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {/* Duration */}
          <div className="space-y-1">
            <span className={labelTextCls}>
              {locale === "ar" ? "المدة التقديرية" : locale === "en" ? "Est. duration" : "Durée estimée"}
            </span>
            <div className="flex gap-1.5">
              <input
                type="number"
                min={0}
                className={cn(inputCls, "flex-1")}
                value={durationValue}
                onChange={(e) => setDurationValue(e.target.value)}
                disabled={isPending}
                placeholder="0"
              />
              <select
                className="rounded-md border border-input bg-background px-2 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                value={durationUnit}
                onChange={(e) => setDurationUnit(e.target.value as DurationUnit)}
                disabled={isPending}
              >
                {unitOptions.map((u) => (
                  <option key={u.value} value={u.value}>{u.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* SKU */}
          <label className={labelCls}>
            <span className={labelTextCls}>
              {locale === "ar" ? "الرمز (SKU) — تلقائي إن تُرك فارغاً" : locale === "en" ? "SKU — auto if empty" : "SKU — auto si vide"}
            </span>
            <input className={inputCls} value={sku} onChange={(e) => setSku(e.target.value)}
              disabled={isPending} placeholder="SRV-000001" dir="ltr" />
          </label>
        </div>

        <label className={labelCls}>
          <span className={labelTextCls}>{t("services.notes")}</span>
          <textarea className={inputCls} rows={2} value={notes}
            onChange={(e) => setNotes(e.target.value)} disabled={isPending} />
        </label>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex items-center gap-3 pt-1">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isPending}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {isPending ? <><Loader2 className="h-4 w-4 animate-spin" />{savingLabel}</> : saveLabel}
        </button>
        <button
          type="button"
          onClick={() => { if (onSuccess) onSuccess(); else router.push("/dashboard/services"); }}
          disabled={isPending}
          className="rounded-xl border border-border px-4 py-2.5 text-sm text-foreground hover:bg-accent disabled:opacity-50"
        >
          {cancelLabel}
        </button>
      </div>
    </div>
  );
}
