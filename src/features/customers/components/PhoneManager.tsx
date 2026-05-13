"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, X, Loader2, Star, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { addPhone, removePhone } from "../actions/customer.actions";

interface Phone {
  id: string;
  phoneNumber: string;
  isPrimary: boolean;
}

interface Props {
  customerId: string;
  initialPhones: Phone[];
  canManage?: boolean;
}

export function PhoneManager({ customerId, initialPhones, canManage = false }: Props) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [phones, setPhones] = useState(initialPhones);
  const [newPhone, setNewPhone] = useState("");
  const [adding, setAdding] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  async function handleAdd() {
    const cleaned = newPhone.replace(/[\s\-\(\)\.]/g, "");
    if (cleaned.length !== 10 || !/^[0-9]{10}$/.test(cleaned)) return;
    setAdding(true);
    const result = await addPhone(customerId, cleaned, phones.length === 0);
    setAdding(false);
    if (result && "error" in result) { alert(result.error); return; }
    setPhones((prev) => [...prev, { id: "new", phoneNumber: cleaned, isPrimary: prev.length === 0 }]);
    setNewPhone("");
    setShowAdd(false);
    router.refresh();
  }

  async function handleRemove(phoneId: string) {
    const result = await removePhone(phoneId, customerId);
    if (result && "error" in result) { alert(result.error); return; }
    setPhones((prev) => prev.filter((p) => p.id !== phoneId));
    router.refresh();
  }

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-[var(--text-tertiary)]" />
          <h2 className="text-sm font-semibold text-[var(--text-primary)]">
            {t("common.phone")}s ({phones.length})
          </h2>
        </div>
        {canManage && !showAdd && (
          <button
            onClick={() => setShowAdd(true)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            <Plus className="h-3 w-3" />
            {t("customers.asset.add")}
          </button>
        )}
      </div>

      {phones.length === 0 && !showAdd ? (
        <p className="text-sm text-[var(--text-tertiary)] italic">{t("customers.noPhone")}</p>
      ) : (
        <ul className="space-y-2">
          {phones.map((p) => (
            <li key={p.id} className="flex items-center justify-between gap-2">
              <span className="text-sm font-mono text-[var(--text-primary)]">{p.phoneNumber}</span>
              <div className="flex items-center gap-1 shrink-0">
                {p.isPrimary && (
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" title={t("customers.primary")} />
                )}
                {canManage && !p.isPrimary && (
                  <button
                    onClick={() => handleRemove(p.id)}
                    className="p-1 text-muted-foreground hover:text-destructive rounded transition-colors"
                    title="Supprimer"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      {showAdd && (
        <div className="mt-3 flex gap-2 items-center rounded-md border border-input bg-background p-2">
          <input
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); if (e.key === "Escape") { setShowAdd(false); setNewPhone(""); } }}
            placeholder="0555123456"
            className="flex-1 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground/60 font-mono"
            autoFocus
            disabled={adding}
            maxLength={10}
          />
          <button
            onClick={handleAdd}
            disabled={adding || newPhone.length !== 10}
            className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-50 transition-all"
          >
            {adding && <Loader2 className="h-3 w-3 animate-spin" />}
            {t("customers.asset.addButton")}
          </button>
          <button
            onClick={() => { setShowAdd(false); setNewPhone(""); }}
            className="text-xs text-muted-foreground hover:text-foreground px-1.5 py-1"
          >
            {t("common.cancel")}
          </button>
        </div>
      )}
    </div>
  );
}


