import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-coesa-white.png"
              alt="COESA Energia"
              width={100}
              height={33}
              className="h-7 w-auto"
            />
            <span className="text-sm text-white/40">|</span>
            <span className="text-sm text-white/40">Auditoria de Faturas</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/50">
            <span>COESA Energia</span>
            <span className="hidden md:inline">·</span>
            <span>CNPJ: 54.016.051/0001-75</span>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} COESA Energia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <span>Politica de Privacidade</span>
            <span>Termos de Uso</span>
            <span>LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
