import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auditoria Gratuita de Fatura de Energia | COESA Energia",
  description:
    "Descubra em 30 segundos se você está pagando mais do que deveria na sua conta de energia. Auditoria gratuita com 17 verificações automáticas.",
  metadataBase: new URL("https://auditoria.coesasolar.com.br"),
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br",
    languages: { "pt-BR": "https://auditoria.coesasolar.com.br" },
  },
  openGraph: {
    title: "Sua conta de energia pode estar errada",
    description:
      "Auditoria gratuita de fatura de energia. 17 verificações automáticas. Resultado em 30 segundos.",
    type: "website",
    locale: "pt_BR",
    url: "https://auditoria.coesasolar.com.br",
    siteName: "COESA Energia",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Auditoria Gratuita de Fatura de Energia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua conta de energia pode estar errada",
    description: "Auditoria gratuita de fatura de energia. 17 verificações automáticas.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://auditoria.coesasolar.com.br/#organization",
  name: "COESA Energia",
  url: "https://coesasolar.com.br",
  sameAs: ["https://auditoria.coesasolar.com.br"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-31-93618-0209",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
    contactOption: "TollFree",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auditoria.coesasolar.com.br/#service",
  name: "Auditoria Gratuita de Fatura de Energia",
  serviceType: "Auditoria de Fatura de Energia Elétrica",
  description:
    "Auditoria gratuita com 17 verificações automáticas na sua conta de energia elétrica. Identificamos cobranças indevidas e oportunidades de economia em menos de 30 segundos.",
  provider: {
    "@id": "https://auditoria.coesasolar.com.br/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "Brazil",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
    description: "Auditoria 100% gratuita, sem cadastro e sem compromisso",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Verificações da Auditoria",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enquadramento tarifário" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bandeiras tarifárias" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ICMS" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PIS/COFINS" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Demanda contratada" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fator de potência" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Subgrupo tarifário" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modalidade tarifária" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tributos municipais" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Energia solar por assinatura" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cobranças duplicadas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Histórico de consumo" } },
    ],
  },
  url: "https://auditoria.coesasolar.com.br",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://auditoria.coesasolar.com.br/#faq",
  url: "https://auditoria.coesasolar.com.br",
  mainEntity: [
    {
      "@type": "Question",
      name: "A auditoria é realmente gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, 100% gratuita. Nosso objetivo é identificar oportunidades de economia na sua conta de energia. Se houver potencial de redução, um consultor entrará em contato para apresentar uma proposta personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "Quais concessionárias são atendidas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos todas as distribuidoras reguladas pela ANEEL em todo o Brasil, incluindo CEMIG, Enel, CPFL, Energisa, Copel, Light, Equatorial, Neoenergia, Celesc, entre outras.",
      },
    },
    {
      "@type": "Question",
      name: "Meus dados estão seguros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados). Seus dados são criptografados e utilizados exclusivamente para a análise da sua fatura. Não compartilhamos informações com terceiros.",
      },
    },
    {
      "@type": "Question",
      name: "O que acontece após a auditoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se identificarmos oportunidade de economia, um consultor COESA entrará em contato pelo WhatsApp para apresentar uma proposta sem compromisso.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso enviar minha fatura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Para a auditoria inicial basta informar o valor médio da sua conta de energia e a sua concessionária. Não é necessário enviar a fatura nem fazer nenhum cadastro.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o desconto na conta de energia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Através da energia solar por assinatura. Você recebe créditos de energia gerada em usinas solares que são abatidos diretamente da sua conta, sem necessidade de instalar painéis ou fazer qualquer investimento.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para ter o resultado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O resultado da auditoria automática aparece em menos de 30 segundos após você preencher as informações solicitadas.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
