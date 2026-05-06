"use client";

import { useTransition } from "react";
import { Archive } from "lucide-react";
import { archiveCustomer } from "../actions/customer.actions";
import { useAppI18n } from "@/lib/i18n/ui";

interface Props {
  customerId: string;
}

export function ArchiveCustomerButton({ customerId }: Props) {
  const { t } = useAppI18n();
  const [isPending, startTransition] = useTransition();

  function handleArchive() {
    startTransition(async () => {
      await archiveCustomer(customerId);
    });
  }

  return (
    <button
      type="button"
      onClick={handleArchive}
      disabled={isPending}
      className="flex items-center gap-1.5 rounded-md border border-destructive/40 px-3 py-1.5 text-sm font-medium text-destructive hover:bg-destructive/10 disabled:opacity-50 transition-colors"
    >
      <Archive className="h-3.5 w-3.5" />
      {isPending ? t("common.archiving") : t("common.archive")}
    </button>
  );
}
