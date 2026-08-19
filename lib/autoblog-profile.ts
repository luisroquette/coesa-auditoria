/** Dados públicos da instalação do autoblog. Nunca coloque chaves, tokens ou dados de clientes aqui. */
export const AUTOBLOG_PROFILE = {
  brand: {
    name: 'COESA Energia',
    siteUrl: 'https://auditoria.coesasolar.com.br',
    logoUrl: 'https://auditoria.coesasolar.com.br/images/logo-coesa-white.png',
  },
  blog: {
    title: 'Blog — Economia de Energia Elétrica | COESA',
    description:
      'Aprenda como reduzir sua conta de energia, entender impostos, bandeiras tarifárias e identificar cobranças indevidas na sua fatura de luz.',
    heading: 'Economia de energia elétrica',
    intro:
      'Entenda como funciona a sua conta de luz, quais impostos incidem, como identificar cobranças indevidas e como reduzir seus custos com energia de forma legal.',
  },
  editorial: {
    businessDescription:
      'empresa B2B de energia solar por assinatura e auditoria de contas de energia elétrica para empresas no Brasil',
    audience:
      'gestores e donos de empresas que querem entender a conta de luz, reduzir custos e avaliar energia solar por assinatura',
    tone:
      'profissional, claro e direto, sem jargão desnecessário; números concretos sempre que possível',
    internalLinks: [
      {
        label: 'Como verificar sua conta de energia',
        url: '/como-verificar-conta-de-energia',
        description: 'passo a passo para conferir os itens da fatura',
      },
      {
        label: 'Energia solar por assinatura',
        url: '/#como-funciona',
        description: 'como funciona a assinatura de energia solar',
      },
      {
        label: 'Distribuidoras',
        url: '/distribuidoras',
        description: 'informações por distribuidora de energia',
      },
    ],
    seedKeywords: [
      'auditoria de conta de energia para empresas',
      'como reduzir custos com energia elétrica na empresa',
      'demanda contratada de energia o que é',
      'energia solar por assinatura vale a pena',
      'como contestar cobrança indevida na conta de luz',
      'tarifação de energia elétrica para empresas',
      'créditos de energia solar como funcionam',
      'migração para o mercado livre de energia',
      'como ler a conta de energia elétrica da empresa',
      'eficiência energética em empresas',
    ],
  },
  cta: {
    title: 'Quer descobrir quanto a sua empresa pode economizar?',
    subtitle: 'Envie sua conta de energia e receba uma auditoria gratuita.',
    buttonLabel: 'Auditar Fatura Grátis',
    url: '/#auditoria',
  },
  integrations: {
    googleSearchConsoleEnabled: false,
    imageGenerationEnabled: false,
  },
} as const;
