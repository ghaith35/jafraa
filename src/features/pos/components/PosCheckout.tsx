"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, ShoppingBag, Wrench } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ItemSearch } from "./ItemSearch";
import { CartPanel } from "./CartPanel";
import { SaleConfirmationView } from "./SaleConfirmation";
import {
  checkoutCashSale,
  type CartLine,
  type SellableItem,
  type SaleConfirmation,
} from "../actions/pos-sale.actions";
import { CustomerSearch } from "./CustomerSearch";
import { type NamedCustomerResult } from "../actions/customer-search.actions";
import type { RepairIntakeData } from "@/features/repairs/lib/intake-data";
import { PosRepairWorkspace } from "./PosRepairWorkspace";

interface PosCheckoutProps {
  hasOpenSession: boolean;
  userRole: string;
  repairIntake?: RepairIntakeData;
}

export function PosCheckout({ hasOpenSession, userRole, repairIntake }: PosCheckoutProps) {
  const t = useTranslations("pos");
  const router = useRouter();
  const [cartLines, setCartLines] = useState<CartLine[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [cashReceived, setCashReceived] = useState<number | "">("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saleConfirmation, setSaleConfirmation] = useState<SaleConfirmation | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<NamedCustomerResult | null>(null);
  const [debtEnabled, setDebtEnabled] = useState(false);
  const [mode, setMode] = useState<"sale" | "repair">("sale");

  const canApplyDiscount = userRole === "Admin" || userRole === "Manager";

  // Calculate totals
  const subtotal = cartLines.reduce(
    (sum, line) => sum + line.unitPrice * line.quantity,
    0
  );
  const total = Math.max(0, subtotal - discount);
  const cashReceivedNum = typeof cashReceived === "number" ? cashReceived : 0;
  
  // Change calculation is only valid if debt is NOT enabled OR cash covers total
  const isDebtMode = debtEnabled && !!selectedCustomer && cashReceivedNum < total;
  const change = isDebtMode ? 0 : cashReceivedNum - total;
  const debtAmount = isDebtMode ? total - cashReceivedNum : 0;

  // ─── Cart handlers ─────────────────────────────────────────────────────────

  const handleAddToCart = useCallback((item: SellableItem) => {
    setCartLines((prev) => {
      const existing = prev.find((l) => l.itemId === item.id);
      if (existing) {
        // Check stock limit for products/parts
        if (
          item.stockQty !== null &&
          existing.quantity >= item.stockQty
        ) {
          return prev; // Don't exceed stock
        }
        return prev.map((l) =>
          l.itemId === item.id
            ? { ...l, quantity: l.quantity + 1 }
            : l
        );
      }
      return [
        ...prev,
        {
          lineType: item.type,
          itemId: item.id,
          name: item.name,
          sku: item.sku,
          quantity: 1,
          unitPrice: item.sellingPrice,
        },
      ];
    });
    setError(null);
  }, []);

  const handleUpdateQuantity = useCallback((itemId: string, delta: number) => {
    setCartLines((prev) =>
      prev
        .map((l) =>
          l.itemId === itemId
            ? { ...l, quantity: Math.max(0, l.quantity + delta) }
            : l
        )
        .filter((l) => l.quantity > 0)
    );
    setError(null);
  }, []);

  const handleRemoveLine = useCallback((itemId: string) => {
    setCartLines((prev) => prev.filter((l) => l.itemId !== itemId));
    setError(null);
  }, []);

  const handleClearCart = useCallback(() => {
    setCartLines([]);
    setDiscount(0);
    setCashReceived("");
    setError(null);
  }, []);

  // ─── Checkout ──────────────────────────────────────────────────────────────

  const handleCheckout = async () => {
    if (cartLines.length === 0) {
      setError(t("cartEmpty"));
      return;
    }

    // Validation for full-cash or debt
    if (!debtEnabled || !selectedCustomer) {
      if (typeof cashReceived !== "number" || cashReceived < total) {
        setError(t("insufficientCash", { amount: total.toFixed(2) }));
        return;
      }
    } else {
      // Debt enabled: ensure cashReceived is at least 0 (it is by type)
      if (typeof cashReceived !== "number") {
        setError(t("enterReceivedAmount"));
        return;
      }
    }

    setIsCheckingOut(true);
    setError(null);

    const result = await checkoutCashSale(
      cartLines,
      cashReceivedNum,
      selectedCustomer?.id || null,
      discount > 0 ? discount : undefined,
      debtEnabled
    );

    if ("error" in result) {
      setError(result.error);
      setIsCheckingOut(false);
    } else {
      setSaleConfirmation(result);
      setIsCheckingOut(false);
    }
  };

  const handleNewSale = () => {
    setSaleConfirmation(null);
    setCartLines([]);
    setDiscount(0);
    setCashReceived("");
    setSelectedCustomer(null);
    setDebtEnabled(false);
    setError(null);
    router.refresh();
  };


  const modeTabs = (
    <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm">
      <button
        type="button"
        onClick={() => setMode("sale")}
        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition ${
          mode === "sale"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        <ShoppingBag className="h-4 w-4" />
        Vente produits
      </button>
      {repairIntake && (
        <button
          type="button"
          onClick={() => setMode("repair")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition ${
            mode === "repair"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Wrench className="h-4 w-4" />
          Réparation POS
        </button>
      )}
      <p className="ms-auto hidden text-xs text-muted-foreground md:block">
        Créez une vente rapide ou ouvrez un ticket réparation depuis la caisse.
      </p>
    </div>
  );

  // ─── Guards ────────────────────────────────────────────────────────────────

  if (!hasOpenSession) {
    return (
      <div className="max-w-md mx-auto mt-10 rounded-xl border border-border bg-card p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <Lock className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
        <h2 className="text-lg font-bold mb-2">{t("closedTitle")}</h2>
        <p className="text-sm text-muted-foreground mb-4">
          {t("closedDescription")}
        </p>
        <Link
          href="/dashboard/pos/cash-register"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {t("openCashRegister")}
        </Link>
      </div>
    );
  }

  if (saleConfirmation) {
    return <SaleConfirmationView sale={saleConfirmation} onNewSale={handleNewSale} />;
  }

  if (mode === "repair" && repairIntake) {
    return (
      <div className="space-y-4">
        {modeTabs}
        <PosRepairWorkspace repairIntake={repairIntake} />
      </div>
    );
  }

  // ─── Main POS interface ────────────────────────────────────────────────────

  return (
    <div className="space-y-4">
      {modeTabs}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[calc(100vh-230px)]">
      {/* Left: Item search (3/5) */}
      <div className="lg:col-span-3 flex flex-col min-h-0">
        <ItemSearch onAddToCart={handleAddToCart} cartLines={cartLines} />
      </div>

      {/* Right: Cart + Checkout (2/5) */}
      <div className="lg:col-span-2 rounded-xl border border-border bg-card p-5 flex flex-col min-h-0">
        {/* Cart */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <CartPanel
            lines={cartLines}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveLine={handleRemoveLine}
            onClearCart={handleClearCart}
          />
        </div>

        {/* Checkout section */}
        <div className="pt-4 mt-4 border-t border-border space-y-4">
          {/* Customer Selection */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">{t("customer")}</label>
            <CustomerSearch 
              selectedCustomer={selectedCustomer}
              onSelect={(c) => {
                setSelectedCustomer(c);
                if (!c) setDebtEnabled(false);
              }}
            />
          </div>

          {cartLines.length > 0 && (
            <div className="space-y-3 pt-2">
            {/* Discount (Admin/Manager only) */}
            {canApplyDiscount && (
              <div className="flex items-center justify-between gap-3">
                <label className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {t("discount")}
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={discount || ""}
                  onChange={(e) =>
                    setDiscount(e.target.value ? parseFloat(e.target.value) : 0)
                  }
                  className="h-9 w-32 rounded-md border border-input bg-background px-3 text-sm text-right"
                  placeholder="0.00"
                />
              </div>
            )}

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-base font-bold">{t("total")}</span>
              <span className="text-2xl font-black text-primary">
                {total.toFixed(2)} DZD
              </span>
            </div>

            {/* Cash received */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold">{t("cashReceived")}</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={cashReceived}
                onChange={(e) =>
                  setCashReceived(
                    e.target.value ? parseFloat(e.target.value) : ""
                  )
                }
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-lg font-bold ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="0.00"
              />
            </div>

            {/* Debt Preview */}
            {isDebtMode && (
              <div className="p-3 rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 text-center">
                <span className="text-xs font-medium text-amber-800 dark:text-amber-300 block">
                  {t("remainingDebt")}
                </span>
                <span className="text-xl font-black text-amber-600">
                  {debtAmount.toFixed(2)} DZD
                </span>
              </div>
            )}

            {/* Change display (only if not in debt mode) */}
            {!isDebtMode && typeof cashReceived === "number" && cashReceived > 0 && (
              <div
                className={`p-3 rounded-lg text-center border ${
                  change >= 0
                    ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800"
                    : "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800"
                }`}
              >
                <span className="text-xs font-medium text-muted-foreground block">
                  {t("changeDue")}
                </span>
                <span
                  className={`text-xl font-black ${
                    change >= 0 ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {change >= 0 ? change.toFixed(2) : "—"} DZD
                </span>
              </div>
            )}

            {/* Debt Toggle (only if customer selected) */}
            {selectedCustomer && cashReceivedNum < total && (
              <div className="flex items-center gap-3 py-2 px-1">
                <input
                  type="checkbox"
                  id="debt-toggle"
                  checked={debtEnabled}
                  onChange={(e) => setDebtEnabled(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="debt-toggle" className="text-sm font-medium cursor-pointer">
                  {t("debtToggle")}
                </label>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            {/* Checkout button */}
            <button
              onClick={handleCheckout}
              disabled={
                isCheckingOut ||
                cartLines.length === 0 ||
                (typeof cashReceived !== "number") ||
                (!debtEnabled && cashReceived < total)
              }
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary px-4 text-base font-bold text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : null}
              {isDebtMode 
                ? t("checkoutWithDebt", { amount: debtAmount.toFixed(0) })
                : t("checkoutAmount", { amount: total.toFixed(0) })}
            </button>
          </div>
        )}
        </div>
      </div>
      </div>
    </div>
  );
}

