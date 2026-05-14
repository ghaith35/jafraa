"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Building2, Store, Users, CreditCard, Pencil, Archive, RotateCcw } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { archiveCompany, restoreCompany, updateCompany } from "../actions/companies.actions";
import { createStore, updateStore, archiveStore } from "../actions/stores.actions";
import { createUser, updateUser, archiveUser } from "../actions/users.actions";

type Company = NonNullable<Awaited<ReturnType<typeof import("../actions/companies.actions").getCompany>>>;

const roleColors: Record<string, string> = {
  Admin: "bg-purple-100 text-purple-700", Manager: "bg-blue-100 text-blue-700",
  Cashier: "bg-amber-100 text-amber-700", Technician: "bg-gray-100 text-gray-700",
};

export function CompanyDetail({ company }: { company: Company }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showEditCompany, setShowEditCompany] = useState(false);
  const [showAddStore, setShowAddStore] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState<any>(null);

  const sub = company.subscriptions?.[0];

  function refresh() { startTransition(() => router.refresh()); }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            {company.name}
            {company.isArchived && <span className="text-xs font-medium text-muted-foreground border rounded-full px-2 py-0.5">Archived</span>}
          </h1>
          <p className="text-sm text-muted-foreground">{company.address} {company.phone && `· ${company.phone}`}</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setShowEditCompany(true)}><Pencil className="h-3.5 w-3.5" /> Edit</Button>
          {company.isArchived ? (
            <Button size="sm" variant="outline" onClick={() => startTransition(async () => { await restoreCompany(company.id); refresh(); })}><RotateCcw className="h-3.5 w-3.5" /> Restore</Button>
          ) : (
            <Button size="sm" variant="destructive" onClick={() => startTransition(async () => { await archiveCompany(company.id); refresh(); })}><Archive className="h-3.5 w-3.5" /> Archive</Button>
          )}
        </div>
      </div>

      {/* Edit Company Dialog */}
      <EditCompanyDialog open={showEditCompany} onClose={() => setShowEditCompany(false)} company={company} onSaved={refresh} />

      {/* Subscription */}
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3"><CreditCard className="h-4 w-4 text-muted-foreground" /><h2 className="text-sm font-semibold">Subscription</h2></div>
        {sub ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div><p className="text-muted-foreground">Plan</p><p className="font-semibold">{sub.planCode}</p></div>
            <div><p className="text-muted-foreground">Status</p><span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${sub.status === "active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{sub.status}</span></div>
            <div><p className="text-muted-foreground">Payment</p><p className="font-semibold">{sub.paymentModel}</p></div>
            <div><p className="text-muted-foreground">Started</p><p className="font-semibold">{new Date(sub.createdAt).toISOString().split("T")[0]}</p></div>
          </div>
        ) : <p className="text-sm text-muted-foreground">No subscription</p>}
      </div>

      {/* Stores */}
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2"><Store className="h-4 w-4 text-muted-foreground" /><h2 className="text-sm font-semibold">Stores ({company.stores.length})</h2></div>
          <Button size="sm" variant="outline" onClick={() => setShowAddStore(true)}>+ Add Store</Button>
        </div>
        <AddStoreDialog open={showAddStore} onClose={() => setShowAddStore(false)} companyId={company.id} onSaved={refresh} />
        <table className="w-full text-sm"><thead><tr className="border-b border-border bg-muted/30"><th className="px-3 py-2 text-start text-muted-foreground">Name</th><th className="px-3 py-2 text-start text-muted-foreground">Address</th><th className="px-3 py-2 text-start text-muted-foreground">Phone</th><th className="px-3 py-2 text-end text-muted-foreground">Actions</th></tr></thead>
          <tbody className="divide-y divide-border">
            {company.stores.map((s) => (
              <tr key={s.id} className="hover:bg-muted/20">
                <td className="px-3 py-2 font-medium">{s.name}</td>
                <td className="px-3 py-2 text-muted-foreground">{s.address || "—"}</td>
                <td className="px-3 py-2 text-muted-foreground">{s.phone || "—"}</td>
                <td className="px-3 py-2 text-end">
                  <button onClick={() => startTransition(async () => { await archiveStore(s.id); refresh(); })} className="text-xs text-red-500 hover:underline">Archive</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Users */}
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2"><Users className="h-4 w-4 text-muted-foreground" /><h2 className="text-sm font-semibold">Users ({company.users.length})</h2></div>
          <Button size="sm" variant="outline" onClick={() => setShowAddUser(true)}>+ Add User</Button>
        </div>
        <AddUserDialog open={showAddUser} onClose={() => setShowAddUser(false)} companyId={company.id} onSaved={refresh} />
        <EditUserDialog open={!!showEditUser} onClose={() => setShowEditUser(null)} user={showEditUser} onSaved={refresh} />
        <table className="w-full text-sm"><thead><tr className="border-b border-border bg-muted/30"><th className="px-3 py-2 text-start text-muted-foreground">Name</th><th className="px-3 py-2 text-start text-muted-foreground">Email</th><th className="px-3 py-2 text-start text-muted-foreground">Role</th><th className="px-3 py-2 text-start text-muted-foreground">Lang</th><th className="px-3 py-2 text-end text-muted-foreground">Actions</th></tr></thead>
          <tbody className="divide-y divide-border">
            {company.users.map((u) => (
              <tr key={u.id} className="hover:bg-muted/20">
                <td className="px-3 py-2 font-medium">{u.name}{u.isArchived && <span className="text-xs text-muted-foreground ml-1">(archived)</span>}</td>
                <td className="px-3 py-2 text-muted-foreground">{u.email}</td>
                <td className="px-3 py-2"><span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${roleColors[u.role] || ""}`}>{u.role}</span></td>
                <td className="px-3 py-2 text-muted-foreground">{u.languagePreference.toUpperCase()}</td>
                <td className="px-3 py-2 text-end">
                  <button onClick={() => setShowEditUser(u)} className="text-xs text-primary hover:underline mr-2">Edit</button>
                  <button onClick={() => startTransition(async () => { await archiveUser(u.id); refresh(); })} className="text-xs text-red-500 hover:underline">Archive</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Dialogs ────────────────────────────────────────────────────────────────

function EditCompanyDialog({ open, onClose, company, onSaved }: { open: boolean; onClose: () => void; company: Company; onSaved: () => void }) {
  const [name, setName] = useState(company.name);
  const [address, setAddress] = useState(company.address || "");
  const [phone, setPhone] = useState(company.phone || "");
  const [email, setEmail] = useState(company.email || "");
  const [saving, startTransition] = useTransition();

  function save() {
    startTransition(async () => { await updateCompany(company.id, { name, address, phone, email }); onSaved(); onClose(); });
  }

  return (
    <Dialog open={open} onClose={onClose} title="Edit Company">
      <div className="space-y-3">
        <div><label className="text-xs font-medium">Name *</label><input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Email</label><input value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Phone</label><input value={phone} onChange={e => setPhone(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Address</label><input value={address} onChange={e => setAddress(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <Button onClick={save} disabled={saving || !name}>Save</Button>
      </div>
    </Dialog>
  );
}

function AddStoreDialog({ open, onClose, companyId, onSaved }: { open: boolean; onClose: () => void; companyId: string; onSaved: () => void }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, startTransition] = useTransition();
  function save() { startTransition(async () => { await createStore(companyId, { name, address, phone }); onSaved(); onClose(); setName(""); });
  }
  return (
    <Dialog open={open} onClose={onClose} title="Add Store">
      <div className="space-y-3">
        <div><label className="text-xs font-medium">Name *</label><input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Address</label><input value={address} onChange={e => setAddress(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Phone</label><input value={phone} onChange={e => setPhone(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <Button onClick={save} disabled={saving || !name}>Create Store</Button>
      </div>
    </Dialog>
  );
}

function AddUserDialog({ open, onClose, companyId, onSaved }: { open: boolean; onClose: () => void; companyId: string; onSaved: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [lang, setLang] = useState("fr");
  const [saving, startTransition] = useTransition();
  function save() { startTransition(async () => { await createUser(companyId, { name, email, password, role: role as any, languagePreference: lang as any }); onSaved(); onClose(); setName(""); setEmail(""); setPassword(""); });
  }
  return (
    <Dialog open={open} onClose={onClose} title="Add User">
      <div className="space-y-3">
        <div><label className="text-xs font-medium">Name *</label><input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Email *</label><input value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Password *</label><input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Role</label><select value={role} onChange={e => setRole(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"><option>Admin</option><option>Manager</option><option>Cashier</option><option>Technician</option></select></div>
        <div><label className="text-xs font-medium">Language</label><select value={lang} onChange={e => setLang(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"><option value="fr">French</option><option value="ar">Arabic</option><option value="en">English</option></select></div>
        <Button onClick={save} disabled={saving || !name || !email || !password}>Create User</Button>
      </div>
    </Dialog>
  );
}

function EditUserDialog({ open, onClose, user, onSaved }: { open: boolean; onClose: () => void; user: any; onSaved: () => void }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "Admin");
  const [lang, setLang] = useState(user?.languagePreference || "fr");
  const [saving, startTransition] = useTransition();
  if (!user) return null;
  function save() { startTransition(async () => { await updateUser(user.id, { name, email, role, languagePreference: lang as any }); onSaved(); onClose(); }); }
  return (
    <Dialog open={open} onClose={onClose} title="Edit User">
      <div className="space-y-3">
        <div><label className="text-xs font-medium">Name *</label><input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Email *</label><input value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" /></div>
        <div><label className="text-xs font-medium">Role</label><select value={role} onChange={e => setRole(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"><option>Admin</option><option>Manager</option><option>Cashier</option><option>Technician</option></select></div>
        <div><label className="text-xs font-medium">Language</label><select value={lang} onChange={e => setLang(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"><option value="fr">French</option><option value="ar">Arabic</option><option value="en">English</option></select></div>
        <Button onClick={save} disabled={saving || !name || !email}>Save</Button>
      </div>
    </Dialog>
  );
}
