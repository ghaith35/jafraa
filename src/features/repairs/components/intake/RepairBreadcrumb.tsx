"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type RepairWizardStep =
  | "category"
  | "brand"
  | "printerType"
  | "device"
  | "laptopSeries"
  | "laptopModel"
  | "laptopGeneration"
  | "laptopSpecs"
  | "problems"
  | "parts"
  | "details";

export function RepairBreadcrumb({
  steps,
  currentStep,
  completedSteps,
  onSelectStep,
}: {
  steps: Array<{ key: RepairWizardStep; label: string }>;
  currentStep: RepairWizardStep;
  completedSteps: RepairWizardStep[];
  onSelectStep?: (step: RepairWizardStep) => void;
}) {
  return (
    <div className="overflow-x-auto border-b border-slate-200 bg-white px-4 py-3">
      <div className="flex min-w-max items-center gap-2">
        {steps.map((step, index) => {
          const completed = completedSteps.includes(step.key);
          const active = currentStep === step.key;
          const canSelect = completed || active;

          return (
            <div key={step.key} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => canSelect && onSelectStep?.(step.key)}
                disabled={!canSelect}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold transition-colors",
                  active && "bg-primary text-primary-foreground shadow-sm",
                  completed && !active && "bg-primary/10 text-primary hover:bg-primary/15",
                  !completed && !active && "bg-slate-100 text-slate-500"
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full text-[11px]",
                    active && "bg-white/20 text-primary-foreground",
                    completed && !active && "bg-primary text-primary-foreground",
                    !completed && !active && "bg-white text-slate-500"
                  )}
                >
                  {completed ? <Check className="h-3 w-3" /> : index + 1}
                </span>
                {step.label}
              </button>
              {index < steps.length - 1 && <span className="text-slate-300">›</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
