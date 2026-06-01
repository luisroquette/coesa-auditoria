import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { ResultadoContent } from "@/components/resultado-content";
import { Footer } from "@/components/footer";

export default function ResultadoPage() {
  return (
    <main>
      <Navbar />
      <Suspense>
        <ResultadoContent />
      </Suspense>
      <Footer />
    </main>
  );
}
