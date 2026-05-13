import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { LoginForm } from "./_components/LoginForm";
import { Wrench } from "lucide-react";

export const metadata = {
  title: "Connexion — REPAIRE",
};

export default async function LoginPage() {
  const t = await getTranslations("auth");

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0c1226 0%, #1e1b4b 40%, #0f172a 100%)" }} />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative glowing orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }} />

      <div className="relative z-10 w-full max-w-[420px] px-5 py-12">
        {/* Brand header */}
        <div className="mb-10 text-center">
          {/* Logo mark */}
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-5"
            style={{
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              boxShadow: "0 0 40px -12px rgba(99,102,241,0.5)",
            }}
          >
            <Wrench className="h-7 w-7 text-white" />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            <span>RE</span>
            <span
              style={{
                background: "linear-gradient(135deg, #a5b4fc, #818cf8 50%, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >PAIRE</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            {t("loginSubtitle")}
          </p>
        </div>

        {/* Login card */}
        <div className="rounded-2xl border border-white/[0.08] p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-500">
          REPAIRE v2 &mdash; Gestion de réparation moderne
        </p>
      </div>
    </main>
  );
}
