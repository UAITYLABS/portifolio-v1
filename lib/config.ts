export const config = {
  brand: {
    name: "UAITY | Software",
    short: "UAITY",
    tagline: "Construímos software que gera receita.",
    description:
      "Software house brasileira. Sites, SaaS e automações com IA para empresas que querem crescer.",
    url: "https://software.uaity.com",
    mainSite: "https://uaity.com",
    location: "Curitiba, Brasil",
  },
  contact: {
    email: "contact@uaity.com.br",
    whatsapp: {
      number: "5544997627128",
      display: "+55 44 99762-7128",
      defaultMessage:
        "Olá! Vim pelo site da UAITY | Software e gostaria de conversar sobre um projeto.",
    },
  },
  social: {
    github: "https://github.com/UAITYLABS",
    linkedin: "",
    instagram: "",
  },
  status: {
    acceptingProjects: true,
    availableFrom: "abril/2026",
  },
} as const;

export const waLink = (message?: string) => {
  const msg = message ?? config.contact.whatsapp.defaultMessage;
  return `https://wa.me/${config.contact.whatsapp.number}?text=${encodeURIComponent(msg)}`;
};
