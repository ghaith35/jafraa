"use client";

import { useMemo, useState, useTransition, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Clock3, Cpu, Filter, Layers3, Search, XCircle } from "lucide-react";
import { useLocale } from "next-intl";
import { approveCatalogSuggestion, rejectCatalogSuggestion } from "../actions/catalog.actions";
import { cn } from "@/lib/utils";

type Locale = "fr" | "en" | "ar";
type SuggestionStatus = "pending" | "approved" | "rejected" | "merged";

type Suggestion = {
  id: string;
  categoryKey: string | null;
  brandName: string | null;
  modelName: string;
  seriesName: string | null;
  modelLine: string | null;
  generation: string | null;
  printerType: string | null;
  processor: string | null;
  ram: string | null;
  storage: string | null;
  gpu: string | null;
  sku: string | null;
  notes: string | null;
  source: string;
  status: SuggestionStatus;
  createdAt: Date | string;
  category?: { key: string; nameFr: string; nameEn: string; nameAr: string } | null;
  brand?: { name: string } | null;
  family?: { name: string } | null;
};

type Copy = {
  search: string;
  pending: string;
  approved: string;
  rejected: string;
  merged: string;
  all: string;
  approve: string;
  reject: string;
  processing: string;
  empty: string;
  category: string;
  brand: string;
  model: string;
  details: string;
  source: string;
  created: string;
  specs: string;
  reason: string;
  status: string;
  approvedHint: string;
};

const COPY: Record<Locale, Copy> = {
  fr: {
    search: "Rechercher suggestion, marque, modèle…",
    pending: "En attente",
    approved: "Approuvées",
    rejected: "Rejetées",
    merged: "Fusionnées",
    all: "Toutes",
    approve: "Approuver",
    reject: "Rejeter",
    processing: "Traitement…",
    empty: "Aucune suggestion pour ce filtre.",
    category: "Catégorie",
    brand: "Marque",
    model: "Modèle",
    details: "Détails",
    source: "Source",
    created: "Créée",
    specs: "Spécifications",
    reason: "Raison du rejet",
    status: "Statut",
    approvedHint: "L’approbation ajoute le modèle comme modèle boutique réutilisable dans le workflow réparation.",
  },
  en: {
    search: "Search suggestion, brand, model…",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    merged: "Merged",
    all: "All",
    approve: "Approve",
    reject: "Reject",
    processing: "Processing…",
    empty: "No suggestions for this filter.",
    category: "Category",
    brand: "Brand",
    model: "Model",
    details: "Details",
    source: "Source",
    created: "Created",
    specs: "Specs",
    reason: "Reject reason",
    status: "Status",
    approvedHint: "Approval adds the model as a reusable store catalog model for the repair workflow.",
  },
  ar: {
    search: "ابحث عن اقتراح، علامة، موديل…",
    pending: "بانتظار المراجعة",
    approved: "مقبولة",
    rejected: "مرفوضة",
    merged: "مدمجة",
    all: "الكل",
    approve: "قبول",
    reject: "رفض",
    processing: "جاري المعالجة…",
    empty: "لا توجد اقتراحات لهذا الفلتر.",
    category: "الفئة",
    brand: "العلامة",
    model: "الموديل",
    details: "التفاصيل",
    source: "المصدر",
    created: "تاريخ الإنشاء",
    specs: "المواصفات",
    reason: "سبب الرفض",
    status: "الحالة",
    approvedHint: "عند القبول سيصبح الموديل متاحاً في كتالوج المتجر ومسار الإصلاح.",
  },
};

const statusClasses: Record<SuggestionStatus, string> = {
  pending: "bg-amber-50 text-amber-700 ring-amber-100",
  approved: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  rejected: "bg-red-50 text-red-700 ring-red-100",
  merged: "bg-sky-50 text-sky-700 ring-sky-100",
};

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function categoryLabel(suggestion: Suggestion, locale: Locale) {
  const category = suggestion.category;
  if (!category) return suggestion.categoryKey ?? "—";
  if (locale === "ar") return category.nameAr || category.nameFr;
  if (locale === "en") return category.nameEn || category.nameFr;
  return category.nameFr;
}

function statusLabel(status: SuggestionStatus, copy: Copy) {
  if (status === "pending") return copy.pending;
  if (status === "approved") return copy.approved;
  if (status === "rejected") return copy.rejected;
  return copy.merged;
}

export function CatalogSuggestionsManager({ suggestions }: { suggestions: Suggestion[] }) {
  const rawLocale = useLocale() as Locale;
  const locale: Locale = rawLocale === "ar" || rawLocale === "en" ? rawLocale : "fr";
  const copy = COPY[locale];
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<SuggestionStatus | "all">("pending");
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const q = normalize(query);
    return suggestions.filter((suggestion) => {
      const matchesStatus = status === "all" || suggestion.status === status;
      const haystack = normalize([
        suggestion.modelName,
        suggestion.brand?.name,
        suggestion.brandName,
        suggestion.categoryKey,
        suggestion.seriesName,
        suggestion.modelLine,
        suggestion.generation,
        suggestion.processor,
        suggestion.ram,
        suggestion.storage,
        suggestion.sku,
      ].filter(Boolean).join(" "));
      return matchesStatus && (!q || haystack.includes(q));
    });
  }, [query, status, suggestions]);

  function approve(id: string) {
    setError(null);
    setPendingId(id);
    startTransition(async () => {
      const result = await approveCatalogSuggestion(id);
      if ("error" in result) setError(result.error);
      else router.refresh();
      setPendingId(null);
    });
  }

  function reject(id: string) {
    setError(null);
    const reason = window.prompt(copy.reason) ?? "";
    setPendingId(id);
    startTransition(async () => {
      const result = await rejectCatalogSuggestion(id, reason);
      if ("error" in result) setError(result.error);
      else router.refresh();
      setPendingId(null);
    });
  }

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="space-y-5">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.search}
              className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 ps-9 pe-3 text-sm outline-none transition focus:border-primary/60 focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["pending", "approved", "merged", "rejected", "all"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setStatus(value)}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-2xl px-3 text-xs font-black ring-1 transition",
                  status === value ? "bg-primary text-primary-foreground ring-primary" : "bg-white text-slate-600 ring-slate-200 hover:bg-slate-50"
                )}
              >
                <Filter className="h-3.5 w-3.5" />
                {value === "all" ? copy.all : statusLabel(value, copy)}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs font-medium text-slate-500">{copy.approvedHint}</p>
        {error && <p className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-bold text-red-700">{error}</p>}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center">
          <Clock3 className="mx-auto mb-3 h-8 w-8 text-slate-300" />
          <p className="text-sm font-bold text-slate-500">{copy.empty}</p>
        </div>
      ) : (
        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
          {filtered.map((suggestion) => {
            const busy = isPending && pendingId === suggestion.id;
            const specs = [suggestion.processor, suggestion.ram, suggestion.storage, suggestion.gpu, suggestion.sku].filter(Boolean).join(" · ");
            return (
              <article key={suggestion.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-primary/30 hover:shadow-md">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-primary/10 p-2 text-primary"><Layers3 className="h-5 w-5" /></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{copy.model}</p>
                      <h3 className="text-base font-black text-slate-950">{suggestion.modelName}</h3>
                    </div>
                  </div>
                  <span className={cn("rounded-full px-2.5 py-1 text-[13px] font-black ring-1", statusClasses[suggestion.status])}>
                    {statusLabel(suggestion.status, copy)}
                  </span>
                </div>

                <div className="grid gap-2 text-sm">
                  <Info label={copy.category} value={categoryLabel(suggestion, locale)} />
                  <Info label={copy.brand} value={suggestion.brand?.name ?? suggestion.brandName ?? "—"} />
                  {suggestion.seriesName && <Info label="Series" value={suggestion.seriesName} />}
                  {suggestion.modelLine && <Info label="Line" value={suggestion.modelLine} />}
                  {suggestion.generation && <Info label="Generation" value={suggestion.generation} />}
                  {suggestion.printerType && <Info label="Printer type" value={suggestion.printerType} />}
                  {specs && <Info label={copy.specs} value={specs} icon={<Cpu className="h-4 w-4" />} />}
                  <Info label={copy.source} value={suggestion.source} />
                  <Info label={copy.created} value={new Date(suggestion.createdAt).toLocaleString(locale === "ar" ? "ar-DZ" : locale === "en" ? "en-GB" : "fr-DZ")} />
                </div>

                {suggestion.notes && <p className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs leading-5 text-slate-600">{suggestion.notes}</p>}

                {suggestion.status === "pending" && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button disabled={busy} onClick={() => approve(suggestion.id)} className="inline-flex h-10 items-center gap-2 rounded-2xl bg-emerald-600 px-3 text-xs font-black text-white shadow-sm hover:bg-emerald-700 disabled:opacity-50">
                      <CheckCircle2 className="h-4 w-4" /> {busy ? copy.processing : copy.approve}
                    </button>
                    <button disabled={busy} onClick={() => reject(suggestion.id)} className="inline-flex h-10 items-center gap-2 rounded-2xl bg-red-50 px-3 text-xs font-black text-red-700 ring-1 ring-red-100 hover:bg-red-100 disabled:opacity-50">
                      <XCircle className="h-4 w-4" /> {copy.reject}
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Info({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-2">
      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400">{icon}{label}</span>
      <span className="max-w-[65%] text-end text-xs font-black text-slate-700">{value}</span>
    </div>
  );
}
