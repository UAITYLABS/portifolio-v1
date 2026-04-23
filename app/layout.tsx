import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { config } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(config.brand.url),
  title: {
    default: `${config.brand.name} — ${config.brand.tagline}`,
    template: `%s · ${config.brand.name}`,
  },
  description: config.brand.description,
  keywords: [
    "software house brasil",
    "desenvolvimento web",
    "SaaS sob medida",
    "automação IA",
    "Next.js",
    "React",
    "UAITY",
  ],
  authors: [{ name: "UAITY", url: config.brand.mainSite }],
  creator: "UAITY",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: config.brand.url,
    title: `${config.brand.name} — ${config.brand.tagline}`,
    description: config.brand.description,
    siteName: config.brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.brand.name} — ${config.brand.tagline}`,
    description: config.brand.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
