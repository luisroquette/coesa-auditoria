import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { HowItWorks } from "@/components/how-it-works";
import { AuditForm } from "@/components/audit-form";
import { WhatWeCheck } from "@/components/what-we-check";
import { SocialProof } from "@/components/social-proof";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <AuditForm />
      <WhatWeCheck />
      <SocialProof />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
