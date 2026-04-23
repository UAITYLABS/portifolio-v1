import type { Locale } from "./i18n";

export type ProjectAccent = "blue" | "magenta" | "mint" | "coral" | "violet";
export type ProjectSize = "wide" | "med" | "sm";

export type L10n = Record<Locale, string>;

export interface Project {
  slug: string;
  name: string;
  category: L10n;
  year: number;
  featured?: boolean;
  size: ProjectSize;
  description: L10n;
  results?: Array<{ value: string; label: L10n }>;
  accent: ProjectAccent;
  image?: string;
  link?: string;
}

/**
 * Add new projects here.
 * Grid sizes:
 *   - wide: 4 columns (featured)
 *   - med:  3 columns
 *   - sm:   2 columns
 */
export const projects: Project[] = [
  {
    slug: "nuvemled",
    name: "NuvemLED",
    category: { pt: "E-commerce", en: "E-commerce" },
    year: 2025,
    featured: true,
    size: "wide",
    description: {
      pt: "E-commerce especializado em venda de painéis de LED — catálogo técnico detalhado, cotação online e gestão de pedidos. Design que comunica qualidade industrial sem perder sofisticação.",
      en: "Specialized e-commerce for LED panels — detailed technical catalog, online quoting and order management. Design that communicates industrial quality without losing sophistication.",
    },
    results: [
      { value: "B2B", label: { pt: "cotação online", en: "online quoting" } },
      { value: "Next.js", label: { pt: "stack moderna", en: "modern stack" } },
    ],
    accent: "blue",
    link: "https://nuvemled.com.br/",
  },
  {
    slug: "clubmed",
    name: "ClubMed",
    category: { pt: "Telemedicina", en: "Telemedicine" },
    year: 2025,
    size: "sm",
    description: {
      pt: "Plataforma de telemedicina com marketplace de especialistas, consultas online e agendamento integrado.",
      en: "Telemedicine platform with specialist marketplace, online consultations and integrated scheduling.",
    },
    results: [
      { value: "Telemed", label: { pt: "vídeo + agenda", en: "video + booking" } },
    ],
    accent: "mint",
    link: "https://www.clubmed.digital/",
  },
  {
    slug: "matrizgestao",
    name: "Matriz Gestão",
    category: { pt: "Landing Page", en: "Landing Page" },
    year: 2024,
    size: "med",
    description: {
      pt: "Landing page institucional para consultoria de gestão empresarial — copy orientada a conversão, agendamento de diagnóstico e apresentação de serviços.",
      en: "Institutional landing page for business management consulting — conversion-oriented copy, diagnostic scheduling and services presentation.",
    },
    results: [
      { value: "Landing", label: { pt: "lead gen", en: "lead gen" } },
    ],
    accent: "violet",
    link: "https://matrizgestao.com.br/",
  },
  {
    slug: "sdtelemedicina",
    name: "SD Telemedicina",
    category: { pt: "Saúde pública", en: "Public health" },
    year: 2025,
    size: "med",
    description: {
      pt: "Plataforma de telemedicina para prefeituras — automação de agendamento, atendimentos remotos e gestão administrativa integrada ao SUS.",
      en: "Telemedicine platform for city governments — scheduling automation, remote care and administrative management integrated with the Brazilian public health system (SUS).",
    },
    results: [
      { value: "SUS", label: { pt: "integrado", en: "integrated" } },
      { value: "Gov", label: { pt: "prefeituras", en: "city halls" } },
    ],
    accent: "coral",
    link: "https://www.sdtelemedicina.com/",
  },
  {
    slug: "clyra",
    name: "Clyra",
    category: { pt: "Health OS", en: "Health OS" },
    year: 2026,
    size: "med",
    description: {
      pt: "Sistema operacional para clínicas — agendamento, prontuário, analytics de receita e churn, e agente WhatsApp com Claude que atende e agenda sozinho. Multi-tenant e integração Asaas/Stripe.",
      en: "Operating system for clinics — scheduling, medical records, revenue and churn analytics, and a WhatsApp agent powered by Claude that answers and books on its own. Multi-tenant with Asaas/Stripe integration.",
    },
    results: [
      { value: "Claude", label: { pt: "WhatsApp agent", en: "WhatsApp agent" } },
      { value: "Multi-tenant", label: { pt: "clínicas em rede", en: "multi-clinic ready" } },
    ],
    accent: "magenta",
  },
  {
    slug: "portalzero",
    name: "PortalZero",
    category: { pt: "SaaS · Segurança", en: "SaaS · Security" },
    year: 2024,
    size: "med",
    description: {
      pt: "SaaS de filtragem de tráfego em nuvem — proteção contra bots e ferramentas de espionagem para campanhas publicitárias.",
      en: "Cloud traffic filtering SaaS — protection against bots and spy tools for advertising campaigns.",
    },
    results: [
      { value: "Cloud", label: { pt: "edge filter", en: "edge filter" } },
      { value: "SaaS", label: { pt: "multi-domínio", en: "multi-domain" } },
    ],
    accent: "mint",
    link: "https://portalzero.app/",
  },
  {
    slug: "metanoiagg",
    name: "Metanoia",
    category: { pt: "Esports", en: "Esports" },
    year: 2025,
    size: "med",
    description: {
      pt: "Ecossistema de esports com campeonatos, comunidade, academia (MetaClass) e loja oficial.",
      en: "Esports ecosystem with tournaments, community, academy (MetaClass) and official store.",
    },
    results: [
      { value: "Campeonatos", label: { pt: "brackets + registro", en: "brackets + registration" } },
      { value: "Loja", label: { pt: "e-commerce integrado", en: "integrated e-commerce" } },
    ],
    accent: "violet",
    link: "https://metanoiagg.com.br/",
  },
  {
    slug: "musicloja",
    name: "MusicLoja",
    category: { pt: "Educação · E-commerce", en: "Education · E-commerce" },
    year: 2025,
    size: "med",
    description: {
      pt: "Plataforma híbrida para escola de música — catálogo de aulas online integrado a e-commerce de instrumentos e acessórios musicais, num único ecossistema.",
      en: "Hybrid platform for a music school — online lessons catalog integrated with e-commerce of musical instruments and accessories, in a single ecosystem.",
    },
    results: [
      { value: "Híbrido", label: { pt: "aulas + loja", en: "lessons + shop" } },
      { value: "Catálogo", label: { pt: "instrumentos", en: "instruments" } },
    ],
    accent: "violet",
  },
  {
    slug: "modelo-pizzaria",
    name: "Modelo Pizzaria",
    category: { pt: "F&B · Template", en: "F&B · Template" },
    year: 2025,
    size: "med",
    description: {
      pt: "Template completo para pizzarias — cardápio digital, fluxo de pedidos, admin e design responsivo pronto para personalização de marca e menu.",
      en: "Complete template for pizzerias — digital menu, ordering flow, admin and responsive design ready to be personalized for brand and menu.",
    },
    results: [
      { value: "Template", label: { pt: "F&B pronto", en: "F&B ready" } },
      { value: "Pedidos", label: { pt: "fluxo completo", en: "full order flow" } },
    ],
    accent: "coral",
    link: "https://site-pepperoni-prototype.vercel.app/",
  },
  {
    slug: "getsemaniclinic",
    name: "Getsemani Clinic",
    category: { pt: "Clínica", en: "Clinic" },
    year: 2024,
    size: "med",
    description: {
      pt: "Site institucional para clínica de odontologia, estética facial e corporal, e nutrição — com agendamento online e portal do paciente.",
      en: "Institutional website for a clinic specialized in dentistry, facial and body aesthetics, and nutrition — with online booking and patient portal.",
    },
    results: [
      { value: "Multi-especialidade", label: { pt: "clínica integrada", en: "integrated clinic" } },
    ],
    accent: "coral",
    link: "https://getsemaniclinic.com.br/",
  },
  {
    slug: "gamese",
    name: "GameSe",
    category: { pt: "Gaming", en: "Gaming" },
    year: 2024,
    size: "med",
    description: {
      pt: "Plataforma de torneios de jogos competitivos — inscrição, brackets automáticos, premiação e gestão de participantes.",
      en: "Competitive gaming tournaments platform — registration, automatic brackets, prizes and participant management.",
    },
    results: [
      { value: "Torneios", label: { pt: "brackets automáticos", en: "automatic brackets" } },
    ],
    accent: "magenta",
    link: "https://gamese.gg/",
  },
  {
    slug: "geoexpansao",
    name: "GeoExpansão",
    category: { pt: "Plataforma · beta", en: "Platform · beta" },
    year: 2026,
    size: "med",
    description: {
      pt: "Plataforma de inteligência geográfica para decisão de expansão — análise por município, fornecedores, concorrência e relatório PDF executivo. Em testes.",
      en: "Geographic intelligence platform for expansion decisions — per-municipality analysis, suppliers, competition and executive PDF report. In testing.",
    },
    results: [
      { value: "40+", label: { pt: "endpoints", en: "endpoints" } },
      { value: "Beta", label: { pt: "em testes", en: "in testing" } },
    ],
    accent: "blue",
  },
  {
    slug: "paranagraf",
    name: "Paraná Graf",
    category: { pt: "Gráfica", en: "Print shop" },
    year: 2024,
    size: "sm",
    description: {
      pt: "Site para gráfica com catálogo, cotação e upload de arquivos.",
      en: "Website for a print shop with catalog, quoting and file uploads.",
    },
    accent: "blue",
  },
  {
    slug: "lumena-pratas",
    name: "Lumena Pratas",
    category: { pt: "E-commerce", en: "E-commerce" },
    year: 2023,
    size: "sm",
    description: {
      pt: "E-commerce de joias em prata com catálogo filtrável e checkout integrado.",
      en: "Silver jewelry e-commerce with filterable catalog and integrated checkout.",
    },
    accent: "violet",
  },
  {
    slug: "yadahia",
    name: "Yadahia",
    category: { pt: "Portfólio", en: "Portfolio" },
    year: 2023,
    size: "sm",
    description: {
      pt: "Portfólio para desenvolvedor web — projetos, skills e contato.",
      en: "Portfolio for a web developer — projects, skills and contact.",
    },
    accent: "mint",
  },
];
