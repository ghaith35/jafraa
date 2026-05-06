"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label = "Imprimer" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-sm font-bold text-white"
    >
      <Printer className="h-4 w-4" />
      {label}
    </button>
  );
}
