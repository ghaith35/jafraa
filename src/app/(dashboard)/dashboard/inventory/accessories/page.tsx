import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { listAccessoryCategories } from "@/features/accessories/actions/accessory-category.actions";
import { AccessoriesBrowser } from "@/features/accessories/components/AccessoriesBrowser";

export const metadata = { title: "Accessoires" };

export default async function AccessoriesPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:view")) redirect("/dashboard");

  const tree = await listAccessoryCategories();
  const canManage = hasPermission(session.role, "inventory:manage");

  return (
    <div className="space-y-5">
      <PageHeader
        title="Accessoires"
        description="Catalogue des accessoires et produits génériques"
      />
      <AccessoriesBrowser tree={tree} canManage={canManage} />
    </div>
  );
}
