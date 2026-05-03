import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ShoppingCart } from "lucide-react";

export const metadata = { title: "Caisse" };

export default function PosPage() {
  return (
    <>
      <PageHeader
        title="Caisse"
        description="Point de vente — ventes directes en espèces"
      />
      <EmptyState
        icon={ShoppingCart}
        title="Module caisse à venir"
        description="La caisse enregistreuse cash-only sera disponible au Bloc 12."
      />
    </>
  );
}
