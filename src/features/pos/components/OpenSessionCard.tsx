"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, DollarSign } from "lucide-react";
import { openCashSession } from "../actions/cash-session.actions";
import { useTranslations } from "next-intl";

export function OpenSessionCard() {
  const t = useTranslations("pos");
  const router = useRouter();
  const [openingCash, setOpeningCash] = useState<number | "">("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (openingCash === "" || openingCash < 0) {
      setError(t("validAmount"));
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const res = await openCashSession(Number(openingCash), notes);
    
    if ("error" in res) {
      setError(res.error);
      setIsSubmitting(false);
    } else {
      router.refresh();
      // Keep submitting true while page reloads
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-col items-center justify-center space-y-3 mb-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <DollarSign className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{t("openSessionTitle")}</h2>
          <p className="text-sm text-muted-foreground">
            {t("openSessionDescription")}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="openingCash" className="text-sm font-medium">
            {t("openingCash")}
          </label>
          <input
            id="openingCash"
            type="number"
            step="0.01"
            min="0"
            required
            value={openingCash}
            onChange={(e) => setOpeningCash(e.target.value ? parseFloat(e.target.value) : "")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="0.00"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="text-sm font-medium">
            {t("notesOptional")}
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder={t("openingNotesPlaceholder")}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <DollarSign className="mr-2 h-4 w-4" />
          )}
          {t("openCashRegisterButton")}
        </button>
      </form>
    </div>
  );
}
