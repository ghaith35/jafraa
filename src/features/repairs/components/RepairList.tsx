"use client";

import Link from "next/link";
import { Wrench, Calendar, Clock, Smartphone } from "lucide-react";
import type { RepairPriority, RepairStatus } from "@prisma/client";
import { RepairStatusBadge } from "@/components/ui/repair-status-badge";
import { PriorityBadge } from "@/components/ui/priority-badge";
import { useRepairI18n } from "./RepairLanguageSwitcher";

type RepairTicket = {
  id: string;
  ticketNumber: string;
  currentStatus: RepairStatus;
  priority: RepairPriority;
  customDeviceBrand: string | null;
  customDeviceModel: string | null;
  createdAt: Date;
  dueAt: Date | null;
  customer: { name: string; phones: Array<{ phoneNumber: string }> };
  customerDevice: { customModel: string | null; deviceTypeName: string | null } | null;
  deviceFamily: { name: string } | null;
  assignedTechnician: { name: string } | null;
};

interface Props {
  tickets: RepairTicket[];
  userRole: string;
}

export function RepairList({ tickets, userRole }: Props) {
  const { locale, dir, t, formatDate } = useRepairI18n();

  if (tickets.length === 0) {
    return (
      <div dir={dir} lang={locale} className="space-y-4">
        <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-border bg-card p-10 text-center shadow-[var(--shadow-sm)]">
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
      <div className="overflow-hidden rounded-md border border-border bg-card shadow-[var(--shadow-sm)]">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-start text-[12px]">
            <thead className="bg-surface-sunken text-[10px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">
              <tr>
                <th className="w-[34%] px-4 py-3 text-start">{t("repairList_ticketDevice")}</th>
                <th className="w-[20%] px-4 py-3 text-start">{t("customer")}</th>
                <th className="w-[16%] px-4 py-3 text-start">{t("status")}</th>
                <th className="w-[14%] px-4 py-3 text-start">{t("repairList_technician")}</th>
                <th className="w-[16%] px-4 py-3 text-start">{t("date")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tickets.map((ticket) => {
                let deviceName = t("unknownDevice");
                if (ticket.customerDevice) {
                  deviceName = ticket.customerDevice.customModel || ticket.customerDevice.deviceTypeName || t("customerDevice");
                } else if (ticket.customDeviceModel) {
                  deviceName = `${ticket.customDeviceBrand ? ticket.customDeviceBrand + " " : ""}${ticket.customDeviceModel}`;
                } else if (ticket.deviceFamily) {
                  deviceName = ticket.deviceFamily.name;
                }

                return (
                  <tr key={ticket.id} className="transition-colors hover:bg-muted/60">
                    <td className="px-4 py-3 min-w-[200px]">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                          <Smartphone className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <Link href={`/dashboard/repairs/${ticket.id}`} className="font-semibold text-primary hover:underline">
                            {ticket.ticketNumber}
                          </Link>
                          <div className="mt-1 flex min-w-0 items-center gap-2">
                            <span className="truncate text-[11px] text-muted-foreground">{deviceName}</span>
                            {ticket.priority === "rush" && <PriorityBadge priority={ticket.priority} />}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{ticket.customer.name}</span>
                        <span className="text-xs text-muted-foreground">{ticket.customer.phones?.[0]?.phoneNumber || "---"}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <RepairStatusBadge status={ticket.currentStatus} />
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
