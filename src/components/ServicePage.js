import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/Cta";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { Reveal, ScrollRail, SectionTitle, Spot, Stagger, StaggerItem } from "@/components/Motion";
import { FinalCta } from "@/components/Sections";
import { SERVICES } from "@/lib/content";
import { getOverview, getPage, subpages } from "@/lib/pages";
import { faqSchema, serviceSchema } from "@/lib/seo";
import { SITE } from "@/lib/site";

export default function ServicePage({ page }) {
  const svc = SERVICES.find((s) => s.id === page.service);
  const timeline = page.timeline ?? svc.timeline;
  const overview = getOverview(page.service);
  const trail = [{ name: "Home", path: "/" }];
  if (page.kind === "service") trail.push({ name: overview.label, path: overview.path });
  trail.push({ name: page.label, path: page.path });

  const docs = page.docs ?? [{ group: "Commonly needed documents", items: svc.docs }];
  const waMessage = `Hello, I need guidance about ${page.label.toLowerCase()} in Dewas.`;
  const guides = page.kind === "overview" ? subpages(page.service) : [];
  const related = page.related.map(getPage).filter(Boolean);

  return (
    <>
      <section className="phero">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <div className="phero__grid">
            <div className="phero__copy">
              <p className="eyebrow">{svc.name}</p>
              {page.specialist && (
                <p className="spec-tag">
                  <Icon name="Gavel" size={16} />
                  Specialist service
                </p>
              )}
              <h1>{page.h1}</h1>
              <span className="hi" lang="hi">{page.hindi}</span>
              {page.intro.map((p) => (
                <p key={p} className="phero__p">{p}</p>
              ))}
              <div className="hero__cta">
                <WhatsAppButton
                  location={`page-${page.path}`}
                  service={svc.id}
                  message={waMessage}
                  className="btn btn--wa btn--lg"
                >
                  WhatsApp for Guidance
                </WhatsAppButton>
                <CallButton location={`page-${page.path}`} className="btn btn--ghost btn--lg">
                  Call the Office
                </CallButton>
              </div>
            </div>

            <aside className="qf" aria-label="At a glance">
              <p className="qf__title">At a glance</p>
              <dl>
                <div>
                  <dt><Icon name="IndianRupee" size={18} /> Our charge</dt>
                  <dd>
                    <strong>{svc.price}</strong>
                    <small>Exact amount case ke hisaab se, kaam se pehle confirm. Government fee authority tay karti hai.</small>
                  </dd>
                </div>
                <div>
                  <dt><Icon name="Clock" size={18} /> Typical timeline</dt>
                  <dd>
                    <strong>{timeline.normal} · {timeline.fast}</strong>
                    <small>Authority tay karti hai, guarantee nahi.</small>
                  </dd>
                </div>
                <div>
                  <dt><Icon name="Footprints" size={18} /> In person</dt>
                  <dd><small>{svc.inPerson}</small></dd>
                </div>
              </dl>
              <a className="official" href={svc.official.href} target="_blank" rel="noopener noreferrer">
                {svc.official.label}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
              <p className="note">Last reviewed {SITE.contentReviewed}. Rules badalte rehte hain, official portal par confirm zaroor karein.</p>
            </aside>
          </div>
        </div>
      </section>

      {page.kind === "overview" && (
        <section className="section section--white" aria-labelledby="help-h">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">What we help with</p>
              <SectionTitle id="help-h" text={`${svc.name}: hum kin kaamon mein madad karte hain`} />
            </Reveal>
            <Stagger className="sub-grid">
              {svc.items.map((it) => (
                <StaggerItem key={it.title}>
                  <Spot className="sub">
                    <h3><Check size={18} aria-hidden="true" />{it.title}</h3>
                    <p>{it.text}</p>
                  </Spot>
                </StaggerItem>
              ))}
            </Stagger>
            {guides.length > 0 && (
              <>
                <h3 className="guides__h">Detailed guides</h3>
                <Stagger className="tiles tiles--tight">
                  {guides.map((g) => (
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
              </>
            )}
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="scope-h">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Our role</p>
            <SectionTitle id="scope-h" text="Hum kya karte hain, aur kya nahi" />
          </Reveal>
          <div className="cols2">
            <Reveal className="panel">
              <p className="panel__title"><Icon name="Check" size={20} /> Hum karte hain</p>
              <ul className="tick-list">
                {page.canDo.map((t) => (
                  <li key={t} className="yes"><Check size={18} aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="panel" delay={0.08}>
              <p className="panel__title"><Icon name="CircleX" size={20} /> Hum nahi karte</p>
              <ul className="tick-list">
                {page.cannotDo.map((t) => (
                  <li key={t} className="no"><Icon name="CircleX" size={18} />{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="docs-h">
        <div className="container cols2 cols2--wide">
          <Reveal className="docs">
            <p className="eyebrow">Documents</p>
            <SectionTitle id="docs-h" text="Documents checklist" />
            {docs.map((g) => (
              <div key={g.group} className="docs__group">
                <h3>{g.group}</h3>
                <ul className="chips">
                  {g.items.map((i) => <li key={i} className="chip">{i}</li>)}
                </ul>
              </div>
            ))}
            <p className="note">
              Requirements official process aur aapke individual case par depend karti hain. Hum gather karne se pehle aapki exact checklist confirm karte hain.
            </p>
          </Reveal>
          <Reveal className="panel" delay={0.08}>
            <p className="panel__title"><Icon name="ShieldCheck" size={20} /> Eligibility aur conditions</p>
            <ul className="tick-list">
              {page.eligibility.map((t) => (
                <li key={t}><Check size={18} aria-hidden="true" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="steps-h">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Process</p>
            <SectionTitle id="steps-h" text="Step by step process" />
            <p>Jahan aapko khud jaana hota hai, wo step alag se mark hai.</p>
          </Reveal>
          <ScrollRail>
            {page.steps.map((s, i) => (
              <StaggerItem key={s.t} className="vstep" role="listitem">
                <span className="vstep__n">{i + 1}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  {s.inPerson && (
                    <span className="inperson"><Icon name="Footprints" size={14} /> Aapko khud jaana hoga</span>
                  )}
                </div>
              </StaggerItem>
            ))}
          </ScrollRail>
        </div>
      </section>

      <section className="section" aria-labelledby="mistakes-h">
        <div className="container cols2 cols2--wide">
          <Reveal>
            <p className="eyebrow">Practical advice</p>
            <SectionTitle id="mistakes-h" text="Common galtiyan jinse bachna chahiye" />
          </Reveal>
          <Reveal className="panel" delay={0.08}>
            <ul className="tick-list">
              {page.mistakes.map((t) => (
                <li key={t} className="no"><Icon name="TriangleAlert" size={18} />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="pfaq-h">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Questions</p>
            <SectionTitle id="pfaq-h" text={`${page.label}: aksar pooche jaane wale sawal`} />
          </Reveal>
          <Reveal>
            <Faq items={page.faqs} category={page.path.replaceAll("/", "-").slice(1, -1)} />
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" aria-labelledby="related-h">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Related</p>
              <SectionTitle id="related-h" text="Ye bhi dekhein" />
            </Reveal>
            <Stagger className="tiles tiles--tight">
              {[overview, ...related].filter((p) => p.path !== page.path).map((g) => (
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
      <JsonLd data={serviceSchema(page)} />
      <JsonLd data={faqSchema(page.faqs)} />
    </>
  );
}
