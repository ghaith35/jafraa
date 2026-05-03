import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { PageHeader } from "@/components/shared/PageHeader";
import {
  getCatalogPageData,
  listFamiliesByBrand,
} from "@/features/catalog/actions/catalog.actions";
import { CatalogBrowser } from "@/features/catalog/components/CatalogBrowser";

export const metadata = { title: "Catalogue des appareils" };

export default async function CatalogPage(props: {
  searchParams: Promise<{ category?: string; brand?: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const sp = await props.searchParams;
  const { categories, selectedCategory, brands } = await getCatalogPageData(
    sp.category,
    { companyId: session.companyId, storeId: session.storeIds[0] }
  );

  // Load families for selected brand if any
  let selectedBrand: (typeof brands)[number] | null = null;
  let families: Awaited<ReturnType<typeof listFamiliesByBrand>> = [];

  if (sp.brand) {
    selectedBrand = brands.find((b) => b.id === sp.brand) ?? null;
    if (selectedBrand) {
      families = await listFamiliesByBrand(selectedBrand.id, {
        companyId: session.companyId,
        storeId: session.storeIds[0],
      });
    }
  }

  return (
    <>
      <PageHeader
        title="Catalogue"
        description="Appareils, marques et familles de modèles"
      />
      <CatalogBrowser
        categories={categories}
        selectedCategoryKey={selectedCategory?.key ?? null}
        brands={brands}
        selectedBrandId={selectedBrand?.id ?? null}
        families={families}
        userRole={session.role}
      />
    </>
  );
}
