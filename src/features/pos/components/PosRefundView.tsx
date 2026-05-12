"use client";

import { useState, useTransition } from "react";
import { 
  Search, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  Loader2, 
  ChevronLeft,
  Receipt,
  Printer
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  getPosSaleForRefund, 
  createPosRefund, 
  type RefundableSale, 
  type RefundConfirmation 
} from "../actions/refund.actions";
import { useTranslations } from "next-intl";

interface PosRefundViewProps {
  hasOpenSession: boolean;
}

export function PosRefundView({ hasOpenSession }: PosRefundViewProps) {
  const t = useTranslations("pos");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, startSearching] = useTransition();
  const [sale, setSale] = useState<RefundableSale | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<RefundConfirmation | null>(null);

  const [refundLines, setRefundLines] = useState<Record<string, number>>({});
  const [reason, setReason] = useState("");
  const [isRefunding, startRefunding] = useTransition();

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;

    setError(null);
    setConfirmation(null);
    startSearching(async () => {
      const result = await getPosSaleForRefund(searchQuery);
      if ("error" in result) {
        setError(result.error);
        setSale(null);
      } else {
        setSale(result);
        // Reset refund selections
        setRefundLines({});
        setReason("");
      }
    });
  };

  const handleLineQtyChange = (lineId: string, qty: number, max: number) => {
    const val = Math.min(max, Math.max(0, qty));
    setRefundLines(prev => ({
      ...prev,
      [lineId]: val
    }));
  };

  const calculateTotalRefund = () => {
    if (!sale) return 0;
    return Object.entries(refundLines).reduce((sum, [id, qty]) => {
      const line = sale.lines.find(l => l.id === id);
      return sum + (line ? line.unitPrice * qty : 0);
    }, 0);
  };

  const handleSubmitRefund = () => {
    if (!sale) return;
    const lines = Object.entries(refundLines)
      .filter(([, qty]) => qty > 0)
      .map(([lineId, quantity]) => ({ lineId, quantity }));

    if (lines.length === 0) {
      setError(t("refundSelectItemError"));
      return;
    }

    if (!reason.trim()) {
      setError(t("refundReasonRequired"));
      return;
    }

    setError(null);
    startRefunding(async () => {
      const result = await createPosRefund(sale.id, lines, reason);
      if ("error" in result) {
        setError(result.error);
      } else {
        setConfirmation(result);
        setSale(null);
        setSearchQuery("");
      }
    });
  };

  if (!hasOpenSession) {
    return (
      <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center">
        <AlertTriangle className="mx-auto h-8 w-8 text-destructive mb-2" />
        <h3 className="text-lg font-bold">{t("closedTitle")}</h3>
        <p className="text-muted-foreground">
          {t("closedDescription")}
        </p>
      </div>
    );
  }

  if (confirmation) {
    return (
      <div className="max-w-md mx-auto space-y-6 animate-in fade-in zoom-in duration-300">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800 p-8 text-center shadow-sm">
          <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300">{t("refundValidated")}</h2>
          <p className="text-emerald-700 dark:text-emerald-400 mt-2 font-medium">
            {t("refundCashMessage", { amount: confirmation.totalRefunded.toFixed(2) })}
          </p>
          <div className="mt-6 pt-6 border-t border-emerald-200 dark:border-emerald-800 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-500 font-bold">{t("receiptNumber")}</span>
            <span className="text-lg font-mono font-bold text-emerald-900 dark:text-emerald-300">{confirmation.refundNumber}</span>
          </div>
          <div className="mt-6">
            <a
              href={`/dashboard/refunds/${confirmation.refundId}/receipt`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              <Printer className="h-4 w-4" />
              {t("printRefundReceipt")}
            </a>
          </div>
        </div>
        <button
          onClick={() => setConfirmation(null)}
          className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
        >
          {t("anotherRefund")}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Search section */}
      {!sale && (
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            {t("findSale")}
          </h2>
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Receipt className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Ex: DEMO-SALE-2026-000001"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
                className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching || !searchQuery}
              className="h-11 rounded-lg bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center gap-2"
            >
              {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              {t("search")}
            </button>
          </form>
          {error && (
            <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              {error}
            </div>
          )}
        </div>
      )}

      {/* Sale details & Refund Form */}
      {sale && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setSale(null)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              {t("backToSearch")}
            </button>
            <div className="text-right">
              <span className="text-xs text-muted-foreground uppercase tracking-tighter font-bold">{t("sale")}</span>
              <h3 className="text-lg font-black">{sale.saleNumber}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: Lines selection */}
            <div className="md:col-span-2 space-y-4">
              <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 border-b border-border">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold">{t("item")}</th>
                      <th className="px-4 py-3 text-center font-bold">{t("qty")}</th>
                      <th className="px-4 py-3 text-right font-bold">{t("unitPriceShort")}</th>
                      <th className="px-4 py-3 text-center font-bold">{t("refund")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {sale.lines.map((line) => {
                      const maxAvailable = line.quantity - line.alreadyRefundedQty;
                      return (
                        <tr key={line.id} className={cn(maxAvailable <= 0 ? "opacity-50 bg-muted/20" : "")}>
                          <td className="px-4 py-4">
                            <p className="font-semibold">{line.description}</p>
                            <p className="text-xs text-muted-foreground">
                              {line.lineType === "product" ? t("product") : line.lineType === "part" ? t("part") : t("service")}
                            </p>
                          </td>
                          <td className="px-4 py-4 text-center">
                            {line.quantity}
                            {line.alreadyRefundedQty > 0 && (
                              <p className="text-[12px] text-destructive font-bold">-{line.alreadyRefundedQty} {t("alreadyRefundedShort")}</p>
                            )}
                          </td>
                          <td className="px-4 py-4 text-right font-mono">
                            {line.unitPrice.toFixed(2)}
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center justify-center gap-2">
                              <input
                                type="number"
                                min="0"
                                max={maxAvailable}
                                disabled={maxAvailable <= 0}
                                value={refundLines[line.id] ?? 0}
                                onChange={(e) => handleLineQtyChange(line.id, parseInt(e.target.value) || 0, maxAvailable)}
                                className="w-16 h-8 rounded border border-input bg-background text-center text-sm font-bold focus:ring-1 focus:ring-primary outline-none"
                              />
                              <span className="text-xs text-muted-foreground italic">/ {maxAvailable}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Summary & Action */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-4">
                <h3 className="font-bold border-b border-border pb-2">{t("summary")}</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("totalPaid")}</span>
                    <span className="font-bold">{sale.totalAmount.toFixed(2)} DZD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("cashReceived")}</span>
                    <span className="font-bold">{sale.cashReceivedAmount.toFixed(2)} DZD</span>
                  </div>
                  {sale.debtAmount > 0 && (
                    <div className="flex justify-between text-destructive">
                      <span className="font-medium">{t("debt")}</span>
                      <span className="font-bold">{sale.debtAmount.toFixed(2)} DZD</span>
                    </div>
                  )}
                  {sale.alreadyRefundedCash > 0 && (
                    <div className="flex justify-between text-amber-600">
                      <span className="font-medium">{t("alreadyRefunded")}</span>
                      <span className="font-bold">-{sale.alreadyRefundedCash.toFixed(2)} DZD</span>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-border">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-base font-bold">{t("toRefund")}</span>
                    <span className="text-xl font-black text-primary">{calculateTotalRefund().toFixed(2)} DZD</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t("refundReason")}</label>
                    <textarea
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder={t("refundReasonPlaceholder")}
                      className="w-full h-24 rounded-lg border border-input bg-background p-3 text-sm focus:ring-1 focus:ring-primary outline-none resize-none"
                    />
                  </div>

                  {error && (
                    <div className="mt-4 rounded-lg bg-destructive/10 p-3 text-xs text-destructive flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <button
                    onClick={handleSubmitRefund}
                    disabled={isRefunding || calculateTotalRefund() <= 0}
                    className="w-full mt-4 h-12 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isRefunding ? <Loader2 className="h-5 w-5 animate-spin" /> : <RotateCcw className="h-5 w-5" />}
                    {t("confirmRefund")}
                  </button>
                </div>
              </div>

              {sale.debtAmount > 0 && (
                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs italic">
                  <AlertTriangle className="h-4 w-4 inline mr-1 mb-1" />
                  {t("refundDebtWarning")}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
