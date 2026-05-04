"use client";

import { useState, useTransition } from "react";
import {
  FileText,
  CheckCircle2,
  Loader2,
  AlertTriangle,
  Receipt,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { generateRepairInvoice, payRepairInvoice } from "../actions/invoice.actions";
import type { InvoiceSummary, PaymentConfirmation } from "../actions/invoice.actions";
import type { UserRole } from "@prisma/client";

// ─── Type labels ──────────────────────────────────────────────────────────────

const LINE_TYPE_LABELS: Record<string, string> = {
  labor: "Main d'œuvre",
  part: "Pièce",
  service: "Service",
  custom: "Personnalisé",
};

const STATUS_CONFIG: Record<string, { label: string; cls: string }> = {
  unpaid: { label: "Non réglée", cls: "bg-red-100 text-red-800 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-800" },
  partial: { label: "Partiellement réglée", cls: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800" },
  paid: { label: "Réglée", cls: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800" },
  cancelled: { label: "Annulée", cls: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-muted dark:text-muted-foreground" },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG.unpaid;
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border", cfg.cls)}>
      {cfg.label}
    </span>
  );
}

function MoneyRow({ label, value, bold }: { label: string; value: number; bold?: boolean }) {
  return (
    <div className={cn("flex justify-between text-sm", bold ? "font-bold text-base" : "text-muted-foreground")}>
      <span>{label}</span>
      <span className={cn(bold ? "text-foreground" : "")}>{value.toFixed(2)} DZD</span>
    </div>
  );
}

// ─── Payment form ─────────────────────────────────────────────────────────────

function PaymentForm({
  invoice,
  isWalkin,
  onSuccess,
}: {
  invoice: InvoiceSummary;
  isWalkin: boolean;
  onSuccess: (confirmation: PaymentConfirmation) => void;
}) {
  const remaining = invoice.totalAmount - invoice.paidAmount;
  const [cashAmount, setCashAmount] = useState<number | "">(remaining);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const debtPreview =
    typeof cashAmount === "number" && cashAmount < remaining && !isWalkin
      ? remaining - cashAmount
      : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cashAmount && cashAmount !== 0) {
      setError("Entrez le montant reçu");
      return;
    }
    if (cashAmount < 0) {
      setError("Le montant ne peut pas être négatif");
      return;
    }
    if (isWalkin && cashAmount < remaining) {
      setError("Les clients de passage doivent payer la totalité en espèces");
      return;
    }

    setError(null);
    startTransition(async () => {
      const result = await payRepairInvoice(invoice.id, Number(cashAmount));
      if ("error" in result) {
        setError(result.error);
      } else {
        onSuccess(result);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-border mt-4">
      <h4 className="font-semibold text-sm">Encaissement</h4>
      {error && (
        <div className="rounded-md bg-destructive/15 p-2 text-xs text-destructive flex items-start gap-2">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium">Montant reçu (DZD)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max={remaining}
            required
            value={cashAmount}
            onChange={(e) => setCashAmount(e.target.value ? parseFloat(e.target.value) : "")}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">Reste à payer</label>
          <div className="flex h-9 items-center px-3 bg-muted/50 rounded-md border text-sm font-bold text-red-600">
            {remaining.toFixed(2)} DZD
          </div>
        </div>
      </div>

      {/* Debt preview */}
      {debtPreview > 0 && (
        <div className="rounded-md border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-3">
          <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">
            Dette créée: {debtPreview.toFixed(2)} DZD sera enregistrée sur le compte client
          </p>
        </div>
      )}

      {isWalkin && (
        <div className="rounded-md border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-3">
          <p className="text-xs text-amber-800 dark:text-amber-300">
            Client de passage — paiement intégral requis ({remaining.toFixed(2)} DZD)
          </p>
        </div>
      )}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-9 items-center gap-2 rounded-md bg-emerald-600 px-5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors"
        >
          {isPending && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
          <Receipt className="h-4 w-4" />
          Encaisser & Terminer
        </button>
        {!isWalkin && typeof cashAmount === "number" && cashAmount < remaining && (
          <p className="text-xs text-muted-foreground">
            Paiement partiel — le reste sera enregistré comme dette
          </p>
        )}
      </div>
    </form>
  );
}

// ─── Payment confirmation card ────────────────────────────────────────────────

function ConfirmationCard({ confirmation }: { confirmation: PaymentConfirmation }) {
  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800 p-5 space-y-3">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        <h4 className="font-semibold text-emerald-800 dark:text-emerald-300">
          Réparation terminée
        </h4>
      </div>
      <div className="space-y-1.5 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Facture</span>
          <span className="font-mono font-semibold">{confirmation.invoiceNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Espèces encaissées</span>
          <span className="font-bold text-emerald-700 dark:text-emerald-400">
            {confirmation.cashReceived.toFixed(2)} DZD
          </span>
        </div>
        {confirmation.debtCreated > 0 && (
          <div className="flex justify-between">
            <span className="text-muted-foreground">Dette enregistrée</span>
            <span className="font-bold text-amber-700 dark:text-amber-400">
              {confirmation.debtCreated.toFixed(2)} DZD
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface RepairInvoiceSectionProps {
  ticketId: string;
  ticketStatus: string;
  isWalkin: boolean;
  initialInvoice: InvoiceSummary | null;
  userRole: UserRole;
}

export function RepairInvoiceSection({
  ticketId,
  ticketStatus,
  isWalkin,
  initialInvoice,
  userRole,
}: RepairInvoiceSectionProps) {
  const [invoice, setInvoice] = useState<InvoiceSummary | null>(initialInvoice);
  const [confirmation, setConfirmation] = useState<PaymentConfirmation | null>(null);
  const [generating, startGenerating] = useTransition();
  const [genError, setGenError] = useState<string | null>(null);

  const canGenerate = userRole !== "Technician";
  const canPay = userRole !== "Technician";
  const isCompleted = ticketStatus === "completed" || ticketStatus === "not_repaired";

  const handleGenerate = () => {
    setGenError(null);
    startGenerating(async () => {
      const result = await generateRepairInvoice(ticketId);
      if ("error" in result) {
        setGenError(result.error);
      } else {
        // Reload invoice from server — page will revalidate
        // For immediate feedback, refetch via action
        const inv = await import("../actions/invoice.actions").then(
          (m) => m.getRepairInvoice(ticketId)
        );
        if (inv && !("error" in inv)) setInvoice(inv);
      }
    });
  };

  // No invoice yet
  if (!invoice) {
    return (
      <div className="space-y-4">
        {genError && (
          <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            {genError}
          </div>
        )}

        {isCompleted ? (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Ticket terminé — aucune facture générée
            </p>
          </div>
        ) : canGenerate ? (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 flex flex-col items-center gap-3">
            <FileText className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Aucune facture générée</p>
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              {generating && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
              <FileText className="h-4 w-4" />
              Générer la facture
            </button>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-5">
            <p className="text-sm text-muted-foreground italic">Aucune facture disponible</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Invoice header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold bg-muted px-2 py-1 rounded">
            {invoice.invoiceNumber}
          </span>
          <StatusBadge status={invoice.status} />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {new Date(invoice.createdAt).toLocaleDateString("fr-FR")}
        </div>
      </div>

      {/* Lines table */}
      <div className="rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 border-b border-border text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-4 py-2.5 text-left font-medium">Description</th>
              <th className="px-4 py-2.5 text-center font-medium">Qté</th>
              <th className="px-4 py-2.5 text-right font-medium">P.U.</th>
              <th className="px-4 py-2.5 text-right font-medium">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {invoice.lines.map((line) => (
              <tr key={line.id} className="bg-background">
                <td className="px-4 py-3">
                  <span className="text-xs text-muted-foreground mr-2">
                    [{LINE_TYPE_LABELS[line.lineType] ?? line.lineType}]
                  </span>
                  {line.description}
                </td>
                <td className="px-4 py-3 text-center text-muted-foreground">{line.quantity}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{line.unitPrice.toFixed(2)}</td>
                <td className="px-4 py-3 text-right font-semibold">{line.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="space-y-1.5 px-1">
        <MoneyRow label="Sous-total" value={invoice.subtotalAmount} />
        {invoice.discountAmount > 0 && (
          <MoneyRow label="Remise" value={-invoice.discountAmount} />
        )}
        <div className="border-t border-border my-2" />
        <MoneyRow label="Total" value={invoice.totalAmount} bold />
        {invoice.paidAmount > 0 && (
          <MoneyRow label="Déjà payé" value={invoice.paidAmount} />
        )}
        {invoice.debtAmount > 0 && (
          <div className="flex justify-between text-sm font-semibold text-amber-700 dark:text-amber-400">
            <span>Dette enregistrée</span>
            <span>{invoice.debtAmount.toFixed(2)} DZD</span>
          </div>
        )}
        {invoice.status !== "paid" && invoice.status !== "cancelled" && (
          <div className="flex justify-between text-sm font-bold text-red-700 dark:text-red-400">
            <span>Reste à payer</span>
            <span>{(invoice.totalAmount - invoice.paidAmount).toFixed(2)} DZD</span>
          </div>
        )}
      </div>

      {/* Confirmation or payment form */}
      {confirmation ? (
        <ConfirmationCard confirmation={confirmation} />
      ) : invoice.status !== "paid" && invoice.status !== "cancelled" && canPay ? (
        <PaymentForm
          invoice={invoice}
          isWalkin={isWalkin}
          onSuccess={(conf) => {
            setConfirmation(conf);
            setInvoice((prev) =>
              prev
                ? {
                    ...prev,
                    status: conf.invoiceStatus,
                    paidAmount: prev.paidAmount + conf.cashReceived,
                    debtAmount: conf.debtCreated,
                  }
                : prev
            );
          }}
        />
      ) : invoice.status === "paid" ? (
        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-sm font-semibold">Facture entièrement réglée</span>
        </div>
      ) : null}
    </div>
  );
}
