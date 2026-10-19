import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FinalCta } from "@/components/Sections";
import { Reveal, Spot, Stagger, StaggerItem } from "@/components/Motion";
import { GUIDES } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Passport, PAN aur DL Guides in Hindi | Iqbal Khan",
  description:
    "Passport documents, appointment, police verification aur fake agent se bachav: seedhe, simple Hinglish guides. Dewas ke Iqbal Khan se.",
  path: "/guides/",
});

export default function GuidesIndex() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <Breadcrumbs
            trail={[
              { name: "Home", path: "/" },
              { name: "Guides", path: "/guides/" },
            ]}
          />
          <div className="guide__head">
            <p className="eyebrow">Guides</p>
            <h1>Passport ke sawalon ke seedhe jawab</h1>
            <span className="hi" lang="hi">पासपोर्ट, पैन कार्ड और ड्राइविंग लाइसेंस की आसान गाइड</span>
            <p className="phero__p">
              Documents, appointment, police verification aur fake agents se bachav, sab simple
              Hinglish mein. Rules badalte rehte hain, isliye har guide mein official portal par
              confirm karne ki salah hai.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <Stagger className="tiles">
            {GUIDES.map((g) => (
              <StaggerItem key={g.slug}>
                <Spot className="tile">
                  <Link href={g.path} className="tile__link">
                    <h2 className="tile__h">{g.h1}</h2>
                    <p>{g.description}</p>
                    <span className="tile__go"><ArrowRight size={18} aria-hidden="true" /></span>
                  </Link>
                </Spot>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
