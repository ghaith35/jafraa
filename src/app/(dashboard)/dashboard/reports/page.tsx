import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { BarChart2 } from "lucide-react";

export const metadata = { title: "Rapports" };

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Rapports"
        description="Ventes journalières, revenus réparations, écarts de caisse"
      />
      <EmptyState
        icon={BarChart2}
        title="Module rapports à venir"
        description="Les rapports de gestion seront disponibles au Bloc 17."
      />
    </>
  );
}
