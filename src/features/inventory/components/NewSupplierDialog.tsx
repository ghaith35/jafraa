"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { SupplierForm } from "./SupplierForm";
import { useAppI18n } from "@/lib/i18n/ui";

export function NewSupplierDialog() {
  const { t } = useAppI18n();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex h-9 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #6366f1, #4f46e5)",
          boxShadow: "0 0 0 1px rgba(99,102,241,0.3), 0 2px 8px rgba(99,102,241,0.2)",
        }}
      >
        <Plus className="h-4 w-4" />
        {t("suppliers.new")}
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} title={t("suppliers.new")}>
        <SupplierForm onSaved={() => setOpen(false)} />
      </Dialog>
    </>
  );
}
