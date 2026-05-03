import { Suspense } from "react";
import { LoginForm } from "./_components/LoginForm";

export const metadata = {
  title: "Connexion — REPAIRE",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            REPAIRE
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Connectez-vous à votre espace
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
