import type { Metadata } from "next";
import { headers } from "next/headers";
import { MeshBackground } from "@/components/MeshBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { detectLocale, getDict } from "@/lib/i18n";

// Force per-request rendering so Accept-Language header is read fresh for each visitor
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const locale = detectLocale(h.get("accept-language"));
  const dict = getDict(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
      alternateLocale: locale === "en" ? ["pt_BR"] : ["en_US"],
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function Home() {
  const h = await headers();
  const locale = detectLocale(h.get("accept-language"));

  return (
    <>
      <MeshBackground />
      <CursorGlow />
      <RevealOnScroll />

      <Nav locale={locale} />

      <main>
        <Hero locale={locale} />
        <Problem locale={locale} />
        <Services locale={locale} />
        <Cases locale={locale} />
        <Process locale={locale} />
        <Faq locale={locale} />
        <Cta locale={locale} />
      </main>

      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
    </>
  );
}
