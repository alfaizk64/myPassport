import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/Cta";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { Reveal, SectionTitle, Spot, Stagger, StaggerItem } from "@/components/Motion";
import { FinalCta } from "@/components/Sections";
import { getPage } from "@/lib/pages";
import { articleSchema, faqSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

export default function GuidePage({ guide }) {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides/" },
    { name: guide.h1, path: guide.path },
  ];
  const related = guide.related.map(getPage).filter(Boolean);

  return (
    <>
      <section className="phero">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <div className="guide__head">
            <p className="eyebrow">Guide</p>
            <h1>{guide.h1}</h1>
            <span className="hi" lang="hi">{guide.hindi}</span>
            {guide.intro.map((p) => (
              <p key={p} className="phero__p">{p}</p>
            ))}
            <p className="note">
              Last reviewed {SITE.contentReviewed}. Rules badalte rehte hain, official portal par confirm zaroor karein.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container guide">
          <aside className="toc" aria-label="Is guide mein">
            <p className="toc__title">Is guide mein</p>
            <ol>
              {guide.sections.map((s, i) => (
                <li key={s.h2}>
                  <a href={`#s${i + 1}`}>{s.h2}</a>
                </li>
              ))}
              <li><a href="#sawal">Aksar pooche jaane wale sawal</a></li>
            </ol>
            <WhatsAppButton
              location={`guide-${guide.slug}`}
              service={guide.service}
              className="btn btn--wa btn--sm"
              message={`Hello, mujhe "${guide.h1}" ke baare mein madad chahiye.`}
            >
              Hum se puchhein
            </WhatsAppButton>
          </aside>

          <article className="prose">
            {guide.sections.map((s, i) => (
              <section key={s.h2} id={`s${i + 1}`} aria-labelledby={`s${i + 1}-h`}>
                <h2 id={`s${i + 1}-h`}>{s.h2}</h2>
                {s.paras?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul className="tick-list">
                    {s.list.map((li) => (
                      <li key={li}>
                        <Check size={18} aria-hidden="true" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>

      <section id="sawal" className="section" aria-labelledby="gfaq-h">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Questions</p>
            <SectionTitle id="gfaq-h" text="Aksar pooche jaane wale sawal" />
          </Reveal>
          <Reveal>
            <Faq items={guide.faqs} category={`guide-${guide.slug}`} />
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--white" aria-labelledby="grel-h">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Hamari sevayein</p>
              <SectionTitle id="grel-h" text="Is vishay par hum kaise madad karte hain" />
            </Reveal>
            <Stagger className="tiles tiles--tight">
              {related.map((g) => (
                <StaggerItem key={g.path}>
                  <Spot className={`tile${g.specialist ? " tile--hot" : ""}`}>
                    <Link href={g.path} className="tile__link">
                      <h3>{g.label}</h3>
                      <p>{g.hindi}</p>
                      {g.specialist && <span className="tile__tag">Specialist</span>}
                      <span className="tile__go"><ArrowRight size={18} aria-hidden="true" /></span>
                    </Link>
                  </Spot>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <FinalCta />
      <JsonLd data={articleSchema(guide)} />
      <JsonLd data={faqSchema(guide.faqs)} />
    </>
  );
}
