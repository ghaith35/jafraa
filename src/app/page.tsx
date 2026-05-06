import { getAppI18n } from "@/lib/i18n/server";

export default async function HomePage() {
  const { t } = await getAppI18n();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
          <span className="text-2xl font-bold text-primary-foreground">R</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t("home.title")}
        </h1>
        <p className="max-w-sm text-muted-foreground">
          {t("home.description")}
        </p>
      </div>
    </div>
  );
}
