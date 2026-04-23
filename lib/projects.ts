export type ProjectAccent = "blue" | "magenta" | "mint" | "coral" | "violet";
export type ProjectSize = "wide" | "med" | "sm";

export interface Project {
  slug: string;
  name: string;
  category: string;
  year: number;
  featured?: boolean;
  size: ProjectSize;
  description: string;
  results?: Array<{ value: string; label: string }>;
  accent: ProjectAccent;
  image?: string;
  link?: string;
}

/**
 * Adicione novos projetos aqui.
 * Tamanhos controlam o grid de cases:
 *   - wide: 4 colunas (destaque)
 *   - med:  3 colunas
 *   - sm:   2 colunas
 * Grid tem 6 colunas — combinações por linha: wide+sm, med+med, sm+sm+sm.
 */
export const projects: Project[] = [
  {
    slug: "nuvemled",
    name: "NuvemLED",
    category: "E-commerce",
    year: 2025,
    featured: true,
    size: "wide",
    description:
      "E-commerce especializado em venda de painéis de LED — catálogo técnico detalhado, cotação online e gestão de pedidos. Design que comunica qualidade industrial sem perder sofisticação.",
    results: [
      { value: "B2B", label: "cotação online" },
      { value: "Next.js", label: "stack moderna" },
    ],
    accent: "blue",
    link: "https://nuvemled.com.br/",
  },
  {
    slug: "clubmed",
    name: "ClubMed",
    category: "Telemedicina",
    year: 2025,
    size: "sm",
    description:
      "Plataforma de telemedicina com marketplace de especialistas, consultas online e agendamento integrado.",
    results: [
      { value: "Telemed", label: "vídeo + agenda" },
    ],
    accent: "mint",
    link: "https://www.clubmed.digital/",
  },
  {
    slug: "matrizgestao",
    name: "Matriz Gestão",
    category: "Landing Page",
    year: 2024,
    size: "med",
    description:
      "Landing page institucional para consultoria de gestão empresarial — copy orientada a conversão, agendamento de diagnóstico e apresentação de serviços.",
    results: [
      { value: "Landing", label: "lead gen" },
    ],
    accent: "violet",
    link: "https://matrizgestao.com.br/",
  },
  {
    slug: "sdtelemedicina",
    name: "SD Telemedicina",
    category: "Saúde pública",
    year: 2025,
    size: "med",
    description:
      "Plataforma de telemedicina para prefeituras — automação de agendamento, atendimentos remotos e gestão administrativa integrada ao SUS.",
    results: [
      { value: "SUS", label: "integrado" },
      { value: "Gov", label: "prefeituras" },
    ],
    accent: "coral",
    link: "https://www.sdtelemedicina.com/",
  },
  {
    slug: "geoexpansao",
    name: "GeoExpansão",
    category: "Plataforma",
    year: 2026,
    featured: true,
    size: "wide",
    description:
      "Plataforma completa de inteligência geográfica com 40+ endpoints, 30+ módulos de análise, IA narrativa, relatórios PDF de 15-20 páginas, API pública com keys e widget embed.",
    results: [
      { value: "40+", label: "endpoints" },
      { value: "15", label: "páginas A4 / report" },
      { value: "30+", label: "módulos" },
    ],
    accent: "blue",
  },
  {
    slug: "clyra",
    name: "Clyra",
    category: "Health OS",
    year: 2026,
    featured: true,
    size: "sm",
    description:
      "Sistema para clínicas com agente WhatsApp IA, analytics e multi-tenant.",
    results: [
      { value: "AI", label: "WhatsApp agent" },
      { value: "ML", label: "churn predict" },
    ],
    accent: "magenta",
  },
  {
    slug: "portalzero",
    name: "PortalZero",
    category: "SaaS · Segurança",
    year: 2024,
    size: "med",
    description:
      "SaaS de filtragem de tráfego em nuvem — proteção contra bots e ferramentas de espionagem para campanhas publicitárias.",
    results: [
      { value: "Cloud", label: "edge filter" },
      { value: "SaaS", label: "multi-domínio" },
    ],
    accent: "mint",
    link: "https://portalzero.app/",
  },
  {
    slug: "metanoiagg",
    name: "Metanoia",
    category: "Esports",
    year: 2025,
    size: "med",
    description:
      "Ecossistema de esports com campeonatos, comunidade, academia (MetaClass) e loja oficial.",
    results: [
      { value: "Campeonatos", label: "brackets + registro" },
      { value: "Loja", label: "e-commerce integrado" },
    ],
    accent: "violet",
    link: "https://metanoiagg.com.br/",
  },
  {
    slug: "musicloja",
    name: "MusicLoja",
    category: "Educação · E-commerce",
    year: 2025,
    size: "med",
    description:
      "Plataforma híbrida para escola de música — catálogo de aulas online integrado a e-commerce de instrumentos e acessórios musicais, num único ecossistema.",
    results: [
      { value: "Híbrido", label: "aulas + loja" },
      { value: "Catálogo", label: "instrumentos" },
    ],
    accent: "violet",
  },
  {
    slug: "modelo-pizzaria",
    name: "Modelo Pizzaria",
    category: "F&B · Template",
    year: 2025,
    size: "med",
    description:
      "Template completo para pizzarias — cardápio digital, fluxo de pedidos, admin e design responsivo pronto para personalização de marca e menu.",
    results: [
      { value: "Template", label: "F&B pronto" },
      { value: "Pedidos", label: "fluxo completo" },
    ],
    accent: "coral",
    link: "https://site-pepperoni-prototype.vercel.app/",
  },
  {
    slug: "getsemaniclinic",
    name: "Getsemani Clinic",
    category: "Clínica",
    year: 2024,
    size: "med",
    description:
      "Site institucional para clínica de odontologia, estética facial e corporal, e nutrição — com agendamento online e portal do paciente.",
    results: [
      { value: "Multi-especialidade", label: "clínica integrada" },
    ],
    accent: "coral",
    link: "https://getsemaniclinic.com.br/",
  },
  {
    slug: "gamese",
    name: "GameSe",
    category: "Gaming",
    year: 2024,
    size: "med",
    description:
      "Plataforma de torneios de jogos competitivos — inscrição, brackets automáticos, premiação e gestão de participantes.",
    results: [
      { value: "Torneios", label: "brackets automáticos" },
    ],
    accent: "magenta",
    link: "https://gamese.gg/",
  },
  {
    slug: "paranagraf",
    name: "Paraná Graf",
    category: "Gráfica",
    year: 2024,
    size: "sm",
    description:
      "Site para gráfica com catálogo, cotação e upload de arquivos.",
    accent: "blue",
  },
  {
    slug: "lumena-pratas",
    name: "Lumena Pratas",
    category: "E-commerce",
    year: 2023,
    size: "sm",
    description:
      "E-commerce de joias em prata com catálogo filtrável e checkout integrado.",
    accent: "violet",
  },
  {
    slug: "yadahia",
    name: "Yadahia",
    category: "Portfólio",
    year: 2023,
    size: "sm",
    description: "Portfólio para desenvolvedor web — projetos, skills e contato.",
    accent: "mint",
  },
];
