import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { Package } from "lucide-react";

export const metadata = { title: "Inventaire" };

export default function InventoryPage() {
  return (
    <>
      <PageHeader
        title="Inventaire"
        description="Produits, pièces détachées et services"
      />
      <EmptyState
        icon={Package}
        title="Module inventaire à venir"
        description="La gestion du stock (FIFO, mouvements, ajustements) sera disponible au Bloc 7."
      />
    </>
  );
}
