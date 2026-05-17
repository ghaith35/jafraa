import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import {
  getCatalogPageData,
  listFamiliesByBrand,
  listModelsByFamily,
} from "@/features/catalog/actions/catalog.actions";
import { CatalogBrowser } from "@/features/catalog/components/CatalogBrowser";

export const metadata = { title: "Catalogue des appareils" };

export default async function CatalogPage(props: {
  searchParams: Promise<{ category?: string; brand?: string; family?: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const sp = await props.searchParams;
  const { categories, selectedCategory, brands } = await getCatalogPageData(
    sp.category,
    { companyId: session.companyId, storeId: session.storeIds[0] }
  );

  let selectedBrand: (typeof brands)[number] | null = null;
  let families: Awaited<ReturnType<typeof listFamiliesByBrand>> = [];
  let selectedFamily: (typeof families)[number] | null = null;
  let models: Awaited<ReturnType<typeof listModelsByFamily>> = [];

  if (sp.brand) {
    selectedBrand = brands.find((b) => b.id === sp.brand) ?? null;
    if (selectedBrand) {
      families = await listFamiliesByBrand(selectedBrand.id, {
        companyId: session.companyId,
        storeId: session.storeIds[0],
        includeLaptopModelFallback: true,
      });
      if (sp.family) {
        selectedFamily = families.find((f) => f.id === sp.family) ?? null;
        if (selectedFamily) {
          models = await listModelsByFamily(selectedFamily.id);
        }
      }
    }
  }

  return (
    <>
      <CatalogBrowser
        categories={categories}
        selectedCategoryKey={selectedCategory?.key ?? null}
        brands={brands}
        selectedBrandId={selectedBrand?.id ?? null}
        families={families}
        selectedFamilyId={selectedFamily?.id ?? null}
        models={models}
        userRole={session.role}
      />
    </>
  );
}
