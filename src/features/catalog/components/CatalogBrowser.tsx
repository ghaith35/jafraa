"use client";

import { useLocale } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { hasPermission } from "@/lib/auth/permissions";
import {
  createStoreCustomBrand, createStoreCustomFamily,
  archiveStoreCustomBrand, archiveStoreCustomFamily,
} from "../actions/catalog.actions";
import {
  Plus, Trash2, Image, ChevronLeft, ChevronRight, Search,
  Layers, Globe, Store, ArrowUpDown,
  Smartphone, Tablet as TabIcon, Laptop, Monitor, Cpu,
  Printer, Gamepad2, HelpCircle,
} from "lucide-react";
import type { UserRole } from "@prisma/client";

type Locale = "fr" | "en" | "ar";

interface Category { id: string; key: string; nameFr: string; nameAr: string; nameEn: string; }
interface Brand { id: string; name: string; logoUrl?: string | null; isGlobalDefault: boolean; categoryId: string; _count?: { modelFamilies?: number }; }
interface Family { id: string; name: string; isGlobalDefault: boolean; brandId: string; }
interface DeviceModel { id: string; name: string; releaseYear: number | null; imageUrl: string | null; specs: any; variants: any; }

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

const CATEGORY_ICONS: Record<string, any> = {
  phone: Smartphone, tablet: TabIcon, laptop: Laptop,
  all_in_one: Monitor, desktop_unit: Cpu,
  printer_laser: Printer, printer_cartridge: Printer, printer_risograph: Printer,
  console: Gamepad2, other: HelpCircle,
};

type Copy = {
  search: string; categories: string; brands: string; families: string; models: string;
  noBrands: string; noFamilies: string; noModels: string;
  selectCategory: string; selectBrand: string; selectFamily: string;
  addBrand: string; addFamily: string; brandName: string; familyName: string;
  cancel: string; save: string; delete: string; deleteConfirm: string; global: string; custom: string;
  variants: string; close: string;
};

const COPY: Record<Locale, Copy> = {
  fr: {
    search: "Rechercher", categories: "Catégories", brands: "Marques", families: "Familles", models: "Modèles",
    noBrands: "Aucune marque", noFamilies: "Aucune famille", noModels: "Aucun modèle",
    selectCategory: "Sélectionnez une catégorie", selectBrand: "Sélectionnez une marque", selectFamily: "Sélectionnez une famille",
    addBrand: "Ajouter une marque", addFamily: "Ajouter une famille",
    brandName: "Nom de la marque", familyName: "Nom de la famille",
    cancel: "Annuler", save: "Enregistrer", delete: "Supprimer", deleteConfirm: "Supprimer ?",
    global: "Global", custom: "Boutique", variants: "variantes", close: "Fermer",
  },
  en: {
    search: "Search", categories: "Categories", brands: "Brands", families: "Families", models: "Models",
    noBrands: "No brands", noFamilies: "No families", noModels: "No models",
    selectCategory: "Select a category", selectBrand: "Select a brand", selectFamily: "Select a family",
    addBrand: "Add brand", addFamily: "Add family",
    brandName: "Brand name", familyName: "Family name",
    cancel: "Cancel", save: "Save", delete: "Delete", deleteConfirm: "Delete?",
    global: "Global", custom: "Store", variants: "variants", close: "Close",
  },
  ar: {
    search: "بحث", categories: "الفئات", brands: "العلامات", families: "العائلات", models: "الموديلات",
    noBrands: "لا توجد علامات", noFamilies: "لا توجد عائلات", noModels: "لا توجد موديلات",
    selectCategory: "اختر فئة", selectBrand: "اختر علامة", selectFamily: "اختر عائلة",
    addBrand: "إضافة علامة", addFamily: "إضافة عائلة",
    brandName: "اسم العلامة", familyName: "اسم العائلة",
    cancel: "إلغاء", save: "حفظ", delete: "حذف", deleteConfirm: "حذف؟",
    global: "عام", custom: "المتجر", variants: "متغيرات", close: "إغلاق",
  },
};

function categoryLabel(cat: Category, locale: Locale) {
  if (locale === "ar") return cat.nameAr || cat.nameFr;
  if (locale === "en") return cat.nameEn || cat.nameFr;
  return cat.nameFr;
}

function ScopeBadge({ isGlobal }: { isGlobal: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold shrink-0", isGlobal ? "bg-sky-50 text-sky-700" : "bg-amber-50 text-amber-700")}>
      {isGlobal ? <Globe className="h-2.5 w-2.5" /> : <Store className="h-2.5 w-2.5" />}
    </span>
  );
}

export function CatalogBrowser({
  categories, selectedCategoryKey, brands, selectedBrandId,
  families, selectedFamilyId, models = [], userRole,
}: Props) {
  const rawLocale = useLocale();
  const locale: Locale = rawLocale === "ar" || rawLocale === "en" ? rawLocale : "fr";
  const copy = COPY[locale];
  const router = useRouter();
  const sp = useSearchParams();
  const canManage = hasPermission(userRole, "inventory:manage");

  const [catCollapsed, setCatCollapsed] = useState(false);
  const [brandCollapsed, setBrandCollapsed] = useState(false);
  const [famCollapsed, setFamCollapsed] = useState(false);
  const [catSearch, setCatSearch] = useState("");
  const [brandSearch, setBrandSearch] = useState("");
  const [famSearch, setFamSearch] = useState("");
  const [modelSearch, setModelSearch] = useState("");
  const [modelSortAsc, setModelSortAsc] = useState(false);
  const [showBrandD, setShowBrandD] = useState(false);
  const [showFamilyD, setShowFamilyD] = useState(false);
  const [variantModel, setVariantModel] = useState<DeviceModel | null>(null);
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [isPending, start] = useTransition();

  const selectedCat = categories.find((c) => c.key === selectedCategoryKey) ?? null;
  const selectedBrand = brands.find((b) => b.id === selectedBrandId) ?? null;
  const selectedFam = families.find((f) => f.id === selectedFamilyId) ?? null;

  useEffect(() => { router.refresh(); }, []);

  function nav(params: Record<string, string | null>) {
    const p = new URLSearchParams(sp.toString());
    Object.entries(params).forEach(([k, v]) => { if (v) p.set(k, v); else p.delete(k); });
    router.push(`/dashboard/settings/catalog?${p.toString()}`);
  }

  const filteredCats = categories.filter((c) => !catSearch || categoryLabel(c, locale).toLowerCase().includes(catSearch.toLowerCase()));
  const filteredBrands = brands.filter((b) => !brandSearch || b.name.toLowerCase().includes(brandSearch.toLowerCase()));
  const filteredFams = families.filter((f) => !famSearch || f.name.toLowerCase().includes(famSearch.toLowerCase()));
  const filteredModels = models
    .filter((m) => !modelSearch || m.name.toLowerCase().includes(modelSearch.toLowerCase()))
    .sort((a, b) => {
      const ya = a.releaseYear ?? (modelSortAsc ? 9999 : -1);
      const yb = b.releaseYear ?? (modelSortAsc ? 9999 : -1);
      return modelSortAsc ? ya - yb : yb - ya;
    });

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="flex flex-col gap-1" style={{ height: "calc(100svh - 8rem)" }}>
      <div className="flex gap-4 flex-1 overflow-hidden">
        {/* Categories */}
        <div className={cn("shrink-0 flex flex-col gap-2 transition-all duration-200", catCollapsed ? "w-[40px]" : "w-[220px]")}>
          <div className="flex items-center justify-between px-1">
            {catCollapsed ? (
              <button onClick={() => setCatCollapsed(false)} className="flex h-7 w-full items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <><h3 className="text-xs font-bold text-foreground">{copy.categories}</h3>
                <button onClick={() => setCatCollapsed(true)} className="p-0.5 text-muted-foreground hover:text-foreground"><ChevronLeft className="h-3.5 w-3.5" /></button>
              </>
            )}
          </div>
          {!catCollapsed && <>
            <div className="relative">
              <Search className="absolute start-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
              <input value={catSearch} onChange={(e) => setCatSearch(e.target.value)} placeholder={copy.search}
                className="w-full rounded-lg border border-input bg-background px-2 py-1.5 ps-7 text-xs outline-none" />
            </div>
            <div className="flex-1 rounded-xl border border-border bg-surface p-2 shadow-sm overflow-y-auto">
              {filteredCats.length === 0 ? <p className="text-xs text-muted-foreground p-2">{copy.noBrands}</p> : (
                <div className="space-y-0.5">
                  {filteredCats.map((c) => {
                    const Icon = CATEGORY_ICONS[c.key] || HelpCircle;
                    const active = c.key === selectedCategoryKey;
                    return (
                      <button key={c.id} onClick={() => nav({ category: c.key, brand: null, family: null })}
                        className={cn("flex w-full items-center gap-2 rounded-lg px-2 py-2 text-xs", active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground")}
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate font-bold">{categoryLabel(c, locale)}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </>}
        </div>

        {/* Brands */}
        {selectedCategoryKey && (
          <div className={cn("shrink-0 flex flex-col gap-2 transition-all duration-200", brandCollapsed ? "w-[40px]" : "w-[220px]")}>
            <div className="flex items-center justify-between px-1">
              {brandCollapsed ? (
                <button onClick={() => setBrandCollapsed(false)} className="flex h-7 w-full items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <><h3 className="text-xs font-bold text-foreground">{copy.brands}</h3>
                  <div className="flex items-center gap-1">
                    <button onClick={() => setBrandCollapsed(true)} className="p-0.5 text-muted-foreground hover:text-foreground"><ChevronLeft className="h-3.5 w-3.5" /></button>
                    {canManage && <button onClick={() => setShowBrandD(true)} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /></button>}
                  </div>
                </>
              )}
            </div>
            {!brandCollapsed && <>
              <div className="relative">
                <Search className="absolute start-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                <input value={brandSearch} onChange={(e) => setBrandSearch(e.target.value)} placeholder={copy.search}
                  className="w-full rounded-lg border border-input bg-background px-2 py-1.5 ps-7 text-xs outline-none" />
              </div>
              <div className="flex-1 rounded-xl border border-border bg-surface p-2 shadow-sm overflow-y-auto">
                {filteredBrands.length === 0 ? <p className="text-xs text-muted-foreground p-2">{copy.noBrands}</p> : (
                  <div className="space-y-0.5">
                    {filteredBrands.map((b) => {
                      const active = b.id === selectedBrandId;
                      return (
                        <div key={b.id} className={cn("flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs", active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                          <button onClick={() => nav({ brand: b.id, family: null })} className="flex-1 text-start truncate font-bold">{b.name}</button>
                          <ScopeBadge isGlobal={b.isGlobalDefault} />
                          {active && !b.isGlobalDefault && canManage && (
                            <button onClick={() => { if (confirm(copy.deleteConfirm)) start(async () => { await archiveStoreCustomBrand(b.id); router.refresh(); }); }}
                              className="p-0.5 hover:text-red-200 shrink-0"><Trash2 className="h-3 w-3" /></button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>}
          </div>
        )}

        {/* Families */}
        {selectedBrandId && (
          <div className={cn("shrink-0 flex flex-col gap-2 transition-all duration-200", famCollapsed ? "w-[40px]" : "w-[200px]")}>
            <div className="flex items-center justify-between px-1">
              {famCollapsed ? (
                <button onClick={() => setFamCollapsed(false)} className="flex h-7 w-full items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <><h3 className="text-xs font-bold text-foreground">{copy.families}</h3>
                  <div className="flex items-center gap-1">
                    <button onClick={() => setFamCollapsed(true)} className="p-0.5 text-muted-foreground hover:text-foreground"><ChevronLeft className="h-3.5 w-3.5" /></button>
                    {canManage && <button onClick={() => setShowFamilyD(true)} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /></button>}
                  </div>
                </>
              )}
            </div>
            {!famCollapsed && <>
              <div className="relative">
                <Search className="absolute start-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                <input value={famSearch} onChange={(e) => setFamSearch(e.target.value)} placeholder={copy.search}
                  className="w-full rounded-lg border border-input bg-background px-2 py-1.5 ps-7 text-xs outline-none" />
              </div>
              <div className="flex-1 rounded-xl border border-border bg-surface p-2 shadow-sm overflow-y-auto">
                {filteredFams.length === 0 ? <p className="text-xs text-muted-foreground p-2">{copy.noFamilies}</p> : (
                  <div className="space-y-0.5">
                    {filteredFams.map((f) => {
                      const active = f.id === selectedFamilyId;
                      return (
                        <div key={f.id} className={cn("flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs", active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                          <button onClick={() => nav({ family: f.id })} className="flex-1 text-start truncate font-bold">{f.name}</button>
                          <ScopeBadge isGlobal={f.isGlobalDefault} />
                          {active && !f.isGlobalDefault && canManage && (
                            <button onClick={() => { if (confirm(copy.deleteConfirm)) start(async () => { await archiveStoreCustomFamily(f.id); router.refresh(); }); }}
                              className="p-0.5 hover:text-red-200 shrink-0"><Trash2 className="h-3 w-3" /></button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>}
          </div>
        )}

        {/* Models */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold text-foreground">
              {copy.models}{selectedFam ? ` · ${selectedFam.name}` : ""}
            </h3>
            {selectedFamilyId && (
              <button onClick={() => setModelSortAsc(!modelSortAsc)} className="flex items-center gap-1 rounded-md px-1.5 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title={modelSortAsc ? "Newest first" : "Oldest first"}>
                <ArrowUpDown className="h-3 w-3" />
                <span className="text-[10px] font-medium">{modelSortAsc ? "↑" : "↓"}</span>
              </button>
            )}
          </div>
          {selectedFamilyId && (
            <div className="relative">
              <Search className="absolute start-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
              <input value={modelSearch} onChange={(e) => setModelSearch(e.target.value)} placeholder={copy.search}
                className="w-full rounded-lg border border-input bg-background px-2 py-1.5 ps-7 text-xs outline-none" />
            </div>
          )}
          <div className="flex-1 overflow-y-auto">
            {!selectedFamilyId ? (
              <p className="text-xs text-muted-foreground p-4 text-center">{copy.selectFamily}</p>
            ) : filteredModels.length === 0 ? (
              <p className="text-xs text-muted-foreground p-4 text-center">{copy.noModels}</p>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {filteredModels.map((m) => {
                  const selected = m.id === selectedModelId;
                  return (
                    <button key={m.id} onClick={() => setSelectedModelId(selected ? null : m.id)}
                      className={cn("rounded-xl border text-start w-full overflow-hidden transition-all", selected ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-md" : "border-border bg-surface shadow-sm hover:shadow-md")}>
                      <div className="h-28 bg-muted flex items-center justify-center">
                        {m.imageUrl ? <img src={m.imageUrl} className="h-full w-full object-contain p-2" alt="" /> : <Image className="h-8 w-8 text-muted-foreground/30" />}
                      </div>
                      <div className="p-2.5">
                        <p className={cn("text-xs font-semibold truncate", selected ? "text-primary" : "text-foreground")}>{m.name}</p>
                        {m.releaseYear && <p className="text-[11px] text-muted-foreground">{m.releaseYear}</p>}
                        {m.specs?.processor && <p className="text-[11px] text-muted-foreground truncate mt-0.5">{String(m.specs.processor)}</p>}
                        {m.variants && m.variants.length > 0 && (
                          <span onClick={(e) => { e.stopPropagation(); setVariantModel(m); }} className="inline-block text-[11px] font-medium text-primary hover:underline mt-1 cursor-pointer">
                            {m.variants.length} {copy.variants}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Brand dialog */}
      <Dialog open={showBrandD} onClose={() => setShowBrandD(false)} title={copy.addBrand}>
        <BrandForm copy={copy} categoryId={selectedCat?.id ?? ""} onSaved={() => { setShowBrandD(false); router.refresh(); }} onClose={() => setShowBrandD(false)} />
      </Dialog>

      {/* Family dialog */}
      <Dialog open={showFamilyD} onClose={() => setShowFamilyD(false)} title={copy.addFamily}>
        <FamilyForm copy={copy} brandId={selectedBrand?.id ?? ""} onSaved={() => { setShowFamilyD(false); router.refresh(); }} onClose={() => setShowFamilyD(false)} />
      </Dialog>

      {/* Variants dialog */}
      <Dialog open={!!variantModel} onClose={() => setVariantModel(null)} title={variantModel?.name ?? ""} className="max-w-lg">
        {variantModel?.variants && (
          <div className="space-y-1.5 max-h-80 overflow-y-auto">
            {variantModel.variants.map((v: any, i: number) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2 text-sm">
                <span className="flex-1 font-medium text-foreground">{String(v.name)}</span>
                {v.storage && <span className="text-xs text-muted-foreground">{String(v.storage)}</span>}
                {v.color && <span className="text-xs text-muted-foreground">{String(v.color)}</span>}
              </div>
            ))}
          </div>
        )}
      </Dialog>
    </div>
  );
}

function BrandForm({ copy, categoryId, onSaved, onClose }: { copy: Copy; categoryId: string; onSaved: () => void; onClose: () => void }) {
  const [name, setName] = useState("");
  const [saving, start] = useTransition();
  const [error, setError] = useState("");
  async function save() {
    if (!name.trim() || !categoryId) return;
    setError("");
    const r = await createStoreCustomBrand(categoryId, name.trim());
    if ("error" in r) { setError(r.error); return; }
    onSaved();
  }
  return (
    <div className="space-y-3">
      <div><label className="text-xs font-medium">{copy.brandName}</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" autoFocus /></div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={onClose} disabled={saving}>{copy.cancel}</Button>
        <Button onClick={() => start(save)} disabled={saving || !name.trim()}>{copy.save}</Button>
      </div>
    </div>
  );
}

function FamilyForm({ copy, brandId, onSaved, onClose }: { copy: Copy; brandId: string; onSaved: () => void; onClose: () => void }) {
  const [name, setName] = useState("");
  const [saving, start] = useTransition();
  const [error, setError] = useState("");
  async function save() {
    if (!name.trim() || !brandId) return;
    setError("");
    const r = await createStoreCustomFamily(brandId, name.trim());
    if ("error" in r) { setError(r.error); return; }
    onSaved();
  }
  return (
    <div className="space-y-3">
      <div><label className="text-xs font-medium">{copy.familyName}</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" autoFocus /></div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={onClose} disabled={saving}>{copy.cancel}</Button>
        <Button onClick={() => start(save)} disabled={saving || !name.trim()}>{copy.save}</Button>
      </div>
    </div>
  );
}
