"use client";

import { useState } from "react";
import { Plus, FileText } from "lucide-react";
import { EstimateForm } from "./EstimateForm";
import { EstimateList } from "./EstimateList";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function EstimateSection({ ticket, initialEstimates, userRole }: any) {
  const [isCreating, setIsCreating] = useState(false);

  // If there's an active draft or sent estimate, we might want to hide the "Create" button
  const hasActiveEstimate = initialEstimates.some(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => e.status === "draft" || e.status === "sent"
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          Devis ({initialEstimates.length})
        </h2>
        
        {!isCreating && !hasActiveEstimate && ticket.currentStatus !== "completed" && (
          <button
            onClick={() => setIsCreating(true)}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            Nouveau Devis
          </button>
        )}
      </div>

      {isCreating ? (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <h3 className="font-semibold text-lg">Créer un devis</h3>
            <button
              onClick={() => setIsCreating(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Annuler
            </button>
          </div>
          <EstimateForm ticketId={ticket.id} onSuccess={() => setIsCreating(false)} />
        </div>
      ) : (
        <EstimateList estimates={initialEstimates} userRole={userRole} />
      )}
    </div>
  );
}
