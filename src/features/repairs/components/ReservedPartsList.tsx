"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PackageCheck, PackageX, Loader2, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { releaseReservedPart } from "../actions/reservation.actions";

const STATUS_CONFIG: Record<string, { label: string; cls: string }> = {
  reserved: { label: "Réservée", cls: "bg-amber-100 text-amber-800 border-amber-200" },
  released: { label: "Libérée", cls: "bg-gray-100 text-gray-600 border-gray-200" },
  used: { label: "Utilisée", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ReservedPartsList({ parts, userRole }: { parts: any[]; userRole: string }) {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [showReleased, setShowReleased] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeParts = parts.filter((p: any) => p.status === "reserved");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const releasedParts = parts.filter((p: any) => p.status === "released" || p.status === "used");

  const handleRelease = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir libérer cette réservation ?")) return;
    setLoadingId(id);
    const res = await releaseReservedPart(id);
    if (res && "error" in res) {
      alert(res.error);
    }
    setLoadingId(null);
    router.refresh();
  };

  if (parts.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-8 text-center bg-muted/20">
        <p className="text-muted-foreground text-sm">Aucune pièce réservée pour ce ticket.</p>
      </div>
    );
  }

  // Suppress cost for Technician/Cashier
  const showPrice = userRole === "Admin" || userRole === "Manager";

  return (
    <div className="space-y-4">
      {/* Active Reservations */}
      {activeParts.length > 0 && (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/30 text-xs uppercase text-muted-foreground border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium">Pièce</th>
                <th className="px-4 py-3 font-medium">SKU</th>
                <th className="px-4 py-3 font-medium text-center">Qté</th>
                {showPrice && <th className="px-4 py-3 font-medium text-right">Prix vente</th>}
                <th className="px-4 py-3 font-medium">Réservé par</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {activeParts.map((p: any) => {
                const cfg = STATUS_CONFIG[p.status] || STATUS_CONFIG.reserved;
                return (
                  <tr key={p.id} className="bg-background">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <PackageCheck className="h-4 w-4 text-amber-500 shrink-0" />
                        <span className="font-medium">{p.part.name}</span>
                        <span className={cn("inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border", cfg.cls)}>
                          {cfg.label}
                        </span>
                      </div>
                      {p.note && <p className="text-xs text-muted-foreground mt-1 italic">{p.note}</p>}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{p.part.sku}</td>
                    <td className="px-4 py-3 text-center font-semibold">{p.quantity}</td>
                    {showPrice && <td className="px-4 py-3 text-right">{Number(p.part.sellingPrice).toFixed(2)} DZD</td>}
                    <td className="px-4 py-3 text-xs">{p.reservedBy.name}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{new Date(p.createdAt).toLocaleDateString("fr-FR")}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleRelease(p.id)}
                        disabled={loadingId !== null}
                        className="inline-flex h-7 items-center justify-center gap-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 px-2.5 text-xs font-medium transition-colors border border-gray-200"
                      >
                        {loadingId === p.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <PackageX className="h-3 w-3" />}
                        Libérer
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Released History */}
      {releasedParts.length > 0 && (
        <div>
          <button
            onClick={() => setShowReleased(!showReleased)}
            className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium"
          >
            {showReleased ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            Historique ({releasedParts.length} libérée{releasedParts.length > 1 ? "s" : ""})
          </button>

          {showReleased && (
            <div className="mt-2 rounded-xl border border-border bg-muted/20 overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-4 py-2 font-medium">Pièce</th>
                    <th className="px-4 py-2 font-medium text-center">Qté</th>
                    <th className="px-4 py-2 font-medium">Statut</th>
                    <th className="px-4 py-2 font-medium">Libéré par</th>
                    <th className="px-4 py-2 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {releasedParts.map((p: any) => {
                    const cfg = STATUS_CONFIG[p.status] || STATUS_CONFIG.released;
                    return (
                      <tr key={p.id} className="opacity-60">
                        <td className="px-4 py-2">{p.part.name}</td>
                        <td className="px-4 py-2 text-center">{p.quantity}</td>
                        <td className="px-4 py-2">
                          <span className={cn("inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border", cfg.cls)}>
                            {cfg.label}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-xs">{p.releasedBy?.name || "—"}</td>
                        <td className="px-4 py-2 text-xs text-muted-foreground">
                          {p.releasedAt ? new Date(p.releasedAt).toLocaleDateString("fr-FR") : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
