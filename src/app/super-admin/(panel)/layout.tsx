import { getSuperAdminSession } from "@/lib/auth/super-admin-session";
import { redirect } from "next/navigation";
import { superAdminLogout } from "@/features/super-admin/actions/auth.actions";
import { Shield, Building2, LogOut } from "lucide-react";
import Link from "next/link";
import { getAppI18n } from "@/lib/i18n/server";

export default async function SuperAdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = await getAppI18n();
  const session = await getSuperAdminSession();
  if (!session) redirect("/super-admin/login");

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
              R
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground">REPAIRE</span>
              <span className="text-xs bg-destructive/10 text-destructive px-1.5 py-0.5 rounded font-medium flex items-center gap-1">
                <Shield className="h-3 w-3" /> {t("superAdmin.label")}
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-1">
            <Link
              href="/super-admin/companies"
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Building2 className="h-4 w-4" />
              {t("superAdmin.companies")}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground hidden sm:block">
              {session.name}
            </span>
            <form action={superAdminLogout}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">{t("superAdmin.logout")}</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">{children}</main>
    </div>
  );
}
