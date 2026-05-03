import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { Settings } from "lucide-react";

export const metadata = { title: "Paramètres" };

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Paramètres"
        description="Configuration de la boutique et de l'entreprise"
      />
      <EmptyState
        icon={Settings}
        title="Paramètres à venir"
        description="La configuration boutique (formats de numéros, seuils, WhatsApp) sera disponible dans un bloc ultérieur."
      />
    </>
  );
}
