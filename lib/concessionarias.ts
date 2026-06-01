export interface Concessionaria {
  nome: string;
  estado: string;
}

export const CONCESSIONARIAS: Concessionaria[] = [
  // Alagoas
  { nome: "Equatorial Alagoas", estado: "AL" },
  // Amapa
  { nome: "CEA Equatorial Energia", estado: "AP" },
  // Amazonas
  { nome: "Amazonas Energia", estado: "AM" },
  // Bahia
  { nome: "Coelba (Neoenergia)", estado: "BA" },
  // Ceara
  { nome: "Enel Ceara", estado: "CE" },
  // Distrito Federal
  { nome: "Neoenergia Brasilia", estado: "DF" },
  // Espirito Santo
  { nome: "EDP Espirito Santo", estado: "ES" },
  // Goias
  { nome: "Enel Goias", estado: "GO" },
  { nome: "Equatorial Goias", estado: "GO" },
  // Maranhao
  { nome: "Equatorial Maranhao", estado: "MA" },
  // Mato Grosso
  { nome: "Energisa Mato Grosso", estado: "MT" },
  // Mato Grosso do Sul
  { nome: "Energisa Mato Grosso do Sul", estado: "MS" },
  // Minas Gerais
  { nome: "CEMIG", estado: "MG" },
  { nome: "CEMIG-D", estado: "MG" },
  { nome: "Energisa Minas Gerais", estado: "MG" },
  { nome: "DME Distribuicao", estado: "MG" },
  // Para
  { nome: "Equatorial Para", estado: "PA" },
  // Paraiba
  { nome: "Energisa Paraiba", estado: "PB" },
  // Parana
  { nome: "Copel Distribuicao", estado: "PR" },
  { nome: "Cocel", estado: "PR" },
  { nome: "Forcel", estado: "PR" },
  // Pernambuco
  { nome: "Neoenergia Pernambuco (Celpe)", estado: "PE" },
  // Piaui
  { nome: "Equatorial Piaui", estado: "PI" },
  // Rio de Janeiro
  { nome: "Enel Rio", estado: "RJ" },
  { nome: "Light", estado: "RJ" },
  { nome: "Energisa Nova Friburgo", estado: "RJ" },
  // Rio Grande do Norte
  { nome: "Neoenergia Cosern", estado: "RN" },
  // Rio Grande do Sul
  { nome: "CEEE Equatorial", estado: "RS" },
  { nome: "RGE Sul", estado: "RS" },
  // Rondonia
  { nome: "Energisa Rondonia", estado: "RO" },
  // Roraima
  { nome: "Roraima Energia", estado: "RR" },
  // Santa Catarina
  { nome: "Celesc Distribuicao", estado: "SC" },
  // Sao Paulo
  { nome: "Enel Sao Paulo", estado: "SP" },
  { nome: "CPFL Paulista", estado: "SP" },
  { nome: "CPFL Piratininga", estado: "SP" },
  { nome: "CPFL Santa Cruz", estado: "SP" },
  { nome: "EDP Sao Paulo", estado: "SP" },
  { nome: "Elektro (Neoenergia)", estado: "SP" },
  { nome: "Energisa Sul-Sudeste", estado: "SP" },
  // Sergipe
  { nome: "Energisa Sergipe", estado: "SE" },
  // Tocantins
  { nome: "Energisa Tocantins", estado: "TO" },
];

export const ESTADOS = Array.from(new Set(CONCESSIONARIAS.map((c) => c.estado))).sort();

export function getConcessionariasByEstado(estado: string): Concessionaria[] {
  return CONCESSIONARIAS.filter((c) => c.estado === estado);
}
