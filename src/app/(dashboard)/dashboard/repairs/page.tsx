import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { Wrench } from "lucide-react";

export const metadata = { title: "Réparations" };

export default function RepairsPage() {
  return (
    <>
      <PageHeader
        title="Réparations"
        description="Tickets de réparation et suivi du statut"
      />
      <EmptyState
        icon={Wrench}
        title="Module réparations à venir"
        description="La gestion des tickets de réparation sera disponible au Bloc 8."
      />
    </>
  );
}
