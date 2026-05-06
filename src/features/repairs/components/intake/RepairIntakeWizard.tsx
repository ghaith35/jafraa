"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CircleDollarSign,
  Cpu,
  Filter,
  Loader2,
  Package,
  Plus,
  ReceiptText,
  Search,
  ShieldCheck,
  Ticket,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { useAppI18n } from "@/lib/i18n/ui";
import { cn } from "@/lib/utils";
import { createRepairTicket } from "../../actions/repair.actions";
import { listCompatiblePartsForRepair } from "@/features/inventory/actions/part.actions";
import type { RepairCatalogBrand, RepairCatalogCategory, RepairCatalogFamily } from "../../lib/catalog-display";
import { getBrandIconKey, getCategoryIconKey, getCategoryLabel, getDeviceIconKey } from "../../lib/catalog-display";
import {
  getProblemDescription,
  getProblemLabel,
  getRepairProblemTemplates,
  type PrinterTypeKey,
  type RepairProblemTemplate,
} from "../../lib/repair-problems";
import { RepairBreadcrumb, type RepairWizardStep } from "./RepairBreadcrumb";
import { RepairSummaryPanel } from "./RepairSummaryPanel";
import { RepairTileCard } from "./RepairTileCard";

export type RepairWizardCustomer = {
  id: string;
  name: string;
  phones?: Array<{ phoneNumber: string }>;
  assets?: Array<{
    id: string;
    deviceCategoryId?: string | null;
    deviceBrandId?: string | null;
    deviceModelFamilyId?: string | null;
    customBrand?: string | null;
    customModel?: string | null;
    deviceTypeName?: string | null;
    imeiSerial?: string | null;
    color?: string | null;
    storage?: string | null;
  }>;
};

export type RepairWizardTechnician = {
  id: string;
  name: string;
};

type CompatiblePart = {
  id: string;
  name: string;
  sku: string;
  stockQty: number;
  reservedQty: number;
  availableQty: number;
  sellingPrice: number;
  imageUrl: string | null;
  brand: string | null;
  modelReference: string | null;
};

type SelectedPart = CompatiblePart & { quantity: number };

type Copy = {
  tabs: string[];
  customer: string;
  chooseCustomer: string;
  existingDevice: string;
  noExistingDevice: string;
  category: string;
  manufacturer: string;
  device: string;
  printerType: string;
  laptopSeries: string;
  laptopModel: string;
  laptopGeneration: string;
  laptopSpecs: string;
  processor: string;
  ram: string;
  disk: string;
  gpu: string;
  optionalSpecs: string;
  problems: string;
  parts: string;
  details: string;
  selectedCategory: string;
  selectedManufacturer: string;
  selectCategory: string;
  selectManufacturer: string;
  selectDevice: string;
  selectPrinterType: string;
  selectLaptopSeries: string;
  selectLaptopModel: string;
  selectLaptopGeneration: string;
  enterLaptopSpecs: string;
  selectProblems: string;
  selectParts: string;
  enterDetails: string;
  searchCategory: string;
  searchManufacturer: string;
  searchDevice: string;
  searchPrinterType: string;
  searchLaptopSeries: string;
  searchLaptopModel: string;
  searchLaptopGeneration: string;
  searchProblem: string;
  searchPart: string;
  filter: string;
  addCustomDevice: string;
  customBrand: string;
  customModel: string;
  customProblem: string;
  addProblem: string;
  repairSummary: string;
  selectedIssues: string;
  estimatedCharges: string;
  imeiSerial: string;
  deviceColor: string;
  storageRam: string;
  passcode: string;
  warrantyDays: string;
  dueAt: string;
  assignedTo: string;
  doNotAssign: string;
  diagnosticNote: string;
  customerNotes: string;
  internalNotes: string;
  repairCharges: string;
  rushJob: string;
  initialStatus: string;
  received: string;
  inDiagnosis: string;
  waitingApproval: string;
  inRepair: string;
  readyPickup: string;
  viewTickets: string;
  viewInvoices: string;
  createEstimate: string;
  moreActions: string;
  createTicket: string;
  creating: string;
  cancel: string;
  checkout: string;
  next: string;
  back: string;
  change: string;
  stock: string;
  available: string;
  outOfStock: string;
  quantity: string;
  noParts: string;
  noPartsHint: string;
  noResults: string;
  errorCustomer: string;
  errorCategory: string;
  errorBrand: string;
  errorDevice: string;
  errorProblem: string;
  unexpectedError: string;
  createSuccess: string;
  currency: string;
};

const COPY: Record<Locale, Copy> = {
  fr: {
    tabs: ["Réparations", "Déblocage", "Produits", "Reprise", "Divers"],
    customer: "Client",
    chooseCustomer: "Choisir un client",
    existingDevice: "Appareil enregistré",
    noExistingDevice: "Nouvel appareil",
    category: "Catégorie",
    manufacturer: "Fabricant",
    device: "Appareil",
    printerType: "Type imprimante",
    laptopSeries: "Série",
    laptopModel: "Ligne modèle",
    laptopGeneration: "Génération",
    laptopSpecs: "Spécifications",
    processor: "Processeur",
    ram: "RAM",
    disk: "Disque",
    gpu: "GPU",
    optionalSpecs: "Spécifications optionnelles",
    problems: "Problèmes",
    parts: "Pièces",
    details: "Détails",
    selectedCategory: "Catégorie sélectionnée",
    selectedManufacturer: "Fabricant sélectionné",
    selectCategory: "Sélectionner une catégorie",
    selectManufacturer: "Sélectionner un fabricant",
    selectDevice: "Sélectionner un modèle",
    selectPrinterType: "Sélectionner le type d’imprimante",
    selectLaptopSeries: "Sélectionner la série",
    selectLaptopModel: "Sélectionner la ligne modèle",
    selectLaptopGeneration: "Sélectionner la génération",
    enterLaptopSpecs: "Ajouter processeur, RAM et disque",
    selectProblems: "Sélectionner les problèmes",
    selectParts: "Sélectionner les pièces compatibles",
    enterDetails: "Compléter les détails du ticket",
    searchCategory: "Rechercher une catégorie…",
    searchManufacturer: "Rechercher un fabricant…",
    searchDevice: "Rechercher un modèle ou scanner un code…",
    searchPrinterType: "Rechercher un type d’imprimante…",
    searchLaptopSeries: "Rechercher une série…",
    searchLaptopModel: "Rechercher une ligne modèle…",
    searchLaptopGeneration: "Rechercher une génération…",
    searchProblem: "Rechercher un problème…",
    searchPart: "Rechercher une pièce, SKU ou code-barres…",
    filter: "Filtrer",
    addCustomDevice: "Ajouter appareil personnalisé",
    customBrand: "Marque personnalisée",
    customModel: "Modèle personnalisé",
    customProblem: "Autre problème",
    addProblem: "Ajouter le problème",
    repairSummary: "Résumé réparation",
    selectedIssues: "Problèmes sélectionnés",
    estimatedCharges: "Montant estimé",
    imeiSerial: "IMEI / Série",
    deviceColor: "Couleur",
    storageRam: "Stockage / RAM",
    passcode: "Code / schéma",
    warrantyDays: "Garantie (jours)",
    dueAt: "Échéance",
    assignedTo: "Assigné à",
    doNotAssign: "Ne pas assigner maintenant",
    diagnosticNote: "Note diagnostic",
    customerNotes: "Note client",
    internalNotes: "Note interne",
    repairCharges: "Frais réparation",
    rushJob: "Urgent",
    initialStatus: "Statut initial",
    received: "Reçu",
    inDiagnosis: "En diagnostic",
    waitingApproval: "Attente accord client",
    inRepair: "En réparation",
    readyPickup: "Prêt à retirer",
    viewTickets: "Voir tickets",
    viewInvoices: "Voir factures",
    createEstimate: "Créer devis",
    moreActions: "Plus d'actions",
    createTicket: "Créer ticket",
    creating: "Création…",
    cancel: "Annuler",
    checkout: "Encaisser",
    next: "Suivant",
    back: "Retour",
    change: "Changer",
    stock: "Stock",
    available: "Disponible",
    outOfStock: "Rupture",
    quantity: "Qté",
    noParts: "Aucune pièce compatible trouvée",
    noPartsHint: "Vous pouvez créer le ticket sans pièces et les réserver plus tard.",
    noResults: "Aucun résultat",
    errorCustomer: "Sélectionnez un client.",
    errorCategory: "Sélectionnez une catégorie.",
    errorBrand: "Sélectionnez un fabricant.",
    errorDevice: "Sélectionnez un modèle ou saisissez un modèle personnalisé.",
    errorProblem: "Sélectionnez au moins un problème.",
    unexpectedError: "Erreur inattendue.",
    createSuccess: "Ticket créé.",
    currency: "DZD",
  },
  en: {
    tabs: ["Repairs", "Unlocking", "Products", "Trade In", "Miscellaneous"],
    customer: "Customer",
    chooseCustomer: "Choose a customer",
    existingDevice: "Saved device",
    noExistingDevice: "New device",
    category: "Category",
    manufacturer: "Manufacturer",
    device: "Device",
    printerType: "Printer type",
    laptopSeries: "Series",
    laptopModel: "Model line",
    laptopGeneration: "Generation",
    laptopSpecs: "Specifications",
    processor: "Processor",
    ram: "RAM",
    disk: "Disk",
    gpu: "GPU",
    optionalSpecs: "Optional specifications",
    problems: "Problems",
    parts: "Parts",
    details: "Details",
    selectedCategory: "Selected category",
    selectedManufacturer: "Selected manufacturer",
    selectCategory: "Select category",
    selectManufacturer: "Select manufacturer",
    selectDevice: "Select device model",
    selectPrinterType: "Select printer type",
    selectLaptopSeries: "Select series",
    selectLaptopModel: "Select model line",
    selectLaptopGeneration: "Select generation",
    enterLaptopSpecs: "Add processor, RAM and disk",
    selectProblems: "Select problems",
    selectParts: "Select compatible parts",
    enterDetails: "Complete ticket details",
    searchCategory: "Search category…",
    searchManufacturer: "Search manufacturer…",
    searchDevice: "Search model or scan barcode…",
    searchPrinterType: "Search printer type…",
    searchLaptopSeries: "Search series…",
    searchLaptopModel: "Search model line…",
    searchLaptopGeneration: "Search generation…",
    searchProblem: "Search problem…",
    searchPart: "Search part, SKU or barcode…",
    filter: "Filter",
    addCustomDevice: "Add custom device",
    customBrand: "Custom brand",
    customModel: "Custom model",
    customProblem: "Other problem",
    addProblem: "Add problem",
    repairSummary: "Repair summary",
    selectedIssues: "Selected issues",
    estimatedCharges: "Estimated charges",
    imeiSerial: "IMEI / Serial",
    deviceColor: "Color",
    storageRam: "Storage / RAM",
    passcode: "Passcode / pattern",
    warrantyDays: "Warranty (days)",
    dueAt: "Due date",
    assignedTo: "Assigned to",
    doNotAssign: "Do not assign now",
    diagnosticNote: "Diagnostic note",
    customerNotes: "Customer note",
    internalNotes: "Internal note",
    repairCharges: "Repair charges",
    rushJob: "Rush job",
    initialStatus: "Initial status",
    received: "Received",
    inDiagnosis: "In diagnosis",
    waitingApproval: "Waiting customer approval",
    inRepair: "In repair",
    readyPickup: "Ready for pickup",
    viewTickets: "View tickets",
    viewInvoices: "View invoices",
    createEstimate: "Create estimate",
    moreActions: "More actions",
    createTicket: "Create ticket",
    creating: "Creating…",
    cancel: "Cancel",
    checkout: "Checkout",
    next: "Next",
    back: "Back",
    change: "Change",
    stock: "Stock",
    available: "Available",
    outOfStock: "Out of stock",
    quantity: "Qty",
    noParts: "No compatible parts found",
    noPartsHint: "You can create the ticket without parts and reserve them later.",
    noResults: "No results",
    errorCustomer: "Select a customer.",
    errorCategory: "Select a category.",
    errorBrand: "Select a manufacturer.",
    errorDevice: "Select a model or enter a custom model.",
    errorProblem: "Select at least one problem.",
    unexpectedError: "Unexpected error.",
    createSuccess: "Ticket created.",
    currency: "DZD",
  },
  ar: {
    tabs: ["الإصلاحات", "فتح القفل", "المنتجات", "الاستبدال", "متفرقات"],
    customer: "العميل",
    chooseCustomer: "اختر العميل",
    existingDevice: "جهاز محفوظ",
    noExistingDevice: "جهاز جديد",
    category: "الفئة",
    manufacturer: "الشركة",
    device: "الجهاز",
    printerType: "نوع الطابعة",
    laptopSeries: "السلسلة",
    laptopModel: "خط الموديل",
    laptopGeneration: "الجيل",
    laptopSpecs: "المواصفات",
    processor: "المعالج",
    ram: "الرام",
    disk: "القرص",
    gpu: "كرت الشاشة",
    optionalSpecs: "مواصفات اختيارية",
    problems: "الأعطال",
    parts: "القطع",
    details: "التفاصيل",
    selectedCategory: "الفئة المختارة",
    selectedManufacturer: "الشركة المختارة",
    selectCategory: "اختر الفئة",
    selectManufacturer: "اختر الشركة",
    selectDevice: "اختر الموديل",
    selectPrinterType: "اختر نوع الطابعة",
    selectLaptopSeries: "اختر السلسلة",
    selectLaptopModel: "اختر خط الموديل",
    selectLaptopGeneration: "اختر الجيل",
    enterLaptopSpecs: "أضف المعالج والرام والقرص",
    selectProblems: "اختر الأعطال",
    selectParts: "اختر القطع المتوافقة",
    enterDetails: "أكمل تفاصيل التذكرة",
    searchCategory: "ابحث عن فئة…",
    searchManufacturer: "ابحث عن شركة…",
    searchDevice: "ابحث عن موديل أو امسح الكود…",
    searchPrinterType: "ابحث عن نوع الطابعة…",
    searchLaptopSeries: "ابحث عن سلسلة…",
    searchLaptopModel: "ابحث عن خط موديل…",
    searchLaptopGeneration: "ابحث عن جيل…",
    searchProblem: "ابحث عن عطل…",
    searchPart: "ابحث عن قطعة أو SKU أو باركود…",
    filter: "تصفية",
    addCustomDevice: "إضافة جهاز مخصص",
    customBrand: "شركة مخصصة",
    customModel: "موديل مخصص",
    customProblem: "عطل آخر",
    addProblem: "إضافة العطل",
    repairSummary: "ملخص الإصلاح",
    selectedIssues: "الأعطال المختارة",
    estimatedCharges: "المبلغ التقديري",
    imeiSerial: "IMEI / الرقم التسلسلي",
    deviceColor: "اللون",
    storageRam: "التخزين / RAM",
    passcode: "الرمز / النمط",
    warrantyDays: "الضمان بالأيام",
    dueAt: "الموعد النهائي",
    assignedTo: "مُسند إلى",
    doNotAssign: "لا تسند الآن",
    diagnosticNote: "ملاحظة التشخيص",
    customerNotes: "ملاحظة للعميل",
    internalNotes: "ملاحظة داخلية",
    repairCharges: "تكلفة الإصلاح",
    rushJob: "مستعجل",
    initialStatus: "الحالة الأولى",
    received: "تم الاستلام",
    inDiagnosis: "قيد التشخيص",
    waitingApproval: "بانتظار موافقة العميل",
    inRepair: "قيد الإصلاح",
    readyPickup: "جاهز للاستلام",
    viewTickets: "عرض التذاكر",
    viewInvoices: "عرض الفواتير",
    createEstimate: "إنشاء عرض سعر",
    moreActions: "إجراءات أخرى",
    createTicket: "إنشاء التذكرة",
    creating: "جاري الإنشاء…",
    cancel: "إلغاء",
    checkout: "الدفع",
    next: "التالي",
    back: "رجوع",
    change: "تغيير",
    stock: "المخزون",
    available: "متاح",
    outOfStock: "غير متوفر",
    quantity: "الكمية",
    noParts: "لم يتم العثور على قطع متوافقة",
    noPartsHint: "يمكنك إنشاء التذكرة بدون قطع وحجزها لاحقاً.",
    noResults: "لا توجد نتائج",
    errorCustomer: "اختر عميلاً.",
    errorCategory: "اختر فئة.",
    errorBrand: "اختر الشركة.",
    errorDevice: "اختر موديل أو أدخل موديل مخصص.",
    errorProblem: "اختر عطلاً واحداً على الأقل.",
    unexpectedError: "خطأ غير متوقع.",
    createSuccess: "تم إنشاء التذكرة.",
    currency: "دج",
  },
};

const DEFAULT_STEP_ORDER: RepairWizardStep[] = ["category", "brand", "device", "problems", "parts", "details"];
const PRINTER_STEP_ORDER: RepairWizardStep[] = ["category", "printerType", "brand", "device", "problems", "parts", "details"];
const LAPTOP_STEP_ORDER: RepairWizardStep[] = [
  "category",
  "brand",
  "laptopSeries",
  "laptopModel",
  "laptopGeneration",
  "laptopSpecs",
  "problems",
  "parts",
  "details",
];


const PRINTER_TYPES: Array<{ key: PrinterTypeKey; label: Record<Locale, string>; description: Record<Locale, string>; iconKey: string }> = [
  {
    key: "ink_cartridge",
    label: { fr: "Cartouche", en: "Ink cartridge", ar: "خرطوشة حبر" },
    description: { fr: "DeskJet, PIXMA, WorkForce à cartouches", en: "DeskJet, PIXMA and cartridge inkjets", ar: "طابعات DeskJet و PIXMA بالخرطوشة" },
    iconKey: "toner",
  },
  {
    key: "ink_tank",
    label: { fr: "Réservoir", en: "Ink tank", ar: "خزان حبر" },
    description: { fr: "EcoTank, Smart Tank, MegaTank", en: "EcoTank, Smart Tank and MegaTank", ar: "EcoTank و Smart Tank و MegaTank" },
    iconKey: "toner",
  },
  {
    key: "laser",
    label: { fr: "Laser", en: "Laser", ar: "ليزر" },
    description: { fr: "LaserJet, i‑SENSYS, HL, ECOSYS", en: "LaserJet, i‑SENSYS, HL and ECOSYS", ar: "LaserJet و i‑SENSYS و HL و ECOSYS" },
    iconKey: "printer",
  },
  {
    key: "risograph",
    label: { fr: "Risograph / duplicateur", en: "Risograph / duplicator", ar: "ريزوغراف / دوبليكيتور" },
    description: { fr: "RISO, Ricoh Priport, Duplo", en: "RISO, Ricoh Priport and Duplo", ar: "RISO و Ricoh Priport و Duplo" },
    iconKey: "printer",
  },
];

const PRINTER_TYPE_PREFIX: Record<PrinterTypeKey, string> = {
  ink_cartridge: "Ink Cartridge",
  ink_tank: "Ink Tank",
  laser: "Laser",
  risograph: "Risograph",
};

const COMMON_PROCESSORS = [
  "Intel Core i3",
  "Intel Core i5",
  "Intel Core i7",
  "Intel Core i9",
  "Intel Core Ultra 5",
  "Intel Core Ultra 7",
  "Intel Celeron",
  "Intel Pentium",
  "AMD Ryzen 3",
  "AMD Ryzen 5",
  "AMD Ryzen 7",
  "AMD Ryzen 9",
  "Apple M1",
  "Apple M2",
  "Apple M3",
  "Apple M4",
];

const COMMON_RAM_OPTIONS = ["4GB", "8GB", "12GB", "16GB", "24GB", "32GB", "64GB"];
const COMMON_DISK_OPTIONS = ["128GB SSD", "256GB SSD", "512GB SSD", "1TB SSD", "500GB HDD", "1TB HDD"];


function formatMoney(value: number, locale: string, currency: string) {
  return `${new Intl.NumberFormat(locale === "ar" ? "ar-DZ" : locale === "en" ? "en-GB" : "fr-DZ", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)} ${currency}`;
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function isLaptopCategory(category?: RepairCatalogCategory | null) {
  return category?.key === "laptop";
}

function isPrinterCategory(category?: RepairCatalogCategory | null) {
  return category?.key === "printer";
}

function getPrinterTypeLabel(type: PrinterTypeKey | "", locale: Locale) {
  const item = PRINTER_TYPES.find((option) => option.key === type);
  return item ? item.label[locale] : "";
}

function getPrinterTypeFromFamilyName(name: string): PrinterTypeKey | null {
  const [prefix] = name.split("|").map((part) => part.trim());
  const match = Object.entries(PRINTER_TYPE_PREFIX).find(([, value]) => value.toLowerCase() === prefix.toLowerCase());
  return match ? (match[0] as PrinterTypeKey) : null;
}

function printerFamilyMatchesType(family: RepairCatalogFamily, printerType: PrinterTypeKey | "") {
  if (!printerType) return true;
  return getPrinterTypeFromFamilyName(family.name) === printerType;
}

function getPrinterFamilyDisplayName(name: string) {
  const parts = name.split("|").map((part) => part.trim());
  return parts.length > 1 ? parts.slice(1).join(" | ") : name;
}

type LaptopCatalogOption = {
  series: string;
  modelLine: string;
  generation: string;
  family: RepairCatalogFamily;
};

function uniqueByLabel<T extends { label: string }>(items: T[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = normalize(item.label);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function stripBrandPrefix(name: string, brandName?: string) {
  let value = name.trim().replace(/\s+/g, " ");
  const brand = (brandName ?? "").trim();
  if (brand && value.toLowerCase().startsWith(brand.toLowerCase() + " ")) {
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

function buildLaptopOptions(brand?: RepairCatalogBrand | null): LaptopCatalogOption[] {
  return (brand?.modelFamilies ?? []).map((family) => ({
    ...splitLaptopModel(family.name, brand?.name),
    family,
  }));
}

function getLaptopSpecsText(processor: string, ram: string, disk: string, gpu: string) {
  return [
    processor ? `CPU: ${processor}` : "",
    ram ? `RAM: ${ram}` : "",
    disk ? `Disk: ${disk}` : "",
    gpu ? `GPU: ${gpu}` : "",
  ].filter(Boolean).join(" · ");
}

function getLaptopModelShortLabel(modelLine: string, series: string) {
  if (series && modelLine.toLowerCase().startsWith(series.toLowerCase())) {
    return modelLine.slice(series.length).trim() || modelLine;
  }
  return modelLine;
}


function getStepLabel(step: RepairWizardStep, copy: Copy) {
  switch (step) {
    case "category":
      return copy.category;
    case "brand":
      return copy.manufacturer;
    case "printerType":
      return copy.printerType;
    case "device":
      return copy.device;
    case "laptopSeries":
      return copy.laptopSeries;
    case "laptopModel":
      return copy.laptopModel;
    case "laptopGeneration":
      return copy.laptopGeneration;
    case "laptopSpecs":
      return copy.laptopSpecs;
    case "problems":
      return copy.problems;
    case "parts":
      return copy.parts;
    case "details":
      return copy.details;
  }
}

export function RepairIntakeWizard({
  customers,
  technicians,
  catalog,
}: {
  customers: RepairWizardCustomer[];
  technicians: RepairWizardTechnician[];
  catalog: RepairCatalogCategory[];
}) {
  const router = useRouter();
  const { locale, dir } = useAppI18n();
  const copy = COPY[locale as Locale] ?? COPY.fr;
  const [step, setStep] = useState<RepairWizardStep>("category");
  const [query, setQuery] = useState("");
  const [partQuery, setPartQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [customerId, setCustomerId] = useState("");
  const [existingAssetId, setExistingAssetId] = useState("");
  const [category, setCategory] = useState<RepairCatalogCategory | null>(null);
  const [printerType, setPrinterType] = useState<PrinterTypeKey | "">("");
  const [brand, setBrand] = useState<RepairCatalogBrand | null>(null);
  const [family, setFamily] = useState<RepairCatalogFamily | null>(null);
  const [laptopSeries, setLaptopSeries] = useState("");
  const [laptopModelLine, setLaptopModelLine] = useState("");
  const [laptopGeneration, setLaptopGeneration] = useState("");
  const [customBrand, setCustomBrand] = useState("");
  const [customModel, setCustomModel] = useState("");
  const [selectedProblems, setSelectedProblems] = useState<RepairProblemTemplate[]>([]);
  const [customProblem, setCustomProblem] = useState("");
  const [parts, setParts] = useState<CompatiblePart[]>([]);
  const [selectedParts, setSelectedParts] = useState<SelectedPart[]>([]);
  const [loadingParts, setLoadingParts] = useState(false);

  const [imeiSerial, setImeiSerial] = useState("");
  const [deviceColor, setDeviceColor] = useState("");
  const [storageRam, setStorageRam] = useState("");
  const [processor, setProcessor] = useState("");
  const [ram, setRam] = useState("");
  const [disk, setDisk] = useState("");
  const [gpu, setGpu] = useState("");
  const [passcode, setPasscode] = useState("");
  const [warrantyDays, setWarrantyDays] = useState("90");
  const [dueAt, setDueAt] = useState("");
  const [assignedTechnicianId, setAssignedTechnicianId] = useState("");
  const [diagnosisNote, setDiagnosisNote] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");
  const [internalNotes, setInternalNotes] = useState("");
  const [repairCharges, setRepairCharges] = useState("");
  const [rushJob, setRushJob] = useState(false);
  const [initialStatus, setInitialStatus] = useState("received");

  const selectedCustomer = customers.find((customer) => customer.id === customerId) ?? null;
  const customerAssets = selectedCustomer?.assets ?? [];
  const isLaptop = isLaptopCategory(category);
  const isPrinter = isPrinterCategory(category);
  const stepOrder = isLaptop ? LAPTOP_STEP_ORDER : isPrinter ? PRINTER_STEP_ORDER : DEFAULT_STEP_ORDER;

  const laptopOptions = useMemo(() => buildLaptopOptions(brand), [brand]);

  const filteredLaptopSeries = useMemo(() => {
    const q = normalize(query);
    return uniqueByLabel(
      laptopOptions
        .map((item) => ({
          label: item.series,
          count: laptopOptions.filter((option) => option.series === item.series).length,
        }))
        .filter((item) => !q || item.label.toLowerCase().includes(q))
    );
  }, [laptopOptions, query]);

  const filteredLaptopModels = useMemo(() => {
    const q = normalize(query);
    return uniqueByLabel(
      laptopOptions
        .filter((item) => item.series === laptopSeries)
        .map((item) => ({
          label: item.modelLine,
          count: laptopOptions.filter((option) => option.series === laptopSeries && option.modelLine === item.modelLine).length,
        }))
        .filter((item) => !q || item.label.toLowerCase().includes(q))
    );
  }, [laptopOptions, laptopSeries, query]);

  const filteredLaptopGenerations = useMemo(() => {
    const q = normalize(query);
    return laptopOptions
      .filter((item) => item.series === laptopSeries && item.modelLine === laptopModelLine)
      .map((item) => ({
        label: item.generation || item.modelLine,
        option: item,
      }))
      .filter((item) => !q || item.label.toLowerCase().includes(q) || item.option.family.name.toLowerCase().includes(q));
  }, [laptopModelLine, laptopOptions, laptopSeries, query]);

  const filteredCategories = useMemo(() => {
    const q = normalize(query);
    return catalog.filter((item) => !q || getCategoryLabel(item, locale).toLowerCase().includes(q) || item.key.toLowerCase().includes(q));
  }, [catalog, locale, query]);

  const filteredBrands = useMemo(() => {
    const q = normalize(query);
    return (category?.brands ?? [])
      .filter((item) => !q || item.name.toLowerCase().includes(q))
      .filter((item) => !isPrinter || !printerType || item.modelFamilies.some((familyItem) => printerFamilyMatchesType(familyItem, printerType)) || item.modelFamilies.length === 0);
  }, [category, isPrinter, printerType, query]);

  const filteredFamilies = useMemo(() => {
    const q = normalize(query);
    return (brand?.modelFamilies ?? [])
      .filter((item) => !isPrinter || printerFamilyMatchesType(item, printerType))
      .filter((item) => {
        const label = isPrinter ? getPrinterFamilyDisplayName(item.name) : item.name;
        return !q || item.name.toLowerCase().includes(q) || label.toLowerCase().includes(q);
      });
  }, [brand, isPrinter, printerType, query]);

  const problemTemplates = useMemo(() => getRepairProblemTemplates(category?.key, { printerType }), [category?.key, printerType]);
  const filteredProblems = useMemo(() => {
    const q = normalize(query);
    return problemTemplates.filter((item) => {
      const label = getProblemLabel(item, locale);
      const description = getProblemDescription(item, locale) ?? "";
      return !q || label.toLowerCase().includes(q) || description.toLowerCase().includes(q);
    });
  }, [locale, problemTemplates, query]);

  const completedSteps: RepairWizardStep[] = [
    ...(category ? (["category"] as RepairWizardStep[]) : []),
    ...(isPrinter && printerType ? (["printerType"] as RepairWizardStep[]) : []),
    ...(brand || customBrand ? (["brand"] as RepairWizardStep[]) : []),
    ...(isLaptop && laptopSeries ? (["laptopSeries"] as RepairWizardStep[]) : []),
    ...(isLaptop && laptopModelLine ? (["laptopModel"] as RepairWizardStep[]) : []),
    ...(isLaptop && (family || customModel) ? (["laptopGeneration"] as RepairWizardStep[]) : []),
    ...(isLaptop && (step === "problems" || step === "parts" || step === "details") ? (["laptopSpecs"] as RepairWizardStep[]) : []),
    ...(!isLaptop && (family || customModel) ? (["device"] as RepairWizardStep[]) : []),
    ...(selectedProblems.length > 0 || customProblem.trim() ? (["problems"] as RepairWizardStep[]) : []),
    ...(step === "details" ? (["parts"] as RepairWizardStep[]) : []),
  ];


  useEffect(() => {
    if (!existingAssetId || !selectedCustomer) return;
    const asset = selectedCustomer.assets?.find((item) => item.id === existingAssetId);
    if (!asset) return;

    const assetCategory = catalog.find((item) => item.id === asset.deviceCategoryId) ?? null;
    const assetBrand = assetCategory?.brands.find((item) => item.id === asset.deviceBrandId) ?? null;
    const assetFamily = assetBrand?.modelFamilies.find((item) => item.id === asset.deviceModelFamilyId) ?? null;

    let ignore = false;
    queueMicrotask(() => {
      if (ignore) return;
      setCategory(assetCategory);
      setBrand(assetBrand);
      setFamily(assetFamily);
      setCustomBrand(asset.customBrand ?? assetBrand?.name ?? "");
      setCustomModel(asset.customModel ?? (assetCategory?.key === "printer" && assetFamily ? getPrinterFamilyDisplayName(assetFamily.name) : assetFamily?.name) ?? "");

      if (assetCategory?.key === "laptop" && assetBrand && assetFamily) {
        const laptopInfo = splitLaptopModel(assetFamily.name, assetBrand.name);
        setLaptopSeries(laptopInfo.series);
        setLaptopModelLine(laptopInfo.modelLine);
        setLaptopGeneration(laptopInfo.generation);
      }

      if (assetCategory?.key === "printer" && assetFamily) {
        setPrinterType(getPrinterTypeFromFamilyName(assetFamily.name) ?? "");
      }

      setImeiSerial(asset.imeiSerial ?? "");
      setDeviceColor(asset.color ?? "");
      setStorageRam(asset.storage ?? "");
      if (assetCategory || assetBrand || assetFamily || asset.customModel) {
        setStep("problems");
      }
    });

    return () => {
      ignore = true;
    };
  }, [catalog, existingAssetId, selectedCustomer]);

  const estimatedFromProblems = selectedProblems.reduce((sum, item) => sum + (item.basePrice ?? 0), 0);
  const estimatedFromParts = selectedParts.reduce((sum, item) => sum + item.sellingPrice * item.quantity, 0);
  const manualCharges = Number(repairCharges || 0);
  const estimatedTotal = manualCharges > 0 ? manualCharges : estimatedFromProblems + estimatedFromParts;

  const steps = stepOrder.map((key) => ({ key, label: getStepLabel(key, copy) }));

  useEffect(() => {
    if (step !== "parts" || !category) return;
    let ignore = false;

    queueMicrotask(() => {
      if (!ignore) setLoadingParts(true);
    });

    void listCompatiblePartsForRepair({
        categoryId: category.id,
        brandId: brand?.id,
        familyId: family?.id,
        q: partQuery,
      })
        .then((items) => {
          if (!ignore) setParts(items as CompatiblePart[]);
        })
        .catch(() => {
          if (!ignore) setParts([]);
        })
        .finally(() => {
          if (!ignore) setLoadingParts(false);
        });

    return () => {
      ignore = true;
    };
  }, [brand?.id, category, family?.id, partQuery, step]);

  function clearForward(nextStep: RepairWizardStep) {
    setQuery("");
    setError(null);
    setStep(nextStep);
  }

  function resetLaptopSelection() {
    setLaptopSeries("");
    setLaptopModelLine("");
    setLaptopGeneration("");
    setProcessor("");
    setRam("");
    setDisk("");
    setGpu("");
  }

  function selectCategory(next: RepairCatalogCategory) {
    setCategory(next);
    setBrand(null);
    setPrinterType("");
    setFamily(null);
    resetLaptopSelection();
    setCustomBrand("");
    setCustomModel("");
    setSelectedProblems([]);
    setSelectedParts([]);
    clearForward(next.key === "printer" ? "printerType" : "brand");
  }

  function selectPrinterType(next: PrinterTypeKey) {
    setPrinterType(next);
    setBrand(null);
    setFamily(null);
    setCustomBrand("");
    setCustomModel("");
    setSelectedProblems([]);
    setSelectedParts([]);
    clearForward("brand");
  }

  function selectBrand(next: RepairCatalogBrand) {
    setBrand(next);
    setFamily(null);
    resetLaptopSelection();
    setCustomBrand(next.name);
    setCustomModel("");
    setSelectedParts([]);
    clearForward(isLaptop ? "laptopSeries" : "device");
  }

  function selectFamily(next: RepairCatalogFamily) {
    setFamily(next);
    setCustomModel(isPrinter ? getPrinterFamilyDisplayName(next.name) : next.name);
    setSelectedParts([]);
    clearForward("problems");
  }

  function selectLaptopSeries(next: string) {
    setLaptopSeries(next);
    setLaptopModelLine("");
    setLaptopGeneration("");
    setFamily(null);
    setCustomModel("");
    setSelectedParts([]);
    clearForward("laptopModel");
  }

  function selectLaptopModel(next: string) {
    setLaptopModelLine(next);
    setLaptopGeneration("");
    setFamily(null);
    setCustomModel("");
    setSelectedParts([]);
    clearForward("laptopGeneration");
  }

  function selectLaptopGeneration(next: LaptopCatalogOption) {
    setLaptopGeneration(next.generation);
    setFamily(next.family);
    setCustomModel(next.family.name);
    setSelectedParts([]);
    clearForward("laptopSpecs");
  }

  function applyCustomLaptopModel() {
    if (!customModel.trim()) return;
    setFamily(null);
    setLaptopGeneration("");
    setSelectedParts([]);
    clearForward("laptopSpecs");
  }

  function toggleProblem(problem: RepairProblemTemplate) {
    setSelectedProblems((current) =>
      current.some((item) => item.key === problem.key)
        ? current.filter((item) => item.key !== problem.key)
        : [...current, problem]
    );
  }

  function togglePart(part: CompatiblePart) {
    if (part.availableQty <= 0) return;
    setSelectedParts((current) => {
      const exists = current.find((item) => item.id === part.id);
      if (exists) return current.filter((item) => item.id !== part.id);
      return [...current, { ...part, quantity: 1 }];
    });
  }

  function setPartQuantity(partId: string, quantity: number) {
    setSelectedParts((current) =>
      current.map((item) =>
        item.id === partId
          ? { ...item, quantity: Math.min(Math.max(1, quantity), Math.max(1, item.availableQty)) }
          : item
      )
    );
  }

  function goNext() {
    if (step === "category" && !category && !existingAssetId) return setError(copy.errorCategory);
    if (step === "printerType" && !printerType && !existingAssetId) return setError(copy.errorDevice);
    if (step === "brand" && !brand && !customBrand.trim() && !existingAssetId) return setError(copy.errorBrand);
    if (!isLaptop && step === "device" && !family && !customModel.trim() && !existingAssetId) return setError(copy.errorDevice);
    if (isLaptop && step === "laptopSeries" && !laptopSeries && !customModel.trim() && !existingAssetId) return setError(copy.errorDevice);
    if (isLaptop && step === "laptopModel" && !laptopModelLine && !customModel.trim() && !existingAssetId) return setError(copy.errorDevice);
    if (isLaptop && step === "laptopGeneration" && !family && !customModel.trim() && !existingAssetId) return setError(copy.errorDevice);
    if (step === "problems" && selectedProblems.length === 0 && !customProblem.trim()) return setError(copy.errorProblem);
    const index = stepOrder.indexOf(step);
    if (index < stepOrder.length - 1) clearForward(stepOrder[index + 1]);
  }

  function goBack() {
    const index = stepOrder.indexOf(step);
    if (index > 0) clearForward(stepOrder[index - 1]);
  }

  async function submitTicket() {
    setError(null);
    if (!customerId) return setError(copy.errorCustomer);
    if (!category && !existingAssetId) return setError(copy.errorCategory);
    if (!brand && !customBrand.trim() && !existingAssetId) return setError(copy.errorBrand);
    if (!family && !customModel.trim() && !existingAssetId) return setError(copy.errorDevice);
    if (selectedProblems.length === 0 && !customProblem.trim()) return setError(copy.errorProblem);

    const normalizedStorageRam = storageRam.trim() || [ram.trim(), disk.trim()].filter(Boolean).join(" / ");

    const problemLabels = selectedProblems.map((problem) => ({ problemText: getProblemLabel(problem, locale) }));
    if (customProblem.trim()) problemLabels.push({ problemText: customProblem.trim() });

    setIsSubmitting(true);
    try {
      const result = await createRepairTicket({
          customerId,
          customerDeviceId: existingAssetId,
          deviceCategoryId: category?.id ?? "",
          deviceBrandId: brand?.id ?? "",
          deviceFamilyId: family?.id ?? "",
          customDeviceBrand: customBrand.trim() || brand?.name || "",
          customDeviceModel: customModel.trim() || (family ? (isPrinter ? getPrinterFamilyDisplayName(family.name) : family.name) : ""),
          deviceColor: deviceColor.trim(),
          deviceStorageRam: normalizedStorageRam,
          imeiSerial: imeiSerial.trim(),
          printerType,
          laptopSeriesName: laptopSeries,
          laptopModelLine,
          laptopGeneration,
          laptopProcessor: processor.trim(),
          laptopRam: ram.trim(),
          laptopDisk: disk.trim(),
          laptopGpu: gpu.trim(),
          priority: rushJob ? "rush" : "normal",
          assignedTechnicianId,
          diagnosisNote: diagnosisNote.trim(),
          internalNotes: [internalNotes.trim(), passcode.trim() ? `${copy.passcode}: ${passcode.trim()}` : ""].filter(Boolean).join("\n"),
          customerNotes: customerNotes.trim(),
          estimatedPrice: estimatedTotal || undefined,
          warrantyDays: Number(warrantyDays || 0),
          dueAt,
          initialStatus: initialStatus as "received" | "in_diagnosis" | "waiting_customer_approval" | "in_repair" | "ready_for_pickup",
          selectedParts: selectedParts.map((part) => ({
            partId: part.id,
            quantity: part.quantity,
            note: "Reserved from repair intake wizard",
          })),
          problems: problemLabels,
        });

      if ("error" in result) {
        setError(result.error);
        setIsSubmitting(false);
        return;
      }
        router.push(`/dashboard/repairs/${result.id}`);
    } catch {
      setError(copy.unexpectedError);
      setIsSubmitting(false);
    }
  }

  const selectedRows = [
    { label: copy.customer, value: selectedCustomer?.name },
    { label: copy.category, value: category ? getCategoryLabel(category, locale) : null },
    ...(isPrinter ? [{ label: copy.printerType, value: printerType ? getPrinterTypeLabel(printerType, locale as Locale) : null }] : []),
    { label: copy.manufacturer, value: brand?.name || customBrand || null },
    ...(isLaptop
      ? [
          { label: copy.laptopSeries, value: laptopSeries || null },
          { label: copy.laptopModel, value: laptopModelLine || null },
          { label: copy.laptopGeneration, value: laptopGeneration || family?.name || null },
          { label: copy.laptopSpecs, value: getLaptopSpecsText(processor, ram, disk, gpu) || null },
        ]
      : [{ label: copy.device, value: family ? (isPrinter ? getPrinterFamilyDisplayName(family.name) : family.name) : customModel || null }]),
  ];

  const currentStepTitle =
    step === "category"
      ? copy.selectCategory
      : step === "brand"
        ? copy.selectManufacturer
        : step === "printerType"
          ? copy.selectPrinterType
        : step === "device"
          ? copy.selectDevice
          : step === "laptopSeries"
            ? copy.selectLaptopSeries
            : step === "laptopModel"
              ? copy.selectLaptopModel
              : step === "laptopGeneration"
                ? copy.selectLaptopGeneration
                : step === "laptopSpecs"
                  ? copy.enterLaptopSpecs
                  : step === "problems"
                    ? copy.selectProblems
                    : step === "parts"
                      ? copy.selectParts
                      : copy.enterDetails;

  const searchPlaceholder =
    step === "category"
      ? copy.searchCategory
      : step === "brand"
        ? copy.searchManufacturer
        : step === "printerType"
          ? copy.searchPrinterType
        : step === "device"
          ? copy.searchDevice
          : step === "laptopSeries"
            ? copy.searchLaptopSeries
            : step === "laptopModel"
              ? copy.searchLaptopModel
              : step === "laptopGeneration"
                ? copy.searchLaptopGeneration
                : copy.searchProblem;

  const showSearch = step !== "details" && step !== "parts" && step !== "laptopSpecs";
  const issueCount = selectedProblems.length + (customProblem.trim() ? 1 : 0);
  const partsCount = selectedParts.reduce((sum, part) => sum + part.quantity, 0);

  return (
    <div dir={dir} className="rounded-[2rem] bg-slate-100/80 p-2 shadow-inner sm:p-3">
      {error && (
        <div className="mb-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 shadow-sm">
          {error}
        </div>
      )}

      <div className="grid gap-3 2xl:grid-cols-[320px_minmax(0,1fr)_320px]">
        <aside className="space-y-3">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-primary via-primary to-primary/80 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20">
                  <UserRound className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wide text-white/70">{copy.customer}</div>
                  <div className="truncate text-lg font-black">{selectedCustomer?.name ?? copy.chooseCustomer}</div>
                </div>
              </div>
            </div>
            <div className="space-y-3 p-4">
              <select
                value={customerId}
                onChange={(event) => {
                  setCustomerId(event.target.value);
                  setExistingAssetId("");
                }}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
              >
                <option value="">{copy.chooseCustomer}</option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name} {customer.phones?.[0]?.phoneNumber ? `(${customer.phones[0].phoneNumber})` : ""}
                  </option>
                ))}
              </select>

              {customerAssets.length > 0 && (
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-400">{copy.existingDevice}</label>
                  <select
                    value={existingAssetId}
                    onChange={(event) => setExistingAssetId(event.target.value)}
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                  >
                    <option value="">{copy.noExistingDevice}</option>
                    {customerAssets.map((asset) => (
                      <option key={asset.id} value={asset.id}>
                        {[asset.customBrand, asset.customModel, asset.imeiSerial].filter(Boolean).join(" — ")}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">Fast intake</div>
            <div className="space-y-2">
              {steps.map((item, index) => {
                const active = item.key === step;
                const done = completedSteps.includes(item.key);
                return (
                  <button
                    key={item.key}
                    type="button"
                    disabled={!active && !done}
                    onClick={() => (active || done) && setStep(item.key)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-start text-sm transition",
                      active && "bg-primary text-white shadow-sm",
                      done && !active && "bg-primary/10 text-primary hover:bg-primary/15",
                      !done && !active && "bg-slate-50 text-slate-400"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black",
                        active && "bg-white/20 text-white",
                        done && !active && "bg-primary text-white",
                        !done && !active && "bg-white text-slate-400"
                      )}
                    >
                      {done ? "✓" : index + 1}
                    </span>
                    <span className="font-bold">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <section className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-white px-4 pt-3">
            <div className="flex flex-wrap items-center gap-1">
              {copy.tabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={cn(
                    "rounded-t-2xl px-4 py-2.5 text-sm font-bold text-slate-500 transition-colors",
                    index === 0 && "border-b-2 border-primary bg-primary/5 text-primary"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <RepairBreadcrumb steps={steps} currentStep={step} completedSteps={completedSteps} onSelectStep={setStep} />

          <div className="min-h-[620px] space-y-5 p-4 lg:p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Repair intake</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950">{currentStepTitle}</h2>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
                  {category && <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold">{copy.category}: {getCategoryLabel(category, locale)}</span>}
                  {isPrinter && printerType && <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold">{copy.printerType}: {getPrinterTypeLabel(printerType, locale as Locale)}</span>}
                  {brand && <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold">{copy.manufacturer}: {brand.name}</span>}
                  {isLaptop && laptopSeries && <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold">{copy.laptopSeries}: {laptopSeries}</span>}
                  {isLaptop && laptopModelLine && <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold">{copy.laptopModel}: {laptopModelLine}</span>}
                  {family && <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold">{isLaptop ? copy.laptopGeneration : copy.device}: {isLaptop ? laptopGeneration || family.name : isPrinter ? getPrinterFamilyDisplayName(family.name) : family.name}</span>}
                </div>
              </div>

              {showSearch && (
                <div className="flex w-full min-w-0 gap-2 xl:w-[460px]">
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder={searchPlaceholder}
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-10 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                  <button type="button" className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50">
                    <Filter className="h-4 w-4" /> {copy.filter}
                  </button>
                </div>
              )}
            </div>

            {step === "category" && (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 2xl:grid-cols-4">
                {filteredCategories.map((item) => (
                  <RepairTileCard
                    key={item.id}
                    title={getCategoryLabel(item, locale)}
                    subtitle={item.key}
                    iconKey={getCategoryIconKey(item.key)}
                    selected={category?.id === item.id}
                    onClick={() => selectCategory(item)}
                  />
                ))}
              </div>
            )}

            {step === "printerType" && isPrinter && (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                {PRINTER_TYPES
                  .filter((item) => {
                    const q = normalize(query);
                    return !q || item.label[locale as Locale].toLowerCase().includes(q) || item.description[locale as Locale].toLowerCase().includes(q);
                  })
                  .map((item) => (
                    <RepairTileCard
                      key={item.key}
                      title={item.label[locale as Locale]}
                      subtitle={item.description[locale as Locale]}
                      iconKey={item.iconKey}
                      selected={printerType === item.key}
                      onClick={() => selectPrinterType(item.key)}
                    />
                  ))}
              </div>
            )}

            {step === "brand" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {filteredBrands.map((item) => (
                    <RepairTileCard
                      key={item.id}
                      title={item.name}
                      subtitle={`${isPrinter ? item.modelFamilies.filter((familyItem) => printerFamilyMatchesType(familyItem, printerType)).length : item.modelFamilies.length} ${copy.device}`}
                      iconKey={getBrandIconKey(item.name)}
                      selected={brand?.id === item.id}
                      onClick={() => selectBrand(item)}
                    />
                  ))}
                  {filteredBrands.length === 0 && <EmptyGridMessage label={copy.noResults} />}
                </div>
                <CustomDeviceBox
                  customBrand={customBrand}
                  customModel={customModel}
                  customBrandLabel={copy.customBrand}
                  customModelLabel={copy.customModel}
                  addLabel={copy.addCustomDevice}
                  onBrandChange={setCustomBrand}
                  onModelChange={setCustomModel}
                  onAdd={() => (isLaptop ? applyCustomLaptopModel() : clearForward("problems"))}
                />
              </div>
            )}

            {step === "laptopSeries" && isLaptop && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {filteredLaptopSeries.map((item) => (
                    <RepairTileCard
                      key={item.label}
                      title={item.label}
                      subtitle={`${item.count} ${copy.laptopModel}`}
                      iconKey="laptop"
                      selected={laptopSeries === item.label}
                      onClick={() => selectLaptopSeries(item.label)}
                    />
                  ))}
                  {filteredLaptopSeries.length === 0 && <EmptyGridMessage label={copy.noResults} />}
                </div>
                <CustomModelBox value={customModel} label={copy.customModel} addLabel={copy.addCustomDevice} onChange={setCustomModel} onAdd={applyCustomLaptopModel} />
              </div>
            )}

            {step === "laptopModel" && isLaptop && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {filteredLaptopModels.map((item) => (
                    <RepairTileCard
                      key={item.label}
                      title={getLaptopModelShortLabel(item.label, laptopSeries)}
                      subtitle={item.label}
                      iconKey="laptop"
                      selected={laptopModelLine === item.label}
                      onClick={() => selectLaptopModel(item.label)}
                    />
                  ))}
                  {filteredLaptopModels.length === 0 && <EmptyGridMessage label={copy.noResults} />}
                </div>
                <CustomModelBox value={customModel} label={copy.customModel} addLabel={copy.addCustomDevice} onChange={setCustomModel} onAdd={applyCustomLaptopModel} />
              </div>
            )}

            {step === "laptopGeneration" && isLaptop && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {filteredLaptopGenerations.map((item) => (
                    <RepairTileCard
                      key={item.option.family.id}
                      title={item.label}
                      subtitle={item.option.family.name}
                      iconKey="laptop"
                      selected={family?.id === item.option.family.id}
                      onClick={() => selectLaptopGeneration(item.option)}
                    />
                  ))}
                  {filteredLaptopGenerations.length === 0 && <EmptyGridMessage label={copy.noResults} />}
                </div>
                <CustomModelBox value={customModel} label={copy.customModel} addLabel={copy.addCustomDevice} onChange={setCustomModel} onAdd={applyCustomLaptopModel} />
              </div>
            )}

            {step === "laptopSpecs" && isLaptop && (
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-black text-slate-950">{copy.optionalSpecs}</div>
                    <div className="text-sm text-slate-500">{family?.name || customModel}</div>
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <SelectField label={copy.processor} value={processor} onChange={setProcessor} options={COMMON_PROCESSORS} />
                  <SelectField label={copy.ram} value={ram} onChange={setRam} options={COMMON_RAM_OPTIONS} />
                  <SelectField label={copy.disk} value={disk} onChange={setDisk} options={COMMON_DISK_OPTIONS} />
                  <Field label={copy.gpu} value={gpu} onChange={setGpu} />
                </div>
              </div>
            )}

            {step === "device" && !isLaptop && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {filteredFamilies.map((item) => (
                    <RepairTileCard
                      key={item.id}
                      title={isPrinter ? getPrinterFamilyDisplayName(item.name) : item.name}
                      subtitle={isPrinter && printerType ? getPrinterTypeLabel(printerType, locale as Locale) : brand?.name}
                      iconKey={getDeviceIconKey(category?.key)}
                      selected={family?.id === item.id}
                      onClick={() => selectFamily(item)}
                    />
                  ))}
                  {filteredFamilies.length === 0 && <EmptyGridMessage label={copy.noResults} />}
                </div>
                <CustomModelBox value={customModel} label={copy.customModel} addLabel={copy.addCustomDevice} onChange={setCustomModel} onAdd={() => clearForward("problems")} />
              </div>
            )}

            {step === "problems" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                  {filteredProblems.map((item) => (
                    <RepairTileCard
                      key={item.key}
                      title={getProblemLabel(item, locale)}
                      subtitle={getProblemDescription(item, locale)}
                      iconKey={item.icon}
                      selected={selectedProblems.some((problem) => problem.key === item.key)}
                      onClick={() => toggleProblem(item)}
                    />
                  ))}
                </div>
                <div className="grid gap-3 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-4 md:grid-cols-[1fr_auto]">
                  <input
                    value={customProblem}
                    onChange={(event) => setCustomProblem(event.target.value)}
                    placeholder={copy.customProblem}
                    className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                  />
                  <button type="button" onClick={() => customProblem.trim() && setError(null)} className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50">
                    <Plus className="me-2 inline h-4 w-4" />
                    {copy.addProblem}
                  </button>
                </div>
              </div>
            )}

            {step === "parts" && (
              <div className="space-y-4">
                <div className="relative max-w-2xl">
                  <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    value={partQuery}
                    onChange={(event) => setPartQuery(event.target.value)}
                    placeholder={copy.searchPart}
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-10 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                  />
                </div>
                {loadingParts ? (
                  <div className="flex h-48 items-center justify-center text-slate-500">
                    <Loader2 className="me-2 h-5 w-5 animate-spin" />
                    {copy.selectParts}
                  </div>
                ) : parts.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                    <Package className="mx-auto mb-3 h-10 w-10 text-slate-400" />
                    <div className="font-black text-slate-900">{copy.noParts}</div>
                    <div className="mt-1 text-sm text-slate-500">{copy.noPartsHint}</div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 2xl:grid-cols-3">
                    {parts.map((part) => {
                      const selected = selectedParts.find((item) => item.id === part.id);
                      const stockStatus = part.availableQty <= 0 ? "out" : part.availableQty <= 2 ? "low" : "ok";
                      return (
                        <div key={part.id} className={cn("rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition", selected && "border-primary ring-1 ring-primary/40")}>
                          <div className="flex items-start gap-3">
                            <button type="button" onClick={() => togglePart(part)} className="flex-1 text-start">
                              <div className="font-black text-slate-900">{part.name}</div>
                              <div className="mt-1 text-xs text-slate-500">SKU: {part.sku}</div>
                              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                                <span className="rounded-full bg-slate-50 px-2 py-1 font-semibold text-slate-600">{copy.available}: {part.availableQty}</span>
                                <span className={cn("rounded-full px-2 py-1 font-bold", stockStatus === "out" ? "bg-red-50 text-red-700" : stockStatus === "low" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700")}>{stockStatus === "out" ? copy.outOfStock : copy.stock}</span>
                              </div>
                              <div className="mt-3 font-black text-primary">{formatMoney(part.sellingPrice, locale, copy.currency)}</div>
                            </button>
                            <input
                              type="checkbox"
                              checked={!!selected}
                              disabled={part.availableQty <= 0}
                              onChange={() => togglePart(part)}
                              className="mt-1 h-4 w-4 accent-primary"
                            />
                          </div>
                          {selected && (
                            <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
                              <label className="text-xs font-bold uppercase tracking-wide text-slate-400">{copy.quantity}</label>
                              <input
                                type="number"
                                min={1}
                                max={part.availableQty}
                                value={selected.quantity}
                                onChange={(event) => setPartQuantity(part.id, Number(event.target.value || 1))}
                                className="h-9 w-20 rounded-xl border border-slate-200 bg-white px-2 text-sm outline-none focus:ring-4 focus:ring-primary/10"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {step === "details" && (
              <div className="grid gap-4 lg:grid-cols-2">
                <Field label={copy.imeiSerial} value={imeiSerial} onChange={setImeiSerial} />
                <Field label={copy.passcode} value={passcode} onChange={setPasscode} />
                <Field label={copy.deviceColor} value={deviceColor} onChange={setDeviceColor} />
                <Field label={copy.storageRam} value={storageRam} onChange={setStorageRam} />
                <Field label={copy.repairCharges} value={repairCharges} onChange={setRepairCharges} type="number" icon={<CircleDollarSign className="h-4 w-4" />} />
                <Field label={copy.warrantyDays} value={warrantyDays} onChange={setWarrantyDays} type="number" icon={<ShieldCheck className="h-4 w-4" />} />
                <Field label={copy.dueAt} value={dueAt} onChange={setDueAt} type="datetime-local" icon={<CalendarClock className="h-4 w-4" />} />
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-slate-800">{copy.assignedTo}</label>
                  <select value={assignedTechnicianId} onChange={(event) => setAssignedTechnicianId(event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10">
                    <option value="">{copy.doNotAssign}</option>
                    {technicians.map((technician) => (
                      <option key={technician.id} value={technician.id}>{technician.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-slate-800">{copy.initialStatus}</label>
                  <select value={initialStatus} onChange={(event) => setInitialStatus(event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10">
                    <option value="received">{copy.received}</option>
                    <option value="in_diagnosis">{copy.inDiagnosis}</option>
                    <option value="waiting_customer_approval">{copy.waitingApproval}</option>
                    <option value="in_repair">{copy.inRepair}</option>
                    <option value="ready_for_pickup">{copy.readyPickup}</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-800">
                  <input type="checkbox" checked={rushJob} onChange={(event) => setRushJob(event.target.checked)} className="h-4 w-4 accent-primary" />
                  {copy.rushJob}
                </label>
                <TextArea label={copy.diagnosticNote} value={diagnosisNote} onChange={setDiagnosisNote} />
                <TextArea label={copy.customerNotes} value={customerNotes} onChange={setCustomerNotes} />
                <TextArea label={copy.internalNotes} value={internalNotes} onChange={setInternalNotes} />
              </div>
            )}
          </div>

          <div className="sticky bottom-0 z-10 grid gap-2 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:grid-cols-4 xl:grid-cols-8">
            <FooterButton icon={<Ticket className="h-4 w-4" />} label={copy.viewTickets} onClick={() => router.push("/dashboard/repairs")} />
            <FooterButton icon={<ReceiptText className="h-4 w-4" />} label={copy.viewInvoices} disabled />
            <FooterButton icon={<ReceiptText className="h-4 w-4" />} label={copy.createEstimate} disabled />
            <FooterButton icon={<Wrench className="h-4 w-4" />} label={copy.moreActions} disabled />
            <button type="button" onClick={goBack} disabled={step === "category"} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-40">
              <ArrowLeft className="h-4 w-4" /> {copy.back}
            </button>
            {step !== "details" ? (
              <button type="button" onClick={goNext} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-3 text-sm font-bold text-white shadow-sm transition hover:bg-primary/90">
                {copy.next} <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button type="button" onClick={submitTicket} disabled={isSubmitting} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-3 text-sm font-bold text-white shadow-sm transition hover:bg-primary/90 disabled:opacity-60">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                {isSubmitting ? copy.creating : copy.createTicket}
              </button>
            )}
            <button type="button" onClick={() => router.back()} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-red-50 px-3 text-sm font-bold text-red-600 transition hover:bg-red-100">
              <X className="h-4 w-4" /> {copy.cancel}
            </button>
          </div>
        </section>

        <RepairSummaryPanel
          className="self-start 2xl:sticky 2xl:top-4"
          title={copy.repairSummary}
          rows={selectedRows}
          issuesCount={issueCount}
          partsCount={partsCount}
          estimatedTotal={formatMoney(estimatedTotal, locale, copy.currency)}
          currencyLabel={copy.estimatedCharges}
          emptyIssuesLabel={copy.selectedIssues}
          partsLabel={copy.parts}
        />
      </div>
    </div>
  );
}

function CustomDeviceBox({
  customBrand,
  customModel,
  customBrandLabel,
  customModelLabel,
  addLabel,
  onBrandChange,
  onModelChange,
  onAdd,
}: {
  customBrand: string;
  customModel: string;
  customBrandLabel: string;
  customModelLabel: string;
  addLabel: string;
  onBrandChange: (value: string) => void;
  onModelChange: (value: string) => void;
  onAdd: () => void;
}) {
  return (
    <div className="grid gap-3 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-4 md:grid-cols-[1fr_1fr_auto]">
      <input
        value={customBrand}
        onChange={(event) => onBrandChange(event.target.value)}
        placeholder={customBrandLabel}
        className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
      />
      <input
        value={customModel}
        onChange={(event) => onModelChange(event.target.value)}
        placeholder={customModelLabel}
        className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
      />
      <button type="button" onClick={onAdd} className="h-11 rounded-xl bg-primary px-4 text-sm font-bold text-white shadow-sm transition hover:bg-primary/90">
        {addLabel}
      </button>
    </div>
  );
}

function CustomModelBox({
  value,
  label,
  addLabel,
  onChange,
  onAdd,
}: {
  value: string;
  label: string;
  addLabel: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}) {
  return (
    <div className="grid gap-3 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-4 md:grid-cols-[1fr_auto]">
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={label}
        className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
      />
      <button type="button" onClick={onAdd} className="h-11 rounded-xl bg-primary px-4 text-sm font-bold text-white shadow-sm transition hover:bg-primary/90">
        {addLabel}
      </button>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  icon,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  icon?: ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold text-slate-800">{label}</label>
      <div className="relative">
        {icon && <span className="absolute start-3 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn("h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10", icon && "ps-9")}
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold text-slate-800">{label}</label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        list={`${label.replace(/\s+/g, "-").toLowerCase()}-options`}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
      />
      <datalist id={`${label.replace(/\s+/g, "-").toLowerCase()}-options`}>
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </div>
  );
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="lg:col-span-2">
      <label className="mb-1.5 block text-sm font-bold text-slate-800">{label}</label>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-24 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}

function FooterButton({ icon, label, onClick, disabled }: { icon: ReactNode; label: string; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {icon}
      {label}
    </button>
  );
}

function EmptyGridMessage({ label }: { label: string }) {
  return (
    <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-sm font-semibold text-slate-500">
      {label}
    </div>
  );
}
