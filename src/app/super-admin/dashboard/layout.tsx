import { redirect } from "next/navigation";
import { getSuperAdminSession } from "@/lib/auth/super-admin-session";
import { SuperAdminLayout } from "@/features/super-admin/components/SuperAdminLayout";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSuperAdminSession();
  if (!session) redirect("/super-admin");

  return <SuperAdminLayout user={session}>{children}</SuperAdminLayout>;
}
