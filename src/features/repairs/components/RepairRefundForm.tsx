"use client";

import { useState, useTransition } from "react";
import { RotateCcw, Loader2, AlertTriangle } from "lucide-react";
import { createRepairInvoiceRefund, type RepairRefundConfirmation } from "../actions/refund.actions";
import type { InvoiceSummary } from "../actions/invoice.actions";

interface RepairRefundFormProps {
  invoice: InvoiceSummary;
  onSuccess: (conf: RepairRefundConfirmation) => void;
  onCancel: () => void;
}

export function RepairRefundForm({ invoice, onSuccess, onCancel }: RepairRefundFormProps) {
  const maxRefundable = invoice.paidAmount - invoice.refundedAmount;
  const [amount, setAmount] = useState<number | "">(maxRefundable);
  const [reason, setReason] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      setError("Le montant doit être supérieur à 0");
      return;
    }
    if (amount > maxRefundable) {
      setError(`Montant maximum remboursable: ${maxRefundable.toFixed(2)} DZD`);
      return;
    }
    if (!reason.trim()) {
      setError("Veuillez indiquer le motif du remboursement");
      return;
    }

    setError(null);
    startTransition(async () => {
      const result = await createRepairInvoiceRefund(invoice.id, Number(amount), reason);
      if ("error" in result) {
        setError(result.error);
      } else {
        onSuccess(result);
      }
    });
  };

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/50 dark:bg-amber-950/10 dark:border-amber-900 p-5 animate-in slide-in-from-top-2 duration-300">
      <h4 className="font-bold text-amber-900 dark:text-amber-400 flex items-center gap-2 mb-4">
        <RotateCcw className="h-4 w-4" />
        Remboursement de la facture
      </h4>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-500">Montant (DZD)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              max={maxRefundable}
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
              className="flex h-10 w-full rounded-lg border border-amber-200 bg-background px-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-500">Max remboursable</label>
            <div className="flex h-10 items-center px-3 bg-amber-100/50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 text-sm font-black">
              {maxRefundable.toFixed(2)} DZD
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-500">Motif</label>
          <textarea
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Ex: Écran défectueux après pose, Geste commercial..."
            className="w-full h-20 rounded-lg border border-amber-200 bg-background p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none"
          />
        </div>

        {error && (
          <div className="rounded-lg bg-destructive/10 p-3 text-xs text-destructive flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            {error}
          </div>
        )}

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="flex-1 h-10 rounded-lg bg-amber-600 text-white font-bold text-sm hover:bg-amber-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-sm shadow-amber-200"
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <RotateCcw className="h-4 w-4" />}
            Confirmer le remboursement
          </button>
          <button
            type="button"
            disabled={isPending}
            onClick={onCancel}
            className="px-4 h-10 rounded-lg border border-amber-200 bg-white dark:bg-transparent text-amber-700 dark:text-amber-400 font-bold text-sm hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-all"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
