import { SuperAdminLoginForm } from "./LoginForm";
import { getSuperAdminSession } from "@/lib/auth/super-admin-session";
import { redirect } from "next/navigation";

export const metadata = { title: "Super Admin — Connexion" };

export default async function SuperAdminLoginPage() {
  const session = await getSuperAdminSession();
  if (session) redirect("/super-admin/companies");

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-xl mb-4">
            R
          </div>
          <h1 className="text-2xl font-bold">REPAIRE</h1>
          <p className="text-sm text-muted-foreground mt-1">Administration centrale</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <SuperAdminLoginForm />
        </div>
      </div>
    </div>
  );
}
