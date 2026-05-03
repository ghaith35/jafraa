"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User as UserIcon, Phone, Tag, AlertTriangle, Calendar, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { changeRepairTicketStatus, assignTechnician } from "../actions/repair.actions";
import type { RepairStatus } from "@prisma/client";

const STATUS_CONFIG: Record<string, { label: string; cls: string }> = {
  received: { label: "Reçu", cls: "bg-blue-100 text-blue-800 border-blue-200" },
  in_diagnosis: { label: "En diagnostic", cls: "bg-purple-100 text-purple-800 border-purple-200" },
  in_repair: { label: "En réparation", cls: "bg-amber-100 text-amber-800 border-amber-200" },
  ready_for_pickup: { label: "Prêt", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  completed: { label: "Terminé", cls: "bg-gray-100 text-gray-800 border-gray-200" },
  not_repaired: { label: "Non réparé", cls: "bg-red-100 text-red-800 border-red-200" },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RepairDetail({ ticket, technicians, userRole }: { ticket: any, technicians: Array<{ id: string, name: string }>, userRole: string }) {
  const router = useRouter();
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
  const cfg = STATUS_CONFIG[ticket.currentStatus] || { label: ticket.currentStatus, cls: "bg-gray-100 text-gray-800" };

  let deviceName = "Appareil inconnu";
  if (ticket.customerDevice) {
    deviceName = ticket.customerDevice.customModel || ticket.customerDevice.deviceTypeName || "Appareil client";
  } else if (ticket.customDeviceModel) {
    deviceName = `${ticket.customDeviceBrand ? ticket.customDeviceBrand + " " : ""}${ticket.customDeviceModel}`;
  } else if (ticket.deviceFamily) {
    deviceName = ticket.deviceFamily.name;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/dashboard/repairs")}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">{ticket.ticketNumber}</h1>
              <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full border text-xs font-semibold", cfg.cls)}>
                {cfg.label}
              </span>
              {isRush && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-destructive/20 bg-destructive/10 text-destructive text-xs font-semibold">
                  <AlertTriangle className="h-3 w-3" /> Urgent
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">Créé le {new Date(ticket.createdAt).toLocaleDateString("fr-FR")} par {ticket.createdBy.name}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {userRole !== "Technician" && (
            <select
              value={ticket.assignedTechnicianId || ""}
              onChange={(e) => handleAssign(e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="">Non assigné</option>
              {technicians.map((t: { id: string, name: string }) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          )}

          <select
            value={ticket.currentStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
            disabled={isChangingStatus}
            className="h-9 rounded-md border border-input bg-primary text-primary-foreground px-3 py-1 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
          >
            {Object.entries(STATUS_CONFIG).map(([key, val]) => (
              <option key={key} value={key}>{val.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Problèmes */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Problèmes signalés
            </h3>
            <ul className="space-y-3">
              {ticket.problems.map((p: { id: string, problemText: string, resolutionStatus: string }) => (
                <li key={p.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                  <CheckCircle className={cn("h-5 w-5 mt-0.5", p.resolutionStatus === "fixed" ? "text-emerald-500" : "text-muted-foreground")} />
                  <div>
                    <p className="text-sm font-medium">{p.problemText}</p>
                    <p className="text-xs text-muted-foreground capitalize mt-1">{p.resolutionStatus}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Notes */}
          {(ticket.internalNotes || ticket.diagnosisNote) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ticket.internalNotes && (
                <div className="rounded-xl border border-border bg-amber-50/50 dark:bg-amber-950/20 p-5">
                  <h3 className="font-semibold text-sm text-amber-800 dark:text-amber-400 mb-2">Notes internes</h3>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{ticket.internalNotes}</p>
                </div>
              )}
              {ticket.diagnosisNote && (
                <div className="rounded-xl border border-border bg-blue-50/50 dark:bg-blue-950/20 p-5">
                  <h3 className="font-semibold text-sm text-blue-800 dark:text-blue-400 mb-2">Note de diagnostic</h3>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{ticket.diagnosisNote}</p>
                </div>
              )}
            </div>
          )}

          {/* Historique */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              Historique des statuts
            </h3>
            <div className="relative border-l border-border ml-3 space-y-6">
              {ticket.statusHistory.map((h: { id: string, newStatus: string, createdAt: Date, note: string | null, changedBy: { name: string } }) => (
                <div key={h.id} className="relative pl-6">
                  <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary ring-1 ring-border" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      Passé à <span className="text-primary">{STATUS_CONFIG[h.newStatus]?.label}</span>
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Le {new Date(h.createdAt).toLocaleString("fr-FR")} par {h.changedBy.name}
                    </span>
                    {h.note && <p className="text-sm text-muted-foreground mt-1 italic">&quot;{h.note}&quot;</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Client Info */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="bg-muted/50 px-5 py-3 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-sm">Client</h3>
              <Link href={`/dashboard/customers/${ticket.customerId}`} className="text-xs text-primary hover:underline">
                Voir
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
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Phone className="h-3 w-3" /> {ticket.customer.phones[0].phoneNumber}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Device Info */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="bg-muted/50 px-5 py-3 border-b border-border">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                Appareil
              </h3>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <p className="text-lg font-semibold">{deviceName}</p>
                {(ticket.deviceColor || ticket.customerDevice?.color) && (
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Couleur: {ticket.deviceColor || ticket.customerDevice?.color}
                  </p>
                )}
              </div>
              <div className="pt-3 border-t border-border grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">IMEI / Sérié</p>
                  <p className="text-sm font-medium">{ticket.imeiSerial || ticket.customerDevice?.imeiSerial || "---"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Mot de passe</p>
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
