"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { listAllFamilies, createFamily, updateFamily, deleteFamily, listAllBrands } from "@/features/super-admin/actions/catalog.actions";

export default function FamiliesPage() {
  const router = useRouter();
  const [families, setFamilies] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ name: "", brandId: "", sortOrder: 0 });
  const [isPending, startTransition] = useTransition();

  useEffect(() => { listAllFamilies().then(setFamilies); listAllBrands().then(setBrands); }, []);
  function refresh() { listAllFamilies().then(setFamilies); router.refresh(); }
  function openCreate() { setEditing(null); setForm({ name: "", brandId: brands[0]?.id || "", sortOrder: 0 }); setShowForm(true); }
  function openEdit(f: any) { setEditing(f); setForm({ name: f.name, brandId: f.brandId, sortOrder: f.sortOrder }); setShowForm(true); }
  function save() { startTransition(async () => { if (editing) await updateFamily(editing.id, form); else await createFamily(form); setShowForm(false); refresh(); }); }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div><h1 className="text-xl font-bold">Model Families</h1><p className="text-sm text-muted-foreground">{families.length} families</p></div>
        <Button size="sm" onClick={openCreate}><Plus className="h-4 w-4" /> Add Family</Button>
      </div>
      <Dialog open={showForm} onClose={() => setShowForm(false)} title={editing ? "Edit Family" : "Add Family"}>
        <div className="space-y-3">
          <div><label className="text-xs font-medium">Name *</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs font-medium">Brand *</label><select value={form.brandId} onChange={e => setForm({...form, brandId: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{brands.map((b: any) => <option key={b.id} value={b.id}>{b.name}</option>)}</select></div>
          <Button onClick={save} disabled={isPending || !form.name || !form.brandId}>Save</Button>
        </div>
      </Dialog>
      <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
        <table className="w-full text-sm"><thead><tr className="border-b border-border bg-muted/50"><th className="px-4 py-3 text-start">Name</th><th className="px-4 py-3 text-start">Brand</th><th className="px-4 py-3 text-center">Models</th><th className="px-4 py-3 text-end">Actions</th></tr></thead>
          <tbody className="divide-y divide-border">
            {families.map((f) => (
              <tr key={f.id} className="hover:bg-muted/30">
                <td className="px-4 py-3 font-medium">{f.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{f.brand?.name || "—"}</td>
                <td className="px-4 py-3 text-center">{f._count?.deviceModels || 0}</td>
                <td className="px-4 py-3 text-end">
                  <button onClick={() => openEdit(f)} className="text-xs text-primary hover:underline mr-2">Edit</button>
                  <button onClick={() => startTransition(async () => { await deleteFamily(f.id); refresh(); })} className="text-xs text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
