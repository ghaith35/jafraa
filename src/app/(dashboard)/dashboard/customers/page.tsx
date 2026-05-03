import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { Users } from "lucide-react";

export const metadata = { title: "Clients" };

export default function CustomersPage() {
  return (
    <>
      <PageHeader
        title="Clients"
        description="Gestion des clients et de leurs appareils"
      />
      <EmptyState
        icon={Users}
        title="Module clients à venir"
        description="La gestion des clients (nommés et clients de passage) sera disponible au Bloc 5."
      />
    </>
  );
}
