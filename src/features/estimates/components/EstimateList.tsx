"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle, XCircle, RotateCcw, Loader2, Printer, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { markEstimateSent, approveEstimate, reopenEstimateToDraft } from "../actions/estimate.actions";
import { WhatsAppSendButton } from "@/features/whatsapp/components/WhatsAppSendButton";

const STATUS_CONFIG: Record<string, { label: string; cls: string }> = {
  draft: { label: "Brouillon", cls: "bg-gray-100 text-gray-800 border-gray-200" },
  sent: { label: "Envoyé", cls: "bg-blue-100 text-blue-800 border-blue-200" },
  accepted: { label: "Accepté", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  rejected: { label: "Refusé", cls: "bg-red-100 text-red-800 border-red-200" },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function EstimateList({ estimates, userRole, ticketId, storeId, customerId }: { estimates: any[], userRole: string, ticketId?: string, storeId?: string, customerId?: string }) {
  const router = useRouter();
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [approvalModal, setApprovalModal] = useState<{ isOpen: boolean; estimateId: string | null; decision: "accepted" | "rejected" | null }>({
    isOpen: false,
    estimateId: null,
    decision: null,
  });
  const [method, setMethod] = useState<"phone" | "in_person" | "whatsapp_reply" | "other">("in_person");
  const [note, setNote] = useState("");

  if (estimates.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-8 text-center bg-muted/20">
        <p className="text-muted-foreground text-sm">Aucun devis pour ce ticket.</p>
      </div>
    );
  }

  const handleSend = async (id: string) => {
    if (!confirm("Voulez-vous marquer ce devis comme envoyé au client ?")) return;
    setLoadingAction(`send-${id}`);
    await markEstimateSent(id);
    setLoadingAction(null);
    router.refresh();
  };

  const handleReopen = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir rouvrir ce devis ?")) return;
    setLoadingAction(`reopen-${id}`);
    const res = await reopenEstimateToDraft(id);
    if (res && "error" in res) {
      alert(res.error);
    }
    setLoadingAction(null);
    router.refresh();
  };

  const submitApproval = async () => {
    if (!approvalModal.estimateId || !approvalModal.decision) return;
    setLoadingAction("approve");
    const res = await approveEstimate({
      estimateId: approvalModal.estimateId,
      decision: approvalModal.decision,
      confirmationMethod: method,
      note,
    });
    if (res && "error" in res) {
      alert(res.error);
    } else {
      setApprovalModal({ isOpen: false, estimateId: null, decision: null });
      setMethod("in_person");
      setNote("");
    }
    setLoadingAction(null);
    router.refresh();
  };

  return (
    <div className="space-y-6">
      {estimates.map((est) => {
        const cfg = STATUS_CONFIG[est.status] || { label: est.status, cls: "bg-gray-100" };
        
        return (
          <div key={est.id} className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="bg-muted/30 px-5 py-4 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{est.estimateNumber}</h3>
                  <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full border text-xs font-semibold", cfg.cls)}>
                    {cfg.label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Créé le {new Date(est.createdAt).toLocaleDateString("fr-FR")} par {est.createdBy.name}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {est.status === "draft" && (
                  <>
                    <button
                      onClick={() => handleSend(est.id)}
                      disabled={loadingAction !== null}
                      className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 text-xs font-medium transition-colors"
                    >
                      {loadingAction === `send-${est.id}` ? <Loader2 className="h-3 w-3 animate-spin" /> : <Send className="h-3 w-3" />}
                      Marquer envoyé
                    </button>
                    {ticketId && storeId && (
                      <WhatsAppSendButton
                        ticketId={ticketId}
                        storeId={storeId}
                        customerId={customerId}
                        type="estimate"
                        variant="button"
                        label="Notifier"
                      />
                    )}
                  </>
                )}

                {est.status === "sent" && (
                  <>
                    {est.publicApprovalToken && (
                      <a
                        href={`/estimate-approval/${est.publicApprovalToken}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-input bg-background px-3 text-xs font-medium hover:bg-muted transition-colors"
                      >
                        <Link2 className="h-3 w-3" />
                        Lien client
                      </a>
                    )}
                    <button
                      onClick={() => setApprovalModal({ isOpen: true, estimateId: est.id, decision: "accepted" })}
                      disabled={loadingAction !== null}
                      className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 px-3 text-xs font-medium transition-colors"
                    >
                      <CheckCircle className="h-3 w-3" />
                      Accepter
                    </button>
                    <button
                      onClick={() => setApprovalModal({ isOpen: true, estimateId: est.id, decision: "rejected" })}
                      disabled={loadingAction !== null}
                      className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-red-100 text-red-800 hover:bg-red-200 px-3 text-xs font-medium transition-colors"
                    >
                      <XCircle className="h-3 w-3" />
                      Refuser
                    </button>
                  </>
                )}

                {(est.status === "accepted" || est.status === "rejected") && (userRole === "Admin" || userRole === "Manager") && (
                  <button
                    onClick={() => handleReopen(est.id)}
                    disabled={loadingAction !== null}
                    className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 px-3 text-xs font-medium transition-colors border"
                  >
                    {loadingAction === `reopen-${est.id}` ? <Loader2 className="h-3 w-3 animate-spin" /> : <RotateCcw className="h-3 w-3" />}
                    Rouvrir
                  </button>
                )}

                <a
                  href={`/dashboard/repairs/estimates/${est.id}/preview`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border bg-white dark:bg-transparent px-3 text-xs font-medium hover:bg-muted transition-colors"
                >
                  <Printer className="h-3 w-3" />
                  Imprimer
                </a>
              </div>
            </div>

            <div className="p-5">
              <table className="w-full text-sm text-left mb-4">
                <thead className="text-xs uppercase text-muted-foreground border-b border-border">
                  <tr>
                    <th className="pb-2 font-medium">Description</th>
                    <th className="pb-2 font-medium text-right">Qté</th>
                    <th className="pb-2 font-medium text-right">Prix Unit.</th>
                    <th className="pb-2 font-medium text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {est.lines.map((line: any) => (
                    <tr key={line.id}>
                      <td className="py-2">
                        {line.description}
                        <span className="ml-2 text-[10px] text-muted-foreground uppercase px-1.5 py-0.5 bg-muted rounded">
                          {line.lineType}
                        </span>
                      </td>
                      <td className="py-2 text-right">{line.quantity}</td>
                      <td className="py-2 text-right">{Number(line.unitPrice).toFixed(2)} DZD</td>
                      <td className="py-2 text-right font-medium">{Number(line.totalPrice).toFixed(2)} DZD</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-end pt-4 border-t border-border">
                <div className="w-64 space-y-1.5 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sous-total</span>
                    <span>{Number(est.subtotalAmount).toFixed(2)} DZD</span>
                  </div>
                  {Number(est.discountAmount) > 0 && (
                    <div className="flex justify-between text-destructive">
                      <span>Remise</span>
                      <span>-{Number(est.discountAmount).toFixed(2)} DZD</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-base pt-2 border-t mt-2">
                    <span>Total</span>
                    <span>{Number(est.totalAmount).toFixed(2)} DZD</span>
                  </div>
                </div>
              </div>

              {est.approvalLogs && est.approvalLogs.length > 0 && (
                <div className="mt-6 bg-muted/30 rounded-lg p-4 border border-border">
                  <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Logs d&apos;approbation</h4>
                  <ul className="space-y-2 text-sm">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {est.approvalLogs.map((log: any) => (
                      <li key={log.id} className="flex flex-col gap-0.5">
                        <span className="font-medium">
                          Décision : <span className={log.decision === "accepted" ? "text-emerald-600" : "text-destructive"}>
                            {log.decision === "accepted" ? "Accepté" : "Refusé"}
                          </span>
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Confirmé le {new Date(log.createdAt).toLocaleString("fr-FR")} par {log.confirmedBy.name} via {log.confirmationMethod}
                        </span>
                        {log.note && <span className="text-xs italic mt-0.5">&quot;{log.note}&quot;</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {approvalModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-background p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4">
              Confirmer {approvalModal.decision === "accepted" ? "l'acceptation" : "le refus"} du client
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Méthode de confirmation</label>
                <select
                  value={method}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e) => setMethod(e.target.value as any)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                >
                  <option value="in_person">En personne</option>
                  <option value="phone">Appel téléphonique</option>
                  <option value="whatsapp_reply">Message WhatsApp</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Note (Optionnel)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                  placeholder="Détails supplémentaires..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  onClick={() => setApprovalModal({ isOpen: false, estimateId: null, decision: null })}
                  className="h-9 px-4 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent"
                >
                  Annuler
                </button>
                <button
                  onClick={submitApproval}
                  disabled={loadingAction === "approve"}
                  className={cn(
                    "h-9 px-4 inline-flex items-center justify-center rounded-md text-white text-sm font-medium transition-colors disabled:opacity-50",
                    approvalModal.decision === "accepted" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-destructive hover:bg-destructive/90"
                  )}
                >
                  {loadingAction === "approve" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Confirmer"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
