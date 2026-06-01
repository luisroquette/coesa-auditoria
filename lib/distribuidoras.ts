export interface Distribuidora {
  slug: string;
  name: string;
  shortName: string;
  state: string;
  states: string[];
  cnpj?: string;
  phone?: string;
  description: string;
  region: string;
}

export const distribuidoras: Distribuidora[] = [
  {
    slug: "cemig",
    name: "CEMIG — Companhia Energética de Minas Gerais",
    shortName: "CEMIG",
    state: "Minas Gerais",
    states: ["Minas Gerais"],
    description:
      "Uma das maiores distribuidoras de energia do Brasil, atende mais de 8 milhões de clientes em Minas Gerais. A CEMIG é controlada pelo governo estadual mineiro e opera sob regulação da ANEEL.",
    region: "Sudeste",
  },
  {
    slug: "enel",
    name: "Enel Distribuição",
    shortName: "Enel",
    state: "São Paulo, Rio de Janeiro, Ceará e Goiás",
    states: ["São Paulo", "Rio de Janeiro", "Ceará", "Goiás"],
    description:
      "A Enel opera distribuidoras em São Paulo (Enel SP), Rio de Janeiro (Enel RJ), Ceará (Enel CE) e Goiás (Enel GO), atendendo milhões de consumidores em todo o Brasil.",
    region: "Sudeste / Nordeste / Centro-Oeste",
  },
  {
    slug: "cpfl",
    name: "CPFL Energia",
    shortName: "CPFL",
    state: "São Paulo e sul de Minas Gerais",
    states: ["São Paulo", "Minas Gerais", "Rio Grande do Sul", "Paraíba"],
    description:
      "O grupo CPFL opera diversas distribuidoras no interior de São Paulo (CPFL Paulista, CPFL Piratininga, RGE) e em outros estados, atendendo grande parte do interior paulista.",
    region: "Sudeste / Sul",
  },
  {
    slug: "energisa",
    name: "Energisa",
    shortName: "Energisa",
    state: "Minas Gerais, Mato Grosso, Paraíba e outros",
    states: [
      "Minas Gerais",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Paraíba",
      "Sergipe",
      "Tocantins",
      "Rondônia",
      "Acre",
      "Amapá",
      "Roraima",
      "Borborema",
    ],
    description:
      "O grupo Energisa é um dos maiores do setor elétrico brasileiro, com distribuidoras em 11 estados. Atende desde o interior do Nordeste até estados do Norte e Centro-Oeste do país.",
    region: "Nordeste / Centro-Oeste / Norte",
  },
  {
    slug: "copel",
    name: "COPEL — Companhia Paranaense de Energia",
    shortName: "COPEL",
    state: "Paraná",
    states: ["Paraná"],
    description:
      "A COPEL é a distribuidora oficial do estado do Paraná, atendendo praticamente todo o território paranaense. É uma empresa de capital misto, com participação do governo estadual.",
    region: "Sul",
  },
  {
    slug: "light",
    name: "Light Serviços de Eletricidade",
    shortName: "Light",
    state: "Rio de Janeiro",
    states: ["Rio de Janeiro"],
    description:
      "A Light atende a região metropolitana do Rio de Janeiro, incluindo a capital e municípios vizinhos. É uma das distribuidoras com maior número de ocorrências de cobranças indevidas registradas na ANEEL.",
    region: "Sudeste",
  },
  {
    slug: "equatorial",
    name: "Equatorial Energia",
    shortName: "Equatorial",
    state: "Maranhão, Pará, Piauí, Alagoas e Goiás",
    states: [
      "Maranhão",
      "Pará",
      "Piauí",
      "Alagoas",
      "Goiás",
      "Rio Grande do Sul",
      "Espírito Santo",
      "Minas Gerais",
      "Pernambuco",
    ],
    description:
      "O grupo Equatorial expandiu significativamente nos últimos anos, adquirindo distribuidoras em diversas regiões do Brasil. Atende consumidores do Nordeste, Norte, Centro-Oeste e Sudeste.",
    region: "Nordeste / Norte / Centro-Oeste",
  },
  {
    slug: "neoenergia",
    name: "Neoenergia",
    shortName: "Neoenergia",
    state: "Bahia, Pernambuco, Rio Grande do Norte e Brasília",
    states: ["Bahia", "Pernambuco", "Rio Grande do Norte", "Distrito Federal"],
    description:
      "O grupo Neoenergia opera distribuidoras no Nordeste (Coelba, Celpe, Cosern) e no Distrito Federal (Neoenergia Brasília, antiga CEB). É controlado pela espanhola Iberdrola.",
    region: "Nordeste / Centro-Oeste",
  },
  {
    slug: "celesc",
    name: "CELESC — Centrais Elétricas de Santa Catarina",
    shortName: "CELESC",
    state: "Santa Catarina",
    states: ["Santa Catarina"],
    description:
      "A CELESC é a distribuidora oficial do estado de Santa Catarina, controlada pelo governo estadual. Atende praticamente todo o território catarinense, com exceção de alguns municípios.",
    region: "Sul",
  },
];

export function getDistribuidora(slug: string): Distribuidora | undefined {
  return distribuidoras.find((d) => d.slug === slug);
}
