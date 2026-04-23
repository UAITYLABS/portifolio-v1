import { MeshBackground } from "@/components/MeshBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Cases } from "@/components/Cases";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MeshBackground />
      <CursorGlow />
      <RevealOnScroll />

      <Nav />

      <main>
        <Hero />
        <Problem />
        <Services />
        <Products />
        <Cases />
        <Process />
        <Faq />
        <Cta />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
