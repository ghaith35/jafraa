"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { submitPublicEstimateDecision } from "@/features/estimates/actions/estimate.actions";

export function ApprovalDecisionForm({ token }: { token: string }) {
  const [note, setNote] = useState("");
  const [done, setDone] = useState<"accepted" | "rejected" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const submit = (decision: "accepted" | "rejected") => {
    setError(null);
    startTransition(async () => {
      const res = await submitPublicEstimateDecision({ token, decision, note, userAgent: navigator.userAgent });
      if ("error" in res) setError(res.error);
      else setDone(decision);
    });
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center text-emerald-900">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10" />
        <h2 className="text-xl font-black">Merci, votre décision a été enregistrée.</h2>
        <p className="mt-2 text-sm">Statut: {done === "accepted" ? "Devis accepté" : "Devis refusé"}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error && <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</div>}
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note optionnelle pour l'atelier…"
        className="min-h-24 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <button disabled={pending} onClick={() => submit("accepted")} className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 font-black text-white hover:bg-emerald-700 disabled:opacity-60">
          {pending ? <Loader2 className="h-5 w-5 animate-spin" /> : <CheckCircle2 className="h-5 w-5" />}
          Accepter le devis
        </button>
        <button disabled={pending} onClick={() => submit("rejected")} className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-red-200 bg-white px-5 font-black text-red-700 hover:bg-red-50 disabled:opacity-60">
          <XCircle className="h-5 w-5" />
          Refuser le devis
        </button>
      </div>
    </div>
  );
}
