export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Em quanto tempo vocês entregam um projeto?",
    answer:
      "Depende do escopo. Landing pages ficam prontas em 5-10 dias úteis. Sites institucionais em 3-4 semanas. SaaS e plataformas são escopados caso a caso, com entregas iterativas — você vê o produto crescer a cada sprint.",
  },
  {
    question: "Qual stack vocês usam?",
    answer:
      "Next.js, React, Tailwind e shadcn/ui no front. NestJS, Node e Python (FastAPI) no backend. Postgres + Prisma + Redis. React Native para mobile. Integração com IA via Anthropic (Claude) e OpenAI. Toda escolha é justificada no escopo.",
  },
  {
    question: "Vocês oferecem manutenção depois do deploy?",
    answer:
      "Sim. Oferecemos planos mensais de evolução e suporte, com SLA definido, acesso direto ao time e roadmap compartilhado. Nada de \"entreguei e sumi\".",
  },
  {
    question: "O código fica comigo?",
    answer:
      "Sempre. Repositório no seu GitHub desde o dia 1, sem licenças travadas, sem dependência de nós para operar ou expandir.",
  },
  {
    question: "E se eu já tenho um projeto pela metade?",
    answer:
      "A gente faz auditoria de código e arquitetura, aponta riscos, repagina o que for necessário e assume a partir de onde está. Sem refazer por refazer.",
  },
];
