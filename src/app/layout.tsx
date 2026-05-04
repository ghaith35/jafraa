import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "REPAIRE",
    template: "%s | REPAIRE",
  },
  description: "Gestion de réparations, caisse et stock pour votre boutique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
