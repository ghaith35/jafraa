"use client";

import { useState } from "react";
import { MessageSquare, X, ExternalLink, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getTicketWhatsAppPreview, logWhatsAppSent } from "../actions/whatsapp.actions";
import type { WaPreview } from "@/lib/whatsapp/notifications";
import type { TemplateLocale } from "@/lib/whatsapp/templates";

type NotifType = "received" | "ready" | "estimate";

interface Props {
  ticketId: string;
  storeId: string;
  customerId?: string;
  type: NotifType;
  locale?: TemplateLocale;
  /** Small icon-only button (default) or full button with label */
  variant?: "icon" | "button";
  label?: string;
}

const TYPE_LABELS: Record<NotifType, string> = {
  received: "Ticket reçu",
  ready: "Prêt à récupérer",
  estimate: "Devis disponible",
};

export function WhatsAppSendButton({
  ticketId,
  storeId,
  customerId,
  type,
  locale = "fr",
  variant = "icon",
  label,
}: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<WaPreview | null>(null);
  const [sent, setSent] = useState(false);

  const handleOpen = async () => {
    setLoading(true);
    setSent(false);
    try {
      const data = await getTicketWhatsAppPreview(ticketId, type, locale);
      setPreview(data);
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!preview) return;

    // Open wa.me link in new tab
    window.open(preview.waLink, "_blank", "noopener,noreferrer");

    // Log the send
    await logWhatsAppSent({
      storeId,
      customerId,
      entityType: "repair_ticket",
      entityId: ticketId,
      phone: preview.phone,
      messagePreview: preview.message,
    });

    setSent(true);
  };

  return (
    <>
      {variant === "icon" ? (
        <button
          onClick={handleOpen}
          disabled={loading}
          className="text-emerald-600 hover:text-emerald-700 transition-colors disabled:opacity-40"
          title={`Notifier via WhatsApp — ${TYPE_LABELS[type]}`}
        >
          {loading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <MessageSquare className="h-3.5 w-3.5" />
          )}
        </button>
      ) : (
        <button
          onClick={handleOpen}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-100 transition-colors disabled:opacity-40 dark:border-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-400"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <MessageSquare className="h-4 w-4" />
          )}
          {label ?? TYPE_LABELS[type]}
        </button>
      )}

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card shadow-xl flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">WhatsApp — {TYPE_LABELS[type]}</p>
                  {preview && (
                    <p className="text-xs text-muted-foreground">{preview.phone}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-1 hover:bg-accent transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5">
              {!preview ? (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Ce client n&apos;a pas de numéro de téléphone enregistré.
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">
                    Aperçu du message
                  </p>
                  <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 p-4">
                    <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                      {preview.message}
                    </pre>
                  </div>

                  {/* Locale toggle */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Langue :</span>
                    <span className={cn(
                      "px-2 py-0.5 rounded-full font-medium",
                      locale === "fr" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                    )}>
                      {locale === "fr" ? "Français" : "العربية"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-border flex items-center justify-between gap-3">
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-2 text-sm font-medium border border-input hover:bg-accent transition-colors"
              >
                Annuler
              </button>

              {preview && (
                <button
                  onClick={handleSend}
                  disabled={sent}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    sent
                      ? "bg-emerald-100 text-emerald-700 cursor-default"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  )}
                >
                  <ExternalLink className="h-4 w-4" />
                  {sent ? "WhatsApp ouvert ✓" : "Ouvrir WhatsApp"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
