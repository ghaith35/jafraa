"use client";

import { Printer, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface DocumentShellProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export function DocumentShell({ children, title, className }: DocumentShellProps) {
  const router = useRouter();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-20 print:bg-white print:pb-0">
      {/* Topbar - Hidden during print */}
      <div className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-md print:hidden">
        <div className="container flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex h-8 items-center gap-1 rounded-md px-2 text-sm font-medium hover:bg-muted"
            >
              <ChevronLeft className="h-4 w-4" />
              Retour
            </button>
            <h1 className="text-sm font-bold uppercase tracking-widest">{title}</h1>
          </div>
          <button
            onClick={handlePrint}
            className="flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            <Printer className="h-4 w-4" />
            Imprimer
          </button>
        </div>
      </div>

      {/* Document Content */}
      <div className={cn("container max-w-[800px] py-8 px-4 print:max-w-none print:p-0", className)}>
        <div className="rounded-xl border bg-card shadow-sm print:rounded-none print:border-none print:shadow-none">
          {children}
        </div>
      </div>
      
      {/* Print Instructions - Only visible on desktop screen */}
      <div className="container max-w-[800px] px-4 print:hidden">
        <p className="text-center text-xs text-muted-foreground italic">
          Astuce : Utilisez les paramètres d&apos;impression de votre navigateur pour ajuster les marges ou l&apos;échelle si nécessaire.
        </p>
      </div>

      {/* Global Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
          }
          @page {
            margin: 15mm;
          }
          header, nav, footer, .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
