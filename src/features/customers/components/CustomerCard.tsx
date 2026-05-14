"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Archive, Layers, MapPin, ExternalLink, Wrench, Hash, Smartphone, CircleDollarSign, Clock, ArrowUpRight } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { getCustomerFullDetail } from "../actions/customer.actions";

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #6366f1, #4f46e5)",
  "linear-gradient(135deg, #ec4899, #db2777)",
  "linear-gradient(135deg, #14b8a6, #0d9488)",
  "linear-gradient(135deg, #f59e0b, #d97706)",
  "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  "linear-gradient(135deg, #ef4444, #dc2626)",
  "linear-gradient(135deg, #06b6d4, #0891b2)",
  "linear-gradient(135deg, #84cc16, #65a30d)",
];

const LANG_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  fr: { label: "FR", color: "var(--primary)", bg: "var(--primary)/10" },
  ar: { label: "AR", color: "var(--s-ready-tx)", bg: "var(--s-ready-bg)" },
  en: { label: "EN", color: "var(--s-inrepair-tx)", bg: "var(--s-inrepair-bg)" },
};

const STATUS_STYLES: Record<string, { bg: string; fg: string }> = {
  received: { bg: "var(--status-received-bg)", fg: "var(--status-received-fg)" },
  in_diagnosis: { bg: "var(--status-diagnosis-bg)", fg: "var(--status-diagnosis-fg)" },
  waiting_customer_approval: { bg: "var(--status-waiting-bg)", fg: "var(--status-waiting-fg)" },
  in_repair: { bg: "var(--status-inrepair-bg)", fg: "var(--status-inrepair-fg)" },
  ready_for_pickup: { bg: "var(--status-ready-bg)", fg: "var(--status-ready-fg)" },
  completed: { bg: "#f0fdf4", fg: "#166534" },
  not_repaired: { bg: "#fef2f2", fg: "#991b1b" },
};

function initials(name: string): string {
  return name.split(" ").slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("");
}

function avatarGradient(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_GRADIENTS[Math.abs(hash) % AVATAR_GRADIENTS.length];
}

function formatCurrency(v: number) {
  return `${Math.round(v).toLocaleString()} DZD`;
}

interface CustomerData {
  id: string;
  name: string;
  customerType: string;
  languagePreference: string;
  address: string | null;
  notes: string | null;
  cnasNumber: string | null;
  casnosNumber: string | null;
  isArchived: boolean;
  createdAt: Date;
  phones: { phoneNumber: string; isPrimary: boolean; note: string | null }[];
  customerGroup: { id: string; name: string } | null;
  debtBalance: { totalDebt: number } | null;
  _count: { repairTickets: number; assets: number };
}

interface Props { customer: CustomerData; }

export function CustomerCard({ customer: c }: Props) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"info" | "tickets" | "assets" | "debt">("info");
  const [fullData, setFullData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { t, formatDate } = useAppI18n();

  useEffect(() => {
    if (open && !fullData && !loading) {
      setLoading(true);
      getCustomerFullDetail(c.id).then((data) => { setFullData(data); setLoading(false); });
    }
  }, [open, c.id, fullData, loading]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}
        className="group relative rounded-xl border border-border bg-surface p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden text-start w-full"
      >
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/[0.03] to-transparent" />
        <div className="relative flex items-start gap-3">
          <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ background: avatarGradient(c.name) }}>
            <span className="text-sm font-bold text-white">{initials(c.name)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">{c.name}</span>
              {c.isArchived && (
                <span className="inline-flex items-center gap-0.5 rounded-full border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  <Archive className="h-2.5 w-2.5" />{t("customers.archived")}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground flex-wrap">
              {c.phones[0] ? (
                <span className="inline-flex items-center gap-1 font-mono text-[11px]"><Phone className="h-2.5 w-2.5" />{c.phones[0].phoneNumber}</span>
              ) : (
                <span className="italic text-muted-foreground/60">{t("customers.noPhone")}</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {c.customerGroup && (
                <span className="inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  <Layers className="h-2.5 w-2.5" />{c.customerGroup.name}
                </span>
              )}
              <span className="inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                <Wrench className="h-2.5 w-2.5" />{c._count.repairTickets}
              </span>
              <LangBadge code={c.languagePreference} />
              <span className="text-[10px] text-muted-foreground/60">{formatDate(c.createdAt)}</span>
            </div>
          </div>
        </div>
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} className="max-w-2xl">
        <div className="max-h-[85vh] overflow-y-auto px-0.5 space-y-4">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 shadow-md" style={{ background: avatarGradient(c.name) }}>
              <span className="text-xl font-bold text-white">{initials(c.name)}</span>
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg font-bold text-foreground truncate">{c.name}</h2>
                {c.isArchived && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    <Archive className="h-3 w-3" />{t("customers.archived")}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 capitalize">{c.customerType}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-border pb-0.5">
            {([["info", "Info"], ["tickets", "Tickets"], ["assets", "Appareils"], ["debt", "Dette"]] as const).map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)}
                className={cn("px-3 py-1.5 text-xs font-medium rounded-t-md transition-colors", tab === key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted")}
              >{label}</button>
            ))}
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12 text-sm text-muted-foreground">Chargement...</div>
          ) : tab === "info" ? (
            <InfoTab c={c} formatDate={formatDate} />
          ) : tab === "tickets" ? (
            <TicketsTab data={fullData} formatDate={formatDate} />
          ) : tab === "assets" ? (
            <AssetsTab data={fullData} />
          ) : (
            <DebtTab c={c} data={fullData} formatDate={formatDate} />
          )}

          {/* Footer */}
          <div className="flex items-center gap-2 pt-3 border-t border-border">
            <Link href={`/dashboard/customers/${c.id}`} onClick={() => setOpen(false)}
              className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />Fiche client complète
            </Link>
            <Button variant="outline" onClick={() => setOpen(false)} className="h-9 px-3">{t("common.close")}</Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

function InfoTab({ c, formatDate }: { c: CustomerData; formatDate: any }) {
  const { t } = useAppI18n();
  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-border bg-surface p-3 text-center">
          <p className="text-lg font-bold text-foreground">{c._count.repairTickets}</p>
          <p className="text-[10px] text-muted-foreground">{t("customers.title")}</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3 text-center">
          <p className="text-lg font-bold text-foreground">{c._count.assets}</p>
          <p className="text-[10px] text-muted-foreground">{t("customers.asset.devices")}</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3 text-center">
          <p className={cn("text-lg font-bold", (c.debtBalance?.totalDebt ?? 0) > 0 ? "text-red-500" : "text-green-500")}>
            {c.debtBalance ? formatCurrency(Number(c.debtBalance.totalDebt)) : "0 DZD"}
          </p>
          <p className="text-[10px] text-muted-foreground">{t("customers.customerDebt")}</p>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">{t("customers.phone")}</h3>
        <div className="space-y-1.5">
          {c.phones.map((p, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <Phone className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <span className="font-mono text-sm text-foreground">{p.phoneNumber}</span>
              {p.isPrimary && <span className="text-[10px] font-medium text-primary bg-primary/10 rounded-full px-1.5 py-0.5">Princ.</span>}
              {p.note && <span className="text-xs text-muted-foreground">— {p.note}</span>}
            </div>
          ))}
          {c.phones.length === 0 && <p className="text-xs italic text-muted-foreground">{t("customers.noPhone")}</p>}
        </div>
      </div>

      {/* IDs & Address */}
      {(c.cnasNumber || c.casnosNumber || c.address) && (
        <div>
          <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Identifiants</h3>
          <div className="space-y-1.5">
            {c.cnasNumber && <div className="flex items-center gap-2 text-sm"><Hash className="h-3.5 w-3.5 text-muted-foreground shrink-0" /><span className="text-xs text-muted-foreground">CNAS:</span><span className="font-mono text-sm text-foreground">{c.cnasNumber}</span></div>}
            {c.casnosNumber && <div className="flex items-center gap-2 text-sm"><Hash className="h-3.5 w-3.5 text-muted-foreground shrink-0" /><span className="text-xs text-muted-foreground">CASNOS:</span><span className="font-mono text-sm text-foreground">{c.casnosNumber}</span></div>}
            {c.address && <div className="flex items-start gap-2 text-sm"><MapPin className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" /><span className="text-sm text-foreground">{c.address}</span></div>}
          </div>
        </div>
      )}

      {/* Group & Meta */}
      <div>
        <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">{t("customers.group")}</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {c.customerGroup ? (
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
              <Layers className="h-3 w-3 text-muted-foreground" />{c.customerGroup.name}
            </span>
          ) : <span className="text-xs text-muted-foreground italic">{t("customers.noGroup")}</span>}
          <LangBadge code={c.languagePreference} />
          <span className="text-xs text-muted-foreground">{t("customers.createdAt")} {formatDate(c.createdAt)}</span>
        </div>
      </div>

      {c.notes && (
        <div>
          <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">Notes</h3>
          <p className="text-sm text-foreground whitespace-pre-wrap rounded-lg bg-muted/50 p-3">{c.notes}</p>
        </div>
      )}
    </div>
  );
}

function TicketsTab({ data, formatDate }: { data: any; formatDate: any }) {
  const tickets = data?.recentTickets ?? [];
  return (
    <div>
      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Derniers tickets ({tickets.length})</h3>
      {tickets.length === 0 ? (
        <p className="text-sm text-muted-foreground italic py-4 text-center">Aucun ticket</p>
      ) : (
        <div className="space-y-1">
          {tickets.map((t: any) => {
            const st = STATUS_STYLES[t.currentStatus] ?? { bg: "var(--muted)", fg: "var(--text-secondary)" };
            const device = [t.deviceBrand?.name, t.deviceFamily?.name].filter(Boolean).join(" ") || t.customerDevice?.customBrand || t.customerDevice?.deviceTypeName || "—";
            return (
              <Link key={t.id} href={`/dashboard/repairs/${t.id}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5 text-sm hover:bg-muted/50 transition-colors group"
              >
                <Wrench className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <span className="font-semibold text-primary min-w-[80px]">{t.ticketNumber}</span>
                <span className="flex-1 truncate text-muted-foreground text-xs">{device}</span>
                <span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: st.bg, color: st.fg }}>{t.currentStatus.replace(/_/g, " ")}</span>
                {t.assignedTechnician && <span className="text-xs text-muted-foreground hidden sm:inline">{t.assignedTechnician.name}</span>}
                <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AssetsTab({ data }: { data: any }) {
  const assets = data?.assets ?? [];
  return (
    <div>
      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Appareils ({assets.length})</h3>
      {assets.length === 0 ? (
        <p className="text-sm text-muted-foreground italic py-4 text-center">Aucun appareil</p>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2">
          {assets.map((a: any) => (
            <div key={a.id} className="rounded-lg border border-border bg-surface p-3 text-sm">
              <div className="flex items-center gap-2 mb-1">
                <Smartphone className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <span className="font-semibold text-foreground truncate">{deviceName2(a)}</span>
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted-foreground">
                {a.categoryName && <span>{a.categoryName}</span>}
                {a.color && <span>Couleur: {a.color}</span>}
                {a.storage && <span>{a.storage}</span>}
                {a.imeiSerial && <span className="font-mono">IMEI: {a.imeiSerial}</span>}
              </div>
              {a.notes && <p className="text-xs text-muted-foreground mt-1 truncate">{a.notes}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DebtTab({ c, data, formatDate }: { c: CustomerData; data: any; formatDate: any }) {
  const entries = data?.debtEntries ?? [];
  const totalDebt = c.debtBalance?.totalDebt ?? 0;
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">Dette</h3>
        <p className={cn("text-lg font-bold", totalDebt > 0 ? "text-red-500" : "text-green-500")}>{formatCurrency(Number(totalDebt))}</p>
      </div>
      {entries.length === 0 ? (
        <p className="text-sm text-muted-foreground italic py-4 text-center">Aucune transaction</p>
      ) : (
        <div className="space-y-0.5 max-h-60 overflow-y-auto">
          {entries.map((d: any) => (
            <div key={d.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2 text-sm">
              <div className="flex items-center gap-2 min-w-0">
                <CircleDollarSign className={cn("h-3.5 w-3.5 shrink-0", d.direction === "debit" ? "text-red-400" : "text-green-400")} />
                <span className="text-xs text-muted-foreground capitalize">{d.type.replace(/_/g, " ")}</span>
                {d.note && <span className="text-xs text-muted-foreground truncate">— {d.note}</span>}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className={cn("font-semibold text-sm", d.direction === "debit" ? "text-red-500" : "text-green-500")}>
                  {d.direction === "debit" ? "+" : "-"}{formatCurrency(Number(d.amount))}
                </span>
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground">{formatDate(d.createdAt)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-3">
        <Link href={`/dashboard/customers/${c.id}`} className="text-xs font-medium text-primary hover:underline">Gérer la dette →</Link>
      </div>
    </div>
  );
}

function deviceName2(a: any): string {
  return [a.brandName || a.customBrand, a.familyName || a.customModel].filter(Boolean).join(" ") || a.deviceTypeName || "Appareil";
}

function LangBadge({ code }: { code: string }) {
  const cfg = LANG_LABELS[code];
  if (!cfg) return null;
  return (
    <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
      style={{ backgroundColor: cfg.bg, color: cfg.color }}>
      {cfg.label}
    </span>
  );
}
