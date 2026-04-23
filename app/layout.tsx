import type { Metadata } from "next";
import { headers } from "next/headers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { config } from "@/lib/config";
import { detectLocale } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(config.brand.url),
  keywords: [
    "software house brasil",
    "brazilian software house",
    "desenvolvimento web",
    "web development",
    "SaaS sob medida",
    "custom SaaS",
    "automação",
    "automation",
    "Next.js",
    "React",
    "UAITY",
  ],
  authors: [{ name: "UAITY", url: config.brand.mainSite }],
  creator: "UAITY",
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const h = await headers();
  const locale = detectLocale(h.get("accept-language"));
  const htmlLang = locale === "en" ? "en" : "pt-BR";

  return (
    <html
      lang={htmlLang}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
