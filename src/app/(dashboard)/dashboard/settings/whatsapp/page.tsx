import { PageHeader } from "@/components/shared/PageHeader";
import { AlertCircle } from "lucide-react";
import { WhatsAppManager } from "@/features/whatsapp/components/WhatsAppManager";

export default async function WhatsAppSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <PageHeader 
        title="Intégration WhatsApp" 
        description="Connectez votre compte WhatsApp pour envoyer des notifications automatiques aux clients."
      />

      <WhatsAppManager />

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:bg-amber-950/20 dark:border-amber-900/50 flex gap-3">
        <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
        <div className="text-sm text-amber-800 dark:text-amber-300">
          <p className="font-bold">Important</p>
          <p className="mt-1">
            N&apos;utilisez pas de comptes WhatsApp personnels pour des envois massifs afin d&apos;éviter tout blocage par WhatsApp. Utilisez de préférence un numéro dédié à votre entreprise.
          </p>
        </div>
      </div>
    </div>
  );
}
