"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, ShoppingBag, Wrench, PauseCircle, PlayCircle } from "lucide-react";
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
import {
  getOrCreateActiveCart,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
  updateCartCustomer,
  updateCartDiscount,
  holdCart,
  resumeCart,
  listHeldCarts,
  releaseCart,
  completeCart,
  type HeldCartSummary,
} from "../actions/cart.actions";
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
  const [cartId, setCartId] = useState<string | null>(null);
  const [cartLines, setCartLines] = useState<CartLine[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [cashReceived, setCashReceived] = useState<number | "">("");
  const [isPending, setIsPending] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saleConfirmation, setSaleConfirmation] = useState<SaleConfirmation | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<NamedCustomerResult | null>(null);
  const [debtEnabled, setDebtEnabled] = useState(false);
  const [mode, setMode] = useState<"sale" | "repair">("sale");
  const [showHeldCarts, setShowHeldCarts] = useState(false);
  const [heldCarts, setHeldCarts] = useState<HeldCartSummary[]>([]);
  const [loadingHeld, setLoadingHeld] = useState(false);

  const canApplyDiscount = userRole === "Admin" || userRole === "Manager";

  // Calculate totals
  const subtotal = cartLines.reduce(
    (sum, line) => sum + line.unitPrice * line.quantity,
    0
  );
  const total = Math.max(0, subtotal - discount);
  const cashReceivedNum = typeof cashReceived === "number" ? cashReceived : 0;

  const isDebtMode = debtEnabled && !!selectedCustomer && cashReceivedNum < total;
  const change = isDebtMode ? 0 : cashReceivedNum - total;
  const debtAmount = isDebtMode ? total - cashReceivedNum : 0;

  // ─── Load active cart on mount ─────────────────────────────────────────────

  useEffect(() => {
    (async () => {
      setIsPending(true);
      try {
        const active = await getOrCreateActiveCart();
        if (active) {
          setCartId(active.id);
          setCartLines(active.lines);
          setDiscount(active.discountAmount);
          if (active.customerId && active.customerName) {
            setSelectedCustomer({ id: active.customerId, name: active.customerName, phone: "", totalDebt: 0 });
          }
        }
      } finally {
        setIsPending(false);
      }
    })();
  }, []);

  // ─── Persist helper ────────────────────────────────────────────────────────

  const persistCustomer = useCallback(async (customerId: string | null) => {
    if (!cartId) return;
    const result = await updateCartCustomer(cartId, customerId);
    if (result && "error" in result) console.error(result.error);
  }, [cartId]);

  const persistDiscount = useCallback(async (amount: number) => {
    if (!cartId) return;
    const result = await updateCartDiscount(cartId, amount);
    if (result && "error" in result) console.error(result.error);
  }, [cartId]);

  // ─── Cart handlers ─────────────────────────────────────────────────────────

  const handleAddToCart = useCallback(async (item: SellableItem) => {
    setCartLines((prev) => {
      const existing = prev.find((l) => l.itemId === item.id);
      if (existing) {
        if (item.stockQty !== null && existing.quantity >= item.stockQty) return prev;
        return prev.map((l) =>
          l.itemId === item.id ? { ...l, quantity: l.quantity + 1 } : l
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

    if (cartId) {
      await addToCart(cartId, {
        id: item.id,
        type: item.type,
        name: item.name,
        sku: item.sku,
        sellingPrice: item.sellingPrice,
      });
    }
  }, [cartId]);

  const handleUpdateQuantity = useCallback(async (itemId: string, delta: number) => {
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

    if (cartId) {
      await updateCartItemQuantity(cartId, itemId, delta);
    }
  }, [cartId]);

  const handleRemoveLine = useCallback(async (itemId: string) => {
    setCartLines((prev) => prev.filter((l) => l.itemId !== itemId));
    setError(null);

    if (cartId) {
      await removeFromCart(cartId, itemId);
    }
  }, [cartId]);

  const handleClearCart = useCallback(async () => {
    setCartLines([]);
    setDiscount(0);
    setCashReceived("");
    setError(null);

    if (cartId) {
      await clearCart(cartId);
    }
  }, [cartId]);

  // ─── Hold cart ─────────────────────────────────────────────────────────────

  const handleHoldCart = useCallback(async () => {
    if (!cartId || cartLines.length === 0) return;
    const note = window.prompt(t("holdCartNote") || "Note pour ce panier (optionnel) :");
    if (note === null) return; // cancelled

    setIsPending(true);
    const result = await holdCart(cartId, note || undefined, 1440);
    setIsPending(false);

    if (result && "error" in result) {
      setError(result.error);
    } else {
      setCartId(null);
      setCartLines([]);
      setDiscount(0);
      setCashReceived("");
      setSelectedCustomer(null);
      setDebtEnabled(false);
      setError(null);
    }
  }, [cartId, cartLines, t]);

  // ─── Resume cart ───────────────────────────────────────────────────────────

  const handleOpenHeldCarts = useCallback(async () => {
    setLoadingHeld(true);
    const carts = await listHeldCarts();
    setHeldCarts(carts);
    setShowHeldCarts(true);
    setLoadingHeld(false);
  }, []);

  const handleResumeCart = useCallback(async (heldCartId: string) => {
    setIsPending(true);
    const loaded = await resumeCart(heldCartId);
    setIsPending(false);

    if (loaded) {
      setCartId(loaded.id);
      setCartLines(loaded.lines);
      setDiscount(loaded.discountAmount);
      if (loaded.customerId && loaded.customerName) {
        setSelectedCustomer({ id: loaded.customerId, name: loaded.customerName, phone: "", totalDebt: 0 });
      } else {
        setSelectedCustomer(null);
      }
      setCashReceived("");
      setDebtEnabled(false);
      setError(null);
      setShowHeldCarts(false);
    }
  }, []);

  const handleReleaseCart = useCallback(async (heldCartId: string) => {
    if (!window.confirm(t("releaseCartConfirm") || "Annuler ce panier en attente ?")) return;
    await releaseCart(heldCartId);
    setHeldCarts((prev) => prev.filter((c) => c.id !== heldCartId));
  }, [t]);

  // ─── Checkout ──────────────────────────────────────────────────────────────

  const handleCheckout = async () => {
    if (cartLines.length === 0) {
      setError(t("cartEmpty"));
      return;
    }

    if (!debtEnabled || !selectedCustomer) {
      if (typeof cashReceived !== "number" || cashReceived < total) {
        setError(t("insufficientCash", { amount: total.toFixed(2) }));
        return;
      }
    } else {
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
      // Mark cart as completed
      if (cartId) {
        await completeCart(cartId);
      }
      setSaleConfirmation(result);
      setIsCheckingOut(false);
    }
  };

  const handleNewSale = useCallback(async () => {
    setSaleConfirmation(null);
    setCartLines([]);
    setDiscount(0);
    setCashReceived("");
    setSelectedCustomer(null);
    setDebtEnabled(false);
    setError(null);
    // Create new active cart
    setIsPending(true);
    const active = await getOrCreateActiveCart();
    if (active) {
      setCartId(active.id);
    }
    setIsPending(false);
    router.refresh();
  }, [router]);

  const handleCustomerSelect = useCallback((c: NamedCustomerResult | null) => {
    setSelectedCustomer(c);
    if (!c) setDebtEnabled(false);
    if (c) {
      persistCustomer(c.id);
    } else {
      persistCustomer(null);
    }
  }, [persistCustomer]);

  // ─── Mode tabs ─────────────────────────────────────────────────────────────

  const modeTabs = (
    <div className="mb-4 flex flex-wrap items-center gap-2 rounded-md border border-border bg-card p-2 shadow-[var(--shadow-sm)]">
      <button
        type="button"
        onClick={() => setMode("sale")}
        className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition ${
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
          className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition ${
            mode === "repair"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Wrench className="h-4 w-4" />
          Réparation POS
        </button>
      )}
      <div className="ms-auto flex items-center gap-2">
        <button
          type="button"
          onClick={handleOpenHeldCarts}
          disabled={loadingHeld}
          className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50"
        >
          <PlayCircle className="h-3.5 w-3.5" />
          {t("resumeCart") || "Reprendre"}
        </button>
        <p className="hidden text-xs text-muted-foreground md:block">
          Créez une vente rapide ou ouvrez un ticket réparation depuis la caisse.
        </p>
      </div>
    </div>
  );

  // ─── Guards ────────────────────────────────────────────────────────────────

  if (!hasOpenSession) {
    return (
      <div className="max-w-md mx-auto mt-10 rounded-md border border-border bg-card p-8 text-center shadow-[var(--shadow-sm)]">
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

  // ─── Held carts panel ──────────────────────────────────────────────────────

  if (showHeldCarts) {
    return (
      <div className="space-y-4">
        {modeTabs}
        <div className="rounded-md border border-border bg-card p-4 shadow-[var(--shadow-sm)]">
          <h3 className="text-lg font-bold mb-4">
            {t("heldCarts") || "Paniers en attente"}
          </h3>
          {heldCarts.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              {t("noHeldCarts") || "Aucun panier en attente"}
            </p>
          ) : (
            <div className="space-y-2">
              {heldCarts.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between rounded-md border border-border bg-card p-3 hover:bg-muted/30 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {c.customerName ?? (t("walkIn") || "Passage")}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {c.itemCount} art. · {c.lineCount} lignes
                      </span>
                    </div>
                    {c.note && (
                      <p className="text-xs text-muted-foreground truncate mt-0.5">{c.note}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {new Date(c.heldAt).toLocaleString("fr-DZ")}
                    </p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-sm font-bold">{c.total.toFixed(2)} DZD</div>
                    <div className="flex items-center gap-1 mt-1">
                      <button
                        onClick={() => handleResumeCart(c.id)}
                        className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <PlayCircle className="h-3 w-3" />
                        {t("resume") || "Reprendre"}
                      </button>
                      <button
                        onClick={() => handleReleaseCart(c.id)}
                        className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-destructive transition-colors"
                      >
                        {t("cancel") || "Annuler"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => setShowHeldCarts(false)}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground"
          >
            {t("back") || "Retour"}
          </button>
        </div>
      </div>
    );
  }

  // ─── Main POS interface ────────────────────────────────────────────────────

  return (
    <div className="space-y-4">
      {modeTabs}
      {isPending && (
        <div className="flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Chargement du panier…
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-5 h-[calc(100vh-210px)]">
      {/* Left: Item search (3/5) */}
      <div className="flex flex-col min-h-0">
        <ItemSearch onAddToCart={handleAddToCart} cartLines={cartLines} />
      </div>

      {/* Right: Cart + Checkout (2/5) */}
      <div className="rounded-md border border-border bg-card p-4 flex flex-col min-h-0 shadow-[var(--shadow-sm)]">
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
              onSelect={handleCustomerSelect}
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
                  onChange={(e) => {
                    const val = e.target.value ? parseFloat(e.target.value) : 0;
                    setDiscount(val);
                    persistDiscount(val);
                  }}
                  className="h-9 w-32 rounded-md border border-input bg-card px-3 text-sm text-right"
                  placeholder="0.00"
                />
              </div>
            )}

            {/* Total */}
            <div className="rounded-md bg-surface-sunken p-3">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold">{t("total")}</span>
                <span className="text-2xl font-black" style={{ color: "var(--pos-total-fg)" }}>
                  {total.toFixed(2)} DZD
                </span>
              </div>
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
                className="flex h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-lg font-bold ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="0.00"
              />
            </div>

            {/* Debt Preview */}
            {isDebtMode && (
              <div className="p-3 rounded-md border text-center" style={{ backgroundColor: "var(--debt-partial-bg)", color: "var(--debt-partial-fg)", borderColor: "var(--debt-active-border)" }}>
                <span className="text-xs font-medium block">
                  {t("remainingDebt")}
                </span>
                <span className="text-xl font-black">
                  {debtAmount.toFixed(2)} DZD
                </span>
              </div>
            )}

            {/* Change display */}
            {!isDebtMode && typeof cashReceived === "number" && cashReceived > 0 && (
              <div
                className="p-3 rounded-md text-center border"
                style={{
                  backgroundColor: change >= 0 ? "var(--pos-cash-in-bg)" : "var(--pos-cash-out-bg)",
                  borderColor: change >= 0 ? "var(--status-ready-border)" : "var(--status-norepair-border)",
                }}
              >
                <span className="text-xs font-medium text-muted-foreground block">
                  {t("changeDue")}
                </span>
                <span
                  className="text-xl font-black"
                  style={{ color: change >= 0 ? "var(--pos-change-fg)" : "var(--pos-cash-out-fg)" }}
                >
                  {change >= 0 ? change.toFixed(2) : "—"} DZD
                </span>
              </div>
            )}

            {/* Debt Toggle */}
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
              <div className="rounded-md border border-[var(--status-norepair-border)] bg-[var(--status-norepair-bg)] p-3 text-sm text-[var(--status-norepair-fg)]">
                {error}
              </div>
            )}

            {/* Hold + Checkout buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleHoldCart}
                disabled={isPending || cartLines.length === 0}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-border px-4 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PauseCircle className="h-4 w-4" />
                {t("holdCart") || "Mettre en attente"}
              </button>
              <button
                onClick={handleCheckout}
                disabled={
                  isCheckingOut ||
                  cartLines.length === 0 ||
                  (typeof cashReceived !== "number") ||
                  (!debtEnabled && cashReceived < total)
                }
                className="inline-flex h-12 flex-[2] items-center justify-center rounded-md bg-primary px-4 text-base font-bold text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : null}
                {isDebtMode
                  ? t("checkoutWithDebt", { amount: debtAmount.toFixed(0) })
                  : t("checkoutAmount", { amount: total.toFixed(0) })}
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
      </div>
    </div>
  );
}
