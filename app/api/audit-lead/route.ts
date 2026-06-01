import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase";
import { auditLeadSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = auditLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || "Dados invalidos" },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const economia_pct = 30;
    const economia_valor = Math.round(data.valor_conta * (economia_pct / 100) * 100) / 100;

    const supabase = createServiceClient();

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;

    const { error } = await supabase.from("audit_leads").insert({
      nome: data.nome,
      telefone: data.telefone,
      email: data.email,
      valor_conta: data.valor_conta,
      concessionaria: data.concessionaria,
      economia_estimada_pct: economia_pct,
      economia_estimada_valor: economia_valor,
      utm_source: data.utm_source || null,
      utm_medium: data.utm_medium || null,
      utm_campaign: data.utm_campaign || null,
      ip_address: ip,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, error: "Erro ao processar auditoria" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      economia_pct,
      economia_valor,
    });
  } catch (err) {
    console.error("Audit lead error:", err);
    return NextResponse.json(
      { success: false, error: "Erro interno" },
      { status: 500 }
    );
  }
}
