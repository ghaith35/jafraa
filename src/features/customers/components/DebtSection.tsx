"use client";

import { useState, useTransition } from "react";
import { Loader2, TrendingDown, Plus, Minus, Wallet, AlertTriangle, Printer } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import {
  addOpeningBalance,
  addManualDebt,
  addManualCredit,
  payCustomerDebt,
} from "../actions/debt.actions";
import type { DebtEntry, DebtSummary } from "../actions/debt.actions";

// ─── Running balance calculator ───────────────────────────────────────────────

function computeRunningBalances(entries: DebtEntry[]): (DebtEntry & { runningBalance: number })[] {
  let running = 0;
  return entries.map((e) => {
    if (e.direction === "debit") running += e.amount;
    else running = Math.max(0, running - e.amount);
    return { ...e, runningBalance: running };
  });
}

// ─── Inline action form ───────────────────────────────────────────────────────

type ActionType = "payment" | "manual_debt" | "opening_balance" | "correction" | null;

interface InlineFormProps {
  type: ActionType;
  customerId: string;
  currentBalance: number;
  onDone: () => void;
  onCancel: () => void;
}

function InlineForm({ type, customerId, currentBalance, onDone, onCancel }: InlineFormProps) {
  const { t } = useAppI18n();
  const [amount, setAmount] = useState<number | "">("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const config = {
    payment: { label: t("customers.debt.addPayment"), noteRequired: false, noteHint: t("common.optional") },
    manual_debt: { label: t("customers.debt.addManual"), noteRequired: true, noteHint: t("common.required") },
    opening_balance: { label: t("customers.debt.openingBalance"), noteRequired: false, noteHint: t("common.optional") },
    correction: { label: t("customers.debt.correction"), noteRequired: true, noteHint: t("common.required") },
  }[type ?? "payment"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      setError(t("customers.error.amountPositive"));
      return;
    }
    if (type === "payment" && amount > currentBalance) {
      setError(t("customers.error.paymentExceedsDebt", { amount: currentBalance.toFixed(2) }));
      return;
    }
    if ((type === "manual_debt" || type === "correction") && !note.trim()) {
      setError(t("customers.error.noteRequired"));
      return;
    }

    setError(null);
    startTransition(async () => {
      let result;
      if (type === "payment") result = await payCustomerDebt(customerId, Number(amount), note);
      else if (type === "manual_debt") result = await addManualDebt(customerId, Number(amount), note);
      else if (type === "opening_balance") result = await addOpeningBalance(customerId, Number(amount), note);
      else result = await addManualCredit(customerId, Number(amount), note);

      if (result && "error" in result) {
        setError(result.error);
      } else {
        onDone();
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-muted/30 p-4 space-y-3"
    >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-sm">{config?.label}</h4>
        <button type="button" onClick={onCancel} className="text-xs text-muted-foreground hover:text-foreground">
          {t("common.cancel")}
        </button>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/15 p-2 text-xs text-destructive">{error}</div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium">{t("customers.debt.amount")}</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : "")}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="0.00"
          />
        </div>
        {type === "payment" && currentBalance > 0 && (
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">{t("customers.debt.currentBalance")}</label>
            <div className="flex h-9 items-center px-3 bg-muted/50 rounded-md border text-sm font-bold text-red-600">
              {currentBalance.toFixed(2)} DZD
            </div>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium">
          {t("customers.debt.noteLabel", { suffix: config?.noteRequired ? `(${t("common.required")})` : `(${config?.noteHint})` })}
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required={config?.noteRequired}
          className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder={type === "payment" ? t("customers.debt.cashPlaceholder") : t("customers.debt.reasonPlaceholder")}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-medium text-white transition-colors disabled:opacity-50",
            type === "correction" || type === "payment"
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-destructive hover:bg-destructive/90"
          )}
        >
          {isPending && <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />}
          {t("customers.debt.confirm")}
        </button>
      </div>
    </form>
  );
}

// ─── Main DebtSection component ───────────────────────────────────────────────

interface DebtSectionProps {
  customerId: string;
  initialSummary: DebtSummary | { error: string };
  initialEntries: (DebtEntry & { runningBalance?: number })[];
  canManageDebt: boolean; // debt:manage
  canPayDebt: boolean;    // debt:view + payments:manage
}

export function DebtSection({
  customerId,
  initialSummary,
  initialEntries,
  canManageDebt,
  canPayDebt,
}: DebtSectionProps) {
  const { t, formatDate } = useAppI18n();
  const [activeAction, setActiveAction] = useState<ActionType>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Use server-provided initial data (page refreshes on revalidatePath)
  const summary = "error" in initialSummary ? null : initialSummary;
  const entriesWithBalance = computeRunningBalances(initialEntries);
  const totalDebt = summary?.totalDebt ?? 0;
  const alertLimit = summary?.alertLimit ?? null;
  const isOverLimit = summary?.isOverLimit ?? false;
  const isWalkin = summary?.isWalkin ?? false;

  const handleDone = () => {
    setActiveAction(null);
    setRefreshKey((k) => k + 1); // triggers re-render; server revalidatePath refreshes data
  };

  if (isWalkin) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-muted/20 p-5">
        <p className="text-sm text-muted-foreground italic">
          {t("customers.debt.walkinNoDebt")}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4" key={refreshKey}>
      {/* Balance card */}
      <div className={cn(
        "rounded-xl border p-5",
        totalDebt === 0
          ? "border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-900"
          : isOverLimit
          ? "border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900"
          : "border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900"
      )}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              {t("customers.debt.currentBalance")}
            </p>
            <p className={cn(
              "text-3xl font-black",
              totalDebt === 0
                ? "text-emerald-700 dark:text-emerald-400"
                : isOverLimit
                ? "text-red-700 dark:text-red-400"
                : "text-amber-700 dark:text-amber-400"
            )}>
              {totalDebt.toFixed(2)} <span className="text-lg font-semibold">DZD</span>
            </p>
            {alertLimit !== null && (
              <p className="text-xs text-muted-foreground mt-1">
                {t("customers.debt.alertLimit", { amount: alertLimit.toFixed(2) })}
              </p>
            )}
          </div>
          <div className={cn(
            "rounded-full p-2.5",
            totalDebt === 0 ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-amber-100 dark:bg-amber-900/30"
          )}>
            <TrendingDown className={cn(
              "h-5 w-5",
              totalDebt === 0 ? "text-emerald-600" : "text-amber-600"
            )} />
          </div>
        </div>

        {/* Over-limit warning */}
        {isOverLimit && (
          <div className="mt-3 flex items-center gap-2 rounded-md bg-red-100 dark:bg-red-900/30 p-2.5 border border-red-200 dark:border-red-800">
            <AlertTriangle className="h-4 w-4 text-red-600 shrink-0" />
            <p className="text-xs font-medium text-red-800 dark:text-red-300">
              {t("customers.debt.overLimit")}
            </p>
          </div>
        )}

        {/* Breakdown */}
        {totalDebt > 0 && (
          <div className="mt-3 pt-3 border-t border-current/10 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground">{t("customers.debt.repairs")}</p>
              <p className="text-sm font-bold">{(summary?.repairDebt ?? 0).toFixed(0)} DZD</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("customers.debt.sales")}</p>
              <p className="text-sm font-bold">{(summary?.saleDebt ?? 0).toFixed(0)} DZD</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("customers.debt.manual")}</p>
              <p className="text-sm font-bold">{(summary?.manualDebt ?? 0).toFixed(0)} DZD</p>
            </div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      {activeAction === null && (
        <div className="flex flex-wrap gap-2">
          {canPayDebt && totalDebt > 0 && (
            <button
              onClick={() => setActiveAction("payment")}
              className="inline-flex h-9 items-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              <Wallet className="h-4 w-4" />
              {t("customers.debt.addPayment")}
            </button>
          )}
          {canManageDebt && (
            <>
              <button
                onClick={() => setActiveAction("manual_debt")}
                className="inline-flex h-9 items-center gap-2 rounded-md border border-destructive px-4 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
              >
                <Plus className="h-4 w-4" />
                {t("customers.debt.addDebt")}
              </button>
              {totalDebt > 0 && (
                <button
                  onClick={() => setActiveAction("correction")}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                  {t("customers.debt.correction")}
                </button>
              )}
              {entriesWithBalance.length === 0 && (
                <button
                  onClick={() => setActiveAction("opening_balance")}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  {t("customers.debt.openingBalance")}
                </button>
              )}
            </>
          )}
          <a
            href={`/dashboard/customers/${customerId}/debt-statement`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium hover:bg-muted transition-colors"
          >
            <Printer className="h-4 w-4" />
            {t("customers.debt.statement")}
          </a>
        </div>
      )}

      {/* Inline form */}
      {activeAction !== null && (
        <InlineForm
          type={activeAction}
          customerId={customerId}
          currentBalance={totalDebt}
          onDone={handleDone}
          onCancel={() => setActiveAction(null)}
        />
      )}

      {/* Ledger table */}
      <div>
        <h3 className="text-sm font-semibold mb-3">{t("customers.debt.history")}</h3>
        {entriesWithBalance.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-6 text-center">
            <p className="text-sm text-muted-foreground">{t("customers.debt.empty")}</p>
          </div>
        ) : (
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm whitespace-nowrap">
                <thead className="bg-muted/30 text-xs uppercase text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">{t("common.date")}</th>
                    <th className="px-4 py-3 text-left font-medium">{t("common.type")}</th>
                    <th className="px-4 py-3 text-right font-medium">{t("common.amount")}</th>
                    <th className="px-4 py-3 text-right font-medium">{t("customers.debt.balanceAfter")}</th>
                    <th className="px-4 py-3 text-left font-medium">{t("common.note")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[...entriesWithBalance].reverse().map((entry) => (
                    <tr key={entry.id} className="bg-background hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-muted-foreground">
                        {formatDate(entry.createdAt)}
                      </td>
                      <td className="px-4 py-3">
                        <span className={cn(
                          "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border",
                          entry.direction === "debit"
                            ? "bg-red-50 text-red-800 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-800"
                            : "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800"
                        )}>
                          {entry.type === "opening_balance" ? t("customers.debt.openingBalance") : entry.type === "manual_debt" ? t("customers.debt.manualDebt") : entry.type === "sale_debt" ? t("customers.debt.saleDebt") : entry.type === "repair_debt" ? t("customers.debt.repairDebt") : entry.type === "payment" ? t("customers.debt.payment") : entry.type === "adjustment" ? t("customers.debt.adjustment") : entry.type}
                        </span>
                      </td>
                      <td className={cn("px-4 py-3 text-right font-bold", entry.direction === "debit" ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400")}>
                        {entry.direction === "debit" ? "+" : "-"}{entry.amount.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        {entry.runningBalance.toFixed(2)} DZD
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs max-w-[200px] truncate">
                        {entry.note ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
