export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

/**
 * Detects locale from the browser's Accept-Language header.
 * Example input: "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
 * Returns "pt" or "en" (defaults to "pt" for Brazilian audience).
 */
export function detectLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return defaultLocale;
  const langs = acceptLanguage
    .split(",")
    .map((entry) => {
      const [tag, qPart] = entry.trim().split(";");
      const q = qPart?.trim().startsWith("q=") ? parseFloat(qPart.trim().slice(2)) : 1;
      return { tag: tag.toLowerCase(), q: Number.isNaN(q) ? 1 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of langs) {
    if (tag.startsWith("pt")) return "pt";
    if (tag.startsWith("en")) return "en";
  }
  return defaultLocale;
}

export interface Dict {
  meta: {
    title: string;
    description: string;
    tagline: string;
  };
  nav: {
    services: string;
    products: string;
    cases: string;
    process: string;
    cta: string;
  };
  hero: {
    statusAccepting: string;
    title: [string, string, string]; // parts around italic emphasis
    titleEmphasis: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Array<{ num: string; plus?: string; label1: string; label2: string }>;
  };
  problem: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    intro: string;
  };
  services: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    intro: string;
    learnMore: string;
  };
  products: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    intro: string;
    visit: string;
    items: {
      geo: { badge: string; tagline: string; taglineEmphasis: string; taglineAfter: string; features: string[] };
      clyra: { badge: string; tagline: string; features: string[] };
      clubmed: { badge: string; tagline: string; taglineEmphasis: string; taglineAfter: string; features: string[] };
    };
  };
  cases: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    intro: string;
    visit: string;
    ctaTitle: string;
    ctaEmphasis: string;
    ctaSub: string;
  };
  process: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    intro: string;
  };
  faq: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
  };
  cta: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    intro: string;
    contactEmail: string;
    contactWhatsapp: string;
    contactTime: string;
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      type: string;
      typePlaceholder: string;
      typeOptions: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitLoading: string;
      whatsappAlt: string;
      successMsg: string;
      legal: string;
    };
  };
  footer: {
    description: string;
    columns: {
      services: { title: string; items: string[] };
      products: { title: string; items: string[] };
      company: { title: string; items: string[] };
    };
    rights: string;
    madeIn: string;
  };
  whatsapp: {
    defaultMessage: string;
    newProjectMessage: string;
  };
}

const pt: Dict = {
  meta: {
    title: "UAITY | Software — Construímos software que gera receita.",
    description:
      "Software house brasileira. Sites, SaaS e automações com IA para empresas que querem crescer.",
    tagline: "Construímos software que gera receita.",
  },
  nav: {
    services: "Serviços",
    products: "Produtos",
    cases: "Cases",
    process: "Processo",
    cta: "Conversar →",
  },
  hero: {
    statusAccepting: "Aceitando novos projetos — abril/2026",
    title: ["Construímos", "", "que gera receita."],
    titleEmphasis: "software",
    sub: "Somos uma software house brasileira que transforma processos manuais em produtos digitais lucrativos. Sites, SaaS, automações — do briefing à operação.",
    ctaPrimary: "Iniciar um projeto",
    ctaSecondary: "Ver cases reais",
    stats: [
      { num: "40", plus: "+", label1: "endpoints em produção", label2: "— GeoExpansão" },
      { num: "30", plus: "+", label1: "módulos de análise", label2: "— Clyra Health OS" },
      { num: "15", plus: "+", label1: "projetos em produção", label2: "— portfólio UAITY" },
      { num: "96", plus: "/83", label1: "Lighthouse desktop/mobile", label2: "— média dos cases" },
    ],
  },
  problem: {
    eyebrow: "— O cenário",
    titleBefore: "Seu negócio está",
    titleEmphasis: "parando",
    titleAfter: "por coisas\nque deviam estar automatizadas.",
    intro:
      "A diferença entre empresas que crescem e empresas que estagnam raramente está no time — está na infraestrutura digital. Estes são os gargalos mais comuns que a gente resolve:",
  },
  services: {
    eyebrow: "— O que entregamos",
    titleBefore: "Seis formas de",
    titleEmphasis: "impulsionar",
    titleAfter: "\na operação do seu negócio.",
    intro:
      "Cada projeto começa com um diagnóstico honesto. Se não precisa, a gente te fala — e indica o caminho certo.",
    learnMore: "saber mais →",
  },
  products: {
    eyebrow: "— Plataformas em destaque",
    titleBefore: "Três projetos que mostram a",
    titleEmphasis: "profundidade",
    titleAfter: "\ntécnica da UAITY.",
    intro:
      "Do nosso laboratório de produtos às parcerias de longo prazo — plataformas em operação que representam o nosso padrão de engenharia.",
    visit: "Visitar ↗",
    items: {
      geo: {
        badge: "Plataforma geo · em produção",
        tagline: "Inteligência geográfica para quem precisa decidir",
        taglineEmphasis: "onde",
        taglineAfter: "abrir a próxima loja, franquia ou ponto.",
        features: [
          "Análise de 40+ indicadores por município",
          "Persona, concorrência, fornecedores, vetores de crescimento",
          "Relatório PDF completo de 15 a 20 páginas",
          "Radar de alertas e API pública com keys",
        ],
      },
      clyra: {
        badge: "Health OS · em produção",
        tagline:
          "Sistema operacional para clínicas e consultórios — do agendamento ao faturamento, com IA embutida.",
        features: [
          "Agenda, prontuário, receituário, agendamento online",
          "Agente WhatsApp com IA (Claude) — atende e agenda sozinho",
          "Analytics: receita, funil, no-show, churn",
          "Multi-tenant, LGPD, integração Asaas/Stripe",
        ],
      },
      clubmed: {
        badge: "Telemedicina · plataforma viva",
        tagline: "Plataforma de telemedicina e marketplace de saúde que conecta pacientes a especialistas em",
        taglineEmphasis: "todo o Brasil",
        taglineAfter: ".",
        features: [
          "Marketplace de médicos com agenda e avaliações",
          "Consultas por vídeo + prescrição digital",
          "Solicitação de exames integrada ao atendimento",
          "Dashboards administrativos e financeiro",
        ],
      },
    },
  },
  cases: {
    eyebrow: "— Cases reais",
    titleBefore: "Projetos que",
    titleEmphasis: "saíram do papel",
    titleAfter: "\ne estão rodando.",
    intro:
      "De telemedicina com 150+ médicos a esports com campeonatos oficiais, de gráficas locais a plataformas com 40+ endpoints. Cada card é uma entrega completa, do escopo à operação.",
    visit: "Visitar ↗",
    ctaTitle: "Seu projeto",
    ctaEmphasis: "Seu projeto",
    ctaSub: "Vamos conversar pelo WhatsApp.",
  },
  process: {
    eyebrow: "— Como funciona",
    titleBefore: "Do briefing",
    titleEmphasis: "ao deploy",
    titleAfter: "\nem quatro passos claros.",
    intro:
      "Processo enxuto, com entregas curtas e visibilidade total — você sabe o que está acontecendo o tempo todo.",
  },
  faq: {
    eyebrow: "— Dúvidas frequentes",
    titleBefore: "O que a gente",
    titleEmphasis: "responde",
    titleAfter: "\nantes mesmo da primeira call.",
  },
  cta: {
    eyebrow: "— Pronto pra começar?",
    titleBefore: "Fale com a gente.",
    titleEmphasis: "Sem compromisso.",
    intro:
      "Descreva em uma linha o que te trouxe aqui. A gente responde em até 1 dia útil com próximos passos concretos — ou te direciona pra alguém que resolva melhor, se for o caso.",
    contactEmail: "contact@uaity.com.br",
    contactWhatsapp: "WhatsApp — resposta rápida",
    contactTime: "Retorno em até 24h úteis",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      company: "Empresa",
      companyPlaceholder: "Nome da empresa",
      email: "Email profissional",
      emailPlaceholder: "voce@empresa.com",
      type: "Tipo de projeto",
      typePlaceholder: "Selecione...",
      typeOptions: [
        "Site / Landing Page",
        "SaaS sob medida",
        "Automação",
        "E-commerce",
        "App mobile",
        "Consultoria técnica",
        "Outro",
      ],
      message: "Conta um pouco",
      messagePlaceholder: "O que você quer resolver? Qual o prazo ideal?",
      submit: "Enviar mensagem",
      submitLoading: "Enviando...",
      whatsappAlt: "Preferir WhatsApp →",
      successMsg: "✓ Mensagem recebida. Retornamos em até 24h úteis.",
      legal: "Seus dados estão seguros. Não enviamos spam.",
    },
  },
  footer: {
    description:
      "Software house brasileira. Construímos sites, SaaS e automações que geram receita pra empresas que querem crescer.",
    columns: {
      services: { title: "Serviços", items: ["Sites", "SaaS sob medida", "Automação", "Consultoria"] },
      products: { title: "Plataformas", items: ["GeoExpansão", "Clyra", "ClubMed"] },
      company: { title: "Empresa", items: ["Cases", "Processo", "Contato", "uaity.com"] },
    },
    rights: "Todos os direitos reservados.",
    madeIn: "Feito em Curitiba, Brasil",
  },
  whatsapp: {
    defaultMessage:
      "Olá! Vim pelo site da UAITY | Software e gostaria de conversar sobre um projeto.",
    newProjectMessage:
      "Olá! Vim pelo site da UAITY | Software e gostaria de conversar sobre um novo projeto.",
  },
};

const en: Dict = {
  meta: {
    title: "UAITY | Software — We build software that drives revenue.",
    description:
      "Brazilian software house. Websites, SaaS and AI automations for companies that want to grow.",
    tagline: "We build software that drives revenue.",
  },
  nav: {
    services: "Services",
    products: "Products",
    cases: "Cases",
    process: "Process",
    cta: "Let's talk →",
  },
  hero: {
    statusAccepting: "Accepting new projects — April 2026",
    title: ["We build", "", "that drives revenue."],
    titleEmphasis: "software",
    sub: "We're a Brazilian software house turning manual processes into profitable digital products. Websites, SaaS, automations — from brief to operation.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See real cases",
    stats: [
      { num: "40", plus: "+", label1: "endpoints in production", label2: "— GeoExpansão" },
      { num: "30", plus: "+", label1: "analytics modules", label2: "— Clyra Health OS" },
      { num: "15", plus: "+", label1: "projects in production", label2: "— UAITY portfolio" },
      { num: "96", plus: "/83", label1: "Lighthouse desktop/mobile", label2: "— average across cases" },
    ],
  },
  problem: {
    eyebrow: "— The landscape",
    titleBefore: "Your business is",
    titleEmphasis: "stalling",
    titleAfter: "on things\nthat should already be automated.",
    intro:
      "The gap between companies that grow and companies that stall is rarely about the team — it's about digital infrastructure. These are the bottlenecks we most often solve:",
  },
  services: {
    eyebrow: "— What we deliver",
    titleBefore: "Six ways to",
    titleEmphasis: "accelerate",
    titleAfter: "\nyour business operations.",
    intro:
      "Every project starts with an honest diagnosis. If you don't need it, we tell you — and point you in the right direction.",
    learnMore: "learn more →",
  },
  products: {
    eyebrow: "— Featured platforms",
    titleBefore: "Three projects that reveal the",
    titleEmphasis: "depth",
    titleAfter: "\nof UAITY's engineering.",
    intro:
      "From our in-house product lab to long-term partnerships — platforms in production that represent our engineering standard.",
    visit: "Visit ↗",
    items: {
      geo: {
        badge: "Geo platform · in production",
        tagline: "Geographic intelligence for anyone deciding",
        taglineEmphasis: "where",
        taglineAfter: "to open the next store, franchise or location.",
        features: [
          "Analysis of 40+ indicators per municipality",
          "Persona, competition, suppliers, growth vectors",
          "Complete 15 to 20-page PDF report",
          "Alerts radar and public API with keys",
        ],
      },
      clyra: {
        badge: "Health OS · in production",
        tagline:
          "Operating system for clinics and medical offices — from scheduling to billing, with AI built in.",
        features: [
          "Schedule, medical records, prescriptions, online booking",
          "WhatsApp agent with AI (Claude) — answers and books on its own",
          "Analytics: revenue, funnel, no-show, churn",
          "Multi-tenant, LGPD, Asaas/Stripe integration",
        ],
      },
      clubmed: {
        badge: "Telemedicine · live platform",
        tagline: "Telemedicine and healthcare marketplace connecting patients to specialists across",
        taglineEmphasis: "all of Brazil",
        taglineAfter: ".",
        features: [
          "Doctors marketplace with scheduling and reviews",
          "Video consultations + digital prescriptions",
          "Lab test requests integrated into appointments",
          "Administrative and financial dashboards",
        ],
      },
    },
  },
  cases: {
    eyebrow: "— Real cases",
    titleBefore: "Projects that",
    titleEmphasis: "shipped",
    titleAfter: "\nand are live.",
    intro:
      "From telemedicine with 150+ doctors to esports with official tournaments, from local print shops to platforms with 40+ endpoints. Every card is a complete delivery, from scope to operation.",
    visit: "Visit ↗",
    ctaTitle: "Your project",
    ctaEmphasis: "Your project",
    ctaSub: "Let's chat on WhatsApp.",
  },
  process: {
    eyebrow: "— How it works",
    titleBefore: "From briefing",
    titleEmphasis: "to deploy",
    titleAfter: "\nin four clear steps.",
    intro:
      "A lean process with short deliverables and full visibility — you always know what's happening.",
  },
  faq: {
    eyebrow: "— Frequently asked",
    titleBefore: "What we",
    titleEmphasis: "answer",
    titleAfter: "\nbefore the first call.",
  },
  cta: {
    eyebrow: "— Ready to start?",
    titleBefore: "Talk to us.",
    titleEmphasis: "No commitment.",
    intro:
      "Describe in one line what brought you here. We reply within 1 business day with concrete next steps — or point you to someone better suited, if that's the case.",
    contactEmail: "contact@uaity.com.br",
    contactWhatsapp: "WhatsApp — quick reply",
    contactTime: "Reply within 24 business hours",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Company name",
      email: "Work email",
      emailPlaceholder: "you@company.com",
      type: "Project type",
      typePlaceholder: "Select...",
      typeOptions: [
        "Website / Landing Page",
        "Custom SaaS",
        "Automation",
        "E-commerce",
        "Mobile app",
        "Technical consulting",
        "Other",
      ],
      message: "Tell us more",
      messagePlaceholder: "What do you want to solve? What's your ideal timeline?",
      submit: "Send message",
      submitLoading: "Sending...",
      whatsappAlt: "Prefer WhatsApp →",
      successMsg: "✓ Message received. We'll reply within 24 business hours.",
      legal: "Your data is safe. We don't send spam.",
    },
  },
  footer: {
    description:
      "Brazilian software house. We build websites, SaaS and automations that drive revenue for companies that want to grow.",
    columns: {
      services: { title: "Services", items: ["Websites", "Custom SaaS", "Automation", "Consulting"] },
      products: { title: "Platforms", items: ["GeoExpansão", "Clyra", "ClubMed"] },
      company: { title: "Company", items: ["Cases", "Process", "Contact", "uaity.com"] },
    },
    rights: "All rights reserved.",
    madeIn: "Made in Curitiba, Brazil",
  },
  whatsapp: {
    defaultMessage:
      "Hi! I came from the UAITY | Software website and would like to chat about a project.",
    newProjectMessage:
      "Hi! I came from the UAITY | Software website and would like to chat about a new project.",
  },
};

export const dictionaries: Record<Locale, Dict> = { pt, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
