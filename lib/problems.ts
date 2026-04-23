export interface Problem {
  num: string;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    num: "01",
    title: "Site que não converte",
    description:
      "Presença digital amadora afasta cliente qualificado e inflaciona seu CAC.",
  },
  {
    num: "02",
    title: "Processos manuais",
    description:
      "Equipe operacional consumida por planilhas, WhatsApp e cópia/cola entre sistemas.",
  },
  {
    num: "03",
    title: "Dados sem insight",
    description:
      "Informação espalhada em ferramentas desconectadas, sem visão unificada do negócio.",
  },
  {
    num: "04",
    title: "Leads perdidos",
    description:
      "Oportunidades caindo por falta de follow-up, sem agente, sem CRM, sem histórico.",
  },
];

export interface ProcessStep {
  num: string;
  label: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    label: "BRIEF",
    title: "Entender a dor.",
    description:
      "Call de 30 minutos pra alinhar objetivo, escopo, contexto e restrições.",
  },
  {
    num: "02",
    label: "PROPOSTA",
    title: "Escopo e prazo.",
    description:
      "Em até 48h você recebe proposta escrita com entregáveis, cronograma e investimento.",
  },
  {
    num: "03",
    label: "BUILD",
    title: "Entrega iterativa.",
    description:
      "Sprints curtos, ambiente de staging desde o primeiro dia, feedback contínuo.",
  },
  {
    num: "04",
    label: "LIVE",
    title: "Deploy e suporte.",
    description:
      "Produção, documentação, treinamento do time e plano de evolução mensal.",
  },
];
