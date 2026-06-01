"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Loader2, Lock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { formatPhone, parseCurrencyToNumber } from "@/lib/utils";
import { ESTADOS, getConcessionariasByEstado } from "@/lib/concessionarias";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telefone: z.string().min(10, "Telefone invalido"),
  email: z.string().email("Email invalido"),
  valorConta: z.string().min(1, "Informe o valor da conta"),
  concessionaria: z.string().min(1, "Selecione a concessionaria"),
});

type FormData = z.infer<typeof formSchema>;

const checkItems = [
  "Tarifa aplicada e classe tarifaria",
  "ICMS, PIS/COFINS e impostos",
  "Bandeira tarifaria vigente",
  "Consumo faturado vs. medido",
  "Creditos de energia solar",
  "Iluminacao publica (CIP)",
];

export function AuditForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const concessionariaValue = watch("concessionaria");

  useEffect(() => {
    const params: Record<string, string> = {};
    const source = searchParams.get("utm_source");
    const medium = searchParams.get("utm_medium");
    const campaign = searchParams.get("utm_campaign");
    if (source) params.utm_source = source;
    if (medium) params.utm_medium = medium;
    if (campaign) params.utm_campaign = campaign;
    setUtmParams(params);
  }, [searchParams]);

  const formatCurrencyInput = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "";
    const number = parseInt(digits) / 100;
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const valorNumerico = parseCurrencyToNumber(data.valorConta);

      const res = await fetch("/api/audit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.nome,
          telefone: data.telefone,
          email: data.email,
          valor_conta: valorNumerico,
          concessionaria: data.concessionaria,
          ...utmParams,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        toast.error(result.error || "Erro ao processar auditoria. Tente novamente.");
        return;
      }

      // Redirect to resultado page
      const params = new URLSearchParams({
        nome: data.nome.split(" ")[0],
        economia: String(result.economia_valor),
        pct: String(result.economia_pct),
      });
      window.location.href = `/resultado?${params.toString()}`;
    } catch {
      toast.error("Erro de conexao. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="auditoria" className="py-20 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
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
              Preencha os dados abaixo e nosso sistema ira verificar
              automaticamente se voce esta pagando mais do que deveria na sua
              conta de energia.
            </p>

            <div className="space-y-4">
              {checkItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-black text-white p-8 lg:p-10 border border-white/10 rounded-sm">
              <div className="mb-8">
                <h3
                  className="text-2xl lg:text-3xl font-medium mb-3"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Dados da sua fatura
                </h3>
                <p className="text-white/60 text-sm">
                  Preencha para iniciar a auditoria
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-white/80 text-sm">
                    Nome completo
                  </Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome"
                    {...register("nome")}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white rounded-sm h-12 ${
                      errors.nome ? "border-red-500" : ""
                    }`}
                  />
                  {errors.nome && (
                    <p className="text-sm text-red-400">{errors.nome.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-white/80 text-sm">
                    Telefone (WhatsApp)
                  </Label>
                  <Input
                    id="telefone"
                    placeholder="(00) 00000-0000"
                    {...register("telefone")}
                    onChange={(e) => {
                      const formatted = formatPhone(e.target.value);
                      setValue("telefone", formatted);
                    }}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white rounded-sm h-12 ${
                      errors.telefone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.telefone && (
                    <p className="text-sm text-red-400">{errors.telefone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80 text-sm">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    {...register("email")}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white rounded-sm h-12 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="valorConta" className="text-white/80 text-sm">
                    Valor medio da conta
                  </Label>
                  <Input
                    id="valorConta"
                    placeholder="R$ 0,00"
                    {...register("valorConta")}
                    onChange={(e) => {
                      const formatted = formatCurrencyInput(e.target.value);
                      setValue("valorConta", formatted);
                    }}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-white rounded-sm h-12 ${
                      errors.valorConta ? "border-red-500" : ""
                    }`}
                  />
                  {errors.valorConta && (
                    <p className="text-sm text-red-400">
                      {errors.valorConta.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-white/80 text-sm">Concessionaria</Label>
                  <Select
                    value={concessionariaValue}
                    onValueChange={(value) => setValue("concessionaria", value)}
                  >
                    <SelectTrigger
                      className={`bg-white/10 border-white/20 text-white rounded-sm h-12 ${
                        errors.concessionaria ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-white/20 max-h-80">
                      {ESTADOS.map((estado) => (
                        <SelectGroup key={estado}>
                          <SelectLabel className="text-white/50 text-xs">
                            {estado}
                          </SelectLabel>
                          {getConcessionariasByEstado(estado).map((c) => (
                            <SelectItem
                              key={c.nome}
                              value={c.nome}
                              className="text-white hover:bg-white/10"
                            >
                              {c.nome}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.concessionaria && (
                    <p className="text-sm text-red-400">
                      {errors.concessionaria.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="landing"
                  className="w-full h-14 mt-6"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Iniciar Auditoria Gratuita
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 pt-2">
                  <Lock className="w-3 h-3 text-white/40" />
                  <p className="text-xs text-center text-white/40">
                    Seus dados estao protegidos e nao serao compartilhados
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
