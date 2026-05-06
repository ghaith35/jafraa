"use client";

import { CheckCircle2, Clock3, CreditCard, MessageSquare, PackageCheck, ReceiptText, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { RepairIntakeWizard } from "@/features/repairs/components/intake/RepairIntakeWizard";
import type { RepairIntakeData } from "@/features/repairs/lib/intake-data";

export function PosRepairWorkspace({ repairIntake }: { repairIntake: RepairIntakeData }) {
  return (
    <div className="grid min-h-[calc(100vh-235px)] gap-5 xl:grid-cols-[340px_1fr]">
      <aside className="space-y-4">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-5">
            <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
              <Wrench className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-2xl font-black tracking-tight">Réparation POS</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Créez le ticket, préparez le devis, réservez les pièces et encaissez l’acompte depuis un seul flux.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-border p-4">
            <MiniStat label="Clients" value={repairIntake.customers.length} icon={<CreditCard className="h-4 w-4" />} />
            <MiniStat label="Techniciens" value={repairIntake.technicians.length} icon={<ShieldCheck className="h-4 w-4" />} />
            <MiniStat label="Catégories" value={repairIntake.catalog.length} icon={<PackageCheck className="h-4 w-4" />} />
            <MiniStat label="Étapes" value="8" icon={<CheckCircle2 className="h-4 w-4" />} />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
          <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" /> Parcours recommandé
          </h3>
          <ol className="mt-4 space-y-3 text-sm">
            {[
              "Identifier le client ou walk-in",
              "Sélectionner appareil et problème",
              "Réserver les pièces compatibles",
              "Créer ticket + devis",
              "Notifier le client par WhatsApp",
            ].map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">{index + 1}</span>
                <span className="font-semibold text-foreground/90">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/20 dark:text-emerald-200">
          <div className="flex items-start gap-3">
            <MessageSquare className="mt-0.5 h-5 w-5" />
            <div>
              <p className="font-black">Notifications prêtes</p>
              <p className="mt-1 text-sm opacity-80">Après création, vous pourrez envoyer réception, devis et prêt à récupérer par WhatsApp.</p>
            </div>
          </div>
        </div>
      </aside>

      <section className="rounded-[2rem] border border-border bg-background/60 p-3 shadow-sm">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-border bg-card px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-primary/10 p-2 text-primary"><ReceiptText className="h-5 w-5" /></div>
            <div>
              <p className="text-sm font-black">Nouveau ticket réparation</p>
              <p className="text-xs text-muted-foreground">Workflow moderne: device catalog → problème → pièces → détails</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-bold text-muted-foreground">
            <Clock3 className="h-3.5 w-3.5" /> Optimisé caisse rapide
          </div>
        </div>
        <RepairIntakeWizard customers={repairIntake.customers} technicians={repairIntake.technicians} catalog={repairIntake.catalog} />
      </section>
    </div>
  );
}

function MiniStat({ label, value, icon }: { label: string; value: string | number; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-3">
      <div className="flex items-center justify-between text-muted-foreground">{icon}<span className="text-lg font-black text-foreground">{value}</span></div>
      <p className="mt-1 text-xs font-bold text-muted-foreground">{label}</p>
    </div>
  );
}
