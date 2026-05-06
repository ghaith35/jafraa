import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/shared/PageHeader";
import { getSession } from "@/lib/auth/session";
import { listCatalogSuggestions } from "@/features/catalog/actions/catalog.actions";
import { CatalogSuggestionsManager } from "@/features/catalog/components/CatalogSuggestionsManager";

export const metadata = { title: "Suggestions catalogue" };

export default async function CatalogSuggestionsPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  const t = await getTranslations("settings");
  const suggestions = await listCatalogSuggestions("all");

  return (
    <>
      <PageHeader
        title={t("catalogSuggestionsTitle")}
        description={t("catalogSuggestionsDescription")}
      />
      <CatalogSuggestionsManager suggestions={suggestions} />
    </>
  );
}
