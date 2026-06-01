import { z } from "zod";

export const auditLeadSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
  telefone: z.string().min(10, "Telefone invalido").max(20),
  email: z.string().email("Email invalido"),
  valor_conta: z.number().min(1, "Valor invalido").max(999999),
  concessionaria: z.string().min(1, "Selecione sua concessionaria"),
  utm_source: z.string().nullish(),
  utm_medium: z.string().nullish(),
  utm_campaign: z.string().nullish(),
});

export type AuditLeadInput = z.infer<typeof auditLeadSchema>;
