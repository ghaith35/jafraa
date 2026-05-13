"use client";

import { useLocale } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, useTransition, type FormEvent } from "react";
import { Dialog } from "@/components/ui/dialog";
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
  logoUrl?: string | null;
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

interface DeviceModel {
  id: string;
  name: string;
  releaseYear: number | null;
  imageUrl: string | null;
  specs: Record<string, unknown> | null;
  variants: Record<string, unknown>[] | null;
}

interface Props {
  categories: Category[];
  selectedCategoryKey: string | null;
  brands: Brand[];
  selectedBrandId: string | null;
  families: Family[];
  selectedFamilyId?: string | null;
  models?: DeviceModel[];
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
  all_in_one: Monitor,
  desktop_unit: Monitor,
  printer_laser: Printer,
  printer_cartridge: Printer,
  printer_risograph: Printer,
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
  "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-slate-400 shadow-sm outline-none transition focus:border-primary/50 focus:ring-4 focus:ring-primary/10 disabled:opacity-50";

const ghostButton =
  "rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-semibold text-[var(--text-secondary)] shadow-sm transition hover:border-primary/30 hover:bg-primary/5 disabled:opacity-50";

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

function BrandLogo({ brand, size = 16 }: { brand: { name: string; logoUrl?: string | null }; size?: number }) {
  const [imgError, setImgError] = useState(false);
  if (brand.logoUrl && !imgError) {
    return (
      <img
        src={brand.logoUrl}
        alt={brand.name}
        className="shrink-0 rounded"
        style={{ width: size, height: size, objectFit: "contain" }}
        onError={() => setImgError(true)}
      />
    );
  }
  return (
    <div className="shrink-0 flex items-center justify-center rounded font-bold" style={{ width: size, height: size, fontSize: size * 0.45 }}>
      {brand.name[0]?.toUpperCase() ?? "?"}
    </div>
  );
}

// ─── Small UI pieces ─────────────────────────────────────────────────────────

function ScopeBadge({ isGlobal, copy }: { isGlobal: boolean; copy: Copy }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[12px] font-bold",
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
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-2 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-medium text-[var(--text-secondary)]">{label}</p>
          <p className="text-xl font-black tracking-tight text-[var(--text-primary)]">{value}</p>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--muted)]/70 p-8 text-center">
      <HelpCircle className="mx-auto mb-3 h-8 w-8 text-slate-300" />
      <p className="text-sm font-medium text-[var(--text-secondary)]">{text}</p>
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
  locale,
  onSubmit,
  onCancel,
}: {
  copy: Copy;
  categoryKey: string;
  brand: Brand;
  locale: Locale;
  onSubmit: (name: string) => Promise<void>;
  onCancel: () => void;
}) {
  const [genericName, setGenericName] = useState("");
  const [series, setSeries] = useState("");
  const [modelLine, setModelLine] = useState("");
  const [generation, setGeneration] = useState("");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const isLaptop = categoryKey === "laptop";
  const isPrinter = categoryKey?.startsWith("printer") ?? false;

  function buildName() {
    if (isLaptop) {
      const pieces = [brand.name, series, modelLine, generation].map((part) => part.trim()).filter(Boolean);
      return pieces.join(" ").replace(/\s+/g, " ");
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
    <form onSubmit={handleSubmit} className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-white p-4 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-black text-[var(--text-primary)]">
            {isLaptop ? copy.addLaptopModel : copy.addModel}
          </h3>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">{copy.alreadyExistsHint}</p>
        </div>
        <button type="button" onClick={onCancel} className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          {copy.cancel}
        </button>
      </div>

      {isLaptop ? (
        <div className="grid gap-3 md:grid-cols-3">
          <input value={series} onChange={(e) => setSeries(e.target.value)} placeholder={copy.series} className={inputCls} disabled={isPending} />
          <input value={modelLine} onChange={(e) => setModelLine(e.target.value)} placeholder={copy.modelLine} className={inputCls} disabled={isPending} />
          <input value={generation} onChange={(e) => setGeneration(e.target.value)} placeholder={copy.optionalGeneration} className={inputCls} disabled={isPending} />
        </div>
      ) : (
        <input value={genericName} onChange={(e) => setGenericName(e.target.value)} placeholder={copy.familyPlaceholder} className={inputCls} disabled={isPending} />
      )}

      {isLaptop && <p className="mt-2 text-xs font-medium text-[var(--text-secondary)]">{copy.notSavedSpecs}</p>}

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-h-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)]">
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
  const [seriesCollapsed, setSeriesCollapsed] = useState(false);
  const [modelsCollapsed, setModelsCollapsed] = useState(false);

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

  function selectModelLine(line: string) {
    setSelectedModelLine(line === selectedModelLine ? null : line);
    if (line !== selectedModelLine) setModelsCollapsed(true);
  }

  function selectSeries(series: string) {
    setSelectedSeries(series);
    setSelectedModelLine(null);
    if (series !== "all") setSeriesCollapsed(true);
  }

  return (
    <div className="flex gap-4 flex-1">
      <div className={cn("shrink-0 transition-all duration-300 flex flex-col", seriesCollapsed ? "w-[100px]" : "w-[280px]")}>
        <button
          onClick={() => setSeriesCollapsed(!seriesCollapsed)}
          className="flex h-8 w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-3"
        >
          <ChevronRight className={cn("h-4 w-4 transition-transform", seriesCollapsed ? "" : "rotate-180")} />
        </button>

        {seriesCollapsed ? (
          /* Thin series list — categories sidebar style */
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm">
            <div className="space-y-0.5">
              <button onClick={() => selectSeries("all")}
                className={cn(
                  "w-full rounded-lg px-2 py-2 text-start text-xs font-bold transition",
                  selectedSeries === "all" ? "bg-primary text-primary-foreground" : "text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)]"
                )}
              >{copy.allSeries}</button>
              {seriesGroups.map((group) => (
                <button key={group.series} onClick={() => selectSeries(group.series)}
                  className={cn(
                    "w-full rounded-lg px-2 py-2 text-start text-xs font-bold transition",
                    selectedSeries === group.series ? "bg-primary text-primary-foreground" : "text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)]"
                  )}
                  title={group.series}
                >
                  {group.series}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Full series list */
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm">
            <div className="space-y-1.5 max-h-[31rem] overflow-y-auto pe-1">
              <button onClick={() => selectSeries("all")}
                className={cn(
                  "w-full rounded-xl px-3 py-2.5 text-start text-sm font-semibold transition",
                  selectedSeries === "all" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-[var(--muted)]"
                )}
              >{copy.allSeries}</button>
              {seriesGroups.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-[var(--text-secondary)]">{copy.noSeriesFound}</p>
              ) : seriesGroups.map((group) => (
                <button key={group.series} onClick={() => selectSeries(group.series)}
                  className={cn(
                    "w-full rounded-xl px-3 py-2.5 text-start transition",
                    selectedSeries === group.series ? "bg-primary/10 text-primary ring-1 ring-primary/20" : "hover:bg-[var(--muted)]"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-black">{group.series}</span>
                    <span className="rounded-full bg-[var(--muted)] px-2 py-0.5 text-[13px] font-bold text-[var(--text-secondary)]">{group.items.length}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Model lines sidebar */}
      <div className={cn("shrink-0 transition-all duration-300 flex flex-col", modelsCollapsed ? "w-[100px]" : "flex-1 min-w-0")}>
        <button
          onClick={() => setModelsCollapsed(!modelsCollapsed)}
          className={cn(
            "flex h-8 w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-3",
            modelsCollapsed ? "" : "self-start"
          )}
          style={modelsCollapsed ? undefined : { width: "auto", padding: "0 12px" }}
        >
          <ChevronRight className={cn("h-4 w-4 transition-transform", modelsCollapsed ? "" : "rotate-180")} />
        </button>

        {modelsCollapsed ? (
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm">
            <div className="space-y-0.5">
              {modelGroups.map((group) => {
                const selected = selectedModel?.modelLine === group.modelLine;
                return (
                  <button key={group.modelLine} onClick={() => selectModelLine(group.modelLine)}
                    className={cn("w-full rounded-lg px-2 py-2 text-start text-xs font-bold transition", selected ? "bg-primary text-primary-foreground" : "text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)]")}
                    title={group.modelLine}
                  >
                    {group.modelLine}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              {visibleOptions.length} {copy.models}
            </span>
            {modelGroups.length === 0 ? (
              <EmptyState text={copy.noModelsForFilter} />
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {modelGroups.slice(0, 72).map((group) => {
                  const selected = selectedModel?.modelLine === group.modelLine;
                  const generations = group.items.map((item) => item.generation).filter(Boolean);
                  return (
                    <button key={group.modelLine} onClick={() => selectModelLine(group.modelLine)}
                      className={cn("rounded-xl border bg-[var(--surface)] p-4 text-start shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md", selected ? "border-primary ring-4 ring-primary/10" : "border-[var(--border)]")}
                    >
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <div className="rounded-xl bg-[var(--muted)] p-2 text-[var(--text-secondary)]"><Laptop className="h-5 w-5" /></div>
                        <ScopeBadge isGlobal={group.items.every((item) => item.family.isGlobalDefault)} copy={copy} />
                      </div>
                      <p className="line-clamp-2 text-sm font-black text-[var(--text-primary)]">{group.modelLine}</p>
                      <p className="mt-1 text-xs font-medium text-[var(--text-secondary)]">{group.items[0]?.series}</p>
                      <p className="mt-3 text-xs font-bold text-primary">{generations.length > 0 ? `${generations.length} ${copy.generation}` : copy.optionalGeneration}</p>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Rightmost: generations / main display */}
      {selectedModel && modelsCollapsed && (
        <div className="flex-1 min-w-0">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
            <h3 className="text-xs font-bold text-[var(--text-primary)] mb-3">{copy.availableGenerations}</h3>
            <div className="flex flex-wrap gap-2">
              {selectedModel.items.map((item) => (
                <span key={item.family.id} className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--muted)] px-3 py-2 text-xs font-bold text-[var(--text-secondary)]">
                  {item.generation || item.modelLine}
                  <ScopeBadge isGlobal={item.family.isGlobalDefault} copy={copy} />
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PrinterCatalogPanel({
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
  const filteredFamilies = families.filter((family) => familyMatchesQuery(family, query, brand));

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      {filteredFamilies.length === 0 ? (
        <EmptyState text={copy.noModel} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredFamilies.slice(0, 120).map((family) => (
            <div key={family.id} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition hover:border-primary/40 hover:shadow-md">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="rounded-xl bg-[var(--muted)] p-2 text-[var(--text-secondary)]"><Printer className="h-5 w-5" /></div>
                <ScopeBadge isGlobal={family.isGlobalDefault} copy={copy} />
              </div>
              <p className="line-clamp-2 text-sm font-black text-[var(--text-primary)]">{family.name}</p>
              <p className="mt-2 text-xs font-bold text-[var(--text-secondary)]">{brand.name}</p>
            </div>
          ))}
        </div>
      )}
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

  const [seriesCollapsed, setSeriesCollapsed] = useState(false);

  function selectSeries(series: string) {
    setSelectedSeries(series);
    if (series !== "all") setSeriesCollapsed(true);
  }

  return (
    <div className="flex gap-4 flex-1">
      <div className={cn("shrink-0 transition-all duration-300 flex flex-col", seriesCollapsed ? "w-[100px]" : "w-[280px]")}>
        <button
          onClick={() => setSeriesCollapsed(!seriesCollapsed)}
          className="flex h-8 w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-3"
        >
          <ChevronRight className={cn("h-4 w-4 transition-transform", seriesCollapsed ? "" : "rotate-180")} />
        </button>

        {seriesCollapsed ? (
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm">
            <div className="space-y-0.5">
              <button onClick={() => selectSeries("all")}
                className={cn("w-full rounded-lg px-2 py-2 text-start text-xs font-bold transition", selectedSeries === "all" ? "bg-primary text-primary-foreground" : "text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)]")}
              >{copy.allSeries}</button>
              {seriesGroups.map((group) => (
                <button key={group.series} onClick={() => selectSeries(group.series)}
                  className={cn("w-full rounded-lg px-2 py-2 text-start text-xs font-bold transition", selectedSeries === group.series ? "bg-primary text-primary-foreground" : "text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)]")}
                  title={group.series}
                >
                  {group.series}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm">
            <div className="space-y-1.5 max-h-[31rem] overflow-y-auto pe-1">
              <button onClick={() => selectSeries("all")}
                className={cn("w-full rounded-xl px-3 py-2.5 text-start text-sm font-semibold transition", selectedSeries === "all" ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-[var(--muted)]")}
              >{copy.allSeries}</button>
              {seriesGroups.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-[var(--text-secondary)]">{copy.noSeriesFound}</p>
              ) : seriesGroups.map((group) => (
                <button key={group.series} onClick={() => selectSeries(group.series)}
                  className={cn("w-full rounded-xl px-3 py-2.5 text-start transition", selectedSeries === group.series ? "bg-primary/10 text-primary ring-1 ring-primary/20" : "hover:bg-[var(--muted)]")}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-black">{group.series}</span>
                    <span className="rounded-full bg-[var(--muted)] px-2 py-0.5 text-[13px] font-bold text-[var(--text-secondary)]">{group.items.length}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-black text-[var(--text-primary)]">{copy.models}</h3>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
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
                <div key={family.id} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="rounded-xl bg-[var(--muted)] p-2 text-[var(--text-secondary)]"><Smartphone className="h-5 w-5" /></div>
                    <ScopeBadge isGlobal={family.isGlobalDefault} copy={copy} />
                  </div>
                  <p className="line-clamp-2 text-sm font-black text-[var(--text-primary)]">{stripBrandPrefix(family.name, brand.name)}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--muted)] px-2 py-1 text-[13px] font-bold text-[var(--text-secondary)]">{series}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-[13px] font-bold text-primary">{brand.name}</span>
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
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      {filteredFamilies.length === 0 ? (
        <EmptyState text={copy.noModel} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredFamilies.slice(0, 180).map((family) => (
            <div key={family.id} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition hover:border-primary/40 hover:shadow-md">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="rounded-xl bg-[var(--muted)] p-2 text-[var(--text-secondary)]"><Icon className="h-5 w-5" /></div>
                <ScopeBadge isGlobal={family.isGlobalDefault} copy={copy} />
              </div>
              <p className="line-clamp-2 text-sm font-black text-[var(--text-primary)]">{family.name}</p>
              <p className="mt-2 text-xs font-semibold text-[var(--text-secondary)]">{brand.name}</p>
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
  selectedFamilyId,
  models = [],
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
  const [brandSectionCollapsed, setBrandSectionCollapsed] = useState(false);
  const [query, setQuery] = useState("");
  const [familySearch, setFamilySearch] = useState("");
  const [printerType, setPrinterType] = useState<PrinterTypeKey | "all">("all");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [variantModel, setVariantModel] = useState<DeviceModel | null>(null);

  const selectedCategory = categories.find((category) => category.key === selectedCategoryKey) ?? null;
  const selectedBrand = brands.find((brand) => brand.id === selectedBrandId) ?? null;
  const isPhone = selectedCategory?.key === "phone";
  const isLaptop = selectedCategory?.key === "laptop";
  const isPrinter = selectedCategory?.key?.startsWith("printer") ?? false;

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
    setSidebarCollapsed(true);
  }

  function selectBrand(id: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("brand", id);
    params.delete("family");
    router.push(`/dashboard/settings/catalog?${params.toString()}`);
    setShowAddFamily(false);
    setSidebarCollapsed(true);
    setBrandSectionCollapsed(true);
  }

  function selectFamily(id: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("family", id);
    router.push(`/dashboard/settings/catalog?${params.toString()}`);
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



  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="flex flex-col gap-4" style={{ height: "calc(100svh - 10rem)" }}>
      {/* Compact header with search */}
      <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 shadow-[var(--shadow-sm)]">
        <BadgeCheck className="h-5 w-5 shrink-0 text-[var(--primary)]" />
        <span className="hidden sm:inline rounded-full bg-[var(--muted)] px-2 py-0.5 text-[11px] font-semibold text-[var(--text-secondary)] shrink-0">
          {totalBrandCount} {copy.totalBrands} · {totalModelCount} {copy.totalModels}
        </span>
        <div className="relative flex-1 max-w-md">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-tertiary)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.searchPlaceholder}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 ps-10 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
          />
        </div>
      </div>

      {/* Main area: sidebar + scrollable data */}
      <div className="flex gap-4 flex-1 overflow-hidden">
        <aside className={cn("shrink-0 space-y-3 overflow-y-auto transition-all duration-300", sidebarCollapsed ? "w-[56px]" : "w-[240px]")}>
          {/* Collapse toggle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="flex h-8 w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            title={sidebarCollapsed ? copy.search : copy.categories}
          >
            <ChevronRight className={cn("h-4 w-4 transition-transform", sidebarCollapsed ? "" : "rotate-180")} />
          </button>

          <div className={cn("rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm")}>
            {!sidebarCollapsed && (
              <div className="mb-2 flex items-center justify-between px-1">
                <h3 className="text-xs font-bold text-[var(--text-primary)]">{copy.categories}</h3>
                <span className="rounded-full bg-[var(--muted)] px-2 py-0.5 text-[11px] font-bold text-[var(--text-secondary)]">{categories.length}</span>
              </div>
            )}
            <div className="space-y-0.5">
              {categories.map((category) => {
                const Icon = CATEGORY_ICONS[category.key] ?? HelpCircle;
                const active = category.key === selectedCategoryKey;
                return (
                  <button
                    key={category.key}
                    onClick={() => selectCategory(category.key)}
                    className={cn(
                      "group relative flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-start transition",
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)]"
                    )}
                    title={sidebarCollapsed ? categoryLabel(category, locale) : undefined}
                  >
                    <div className={cn("rounded-lg p-1.5 shrink-0", active ? "bg-white/15" : "bg-[var(--muted)]")}>
                      <Icon className="h-4 w-4" />
                    </div>
                    {!sidebarCollapsed && (
                      <span className="text-xs font-bold truncate">{categoryLabel(category, locale)}</span>
                    )}
                    {sidebarCollapsed && (
                      <span className="absolute start-full ms-2 top-1/2 -translate-y-1/2 z-50 hidden group-hover:block rounded-lg border border-[var(--border)] bg-[var(--popover)] px-2 py-1 text-xs font-medium text-[var(--popover-foreground)] shadow-[var(--shadow-lg)] whitespace-nowrap">
                        {categoryLabel(category, locale)}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={cn("rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm")}>
            <div className="flex items-start gap-2.5">
              <div className="rounded-lg bg-emerald-50 p-1.5 text-emerald-600 shrink-0"><BadgeCheck className="h-4 w-4" /></div>
              {!sidebarCollapsed && (
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">{copy.customFallback}</h3>
                  <p className="mt-0.5 text-xs text-[var(--text-secondary)]">{copy.customFallbackDesc}</p>
                </div>
              )}
            </div>
          </div>
        </aside>

        <main className="flex flex-col overflow-y-auto">
          {!selectedCategory ? (
            <EmptyState text={copy.selectCategory} />
          ) : (
            <div className="flex gap-4 flex-1" style={{ minHeight: 0 }}>
              <section className={cn("shrink-0 transition-all duration-300 flex flex-col", brandSectionCollapsed ? "w-[100px]" : "w-[320px]")}>
                {/* Collapse toggle — consistent with categories sidebar */}
                <button
                  onClick={() => setBrandSectionCollapsed(!brandSectionCollapsed)}
                  className="flex h-8 w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-3"
                >
                  <ChevronRight className={cn("h-4 w-4 transition-transform", brandSectionCollapsed ? "" : "rotate-180")} />
                </button>

                {brandSectionCollapsed ? (
                  /* Thin brand list — categories sidebar style */
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm">
                    <div className="space-y-0.5">
                      {visibleBrands.length === 0 ? (
                        <p className="px-2 py-4 text-center text-xs text-[var(--text-secondary)]">{copy.noBrand}</p>
                      ) : visibleBrands.map((brand) => (
                        <button
                          key={brand.id}
                          onClick={() => selectBrand(brand.id)}
                          className={cn(
                            "group relative flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-start text-xs transition",
                            brand.id === selectedBrandId
                              ? "bg-primary text-primary-foreground"
                              : "text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)]"
                          )}
                          title={brand.name}
                        >
                          <BrandLogo brand={brand} size={16} />
                          <span className="truncate font-bold">{brand.name}</span>
                          {brand.id === selectedBrandId && (
                            <span className="ms-auto text-[10px] opacity-70 font-medium">{brand._count?.modelFamilies ?? 0}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Full brand list */
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-black text-[var(--text-primary)]">{copy.brands}</h3>
                        <p className="text-xs text-[var(--text-secondary)]">{categoryLabel(selectedCategory, locale)}</p>
                      </div>
                      {canManage && !showAddBrand && (
                        <button onClick={() => setShowAddBrand(true)} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/15">
                          <Plus className="h-3.5 w-3.5" />{copy.add}
                        </button>
                      )}
                    </div>
                    <div className="space-y-1.5 max-h-[34rem] overflow-y-auto pe-1">
                      {visibleBrands.length === 0 ? (
                        <p className="px-3 py-6 text-center text-sm text-[var(--text-secondary)]">{copy.noBrand}</p>
                      ) : visibleBrands.map((brand) => (
                        <button
                          key={brand.id}
                          onClick={() => selectBrand(brand.id)}
                          className={cn(
                            "w-full rounded-xl border p-3 text-start transition hover:border-primary/30 hover:bg-primary/5",
                            brand.id === selectedBrandId ? "border-primary bg-primary/10 ring-2 ring-primary/10" : "border-transparent"
                          )}
                        >
                          <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <BrandLogo brand={brand} size={20} />
                            <div className="min-w-0">
                              <p className="truncate text-sm font-black text-[var(--text-primary)]">{brand.name}</p>
                              <p className="mt-0.5 text-xs font-medium text-[var(--text-secondary)]">
                                {brand._count?.modelFamilies ?? 0} {copy.models}
                              </p>
                            </div>
                          </div>
                            <div className="flex items-center gap-2">
                              <ScopeBadge isGlobal={brand.isGlobalDefault} copy={copy} />
                              <ChevronRight className="h-4 w-4 text-[var(--text-tertiary)]" />
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {showAddBrand && (
                  <InlineAddBrandForm copy={copy} onSubmit={handleAddBrand} onCancel={() => setShowAddBrand(false)} />
                )}
              </section>

              <section className="flex-1 min-w-0 flex flex-col">
                {!selectedBrand ? (
                  <EmptyState text={copy.selectBrand} />
                ) : (
                  <>
                    {showAddFamily && (
                      <AddModelForm
                        copy={copy}
                        categoryKey={selectedCategory.key}
                        brand={selectedBrand}
                        locale={locale}
                        onSubmit={handleAddFamily}
                        onCancel={() => setShowAddFamily(false)}
                      />
                    )}

                    {/* Family sidebar + models */}
                    {families.length > 0 ? (
                      <div className="flex gap-4 flex-1" style={{ minHeight: 0 }}>
                        {/* Family sidebar */}
                        <div className="w-[200px] shrink-0 flex flex-col gap-3" style={{ minHeight: 0 }}>
                          <button
                            onClick={() => { const p = new URLSearchParams(searchParams.toString()); p.delete("family"); router.push(`/dashboard/settings/catalog?${p.toString()}`); }}
                            className="flex h-8 w-full items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shrink-0"
                          >
                            <Layers3 className="h-4 w-4" />
                          </button>

                          {/* Search */}
                          <div className="relative shrink-0">
                            <Search className="pointer-events-none absolute start-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--text-tertiary)]" />
                            <input
                              value={familySearch}
                              onChange={(e) => setFamilySearch(e.target.value)}
                              placeholder={copy.search}
                              className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2 py-1.5 ps-7 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                            />
                          </div>

                          {/* Family list */}
                          <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-sm overflow-y-auto">
                            <div className="space-y-0.5">
                              {families.filter((f) => !familySearch || f.name.toLowerCase().includes(familySearch.toLowerCase())).map((f) => (
                                <button
                                  key={f.id}
                                  onClick={() => selectFamily(f.id)}
                                  className={cn(
                                    "w-full rounded-lg px-2 py-2 text-start text-xs font-bold transition",
                                    selectedFamilyId === f.id
                                      ? "bg-primary text-primary-foreground"
                                      : "text-[var(--text-secondary)] hover:bg-[var(--muted)] hover:text-[var(--text-primary)]"
                                  )}
                                  title={f.name}
                                >
                                  <span className="truncate block">{f.name}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Content area */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          {selectedFamilyId && models.length > 0 ? (
                            <>
                              <div className="flex-1 overflow-y-auto">
                                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                                  {models.map((model) => (
                                    <div key={model.id} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all overflow-hidden flex flex-col" style={{ height: "400px" }}>
                                      <div className="h-[180px] bg-[var(--muted)] flex items-center justify-center shrink-0">
                                        {model.imageUrl ? (
                                          <img src={model.imageUrl} alt={model.name} className="h-full w-full object-contain p-3" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                                        ) : (
                                          <div className="text-xs text-[var(--text-tertiary)]">Pas d'image</div>
                                        )}
                                      </div>
                                      <div className="flex-1 p-3 flex flex-col gap-1 overflow-hidden">
                                        <p className="text-sm font-bold text-[var(--text-primary)] truncate">{model.name}</p>
                                        {model.releaseYear && <p className="text-xs text-[var(--text-tertiary)]">{model.releaseYear}</p>}
                                        {model.specs && (
                                          <div className="flex-1 space-y-0.5 text-xs text-[var(--text-secondary)] overflow-hidden">
                                            {model.specs.processor && <p className="truncate">CPU: {model.specs.processor as string}</p>}
                                            {model.specs.ram && <p>RAM: {model.specs.ram as string}</p>}
                                            {model.specs.battery && <p>Batterie: {model.specs.battery as string}</p>}
                                            {model.specs.storage && Array.isArray(model.specs.storage) && <p className="truncate">Stockage: {(model.specs.storage as string[]).join(" / ")}</p>}
                                          </div>
                                        )}
                                        {model.variants && model.variants.length > 0 && (
                                          <button onClick={() => setVariantModel(model)} className="mt-auto text-xs font-medium text-[var(--primary)] hover:underline text-start">
                                            {model.variants.length} variantes
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <Dialog open={!!variantModel} onClose={() => setVariantModel(null)} title={variantModel?.name ?? ""} className="max-w-lg">
                                {variantModel?.variants && (
                                  <div className="space-y-1.5 max-h-80 overflow-y-auto">
                                    {variantModel.variants.map((v, i) => (
                                      <div key={i} className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm">
                                        <span className="flex-1 font-medium text-[var(--text-primary)]">{(v as Record<string, unknown>).name as string}</span>
                                        {(v as Record<string, unknown>).storage && <span className="text-xs text-[var(--text-tertiary)]">{(v as Record<string, unknown>).storage as string}</span>}
                                        {(v as Record<string, unknown>).color && <span className="text-xs text-[var(--text-tertiary)]">{(v as Record<string, unknown>).color as string}</span>}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </Dialog>
                            </>
                          ) : selectedFamilyId && models.length === 0 ? (
                            <div className="flex-1 flex items-center justify-center p-8 text-sm text-[var(--text-secondary)]">Aucun modèle pour cette famille</div>
                          ) : (
                            <div className="flex-1 flex items-center justify-center p-8 text-sm text-[var(--text-tertiary)]">Sélectionnez une famille pour voir les modèles</div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col flex-1 gap-3 mt-3">
                        {canManage && !showAddFamily && (
                          <div className="flex items-center justify-end">
                            <button onClick={() => setShowAddFamily(true)}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--primary)] transition-all"
                            >
                              <Plus className="h-3.5 w-3.5" />{copy.addModel}
                            </button>
                          </div>
                        )}
                        {isLaptop ? <LaptopCatalogPanel copy={copy} brand={selectedBrand} families={families} query={query} />
                         : isPrinter ? <PrinterCatalogPanel copy={copy} brand={selectedBrand} families={families} query={query} />
                         : isPhone ? <PhoneCatalogPanel copy={copy} brand={selectedBrand} families={families} query={query} />
                         : <SimpleModelPanel copy={copy} categoryKey={selectedCategory.key} brand={selectedBrand} families={families} query={query} />}
                      </div>
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
