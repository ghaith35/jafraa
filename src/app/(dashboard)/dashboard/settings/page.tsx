import { PageHeader } from "@/components/shared/PageHeader";
import { Settings, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Paramètres" };

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Paramètres"
        description="Configuration de la boutique et de l'entreprise"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Catalog card */}
        <Link
          href="/dashboard/settings/catalog"
          className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
        >
          <div className="mb-3 rounded-lg bg-accent p-2.5 w-fit">
            <Cpu className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            Catalogue des appareils
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Gérer les catégories, marques et familles de modèles
          </p>
        </Link>

        {/* Placeholder for future settings */}
        <div className="rounded-xl border border-dashed border-border bg-card/50 p-5">
          <div className="mb-3 rounded-lg bg-muted p-2.5 w-fit">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </div>
          <h3 className="text-sm font-semibold text-muted-foreground">
            Paramètres boutique
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Formats de numéros, seuils, WhatsApp — à venir
          </p>
        </div>
      </div>
    </>
  );
}
