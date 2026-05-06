"use client";

import { useLocale } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, useTransition, type FormEvent } from "react";
import {
  BadgeCheck,
  Boxes,
  ChevronRight,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  HelpCircle,
  Layers3,
  Laptop,
  Monitor,
  Plus,
  Printer,
  Search,
  Smartphone,
  Store,
  Tablet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { UserRole } from "@prisma/client";
import { hasPermission } from "@/lib/auth/permissions";
import { cn } from "@/lib/utils";
import {
  createStoreCustomBrand,
  createStoreCustomFamily,
} from "../actions/catalog.actions";

// ─── Types ───────────────────────────────────────────────────────────────────

type Locale = "fr" | "en" | "ar";
type PrinterTypeKey = "laser" | "ink_tank" | "ink_cartridge" | "risograph";

interface Category {
  id: string;
  key: string;
  nameFr: string;
  nameAr: string;
  nameEn: string;
}

interface Brand {
  id: string;
  name: string;
  isGlobalDefault: boolean;
  categoryId: string;
  _count?: { modelFamilies?: number };
}

interface Family {
  id: string;
  name: string;
  isGlobalDefault: boolean;
  brandId: string;
}

interface Props {
  categories: Category[];
  selectedCategoryKey: string | null;
  brands: Brand[];
  selectedBrandId: string | null;
  families: Family[];
  userRole: UserRole;
}

type LaptopCatalogOption = {
  series: string;
  modelLine: string;
  generation: string;
  family: Family;
};

type Copy = {
  search: string;
  categories: string;
  brands: string;
  models: string;
  global: string;
  custom: string;
  add: string;
  cancel: string;
  save: string;
  noBrand: string;
  noModel: string;
  selectCategory: string;
  selectBrand: string;
  searchPlaceholder: string;
  brandPlaceholder: string;
  familyPlaceholder: string;
  addBrand: string;
  addModel: string;
  addLaptopModel: string;
  addPrinterModel: string;
  series: string;
  modelLine: string;
  generation: string;
  optionalGeneration: string;
  printerType: string;
  printerModelName: string;
  allTypes: string;
  allSeries: string;
  overview: string;
  repairFlow: string;
  databaseReady: string;
  databaseReadyDesc: string;
  customFallback: string;
  customFallbackDesc: string;
  laptopFlow: string;
  printerFlow: string;
  defaultFlow: string;
  laptopSpecsNote: string;
  chooseSeries: string;
  chooseModelLine: string;
  availableGenerations: string;
  noSeriesFound: string;
  noModelsForFilter: string;
  typeSummary: string;
  totalBrands: string;
  totalModels: string;
  filtered: string;
  usedByRepairWizard: string;
  notSavedSpecs: string;
  alreadyExistsHint: string;
  errorGeneric: string;
};

const COPY: Record<Locale, Copy> = {
  fr: {
    search: "Rechercher",
    categories: "Catégories",
    brands: "Marques",
    models: "Modèles",
    global: "Global",
    custom: "Boutique",
    add: "Ajouter",
    cancel: "Annuler",
    save: "Enregistrer",
    noBrand: "Aucune marque trouvée",
    noModel: "Aucun modèle trouvé",
    selectCategory: "Sélectionnez une catégorie pour parcourir le catalogue",
    selectBrand: "Sélectionnez une marque pour organiser les modèles",
    searchPlaceholder: "Rechercher une marque, série, modèle, génération…",
    brandPlaceholder: "Nom de la marque…",
    familyPlaceholder: "Nom du modèle ou de la famille…",
    addBrand: "Ajouter une marque",
    addModel: "Ajouter un modèle",
    addLaptopModel: "Ajouter un modèle laptop",
    addPrinterModel: "Ajouter un modèle imprimante",
    series: "Série / famille",
    modelLine: "Ligne modèle",
    generation: "Génération",
    optionalGeneration: "Génération optionnelle",
    printerType: "Type imprimante",
    printerModelName: "Nom du modèle imprimante",
    allTypes: "Tous les types",
    allSeries: "Toutes les séries",
    overview: "Vue catalogue",
    repairFlow: "Flux de réparation",
    databaseReady: "Catalogue relié à la base de données",
    databaseReadyDesc: "Les marques et modèles sont utilisés par le nouveau workflow de réparation.",
    customFallback: "Modèles manquants supportés",
    customFallbackDesc: "Ajoutez une marque ou un modèle boutique sans bloquer le ticket.",
    laptopFlow: "Laptop → Marque → Série → Ligne → Génération → Spécifications",
    printerFlow: "Imprimante → Type → Marque → Modèle → Problèmes",
    defaultFlow: "Catégorie → Marque → Modèle → Problèmes",
    laptopSpecsNote: "CPU, RAM, disque, GPU et SKU restent des détails du ticket, pas des cartes du catalogue.",
    chooseSeries: "Choisissez une série",
    chooseModelLine: "Choisissez une ligne modèle",
    availableGenerations: "Générations disponibles",
    noSeriesFound: "Aucune série trouvée pour ce filtre",
    noModelsForFilter: "Aucun modèle pour ce filtre",
    typeSummary: "Répartition par type",
    totalBrands: "marques",
    totalModels: "modèles",
    filtered: "filtrés",
    usedByRepairWizard: "Utilisé par le workflow réparation",
    notSavedSpecs: "Les spécifications sont ajoutées pendant la création du ticket.",
    alreadyExistsHint: "Si le modèle existe déjà, il ne sera pas dupliqué.",
    errorGeneric: "Erreur lors de l’enregistrement",
  },
  en: {
    search: "Search",
    categories: "Categories",
    brands: "Brands",
    models: "Models",
    global: "Global",
    custom: "Store",
    add: "Add",
    cancel: "Cancel",
    save: "Save",
    noBrand: "No brand found",
    noModel: "No model found",
    selectCategory: "Select a category to browse the catalog",
    selectBrand: "Select a brand to organize the models",
    searchPlaceholder: "Search brand, series, model, generation…",
    brandPlaceholder: "Brand name…",
    familyPlaceholder: "Model or family name…",
    addBrand: "Add brand",
    addModel: "Add model",
    addLaptopModel: "Add laptop model",
    addPrinterModel: "Add printer model",
    series: "Series / family",
    modelLine: "Model line",
    generation: "Generation",
    optionalGeneration: "Optional generation",
    printerType: "Printer type",
    printerModelName: "Printer model name",
    allTypes: "All types",
    allSeries: "All series",
    overview: "Catalog overview",
    repairFlow: "Repair flow",
    databaseReady: "Database-backed catalog",
    databaseReadyDesc: "Brands and models are used by the new guided repair workflow.",
    customFallback: "Missing models supported",
    customFallbackDesc: "Add store-specific brands or models without blocking a ticket.",
    laptopFlow: "Laptop → Brand → Series → Line → Generation → Specs",
    printerFlow: "Printer → Type → Brand → Model → Problems",
    defaultFlow: "Category → Brand → Model → Problems",
    laptopSpecsNote: "CPU, RAM, disk, GPU and SKU stay as ticket details, not catalog cards.",
    chooseSeries: "Choose a series",
    chooseModelLine: "Choose a model line",
    availableGenerations: "Available generations",
    noSeriesFound: "No series found for this filter",
    noModelsForFilter: "No models for this filter",
    typeSummary: "Breakdown by type",
    totalBrands: "brands",
    totalModels: "models",
    filtered: "filtered",
    usedByRepairWizard: "Used by the repair workflow",
    notSavedSpecs: "Specs are added during ticket creation.",
    alreadyExistsHint: "Existing models will not be duplicated.",
    errorGeneric: "Could not save the entry",
  },
  ar: {
    search: "بحث",
    categories: "الفئات",
    brands: "العلامات",
    models: "الموديلات",
    global: "عام",
    custom: "المتجر",
    add: "إضافة",
    cancel: "إلغاء",
    save: "حفظ",
    noBrand: "لم يتم العثور على علامة",
    noModel: "لم يتم العثور على موديل",
    selectCategory: "اختر فئة لتصفح الكتالوج",
    selectBrand: "اختر علامة لترتيب الموديلات",
    searchPlaceholder: "ابحث عن علامة، سلسلة، موديل، جيل…",
    brandPlaceholder: "اسم العلامة…",
    familyPlaceholder: "اسم الموديل أو العائلة…",
    addBrand: "إضافة علامة",
    addModel: "إضافة موديل",
    addLaptopModel: "إضافة موديل حاسوب",
    addPrinterModel: "إضافة موديل طابعة",
    series: "السلسلة / العائلة",
    modelLine: "خط الموديل",
    generation: "الجيل",
    optionalGeneration: "الجيل اختياري",
    printerType: "نوع الطابعة",
    printerModelName: "اسم موديل الطابعة",
    allTypes: "كل الأنواع",
    allSeries: "كل السلاسل",
    overview: "نظرة على الكتالوج",
    repairFlow: "مسار الإصلاح",
    databaseReady: "كتالوج مربوط بقاعدة البيانات",
    databaseReadyDesc: "العلامات والموديلات مستعملة في مسار الإصلاح الجديد.",
    customFallback: "دعم الموديلات الناقصة",
    customFallbackDesc: "أضف علامة أو موديل خاص بالمتجر بدون تعطيل إنشاء التذكرة.",
    laptopFlow: "حاسوب → علامة → سلسلة → خط → جيل → مواصفات",
    printerFlow: "طابعة → نوع → علامة → موديل → مشاكل",
    defaultFlow: "فئة → علامة → موديل → مشاكل",
    laptopSpecsNote: "المعالج والرام والقرص وكرت الشاشة تبقى تفاصيل في التذكرة وليست بطاقات في الكتالوج.",
    chooseSeries: "اختر سلسلة",
    chooseModelLine: "اختر خط الموديل",
    availableGenerations: "الأجيال المتوفرة",
    noSeriesFound: "لا توجد سلاسل لهذا البحث",
    noModelsForFilter: "لا توجد موديلات لهذا الفلتر",
    typeSummary: "تقسيم حسب النوع",
    totalBrands: "علامات",
    totalModels: "موديلات",
    filtered: "مفلترة",
    usedByRepairWizard: "مستعمل في مسار الإصلاح",
    notSavedSpecs: "المواصفات تضاف عند إنشاء التذكرة.",
    alreadyExistsHint: "إذا كان الموديل موجوداً فلن يتم تكراره.",
    errorGeneric: "تعذر حفظ العنصر",
  },
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  phone: Smartphone,
  tablet: Tablet,
  laptop: Laptop,
  desktop: Monitor,
  printer: Printer,
  console: Gamepad2,
  other: HelpCircle,
};

const PRINTER_PREFIXES: Record<PrinterTypeKey, string> = {
  laser: "Laser",
  ink_tank: "Ink Tank",
  ink_cartridge: "Ink Cartridge",
  risograph: "Risograph",
};

const PRINTER_TYPE_LABELS: Record<PrinterTypeKey, Record<Locale, string>> = {
  laser: { fr: "Laser", en: "Laser", ar: "ليزر" },
  ink_tank: { fr: "Réservoir", en: "Ink tank", ar: "خزان حبر" },
  ink_cartridge: { fr: "Cartouche", en: "Ink cartridge", ar: "خرطوشة" },
  risograph: { fr: "Risograph", en: "Risograph", ar: "ريزوغراف" },
};

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-primary/50 focus:ring-4 focus:ring-primary/10 disabled:opacity-50";

const ghostButton =
  "rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary/30 hover:bg-primary/5 disabled:opacity-50";

const primaryButton =
  "rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:opacity-50";

// ─── Parsing helpers ─────────────────────────────────────────────────────────

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function categoryLabel(category: Category, locale: Locale) {
  if (locale === "ar") return category.nameAr || category.nameFr;
  if (locale === "en") return category.nameEn || category.nameFr;
  return category.nameFr;
}

function stripBrandPrefix(name: string, brandName?: string) {
  let value = name.trim().replace(/\s+/g, " ");
  const brand = (brandName ?? "").trim();
  if (brand && value.toLowerCase().startsWith(`${brand.toLowerCase()} `)) {
    value = value.slice(brand.length).trim();
  }
  return value;
}

function detectLaptopSeries(modelName: string, brandName?: string) {
  const value = stripBrandPrefix(modelName, brandName);
  const lower = value.toLowerCase();

  const seriesCandidates = [
    "MacBook Pro",
    "MacBook Air",
    "MacBook",
    "Surface Laptop Studio",
    "Surface Laptop Go",
    "Surface Laptop",
    "Surface Book",
    "Surface Pro",
    "Galaxy Book Pro 360",
    "Galaxy Book Pro",
    "Galaxy Book Ultra",
    "Galaxy Book",
    "TUF Gaming",
    "ROG Zephyrus",
    "ROG Strix",
    "ROG Flow",
    "ROG",
    "ProArt Studiobook",
    "ProArt",
    "ExpertBook",
    "Vivobook Pro",
    "Vivobook S",
    "Vivobook",
    "Zenbook Duo",
    "Zenbook Pro",
    "Zenbook",
    "ThinkPad",
    "ThinkBook",
    "IdeaPad Slim",
    "IdeaPad Flex",
    "IdeaPad",
    "Yoga Slim",
    "Yoga",
    "Legion Slim",
    "Legion",
    "LOQ",
    "EliteBook x360",
    "EliteBook",
    "ProBook",
    "Pavilion Gaming",
    "Pavilion Plus",
    "Pavilion x360",
    "Pavilion",
    "Envy x360",
    "Envy",
    "Spectre x360",
    "Spectre",
    "ZBook Firefly",
    "ZBook Power",
    "ZBook Studio",
    "ZBook Fury",
    "ZBook",
    "Omen",
    "Victus",
    "Inspiron",
    "Latitude Rugged",
    "Latitude",
    "Precision",
    "Vostro",
    "Alienware",
    "XPS",
    "Dell G",
    "G Series",
    "Aspire",
    "Swift Go",
    "Swift",
    "Spin",
    "TravelMate",
    "Nitro",
    "Predator Helios",
    "Predator Triton",
    "Predator",
    "Chromebook Spin",
    "Chromebook Plus",
    "Chromebook",
    "Extensa",
    "Titan",
    "Raider",
    "Stealth",
    "Vector",
    "Crosshair",
    "Pulse",
    "Katana",
    "Sword",
    "Cyborg",
    "Creator",
    "Prestige",
    "Modern",
    "Summit",
    "Thin",
    "MateBook D",
    "MateBook X Pro",
    "MateBook X",
    "MateBook",
    "Satellite",
    "Tecra",
    "Portege",
    "Dynabook",
    "AORUS",
    "AERO",
    "Blade",
    "Gram",
    "Lifebook",
    "Celsius",
    "VAIO",
    "Akoya",
    "Erazer",
    "HeroBook",
    "CoreBook",
    "MiniBook",
    "Condor",
  ];

  const match = seriesCandidates.find((candidate) => lower.startsWith(candidate.toLowerCase()));
  if (match) return match;

  const parts = value.split(" ");
  return parts.length > 1 ? parts[0] : value;
}

function splitLaptopModel(modelName: string, brandName?: string): Omit<LaptopCatalogOption, "family"> {
  const value = stripBrandPrefix(modelName, brandName);
  const series = detectLaptopSeries(modelName, brandName);
  let rest = value.slice(series.length).trim();
  if (!rest) rest = value;

  let generation = "";
  let lineRest = rest;

  const generationPatterns = [
    /\b(Gen\s*\d{1,2})\b$/i,
    /\b(G\d{1,2})\b$/i,
    /\b(\d{4}\s+A\d{4})\b$/i,
    /\b(A\d{4})\b$/i,
    /\b(20\d{2})\b$/i,
  ];

  for (const pattern of generationPatterns) {
    const match = lineRest.match(pattern);
    if (match) {
      generation = match[1].replace(/\s+/g, " ").trim();
      lineRest = lineRest.slice(0, match.index).trim();
      break;
    }
  }

  const modelLine = [series, lineRest].filter(Boolean).join(" ").trim() || value;
  return { series, modelLine, generation };
}

function buildLaptopOptions(brand: Brand | null, families: Family[]) {
  return families.map((family) => ({
    ...splitLaptopModel(family.name, brand?.name),
    family,
  }));
}

function detectPhoneSeries(modelName: string, brandName?: string) {
  const value = stripBrandPrefix(modelName, brandName);
  const lower = value.toLowerCase();

  const patterns: Array<[RegExp, string | ((match: RegExpMatchArray) => string)]> = [
    [/^galaxy\s+z\s+fold/i, "Galaxy Z Fold"],
    [/^galaxy\s+z\s+flip/i, "Galaxy Z Flip"],
    [/^galaxy\s+(s\d|s\s|s$)/i, "Galaxy S"],
    [/^galaxy\s+a\d/i, "Galaxy A"],
    [/^galaxy\s+m\d/i, "Galaxy M"],
    [/^galaxy\s+f\d/i, "Galaxy F"],
    [/^galaxy\s+note/i, "Galaxy Note"],
    [/^galaxy\s+xcover/i, "Galaxy XCover"],
    [/^iphone\s+se/i, "iPhone SE"],
    [/^iphone\s+\d+/i, (match) => {
      const number = match[0].replace(/iphone/i, "").trim().split(/\s+/)[0];
      return number ? `iPhone ${number}` : "iPhone";
    }],
    [/^redmi\s+note/i, "Redmi Note"],
    [/^redmi\s+k/i, "Redmi K"],
    [/^redmi\s+a/i, "Redmi A"],
    [/^redmi\s+\d/i, "Redmi Number"],
    [/^poco\s+c/i, "Poco C"],
    [/^poco\s+m/i, "Poco M"],
    [/^poco\s+x/i, "Poco X"],
    [/^poco\s+f/i, "Poco F"],
    [/^oppo\s+a/i, "Oppo A"],
    [/^oppo\s+reno/i, "Oppo Reno"],
    [/^oppo\s+find/i, "Oppo Find"],
    [/^realme\s+c/i, "Realme C"],
    [/^realme\s+gt/i, "Realme GT"],
    [/^realme\s+narzo/i, "Realme Narzo"],
    [/^vivo\s+y/i, "Vivo Y"],
    [/^vivo\s+v/i, "Vivo V"],
    [/^vivo\s+x/i, "Vivo X"],
    [/^huawei\s+p/i, "Huawei P"],
    [/^huawei\s+mate/i, "Huawei Mate"],
    [/^huawei\s+nova/i, "Huawei Nova"],
    [/^huawei\s+y/i, "Huawei Y"],
    [/^honor\s+x/i, "Honor X"],
    [/^honor\s+magic/i, "Honor Magic"],
    [/^honor\s+play/i, "Honor Play"],
    [/^infinix\s+hot/i, "Infinix Hot"],
    [/^infinix\s+note/i, "Infinix Note"],
    [/^infinix\s+smart/i, "Infinix Smart"],
    [/^infinix\s+zero/i, "Infinix Zero"],
    [/^tecno\s+spark/i, "Tecno Spark"],
    [/^tecno\s+camon/i, "Tecno Camon"],
    [/^tecno\s+pop/i, "Tecno Pop"],
    [/^tecno\s+pova/i, "Tecno Pova"],
    [/^itel\s+a/i, "Itel A"],
    [/^itel\s+p/i, "Itel P"],
    [/^nokia\s+g/i, "Nokia G"],
    [/^nokia\s+c/i, "Nokia C"],
    [/^moto\s+g/i, "Moto G"],
    [/^moto\s+e/i, "Moto E"],
    [/^oneplus\s+nord/i, "OnePlus Nord"],
    [/^pixel\s+\d/i, "Google Pixel"],
  ];

  for (const [pattern, label] of patterns) {
    const match = value.match(pattern);
    if (match) return typeof label === "function" ? label(match) : label;
  }

  if (lower.includes("series")) return value;
  const parts = value.split(" ").filter(Boolean);
  return parts.length >= 2 ? parts.slice(0, 2).join(" ") : value || brandName || "Other";
}

function printerTypeFromFamilyName(name: string): PrinterTypeKey | null {
  const [prefix] = name.split("|").map((part) => part.trim());
  const found = Object.entries(PRINTER_PREFIXES).find(([, value]) => value.toLowerCase() === prefix.toLowerCase());
  return found ? (found[0] as PrinterTypeKey) : null;
}

function printerDisplayName(name: string) {
  const parts = name.split("|").map((part) => part.trim());
  return parts.length > 1 ? parts.slice(1).join(" | ") : name;
}

function familyMatchesQuery(family: Family, query: string, brand?: Brand | null) {
  const q = normalize(query);
  if (!q) return true;
  const label = `${family.name} ${brand?.name ?? ""}`;
  return normalize(label).includes(q);
}

function familyScopeLabel(family: Family, copy: Copy) {
  return family.isGlobalDefault ? copy.global : copy.custom;
}

// ─── Small UI pieces ─────────────────────────────────────────────────────────

function ScopeBadge({ isGlobal, copy }: { isGlobal: boolean; copy: Copy }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold",
        isGlobal
          ? "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
          : "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
      )}
    >
      {isGlobal ? <Globe className="h-3 w-3" /> : <Store className="h-3 w-3" />}
      {isGlobal ? copy.global : copy.custom}
    </span>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-2 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="text-xl font-black tracking-tight text-slate-950">{value}</p>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-8 text-center">
      <HelpCircle className="mx-auto mb-3 h-8 w-8 text-slate-300" />
      <p className="text-sm font-medium text-slate-500">{text}</p>
    </div>
  );
}

function InlineAddBrandForm({
  copy,
  onSubmit,
  onCancel,
}: {
  copy: Copy;
  onSubmit: (name: string) => Promise<void>;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim()) return;
    setError(null);
    startTransition(async () => {
      try {
        await onSubmit(name.trim());
        setName("");
      } catch (err) {
        setError(err instanceof Error ? err.message : copy.errorGeneric);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-primary/20 bg-primary/5 p-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={copy.brandPlaceholder}
          className={inputCls}
          disabled={isPending}
          autoFocus
        />
        <div className="flex gap-2">
          <button type="submit" disabled={isPending || !name.trim()} className={primaryButton}>
            {isPending ? "…" : copy.save}
          </button>
          <button type="button" onClick={onCancel} disabled={isPending} className={ghostButton}>
            {copy.cancel}
          </button>
        </div>
      </div>
      {error && <p className="mt-2 text-xs font-semibold text-destructive">{error}</p>}
    </form>
  );
}

function AddModelForm({
  copy,
  categoryKey,
  brand,
  selectedPrinterType,
  locale,
  onSubmit,
  onCancel,
}: {
  copy: Copy;
  categoryKey: string;
  brand: Brand;
  selectedPrinterType: PrinterTypeKey | "all";
  locale: Locale;
  onSubmit: (name: string) => Promise<void>;
  onCancel: () => void;
}) {
  const [genericName, setGenericName] = useState("");
  const [series, setSeries] = useState("");
  const [modelLine, setModelLine] = useState("");
  const [generation, setGeneration] = useState("");
  const [printerType, setPrinterType] = useState<PrinterTypeKey>(selectedPrinterType === "all" ? "laser" : selectedPrinterType);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const isLaptop = categoryKey === "laptop";
  const isPrinter = categoryKey === "printer";

  function buildName() {
    if (isLaptop) {
      const pieces = [brand.name, series, modelLine, generation].map((part) => part.trim()).filter(Boolean);
      return pieces.join(" ").replace(/\s+/g, " ");
    }
    if (isPrinter) {
      const model = genericName.trim();
      const prefixed = `${PRINTER_PREFIXES[printerType]} | ${model}`;
      return prefixed.replace(/\s+/g, " ");
    }
    return genericName.trim().replace(/\s+/g, " ");
  }

  const preview = buildName();
  const canSave = isLaptop ? series.trim() && modelLine.trim() : genericName.trim();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSave || !preview) return;
    setError(null);
    startTransition(async () => {
      try {
        await onSubmit(preview);
        setGenericName("");
        setSeries("");
        setModelLine("");
        setGeneration("");
      } catch (err) {
        setError(err instanceof Error ? err.message : copy.errorGeneric);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-white p-4 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-black text-slate-950">
            {isLaptop ? copy.addLaptopModel : isPrinter ? copy.addPrinterModel : copy.addModel}
          </h3>
          <p className="mt-1 text-xs text-slate-500">{copy.alreadyExistsHint}</p>
        </div>
        <button type="button" onClick={onCancel} className="text-xs font-semibold text-slate-500 hover:text-slate-900">
          {copy.cancel}
        </button>
      </div>

      {isLaptop ? (
        <div className="grid gap-3 md:grid-cols-3">
          <input value={series} onChange={(e) => setSeries(e.target.value)} placeholder={copy.series} className={inputCls} disabled={isPending} />
          <input value={modelLine} onChange={(e) => setModelLine(e.target.value)} placeholder={copy.modelLine} className={inputCls} disabled={isPending} />
          <input value={generation} onChange={(e) => setGeneration(e.target.value)} placeholder={copy.optionalGeneration} className={inputCls} disabled={isPending} />
        </div>
      ) : isPrinter ? (
        <div className="grid gap-3 md:grid-cols-[220px_1fr]">
          <select value={printerType} onChange={(e) => setPrinterType(e.target.value as PrinterTypeKey)} className={inputCls} disabled={isPending}>
            {(Object.keys(PRINTER_PREFIXES) as PrinterTypeKey[]).map((key) => (
              <option key={key} value={key}>{PRINTER_TYPE_LABELS[key][locale]}</option>
            ))}
          </select>
          <input value={genericName} onChange={(e) => setGenericName(e.target.value)} placeholder={copy.printerModelName} className={inputCls} disabled={isPending} />
        </div>
      ) : (
        <input value={genericName} onChange={(e) => setGenericName(e.target.value)} placeholder={copy.familyPlaceholder} className={inputCls} disabled={isPending} />
      )}

      {isLaptop && <p className="mt-2 text-xs font-medium text-slate-500">{copy.notSavedSpecs}</p>}

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-h-8 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
          {preview || copy.familyPlaceholder}
        </div>
        <button type="submit" disabled={isPending || !canSave} className={primaryButton}>
          {isPending ? "…" : copy.save}
        </button>
      </div>
      {error && <p className="mt-2 text-xs font-semibold text-destructive">{error}</p>}
    </form>
  );
}

// ─── Category-specific panels ────────────────────────────────────────────────

function LaptopCatalogPanel({
  copy,
  brand,
  families,
  query,
}: {
  copy: Copy;
  brand: Brand;
  families: Family[];
  query: string;
}) {
  const options = useMemo(() => buildLaptopOptions(brand, families).filter((item) => familyMatchesQuery(item.family, query, brand)), [brand, families, query]);
  const [selectedSeries, setSelectedSeries] = useState<string | "all">("all");
  const [selectedModelLine, setSelectedModelLine] = useState<string | null>(null);

  const seriesGroups = useMemo(() => {
    const map = new Map<string, LaptopCatalogOption[]>();
    for (const option of options) {
      map.set(option.series, [...(map.get(option.series) ?? []), option]);
    }
    return Array.from(map.entries())
      .map(([series, items]) => ({ series, items }))
      .sort((a, b) => a.series.localeCompare(b.series));
  }, [options]);

  const visibleOptions = selectedSeries === "all" ? options : options.filter((item) => item.series === selectedSeries);

  const modelGroups = useMemo(() => {
    const map = new Map<string, LaptopCatalogOption[]>();
    for (const option of visibleOptions) {
      map.set(option.modelLine, [...(map.get(option.modelLine) ?? []), option]);
    }
    return Array.from(map.entries())
      .map(([modelLine, items]) => ({ modelLine, items }))
      .sort((a, b) => a.modelLine.localeCompare(b.modelLine));
  }, [visibleOptions]);

  const selectedModel = selectedModelLine
    ? modelGroups.find((group) => group.modelLine === selectedModelLine) ?? null
    : modelGroups[0] ?? null;

  return (
    <div className="grid gap-4 xl:grid-cols-[280px_1fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-black text-slate-950">{copy.chooseSeries}</h3>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-500">{seriesGroups.length}</span>
        </div>
        <div className="space-y-1.5 max-h-[31rem] overflow-y-auto pe-1">
          <button
            onClick={() => {
              setSelectedSeries("all");
              setSelectedModelLine(null);
            }}
            className={cn(
              "w-full rounded-xl px-3 py-2.5 text-start text-sm font-semibold transition",
              selectedSeries === "all" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-slate-50"
            )}
          >
            {copy.allSeries}
          </button>
          {seriesGroups.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-slate-500">{copy.noSeriesFound}</p>
          ) : seriesGroups.map((group) => (
            <button
              key={group.series}
              onClick={() => {
                setSelectedSeries(group.series);
                setSelectedModelLine(null);
              }}
              className={cn(
                "w-full rounded-xl px-3 py-2.5 text-start transition",
                selectedSeries === group.series ? "bg-primary/10 text-primary ring-1 ring-primary/20" : "hover:bg-slate-50"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-black">{group.series}</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500">{group.items.length}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-black text-slate-950">{copy.chooseModelLine}</h3>
              <p className="mt-1 text-xs text-slate-500">{copy.laptopSpecsNote}</p>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              {visibleOptions.length} {copy.models}
            </span>
          </div>

          {modelGroups.length === 0 ? (
            <EmptyState text={copy.noModelsForFilter} />
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {modelGroups.slice(0, 72).map((group) => {
                const selected = selectedModel?.modelLine === group.modelLine;
                const generations = group.items.map((item) => item.generation).filter(Boolean);
                return (
                  <button
                    key={group.modelLine}
                    onClick={() => setSelectedModelLine(group.modelLine)}
                    className={cn(
                      "rounded-2xl border bg-white p-4 text-start shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md",
                      selected ? "border-primary ring-4 ring-primary/10" : "border-slate-200"
                    )}
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="rounded-xl bg-slate-100 p-2 text-slate-600">
                        <Laptop className="h-5 w-5" />
                      </div>
                      <ScopeBadge isGlobal={group.items.every((item) => item.family.isGlobalDefault)} copy={copy} />
                    </div>
                    <p className="line-clamp-2 text-sm font-black text-slate-950">{group.modelLine}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{group.items[0]?.series}</p>
                    <p className="mt-3 text-xs font-bold text-primary">
                      {generations.length > 0 ? `${generations.length} ${copy.generation}` : copy.optionalGeneration}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {selectedModel && (
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-sm font-black text-slate-950">{copy.availableGenerations}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedModel.items.map((item) => (
                <span key={item.family.id} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">
                  {item.generation || item.modelLine}
                  <ScopeBadge isGlobal={item.family.isGlobalDefault} copy={copy} />
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PrinterCatalogPanel({
  copy,
  locale,
  brand,
  families,
  query,
  selectedType,
  onSelectedTypeChange,
}: {
  copy: Copy;
  locale: Locale;
  brand: Brand;
  families: Family[];
  query: string;
  selectedType: PrinterTypeKey | "all";
  onSelectedTypeChange: (type: PrinterTypeKey | "all") => void;
}) {
  const typeCounts = useMemo(() => {
    const counts: Record<PrinterTypeKey, number> = { laser: 0, ink_tank: 0, ink_cartridge: 0, risograph: 0 };
    for (const family of families) {
      const type = printerTypeFromFamilyName(family.name);
      if (type) counts[type]++;
    }
    return counts;
  }, [families]);

  const filteredFamilies = families.filter((family) => {
    const type = printerTypeFromFamilyName(family.name);
    const matchesType = selectedType === "all" || type === selectedType;
    return matchesType && familyMatchesQuery(family, query, brand);
  });

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-black text-slate-950">{copy.typeSummary}</h3>
            <p className="mt-1 text-xs text-slate-500">{copy.printerFlow}</p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            {filteredFamilies.length} {copy.filtered}
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-5">
          <button
            onClick={() => onSelectedTypeChange("all")}
            className={cn(
              "rounded-2xl border p-4 text-start shadow-sm transition hover:border-primary/40",
              selectedType === "all" ? "border-primary bg-primary text-primary-foreground" : "border-slate-200 bg-white"
            )}
          >
            <Boxes className="mb-2 h-5 w-5" />
            <p className="text-sm font-black">{copy.allTypes}</p>
            <p className="mt-1 text-xs opacity-80">{families.length} {copy.models}</p>
          </button>
          {(Object.keys(PRINTER_PREFIXES) as PrinterTypeKey[]).map((key) => (
            <button
              key={key}
              onClick={() => onSelectedTypeChange(key)}
              className={cn(
                "rounded-2xl border p-4 text-start shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md",
                selectedType === key ? "border-primary bg-primary text-primary-foreground" : "border-slate-200 bg-white"
              )}
            >
              <Printer className="mb-2 h-5 w-5" />
              <p className="text-sm font-black">{PRINTER_TYPE_LABELS[key][locale]}</p>
              <p className="mt-1 text-xs opacity-80">{typeCounts[key]} {copy.models}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        {filteredFamilies.length === 0 ? (
          <EmptyState text={copy.noModel} />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filteredFamilies.slice(0, 120).map((family) => {
              const type = printerTypeFromFamilyName(family.name);
              return (
                <div key={family.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-primary/40 hover:shadow-md">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="rounded-xl bg-slate-100 p-2 text-slate-600"><Printer className="h-5 w-5" /></div>
                    <ScopeBadge isGlobal={family.isGlobalDefault} copy={copy} />
                  </div>
                  <p className="line-clamp-2 text-sm font-black text-slate-950">{printerDisplayName(family.name)}</p>
                  <p className="mt-2 text-xs font-bold text-primary">{type ? PRINTER_TYPE_LABELS[type][locale] : copy.printerType}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}


function PhoneCatalogPanel({
  copy,
  brand,
  families,
  query,
}: {
  copy: Copy;
  brand: Brand;
  families: Family[];
  query: string;
}) {
  const filteredFamilies = useMemo(
    () => families.filter((family) => familyMatchesQuery(family, query, brand)),
    [brand, families, query]
  );
  const [selectedSeries, setSelectedSeries] = useState<string | "all">("all");

  const seriesGroups = useMemo(() => {
    const map = new Map<string, Family[]>();
    for (const family of filteredFamilies) {
      const series = detectPhoneSeries(family.name, brand.name);
      map.set(series, [...(map.get(series) ?? []), family]);
    }
    return Array.from(map.entries())
      .map(([series, items]) => ({ series, items }))
      .sort((a, b) => {
        const preferred = ["iPhone", "iPhone SE", "Galaxy S", "Galaxy A", "Galaxy Note", "Galaxy Z Fold", "Galaxy Z Flip", "Redmi Note", "Poco X", "Oppo Reno"];
        const ai = preferred.indexOf(a.series);
        const bi = preferred.indexOf(b.series);
        if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
        return a.series.localeCompare(b.series);
      });
  }, [brand.name, filteredFamilies]);

  const visibleFamilies = selectedSeries === "all"
    ? filteredFamilies
    : filteredFamilies.filter((family) => detectPhoneSeries(family.name, brand.name) === selectedSeries);

  return (
    <div className="grid gap-4 xl:grid-cols-[280px_1fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-black text-slate-950">{copy.chooseSeries}</h3>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-500">{seriesGroups.length}</span>
        </div>
        <div className="space-y-1.5 max-h-[31rem] overflow-y-auto pe-1">
          <button
            onClick={() => setSelectedSeries("all")}
            className={cn(
              "w-full rounded-xl px-3 py-2.5 text-start text-sm font-semibold transition",
              selectedSeries === "all" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-slate-50"
            )}
          >
            {copy.allSeries}
          </button>
          {seriesGroups.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-slate-500">{copy.noSeriesFound}</p>
          ) : seriesGroups.map((group) => (
            <button
              key={group.series}
              onClick={() => setSelectedSeries(group.series)}
              className={cn(
                "w-full rounded-xl px-3 py-2.5 text-start transition",
                selectedSeries === group.series ? "bg-primary/10 text-primary ring-1 ring-primary/20" : "hover:bg-slate-50"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-black">{group.series}</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500">{group.items.length}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-black text-slate-950">{copy.models}</h3>
            <p className="mt-1 text-xs text-slate-500">
              {selectedSeries === "all" ? `${brand.name} · ${visibleFamilies.length} ${copy.models}` : `${brand.name} · ${selectedSeries}`}
            </p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            {visibleFamilies.length} {copy.models}
          </span>
        </div>

        {visibleFamilies.length === 0 ? (
          <EmptyState text={copy.noModel} />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {visibleFamilies.map((family) => {
              const series = detectPhoneSeries(family.name, brand.name);
              return (
                <div key={family.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="rounded-xl bg-slate-100 p-2 text-slate-600"><Smartphone className="h-5 w-5" /></div>
                    <ScopeBadge isGlobal={family.isGlobalDefault} copy={copy} />
                  </div>
                  <p className="line-clamp-2 text-sm font-black text-slate-950">{stripBrandPrefix(family.name, brand.name)}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">{series}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-[11px] font-bold text-primary">{brand.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function SimpleModelPanel({
  copy,
  categoryKey,
  brand,
  families,
  query,
}: {
  copy: Copy;
  categoryKey: string;
  brand: Brand;
  families: Family[];
  query: string;
}) {
  const Icon = CATEGORY_ICONS[categoryKey] ?? HelpCircle;
  const filteredFamilies = families.filter((family) => familyMatchesQuery(family, query, brand));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {filteredFamilies.length === 0 ? (
        <EmptyState text={copy.noModel} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredFamilies.slice(0, 180).map((family) => (
            <div key={family.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-primary/40 hover:shadow-md">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="rounded-xl bg-slate-100 p-2 text-slate-600"><Icon className="h-5 w-5" /></div>
                <ScopeBadge isGlobal={family.isGlobalDefault} copy={copy} />
              </div>
              <p className="line-clamp-2 text-sm font-black text-slate-950">{family.name}</p>
              <p className="mt-2 text-xs font-semibold text-slate-500">{brand.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export function CatalogBrowser({
  categories,
  selectedCategoryKey,
  brands,
  selectedBrandId,
  families,
  userRole,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawLocale = useLocale();
  const locale: Locale = rawLocale === "ar" || rawLocale === "en" ? rawLocale : "fr";
  const copy = COPY[locale];
  const canManage = hasPermission(userRole, "inventory:manage");

  const [showAddBrand, setShowAddBrand] = useState(false);
  const [showAddFamily, setShowAddFamily] = useState(false);
  const [query, setQuery] = useState("");
  const [printerType, setPrinterType] = useState<PrinterTypeKey | "all">("all");

  const selectedCategory = categories.find((category) => category.key === selectedCategoryKey) ?? null;
  const selectedBrand = brands.find((brand) => brand.id === selectedBrandId) ?? null;
  const isPhone = selectedCategory?.key === "phone";
  const isLaptop = selectedCategory?.key === "laptop";
  const isPrinter = selectedCategory?.key === "printer";

  const totalBrandCount = brands.length;
  const totalModelCount = families.length;
  const visibleBrands = brands.filter((brand) => !query || normalize(brand.name).includes(normalize(query)) || families.some((family) => family.brandId === brand.id && familyMatchesQuery(family, query, brand)));

  function selectCategory(key: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", key);
    params.delete("brand");
    router.push(`/dashboard/settings/catalog?${params.toString()}`);
    setShowAddBrand(false);
    setShowAddFamily(false);
    setPrinterType("all");
  }

  function selectBrand(id: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("brand", id);
    router.push(`/dashboard/settings/catalog?${params.toString()}`);
    setShowAddFamily(false);
  }

  async function handleAddBrand(name: string) {
    if (!selectedCategory) return;
    const result = await createStoreCustomBrand(selectedCategory.id, name);
    if ("error" in result) throw new Error(result.error);
    setShowAddBrand(false);
    router.refresh();
  }

  async function handleAddFamily(name: string) {
    if (!selectedBrand) return;
    const result = await createStoreCustomFamily(selectedBrand.id, name);
    if ("error" in result) throw new Error(result.error);
    setShowAddFamily(false);
    router.refresh();
  }

  const phoneFlowText = locale === "ar"
    ? "هاتف → علامة → سلسلة → موديل دقيق → مشاكل"
    : locale === "en"
      ? "Phone → Brand → Series → Exact model → Problems"
      : "Téléphone → Marque → Série → Modèle précis → Problèmes";
  const flowText = isLaptop ? copy.laptopFlow : isPrinter ? copy.printerFlow : isPhone ? phoneFlowText : copy.defaultFlow;

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 text-white shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80 ring-1 ring-white/10">
              <Database className="h-3.5 w-3.5" />
              {copy.usedByRepairWizard}
            </div>
            <h2 className="text-2xl font-black tracking-tight">{copy.overview}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">{copy.databaseReadyDesc}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-sm font-bold text-white/90 shadow-inner">
            <div className="mb-1 flex items-center gap-2 text-white/60"><Wrench className="h-4 w-4" />{copy.repairFlow}</div>
            {flowText}
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <StatCard icon={Globe} label={copy.totalBrands} value={totalBrandCount} />
        <StatCard icon={Layers3} label={copy.totalModels} value={totalModelCount} />
        <StatCard icon={BadgeCheck} label={copy.customFallback} value={canManage ? copy.add : "—"} />
      </div>

      <div className="grid gap-4 xl:grid-cols-[280px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-950">{copy.categories}</h3>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-500">{categories.length}</span>
            </div>
            <div className="space-y-1.5">
              {categories.map((category) => {
                const Icon = CATEGORY_ICONS[category.key] ?? HelpCircle;
                const active = category.key === selectedCategoryKey;
                return (
                  <button
                    key={category.key}
                    onClick={() => selectCategory(category.key)}
                    className={cn(
                      "w-full rounded-2xl px-3 py-3 text-start transition",
                      active ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-slate-50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn("rounded-xl p-2", active ? "bg-white/15" : "bg-slate-100 text-slate-600")}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-black">{categoryLabel(category, locale)}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600"><BadgeCheck className="h-5 w-5" /></div>
              <div>
                <h3 className="text-sm font-black text-slate-950">{copy.customFallback}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">{copy.customFallbackDesc}</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="relative">
              <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={copy.searchPlaceholder} className={cn(inputCls, "ps-9")} />
            </div>
          </div>

          {!selectedCategory ? (
            <EmptyState text={copy.selectCategory} />
          ) : (
            <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
              <section className="space-y-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-black text-slate-950">{copy.brands}</h3>
                      <p className="text-xs text-slate-500">{categoryLabel(selectedCategory, locale)}</p>
                    </div>
                    {canManage && !showAddBrand && (
                      <button onClick={() => setShowAddBrand(true)} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/15">
                        <Plus className="h-3.5 w-3.5" />{copy.add}
                      </button>
                    )}
                  </div>
                  <div className="space-y-1.5 max-h-[34rem] overflow-y-auto pe-1">
                    {visibleBrands.length === 0 ? (
                      <p className="px-3 py-6 text-center text-sm text-slate-500">{copy.noBrand}</p>
                    ) : visibleBrands.map((brand) => (
                      <button
                        key={brand.id}
                        onClick={() => selectBrand(brand.id)}
                        className={cn(
                          "w-full rounded-2xl border p-3 text-start transition hover:border-primary/30 hover:bg-primary/5",
                          brand.id === selectedBrandId ? "border-primary bg-primary/10 ring-4 ring-primary/10" : "border-transparent"
                        )}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-black text-slate-950">{brand.name}</p>
                            <p className="mt-1 text-xs font-medium text-slate-500">
                              {brand._count?.modelFamilies ?? 0} {copy.models}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <ScopeBadge isGlobal={brand.isGlobalDefault} copy={copy} />
                            <ChevronRight className="h-4 w-4 text-slate-400" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {showAddBrand && (
                  <InlineAddBrandForm copy={copy} onSubmit={handleAddBrand} onCancel={() => setShowAddBrand(false)} />
                )}
              </section>

              <section className="space-y-4">
                {!selectedBrand ? (
                  <EmptyState text={copy.selectBrand} />
                ) : (
                  <>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h2 className="text-lg font-black tracking-tight text-slate-950">{selectedBrand.name}</h2>
                          <p className="mt-1 text-sm text-slate-500">{flowText}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <ScopeBadge isGlobal={selectedBrand.isGlobalDefault} copy={copy} />
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{families.length} {copy.models}</span>
                          {canManage && !showAddFamily && (
                            <button onClick={() => setShowAddFamily(true)} className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary/90">
                              <Plus className="h-3.5 w-3.5" />{copy.addModel}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {showAddFamily && (
                      <AddModelForm
                        copy={copy}
                        categoryKey={selectedCategory.key}
                        brand={selectedBrand}
                        selectedPrinterType={printerType}
                        locale={locale}
                        onSubmit={handleAddFamily}
                        onCancel={() => setShowAddFamily(false)}
                      />
                    )}

                    {isLaptop ? (
                      <LaptopCatalogPanel copy={copy} brand={selectedBrand} families={families} query={query} />
                    ) : isPrinter ? (
                      <PrinterCatalogPanel
                        copy={copy}
                        locale={locale}
                        brand={selectedBrand}
                        families={families}
                        query={query}
                        selectedType={printerType}
                        onSelectedTypeChange={setPrinterType}
                      />
                    ) : isPhone ? (
                      <PhoneCatalogPanel copy={copy} brand={selectedBrand} families={families} query={query} />
                    ) : (
                      <SimpleModelPanel copy={copy} categoryKey={selectedCategory.key} brand={selectedBrand} families={families} query={query} />
                    )}
                  </>
                )}
              </section>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
