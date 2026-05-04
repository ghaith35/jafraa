"use client";

import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CashSessionHistory({ sessions }: { sessions: any[] }) {
  if (sessions.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-8 text-center bg-muted/20">
        <p className="text-muted-foreground text-sm">Aucun historique de caisse disponible.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-muted/30 text-xs uppercase text-muted-foreground border-b border-border">
            <tr>
              <th className="px-4 py-3 font-medium">Statut</th>
              <th className="px-4 py-3 font-medium">Ouverte par</th>
              <th className="px-4 py-3 font-medium">Date d&apos;ouverture</th>
              <th className="px-4 py-3 font-medium">Fermée par</th>
              <th className="px-4 py-3 font-medium">Date de fermeture</th>
              <th className="px-4 py-3 font-medium text-right">Espèces d&apos;ouverture</th>
              <th className="px-4 py-3 font-medium text-right">Espèces attendues</th>
              <th className="px-4 py-3 font-medium text-right">Espèces comptées</th>
              <th className="px-4 py-3 font-medium text-right">Écart</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {sessions.map((session: any) => {
              const variance = session.varianceAmount !== null ? Number(session.varianceAmount) : null;
              
              let statusLabel = "Ouverte";
              let statusClass = "bg-emerald-100 text-emerald-800 border-emerald-200";
              
              if (session.status === "closed") {
                statusLabel = "Fermée";
                statusClass = "bg-gray-100 text-gray-800 border-gray-200";
              } else if (session.status === "force_closed") {
                statusLabel = "Fermeture Forcée";
                statusClass = "bg-red-100 text-red-800 border-red-200";
              }

              return (
                <tr key={session.id} className="bg-background hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <span className={cn("inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border", statusClass)}>
                      {statusLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3">{session.openedBy.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{new Date(session.openedAt).toLocaleString("fr-FR")}</td>
                  <td className="px-4 py-3">{session.closedBy?.name || session.forceClosedBy?.name || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground">{session.closedAt ? new Date(session.closedAt).toLocaleString("fr-FR") : "—"}</td>
                  <td className="px-4 py-3 text-right">{Number(session.openingCashAmount).toFixed(2)}</td>
                  <td className="px-4 py-3 text-right">{Number(session.expectedCashAmount).toFixed(2)}</td>
                  <td className="px-4 py-3 text-right font-medium">{session.countedCashAmount !== null ? Number(session.countedCashAmount).toFixed(2) : "—"}</td>
                  <td className="px-4 py-3 text-right">
                    {variance !== null ? (
                      <span className={cn(
                        "font-bold",
                        variance > 0 ? "text-blue-600" : variance < 0 ? "text-red-600" : "text-emerald-600"
                      )}>
                        {variance > 0 ? "+" : ""}{variance.toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
