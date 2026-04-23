import type { L10n } from "./projects";

export interface Faq {
  question: L10n;
  answer: L10n;
}

export const faqs: Faq[] = [
  {
    question: {
      pt: "Em quanto tempo vocês entregam um projeto?",
      en: "How long does a project take?",
    },
    answer: {
      pt: "Depende do escopo. Landing pages ficam prontas em 5-10 dias úteis. Sites institucionais em 3-4 semanas. SaaS e plataformas são escopados caso a caso, com entregas iterativas — você vê o produto crescer a cada sprint.",
      en: "Depends on scope. Landing pages are done in 5-10 business days. Institutional sites in 3-4 weeks. SaaS and platforms are scoped case by case, with iterative deliveries — you watch the product grow every sprint.",
    },
  },
  {
    question: {
      pt: "Qual stack vocês usam?",
      en: "What stack do you use?",
    },
    answer: {
      pt: "Next.js, React, Tailwind e shadcn/ui no front. NestJS, Node e Python (FastAPI) no backend. Postgres + Prisma + Redis. React Native para mobile. Integração com IA via Anthropic (Claude) e OpenAI. Toda escolha é justificada no escopo.",
      en: "Next.js, React, Tailwind and shadcn/ui on the front end. NestJS, Node and Python (FastAPI) on the back end. Postgres + Prisma + Redis. React Native for mobile. AI integration via Anthropic (Claude) and OpenAI. Every choice is justified in the scope.",
    },
  },
  {
    question: {
      pt: "Vocês oferecem manutenção depois do deploy?",
      en: "Do you offer maintenance after deploy?",
    },
    answer: {
      pt: "Sim. Oferecemos planos mensais de evolução e suporte, com SLA definido, acesso direto ao time e roadmap compartilhado. Nada de \"entreguei e sumi\".",
      en: "Yes. We offer monthly evolution and support plans, with a defined SLA, direct team access and a shared roadmap. None of that \"shipped it and disappeared\".",
    },
  },
  {
    question: {
      pt: "O código fica comigo?",
      en: "Do I own the code?",
    },
    answer: {
      pt: "Sempre. Repositório no seu GitHub desde o dia 1, sem licenças travadas, sem dependência de nós para operar ou expandir.",
      en: "Always. Repository on your GitHub from day 1, no locked licenses, no dependency on us to operate or expand.",
    },
  },
  {
    question: {
      pt: "E se eu já tenho um projeto pela metade?",
      en: "What if I already have a half-finished project?",
    },
    answer: {
      pt: "A gente faz auditoria de código e arquitetura, aponta riscos, repagina o que for necessário e assume a partir de onde está. Sem refazer por refazer.",
      en: "We audit the code and architecture, flag risks, refactor what's needed and take over from where it is. No rewriting for the sake of rewriting.",
    },
  },
];
