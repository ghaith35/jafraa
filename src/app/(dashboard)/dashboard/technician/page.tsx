import Link from "next/link";
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { CalendarClock, CheckCircle2, Clock3, Wrench } from "lucide-react";
import { Prisma, type RepairStatus } from "@prisma/client";
import { PageHeader } from "@/components/shared/PageHeader";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";

export const metadata = { title: "Espace Technicien" };

const STATUS_LABELS: Record<string, string> = {
  received: "Reçu",
  in_diagnosis: "Diagnostic",
  waiting_customer_approval: "Accord client",
  in_repair: "En réparation",
  ready_for_pickup: "Prêt",
  completed: "Terminé",
  not_repaired: "Non réparé",
};

const STATUS_CLASSES: Record<string, string> = {
  received: "border-blue-200 bg-blue-50 text-blue-800",
  in_diagnosis: "border-purple-200 bg-purple-50 text-purple-800",
  waiting_customer_approval: "border-cyan-200 bg-cyan-50 text-cyan-800",
  in_repair: "border-amber-200 bg-amber-50 text-amber-800",
  ready_for_pickup: "border-emerald-200 bg-emerald-50 text-emerald-800",
  completed: "border-slate-200 bg-slate-50 text-slate-700",
  not_repaired: "border-red-200 bg-red-50 text-red-800",
};

const OPEN_REPAIR_STATUSES: RepairStatus[] = [
  "received",
  "in_diagnosis",
  "waiting_customer_approval",
  "in_repair",
  "ready_for_pickup",
];

const ticketInclude = {
  customer: { select: { name: true, phones: { select: { phoneNumber: true }, take: 1 } } },
  deviceBrand: { select: { name: true } },
  deviceFamily: { select: { name: true } },
  assignedTechnician: { select: { name: true } },
  problems: { select: { problemText: true }, take: 3 },
} satisfies Prisma.RepairTicketInclude;

type LaneTicket = Prisma.RepairTicketGetPayload<{ include: typeof ticketInclude }>;

function formatDate(date: Date | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("fr-DZ", { dateStyle: "medium", timeStyle: "short" }).format(date);
}

export default async function TechnicianWorkspacePage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const where: Prisma.RepairTicketWhereInput = {
    storeId,
    isArchived: false,
    currentStatus: { in: OPEN_REPAIR_STATUSES },
    ...(session.role === "Technician" ? { assignedTechnicianId: session.sub } : {}),
  };

  const tickets = await prisma.repairTicket.findMany({
    where,
    include: ticketInclude,
    orderBy: [{ priority: "desc" }, { dueAt: "asc" }, { createdAt: "asc" }],
    take: 100,
  });

  const today = new Date();
  const due = tickets.filter((t) => t.dueAt && t.dueAt <= today);
  const inProgress = tickets.filter((t) => t.currentStatus === "in_repair" || t.currentStatus === "in_diagnosis");
  const waiting = tickets.filter((t) => t.currentStatus === "waiting_customer_approval" || t.currentStatus === "received");

  return (
    <div className="space-y-6">
      <PageHeader
        title="Espace technicien"
        description="Priorités, tickets assignés, échéances et réparations en cours."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard icon={<CalendarClock className="h-5 w-5" />} label="En retard / aujourd’hui" value={due.length} />
        <StatCard icon={<Wrench className="h-5 w-5" />} label="En travail" value={inProgress.length} />
        <StatCard icon={<Clock3 className="h-5 w-5" />} label="En attente" value={waiting.length} />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <TicketLane title="À traiter en priorité" tickets={due.length ? due : tickets.slice(0, 12)} />
        <TicketLane title="Diagnostic / réparation" tickets={inProgress} />
        <TicketLane title="Attente client / réception" tickets={waiting} />
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: ReactNode; label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-primary/10 p-3 text-primary">{icon}</div>
        <span className="text-3xl font-black">{value}</span>
      </div>
      <p className="mt-3 text-sm font-semibold text-muted-foreground">{label}</p>
    </div>
  );
}

function TicketLane({ title, tickets }: { title: string; tickets: LaneTicket[] }) {
  return (
    <section className="rounded-3xl border border-border bg-card/80 p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold">{title}</h2>
        <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">{tickets.length}</span>
      </div>
      <div className="space-y-3">
        {tickets.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center text-sm text-muted-foreground">
            Aucun ticket dans cette colonne.
          </div>
        ) : (
          tickets.map((ticket) => (
            <Link key={ticket.id} href={`/dashboard/repairs/${ticket.id}`} className="block rounded-2xl border border-border bg-background p-4 transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs font-bold text-muted-foreground">{ticket.ticketNumber}</p>
                  <h3 className="mt-1 font-bold">{ticket.customer.name}</h3>
                </div>
                <span className={cn("rounded-full border px-2 py-0.5 text-[11px] font-bold", STATUS_CLASSES[ticket.currentStatus] ?? STATUS_CLASSES.received)}>
                  {STATUS_LABELS[ticket.currentStatus] ?? ticket.currentStatus}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {[ticket.deviceBrand?.name, ticket.deviceFamily?.name || ticket.customDeviceModel].filter(Boolean).join(" ") || "Appareil non précisé"}
              </p>
              <div className="mt-3 space-y-1">
                {ticket.problems.map((problem) => (
                  <p key={problem.problemText} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {problem.problemText}
                  </p>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                <span>{ticket.assignedTechnician?.name ?? "Non assigné"}</span>
                <span>{formatDate(ticket.dueAt)}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
