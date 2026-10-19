import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { About, FinalCta, Visit } from "@/components/Sections";
import { buildMetadata, personSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Iqbal Khan | Passport Consultant in Dewas",
  description:
    "Iqbal Khan Passport Consultant ke baare mein: Dewas ka local document assistance office, hum kya karte hain aur kya nahi, aur office kahan hai.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <Breadcrumbs
            trail={[
              { name: "Home", path: "/" },
              { name: "About", path: "/about/" },
            ]}
          />
          <div className="guide__head">
            <p className="eyebrow">About us</p>
            <h1>Iqbal Khan, Dewas ke passport consultant</h1>
            <span className="hi" lang="hi">इक़बाल खान पासपोर्ट कंसल्टेंट, देवास, मध्य प्रदेश</span>
            <p className="phero__p">
              Iqbal Khan Passport Consultant, L-55 Supermarket, Dewas mein ek independent
              document assistance office hai. Yahan passport, court case passport, lost passport,
              PAN card aur driving licence ki applications mein madad milti hai.
            </p>
            <p className="phero__p">
              Hum government office nahi hain. Application hamesha official portal par hoti hai;
              hum aapko taiyari, documents aur appointment mein guide karte hain.
            </p>
          </div>
        </div>
      </section>
      <About />
      <Visit />
      <FinalCta />
      <JsonLd data={personSchema()} />
    </>
  );
}
