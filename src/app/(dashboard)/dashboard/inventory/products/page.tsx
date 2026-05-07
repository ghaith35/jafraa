import Link from "next/link";
import { redirect } from "next/navigation";
import { FolderTree, Plus } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { InventorySearchBar } from "@/features/inventory/components/InventorySearchBar";
import { ProductCatalogView } from "@/features/inventory/components/ProductCatalogView";
import { ProductList } from "@/features/inventory/components/ProductList";
import { ProductTableView } from "@/features/inventory/components/ProductTableView";
import { ProductCardView } from "@/features/inventory/components/ProductCardView";
import { ProductCompactView } from "@/features/inventory/components/ProductCompactView";
import { ProductViewSwitcher } from "@/features/inventory/components/ProductViewSwitcher";
import { ProductFilters } from "@/features/inventory/components/ProductFilters";
import { listProducts, listProductFilterOptions } from "@/features/inventory/actions/product.actions";
import { PRODUCT_SORTS, PRODUCT_STOCK_FILTERS, PRODUCT_VIEW_MODES } from "@/features/inventory/lib/product-catalog";
import type { ProductSort, ProductStockFilter, ProductViewMode } from "@/features/inventory/lib/product-catalog";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Produits" };

function normalizeView(input: string | undefined): ProductViewMode {
  if (!input) return "list";
  return PRODUCT_VIEW_MODES.includes(input as ProductViewMode) ? (input as ProductViewMode) : "list";
}

function normalizeStock(input: string | undefined, archivedLegacy: string | undefined): ProductStockFilter {
  if (archivedLegacy === "1" && !input) return "archived";
  if (!input) return "all";
  return PRODUCT_STOCK_FILTERS.includes(input as ProductStockFilter) ? (input as ProductStockFilter) : "all";
}

function normalizeSort(input: string | undefined): ProductSort {
  if (!input) return "name_asc";
  return PRODUCT_SORTS.includes(input as ProductSort) ? (input as ProductSort) : "name_asc";
}

export default async function InventoryProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    archived?: string;
    view?: string;
    category?: string;
    brand?: string;
    stock?: string;
    sort?: string;
    spec?: string;
  }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:view")) redirect("/dashboard");

  const sp = await searchParams;
  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/inventory");

  const q = sp.q?.trim() || undefined;
  const view = normalizeView(sp.view);
  const stock = normalizeStock(sp.stock, sp.archived);
  const sort = normalizeSort(sp.sort);
  const category = sp.category?.trim() || undefined;
  const brand = sp.brand?.trim() || undefined;
  const spec = sp.spec?.trim() || undefined;
  const canManage = hasPermission(session.role, "inventory:manage");

  const [products, filterOptions] = await Promise.all([
    listProducts({
      storeId,
      q,
      category,
      brand,
      stock,
      sort,
      spec,
      showArchived: sp.archived === "1",
    }),
    listProductFilterOptions(storeId),
  ]);

  return (
    <div className="space-y-5">
      <PageHeader
        title={t("inventory.products")}
        description={t("inventory.productsDescription")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <ProductViewSwitcher view={view} />
            {canManage ? (
              <>
                <Link
                  href="/dashboard/inventory/categories"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
                >
                  <FolderTree className="h-4 w-4" />
                  {t("inventory.manageCategories")}
                </Link>
                <Link
                  href="/dashboard/inventory/products/new"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"
                >
                  <Plus className="h-4 w-4" />
                  {t("inventory.newProduct")}
                </Link>
              </>
            ) : null}
          </div>
        }
      />

      <InventorySearchBar placeholder={t("inventory.searchProducts")} defaultValue={q ?? ""} />

      <ProductFilters
        category={category}
        brand={brand}
        stock={stock}
        sort={sort}
        spec={spec}
        categories={filterOptions.categories}
        brands={filterOptions.brands}
      />

      {products.length === 0 ? (
        <ProductList products={products} userRole={session.role} />
      ) : view === "table" ? (
        <ProductTableView products={products} canManage={canManage} />
      ) : view === "card" ? (
        <ProductCardView products={products} canManage={canManage} />
      ) : view === "compact" ? (
        <ProductCompactView products={products} canManage={canManage} />
      ) : view === "categories" ? (
        <ProductCatalogView products={products} canManage={canManage} />
      ) : (
        <ProductList products={products} userRole={session.role} />
      )}
    </div>
  );
}
