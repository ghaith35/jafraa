"use client";

import { useState } from "react";
import { Package, Plus } from "lucide-react";
import { ReservedPartsList } from "./ReservedPartsList";
import { ReservePartForm } from "./ReservePartForm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ReservedPartsSection({ ticket, initialParts, userRole }: { ticket: any; initialParts: any[]; userRole: string }) {
  const [isAdding, setIsAdding] = useState(false);

  // Block adding on completed/not_repaired tickets
  const blockedStatuses = ["completed", "not_repaired"];
  const isBlocked = blockedStatuses.includes(ticket.currentStatus);

  // Count active reservations
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeCount = initialParts.filter((p: any) => p.status === "reserved").length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <Package className="h-5 w-5 text-muted-foreground" />
          Pièces réservées ({activeCount})
        </h2>

        {!isAdding && !isBlocked && (
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            Ajouter une pièce
          </button>
        )}
      </div>

      {isAdding && (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <h3 className="font-semibold text-lg">Réserver une pièce</h3>
            <button
              onClick={() => setIsAdding(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Annuler
            </button>
          </div>
          <ReservePartForm ticketId={ticket.id} onSuccess={() => setIsAdding(false)} />
        </div>
      )}

      <ReservedPartsList parts={initialParts} userRole={userRole} />
    </div>
  );
}
