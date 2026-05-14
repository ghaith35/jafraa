import { redirect } from "next/navigation";
import { getSuperAdminSession } from "@/lib/auth/super-admin-session";

export default async function SuperAdminRoot() {
  const session = await getSuperAdminSession();
  if (session) redirect("/super-admin/dashboard");
  redirect("/super-admin/login");
}
