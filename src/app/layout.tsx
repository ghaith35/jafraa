import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
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
            __html: `try{var r=document.documentElement;var t=null;try{t=localStorage.getItem("repaire-theme")}catch(e){}var m=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;var n=t==="dark"||t==="light"?t:m?"dark":"light";r.classList.toggle("dark",n==="dark");r.classList.toggle("light",n==="light");r.dataset.theme=n;r.style.colorScheme=n}catch(e){}`,
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
