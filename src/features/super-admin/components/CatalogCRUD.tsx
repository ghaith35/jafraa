"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, Layers, Tag, Boxes, Cpu } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  listAllCategories, createCategory, updateCategory, deleteCategory,
  listAllBrands, createBrand, updateBrand, deleteBrand,
  listAllFamilies, createFamily, updateFamily, deleteFamily,
  listAllModels, createModel, updateModel, deleteModel,
} from "../actions/catalog.actions";

export function CatalogCRUD() {
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [families, setFamilies] = useState<any[]>([]);
  const [models, setModels] = useState<any[]>([]);
  const [tab, setTab] = useState<"cats" | "brands" | "fams" | "models">("cats");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [isPending, startTransition] = useTransition();

  function load() { listAllCategories().then(setCategories); listAllBrands().then(setBrands); listAllFamilies().then(setFamilies); listAllModels().then(setModels); router.refresh(); }
  useEffect(load, []);

  function openAdd() { setEditing(null); setShowForm(true); }
  function openEdit(item: any) { setEditing(item); setShowForm(true); }
  function handleDelete(id: string, action: (id: string) => Promise<any>) { if (confirm("Delete?")) startTransition(async () => { await action(id); load(); }); }

  const tabs = [
    { key: "cats" as const, label: "Categories", icon: Layers, count: categories.length, data: categories },
    { key: "brands" as const, label: "Brands", icon: Tag, count: brands.length, data: brands },
    { key: "fams" as const, label: "Families", icon: Boxes, count: families.length, data: families },
    { key: "models" as const, label: "Models", icon: Cpu, count: models.length, data: models },
  ];
  const currentTab = tabs.find(t => t.key === tab)!;

  return (
    <div className="space-y-3">
      {/* Tab bar */}
      <div className="flex items-center gap-1 rounded-xl border border-border bg-surface-sunken p-1 w-fit">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={cn("flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition", tab === t.key ? "bg-surface text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
            <t.icon className="h-3.5 w-3.5" />{t.label} ({t.count})
          </button>
        ))}
      </div>

      {/* Data list + add button */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{currentTab.count} {currentTab.label.toLowerCase()}</span>
        <button onClick={openAdd} className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"><Plus className="h-3 w-3" /> Add {currentTab.label.slice(0, -1)}</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {currentTab.data.slice(0, 50).map((item: any) => (
          <div key={item.id} className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs">
            <span className="flex-1 font-medium truncate">
              {item.name || item.nameFr || item.key}
              {item.category?.nameFr && <span className="text-muted-foreground ml-1">· {item.category.nameFr}</span>}
              {item.brand?.name && <span className="text-muted-foreground ml-1">· {item.brand.name}</span>}
            </span>
            <button onClick={() => openEdit(item)} className="shrink-0 p-0.5 text-muted-foreground hover:text-foreground"><Pencil className="h-3 w-3" /></button>
            <button onClick={() => {
              if (tab === "cats") handleDelete(item.id, deleteCategory);
              if (tab === "brands") handleDelete(item.id, deleteBrand);
              if (tab === "fams") handleDelete(item.id, deleteFamily);
              if (tab === "models") handleDelete(item.id, deleteModel);
            }} className="shrink-0 p-0.5 text-muted-foreground hover:text-red-500"><Trash2 className="h-3 w-3" /></button>
          </div>
        ))}
      </div>

      {/* CRUD Dialogs */}
      {tab === "cats" && <CatDialog open={showForm} onClose={() => setShowForm(false)} editing={editing} onSaved={load} />}
      {tab === "brands" && <BrandDialog open={showForm} onClose={() => setShowForm(false)} editing={editing} categories={categories} onSaved={load} />}
      {tab === "fams" && <FamDialog open={showForm} onClose={() => setShowForm(false)} editing={editing} brands={brands} onSaved={load} />}
      {tab === "models" && <ModelDialog open={showForm} onClose={() => setShowForm(false)} editing={editing} families={families} onSaved={load} />}
    </div>
  );
}

function CatDialog({ open, onClose, editing, onSaved }: any) {
  const [f, setF] = useState({ key: "", nameFr: "", nameAr: "", nameEn: "", sortOrder: 0 });
  const [saving, start] = useTransition();
  useEffect(() => { if (editing) setF({ key: editing.key, nameFr: editing.nameFr, nameAr: editing.nameAr || "", nameEn: editing.nameEn || "", sortOrder: editing.sortOrder }); else setF({ key: "", nameFr: "", nameAr: "", nameEn: "", sortOrder: 0 }); }, [editing, open]);
  return (<Dialog open={open} onClose={onClose} title={editing ? "Edit Category" : "Add Category"}>
    <div className="space-y-3">
      <div><label className="text-xs font-medium">Key *</label><input value={f.key} onChange={e => setF({...f, key: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" /></div>
      <div><label className="text-xs font-medium">French *</label><input value={f.nameFr} onChange={e => setF({...f, nameFr: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" /></div>
      <div><label className="text-xs font-medium">Arabic</label><input value={f.nameAr} onChange={e => setF({...f, nameAr: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" /></div>
      <div><label className="text-xs font-medium">English</label><input value={f.nameEn} onChange={e => setF({...f, nameEn: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" /></div>
      <Button onClick={() => start(async () => { if (editing) await updateCategory(editing.id, f); else await createCategory(f); onSaved(); onClose(); })} disabled={saving || !f.key || !f.nameFr}>Save</Button>
    </div>
  </Dialog>);
}

function BrandDialog({ open, onClose, editing, categories, onSaved }: any) {
  const [f, setF] = useState({ name: "", categoryId: categories[0]?.id || "", logoUrl: "", sortOrder: 0 });
  useEffect(() => { if (editing) setF({ name: editing.name, categoryId: editing.categoryId, logoUrl: editing.logoUrl || "", sortOrder: editing.sortOrder }); else setF({ name: "", categoryId: categories[0]?.id || "", logoUrl: "", sortOrder: 0 }); }, [editing, open, categories]);
  const [saving, start] = useTransition();
  return (<Dialog open={open} onClose={onClose} title={editing ? "Edit Brand" : "Add Brand"}>
    <div className="space-y-3">
      <div><label className="text-xs font-medium">Name *</label><input value={f.name} onChange={e => setF({...f, name: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" /></div>
      <div><label className="text-xs font-medium">Category *</label><select value={f.categoryId} onChange={e => setF({...f, categoryId: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm">{categories.map((c: any) => <option key={c.id} value={c.id}>{c.nameFr}</option>)}</select></div>
      <div><label className="text-xs font-medium">Logo URL</label><input value={f.logoUrl} onChange={e => setF({...f, logoUrl: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" />{f.logoUrl && <img src={f.logoUrl} className="mt-2 h-12 rounded" alt="" />}</div>
      <Button onClick={() => start(async () => { if (editing) await updateBrand(editing.id, f); else await createBrand(f); onSaved(); onClose(); })} disabled={saving || !f.name}>Save</Button>
    </div>
  </Dialog>);
}

function FamDialog({ open, onClose, editing, brands, onSaved }: any) {
  const [f, setF] = useState({ name: "", brandId: brands[0]?.id || "", sortOrder: 0 });
  useEffect(() => { if (editing) setF({ name: editing.name, brandId: editing.brandId, sortOrder: editing.sortOrder }); else setF({ name: "", brandId: brands[0]?.id || "", sortOrder: 0 }); }, [editing, open, brands]);
  const [saving, start] = useTransition();
  return (<Dialog open={open} onClose={onClose} title={editing ? "Edit Family" : "Add Family"}>
    <div className="space-y-3">
      <div><label className="text-xs font-medium">Name *</label><input value={f.name} onChange={e => setF({...f, name: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" /></div>
      <div><label className="text-xs font-medium">Brand *</label><select value={f.brandId} onChange={e => setF({...f, brandId: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm">{brands.map((b: any) => <option key={b.id} value={b.id}>{b.name}</option>)}</select></div>
      <Button onClick={() => start(async () => { if (editing) await updateFamily(editing.id, f); else await createFamily(f); onSaved(); onClose(); })} disabled={saving || !f.name}>Save</Button>
    </div>
  </Dialog>);
}

function ModelDialog({ open, onClose, editing, families, onSaved }: any) {
  const [f, setF] = useState({ name: "", familyId: families[0]?.id || "", releaseYear: "", imageUrl: "", specsJson: "{}", variantsJson: "[]" });
  useEffect(() => { if (editing) setF({ name: editing.name, familyId: editing.familyId, releaseYear: editing.releaseYear?.toString() || "", imageUrl: editing.imageUrl || "", specsJson: JSON.stringify(editing.specs || {}, null, 2), variantsJson: JSON.stringify(editing.variants || [], null, 2) }); else setF({ name: "", familyId: families[0]?.id || "", releaseYear: "", imageUrl: "", specsJson: "{}", variantsJson: "[]" }); }, [editing, open, families]);
  const [saving, start] = useTransition();
  return (<Dialog open={open} onClose={onClose} title={editing ? "Edit Model" : "Add Model"} className="max-w-lg">
    <div className="space-y-3 max-h-[70vh] overflow-y-auto">
      <div><label className="text-xs font-medium">Name *</label><input value={f.name} onChange={e => setF({...f, name: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" /></div>
      <div><label className="text-xs font-medium">Family *</label><select value={f.familyId} onChange={e => setF({...f, familyId: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm">{families.map((x: any) => <option key={x.id} value={x.id}>{x.name} ({x.brand?.name})</option>)}</select></div>
      <div><label className="text-xs font-medium">Release Year</label><input type="number" value={f.releaseYear} onChange={e => setF({...f, releaseYear: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" /></div>
      <div><label className="text-xs font-medium">Image URL</label><input value={f.imageUrl} onChange={e => setF({...f, imageUrl: e.target.value})} className="w-full rounded-md border px-3 py-2 text-sm" />{f.imageUrl && <img src={f.imageUrl} className="mt-2 h-28 rounded-lg object-contain bg-muted p-2" alt="" />}</div>
      <div><label className="text-xs font-medium">Specs (JSON)</label><textarea value={f.specsJson} onChange={e => setF({...f, specsJson: e.target.value})} rows={6} className="w-full rounded-md border px-3 py-2 text-xs font-mono" /></div>
      <div><label className="text-xs font-medium">Variants (JSON)</label><textarea value={f.variantsJson} onChange={e => setF({...f, variantsJson: e.target.value})} rows={4} className="w-full rounded-md border px-3 py-2 text-xs font-mono" /></div>
      <Button onClick={() => { let specs={}, variants=[]; try{specs=JSON.parse(f.specsJson)}catch{} try{variants=JSON.parse(f.variantsJson)}catch{} start(async () => { if (editing) await updateModel(editing.id, {name:f.name,familyId:f.familyId,releaseYear:f.releaseYear?Number(f.releaseYear):null,imageUrl:f.imageUrl||null,specs,variants}); else await createModel({name:f.name,familyId:f.familyId,releaseYear:f.releaseYear?Number(f.releaseYear):null,imageUrl:f.imageUrl||null,specs,variants}); onSaved(); onClose(); }); }} disabled={saving||!f.name||!f.familyId}>Save</Button>
    </div>
  </Dialog>);
}
