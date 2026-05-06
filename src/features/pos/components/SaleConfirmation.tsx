"use client";

import { CheckCircle2, ArrowLeft } from "lucide-react";
import type { SaleConfirmation } from "../actions/pos-sale.actions";
import { useTranslations } from "next-intl";

interface SaleConfirmationViewProps {
  sale: SaleConfirmation;
  onNewSale: () => void;
}

export function SaleConfirmationView({ sale, onNewSale }: SaleConfirmationViewProps) {
  const t = useTranslations("pos");
  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-900 p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-1">
          {t("saleDone")}
        </h2>
        <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-6">
          {sale.saleNumber}
        </p>

        <div className="rounded-lg bg-white dark:bg-card border border-emerald-200 dark:border-emerald-800 p-4 text-left space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("items")}</span>
            <span className="font-medium">{sale.lineCount}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{t("total")}</span>
            <span className="font-bold text-lg">{sale.totalAmount.toFixed(2)} DZD</span>
          </div>
          <div className="border-t border-border pt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t("cashReceived")}</span>
              <span className="font-medium">{sale.cashReceived.toFixed(2)} DZD</span>
            </div>
            {sale.debtAmount > 0 ? (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("remainingDebt")}</span>
                <span className="font-bold text-amber-600">{sale.debtAmount.toFixed(2)} DZD</span>
              </div>
            ) : (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("changeDue")}</span>
                <span className="font-bold text-primary">{sale.changeAmount.toFixed(2)} DZD</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`/dashboard/pos/sales/${sale.saleId}/receipt`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-muted transition-colors"
          >
            {t("printReceipt")}
          </a>
          
          <button
            onClick={onNewSale}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("newSale")}
          </button>
        </div>
      </div>
    </div>
  );
}
