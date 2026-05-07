"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { FilePlus2, Loader2, Send, CheckCircle2, XCircle, PackageCheck } from "lucide-react";
import { createPurchaseOrderFromLowStock, updatePurchaseOrderStatus } from "../actions/purchase-order.actions";
import { useAppI18n } from "@/lib/i18n/ui";

export function GenerateLowStockPurchaseOrderButton() {
  const router = useRouter();
  const { t } = useAppI18n();
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        startTransition(async () => {
          const result = await createPurchaseOrderFromLowStock();
          if ("error" in result) alert(result.error);
          else router.push(`/dashboard/inventory/purchase-orders/${result.id}`);
        });
      }}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-60"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <FilePlus2 className="h-4 w-4" />}
      {t("purchaseOrder.generateLowStock")}
    </button>
  );
}

export function PurchaseOrderStatusButton({ orderId, status }: { orderId: string; status: "draft" | "sent" | "confirmed" | "received" | "cancelled" }) {
  const router = useRouter();
  const { t } = useAppI18n();
  const [pending, startTransition] = useTransition();
  const icon = status === "sent" ? <Send className="h-4 w-4" /> : status === "confirmed" ? <CheckCircle2 className="h-4 w-4" /> : status === "received" ? <PackageCheck className="h-4 w-4" /> : <XCircle className="h-4 w-4" />;
  const label = status === "sent"
    ? t("purchaseOrder.markSent")
    : status === "confirmed"
    ? t("purchaseOrder.markConfirmed")
    : status === "received"
    ? t("purchaseOrder.markReceived")
    : t("purchaseOrder.markCancelled");

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        startTransition(async () => {
          const result = await updatePurchaseOrderStatus(orderId, status);
          if ("error" in result) alert(result.error);
          router.refresh();
        });
      }}
      className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-xs font-bold hover:bg-muted disabled:opacity-60"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
      {label}
    </button>
  );
}
