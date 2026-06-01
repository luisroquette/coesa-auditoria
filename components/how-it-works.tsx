"use client";

import { ClipboardList, Search, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Preencha seus dados",
    description:
      "Informe o valor da sua fatura mensal e sua concessionaria. Leva menos de 1 minuto.",
  },
  {
    num: "02",
    icon: Search,
    title: "Analisamos sua fatura",
    description:
      "Nosso sistema verifica 17 pontos criticos da sua conta de energia automaticamente.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Veja o resultado",
    description:
      "Descubra quanto voce pode economizar e receba uma proposta personalizada.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Simples e rapido
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Como funciona
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-2">
                Passo {step.num}
              </p>
              <h3
                className="text-xl font-medium text-foreground mb-3"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
