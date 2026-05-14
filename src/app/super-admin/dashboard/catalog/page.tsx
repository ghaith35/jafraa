import { Suspense } from "react";
import { SuperAdminCatalogBrowser } from "@/features/super-admin/components/SuperAdminCatalogBrowser";

export const metadata = { title: "Catalog — Super Admin" };

export default function AdminCatalogPage() {
  return (
    <div style={{ height: "calc(100vh - 5rem)" }}>
      <Suspense fallback={<div className="flex items-center justify-center h-full text-muted-foreground text-sm">Loading catalog...</div>}>
        <SuperAdminCatalogBrowser />
      </Suspense>
    </div>
  );
}
