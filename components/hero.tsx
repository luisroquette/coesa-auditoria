"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToForm = () => {
    document.querySelector("#auditoria")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1a0f] to-[#0a0a0a]" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/80">Auditoria 100% gratuita</span>
          </motion.div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight text-white font-medium tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Sua conta de energia
            <br />
            pode estar errada
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            Descubra em 30 segundos se voce esta pagando mais do que deveria.
            Auditoria gratuita com 17 verificacoes automaticas.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={scrollToForm}
              variant="landing"
              size="xl"
              className="shadow-lg hover:shadow-xl transition-all min-w-[240px]"
            >
              Auditar minha fatura gratis
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-sm text-white/40"
          >
            100% gratis · Sem cadastro · Resultado imediato
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={scrollToForm}
          className="text-white/40 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
