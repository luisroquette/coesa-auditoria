"use client";

import {
  Zap,
  Receipt,
  Scale,
  Gauge,
  Sun,
  Lightbulb,
  AlertTriangle,
  CreditCard,
  Building2,
  Clock,
  BarChart3,
  FileCheck,
} from "lucide-react";

const items = [
  { icon: Receipt, title: "Tarifa aplicada", desc: "Verificamos se a tarifa cobrada está correta para seu perfil" },
  { icon: Scale, title: "ICMS", desc: "Conferimos a alíquota de ICMS aplicada sobre o consumo" },
  { icon: CreditCard, title: "PIS/COFINS", desc: "Validamos os tributos federais sobre a energia" },
  { icon: Zap, title: "Bandeira tarifária", desc: "Checamos se a bandeira vigente foi aplicada corretamente" },
  { icon: Gauge, title: "Consumo faturado", desc: "Comparamos consumo medido vs. faturado" },
  { icon: Building2, title: "Demanda contratada", desc: "Avaliamos se a demanda está adequada ao consumo" },
  { icon: Sun, title: "Créditos solares", desc: "Verificamos se créditos de geração distribuída foram aplicados" },
  { icon: Lightbulb, title: "Iluminação pública", desc: "Conferimos a taxa CIP/COSIP cobrada" },
  { icon: AlertTriangle, title: "Multas e juros", desc: "Identificamos cobranças indevidas de multas ou juros" },
  { icon: FileCheck, title: "Classe tarifária", desc: "Validamos se você está na classe correta (residencial, comercial)" },
  { icon: Clock, title: "Horário de ponta", desc: "Analisamos tarifas diferenciadas por horário" },
  { icon: BarChart3, title: "Histórico de consumo", desc: "Comparamos padrões de consumo para detectar anomalias" },
];

export function WhatWeCheck() {
  return (
    <section id="verificacoes" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Análise completa
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            O que verificamos na sua fatura de energia
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/20 hover:bg-accent/50 transition-colors"
            >
              <div className="flex-shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
