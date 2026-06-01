export function AboutService() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8faf8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-medium text-foreground mb-6 tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Por que fazer uma auditoria de conta de energia?
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            Erros nas faturas de energia elétrica são mais comuns do que parecem. Cobranças de tributos calculadas incorretamente, enquadramento tarifário inadequado ao perfil de consumo, bandeiras tarifárias aplicadas de forma errada — cada um desses problemas pode representar centenas ou até milhares de reais pagos indevidamente todo mês.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A auditoria de conta de energia da COESA analisa sistematicamente 17 pontos críticos da sua fatura. O processo é conduzido por consultores especializados que verificam a fatura de energia com base na legislação vigente da ANEEL, nas alíquotas estaduais de ICMS e nos históricos tarifários de cada distribuidora.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ao contrário de ferramentas automáticas, nossa análise é feita por um especialista humano que entende as particularidades de cada distribuidora — CEMIG, Enel, CPFL, Energisa — e das normas regulatórias que impactam o cálculo da sua conta de luz.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            O serviço é 100% gratuito. A auditoria não tem custo porque nosso modelo é baseado em resultado: se encontrarmos economia na sua fatura, apresentamos uma proposta personalizada. Se não encontrarmos nenhuma irregularidade, encerramos o atendimento sem custo ou compromisso. Mais de 3.000 clientes já realizaram a auditoria e, em média, identificamos redução de 20% a 30% nas faturas analisadas.
          </p>
        </div>
      </div>
    </section>
  );
}
