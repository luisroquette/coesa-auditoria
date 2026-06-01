"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "A auditoria e realmente gratuita?",
    a: "Sim, 100% gratuita. Nosso objetivo e identificar oportunidades de economia na sua conta de energia. Se houver potencial de reducao, um consultor entrara em contato para apresentar uma proposta personalizada.",
  },
  {
    q: "Quais concessionarias sao atendidas?",
    a: "Atendemos todas as distribuidoras reguladas pela ANEEL em todo o Brasil, incluindo CEMIG, Enel, CPFL, Energisa, Copel, Light, Equatorial, Neoenergia, Celesc, entre outras.",
  },
  {
    q: "Meus dados estao seguros?",
    a: "Sim. Seguimos rigorosamente a LGPD (Lei Geral de Protecao de Dados). Seus dados sao criptografados e utilizados exclusivamente para a analise da sua fatura. Nao compartilhamos informacoes com terceiros.",
  },
  {
    q: "O que acontece apos a auditoria?",
    a: "Voce recebera o resultado imediatamente na tela. Se identificarmos oportunidade de economia, um consultor COESA entrara em contato pelo telefone ou WhatsApp informado para apresentar uma proposta sem compromisso.",
  },
  {
    q: "Preciso enviar minha fatura?",
    a: "Nao. Para a auditoria inicial, basta informar o valor medio da sua conta e sua concessionaria. Com esses dados ja conseguimos fazer uma analise preliminar e identificar oportunidades de economia.",
  },
  {
    q: "Como funciona o desconto na conta de energia?",
    a: "Atraves da energia solar por assinatura. Voce recebe creditos de energia gerada em usinas solares que sao abatidos diretamente da sua conta, sem necessidade de instalar paineis ou fazer qualquer investimento.",
  },
  {
    q: "Quanto tempo leva para ver o resultado?",
    a: "O resultado da auditoria e exibido imediatamente apos o envio do formulario. Todo o processo leva menos de 30 segundos.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Duvidas
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
