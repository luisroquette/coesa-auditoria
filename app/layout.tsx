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
    "Descubra em 30 segundos se voce esta pagando mais do que deveria na sua conta de energia. Auditoria gratuita com 17 verificacoes automaticas.",
  metadataBase: new URL("https://auditoria.coesasolar.com.br"),
  openGraph: {
    title: "Sua conta de energia pode estar errada",
    description:
      "Auditoria gratuita de fatura de energia. 17 verificacoes automaticas. Resultado em 30 segundos.",
    type: "website",
    locale: "pt_BR",
    url: "https://auditoria.coesasolar.com.br",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
