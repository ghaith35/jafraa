import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { LoginForm } from "./_components/LoginForm";

export const metadata = {
  title: "Connexion — REPAIRE",
};

export default async function LoginPage() {
  const t = await getTranslations("auth");

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            REPAIRE
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("loginSubtitle")}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
