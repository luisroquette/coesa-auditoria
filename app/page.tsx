import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { HowItWorks } from "@/components/how-it-works";
import { AuditForm } from "@/components/audit-form";
import { WhatWeCheck } from "@/components/what-we-check";
import { SocialProof } from "@/components/social-proof";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Suspense>
        <AuditForm />
      </Suspense>
      <WhatWeCheck />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}
