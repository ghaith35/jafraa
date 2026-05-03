import { redirect } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { InventoryTabs } from "@/features/inventory/components/InventoryTabs";
import { InventorySearchBar } from "@/features/inventory/components/InventorySearchBar";
import { ProductList } from "@/features/inventory/components/ProductList";
import { PartList } from "@/features/inventory/components/PartList";
import { ServiceList } from "@/features/inventory/components/ServiceList";
import { listProducts } from "@/features/inventory/actions/product.actions";
import { listParts } from "@/features/inventory/actions/part.actions";
import { listServices } from "@/features/inventory/actions/service.actions";

export const metadata = { title: "Inventaire" };

type TabKey = "products" | "parts" | "services";

function isValidTab(v?: string): v is TabKey {
  return v === "products" || v === "parts" || v === "services";
}

const ADD_LINKS: Record<TabKey, { href: string; label: string }> = {
  products: { href: "/dashboard/inventory/products/new", label: "Nouveau produit" },
  parts:    { href: "/dashboard/inventory/parts/new",    label: "Nouvelle pièce" },
  services: { href: "/dashboard/inventory/services/new", label: "Nouveau service" },
};

const SEARCH_PLACEHOLDERS: Record<TabKey, string> = {
  products: "Rechercher par nom, SKU, code-barres, marque…",
  parts:    "Rechercher par nom, SKU, code-barres, marque…",
  services: "Rechercher par nom, SKU, catégorie…",
};

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string; q?: string; archived?: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const sp = await searchParams;
  const tab: TabKey = isValidTab(sp.tab) ? sp.tab : "products";
  const q = sp.q?.trim() || undefined;
  const showArchived = sp.archived === "1";
  const storeId = session.storeIds[0];
  const canManage = hasPermission(session.role, "inventory:manage");

  const addLink = ADD_LINKS[tab];

  // Load the active tab's data only
  const [products, parts, services] = await Promise.all([
    tab === "products"
      ? listProducts({ storeId, q, showArchived })
      : Promise.resolve([]),
    tab === "parts"
      ? listParts({ storeId, q, showArchived })
      : Promise.resolve([]),
    tab === "services"
      ? listServices({ storeId, q, showArchived })
      : Promise.resolve([]),
  ]);

  // Compute counts for header label
  const count =
    tab === "products"
      ? products.length
      : tab === "parts"
        ? parts.length
        : services.length;

  const tabLabel =
    tab === "products" ? "produit" : tab === "parts" ? "pièce" : "service";

  return (
    <>
      <PageHeader
        title="Inventaire"
        description={`${count} ${tabLabel}${count !== 1 ? "s" : ""} trouvé${count !== 1 ? "s" : ""}`}
        actions={
          canManage ? (
            <Link
              href={addLink.href}
              className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Plus className="h-4 w-4" />
              {addLink.label}
            </Link>
          ) : undefined
        }
      />

      {/* Tabs */}
      <Suspense>
        <InventoryTabs activeTab={tab} />
      </Suspense>

      {/* Search */}
      <Suspense>
        <InventorySearchBar
          placeholder={SEARCH_PLACEHOLDERS[tab]}
          defaultValue={q ?? ""}
        />
      </Suspense>

      {/* Content */}
      <div className="mt-4">
        {tab === "products" && (
          <ProductList products={products} userRole={session.role} />
        )}
        {tab === "parts" && (
          <PartList parts={parts} userRole={session.role} />
        )}
        {tab === "services" && (
          <ServiceList services={services} userRole={session.role} />
        )}
      </div>
    </>
  );
}
