"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User as UserIcon, Phone, Tag, AlertTriangle, Calendar, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { changeRepairTicketStatus, assignTechnician } from "../actions/repair.actions";
import { WhatsAppSendButton } from "../../whatsapp/components/WhatsAppSendButton";
import type { RepairStatus } from "@prisma/client";
import { getRepairStatusLabel } from "../i18n";
import { useRepairI18n } from "./RepairLanguageSwitcher";

const STATUS_CLASSES: Record<string, string> = {
  received: "bg-blue-100 text-blue-800 border-blue-200",
  in_diagnosis: "bg-purple-100 text-purple-800 border-purple-200",
  waiting_customer_approval: "bg-cyan-100 text-cyan-800 border-cyan-200",
  in_repair: "bg-amber-100 text-amber-800 border-amber-200",
  ready_for_pickup: "bg-emerald-100 text-emerald-800 border-emerald-200",
  completed: "bg-gray-100 text-gray-800 border-gray-200",
  not_repaired: "bg-red-100 text-red-800 border-red-200",
};

const STATUS_KEYS = [
  "received",
  "in_diagnosis",
  "waiting_customer_approval",
  "in_repair",
  "ready_for_pickup",
  "completed",
  "not_repaired",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RepairDetail({ ticket, technicians, userRole }: { ticket: any, technicians: Array<{ id: string, name: string }>, userRole: string }) {
  const router = useRouter();
  const { locale, dir, t, formatDate, formatDateTime } = useRepairI18n();
  const [isChangingStatus, setIsChangingStatus] = useState(false);
  
  const handleStatusChange = async (newStatus: string) => {
    if (newStatus === ticket.currentStatus) return;
    setIsChangingStatus(true);
    await changeRepairTicketStatus(ticket.id, { newStatus: newStatus as RepairStatus, note: "" });
    setIsChangingStatus(false);
    router.refresh();
  };

  const handleAssign = async (technicianId: string) => {
    await assignTechnician(ticket.id, technicianId || null);
    router.refresh();
  };

  const isRush = ticket.priority === "rush";
  const cfg = {
    label: getRepairStatusLabel(ticket.currentStatus, locale),
    cls: STATUS_CLASSES[ticket.currentStatus] || "bg-gray-100 text-gray-800",
  };

  let deviceName = t("unknownDevice");
  if (ticket.customerDevice) {
    deviceName = ticket.customerDevice.customModel || ticket.customerDevice.deviceTypeName || t("customerDevice");
  } else if (ticket.customDeviceModel) {
    deviceName = `${ticket.customDeviceBrand ? ticket.customDeviceBrand + " " : ""}${ticket.customDeviceModel}`;
  } else if (ticket.deviceFamily) {
    deviceName = ticket.deviceFamily.name;
  }

  const resolutionLabel = (status: string) => {
    if (status === "fixed") return t("resolution_fixed");
    if (status === "pending") return t("resolution_pending");
    if (status === "unresolved") return t("resolution_unresolved");
    return status;
  };

  return (
    <div dir={dir} lang={locale} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/dashboard/repairs")}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">{ticket.ticketNumber}</h1>
              <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full border text-xs font-semibold", cfg.cls)}>
                {cfg.label}
              </span>
              {isRush && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-destructive/20 bg-destructive/10 text-destructive text-xs font-semibold">
                  <AlertTriangle className="h-3 w-3" /> {t("urgent")}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {t("createdOnBy", { date: formatDate(ticket.createdAt), name: ticket.createdBy.name })}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          {userRole !== "Technician" && (
            <select
              value={ticket.assignedTechnicianId || ""}
              onChange={(e) => handleAssign(e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="">{t("unassigned")}</option>
              {technicians.map((technician: { id: string, name: string }) => (
                <option key={technician.id} value={technician.id}>{technician.name}</option>
              ))}
            </select>
          )}

          <select
            value={ticket.currentStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
            disabled={isChangingStatus}
            className="h-9 rounded-md border border-input bg-primary text-primary-foreground px-3 py-1 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
          >
            {STATUS_KEYS.map((key) => (
              <option key={key} value={key}>{getRepairStatusLabel(key, locale)}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              {t("detail_reportedProblems")}
            </h3>
            <ul className="space-y-3">
              {ticket.problems.map((problem: { id: string, problemText: string, resolutionStatus: string }) => (
                <li key={problem.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                  <CheckCircle className={cn("h-5 w-5 mt-0.5", problem.resolutionStatus === "fixed" ? "text-emerald-500" : "text-muted-foreground")} />
                  <div>
                    <p className="text-sm font-medium">{problem.problemText}</p>
                    <p className="text-xs text-muted-foreground mt-1">{resolutionLabel(problem.resolutionStatus)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {(ticket.internalNotes || ticket.diagnosisNote) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ticket.internalNotes && (
                <div className="rounded-xl border border-border bg-amber-50/50 dark:bg-amber-950/20 p-5">
                  <h3 className="font-semibold text-sm text-amber-800 dark:text-amber-400 mb-2">{t("detail_internalNotes")}</h3>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{ticket.internalNotes}</p>
                </div>
              )}
              {ticket.diagnosisNote && (
                <div className="rounded-xl border border-border bg-blue-50/50 dark:bg-blue-950/20 p-5">
                  <h3 className="font-semibold text-sm text-blue-800 dark:text-blue-400 mb-2">{t("detail_diagnosisNote")}</h3>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{ticket.diagnosisNote}</p>
                </div>
              )}
            </div>
          )}

          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              {t("detail_statusHistory")}
            </h3>
            <div className="relative border-s border-border ms-3 space-y-6">
              {ticket.statusHistory.map((history: { id: string, newStatus: string, createdAt: Date, note: string | null, changedBy: { name: string } }) => (
                <div key={history.id} className="relative ps-6">
                  <span className="absolute -start-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary ring-1 ring-border" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {t("movedToStatus", { status: getRepairStatusLabel(history.newStatus, locale) })}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t("onDateBy", { date: formatDateTime(history.createdAt), name: history.changedBy.name })}
                    </span>
                    {history.note && <p className="text-sm text-muted-foreground mt-1 italic">&quot;{history.note}&quot;</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="bg-muted/50 px-5 py-3 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-sm">{t("customer")}</h3>
              <Link href={`/dashboard/customers/${ticket.customerId}`} className="text-xs text-primary hover:underline">
                {t("view")}
              </Link>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <UserIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">{ticket.customer.name}</p>
                  {ticket.customer.phones?.[0] && (
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Phone className="h-3 w-3" /> {ticket.customer.phones[0].phoneNumber}
                      </p>
                      <WhatsAppSendButton
                        ticketId={ticket.id}
                        storeId={ticket.storeId}
                        customerId={ticket.customerId}
                        type={ticket.currentStatus === "ready_for_pickup" ? "ready" : "received"}
                        variant="icon"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="bg-muted/50 px-5 py-3 border-b border-border">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {t("device")}
              </h3>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <p className="text-lg font-semibold">{deviceName}</p>
                {(ticket.deviceColor || ticket.customerDevice?.color) && (
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {t("color")}: {ticket.deviceColor || ticket.customerDevice?.color}
                  </p>
                )}
              </div>
              <div className="pt-3 border-t border-border grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">{t("imeiSerial")}</p>
                  <p className="text-sm font-medium">{ticket.imeiSerial || ticket.customerDevice?.imeiSerial || "---"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t("password")}</p>
                  <p className="text-sm font-medium">---</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
