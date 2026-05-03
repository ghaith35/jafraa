"use client";

import Link from "next/link";
import { Wrench, Calendar, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

// Infer type from action return
 /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ 
type RepairTicket = any; // simplified for rapid UI

interface Props {
  tickets: RepairTicket[];
  userRole: string;
}

const STATUS_CONFIG: Record<string, { label: string; cls: string }> = {
  received: { label: "Reçu", cls: "bg-blue-100 text-blue-800 border-blue-200" },
  in_diagnosis: { label: "En diagnostic", cls: "bg-purple-100 text-purple-800 border-purple-200" },
  in_repair: { label: "En réparation", cls: "bg-amber-100 text-amber-800 border-amber-200" },
  ready_for_pickup: { label: "Prêt", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  completed: { label: "Terminé", cls: "bg-gray-100 text-gray-800 border-gray-200" },
  not_repaired: { label: "Non réparé", cls: "bg-red-100 text-red-800 border-red-200" },
};

function formatDate(d: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(d));
}

export function RepairList({ tickets, userRole }: Props) {
  if (tickets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-3">
          <Wrench className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">Aucun ticket de réparation</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">
          {userRole === "Technician" 
            ? "Vous n'avez aucun ticket assigné pour le moment." 
            : "Commencez par créer un nouveau ticket pour un client."}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 text-muted-foreground text-xs uppercase font-medium">
            <tr>
              <th className="px-4 py-3">Ticket / Appareil</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Technicien</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {tickets.map((t) => {
              const cfg = STATUS_CONFIG[t.currentStatus] || { label: t.currentStatus, cls: "bg-gray-100 text-gray-800" };
              const isRush = t.priority === "rush";
              
              // Device name formatting
              let deviceName = "Appareil inconnu";
              if (t.customerDevice) {
                deviceName = t.customerDevice.customModel || t.customerDevice.deviceTypeName || "Appareil client";
              } else if (t.customDeviceModel) {
                deviceName = `${t.customDeviceBrand ? t.customDeviceBrand + ' ' : ''}${t.customDeviceModel}`;
              } else if (t.deviceFamily) {
                deviceName = t.deviceFamily.name;
              }

              return (
                <tr key={t.id} className="hover:bg-accent/30 transition-colors">
                  <td className="px-4 py-3 min-w-[200px]">
                    <div className="flex flex-col">
                      <Link href={`/dashboard/repairs/${t.id}`} className="font-semibold text-primary hover:underline flex items-center gap-1.5">
                        {t.ticketNumber}
                        {isRush && <AlertTriangle className="h-3 w-3 text-destructive" />}
                      </Link>
                      <span className="text-xs text-muted-foreground mt-0.5">{deviceName}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground">{t.customer.name}</span>
                      <span className="text-xs text-muted-foreground">{t.customer.phones?.[0]?.phoneNumber || "---"}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={cn("inline-flex items-center px-2 py-0.5 rounded border text-xs font-medium", cfg.cls)}>
                      {cfg.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                    {t.assignedTechnician?.name || "Non assigné"}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                    <div className="flex flex-col gap-0.5">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatDate(t.createdAt)}</span>
                      {t.dueAt && (
                        <span className="flex items-center gap-1 text-xs text-amber-600">
                          <Clock className="h-3 w-3" /> Échéance: {formatDate(t.dueAt)}
                        </span>
                      )}
                    </div>
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
