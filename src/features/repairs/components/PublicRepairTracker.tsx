"use client";

import { FormEvent, useState, useTransition } from "react";
import { AlertCircle, CheckCircle2, Loader2, Search, Ticket } from "lucide-react";
import { trackRepairTicket, type PublicRepairTrackingResult } from "../actions/public-tracking.actions";

function formatDate(value: string | null) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("fr-DZ", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

export function PublicRepairTracker() {
  const [ticketNumber, setTicketNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<PublicRepairTrackingResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setResult(null);
    startTransition(async () => {
      const response = await trackRepairTicket({ ticketNumber, phone, locale: "fr" });
      if ("error" in response) setError(response.error);
      else setResult(response);
    });
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-primary/10 p-3 text-primary">
            <Ticket className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight">Suivi réparation</h1>
            <p className="text-sm text-slate-500">Entrez votre ticket et téléphone pour voir l’état.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-slate-700">Numéro ticket</label>
            <input
              value={ticketNumber}
              onChange={(event) => setTicketNumber(event.target.value)}
              placeholder="R-2026-0001"
              className="h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-bold text-slate-700">Téléphone client</label>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="0550 00 00 00"
              className="h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-black text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 disabled:opacity-60"
          >
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            Suivre le ticket
          </button>
        </form>

        {error && (
          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {error}
          </div>
        )}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
        {!result ? (
          <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
            <CheckCircle2 className="h-10 w-10 text-slate-300" />
            <h2 className="mt-4 text-lg font-black">Résultat du suivi</h2>
            <p className="mt-1 text-sm text-slate-500">Le statut s’affichera ici après vérification.</p>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <p className="font-mono text-xs font-black text-slate-400">{result.ticketNumber}</p>
                <h2 className="mt-1 text-2xl font-black">{result.deviceName}</h2>
                <p className="text-sm text-slate-500">Client: {result.customerName}</p>
              </div>
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-black text-primary">
                {result.statusLabel}
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Info label="Créé le" value={formatDate(result.createdAt)} />
              <Info label="Échéance" value={formatDate(result.dueAt)} />
              <Info label="Garantie" value={result.warrantyDays ? `${result.warrantyDays} jours` : "—"} />
              <Info label="Statut" value={result.statusLabel} />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-black text-slate-700">Problèmes déclarés</h3>
              <div className="space-y-2">
                {result.problems.map((problem) => (
                  <div key={problem} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                    {problem}
                  </div>
                ))}
              </div>
            </div>

            {result.customerNotes && (
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
                {result.customerNotes}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 font-black text-slate-800">{value}</p>
    </div>
  );
}
