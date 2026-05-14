"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { listAllCategories, createCategory, updateCategory, deleteCategory } from "@/features/super-admin/actions/catalog.actions";

export default function CategoriesPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ key: "", nameFr: "", nameAr: "", nameEn: "", sortOrder: 0 });
  const [isPending, startTransition] = useTransition();

  useEffect(() => { listAllCategories().then(setCategories); }, []);

  function refresh() { startTransition(() => { listAllCategories().then(setCategories); router.refresh(); }); }
  function openCreate() { setEditing(null); setForm({ key: "", nameFr: "", nameAr: "", nameEn: "", sortOrder: 0 }); setShowForm(true); }
  function openEdit(c: any) { setEditing(c); setForm({ key: c.key, nameFr: c.nameFr, nameAr: c.nameAr || "", nameEn: c.nameEn || "", sortOrder: c.sortOrder }); setShowForm(true); }
  function save() {
    startTransition(async () => {
      if (editing) await updateCategory(editing.id, form);
      else await createCategory(form);
      setShowForm(false); refresh();
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div><h1 className="text-xl font-bold">Categories</h1><p className="text-sm text-muted-foreground">Device categories for the catalog</p></div>
        <Button size="sm" onClick={openCreate}><Plus className="h-4 w-4" /> Add Category</Button>
      </div>
      <Dialog open={showForm} onClose={() => setShowForm(false)} title={editing ? "Edit Category" : "Add Category"}>
        <div className="space-y-3">
          <div><label className="text-xs font-medium">Key *</label><input value={form.key} onChange={e => setForm({...form, key: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs font-medium">French *</label><input value={form.nameFr} onChange={e => setForm({...form, nameFr: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs font-medium">Arabic</label><input value={form.nameAr} onChange={e => setForm({...form, nameAr: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs font-medium">English</label><input value={form.nameEn} onChange={e => setForm({...form, nameEn: e.target.value})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
          <div><label className="text-xs font-medium">Sort Order</label><input type="number" value={form.sortOrder} onChange={e => setForm({...form, sortOrder: Number(e.target.value)})} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
          <Button onClick={save} disabled={isPending || !form.key || !form.nameFr}>Save</Button>
        </div>
      </Dialog>
      <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
        <table className="w-full text-sm"><thead><tr className="border-b border-border bg-muted/50"><th className="px-4 py-3 text-start">Key</th><th className="px-4 py-3 text-start">FR</th><th className="px-4 py-3 text-start">AR</th><th className="px-4 py-3 text-start">EN</th><th className="px-4 py-3 text-center">Sort</th><th className="px-4 py-3 text-center">Active</th><th className="px-4 py-3 text-end">Actions</th></tr></thead>
          <tbody className="divide-y divide-border">
            {categories.map((c) => (
              <tr key={c.id} className="hover:bg-muted/30">
                <td className="px-4 py-3 font-mono text-xs">{c.key}</td>
                <td className="px-4 py-3">{c.nameFr}</td>
                <td className="px-4 py-3 text-muted-foreground">{c.nameAr || "—"}</td>
                <td className="px-4 py-3 text-muted-foreground">{c.nameEn || "—"}</td>
                <td className="px-4 py-3 text-center">{c.sortOrder}</td>
                <td className="px-4 py-3 text-center">{c.isActive ? <span className="text-xs text-green-600">Active</span> : <span className="text-xs text-red-500">Inactive</span>}</td>
                <td className="px-4 py-3 text-end">
                  <button onClick={() => openEdit(c)} className="text-xs text-primary hover:underline mr-2">Edit</button>
                  <button onClick={() => startTransition(async () => { await deleteCategory(c.id); refresh(); })} className="text-xs text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
