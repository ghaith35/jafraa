"use client";

import Link from "next/link";
import { Wrench, Calendar, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getRepairStatusLabel } from "../i18n";
import { useRepairI18n } from "./RepairLanguageSwitcher";

// Infer type from action return
 /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ 
type RepairTicket = any; // simplified for rapid UI

interface Props {
  tickets: RepairTicket[];
  userRole: string;
}

const STATUS_CLASSES: Record<string, string> = {
  received: "bg-blue-100 text-blue-800 border-blue-200",
  in_diagnosis: "bg-purple-100 text-purple-800 border-purple-200",
  waiting_customer_approval: "bg-cyan-100 text-cyan-800 border-cyan-200",
  in_repair: "bg-amber-100 text-amber-800 border-amber-200",
  ready_for_pickup: "bg-emerald-100 text-emerald-800 border-emerald-200",
  completed: "bg-gray-100 text-gray-800 border-gray-200",
  not_repaired: "bg-red-100 text-red-800 border-red-200",
};

export function RepairList({ tickets, userRole }: Props) {
  const { locale, dir, t, formatDate } = useRepairI18n();

  if (tickets.length === 0) {
    return (
      <div dir={dir} lang={locale} className="space-y-4">
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
          <div className="mb-4 rounded-full bg-muted p-3">
            <Wrench className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="text-sm font-medium text-foreground">{t("repairList_emptyTitle")}</p>
          <p className="mt-1 text-sm text-muted-foreground max-w-sm">
            {userRole === "Technician" ? t("repairList_emptyTechnician") : t("repairList_emptyStaff")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div dir={dir} lang={locale} className="space-y-4">
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-start">
            <thead className="bg-muted/50 text-muted-foreground text-xs uppercase font-medium">
              <tr>
                <th className="px-4 py-3 text-start">{t("repairList_ticketDevice")}</th>
                <th className="px-4 py-3 text-start">{t("customer")}</th>
                <th className="px-4 py-3 text-start">{t("status")}</th>
                <th className="px-4 py-3 text-start">{t("repairList_technician")}</th>
                <th className="px-4 py-3 text-start">{t("date")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tickets.map((ticket) => {
                const cfg = {
                  label: getRepairStatusLabel(ticket.currentStatus, locale),
                  cls: STATUS_CLASSES[ticket.currentStatus] || "bg-gray-100 text-gray-800",
                };
                const isRush = ticket.priority === "rush";
                
                let deviceName = t("unknownDevice");
                if (ticket.customerDevice) {
                  deviceName = ticket.customerDevice.customModel || ticket.customerDevice.deviceTypeName || t("customerDevice");
                } else if (ticket.customDeviceModel) {
                  deviceName = `${ticket.customDeviceBrand ? ticket.customDeviceBrand + " " : ""}${ticket.customDeviceModel}`;
                } else if (ticket.deviceFamily) {
                  deviceName = ticket.deviceFamily.name;
                }

                return (
                  <tr key={ticket.id} className="hover:bg-accent/30 transition-colors">
                    <td className="px-4 py-3 min-w-[200px]">
                      <div className="flex flex-col">
                        <Link href={`/dashboard/repairs/${ticket.id}`} className="font-semibold text-primary hover:underline flex items-center gap-1.5">
                          {ticket.ticketNumber}
                          {isRush && <AlertTriangle className="h-3 w-3 text-destructive" />}
                        </Link>
                        <span className="text-xs text-muted-foreground mt-0.5">{deviceName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{ticket.customer.name}</span>
                        <span className="text-xs text-muted-foreground">{ticket.customer.phones?.[0]?.phoneNumber || "---"}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={cn("inline-flex items-center px-2 py-0.5 rounded border text-xs font-medium", cfg.cls)}>
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                      {ticket.assignedTechnician?.name || t("unassigned")}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                      <div className="flex flex-col gap-0.5">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatDate(ticket.createdAt)}</span>
                        {ticket.dueAt && (
                          <span className="flex items-center gap-1 text-xs text-amber-600">
                            <Clock className="h-3 w-3" /> {t("repairList_due", { date: formatDate(ticket.dueAt) })}
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
    </div>
  );
}
