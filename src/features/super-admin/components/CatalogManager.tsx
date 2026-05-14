"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, Image, Layers, Tag, Boxes, Cpu } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  listAllCategories, createCategory, updateCategory, deleteCategory,
  listAllBrands, createBrand, updateBrand, deleteBrand,
  listAllFamilies, createFamily, updateFamily, deleteFamily,
  listAllModels, createModel, updateModel, deleteModel,
} from "../actions/catalog.actions";

// ─── Category Form ────────────────────────────────────────────────────────

function CatForm({ open, onClose, editing, onSaved }: { open: boolean; onClose: () => void; editing?: any; onSaved: () => void }) {
  const [f, setF] = useState({ key: "", nameFr: "", nameAr: "", nameEn: "", sortOrder: 0 });
  const [saving, start] = useTransition();
  useEffect(() => {
    if (editing) setF({ key: editing.key, nameFr: editing.nameFr, nameAr: editing.nameAr || "", nameEn: editing.nameEn || "", sortOrder: editing.sortOrder });
    else setF({ key: "", nameFr: "", nameAr: "", nameEn: "", sortOrder: 0 });
  }, [editing, open]);
  function save() { start(async () => { if (editing) await updateCategory(editing.id, f); else await createCategory(f); onSaved(); onClose(); }); }
  return (
    <Dialog open={open} onClose={onClose} title={editing ? "Edit Category" : "Add Category"}>
      <div className="space-y-3">
        <div><label className="text-xs font-medium">Key *</label><input value={f.key} onChange={e => setF({...f, key: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">French *</label><input value={f.nameFr} onChange={e => setF({...f, nameFr: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Arabic</label><input value={f.nameAr} onChange={e => setF({...f, nameAr: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">English</label><input value={f.nameEn} onChange={e => setF({...f, nameEn: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <Button onClick={save} disabled={saving || !f.key || !f.nameFr}>Save</Button>
      </div>
    </Dialog>
  );
}

// ─── Brand Form ───────────────────────────────────────────────────────────

function BrandForm({ open, onClose, editing, categories, onSaved }: { open: boolean; onClose: () => void; editing?: any; categories: any[]; onSaved: () => void }) {
  const [f, setF] = useState({ name: "", categoryId: categories[0]?.id || "", logoUrl: "", sortOrder: 0 });
  const [saving, start] = useTransition();
  useEffect(() => {
    if (editing) setF({ name: editing.name, categoryId: editing.categoryId, logoUrl: editing.logoUrl || "", sortOrder: editing.sortOrder });
    else setF({ name: "", categoryId: categories[0]?.id || "", logoUrl: "", sortOrder: 0 });
  }, [editing, open, categories]);
  function save() { start(async () => { if (editing) await updateBrand(editing.id, f); else await createBrand(f); onSaved(); onClose(); }); }
  return (
    <Dialog open={open} onClose={onClose} title={editing ? "Edit Brand" : "Add Brand"}>
      <div className="space-y-3">
        <div><label className="text-xs font-medium">Name *</label><input value={f.name} onChange={e => setF({...f, name: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Category *</label><select value={f.categoryId} onChange={e => setF({...f, categoryId: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{categories.map((c: any) => <option key={c.id} value={c.id}>{c.nameFr}</option>)}</select></div>
        <div><label className="text-xs font-medium">Logo URL</label><input value={f.logoUrl} onChange={e => setF({...f, logoUrl: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />{f.logoUrl && <img src={f.logoUrl} className="mt-2 h-12 rounded" alt="" />}</div>
        <Button onClick={save} disabled={saving || !f.name}>Save</Button>
      </div>
    </Dialog>
  );
}

// ─── Family Form ──────────────────────────────────────────────────────────

function FamForm({ open, onClose, editing, brands, onSaved }: { open: boolean; onClose: () => void; editing?: any; brands: any[]; onSaved: () => void }) {
  const [f, setF] = useState({ name: "", brandId: brands[0]?.id || "", sortOrder: 0 });
  const [saving, start] = useTransition();
  useEffect(() => {
    if (editing) setF({ name: editing.name, brandId: editing.brandId, sortOrder: editing.sortOrder });
    else setF({ name: "", brandId: brands[0]?.id || "", sortOrder: 0 });
  }, [editing, open, brands]);
  function save() { start(async () => { if (editing) await updateFamily(editing.id, f); else await createFamily(f); onSaved(); onClose(); }); }
  return (
    <Dialog open={open} onClose={onClose} title={editing ? "Edit Family" : "Add Family"}>
      <div className="space-y-3">
        <div><label className="text-xs font-medium">Name *</label><input value={f.name} onChange={e => setF({...f, name: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Brand *</label><select value={f.brandId} onChange={e => setF({...f, brandId: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{brands.map((b: any) => <option key={b.id} value={b.id}>{b.name}</option>)}</select></div>
        <Button onClick={save} disabled={saving || !f.name}>Save</Button>
      </div>
    </Dialog>
  );
}

// ─── Model Form ───────────────────────────────────────────────────────────

function ModelForm({ open, onClose, editing, families, onSaved }: { open: boolean; onClose: () => void; editing?: any; families: any[]; onSaved: () => void }) {
  const [f, setF] = useState({ name: "", familyId: families[0]?.id || "", releaseYear: "", imageUrl: "", specsJson: "{}", variantsJson: "[]" });
  const [saving, start] = useTransition();
  useEffect(() => {
    if (editing) setF({ name: editing.name, familyId: editing.familyId, releaseYear: editing.releaseYear?.toString() || "", imageUrl: editing.imageUrl || "", specsJson: JSON.stringify(editing.specs || {}, null, 2), variantsJson: JSON.stringify(editing.variants || [], null, 2) });
    else setF({ name: "", familyId: families[0]?.id || "", releaseYear: "", imageUrl: "", specsJson: "{}", variantsJson: "[]" });
  }, [editing, open, families]);
  function save() {
    let specs = {}, variants = []; try { specs = JSON.parse(f.specsJson); } catch {} try { variants = JSON.parse(f.variantsJson); } catch {}
    start(async () => {
      const d = { name: f.name, familyId: f.familyId, releaseYear: f.releaseYear ? Number(f.releaseYear) : null, imageUrl: f.imageUrl || null, specs, variants };
      if (editing) await updateModel(editing.id, d); else await createModel(d);
      onSaved(); onClose();
    });
  }
  return (
    <Dialog open={open} onClose={onClose} title={editing ? "Edit Model" : "Add Model"} className="max-w-lg">
      <div className="space-y-3 max-h-[70vh] overflow-y-auto">
        <div><label className="text-xs font-medium">Name *</label><input value={f.name} onChange={e => setF({...f, name: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Family *</label><select value={f.familyId} onChange={e => setF({...f, familyId: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{families.map((x: any) => <option key={x.id} value={x.id}>{x.name} ({x.brand?.name})</option>)}</select></div>
        <div><label className="text-xs font-medium">Release Year</label><input type="number" value={f.releaseYear} onChange={e => setF({...f, releaseYear: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Image URL</label><input value={f.imageUrl} onChange={e => setF({...f, imageUrl: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />{f.imageUrl && <img src={f.imageUrl} className="mt-2 h-28 rounded-lg object-contain bg-muted p-2" alt="" />}</div>
        <div><label className="text-xs font-medium">Specs (JSON)</label><textarea value={f.specsJson} onChange={e => setF({...f, specsJson: e.target.value})} rows={6} className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-mono" /></div>
        <div><label className="text-xs font-medium">Variants (JSON)</label><textarea value={f.variantsJson} onChange={e => setF({...f, variantsJson: e.target.value})} rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-mono" /></div>
        <Button onClick={save} disabled={saving || !f.name || !f.familyId}>Save</Button>
      </div>
    </Dialog>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────

export function CatalogManager({ initialCategories }: { initialCategories: any[] }) {
  const router = useRouter();
  const [categories, setCategories] = useState(initialCategories);
  const [brands, setBrands] = useState<any[]>([]);
  const [families, setFamilies] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);

  const [selectedCat, setSelectedCat] = useState<any>(null);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [selectedFamily, setSelectedFamily] = useState<any>(null);

  const [showCatForm, setShowCatForm] = useState(false);
  const [showBrandForm, setShowBrandForm] = useState(false);
  const [showFamForm, setShowFamForm] = useState(false);
  const [showModelForm, setShowModelForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);

  function refreshAll() {
    listAllCategories().then(setCategories);
    listAllBrands().then(setBrands);
    listAllFamilies().then(setFamilies);
    listAllModels().then(setModels);
    router.refresh();
  }

  useEffect(() => { listAllBrands().then(setBrands); listAllFamilies().then(setFamilies); listAllModels().then(setModels); }, []);

  const catBrands = brands.filter(b => b.categoryId === selectedCat?.id);
  const brandFams = families.filter(f => f.brandId === selectedBrand?.id);
  const famModels = models.filter(m => m.familyId === selectedFamily?.id);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div><h1 className="text-xl font-bold">Catalog Management</h1><p className="text-sm text-muted-foreground">{models.length} models · {families.length} families · {brands.length} brands · {categories.length} categories</p></div>
      </div>

      {/* CRUD Forms */}
      <CatForm open={showCatForm} onClose={() => setShowCatForm(false)} editing={editing?.type === "cat" ? editing.data : undefined} onSaved={refreshAll} />
      <BrandForm open={showBrandForm} onClose={() => setShowBrandForm(false)} editing={editing?.type === "brand" ? editing.data : undefined} categories={categories} onSaved={refreshAll} />
      <FamForm open={showFamForm} onClose={() => setShowFamForm(false)} editing={editing?.type === "fam" ? editing.data : undefined} brands={brands} onSaved={refreshAll} />
      <ModelForm open={showModelForm} onClose={() => setShowModelForm(false)} editing={editing?.type === "model" ? editing.data : undefined} families={families} onSaved={refreshAll} />

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_280px_1fr] gap-4" style={{ height: "calc(100vh - 150px)" }}>
        {/* Categories Column */}
        <div className="space-y-2 overflow-y-auto">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold text-foreground"><Layers className="h-3.5 w-3.5 inline mr-1" />Categories</h3>
            <button onClick={() => { setEditing(null); setShowCatForm(true); }} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /> Add</button>
          </div>
          <div className="rounded-xl border border-border bg-surface p-2 shadow-sm">
            <div className="space-y-0.5">
              {categories.map(c => (
                <div key={c.id} className={cn("flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs", selectedCat?.id === c.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                  <button onClick={() => { setSelectedCat(c); setSelectedBrand(null); setSelectedFamily(null); }} className="flex-1 text-start font-bold truncate">{c.nameFr}</button>
                  {selectedCat?.id === c.id && (
                    <div className="flex gap-0.5 shrink-0">
                      <button onClick={() => { setEditing({ type: "cat", data: c }); setShowCatForm(true); }} className="p-0.5 hover:text-white/70"><Pencil className="h-3 w-3" /></button>
                      <button onClick={() => { if (confirm("Delete this category?")) deleteCategory(c.id).then(refreshAll); }} className="p-0.5 hover:text-red-300"><Trash2 className="h-3 w-3" /></button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brands Column */}
        <div className="space-y-2 overflow-y-auto">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold text-foreground"><Tag className="h-3.5 w-3.5 inline mr-1" />Brands {selectedCat && `· ${selectedCat.nameFr}`}</h3>
            {selectedCat && <button onClick={() => { setEditing(null); setShowBrandForm(true); }} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /> Add</button>}
          </div>
          <div className="rounded-xl border border-border bg-surface p-2 shadow-sm">
            {!selectedCat ? <p className="text-xs text-muted-foreground p-2">Select a category</p> : catBrands.length === 0 ? <p className="text-xs text-muted-foreground p-2">No brands</p> : (
              <div className="space-y-0.5">
                {catBrands.map(b => (
                  <div key={b.id} className={cn("flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs", selectedBrand?.id === b.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                    <button onClick={() => { setSelectedBrand(b); setSelectedFamily(null); }} className="flex-1 text-start font-bold truncate">{b.name}</button>
                    {selectedBrand?.id === b.id && (
                      <div className="flex gap-0.5 shrink-0">
                        <button onClick={() => { setEditing({ type: "brand", data: b }); setShowBrandForm(true); }} className="p-0.5 hover:text-white/70"><Pencil className="h-3 w-3" /></button>
                        <button onClick={() => { if (confirm("Delete this brand?")) deleteBrand(b.id).then(refreshAll); }} className="p-0.5 hover:text-red-300"><Trash2 className="h-3 w-3" /></button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Models Column */}
        <div className="space-y-2 overflow-y-auto">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold text-foreground"><Boxes className="h-3.5 w-3.5 inline mr-1" />Families {selectedBrand && `· ${selectedBrand.name}`}</h3>
            {selectedBrand && <button onClick={() => { setEditing(null); setShowFamForm(true); }} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /> Add</button>}
          </div>
          <div className="rounded-xl border border-border bg-surface p-2 shadow-sm">
            {!selectedBrand ? <p className="text-xs text-muted-foreground p-2">Select a brand</p> : brandFams.length === 0 ? <p className="text-xs text-muted-foreground p-2">No families</p> : (
              <div className="space-y-0.5">
                {brandFams.map(f => (
                  <div key={f.id} className={cn("flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs", selectedFamily?.id === f.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                    <button onClick={() => setSelectedFamily(f)} className="flex-1 text-start font-bold truncate">{f.name}</button>
                    {selectedFamily?.id === f.id && (
                      <div className="flex gap-0.5 shrink-0">
                        <button onClick={() => { setEditing({ type: "fam", data: f }); setShowFamForm(true); }} className="p-0.5 hover:text-white/70"><Pencil className="h-3 w-3" /></button>
                        <button onClick={() => { if (confirm("Delete this family?")) deleteFamily(f.id).then(refreshAll); }} className="p-0.5 hover:text-red-300"><Trash2 className="h-3 w-3" /></button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Models Grid at bottom when family selected */}
      {selectedFamily && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground"><Cpu className="h-4 w-4 inline mr-1" />Models · {selectedFamily.name} ({famModels.length})</h3>
            <button onClick={() => { setEditing(null); setShowModelForm(true); }} className="text-xs text-primary hover:underline"><Plus className="h-3 w-3 inline" /> Add Model</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {famModels.map(m => (
              <div key={m.id} className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
                <div className="h-28 bg-muted flex items-center justify-center">
                  {m.imageUrl ? <img src={m.imageUrl} className="h-full w-full object-contain p-2" alt="" /> : <Image className="h-8 w-8 text-muted-foreground/30" />}
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-semibold truncate">{m.name}</p>
                  <div className="flex gap-2 mt-1.5">
                    <button onClick={() => { setEditing({ type: "model", data: m }); setShowModelForm(true); }} className="text-xs text-primary hover:underline"><Pencil className="h-3 w-3 inline" /> Edit</button>
                    <button onClick={() => { if (confirm("Delete this model?")) deleteModel(m.id).then(refreshAll); }} className="text-xs text-red-500 hover:underline"><Trash2 className="h-3 w-3 inline" /> Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
