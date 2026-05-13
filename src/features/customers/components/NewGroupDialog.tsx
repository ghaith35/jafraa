"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { GroupForm } from "./GroupForm";
import { useAppI18n } from "@/lib/i18n/ui";

export function NewGroupDialog() {
  const { t } = useAppI18n();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 self-start rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--primary)] transition-all duration-200 shadow-[var(--shadow-xs)]"
      >
        <Plus className="h-4 w-4" />
        {t("customers.newGroup")}
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={t("customers.newGroup")}
      >
        <GroupForm onSaved={() => setOpen(false)} />
      </Dialog>
    </>
  );
}
