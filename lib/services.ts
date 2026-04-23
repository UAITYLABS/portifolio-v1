import type { L10n } from "./projects";

export type ServiceSize = "large" | "medium" | "small";
export type ServiceAccent = 1 | 2 | 3 | 4 | 5 | 6;

export interface Service {
  tag: L10n;
  title: L10n;
  titleHighlight?: L10n;
  description: L10n;
  glyph: string;
  size: ServiceSize;
  accent: ServiceAccent;
}

export const services: Service[] = [
  {
    tag: { pt: "01 / Sites & Landing Pages", en: "01 / Websites & Landing Pages" },
    title: { pt: "Sites que convertem.", en: "Websites that convert." },
    titleHighlight: { pt: "convertem.", en: "convert." },
    description: {
      pt: "Presença digital pensada do SEO à performance. Landing pages com copy orientada a conversão, animações suaves e design que faz sua marca parecer grande antes mesmo de você ser.",
      en: "Digital presence designed from SEO to performance. Landing pages with conversion-oriented copy, smooth animations and design that makes your brand feel big before it actually is.",
    },
    glyph: "⌬",
    size: "large",
    accent: 1,
  },
  {
    tag: { pt: "02 / SaaS sob medida", en: "02 / Custom SaaS" },
    title: { pt: "SaaS sob medida.", en: "Custom SaaS." },
    titleHighlight: { pt: "SaaS", en: "SaaS" },
    description: {
      pt: "Plataformas completas com autenticação, billing, multi-tenant, dashboard e integrações. Stack moderna e escalável.",
      en: "Complete platforms with auth, billing, multi-tenant, dashboards and integrations. Modern and scalable stack.",
    },
    glyph: "◇",
    size: "medium",
    accent: 2,
  },
  {
    tag: { pt: "03 / Automação", en: "03 / Automation" },
    title: { pt: "Agentes que trabalham.", en: "Agents that work." },
    titleHighlight: { pt: "trabalham", en: "work" },
    description: {
      pt: "Agentes que atendem pelo WhatsApp, qualificam lead, agendam reunião, respondem dúvida — 24 horas por dia.",
      en: "Agents that reply on WhatsApp, qualify leads, book meetings, answer questions — 24 hours a day.",
    },
    glyph: "✦",
    size: "medium",
    accent: 3,
  },
  {
    tag: { pt: "04 / E-commerce", en: "04 / E-commerce" },
    title: { pt: "Lojas rápidas.", en: "Fast stores." },
    description: {
      pt: "Next.js + Stripe + admin próprio. Sem taxa de plataforma.",
      en: "Next.js + Stripe + custom admin. No platform fees.",
    },
    glyph: "⬡",
    size: "small",
    accent: 4,
  },
  {
    tag: { pt: "05 / Mobile", en: "05 / Mobile" },
    title: { pt: "Apps nativos.", en: "Native apps." },
    description: {
      pt: "React Native com performance de nativo. iOS + Android.",
      en: "React Native with native performance. iOS + Android.",
    },
    glyph: "▢",
    size: "small",
    accent: 5,
  },
  {
    tag: { pt: "06 / Consultoria", en: "06 / Consulting" },
    title: { pt: "Consultoria técnica.", en: "Technical consulting." },
    description: {
      pt: "Auditoria de stack, revisão de arquitetura, mentoria de time.",
      en: "Stack audit, architecture review, team mentorship.",
    },
    glyph: "◈",
    size: "small",
    accent: 6,
  },
];
