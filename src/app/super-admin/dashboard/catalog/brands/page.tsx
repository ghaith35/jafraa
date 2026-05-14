"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { listAllBrands, createBrand, updateBrand, deleteBrand, listAllCategories } from "@/features/super-admin/actions/catalog.actions";

export default function BrandsPage() {
  const router = useRouter();
  const [brands, setBrands] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ name: "", categoryId: "", logoUrl: "", sortOrder: 0 });
  const [isPending, startTransition] = useTransition();

  useEffect(() => { listAllBrands().then(setBrands); listAllCategories().then(setCategories); }, []);
  function refresh() { listAllBrands().then(setBrands); router.refresh(); }
  function openCreate() { setEditing(null); setForm({ name: "", categoryId: categories[0]?.id || "", logoUrl: "", sortOrder: 0 }); setShowForm(true); }
  function openEdit(b: any) { setEditing(b); setForm({ name: b.name, categoryId: b.categoryId, logoUrl: b.logoUrl || "", sortOrder: b.sortOrder }); setShowForm(true); }

  function save() {
    startTransition(async () => {
      if (editing) await updateBrand(editing.id, form);
      else await createBrand(form);
      setShowForm(false); refresh();
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div><h1 className="text-xl font-bold">Brands</h1><p className="text-sm text-muted-foreground">{brands.length} brands</p></div>
        <Button size="sm" onClick={openCreate}><Plus className="h-4 w-4" /> Add Brand</Button>
      </div>
      <Dialog open={showForm} onClose={() => setShowForm(false)} title={editing ? "Edit Brand" : "Add Brand"}>
        <div className="space-y-3">
          <div><label className="text-xs font-medium">Name *</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs font-medium">Category *</label><select value={form.categoryId} onChange={e => setForm({...form, categoryId: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{categories.map((c: any) => <option key={c.id} value={c.id}>{c.nameFr}</option>)}</select></div>
          <div><label className="text-xs font-medium">Logo URL</label><input value={form.logoUrl} onChange={e => setForm({...form, logoUrl: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            {form.logoUrl && <img src={form.logoUrl} className="mt-2 h-12 rounded" alt="preview" />}
          </div>
          <Button onClick={save} disabled={isPending || !form.name || !form.categoryId}>Save</Button>
        </div>
      </Dialog>
      <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
        <table className="w-full text-sm"><thead><tr className="border-b border-border bg-muted/50"><th className="px-4 py-3 text-start">Logo</th><th className="px-4 py-3 text-start">Name</th><th className="px-4 py-3 text-start">Category</th><th className="px-4 py-3 text-center">Families</th><th className="px-4 py-3 text-end">Actions</th></tr></thead>
          <tbody className="divide-y divide-border">
            {brands.map((b) => (
              <tr key={b.id} className="hover:bg-muted/30">
                <td className="px-4 py-3">{b.logoUrl ? <img src={b.logoUrl} className="h-6 rounded" alt="" /> : <span className="text-xs text-muted-foreground">—</span>}</td>
                <td className="px-4 py-3 font-medium">{b.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{b.category?.nameFr || "—"}</td>
                <td className="px-4 py-3 text-center">{b._count?.modelFamilies || 0}</td>
                <td className="px-4 py-3 text-end">
                  <button onClick={() => openEdit(b)} className="text-xs text-primary hover:underline mr-2">Edit</button>
                  <button onClick={() => startTransition(async () => { await deleteBrand(b.id); refresh(); })} className="text-xs text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
