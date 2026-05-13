"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Smartphone, User as UserIcon } from "lucide-react";
import type { RepairPriority, RepairStatus } from "@prisma/client";
import { RepairStatusBadge } from "@/components/ui/repair-status-badge";
import { PriorityBadge } from "@/components/ui/priority-badge";
import { useRepairI18n } from "./RepairLanguageSwitcher";
import { cn } from "@/lib/utils";

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
  deviceCategory: { nameFr: string } | null;
  deviceBrand: { name: string } | null;
  assignedTechnician: { id: string; name: string } | null;
  technicians: Array<{ id: string; user: { id: string; name: string } }>;
  problems: Array<{ problemText: string }>;
  estimatedPrice: number | null;
};

interface Props {
  tickets: RepairTicket[];
  userRole: string;
}

const STATUS_BORDER: Record<string, string> = {
  received: "border-l-[var(--status-received-fg)]",
  in_diagnosis: "border-l-[var(--status-diagnosis-fg)]",
  waiting_customer_approval: "border-l-[var(--status-waiting-fg)]",
  in_repair: "border-l-[var(--status-inrepair-fg)]",
  ready_for_pickup: "border-l-[var(--status-ready-fg)]",
  completed: "border-l-[var(--status-completed-fg)]",
  not_repaired: "border-l-[var(--status-norepair-fg)]",
};

const STATUS_ROW_BORDER: Record<string, string> = {
  received: "border-s-[3px] border-s-[var(--status-received-fg)]",
  in_diagnosis: "border-s-[3px] border-s-[var(--status-diagnosis-fg)]",
  waiting_customer_approval: "border-s-[3px] border-s-[var(--status-waiting-fg)]",
  in_repair: "border-s-[3px] border-s-[var(--status-inrepair-fg)]",
  ready_for_pickup: "border-s-[3px] border-s-[var(--status-ready-fg)]",
  completed: "border-s-[3px] border-s-[var(--status-completed-fg)]",
  not_repaired: "border-s-[3px] border-s-[var(--status-norepair-fg)]",
};

export function RepairList({ tickets, userRole }: Props) {
  const router = useRouter();
  const { locale, dir, t, formatDate } = useRepairI18n();

  if (tickets.length === 0) {
    return (
      <div dir={dir} lang={locale} className="space-y-4">
        <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-border bg-card p-10 text-center shadow-[var(--shadow-sm)]">
          <div className="mb-4 rounded-full bg-muted p-3">
            <Smartphone className="h-6 w-6 text-muted-foreground" />
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
    <div dir={dir} lang={locale}>
      {/* ─── Mobile: cards ─── */}
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {tickets.map((ticket) => {
          const deviceName = resolveDeviceName(ticket, t);
          const technicianName = ticket.assignedTechnician?.name || ticket.technicians?.[0]?.user?.name || null;
          const previewProblems = ticket.problems.slice(0, 2);

          return (
            <Link
              key={ticket.id}
              href={`/dashboard/repairs/${ticket.id}`}
              className={cn(
                "flex flex-col rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-xs)] transition-all duration-200 hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5",
                "border-l-[3px]",
                STATUS_BORDER[ticket.currentStatus] || "border-l-border"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-muted-foreground">{ticket.ticketNumber}</span>
                    {ticket.priority === "rush" && <PriorityBadge priority={ticket.priority} />}
                  </div>
                </div>
                <RepairStatusBadge status={ticket.currentStatus} className="shrink-0" />
              </div>

              <div className="mt-3 flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Smartphone className="h-4 w-4" />
                </div>
                <span className="truncate text-sm font-semibold text-foreground">{deviceName}</span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm">
                <UserIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <span className="truncate font-medium text-foreground">{ticket.customer.name}</span>
                {ticket.customer.phones?.[0]?.phoneNumber && (
                  <span className="shrink-0 text-xs text-muted-foreground">{ticket.customer.phones[0].phoneNumber}</span>
                )}
              </div>

              {previewProblems.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {previewProblems.map((problem) => (
                    <span key={problem.problemText} className="rounded-md bg-muted px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {problem.problemText}
                    </span>
                  ))}
                  {ticket.problems.length > 2 && <span className="text-[11px] text-muted-foreground">+{ticket.problems.length - 2}</span>}
                </div>
              )}

              <div className="mt-3 border-t border-border/50" />

              <div className="mt-3 flex items-center justify-between gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5 min-w-0">
                  {technicianName ? (
                    <><UserIcon className="h-3 w-3 shrink-0" /><span className="truncate">{technicianName}</span></>
                  ) : (
                    <span className="italic">{t("unassigned")}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDate(ticket.createdAt)}</span>
                  {ticket.dueAt && <span className="flex items-center gap-1 text-amber-600"><Clock className="h-3 w-3" />{formatDate(ticket.dueAt)}</span>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ─── Desktop: table ─── */}
      <div className="hidden md:block">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-xs)]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-left text-[13px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">
                <th className="w-[30%] px-4 py-3 ps-5">{t("repairList_colTicket")}</th>
                <th className="w-[18%] px-4 py-3">{t("repairList_colCustomer")}</th>
                <th className="w-[15%] px-4 py-3">{t("repairList_colProblems")}</th>
                <th className="w-[14%] px-4 py-3">{t("repairList_colStatus")}</th>
                <th className="w-[12%] px-4 py-3">{t("repairList_colTechnician")}</th>
                <th className="w-[11%] px-4 py-3 text-end">{t("repairList_colDates")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {tickets.map((ticket) => {
                const deviceName = resolveDeviceName(ticket, t);
                const technicianName = ticket.assignedTechnician?.name || ticket.technicians?.[0]?.user?.name || null;
                const previewProblems = ticket.problems.slice(0, 2);

                return (
                  <tr
                    key={ticket.id}
                    className={cn(
                      "group cursor-pointer transition-colors hover:bg-muted/40",
                      STATUS_ROW_BORDER[ticket.currentStatus] || ""
                    )}
                    onClick={() => router.push(`/dashboard/repairs/${ticket.id}`)}
                  >
                    <td className="px-4 py-3 ps-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Smartphone className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {ticket.ticketNumber}
                            </span>
                            {ticket.priority === "rush" && <PriorityBadge priority={ticket.priority} />}
                          </div>
                          <div className="mt-0.5 truncate text-[13px] text-muted-foreground">{deviceName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">{ticket.customer.name}</span>
                        {ticket.customer.phones?.[0]?.phoneNumber && (
                          <span className="text-xs text-muted-foreground">{ticket.customer.phones[0].phoneNumber}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {previewProblems.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {previewProblems.map((problem) => (
                            <span key={problem.problemText} className="rounded-md bg-muted px-1.5 py-0.5 text-[12px] font-medium text-muted-foreground truncate max-w-[140px]">
                              {problem.problemText}
                            </span>
                          ))}
                          {ticket.problems.length > 2 && (
                            <span className="text-[12px] text-muted-foreground">+{ticket.problems.length - 2}</span>
                          )}
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground/50">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <RepairStatusBadge status={ticket.currentStatus} />
                    </td>
                    <td className="px-4 py-3">
                      {technicianName ? (
                        <span className="text-sm text-foreground">{technicianName}</span>
                      ) : (
                        <span className="text-sm italic text-muted-foreground">{t("unassigned")}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-end">
                      <div className="flex flex-col items-end gap-0.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDate(ticket.createdAt)}</span>
                        {ticket.dueAt && <span className="flex items-center gap-1 text-amber-600"><Clock className="h-3 w-3" />{formatDate(ticket.dueAt)}</span>}
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

function resolveDeviceName(ticket: RepairTicket, t: (key: any) => string): string {
  return (
    ticket.customerDevice?.customModel
    || ticket.customerDevice?.deviceTypeName
    || [ticket.customDeviceBrand, ticket.customDeviceModel].filter(Boolean).join(" ")
    || ticket.deviceFamily?.name
    || t("unknownDevice")
  );
}
