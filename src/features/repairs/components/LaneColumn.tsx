import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AppTranslationKey } from "@/lib/i18n/ui-core";

export interface LaneTicket {
  id: string;
  ticketNumber: string;
  currentStatus: string;
  customer: { name: string };
  deviceBrand?: { name: string | null } | null;
  deviceFamily?: { name: string | null } | null;
  customDeviceModel?: string | null;
  problems?: Array<{ problemText: string }>;
  assignedTechnician?: { name: string | null } | null;
  dueAt: Date | null;
}

interface Props {
  label: string;
  tickets: LaneTicket[];
  borderColor: string;
  dotColor: string;
  t: (key: AppTranslationKey) => string;
  formatDate: (d: Date | string | number) => string;
}

export function LaneColumn({ label, tickets, borderColor, dotColor, t, formatDate }: Props) {
  return (
    <section className={cn("flex flex-col rounded-2xl border bg-card/50 p-3 shadow-sm", borderColor)}>
      <div className="mb-3 flex items-center gap-2">
        <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", dotColor)} />
        <h2 className="text-sm font-bold truncate">{label}</h2>
        <span className="ms-auto rounded-full bg-muted px-2 py-0.5 text-xs font-bold text-muted-foreground">{tickets.length}</span>
      </div>

      <div className="flex-1 space-y-2">
        {tickets.length === 0 ? (
          <p className="py-6 text-center text-xs text-muted-foreground">{t("technician.emptyLane" as AppTranslationKey)}</p>
        ) : (
          tickets.map((ticket) => (
            <Link key={ticket.id} href={`/dashboard/repairs/${ticket.id}`} className="block rounded-xl border border-border bg-background p-3 transition hover:-translate-y-0.5 hover:shadow-md">
              <p className="font-mono text-[11px] font-bold text-muted-foreground">{ticket.ticketNumber}</p>
              <h3 className="mt-0.5 text-sm font-bold">{ticket.customer.name}</h3>
              <p className="mt-1 text-[12px] text-muted-foreground">
                {[ticket.deviceBrand?.name, ticket.deviceFamily?.name || ticket.customDeviceModel].filter(Boolean).join(" ") || t("technician.unknownDevice" as AppTranslationKey)}
              </p>
              <div className="mt-2 space-y-0.5">
                {ticket.problems?.map((problem) => (
                  <p key={problem.problemText} className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 shrink-0 text-primary" />
                    <span className="truncate">{problem.problemText}</span>
                  </p>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-border pt-2 text-[11px] text-muted-foreground">
                <span className="truncate">{ticket.assignedTechnician?.name ?? t("technician.unassigned" as AppTranslationKey)}</span>
                <span className="shrink-0">{ticket.dueAt ? formatDate(ticket.dueAt) : "—"}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
