"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, AlertTriangle } from "lucide-react";
import { closeCashSession, forceCloseCashSession } from "../actions/cash-session.actions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ActiveSessionCard({ session, userRole, currentUserId }: { session: any; userRole: string; currentUserId: string }) {
  const router = useRouter();
  
  const [isClosing, setIsClosing] = useState(false);
  const [countedCash, setCountedCash] = useState<number | "">("");
  const [closeNotes, setCloseNotes] = useState("");
  
  const [isForceClosing, setIsForceClosing] = useState(false);
  const [forceCloseNote, setForceCloseNote] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canClose = session.openedByUserId === currentUserId || userRole === "Admin" || userRole === "Manager";
  const canForceClose = userRole === "Admin" || userRole === "Manager";

  const handleClose = async (e: React.FormEvent) => {
    e.preventDefault();
    if (countedCash === "" || countedCash < 0) {
      setError("Veuillez entrer un montant valide (≥ 0)");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const res = await closeCashSession(session.id, Number(countedCash), closeNotes);
    
    if (res && "error" in res) {
      setError(res.error);
      setIsSubmitting(false);
    } else {
      router.refresh();
    }
  };

  const handleForceClose = async (e: React.FormEvent) => {
    e.preventDefault();
    if (countedCash === "" || countedCash < 0) {
      setError("Veuillez entrer un montant valide (≥ 0)");
      return;
    }
    if (!forceCloseNote.trim()) {
      setError("Une note explicative est obligatoire");
      return;
    }

    if (!confirm("Êtes-vous sûr de vouloir forcer la fermeture de cette caisse ?")) return;

    setIsSubmitting(true);
    setError(null);

    const res = await forceCloseCashSession(session.id, Number(countedCash), forceCloseNote);
    
    if (res && "error" in res) {
      setError(res.error);
      setIsSubmitting(false);
    } else {
      router.refresh();
    }
  };

  // Expected is statically mapped to opening cash for MVP.
  const expectedCash = Number(session.expectedCashAmount);
  const variance = typeof countedCash === "number" ? countedCash - expectedCash : null;

  return (
    <div className="space-y-6">
      {/* Session Summary Card */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-900 overflow-hidden">
        <div className="px-6 py-4 bg-emerald-100 dark:bg-emerald-900/40 border-b border-emerald-200 dark:border-emerald-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">Caisse Ouverte</h3>
          </div>
          <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-200 dark:bg-emerald-800/50 px-2 py-1 rounded-full">
            Session en cours
          </span>
        </div>
        
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Ouverte par</p>
            <p className="font-semibold">{session.openedBy.name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Date d&apos;ouverture</p>
            <p className="font-semibold">{new Date(session.openedAt).toLocaleString("fr-FR")}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Espèces d&apos;ouverture</p>
            <p className="font-semibold text-lg">{Number(session.openingCashAmount).toFixed(2)} DZD</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Espèces attendues</p>
            <p className="font-bold text-xl text-emerald-600 dark:text-emerald-400">{expectedCash.toFixed(2)} DZD</p>
          </div>
        </div>

        {session.notes && (
          <div className="px-6 pb-6">
            <p className="text-sm font-medium text-muted-foreground">Notes d&apos;ouverture</p>
            <p className="text-sm italic">{session.notes}</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      {!isClosing && !isForceClosing && (
        <div className="flex flex-wrap gap-4">
          {canClose && (
            <button
              onClick={() => setIsClosing(true)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <Lock className="h-4 w-4" />
              Fermer la caisse
            </button>
          )}
          
          {canForceClose && session.openedByUserId !== currentUserId && (
            <button
              onClick={() => setIsForceClosing(true)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-destructive bg-transparent px-6 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
            >
              <AlertTriangle className="h-4 w-4" />
              Fermeture forcée
            </button>
          )}
        </div>
      )}

      {/* Close Forms */}
      {(isClosing || isForceClosing) && (
        <div className="max-w-xl rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between border-b pb-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              {isForceClosing ? (
                <><AlertTriangle className="h-5 w-5 text-destructive" /> Fermeture Forcée</>
              ) : (
                <><Lock className="h-5 w-5" /> Fermer la caisse</>
              )}
            </h3>
            <button
              onClick={() => {
                setIsClosing(false);
                setIsForceClosing(false);
                setError(null);
                setCountedCash("");
              }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Annuler
            </button>
          </div>

          <form onSubmit={isForceClosing ? handleForceClose : handleClose} className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Espèces attendues</label>
                <div className="h-10 px-3 py-2 bg-muted/50 rounded-md border text-sm font-bold flex items-center">
                  {expectedCash.toFixed(2)} DZD
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="countedCash" className="text-sm font-bold">Espèces comptées (DZD)</label>
                <input
                  id="countedCash"
                  type="number"
                  step="0.01"
                  min="0"
                  required
                  value={countedCash}
                  onChange={(e) => setCountedCash(e.target.value ? parseFloat(e.target.value) : "")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="0.00"
                />
              </div>
            </div>

            {variance !== null && (
              <div className={`p-4 rounded-lg flex items-center justify-between border ${variance === 0 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : variance > 0 ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                <span className="font-medium">Écart de caisse :</span>
                <span className="font-bold text-lg">
                  {variance > 0 ? "+" : ""}{variance.toFixed(2)} DZD
                </span>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="closeNotes" className="text-sm font-medium">
                {isForceClosing ? "Raison de la fermeture forcée (Obligatoire)" : "Notes (Optionnel)"}
              </label>
              <textarea
                id="closeNotes"
                required={isForceClosing}
                value={isForceClosing ? forceCloseNote : closeNotes}
                onChange={(e) => isForceClosing ? setForceCloseNote(e.target.value) : setCloseNotes(e.target.value)}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder={isForceClosing ? "Veuillez expliquer pourquoi vous forcez la fermeture..." : "Observations éventuelles..."}
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 ${isForceClosing ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'}`}
              >
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isForceClosing ? "Confirmer la fermeture forcée" : "Valider la fermeture"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
