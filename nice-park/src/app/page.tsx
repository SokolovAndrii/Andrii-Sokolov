import { Benefits } from "@/components/Benefits";
import { Calculator } from "@/components/Calculator";
import { Conditions } from "@/components/Conditions";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileCta } from "@/components/MobileCta";
import { Requirements } from "@/components/Requirements";
import { Steps } from "@/components/Steps";
import { faq, site } from "@/config/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    slogan: site.slogan,
    areaServed: site.city,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <Benefits />
        <Calculator />
        <Conditions />
        <Requirements />
        <Steps />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
