import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import ReviewCta from "@/components/ReviewCta";
import {
  About,
  FaqSection,
  FinalCta,
  HowItWorks,
  Reviews,
  ServiceCards,
  SpecialistBand,
  TrustStrip,
  Visit,
} from "@/components/Sections";
import { FAQS } from "@/lib/content";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Passport Consultant in Dewas | Passport, PAN, DL | Iqbal Khan",
  description:
    "Dewas mein passport, PAN card aur driving licence banwana hai? Iqbal Khan se document guidance, form filling aur appointment help lein. Call ya WhatsApp karein.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServiceCards />
      <SpecialistBand />
      <About />
      <HowItWorks />
      <Reviews />
      <Visit />
      <ReviewCta />
      <FaqSection />
      <FinalCta />
      <JsonLd data={faqSchema(FAQS)} />
    </>
  );
}
