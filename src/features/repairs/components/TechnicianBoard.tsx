"use client";

import { useState, useCallback, useRef } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import Link from "next/link";
import { CheckCircle2, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { changeRepairTicketStatus } from "@/features/repairs/actions/repair.actions";
import type { RepairStatus } from "@prisma/client";
import type { AppTranslationKey } from "@/lib/i18n/ui-core";
import type { LaneTicket } from "./LaneColumn";

interface LaneData {
  status: string;
  label: string;
  tickets: LaneTicket[];
  border: string;
  dot: string;
}

interface TechnicianBoardProps {
  initialLanes: LaneData[];
}

export function TechnicianBoard({ initialLanes }: TechnicianBoardProps) {
  const { t, formatDate } = useAppI18n();
  const [lanes, setLanes] = useState<LaneData[]>(initialLanes);
  const [activeTicket, setActiveTicket] = useState<LaneTicket | null>(null);
  const prevLanesRef = useRef<LaneData[] | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const ticketId = event.active.id as string;
    for (const lane of lanes) {
      const found = lane.tickets.find((t) => t.id === ticketId);
      if (found) {
        setActiveTicket(found);
        return;
      }
    }
  }, [lanes]);

  const handleDragEnd = useCallback(async (event: DragEndEvent) => {
    setActiveTicket(null);

    const { active, over } = event;
    if (!over) return;

    const ticketId = active.id as string;
    const targetStatus = over.id as string;

    let sourceStatus: string | undefined;
    let ticket: LaneTicket | undefined;

    for (const lane of lanes) {
      const found = lane.tickets.find((t) => t.id === ticketId);
      if (found) {
        sourceStatus = lane.status;
        ticket = found;
        break;
      }
    }

    if (!sourceStatus || !ticket || sourceStatus === targetStatus) return;

    prevLanesRef.current = lanes;

    setLanes((prev) =>
      prev.map((lane) => {
        if (lane.status === sourceStatus) {
          return { ...lane, tickets: lane.tickets.filter((t) => t.id !== ticketId) };
        }
        if (lane.status === targetStatus) {
          return { ...lane, tickets: [...lane.tickets, { ...ticket, currentStatus: targetStatus }] };
        }
        return lane;
      })
    );

    const result = await changeRepairTicketStatus(ticketId, {
      newStatus: targetStatus as RepairStatus,
      note: "",
    });

    if (result && "error" in result) {
      setLanes(prevLanesRef.current ?? lanes);
    }
    prevLanesRef.current = null;
  }, [lanes]);

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
        {lanes.map((lane) => (
          <DroppableLane
            key={lane.status}
            lane={lane}
            t={t}
            formatDate={formatDate}
          />
        ))}
      </div>
      <DragOverlay>
        {activeTicket ? (
          <div className="rounded-xl border-2 border-primary bg-background p-3 shadow-xl opacity-90 w-64">
            <p className="font-mono text-[11px] font-bold text-muted-foreground">{activeTicket.ticketNumber}</p>
            <h3 className="mt-0.5 text-sm font-bold">{activeTicket.customer.name}</h3>
            <p className="mt-1 text-[12px] text-muted-foreground">
              {[activeTicket.deviceBrand?.name, activeTicket.deviceFamily?.name || activeTicket.customDeviceModel].filter(Boolean).join(" ") || t("technician.unknownDevice" as AppTranslationKey)}
            </p>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function DroppableLane({
  lane,
  t,
  formatDate,
}: {
  lane: LaneData;
  t: (key: AppTranslationKey) => string;
  formatDate: (d: Date | string | number) => string;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: lane.status });

  return (
    <section
      ref={setNodeRef}
      className={cn(
        "flex flex-col rounded-2xl border bg-card/50 p-3 shadow-sm transition-colors",
        lane.border,
        isOver && "ring-2 ring-primary/40 bg-primary/5"
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", lane.dot)} />
        <h2 className="text-sm font-bold truncate">{lane.label}</h2>
        <span className="ms-auto rounded-full bg-muted px-2 py-0.5 text-xs font-bold text-muted-foreground">{lane.tickets.length}</span>
      </div>

      <div className="flex-1 space-y-2 min-h-[120px]">
        {lane.tickets.length === 0 ? (
          <p className="py-6 text-center text-xs text-muted-foreground">
            {isOver ? t("technician.dropHere" as AppTranslationKey) || "⤵" : t("technician.emptyLane" as AppTranslationKey)}
          </p>
        ) : (
          lane.tickets.map((ticket) => (
            <DraggableCard key={ticket.id} ticket={ticket} t={t} formatDate={formatDate} />
          ))
        )}
      </div>
    </section>
  );
}

function DraggableCard({
  ticket,
  t,
  formatDate,
}: {
  ticket: LaneTicket;
  t: (key: AppTranslationKey) => string;
  formatDate: (d: Date | string | number) => string;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: ticket.id });
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "rounded-xl border border-border bg-background p-3 transition-shadow",
        isDragging ? "opacity-30 shadow-none" : "hover:shadow-md"
      )}
    >
      <Link
        href={`/dashboard/repairs/${ticket.id}`}
        className="block"
        onClick={(e) => { if (isDragging) e.preventDefault(); }}
      >
        <div className="flex items-center gap-1">
          <p className="font-mono text-[11px] font-bold text-muted-foreground">{ticket.ticketNumber}</p>
          <button
            {...attributes}
            {...listeners}
            suppressHydrationWarning
            className="ms-auto cursor-grab touch-none p-0.5 text-muted-foreground hover:text-foreground"
            onClick={(e) => e.preventDefault()}
            title={t("technician.dragToMove" as AppTranslationKey) || "Drag to move"}
          >
            <GripVertical className="h-3.5 w-3.5" />
          </button>
        </div>
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
    </div>
  );
}
