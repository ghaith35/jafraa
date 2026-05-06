import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { AutoTranslator } from "@/components/i18n/AutoTranslator";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "REPAIRE",
    template: "%s | REPAIRE",
  },
  description: "Gestion de réparations, caisse et stock pour votre boutique.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("repaire-theme");var r=document.documentElement;if(t==="dark"){r.classList.add("dark");r.classList.remove("light")}else if(t==="light"){r.classList.add("light");r.classList.remove("dark")}}catch(e){}`,
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <AutoTranslator />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
