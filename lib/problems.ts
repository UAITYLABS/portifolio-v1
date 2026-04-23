import type { L10n } from "./projects";

export interface Problem {
  num: string;
  title: L10n;
  description: L10n;
}

export const problems: Problem[] = [
  {
    num: "01",
    title: { pt: "Site que não converte", en: "A site that doesn't convert" },
    description: {
      pt: "Presença digital amadora afasta cliente qualificado e inflaciona seu CAC.",
      en: "An amateur digital presence pushes qualified customers away and inflates your CAC.",
    },
  },
  {
    num: "02",
    title: { pt: "Processos manuais", en: "Manual processes" },
    description: {
      pt: "Equipe operacional consumida por planilhas, WhatsApp e cópia/cola entre sistemas.",
      en: "Operations team drained by spreadsheets, WhatsApp and copy/paste between systems.",
    },
  },
  {
    num: "03",
    title: { pt: "Dados sem insight", en: "Data without insight" },
    description: {
      pt: "Informação espalhada em ferramentas desconectadas, sem visão unificada do negócio.",
      en: "Information scattered across disconnected tools, with no unified view of the business.",
    },
  },
  {
    num: "04",
    title: { pt: "Leads perdidos", en: "Lost leads" },
    description: {
      pt: "Oportunidades caindo por falta de follow-up, sem agente, sem CRM, sem histórico.",
      en: "Opportunities falling through for lack of follow-up — no agent, no CRM, no history.",
    },
  },
];

export interface ProcessStep {
  num: string;
  label: L10n;
  title: L10n;
  description: L10n;
}

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    label: { pt: "BRIEF", en: "BRIEF" },
    title: { pt: "Entender a dor.", en: "Understand the pain." },
    description: {
      pt: "Call de 30 minutos pra alinhar objetivo, escopo, contexto e restrições.",
      en: "A 30-minute call to align on goal, scope, context and constraints.",
    },
  },
  {
    num: "02",
    label: { pt: "PROPOSTA", en: "PROPOSAL" },
    title: { pt: "Escopo e prazo.", en: "Scope and timeline." },
    description: {
      pt: "Em até 48h você recebe proposta escrita com entregáveis, cronograma e investimento.",
      en: "Within 48h you receive a written proposal with deliverables, timeline and investment.",
    },
  },
  {
    num: "03",
    label: { pt: "BUILD", en: "BUILD" },
    title: { pt: "Entrega iterativa.", en: "Iterative delivery." },
    description: {
      pt: "Sprints curtos, ambiente de staging desde o primeiro dia, feedback contínuo.",
      en: "Short sprints, staging environment from day one, continuous feedback.",
    },
  },
  {
    num: "04",
    label: { pt: "LIVE", en: "LIVE" },
    title: { pt: "Deploy e suporte.", en: "Deploy and support." },
    description: {
      pt: "Produção, documentação, treinamento do time e plano de evolução mensal.",
      en: "Production, documentation, team training and monthly evolution plan.",
    },
  },
];
