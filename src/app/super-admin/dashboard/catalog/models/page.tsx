"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, Image } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { listAllModels, listAllFamilies, createModel, updateModel, deleteModel } from "@/features/super-admin/actions/catalog.actions";

export default function ModelsPage() {
  const router = useRouter();
  const [models, setModels] = useState<any[]>([]);
  const [families, setFamilies] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ name: "", familyId: "", releaseYear: "", imageUrl: "", specsJson: "{}", variantsJson: "[]" });
  const [isPending, startTransition] = useTransition();
  const [familyFilter, setFamilyFilter] = useState("");

  useEffect(() => { listAllModels().then(setModels); listAllFamilies().then(setFamilies); }, []);
  function refresh() { listAllModels().then(setModels); router.refresh(); }
  function openCreate() { setEditing(null); setForm({ name: "", familyId: families[0]?.id || "", releaseYear: "", imageUrl: "", specsJson: "{}", variantsJson: "[]" }); setShowForm(true); }
  function openEdit(m: any) {
    setEditing(m);
    setForm({
      name: m.name, familyId: m.familyId, releaseYear: m.releaseYear?.toString() || "",
      imageUrl: m.imageUrl || "", specsJson: JSON.stringify(m.specs || {}, null, 2), variantsJson: JSON.stringify(m.variants || [], null, 2)
    });
    setShowForm(true);
  }

  function save() {
    let specs = {}, variants = [];
    try { specs = JSON.parse(form.specsJson); } catch {}
    try { variants = JSON.parse(form.variantsJson); } catch {}
    startTransition(async () => {
      const data = { name: form.name, familyId: form.familyId, releaseYear: form.releaseYear ? Number(form.releaseYear) : null, imageUrl: form.imageUrl || null, specs, variants };
      if (editing) await updateModel(editing.id, data);
      else await createModel(data);
      setShowForm(false); refresh();
    });
  }

  const filtered = familyFilter ? models.filter(m => m.familyId === familyFilter) : models;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div><h1 className="text-xl font-bold">Device Models</h1><p className="text-sm text-muted-foreground">{filtered.length} models</p></div>
        <div className="flex gap-2">
          <select value={familyFilter} onChange={e => setFamilyFilter(e.target.value)} className="rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="">All families</option>
            {families.map((f: any) => <option key={f.id} value={f.id}>{f.name}</option>)}
          </select>
          <Button size="sm" onClick={openCreate}><Plus className="h-4 w-4" /> Add Model</Button>
        </div>
      </div>

      <Dialog open={showForm} onClose={() => setShowForm(false)} title={editing ? "Edit Model" : "Add Model"}>
        <div className="space-y-3 max-h-[70vh] overflow-y-auto">
          <div><label className="text-xs font-medium">Name *</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs font-medium">Family *</label><select value={form.familyId} onChange={e => setForm({...form, familyId: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{families.map((f: any) => <option key={f.id} value={f.id}>{f.name} ({f.brand?.name})</option>)}</select></div>
          <div><label className="text-xs font-medium">Release Year</label><input type="number" value={form.releaseYear} onChange={e => setForm({...form, releaseYear: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
          <div>
            <label className="text-xs font-medium">Image URL</label>
            <input value={form.imageUrl} onChange={e => setForm({...form, imageUrl: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            {form.imageUrl && <img src={form.imageUrl} className="mt-2 h-32 rounded-lg object-contain bg-muted p-2" alt="preview" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />}
          </div>
          <div>
            <label className="text-xs font-medium">Specs (JSON)</label>
            <textarea value={form.specsJson} onChange={e => setForm({...form, specsJson: e.target.value})} rows={6} className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-mono" />
          </div>
          <div>
            <label className="text-xs font-medium">Variants (JSON array)</label>
            <textarea value={form.variantsJson} onChange={e => setForm({...form, variantsJson: e.target.value})} rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs font-mono" />
          </div>
          <Button onClick={save} disabled={isPending || !form.name || !form.familyId}>Save</Button>
        </div>
      </Dialog>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filtered.map((m) => (
          <div key={m.id} className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
            <div className="h-32 bg-muted flex items-center justify-center">
              {m.imageUrl ? <img src={m.imageUrl} className="h-full w-full object-contain p-2" alt="" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} /> : <Image className="h-8 w-8 text-muted-foreground/30" />}
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold truncate">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.family?.name} · {m.family?.brand?.name}</p>
              <div className="flex gap-2 mt-2">
                <button onClick={() => openEdit(m)} className="text-xs text-primary hover:underline"><Pencil className="h-3 w-3 inline" /> Edit</button>
                <button onClick={() => startTransition(async () => { await deleteModel(m.id); refresh(); })} className="text-xs text-red-500 hover:underline"><Trash2 className="h-3 w-3 inline" /> Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
