"use client";

import { TrendingUp, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function SocialProof() {
  return (
    <section className="py-20 lg:py-32 bg-[#f8faf8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Caso real
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Resultado de auditoria
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white border border-border rounded-lg p-8 lg:p-12 shadow-sm">
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Minas Gerais
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> Consumidor comercial
              </span>
            </div>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              &ldquo;Cliente com conta mensal de R$ 5.291 na CEMIG. A auditoria
              identificou que creditos de energia solar injetada nao estavam
              sendo descontados da fatura.&rdquo;
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Economia identificada</p>
                <p
                  className="text-2xl md:text-3xl font-medium text-primary"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  R$ 47.000
                </p>
                <p className="text-xs text-muted-foreground">por ano</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Reducao na fatura</p>
                <p
                  className="text-2xl md:text-3xl font-medium text-foreground"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  R$ 3.917
                </p>
                <p className="text-xs text-muted-foreground">por mes</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-sm text-muted-foreground mb-1">Desconto</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <p
                    className="text-2xl md:text-3xl font-medium text-primary"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    30%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">
            * Informacoes pessoais removidas para protecao do cliente. Resultado real de auditoria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
