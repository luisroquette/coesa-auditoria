"use client";

import { MessageCircle, CheckCircle2, Lock, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

const checkItems = [
  "Tarifa aplicada e classe tarifária",
  "ICMS, PIS/COFINS e impostos",
  "Bandeira tarifária vigente",
  "Consumo faturado vs. medido",
  "Créditos de energia solar",
  "Iluminação pública (CIP)",
];

export function AuditForm() {
  return (
    <section id="auditoria" className="py-20 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column — copy */}
          <div className="text-white">
            <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-4">
              Auditoria gratuita
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Inicie sua
              <br />
              auditoria agora
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
              Um consultor da COESA verifica sua fatura e identifica cobranças
              indevidas. Totalmente gratuito, sem compromisso.
            </p>

            <div className="space-y-4">
              {checkItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — WhatsApp CTA */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-black text-white p-8 lg:p-10 border border-white/10 rounded-sm">
              <div className="mb-8">
                <h3
                  className="text-2xl lg:text-3xl font-medium mb-3"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Fale com um consultor
                </h3>
                <p className="text-white/60 text-sm">
                  Clique abaixo e receba sua análise gratuitamente
                </p>
              </div>

              {/* Social proof mini */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 rounded-sm border border-white/10">
                <div className="flex -space-x-2">
                  {["M", "J", "A", "C"].map((l) => (
                    <div
                      key={l}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-xs font-bold text-white border-2 border-black"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-white/60">+200 clientes auditados</p>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-14 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg rounded-sm transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Iniciar Auditoria Gratuita
              </a>

              <div className="flex items-center justify-center gap-2 pt-5">
                <Lock className="w-3 h-3 text-white/40" />
                <p className="text-xs text-center text-white/40">
                  100% gratuito · Sem compromisso · Resposta em minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
