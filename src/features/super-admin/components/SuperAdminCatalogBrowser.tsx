"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Plus, Pencil, Trash2, Image, ChevronLeft, ChevronRight, Search, Layers, Tag, Boxes, Cpu,
  Smartphone, Tablet as TabIcon, Laptop, Monitor, Printer, Gamepad2, HelpCircle
} from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { deleteCategory, deleteBrand, deleteFamily, deleteModel } from "../actions/catalog.actions";
import { createCategory, updateCategory, createBrand, updateBrand, createFamily, updateFamily, createModel, updateModel, fetchModelsByFamily } from "../actions/catalog.actions";
import { listAllCategories, listAllBrands, listAllFamilies } from "../actions/catalog.actions";

const ICONS: Record<string, any> = { phone: Smartphone, tablet: TabIcon, laptop: Laptop, all_in_one: Monitor, desktop_unit: Cpu, printer_laser: Printer, printer_cartridge: Printer, printer_risograph: Printer, console: Gamepad2, other: HelpCircle };

export function SuperAdminCatalogBrowser() {
  const router = useRouter();
  const sp = useSearchParams();

  const [categories, setCategories] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [families, setFamilies] = useState<any[]>([]);
  const [familyModels, setFamilyModels] = useState<any[]>([]);
  const [loadingModels, setLoadingModels] = useState(false);
  const [catSearch, setCatSearch] = useState("");
  const [brandSearch, setBrandSearch] = useState("");
  const [famSearch, setFamSearch] = useState("");

  // Load categories on mount
  useEffect(() => { listAllCategories().then(setCategories); }, []);

  const catId = sp.get("cat") || "";
  const brandId = sp.get("brand") || "";
  const famId = sp.get("fam") || "";

  const selectedCat = categories.find((c: any) => c.id === catId);
  const selectedBrand = brands.find((b: any) => b.id === brandId);
  const selectedFam = families.find((f: any) => f.id === famId);

  // Load brands when category changes
  useEffect(() => {
    if (catId) {
      listAllBrands().then(all => setBrands(all.filter((b: any) => b.categoryId === catId)));
    } else setBrands([]);
  }, [catId]);

  // Load families when brand changes
  useEffect(() => {
    if (brandId) {
      listAllFamilies().then(all => setFamilies(all.filter((f: any) => f.brandId === brandId)));
    } else setFamilies([]);
  }, [brandId]);

  // Load models when family changes
  useEffect(() => {
    if (famId) { setLoadingModels(true); fetchModelsByFamily(famId).then(setFamilyModels).finally(() => setLoadingModels(false)); }
    else setFamilyModels([]);
  }, [famId]);

  function nav(params: Record<string, string>) {
    const p = new URLSearchParams(sp.toString());
    Object.entries(params).forEach(([k, v]) => { if (v) p.set(k, v); else p.delete(k); });
    router.push(`/super-admin/dashboard/catalog?${p.toString()}`);
  }
  function refresh() { router.refresh(); }
  function del(action: any, id: string) { if (confirm("Delete?")) start(async () => { await action(id); refresh(); }); }

  const filteredCats = categories.filter((c: any) => !catSearch || c.nameFr.toLowerCase().includes(catSearch.toLowerCase()));
  const filteredBrands = brands.filter((b: any) => !brandSearch || b.name.toLowerCase().includes(brandSearch.toLowerCase()));
  const filteredFams = families.filter((f: any) => !famSearch || f.name.toLowerCase().includes(famSearch.toLowerCase()));

  const [isPending, start] = useTransition();
  const [catCollapsed, setCatCollapsed] = useState(false);
  const [brandCollapsed, setBrandCollapsed] = useState(false);
  const [famCollapsed, setFamCollapsed] = useState(false);
  const [showCatForm, setShowCatForm] = useState(false);
  const [showBrandForm, setShowBrandForm] = useState(false);
  const [showFamForm, setShowFamForm] = useState(false);
  const [showModelForm, setShowModelForm] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [selectedSuperModelId, setSelectedSuperModelId] = useState<string | null>(null);
  const [totalModels, setTotalModels] = useState(0);
  useEffect(() => { import("../actions/catalog.actions").then(m => m.listAllModels().then(r => setTotalModels(r.length))); }, []);

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Top bar */}
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-2.5 shadow-sm shrink-0">
        <Layers className="h-5 w-5 text-primary" />
        <span className="text-xs font-semibold text-muted-foreground">{categories.length} categories · {brands.length} marques · {families.length} familles · {totalModels} modeles</span>
      </div>

      <div className="flex gap-4 flex-1 overflow-hidden">
        {/* Categories */}
        <div className={cn("shrink-0 flex flex-col gap-2 transition-all duration-200", catCollapsed ? "w-[40px]" : "w-[220px]")}>
          <div className="flex items-center justify-between px-1">
            {catCollapsed ? (
              <button onClick={() => setCatCollapsed(false)} className="flex h-7 w-full items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted" title="Expand categories">
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <>
                <h3 className="text-xs font-bold text-foreground">Categories</h3>
                <div className="flex items-center gap-1">
                  <button onClick={() => setCatCollapsed(true)} className="p-0.5 text-muted-foreground hover:text-foreground" title="Collapse"><ChevronLeft className="h-3.5 w-3.5" /></button>
                  <button onClick={() => { setEditItem(null); setShowCatForm(true); }} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /></button>
                </div>
              </>
            )}
          </div>
          {!catCollapsed && <>
            <div className="relative"><Search className="absolute start-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
              <input value={catSearch} onChange={e => setCatSearch(e.target.value)} placeholder="Search..." className="w-full rounded-lg border border-input bg-background px-2 py-1.5 ps-7 text-xs outline-none" /></div>
            <div className="flex-1 rounded-xl border border-border bg-surface p-2 shadow-sm overflow-y-auto">
              <div className="space-y-0.5">
                {filteredCats.map((c: any) => {
                  const Icon = ICONS[c.key] || HelpCircle;
                  const active = c.id === catId;
                  return <div key={c.id} className={cn("flex items-center gap-1 rounded-lg px-2 py-2 text-xs", active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <button onClick={() => nav({ cat: c.id } as any)} className="flex-1 text-start font-bold truncate">{c.nameFr}</button>
                    {active && <><button onClick={() => { setEditItem(c); setShowCatForm(true); }} className="p-0.5 hover:text-white/70"><Pencil className="h-3 w-3" /></button>
                      <button onClick={() => del(deleteCategory, c.id)} className="p-0.5 hover:text-red-200"><Trash2 className="h-3 w-3" /></button></>}
                  </div>;
                })}
              </div>
            </div>
          </>}
        </div>

        {/* Brands */}
        {catId && <div className={cn("shrink-0 flex flex-col gap-2 transition-all duration-200", brandCollapsed ? "w-[40px]" : "w-[220px]")}>
          <div className="flex items-center justify-between px-1">
            {brandCollapsed ? (
              <button onClick={() => setBrandCollapsed(false)} className="flex h-7 w-full items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted" title="Expand brands">
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <><h3 className="text-xs font-bold text-foreground">Brands</h3>
                <div className="flex items-center gap-1">
                  <button onClick={() => setBrandCollapsed(true)} className="p-0.5 text-muted-foreground hover:text-foreground" title="Collapse"><ChevronLeft className="h-3.5 w-3.5" /></button>
                  <button onClick={() => { setEditItem(null); setShowBrandForm(true); }} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /></button>
                </div>
              </>
            )}
          </div>
          {!brandCollapsed && <>
            <div className="relative"><Search className="absolute start-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
              <input value={brandSearch} onChange={e => setBrandSearch(e.target.value)} placeholder="Search..." className="w-full rounded-lg border border-input bg-background px-2 py-1.5 ps-7 text-xs outline-none" /></div>
            <div className="flex-1 rounded-xl border border-border bg-surface p-2 shadow-sm overflow-y-auto">
              {filteredBrands.length === 0 ? <p className="text-xs text-muted-foreground p-2">No brands</p> :
                <div className="space-y-0.5">{filteredBrands.map((b: any) => {
                  const active = b.id === brandId;
                  return <div key={b.id} className={cn("flex items-center gap-1 rounded-lg px-2 py-2 text-xs", active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                    <button onClick={() => nav({ brand: b.id })} className="flex-1 text-start font-bold truncate">{b.name}</button>
                    {active && <><button onClick={() => { setEditItem(b); setShowBrandForm(true); }} className="p-0.5 hover:text-white/70"><Pencil className="h-3 w-3" /></button>
                      <button onClick={() => del(deleteBrand, b.id)} className="p-0.5 hover:text-red-200"><Trash2 className="h-3 w-3" /></button></>}
                  </div>;
                })}</div>}
            </div>
          </>}
        </div>}

        {/* Families */}
        {brandId && <div className={cn("shrink-0 flex flex-col gap-2 transition-all duration-200", famCollapsed ? "w-[40px]" : "w-[200px]")}>
          <div className="flex items-center justify-between px-1">
            {famCollapsed ? (
              <button onClick={() => setFamCollapsed(false)} className="flex h-7 w-full items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted" title="Expand families">
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <><h3 className="text-xs font-bold text-foreground">Families</h3>
                <div className="flex items-center gap-1">
                  <button onClick={() => setFamCollapsed(true)} className="p-0.5 text-muted-foreground hover:text-foreground" title="Collapse"><ChevronLeft className="h-3.5 w-3.5" /></button>
                  <button onClick={() => { setEditItem(null); setShowFamForm(true); }} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /></button>
                </div>
              </>
            )}
          </div>
          {!famCollapsed && <>
            <div className="relative"><Search className="absolute start-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
              <input value={famSearch} onChange={e => setFamSearch(e.target.value)} placeholder="Search..." className="w-full rounded-lg border border-input bg-background px-2 py-1.5 ps-7 text-xs outline-none" /></div>
            <div className="flex-1 rounded-xl border border-border bg-surface p-2 shadow-sm overflow-y-auto">
              {filteredFams.length === 0 ? <p className="text-xs text-muted-foreground p-2">No families</p> :
                <div className="space-y-0.5">{filteredFams.map((f: any) => {
                  const active = f.id === famId;
                  return <div key={f.id} className={cn("flex items-center gap-1 rounded-lg px-2 py-2 text-xs", active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                    <button onClick={() => nav({ fam: f.id })} className="flex-1 text-start font-bold truncate">{f.name}</button>
                    {active && <><button onClick={() => { setEditItem(f); setShowFamForm(true); }} className="p-0.5 hover:text-white/70"><Pencil className="h-3 w-3" /></button>
                      <button onClick={() => del(deleteFamily, f.id)} className="p-0.5 hover:text-red-200"><Trash2 className="h-3 w-3" /></button></>}
                  </div>;
                })}</div>}
            </div>
          </>}
        </div>}

        {/* Models */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold text-foreground">Models {selectedFam && `· ${selectedFam.name} (${familyModels.length})`}</h3>
            {famId && <button onClick={() => { setEditItem(null); setShowModelForm(true); }} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /></button>}
          </div>
          <div className="flex-1 overflow-y-auto">
            {!famId ? <p className="text-xs text-muted-foreground p-4 text-center">Select a family</p> : loadingModels ? <p className="text-xs text-muted-foreground p-4 text-center">Loading...</p> : familyModels.length === 0 ? <p className="text-xs text-muted-foreground p-4 text-center">No models</p> : (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {familyModels.map((m: any) => {
                  const selected = m.id === selectedSuperModelId;
                  return (
                    <button key={m.id} onClick={() => setSelectedSuperModelId(selected ? null : m.id)}
                      className={cn("rounded-xl border text-start w-full overflow-hidden transition-all", selected ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-md" : "border-border bg-surface shadow-sm hover:shadow-md")}>
                      <div className="h-28 bg-muted flex items-center justify-center">
                        {m.imageUrl ? <img src={m.imageUrl} className="h-full w-full object-contain p-2" alt="" /> : <Image className="h-8 w-8 text-muted-foreground/30" />}
                      </div>
                      <div className="p-2.5">
                        <p className={cn("text-xs font-semibold truncate", selected ? "text-primary" : "text-foreground")}>{m.name}</p>
                        {m.releaseYear && <p className="text-[11px] text-muted-foreground">{m.releaseYear}</p>}
                        {m.specs?.processor && <p className="text-[11px] text-muted-foreground truncate mt-0.5">{m.specs.processor}</p>}
                        <div className="flex gap-2 mt-1.5">
                          <span onClick={(e) => { e.stopPropagation(); setEditItem(m); setShowModelForm(true); }} className="text-xs text-primary hover:underline cursor-pointer"><Pencil className="h-3 w-3 inline" /> Edit</span>
                          <span onClick={(e) => { e.stopPropagation(); del(deleteModel, m.id); }} className="text-xs text-red-500 hover:underline cursor-pointer"><Trash2 className="h-3 w-3 inline" /> Delete</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <CatD open={showCatForm} onClose={() => setShowCatForm(false)} editing={editItem} onSaved={() => { listAllCategories().then(setCategories); refresh(); }} />
      <BrandD open={showBrandForm} onClose={() => setShowBrandForm(false)} editing={editItem} catId={catId} onSaved={() => { listAllBrands().then(all => setBrands(all.filter((b: any) => b.categoryId === catId))); refresh(); }} />
      <FamD open={showFamForm} onClose={() => setShowFamForm(false)} editing={editItem} brandId={brandId} onSaved={() => { listAllFamilies().then(all => setFamilies(all.filter((f: any) => f.brandId === brandId))); refresh(); }} />
      <ModelD open={showModelForm} onClose={() => setShowModelForm(false)} editing={editItem} famId={famId} onSaved={() => { if (famId) fetchModelsByFamily(famId).then(setFamilyModels); refresh(); }} />
    </div>
  );
}

// Simplified Dialog helpers
function InputField({ label, value, onChange, type = "text" }: any) { return <div><label className="text-xs font-medium block mb-1">{label}</label><input type={type} value={value} onChange={e => onChange(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>; }
function SelectField({ label, value, onChange, options }: any) { return <div><label className="text-xs font-medium block mb-1">{label}</label><select value={value} onChange={e => onChange(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{options.map((o: any) => <option key={o.value} value={o.value}>{o.label}</option>)}</select></div>; }

// Helper: run server action, show alert on error, close + refresh on success
async function run(action: any, onSaved: any, onClose: any) {
  const result = await action();
  if (result?.error) { alert(result.error); return; }
  onSaved?.(); onClose?.();
}

function CatD({ open, onClose, editing, onSaved }: any) {
  const [f, setF] = useState({ key: "", nameFr: "", nameAr: "", nameEn: "", sortOrder: 0 });
  const [saving, start] = useTransition();
  useEffect(() => { if (open && editing) setF({ key: editing.key, nameFr: editing.nameFr, nameAr: editing.nameAr || "", nameEn: editing.nameEn || "", sortOrder: editing.sortOrder }); else if (open) setF({ key: "", nameFr: "", nameAr: "", nameEn: "", sortOrder: 0 }); }, [open, editing]);
  return (<Dialog open={open} onClose={onClose} title={editing ? "Edit" : "Add Category"}><div className="space-y-3">
    <InputField label="Key *" value={f.key} onChange={v => setF({...f, key: v})} /><InputField label="French *" value={f.nameFr} onChange={v => setF({...f, nameFr: v})} />
    <InputField label="Arabic" value={f.nameAr} onChange={v => setF({...f, nameAr: v})} /><InputField label="English" value={f.nameEn} onChange={v => setF({...f, nameEn: v})} />
    <Button onClick={() => start(async () => run(() => editing ? updateCategory(editing.id, f) : createCategory(f), onSaved, onClose))} disabled={saving || !f.key || !f.nameFr}>Save</Button>
  </div></Dialog>);
}
function BrandD({ open, onClose, editing, catId, onSaved }: any) {
  const [cats, setCats] = useState<any[]>([]); const [f, setF] = useState({ name: "", categoryId: "", logoUrl: "", sortOrder: 0 });
  const [saving, start] = useTransition();
  useEffect(() => { listAllCategories().then(setCats); }, []);
  useEffect(() => { if (open && editing) setF({ name: editing.name, categoryId: editing.categoryId, logoUrl: editing.logoUrl || "", sortOrder: editing.sortOrder }); else if (open) setF({ name: "", categoryId: catId, logoUrl: "", sortOrder: 0 }); }, [open, editing, catId]);
  return (<Dialog open={open} onClose={onClose} title={editing ? "Edit" : "Add Brand"}><div className="space-y-3">
    <InputField label="Name *" value={f.name} onChange={v => setF({...f, name: v})} />
    <SelectField label="Category" value={f.categoryId} onChange={v => setF({...f, categoryId: v})} options={cats.map((c: any) => ({ value: c.id, label: c.nameFr }))} />
    <InputField label="Logo URL" value={f.logoUrl} onChange={v => setF({...f, logoUrl: v})} />{f.logoUrl && <img src={f.logoUrl} className="h-10 rounded" alt="" />}
    <Button onClick={() => start(async () => run(() => editing ? updateBrand(editing.id, f) : createBrand(f), onSaved, onClose))} disabled={saving || !f.name}>Save</Button>
  </div></Dialog>);
}
function FamD({ open, onClose, editing, brandId, onSaved }: any) {
  const [f, setF] = useState({ name: "", brandId: "", sortOrder: 0 }); const [saving, start] = useTransition();
  useEffect(() => { if (open && editing) setF({ name: editing.name, brandId: editing.brandId, sortOrder: editing.sortOrder }); else if (open) setF({ name: "", brandId: brandId, sortOrder: 0 }); }, [open, editing, brandId]);
  return (<Dialog open={open} onClose={onClose} title={editing ? "Edit" : "Add Family"}><div className="space-y-3">
    <InputField label="Name *" value={f.name} onChange={v => setF({...f, name: v})} />
    <Button onClick={() => start(async () => run(() => editing ? updateFamily(editing.id, f) : createFamily(f), onSaved, onClose))} disabled={saving || !f.name}>Save</Button>
  </div></Dialog>);
}
function ModelD({ open, onClose, editing, famId, onSaved }: any) {
  const [fams, setFams] = useState<any[]>([]); const [f, setF] = useState({ name: "", familyId: "", releaseYear: "", imageUrl: "", specsJson: "{}", variantsJson: "[]" });
  const [saving, start] = useTransition();
  useEffect(() => { listAllFamilies().then(setFams); }, []);
  useEffect(() => { if (!open) return; if (editing) setF({ name: editing.name, familyId: editing.familyId, releaseYear: editing.releaseYear?.toString() || "", imageUrl: editing.imageUrl || "", specsJson: JSON.stringify(editing.specs || {}, null, 2), variantsJson: JSON.stringify(editing.variants || [], null, 2) }); else setF({ name: "", familyId: famId, releaseYear: "", imageUrl: "", specsJson: "{}", variantsJson: "[]" }); }, [open, editing, famId]);
  function buildData() { let specs={}, variants=[]; try{specs=JSON.parse(f.specsJson)}catch{} try{variants=JSON.parse(f.variantsJson)}catch{} return { name: f.name, familyId: f.familyId, releaseYear: f.releaseYear ? Number(f.releaseYear) : null, imageUrl: f.imageUrl || null, specs, variants }; }
  return (<Dialog open={open} onClose={onClose} title={editing ? "Edit" : "Add Model"} className="max-w-lg"><div className="space-y-3 max-h-[70vh] overflow-y-auto">
    <InputField label="Name *" value={f.name} onChange={v => setF({...f, name: v})} />
    <SelectField label="Family" value={f.familyId} onChange={v => setF({...f, familyId: v})} options={fams.map((x: any) => ({ value: x.id, label: x.name }))} />
    <InputField label="Release Year" value={f.releaseYear} onChange={v => setF({...f, releaseYear: v})} type="number" />
    <div><label className="text-xs font-medium block mb-1">Image URL</label><input value={f.imageUrl} onChange={e => setF({...f, imageUrl: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />{f.imageUrl && <img src={f.imageUrl} className="mt-2 h-28 rounded-lg object-contain bg-muted p-2" alt="" />}</div>
    <div><label className="text-xs font-medium block mb-1">Specs (JSON)</label><textarea value={f.specsJson} onChange={e => setF({...f, specsJson: e.target.value})} rows={6} className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-mono" /></div>
    <div><label className="text-xs font-medium block mb-1">Variants (JSON)</label><textarea value={f.variantsJson} onChange={e => setF({...f, variantsJson: e.target.value})} rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-mono" /></div>
    <Button onClick={() => start(async () => run(() => editing ? updateModel(editing.id, buildData()) : createModel(buildData()), onSaved, onClose))} disabled={saving || !f.name || !f.familyId}>Save</Button>
  </div></Dialog>);
}

