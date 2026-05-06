"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PackageCheck, PackageX, Loader2, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { releaseReservedPart } from "../actions/reservation.actions";
import { getPartStatusLabel } from "../i18n";
import { useRepairI18n } from "./RepairLanguageSwitcher";

const STATUS_CLASSES: Record<string, string> = {
  reserved: "bg-amber-100 text-amber-800 border-amber-200",
  released: "bg-gray-100 text-gray-600 border-gray-200",
  used: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ReservedPartsList({ parts, userRole }: { parts: any[]; userRole: string }) {
  const router = useRouter();
  const { locale, t, trMessage, formatDate } = useRepairI18n();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [showReleased, setShowReleased] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeParts = parts.filter((part: any) => part.status === "reserved");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const releasedParts = parts.filter((part: any) => part.status === "released" || part.status === "used");

  const handleRelease = async (id: string) => {
    if (!confirm(t("parts_confirmRelease"))) return;
    setLoadingId(id);
    const res = await releaseReservedPart(id);
    if (res && "error" in res) {
      alert(trMessage(res.error));
    }
    setLoadingId(null);
    router.refresh();
  };

  if (parts.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-8 text-center bg-muted/20">
        <p className="text-muted-foreground text-sm">{t("parts_none")}</p>
      </div>
    );
  }

  const showPrice = userRole === "Admin" || userRole === "Manager";

  return (
    <div className="space-y-4">
      {activeParts.length > 0 && (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <table className="w-full text-sm text-start">
            <thead className="bg-muted/30 text-xs uppercase text-muted-foreground border-b border-border">
              <tr>
                <th className="px-4 py-3 font-medium text-start">{t("parts_part")}</th>
                <th className="px-4 py-3 font-medium text-start">{t("sku")}</th>
                <th className="px-4 py-3 font-medium text-center">{t("quantityShort")}</th>
                {showPrice && <th className="px-4 py-3 font-medium text-end">{t("parts_salePrice")}</th>}
                <th className="px-4 py-3 font-medium text-start">{t("parts_reservedBy")}</th>
                <th className="px-4 py-3 font-medium text-start">{t("date")}</th>
                <th className="px-4 py-3 font-medium text-center">{t("action")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {activeParts.map((part: any) => {
                const cfg = {
                  label: getPartStatusLabel(part.status, locale),
                  cls: STATUS_CLASSES[part.status] || STATUS_CLASSES.reserved,
                };
                return (
                  <tr key={part.id} className="bg-background">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <PackageCheck className="h-4 w-4 text-amber-500 shrink-0" />
                        <span className="font-medium">{part.part.name}</span>
                        <span className={cn("inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border", cfg.cls)}>
                          {cfg.label}
                        </span>
                      </div>
                      {part.note && <p className="text-xs text-muted-foreground mt-1 italic">{part.note}</p>}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{part.part.sku}</td>
                    <td className="px-4 py-3 text-center font-semibold">{part.quantity}</td>
                    {showPrice && <td className="px-4 py-3 text-end">{Number(part.part.sellingPrice).toFixed(2)} DZD</td>}
                    <td className="px-4 py-3 text-xs">{part.reservedBy.name}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{formatDate(part.createdAt)}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleRelease(part.id)}
                        disabled={loadingId !== null}
                        className="inline-flex h-7 items-center justify-center gap-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 px-2.5 text-xs font-medium transition-colors border border-gray-200"
                      >
                        {loadingId === part.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <PackageX className="h-3 w-3" />}
                        {t("parts_release")}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {releasedParts.length > 0 && (
        <div>
          <button
            onClick={() => setShowReleased(!showReleased)}
            className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium"
          >
            {showReleased ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            {t("parts_history", { count: releasedParts.length })}
          </button>

          {showReleased && (
            <div className="mt-2 rounded-xl border border-border bg-muted/20 overflow-hidden">
              <table className="w-full text-sm text-start">
                <thead className="text-xs uppercase text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-4 py-2 font-medium text-start">{t("parts_part")}</th>
                    <th className="px-4 py-2 font-medium text-center">{t("quantityShort")}</th>
                    <th className="px-4 py-2 font-medium text-start">{t("status")}</th>
                    <th className="px-4 py-2 font-medium text-start">{t("parts_releasedBy")}</th>
                    <th className="px-4 py-2 font-medium text-start">{t("date")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {releasedParts.map((part: any) => {
                    const cfg = {
                      label: getPartStatusLabel(part.status, locale),
                      cls: STATUS_CLASSES[part.status] || STATUS_CLASSES.released,
                    };
                    return (
                      <tr key={part.id} className="opacity-60">
                        <td className="px-4 py-2">{part.part.name}</td>
                        <td className="px-4 py-2 text-center">{part.quantity}</td>
                        <td className="px-4 py-2">
                          <span className={cn("inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border", cfg.cls)}>
                            {cfg.label}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-xs">{part.releasedBy?.name || "—"}</td>
                        <td className="px-4 py-2 text-xs text-muted-foreground">
                          {part.releasedAt ? formatDate(part.releasedAt) : "—"}
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
