"use client";

import { useState, useTransition } from "react";
import { MessageSquare, Phone, Save, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { saveStoreWhatsAppPhone } from "../actions/whatsapp.actions";

interface NotifLog {
  id: string;
  phone: string;
  entityType: string;
  entityId: string;
  messagePreview: string;
  createdAt: Date;
}

interface Props {
  initialPhone: string | null;
  logs: NotifLog[];
}

const ENTITY_LABELS: Record<string, string> = {
  repair_ticket: "Ticket réparation",
  repair_invoice: "Facture réparation",
  pos_sale: "Vente POS",
  test: "Test",
};

export function WhatsAppManager({ initialPhone, logs }: Props) {
  const [phone, setPhone] = useState(initialPhone ?? "");
  const [saved, setSaved] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    startTransition(async () => {
      await saveStoreWhatsAppPhone(phone);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    });
  };

  return (
    <div className="space-y-8">
      {/* How it works banner */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-900/50 p-5 flex gap-4">
        <div className="h-10 w-10 shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
          <MessageSquare className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="space-y-1.5">
          <p className="font-semibold text-emerald-800 dark:text-emerald-300">Comment ça fonctionne ?</p>
          <p className="text-sm text-emerald-700 dark:text-emerald-400">
            Depuis une fiche réparation, cliquez l&apos;icône WhatsApp
            <MessageSquare className="inline h-3.5 w-3.5 mx-1 align-middle" />
            pour prévisualiser le message et ouvrir WhatsApp avec le texte pré-rempli.
            Le client n&apos;est <strong>jamais contacté automatiquement</strong> — vous contrôlez chaque envoi.
          </p>
        </div>
      </div>

      {/* Store WhatsApp number */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          Numéro WhatsApp de la boutique
        </h3>
        <p className="text-sm text-muted-foreground">
          Ce numéro sera affiché dans certains messages envoyés aux clients.
        </p>
        <div className="flex gap-2 max-w-sm">
          <input
            type="tel"
            placeholder="ex: 0550 123 456"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <button
            onClick={handleSave}
            disabled={isPending}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              saved
                ? "bg-emerald-100 text-emerald-700"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {saved ? (
              <><CheckCircle2 className="h-4 w-4" /> Enregistré</>
            ) : (
              <><Save className="h-4 w-4" /> Enregistrer</>
            )}
          </button>
        </div>
      </div>

      {/* Notification log */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-semibold">Historique des notifications</h3>
          <span className="ml-auto text-xs text-muted-foreground">{logs.length} entrées</span>
        </div>

        {logs.length === 0 ? (
          <div className="p-10 text-center text-muted-foreground text-sm">
            Aucune notification envoyée pour l&apos;instant.
          </div>
        ) : (
          <div className="divide-y divide-border">
            {logs.map((log) => (
              <div key={log.id} className="px-5 py-4 hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        {ENTITY_LABELS[log.entityType] ?? log.entityType}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Phone className="h-3 w-3" /> {log.phone}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {log.messagePreview}
                    </p>
                  </div>
                  <time className="text-xs text-muted-foreground shrink-0 tabular-nums whitespace-nowrap">
                    {new Date(log.createdAt).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
