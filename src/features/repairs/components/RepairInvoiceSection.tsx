"use client";

import { useState, useTransition } from "react";
import {
  FileText,
  CheckCircle2,
  Loader2,
  AlertTriangle,
  Receipt,
  Clock,
  Printer,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { generateRepairInvoice, payRepairInvoice } from "../actions/invoice.actions";
import type { InvoiceSummary, PaymentConfirmation } from "../actions/invoice.actions";
import { RepairRefundForm } from "./RepairRefundForm";
import type { UserRole } from "@prisma/client";
import { WhatsAppSendButton } from "../../whatsapp/components/WhatsAppSendButton";
import { getInvoiceStatusLabel, getLineTypeLabel } from "../i18n";
import { useRepairI18n } from "./RepairLanguageSwitcher";

const INVOICE_STATUS_CLASSES: Record<string, string> = {
  unpaid: "bg-red-100 text-red-800 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-800",
  partial: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800",
  paid: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800",
  cancelled: "bg-gray-100 text-gray-700 border-gray-200 dark:bg-muted dark:text-muted-foreground",
};

function StatusBadge({ status }: { status: string }) {
  const { locale } = useRepairI18n();
  const cls = INVOICE_STATUS_CLASSES[status] ?? INVOICE_STATUS_CLASSES.unpaid;
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border", cls)}>
      {getInvoiceStatusLabel(status, locale)}
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

function PaymentForm({
  invoice,
  isWalkin,
  onSuccess,
}: {
  invoice: InvoiceSummary;
  isWalkin: boolean;
  onSuccess: (confirmation: PaymentConfirmation) => void;
}) {
  const { t, trMessage } = useRepairI18n();
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
      setError(t("invoice_cashReceived"));
      return;
    }
    if (cashAmount < 0) {
      setError(t("error_cashNegative"));
      return;
    }
    if (isWalkin && cashAmount < remaining) {
      setError(t("error_walkinFullCash"));
      return;
    }

    setError(null);
    startTransition(async () => {
      const result = await payRepairInvoice(invoice.id, Number(cashAmount));
      if ("error" in result) {
        setError(trMessage(result.error));
      } else {
        onSuccess(result);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-border mt-4">
      <h4 className="font-semibold text-sm">{t("invoice_payment")}</h4>
      {error && (
        <div className="rounded-md bg-destructive/15 p-2 text-xs text-destructive flex items-start gap-2">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium">{t("invoice_cashReceived")}</label>
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
          <label className="text-xs font-medium text-muted-foreground">{t("invoice_remaining")}</label>
          <div className="flex h-9 items-center px-3 bg-muted/50 rounded-md border text-sm font-bold text-red-600">
            {remaining.toFixed(2)} DZD
          </div>
        </div>
      </div>

      {debtPreview > 0 && (
        <div className="rounded-md border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-3">
          <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">
            {t("invoice_debtCreated", { amount: debtPreview.toFixed(2) })}
          </p>
        </div>
      )}

      {isWalkin && (
        <div className="rounded-md border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-3">
          <p className="text-xs text-amber-800 dark:text-amber-300">
            {t("invoice_walkinFullPayment", { amount: remaining.toFixed(2) })}
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
          {t("invoice_payAndFinish")}
        </button>
        {!isWalkin && typeof cashAmount === "number" && cashAmount < remaining && (
          <p className="text-xs text-muted-foreground">
            {t("invoice_partialPaymentHint")}
          </p>
        )}
      </div>
    </form>
  );
}

function ConfirmationCard({
  confirmation,
  ticketId,
  storeId,
  customerId,
}: {
  confirmation: PaymentConfirmation;
  ticketId: string;
  storeId: string;
  customerId?: string;
}) {
  const { t } = useRepairI18n();
  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800 p-5 space-y-3">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        <h4 className="font-semibold text-emerald-800 dark:text-emerald-300">
          {t("invoice_repairCompleted")}
        </h4>
      </div>
      <div className="space-y-1.5 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">{t("invoice_invoice")}</span>
          <span className="font-mono font-semibold">{confirmation.invoiceNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">{t("invoice_cashCollected")}</span>
          <span className="font-bold text-emerald-700 dark:text-emerald-400">
            {confirmation.cashReceived.toFixed(2)} DZD
          </span>
        </div>
        {confirmation.debtCreated > 0 && (
          <div className="flex justify-between">
            <span className="text-muted-foreground">{t("invoice_recordedDebt")}</span>
            <span className="font-bold text-amber-700 dark:text-amber-400">
              {confirmation.debtCreated.toFixed(2)} DZD
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 pt-4 border-t flex gap-3">
        <a
          href={`/dashboard/repairs/invoices/${confirmation.invoiceId}/receipt`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-white dark:bg-transparent text-sm font-medium hover:bg-muted transition-colors"
        >
          <Printer className="h-4 w-4" />
          {t("invoice_printInvoice")}
        </a>
        <WhatsAppSendButton
          ticketId={ticketId}
          storeId={storeId}
          customerId={customerId}
          type="ready"
          variant="button"
          label="WhatsApp"
        />
      </div>
    </div>
  );
}

interface RepairInvoiceSectionProps {
  ticketId: string;
  storeId: string;
  customerId?: string;
  ticketStatus: string;
  isWalkin: boolean;
  initialInvoice: InvoiceSummary | null;
  userRole: UserRole;
}

export function RepairInvoiceSection({
  ticketId,
  storeId,
  customerId,
  ticketStatus,
  isWalkin,
  initialInvoice,
  userRole,
}: RepairInvoiceSectionProps) {
  const { locale, t, trMessage, formatDate } = useRepairI18n();
  const [invoice, setInvoice] = useState<InvoiceSummary | null>(initialInvoice);
  const [confirmation, setConfirmation] = useState<PaymentConfirmation | null>(null);
  const [generating, startGenerating] = useTransition();
  const [genError, setGenError] = useState<string | null>(null);
  const [showRefundForm, setShowRefundForm] = useState(false);
  const [refundResult, setRefundResult] = useState<{ number: string; amount: number } | null>(null);

  const canGenerate = userRole !== "Technician";
  const canPay = userRole !== "Technician";
  const isCompleted = ticketStatus === "completed" || ticketStatus === "not_repaired";

  const handleGenerate = () => {
    setGenError(null);
    startGenerating(async () => {
      const result = await generateRepairInvoice(ticketId);
      if ("error" in result) {
        setGenError(trMessage(result.error));
      } else {
        const inv = await import("../actions/invoice.actions").then(
          (m) => m.getRepairInvoice(ticketId)
        );
        if (inv && !("error" in inv)) setInvoice(inv);
      }
    });
  };

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
              {t("invoice_completedNoInvoice")}
            </p>
          </div>
        ) : canGenerate ? (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 flex flex-col items-center gap-3">
            <FileText className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{t("invoice_noInvoiceGenerated")}</p>
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              {generating && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
              <FileText className="h-4 w-4" />
              {t("invoice_generateInvoice")}
            </button>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-5">
            <p className="text-sm text-muted-foreground italic">{t("invoice_noInvoiceAvailable")}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold bg-muted px-2 py-1 rounded">
            {invoice.invoiceNumber}
          </span>
          <StatusBadge status={invoice.status} />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {formatDate(invoice.createdAt)}
          <div className="ms-2 border-s ps-2 flex gap-2">
            <a
              href={`/dashboard/repairs/invoices/${invoice.id}/receipt`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Printer className="h-3 w-3" />
              {t("invoice_invoice")}
            </a>
            <a
              href={`/dashboard/repairs/${ticketId}/ticket-receipt`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Printer className="h-3 w-3" />
              {t("invoice_ticket")}
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 border-b border-border text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-4 py-2.5 text-start font-medium">{t("invoice_description")}</th>
              <th className="px-4 py-2.5 text-center font-medium">{t("quantityShort")}</th>
              <th className="px-4 py-2.5 text-end font-medium">{t("invoice_unitPrice")}</th>
              <th className="px-4 py-2.5 text-end font-medium">{t("total")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {invoice.lines.map((line) => (
              <tr key={line.id} className="bg-background">
                <td className="px-4 py-3">
                  <span className="text-xs text-muted-foreground me-2">
                    [{getLineTypeLabel(line.lineType, locale)}]
                  </span>
                  {line.description === "Main d’œuvre réparation" || line.description === "Main d'œuvre réparation" ? t("invoice_repairLaborDescription") : line.description}
                </td>
                <td className="px-4 py-3 text-center text-muted-foreground">{line.quantity}</td>
                <td className="px-4 py-3 text-end text-muted-foreground">{line.unitPrice.toFixed(2)}</td>
                <td className="px-4 py-3 text-end font-semibold">{line.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-1.5 px-1">
        <MoneyRow label={t("subtotal")} value={invoice.subtotalAmount} />
        {invoice.discountAmount > 0 && (
          <MoneyRow label={t("discount")} value={-invoice.discountAmount} />
        )}
        <div className="border-t border-border my-2" />
        <MoneyRow label={t("total")} value={invoice.totalAmount} bold />
        {invoice.paidAmount > 0 && (
          <MoneyRow label={t("invoice_alreadyPaid")} value={invoice.paidAmount} />
        )}
        {invoice.debtAmount > 0 && (
          <div className="flex justify-between text-sm font-semibold text-amber-700 dark:text-amber-400">
            <span>{t("invoice_recordedDebt")}</span>
            <span>{invoice.debtAmount.toFixed(2)} DZD</span>
          </div>
        )}
        {invoice.refundedAmount > 0 && (
          <div className="flex justify-between text-sm font-bold text-red-700 dark:text-red-400">
            <span>{t("invoice_totalRefunded")}</span>
            <span>-{invoice.refundedAmount.toFixed(2)} DZD</span>
          </div>
        )}
        {invoice.status !== "paid" && invoice.status !== "cancelled" && (
          <div className="flex justify-between text-sm font-bold text-red-700 dark:text-red-400">
            <span>{t("invoice_remainingToPay")}</span>
            <span>{(invoice.totalAmount - invoice.paidAmount).toFixed(2)} DZD</span>
          </div>
        )}
      </div>

      {confirmation ? (
        <ConfirmationCard
          confirmation={confirmation}
          ticketId={ticketId}
          storeId={storeId}
          customerId={customerId}
        />
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
      ) : invoice.status === "paid" || invoice.status === "partial" ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-sm font-semibold">
                {invoice.status === "paid" ? t("invoice_fullyPaid") : t("invoice_partiallyPaid")}
              </span>
            </div>
            {!showRefundForm && !refundResult && canPay && invoice.paidAmount > invoice.refundedAmount && (
              <button
                onClick={() => setShowRefundForm(true)}
                className="text-xs font-bold text-muted-foreground hover:text-amber-600 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="h-3 w-3" />
                {t("invoice_refund")}
              </button>
            )}
          </div>

          {showRefundForm && (
            <RepairRefundForm
              invoice={invoice}
              onCancel={() => setShowRefundForm(false)}
              onSuccess={(conf) => {
                setRefundResult({ number: conf.refundNumber, amount: conf.amountRefunded });
                setShowRefundForm(false);
                setInvoice(prev => prev ? { ...prev, refundedAmount: prev.refundedAmount + conf.amountRefunded } : prev);
              }}
            />
          )}

          {refundResult && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 p-4 text-sm animate-in zoom-in duration-300">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold mb-1">
                <CheckCircle2 className="h-4 w-4" />
                {t("invoice_refundDone")}
              </div>
              <p className="text-muted-foreground">
                {t("invoice_refundSummary", { amount: refundResult.amount.toFixed(2), number: refundResult.number })}
              </p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
