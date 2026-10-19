import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/Cta";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import MapEmbed from "@/components/MapEmbed";
import {
  Reveal,
  ScrollRail,
  ScrollSteps,
  Spot,
  Stagger,
  StaggerItem,
} from "@/components/Motion";
import TrackedLink from "@/components/TrackedLink";
import { SERVICES } from "@/lib/content";
import { faqSchema, serviceSchema } from "@/lib/seo";
import { ADDRESS_ONE_LINE, SITE, telLink } from "@/lib/site";

const HI_SERVICE_LINK = {
  passport: "/hi/passport-services-dewas/",
  "pan-card": "/pan-card-services-dewas/",
  "driving-licence": "/driving-licence-services-dewas/",
};

const CRUMB = {
  "/hi/passport-services-dewas/": "पासपोर्ट सेवाएँ",
  "/hi/court-case-passport/": "कोर्ट केस पासपोर्ट",
  "/hi/lost-passport/": "खोया हुआ पासपोर्ट",
};

/* ───────── shared closing block ───────── */
export function HindiFinalCta() {
  return (
    <section className="final" aria-labelledby="hfinal-h">
      <div className="container">
        <Reveal className="final__in">
          <h2 id="hfinal-h">कोई सवाल है? WhatsApp करें या ऑफ़िस आएँ</h2>
          <p>
            बताइए आपको क्या चाहिए। प्रक्रिया, दस्तावेज़ और खर्च, सब काम शुरू करने से पहले
            समझा देंगे।
          </p>
          <div className="hero__cta">
            <WhatsAppButton location="hi-final" className="btn btn--wa btn--lg">
              WhatsApp करें
            </WhatsAppButton>
            <CallButton location="hi-final" className="btn btn--ghost-light btn--lg">
              ऑफ़िस को कॉल करें
            </CallButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Hindi home ───────── */
export function HindiHome({ data }) {
  return (
    <div lang="hi" className="hi-page">
      <section className="hero" id="home" aria-labelledby="hhero-h">
        <div className="hero__mesh" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="container hero__grid hero__grid--single">
          <div className="hero__copy">
            <p className="eyebrow">{data.eyebrow}</p>
            <h1 id="hhero-h">
              {data.h1.map((l) => (
                <span key={l} className="line">{l}</span>
              ))}
            </h1>
            <p className="lead">{data.lead}</p>
            <div className="hero__cta">
              <WhatsAppButton
                location="hi-hero"
                className="btn btn--wa btn--lg"
                message="Hello, mujhe document application ke liye guidance chahiye."
              >
                {data.ctaWhatsApp}
              </WhatsAppButton>
              <a href="#services" className="btn btn--ghost btn--lg">
                {data.ctaServices}
                <ArrowRight className="arrow" size={20} aria-hidden="true" />
              </a>
            </div>
            <ul className="hero__points">
              {data.points.map((p) => (
                <li key={p}>
                  <span className="ico"><Check size={18} aria-hidden="true" /></span>
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/" lang="en-IN" className="official">
              Read this page in Hinglish / English
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="section" aria-labelledby="hsvc-h">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="hsvc-h">{data.servicesTitle}</h2>
            <p>{data.servicesLead}</p>
          </Reveal>
          <Stagger className="tiles">
            {data.services.map((s) => {
              const svc = SERVICES.find((x) => x.id === s.id);
              return (
                <StaggerItem key={s.id}>
                  <Spot className="tile">
                    <div className="tile__link">
                      <span className="tile__ico"><Icon name={svc.icon} size={24} /></span>
                      <h3>{s.name}</h3>
                      <p>{s.summary}</p>
                      <ul className="tick-list">
                        {s.items.map((it) => (
                          <li key={it}>
                            <Check size={18} aria-hidden="true" />
                            {it}
                          </li>
                        ))}
                      </ul>
                      <Link href={HI_SERVICE_LINK[s.id]} className="official">
                        विस्तार से देखें{s.id === "passport" ? "" : " (Hinglish)"}
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </Spot>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="hspec-h">
        <div className="container">
          <Reveal className="spec">
            <Icon name="Gavel" size={280} className="spec__mark" strokeWidth={1} />
            <div className="spec__copy">
              <p className="spec__tag">
                <Icon name="Gavel" size={16} />
                {data.specialist.tag}
              </p>
              <h2 id="hspec-h">{data.specialist.title}</h2>
              <p>{data.specialist.text}</p>
              <p className="note">{data.specialist.note}</p>
              <div className="hero__cta">
                <WhatsAppButton
                  location="hi-specialist"
                  service="passport"
                  className="btn btn--navy btn--lg"
                  message="Hello, mujhe court case ke saath passport ke baare mein guidance chahiye."
                >
                  {data.specialist.cta}
                </WhatsAppButton>
                <Link href="/hi/court-case-passport/" className="btn btn--white btn--lg">
                  विस्तार से देखें
                  <ArrowRight className="arrow" size={20} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <ul className="spec__list">
              {data.specialist.bullets.map((t) => (
                <li key={t}>
                  <Check size={18} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="hsteps-h">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="hsteps-h">{data.stepsTitle}</h2>
            <p>{data.stepsLead}</p>
          </Reveal>
          <ScrollSteps>
            {data.steps.map((st, i) => (
              <StaggerItem key={st.title}>
                <article className="step">
                  <span className="step__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div className="step__top">
                    <span className="step__who">{st.who}</span>
                  </div>
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                </article>
              </StaggerItem>
            ))}
          </ScrollSteps>
        </div>
      </section>

      <section className="section" aria-labelledby="hfaq-h">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="hfaq-h">{data.faqTitle}</h2>
          </Reveal>
          <Reveal>
            <Faq items={data.faqs} category="hi-home" />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section section--muted" aria-labelledby="hcontact-h">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="hcontact-h">{data.contactTitle}</h2>
            <p>{data.contactLead}</p>
          </Reveal>
          <div className="visit">
            <Reveal className="visit__card">
              <div className="contact-row">
                <span className="ico"><Icon name="MapPin" size={22} /></span>
                <div>
                  <strong>पता</strong>
                  <address>{ADDRESS_ONE_LINE}</address>
                </div>
              </div>
              <div className="contact-row">
                <span className="ico"><Icon name="WhatsApp" size={22} /></span>
                <div>
                  <strong>फ़ोन और WhatsApp</strong>
                  <TrackedLink href={telLink} event="phone_click" params={{ cta_location: "hi-contact" }}>
                    {SITE.phone.display}
                  </TrackedLink>
                </div>
              </div>
              <div className="contact-row">
                <span className="ico"><Icon name="Users" size={22} /></span>
                <div>
                  <strong>दूसरा नंबर</strong>
                  <TrackedLink
                    href={`tel:${SITE.alternatePhone.tel}`}
                    event="phone_click"
                    params={{ cta_location: "hi-contact-alt" }}
                  >
                    {SITE.alternatePhone.display}
                  </TrackedLink>
                </div>
              </div>
              {SITE.hours && (
                <div className="contact-row">
                  <span className="ico"><Icon name="Clock" size={22} /></span>
                  <div>
                    <strong>खुलने का समय</strong>
                    <p lang="en-IN">{SITE.hours}</p>
                  </div>
                </div>
              )}
              <div className="visit__actions">
                <WhatsAppButton location="hi-contact">WhatsApp करें</WhatsAppButton>
                <CallButton location="hi-contact">कॉल करें</CallButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <MapEmbed />
            </Reveal>
          </div>
        </div>
      </section>

      <HindiFinalCta />
      <JsonLd data={faqSchema(data.faqs)} />
    </div>
  );
}

/* ───────── Hindi service page ───────── */
export function HindiServicePage({ page }) {
  const svc = SERVICES.find((s) => s.id === "passport");
  const crumb = CRUMB[page.path] ?? page.h1;
  const isCourt = page.path === "/hi/court-case-passport/";
  const trail = [
    { name: "होम", path: "/hi/" },
    { name: crumb, path: page.path },
  ];
  const timeline = isCourt
    ? "मामले के अनुसार · तय समय का वादा नहीं"
    : `${svc.timeline.normal} · ${svc.timeline.fast}`;
  const price = `${svc.price.replace("Starting ", "")} से शुरू`;

  return (
    <div lang="hi" className="hi-page">
      <section className="phero">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <div className="phero__grid">
            <div className="phero__copy">
              <p className="eyebrow">पासपोर्ट सेवाएँ</p>
              {isCourt && (
                <p className="spec-tag">
                  <Icon name="Gavel" size={16} />
                  विशेषज्ञ सेवा
                </p>
              )}
              <h1>{page.h1}</h1>
              {page.intro.map((p) => (
                <p key={p} className="phero__p">{p}</p>
              ))}
              <div className="hero__cta">
                <WhatsAppButton
                  location={`hi-page-${page.path}`}
                  service="passport"
                  className="btn btn--wa btn--lg"
                  message="Hello, mujhe passport ke baare mein guidance chahiye."
                >
                  WhatsApp पर पूछें
                </WhatsAppButton>
                <CallButton location={`hi-page-${page.path}`} className="btn btn--ghost btn--lg">
                  ऑफ़िस को कॉल करें
                </CallButton>
              </div>
              <Link href={page.enPath} lang="en-IN" className="official">
                Read this page in Hinglish / English
              </Link>
            </div>

            <aside className="qf" aria-label="एक नज़र में">
              <p className="qf__title">एक नज़र में</p>
              <dl>
                <div>
                  <dt><Icon name="IndianRupee" size={18} /> हमारी फीस</dt>
                  <dd>
                    <strong>{price}</strong>
                    <small>सटीक राशि मामले के अनुसार, काम शुरू करने से पहले कन्फ़र्म। सरकारी फीस प्राधिकरण तय करता है।</small>
                  </dd>
                </div>
                <div>
                  <dt><Icon name="Clock" size={18} /> सामान्य समय</dt>
                  <dd>
                    <strong>{timeline}</strong>
                    <small>प्राधिकरण तय करता है, गारंटी नहीं।</small>
                  </dd>
                </div>
                <div>
                  <dt><Icon name="Footprints" size={18} /> खुद जाना होगा</dt>
                  <dd>
                    <small>आपको पासपोर्ट सेवा केंद्र पर अपॉइंटमेंट के दौरान दस्तावेज़ सत्यापन, फोटो और बायोमेट्रिक्स के लिए स्वयं जाना होता है। हम आपको तैयार करते हैं, पर आपकी जगह कोई और नहीं जा सकता।</small>
                  </dd>
                </div>
              </dl>
              <a className="official" href={svc.official.href} target="_blank" rel="noopener noreferrer" lang="en-IN">
                {svc.official.label}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
              <p className="note">नियम बदलते रहते हैं, कृपया आधिकारिक पोर्टल पर पुष्टि करें।</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="hscope-h">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="hscope-h">हम क्या करते हैं, और क्या नहीं</h2>
          </Reveal>
          <div className="cols2">
            <Reveal className="panel">
              <p className="panel__title"><Icon name="Check" size={20} /> हम करते हैं</p>
              <ul className="tick-list">
                {page.canDo.map((t) => (
                  <li key={t} className="yes"><Check size={18} aria-hidden="true" />{t}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="panel" delay={0.08}>
              <p className="panel__title"><Icon name="CircleX" size={20} /> हम नहीं करते</p>
              <ul className="tick-list">
                {page.cannotDo.map((t) => (
                  <li key={t} className="no"><Icon name="CircleX" size={18} />{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="hdocs-h">
        <div className="container cols2 cols2--wide">
          <Reveal className="docs">
            <h2 id="hdocs-h">दस्तावेज़ों की चेकलिस्ट</h2>
            {page.docs.map((g) => (
              <div key={g.group} className="docs__group">
                <h3>{g.group}</h3>
                <ul className="chips">
                  {g.items.map((i) => <li key={i} className="chip">{i}</li>)}
                </ul>
              </div>
            ))}
            <p className="note">
              ज़रूरतें आधिकारिक प्रक्रिया और आपके मामले पर निर्भर करती हैं। इकट्ठा करने से पहले हम आपकी सही चेकलिस्ट कन्फ़र्म करते हैं।
            </p>
          </Reveal>
          <Reveal className="panel" delay={0.08}>
            <p className="panel__title"><Icon name="ShieldCheck" size={20} /> पात्रता और शर्तें</p>
            <ul className="tick-list">
              {page.eligibility.map((t) => (
                <li key={t}><Check size={18} aria-hidden="true" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="hsteps-h">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="hsteps-h">चरण दर चरण प्रक्रिया</h2>
            <p>जहाँ आपको खुद जाना होता है, वह चरण अलग से चिह्नित है।</p>
          </Reveal>
          <ScrollRail>
            {page.steps.map((s, i) => (
              <StaggerItem key={s.t} className="vstep" role="listitem">
                <span className="vstep__n">{i + 1}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  {s.inPerson && (
                    <span className="inperson"><Icon name="Footprints" size={14} /> आपको खुद जाना होगा</span>
                  )}
                </div>
              </StaggerItem>
            ))}
          </ScrollRail>
        </div>
      </section>

      <section className="section" aria-labelledby="hmist-h">
        <div className="container cols2 cols2--wide">
          <Reveal>
            <h2 id="hmist-h">आम गलतियाँ जिनसे बचें</h2>
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

      <section className="section section--white" aria-labelledby="hpfaq-h">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="hpfaq-h">अक्सर पूछे जाने वाले सवाल</h2>
          </Reveal>
          <Reveal>
            <Faq items={page.faqs} category={`hi-${page.path.replaceAll("/", "-").slice(1, -1)}`} />
          </Reveal>
        </div>
      </section>

      <HindiFinalCta />
      <JsonLd data={serviceSchema({ ...page, label: crumb })} />
      <JsonLd data={faqSchema(page.faqs)} />
    </div>
  );
}
