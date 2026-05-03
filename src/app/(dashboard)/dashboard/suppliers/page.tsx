import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { Truck } from "lucide-react";

export const metadata = { title: "Fournisseurs" };

export default function SuppliersPage() {
  return (
    <>
      <PageHeader
        title="Fournisseurs"
        description="Gestion des fournisseurs et commandes d'approvisionnement"
      />
      <EmptyState
        icon={Truck}
        title="Module fournisseurs à venir"
        description="La gestion des fournisseurs sera disponible dans un bloc ultérieur."
      />
    </>
  );
}
