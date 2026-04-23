export type ServiceSize = "large" | "medium" | "small";
export type ServiceAccent = 1 | 2 | 3 | 4 | 5 | 6;

export interface Service {
  tag: string;
  title: string;
  titleHighlight?: string;
  description: string;
  glyph: string;
  size: ServiceSize;
  accent: ServiceAccent;
}

export const services: Service[] = [
  {
    tag: "01 / Sites & Landing Pages",
    title: "Sites que",
    titleHighlight: "convertem.",
    description:
      "Presença digital pensada do SEO à performance. Landing pages com copy orientada a conversão, animações suaves e design que faz sua marca parecer grande antes mesmo de você ser.",
    glyph: "⌬",
    size: "large",
    accent: 1,
  },
  {
    tag: "02 / SaaS sob medida",
    title: "SaaS sob medida.",
    titleHighlight: "SaaS",
    description:
      "Plataformas completas com autenticação, billing, multi-tenant, dashboard e integrações. Stack moderna e escalável.",
    glyph: "◇",
    size: "medium",
    accent: 2,
  },
  {
    tag: "03 / Automação com IA",
    title: "IA que trabalha.",
    titleHighlight: "trabalha",
    description:
      "Agentes que atendem pelo WhatsApp, qualificam lead, agendam reunião, respondem dúvida — 24 horas por dia.",
    glyph: "✦",
    size: "medium",
    accent: 3,
  },
  {
    tag: "04 / E-commerce",
    title: "Lojas rápidas.",
    description: "Next.js + Stripe + admin próprio. Sem taxa de plataforma.",
    glyph: "⬡",
    size: "small",
    accent: 4,
  },
  {
    tag: "05 / Mobile",
    title: "Apps nativos.",
    description: "React Native com performance de nativo. iOS + Android.",
    glyph: "▢",
    size: "small",
    accent: 5,
  },
  {
    tag: "06 / Consultoria",
    title: "Consultoria técnica.",
    description: "Auditoria de stack, revisão de arquitetura, mentoria de time.",
    glyph: "◈",
    size: "small",
    accent: 6,
  },
];
