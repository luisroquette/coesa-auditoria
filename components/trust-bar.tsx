"use client";

import { Shield, Clock, CreditCard, Lock } from "lucide-react";

const stats = [
  { icon: Shield, value: "17", label: "Verificações automáticas" },
  { icon: Clock, value: "24h", label: "Para resultado" },
  { icon: CreditCard, value: "100%", label: "Gratuito" },
  { icon: Lock, value: "LGPD", label: "Dados protegidos" },
];

export function TrustBar() {
  return (
    <section className="bg-black/40 backdrop-blur-sm border-t border-white/10 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-white/60" />
              <p className="text-2xl md:text-3xl font-medium">{stat.value}</p>
              <p className="text-xs md:text-sm text-white/60 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
