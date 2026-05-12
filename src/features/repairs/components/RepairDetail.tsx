"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Ban,
  Check,
  FileText,
  History,
  Link as LinkIcon,
  Lock,
  MessageCircle,
  Package,
  Printer,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Truck,
  User as UserIcon,
  Wrench,
} from "lucide-react";
import type { RepairStatus } from "@prisma/client";
import { cn, formatCurrency, toSafeNumber } from "@/lib/utils";
import { RepairStatusBadge } from "@/components/ui/repair-status-badge";
import { PriorityBadge } from "@/components/ui/priority-badge";
import { changeRepairTicketStatus, assignTechnician } from "../actions/repair.actions";
import { getRepairStatusLabel } from "../i18n";
import { useRepairI18n } from "./RepairLanguageSwitcher";

const STATUS_KEYS: RepairStatus[] = [
  "received",
  "in_diagnosis",
  "waiting_customer_approval",
  "in_repair",
  "ready_for_pickup",
  "completed",
  "not_repaired",
];

type ReservedPart = {
  id: string;
  quantity: number;
  status: string;
  part: { name: string; sku: string; sellingPrice: { toNumber: () => number } | number | string };
};

type EstimateSummary = {
  id: string;
  status: string;
  estimateNumber: string;
  totalAmount: number;
  acceptedAt: Date | null;
  lines: Array<{ id: string; description: string; totalPrice: number }>;
};

export function RepairDetail({
  ticket,
  technicians,
  userRole,
  reservedParts = [],
  estimates = [],
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ticket: any;
  technicians: Array<{ id: string; name: string }>;
  userRole: string;
  reservedParts?: ReservedPart[];
  estimates?: EstimateSummary[];
}) {
  const router = useRouter();
  const { locale, dir, t, formatDate, formatDateTime } = useRepairI18n();
  const [isChangingStatus, setIsChangingStatus] = useState(false);

  const handleStatusChange = async (newStatus: RepairStatus) => {
    if (newStatus === ticket.currentStatus) return;
    setIsChangingStatus(true);
    await changeRepairTicketStatus(ticket.id, { newStatus, note: "" });
    setIsChangingStatus(false);
    router.refresh();
  };

  const handleAssign = async (technicianId: string) => {
    await assignTechnician(ticket.id, technicianId || null);
    router.refresh();
  };

  const deviceName =
    [
      ticket.deviceBrand?.name ?? ticket.customerDevice?.customBrand ?? ticket.customDeviceBrand,
      ticket.deviceFamily?.name ?? ticket.customerDevice?.customModel ?? ticket.customDeviceModel,
    ]
      .filter(Boolean)
      .join(" ") ||
    ticket.customerDevice?.deviceTypeName ||
    t("unknownDevice");

  const acceptedEstimate =
    estimates.find((estimate) => estimate.status === "accepted") ?? estimates[0] ?? null;
  const customerPhone = ticket.customer.phones?.[0]?.phoneNumber;
  const currentStatusIndex = STATUS_KEYS.indexOf(ticket.currentStatus);
  const deviceCategory = ticket.deviceCategory?.nameFr ?? ticket.customerDevice?.deviceTypeName ?? t("device");

  return (
    <div dir={dir} lang={locale} className="rd-page">
      <div className="rd-topbar">
        <button type="button" onClick={() => router.push("/dashboard/repairs")} className="rd-back">
          <ArrowLeft className="h-3.5 w-3.5" />
          Retour
        </button>
        <span className="rd-crumb">
          Réparations / <span>{ticket.ticketNumber}</span>
        </span>
        <div className="rd-actions">
          <Link href={`/dashboard/repairs/${ticket.id}/ticket-receipt`} target="_blank" className="rd-btn">
            <Printer className="h-3.5 w-3.5" />
            Imprimer
          </Link>
          <Link href={`/dashboard/repairs/${ticket.id}/label`} target="_blank" className="rd-btn">
            <FileText className="h-3.5 w-3.5" />
            Étiquette
          </Link>
          <button
            type="button"
            className="rd-btn rd-btn-destructive"
            disabled={isChangingStatus}
            onClick={() => handleStatusChange("not_repaired")}
          >
            <Ban className="h-3.5 w-3.5" />
            Non réparé
          </button>
          <button
            type="button"
            className="rd-btn rd-btn-primary"
            disabled={isChangingStatus}
            onClick={() => handleStatusChange("completed")}
          >
            <Check className="h-3.5 w-3.5" />
            Marquer livré
          </button>
        </div>
      </div>

      <div className="rd-content">
        <div className="rd-left">
          <section className="rd-hero">
            <div className="rd-hero-body">
              <div className="rd-hero-icon">
                <Smartphone />
              </div>
              <div className="rd-hero-text">
                <div className="rd-hero-num">Ticket · {ticket.ticketNumber}</div>
                <div className="rd-hero-title">{deviceName}</div>
                <div className="rd-hero-sub">
                  {t("createdOnBy", { date: formatDate(ticket.createdAt), name: ticket.createdBy.name })}
                </div>
              </div>
              <div className="rd-hero-right">
                <RepairStatusBadge status={ticket.currentStatus} />
                <PriorityBadge priority={ticket.priority} />
              </div>
            </div>
            <div className="rd-hero-attrs">
              <div className="rd-hattr">
                <div className="rd-hattr-label">Catégorie</div>
                <div className="rd-hattr-val">{deviceCategory}</div>
              </div>
              <div className="rd-hattr">
                <div className="rd-hattr-label">Marque / modèle</div>
                <div className="rd-hattr-val">{deviceName}</div>
              </div>
              <div className="rd-hattr">
                <div className="rd-hattr-label">Technicien(s)</div>
                <div className="flex flex-wrap gap-1.5">
                  {ticket.technicians && ticket.technicians.length > 0
                    ? ticket.technicians.map((tt: { id: string; user: { id: string; name: string }; role: string }) => (
                        <span key={tt.id} className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-[13px] font-medium text-primary">
                          {tt.user.name}
                          {tt.role === "lead" && (
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/60">Lead</span>
                          )}
                        </span>
                      ))
                    : ticket.assignedTechnician?.name ? (
                      <span className="rd-hattr-val blue">{ticket.assignedTechnician.name}</span>
                    ) : (
                      <span className="rd-hattr-val">{t("unassigned")}</span>
                    )}
                </div>
              </div>
              <div className="rd-hattr">
                <div className="rd-hattr-label">Date limite</div>
                <div className="rd-hattr-val">{ticket.dueAt ? formatDate(ticket.dueAt) : "—"}</div>
              </div>
            </div>
          </section>

          <section className="rd-card">
            <div className="rd-card-header">
              <div className="rd-card-title">
                <Package className="h-[15px] w-[15px]" />
                Problèmes signalés
              </div>
            </div>
            <div className="rd-problems">
              {ticket.problems.map((problem: { id: string; problemText: string }) => (
                <span key={problem.id} className="rd-problem-tag">
                  {problem.problemText}
                </span>
              ))}
            </div>
          </section>

          <section className="rd-card">
            <div className="rd-card-header">
              <div className="rd-card-title">
                <Package className="h-[15px] w-[15px]" />
                Pièces réservées
              </div>
            </div>
            <div className="px-4 pb-1">
              <table className="w-full table-fixed border-collapse">
                <thead>
                  <tr className="border-b border-border text-start text-[12px] font-semibold uppercase tracking-[0.04em] text-[#a1a1aa]">
                    <th className="w-[55%] py-2 text-start">Pièce</th>
                    <th className="w-[10%] py-2 text-start">Qté</th>
                    <th className="w-[20%] py-2 text-start">Prix unit.</th>
                    <th className="w-[15%] py-2 text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {reservedParts.length ? (
                    reservedParts.map((reservation) => {
                      const unitPrice = toSafeNumber(reservation.part.sellingPrice);
                      return (
                        <tr key={reservation.id} className="border-b border-border last:border-b-0 text-[14px]">
                          <td className="py-2.5">
                            <div className="font-medium text-foreground">
                              {reservation.part.name}
                              <span className="ms-1 inline-flex items-center gap-1 rounded bg-[var(--status-inrepair-bg)] px-1.5 py-0.5 text-[12px] font-medium text-[var(--status-inrepair-fg)]">
                                <Lock className="h-2.5 w-2.5" />
                                Réservé
                              </span>
                            </div>
                            <div className="mt-0.5 text-[12px] text-[#a1a1aa]">{reservation.part.sku}</div>
                          </td>
                          <td className="py-2.5 text-[#52525b]">{reservation.quantity}</td>
                          <td className="py-2.5 text-[#52525b]">{formatCurrency(unitPrice)}</td>
                          <td className="py-2.5 text-end font-semibold">{formatCurrency(unitPrice * reservation.quantity)}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-4 text-[14px] text-muted-foreground">
                        Aucune pièce réservée.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {(ticket.internalNotes || ticket.diagnosisNote) && (
            <section className="rd-card">
              <div className="rd-card-header">
                <div className="rd-card-title">
                  <FileText className="h-[15px] w-[15px]" />
                  Notes technicien
                </div>
              </div>
              <div className="py-3">
                <div className="rd-notes-body">
                  {[ticket.diagnosisNote, ticket.internalNotes].filter(Boolean).join("\n\n")}
                </div>
              </div>
            </section>
          )}

          <section className="rd-card">
            <div className="rd-card-header">
              <div className="rd-card-title">
                <History className="h-[15px] w-[15px]" />
                Historique
              </div>
            </div>
            <div className="rd-timeline">
              {ticket.statusHistory.map(
                (history: {
                  id: string;
                  newStatus: RepairStatus;
                  createdAt: Date;
                  note: string | null;
                  changedBy: { name: string };
                }, index: number) => (
                  <div key={history.id} className="rd-tl">
                    <div className={cn("rd-tl-icon", index === 0 ? "active" : "done")}>
                      {index === 0 ? <Wrench className="h-3.5 w-3.5" /> : <Check className="h-3.5 w-3.5" />}
                    </div>
                    <div className="rd-tl-content">
                      <div className="rd-tl-title">
                        {getRepairStatusLabel(history.newStatus, locale)}
                      </div>
                      <div className="rd-tl-time">
                        {history.changedBy.name} · {formatDateTime(history.createdAt)}
                      </div>
                      {history.note && <div className="rd-tl-note">{history.note}</div>}
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        </div>

        <aside className="rd-right">
          <section className="rd-side-card">
            <div className="rd-side-head">
              <UserIcon className="h-3.5 w-3.5" />
              Cliente
            </div>
            <div className="rd-side-body">
              <div className="rd-customer-row">
                <div className="rd-customer-avatar">
                  {ticket.customer.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word: string) => word[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="rd-customer-name">{ticket.customer.name}</div>
                  <div className="rd-customer-phone">{customerPhone ?? "—"}</div>
                </div>
              </div>
              <hr className="rd-side-divider" />
              <div className="rd-side-row">
                <Smartphone className="h-3.5 w-3.5" />
                <div>
                  <div className="rd-side-label">Appareil</div>
                  <div className="rd-side-val">{deviceName}</div>
                </div>
              </div>
              <div className="rd-side-row">
                <ShieldCheck className="h-3.5 w-3.5" />
                <div>
                  <div className="rd-side-label">Garantie ticket</div>
                  <div className="rd-side-val blue">{ticket.warrantyDays ? `${ticket.warrantyDays} jours` : "—"}</div>
                </div>
              </div>
              <div className="mt-2 flex gap-1.5">
                <Link href={`/dashboard/customers/${ticket.customerId}`} className="rd-btn flex-1 px-2 text-[13px]">
                  <UserIcon className="h-3.5 w-3.5" />
                  Profil
                </Link>
                <Link href={`/dashboard/customers/${ticket.customerId}`} className="rd-btn flex-1 px-2 text-[13px]">
                  <History className="h-3.5 w-3.5" />
                  Historique
                </Link>
              </div>
            </div>
          </section>

          <section className="rd-side-card">
            <div className="rd-side-head">
              <RefreshCw className="h-3.5 w-3.5" />
              Avancer le statut
            </div>
            <div className="rd-stepper">
              {STATUS_KEYS.slice(0, 6).map((status, index) => {
                const current = status === ticket.currentStatus;
                const done = index < currentStatusIndex;
                return (
                  <button
                    key={status}
                    type="button"
                    disabled={isChangingStatus}
                    onClick={() => handleStatusChange(status)}
                    className={cn("rd-step", current && "current", done && "done")}
                  >
                    <span className="rd-step-node" />
                    {getRepairStatusLabel(status, locale)}
                    {done && <Check className="ms-auto h-3 w-3 text-success" />}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="rd-side-card">
            <div className="rd-side-head">
              <ReceiptText className="h-3.5 w-3.5" />
              Devis accepté
            </div>
            <div className="rd-side-body">
              {acceptedEstimate ? (
                <div className="rounded-md border border-border bg-muted p-3">
                  {acceptedEstimate.lines.slice(0, 3).map((line) => (
                    <div key={line.id} className="flex justify-between py-0.5 text-[14px] text-[#52525b]">
                      <span className="truncate pe-2">{line.description}</span>
                      <span className="shrink-0">{formatCurrency(line.totalPrice)}</span>
                    </div>
                  ))}
                  <div className="mt-1 flex justify-between border-t border-border pt-2 text-[15px] font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(acceptedEstimate.totalAmount)}</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-[var(--status-inrepair-bg)] px-2 py-0.5 text-[12px] font-semibold text-[var(--status-inrepair-fg)]">
                    <Check className="h-2.5 w-2.5" />
                    {acceptedEstimate.status === "accepted" ? "Accepté" : acceptedEstimate.estimateNumber}
                  </div>
                </div>
              ) : (
                <div className="rounded-md border border-border bg-muted p-3 text-[14px] text-muted-foreground">
                  Aucun devis disponible.
                </div>
              )}
            </div>
          </section>

          <section className="rd-side-card">
            <div className="rd-side-head">
              <MessageCircle className="h-3.5 w-3.5 text-[var(--wa-green)]" />
              WhatsApp
            </div>
            <div className="rd-wa-list">
              <button type="button" className="rd-wa-row">
                <RefreshCw className="h-3.5 w-3.5 text-[var(--wa-green)]" />
                Mise à jour statut
              </button>
              <button type="button" className="rd-wa-row">
                <LinkIcon className="h-3.5 w-3.5" />
                Renvoyer lien devis
              </button>
              <button type="button" className="rd-wa-row">
                <Truck className="h-3.5 w-3.5 text-[var(--wa-green)]" />
                Prêt à livrer
              </button>
            </div>
          </section>

          {userRole !== "Technician" && (
            <section className="rd-side-card">
              <div className="rd-side-head">
                <Wrench className="h-3.5 w-3.5" />
                Assignation
              </div>
              <div className="rd-side-body">
                <select
                  value={ticket.assignedTechnicianId || ""}
                  onChange={(event) => handleAssign(event.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-card px-3 text-[14px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">{t("unassigned")}</option>
                  {technicians.map((technician) => (
                    <option key={technician.id} value={technician.id}>
                      {technician.name}
                    </option>
                  ))}
                </select>
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}
