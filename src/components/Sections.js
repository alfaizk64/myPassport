import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ExternalLink, Star } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/Cta";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import IdCardFlip from "@/components/IdCardFlip";
import MapEmbed from "@/components/MapEmbed";
import { Reveal, ScrollSteps, SectionTitle, Spot, Stagger, StaggerItem } from "@/components/Motion";
import OpenNow from "@/components/OpenNow";
import RoleSwitcher from "@/components/RoleSwitcher";
import ServiceExplorer from "@/components/ServiceExplorer";
import TrackedLink from "@/components/TrackedLink";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { FAQS, RESPONSIBILITIES, SERVICES, STEPS } from "@/lib/content";
import { GUIDES } from "@/lib/guides";
import { POPULAR } from "@/lib/pages";
import { ADDRESS_ONE_LINE, DEFAULT_WA_MESSAGE, SITE, telLink } from "@/lib/site";

/* ───────── Trust strip: static, verified facts only ───────── */
export function TrustStrip() {
  const items = [
    { icon: "Gavel", t: "Court case passport specialist", s: "Pending case mein bhi sahi guidance" },
    { icon: "MapPin", t: "Local office in Dewas", s: "L-55 Supermarket, Dewas, MP" },
    { icon: "FileCheck", t: "Passport, PAN aur licence", s: "Guidance aur application help" },
    { icon: "Scale", t: "Fees pehle se clear", s: "Starting prices dikhaye, kaam se pehle confirm" },
    { icon: "ShieldCheck", t: "Independent consultancy", s: "Government office nahi" },
  ];
  if (SITE.experienceSince) {
    const years = new Date().getFullYear() - SITE.experienceSince;
    items.unshift({ icon: "BadgeCheck", t: `${years}+ saal ka experience`, s: "Dewas ke applicants ki madad" });
  }
  if (SITE.clientsServed) {
    items.push({ icon: "Users", t: `${SITE.clientsServed} applicants ki madad`, s: "Passport, PAN aur licence" });
  }
  if (SITE.googleRating) {
    items.push({ icon: "Star", t: `Google par ${SITE.googleRating.value}`, s: `${SITE.googleRating.count} reviews` });
  }

  return (
    <section className="trust" aria-label="At a glance">
      <div className="container">
        <Stagger className="trust__grid">
          {items.map((it) => (
            <StaggerItem key={it.t} className="">
              <div className="trust__item">
                <span className="trust__ico">
                  <Icon name={it.icon} size={22} />
                </span>
                <div>
                  <strong>{it.t}</strong>
                  <span>{it.s}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ───────── Services: interactive expanding panels ───────── */
export function ServiceCards() {
  const items = SERVICES.map((s) => ({
    id: s.id,
    name: s.name,
    hindi: s.hindi,
    icon: s.icon,
    tone: s.tone,
    summary: s.summary,
    price: s.price,
    timeline: s.timeline,
    path: s.path,
    waMessage: s.waMessage,
    chips: POPULAR.filter((p) => p.path.startsWith(s.path)),
  }));

  return (
    <section
      id="services"
      className="section has-bg"
      data-bg="सेवाएँ"
      aria-labelledby="services-h"
    >
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Our services</p>
          <SectionTitle id="services-h" text="Passport, PAN Card aur Driving Licence help in Dewas" />
          <p>
            Ek service chunein: andar aapko popular kaam, charge, typical time aur seedhe
            detail pages milenge.
          </p>
        </Reveal>
        <Reveal>
          <ServiceExplorer items={items} />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Court case passport: the owner's specialty ───────── */
export function SpecialistBand() {
  return (
    <section className="section section--tight" aria-labelledby="spec-h">
      <div className="container">
        <Reveal className="spec">
          <Icon name="Gavel" size={280} className="spec__mark" strokeWidth={1} />
          <div className="spec__copy">
            <p className="spec__tag">
              <Icon name="Gavel" size={16} />
              Specialist service
            </p>
            <SectionTitle id="spec-h" text="Court case passport: hamari specialty" />
            <p>
              Court mein case pending hone ki wajah se passport atak gaya ya reject hua?
              Hum aapke vakeel ke saath milkar passport ki side sambhalte hain: court order
              ka sahi use, documents, application aur appointment.
            </p>
            <p className="note">
              Hum vakeel nahi hain aur approval ki guarantee nahi dete. Final faisla court
              aur passport authority ka hota hai.
            </p>
            <div className="hero__cta">
              <WhatsAppButton
                location="specialist-band"
                service="passport"
                className="btn btn--navy btn--lg"
                message="Hello, mujhe court case ke saath passport ke baare mein guidance chahiye."
              >
                Court case ke baare mein puchhein
              </WhatsAppButton>
              <Link href="/passport-services-dewas/court-case-passport/" className="btn btn--white btn--lg">
                Poori detail dekhein
                <ArrowRight className="arrow" size={20} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className="spec__list">
            {[
              "Pending criminal case mein passport ka sahi route",
              "Court order mein kya hona chahiye, vakeel ke saath guidance",
              "Application mein case ki details sahi tarah bharna",
              "Appointment aur verification ki poori taiyari",
            ].map((t) => (
              <li key={t}>
                <Check size={18} aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── About ───────── */
export function About() {
  const photo = SITE.photos.consultant;
  return (
    <section
      id="about"
      className="section section--white has-bg"
      data-bg="परिचय"
      aria-labelledby="about-h"
    >
      <div className="container about">
        <Reveal>
          {photo ? (
            <figure className="about__photo">
              <Image
                src={photo}
                alt="Iqbal Khan, passport consultant in Dewas"
                width={1086}
                height={1448}
                sizes="(max-width: 900px) 90vw, 440px"
              />
              <figcaption>
                <strong>Iqbal Khan</strong>
                <span>Passport · PAN Card · Driving Licence · Dewas</span>
              </figcaption>
            </figure>
          ) : (
            <IdCardFlip />
          )}
        </Reveal>

        <Reveal className="about__copy" delay={0.1}>
          <p className="eyebrow">Meet Iqbal Khan</p>
          <SectionTitle id="about-h" text="Dewas ke local consultant, jinse aap milke baat kar sakte hain" />
          <span className="hi" lang="hi">इक़बाल खान, पासपोर्ट कंसल्टेंट, देवास</span>
          <p>
            Documents sensitive hote hain, isliye aapko pata hona chahiye ki aap kisse deal
            kar rahe hain. Iqbal Khan L-55 Supermarket, Dewas mein document assistance
            office chalate hain aur passport, PAN card aur driving licence ki application
            sahi tarah se taiyar karne mein madad karte hain, pehle form se lekar
            appointment tak.
          </p>
          <p>
            Application official government portals par hi hoti hai. Ye office independent
            assistance deta hai, documents issue nahi karta aur kisi decision ko influence
            nahi kar sakta.
          </p>
          <div className="split">
            <div className="panel">
              <p className="panel__title">Office kaise madad karta hai</p>
              <ul className="tick-list">
                {[
                  "Aapke case ka sahi route samjhata hai",
                  "Tailored document checklist banata hai",
                  "Form bharne mein madad aur mismatch check",
                  "Appointment aur test ki taiyari karwata hai",
                ].map((t) => (
                  <li key={t} className="yes">
                    <Check size={18} aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel">
              <p className="panel__title">Hum kya nahi karte</p>
              <ul className="tick-list">
                {[
                  "Passport, PAN card ya licence issue karna",
                  "Approval ya processing time ki guarantee dena",
                  "Aapki jagah biometrics ya test dena",
                  "Kisi government affiliation ka daava karna",
                ].map((t) => (
                  <li key={t} className="no">
                    <Icon name="CircleX" size={18} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── How it works ───────── */
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section section--navy has-bg"
      data-bg="प्रक्रिया"
      aria-labelledby="how-h"
    >
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <SectionTitle id="how-h" text="4 simple steps, aur har kisi ka role clear" />
          <p>
            Aapko hamesha pata rehta hai ki hum kya karenge, aapko kya karna hai aur kya
            sirf official authority decide kar sakti hai.
          </p>
        </Reveal>

        <ScrollSteps>
          {STEPS.map((st, i) => (
            <StaggerItem key={st.title}>
              <article className="step">
                <span className="step__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div className="step__top">
                  <span className="step__ico">
                    <Icon name={st.icon} size={24} />
                  </span>
                  <span className="step__who">{st.who}</span>
                </div>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </article>
            </StaggerItem>
          ))}
        </ScrollSteps>

        <Reveal className="roles-wrap">
          <h3 className="roles__title">Kaun kya karta hai?</h3>
          <RoleSwitcher roles={RESPONSIBILITIES} />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Reviews: real Google reviews, word for word ───────── */
const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function GoldStars({ count, size = 18 }) {
  return Array.from({ length: count }).map((_, k) => (
    <Star key={k} size={size} fill="currentColor" aria-hidden="true" />
  ));
}

export function Reviews() {
  if (!SITE.reviews.length) return null;
  return (
    <section id="reviews" className="section has-bg" data-bg="भरोसा" aria-labelledby="reviews-h">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Google reviews</p>
          <SectionTitle id="reviews-h" text="Customers kya kehte hain" />
          <p>
            Ye hamari Google listing ke asli reviews hain, jaise likhe gaye waise hi.
            {SITE.googleProfileUrl && (
              <>
                {" "}
                <TrackedLink
                  href={SITE.googleProfileUrl}
                  external
                  event="directions_click"
                  params={{ cta_location: "reviews-head" }}
                  className="official"
                >
                  Google par saare reviews dekhein
                  <ExternalLink size={16} aria-hidden="true" />
                </TrackedLink>
              </>
            )}
          </p>
        </Reveal>

        <Reveal className="rsum">
          <span className="rsum__stars" role="img" aria-label={`${SITE.googleRating?.value ?? 5} out of 5 stars`}>
            <GoldStars count={5} size={26} />
          </span>
          {SITE.googleRating ? (
            <span>
              <strong>{SITE.googleRating.value} rating</strong> Google par, {SITE.googleRating.count} reviews se. Neeche kuch asli reviews dekhein.
            </span>
          ) : (
            <span>
              <strong>{SITE.reviews.length} Google reviews</strong> yahan dikhaye gaye hain, sabhi 5 star
            </span>
          )}
        </Reveal>

        <div
          className="reviews-scroll"
          role="region"
          aria-label="Google reviews, side mein scroll karein"
          tabIndex={0}
        >
          <Stagger className="reviews">
            {SITE.reviews.map((r, i) => (
              <StaggerItem key={r.name} className={`si${r.featured ? " si--feature" : ""}`}>
                <figure className={`review${r.featured ? " review--feature" : ""}`}>
                  <div className="review__head">
                    <span className={`av av--${i % 4}`} aria-hidden="true">{initials(r.name)}</span>
                    <div>
                      <strong>{r.name}</strong>
                      <span>{r.badge ? `${r.badge} · Google review` : "Google review"}</span>
                    </div>
                  </div>
                  <div className="review__stars" role="img" aria-label={`${r.rating} out of 5 stars`}>
                    <GoldStars count={r.rating} size={r.featured ? 22 : 18} />
                  </div>
                  <blockquote>{r.text}</blockquote>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ───────── Visit the office, with map ───────── */
export function Visit() {
  return (
    <section
      id="contact"
      className="section section--muted has-bg"
      data-bg="संपर्क"
      aria-labelledby="contact-h"
    >
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Visit or contact us</p>
          <SectionTitle id="contact-h" text="Dewas office visit karein" />
          <p>Seedha aaiye, call kijiye ya message karein. Guidance har tarah se same milegi.</p>
        </Reveal>

        <div className="visit">
          <Reveal className="visit__card">
            <OpenNow className="open--lg" />
            <div className="contact-row">
              <span className="ico"><Icon name="MapPin" size={22} /></span>
              <div>
                <strong>Address</strong>
                <address>{ADDRESS_ONE_LINE}</address>
              </div>
            </div>
            <div className="contact-row">
              <span className="ico"><Icon name="WhatsApp" size={22} /></span>
              <div>
                <strong>Phone aur WhatsApp</strong>
                <TrackedLink href={telLink} event="phone_click" params={{ cta_location: "contact-section" }}>
                  {SITE.phone.display}
                </TrackedLink>
              </div>
            </div>
            <div className="contact-row">
              <span className="ico"><Icon name="Users" size={22} /></span>
              <div>
                <strong>Alternate number</strong>
                <TrackedLink
                  href={`tel:${SITE.alternatePhone.tel}`}
                  event="phone_click"
                  params={{ cta_location: "contact-section-alt" }}
                >
                  {SITE.alternatePhone.display}
                </TrackedLink>
              </div>
            </div>
            {SITE.hours && (
              <div className="contact-row">
                <span className="ico"><Icon name="Clock" size={22} /></span>
                <div>
                  <strong>Opening hours</strong>
                  <p>{SITE.hours}</p>
                </div>
              </div>
            )}
            <div className="visit__actions">
              <WhatsAppButton location="contact-section">WhatsApp Karein</WhatsAppButton>
              <CallButton location="contact-section">Call the Office</CallButton>
            </div>
            {SITE.googleProfileUrl && (
              <TrackedLink
                href={SITE.googleProfileUrl}
                external
                event="directions_click"
                params={{ cta_location: "google-listing" }}
                className="official"
              >
                Google Maps par hamari listing dekhein
                <ExternalLink size={16} aria-hidden="true" />
              </TrackedLink>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <MapEmbed />
          </Reveal>
        </div>

        <Reveal className="visit__remote">
          <div>
            <h3>Dewas mein nahi hain? Remote help bhi milegi</h3>
            <p>
              Zyada tar taiyari WhatsApp aur phone par ho jaati hai, isliye doori aapko
              shuru karne se nahi rokegi.
            </p>
            <p className="note">
              Pehle message mein Aadhaar, passport ya PAN ki scan mat bhejiye. Hum bata
              denge kya chahiye aur kaise share karna hai.
            </p>
          </div>
          <ul className="tick-list">
            {[
              "Poore Madhya Pradesh ke applicants ke liye guidance",
              "Doorstep support available, bas puchhiye",
              "Hum usi din reply karne ki koshish karte hain",
              "Jin steps mein aapka jaana zaroori hai wo official centre par honge",
            ].map((t) => (
              <li key={t}>
                <Check size={18} aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Guides teaser: internal links to the article pages ───────── */
export function GuidesTeaser() {
  return (
    <section className="section section--white" aria-labelledby="guides-h">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Useful guides</p>
          <SectionTitle id="guides-h" text="Passport ke sawalon ke seedhe jawab" />
          <p>
            Documents, appointment, police verification aur fake agents se bachav, simple
            Hinglish mein.{" "}
            <Link href="/guides/" className="official">
              Saari guides dekhein
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </Reveal>
        <Stagger className="tiles tiles--tight">
          {GUIDES.slice(0, 3).map((g) => (
            <StaggerItem key={g.slug}>
              <Spot className="tile">
                <Link href={g.path} className="tile__link">
                  <h3>{g.h1}</h3>
                  <p>{g.description}</p>
                  <span className="tile__go"><ArrowRight size={18} aria-hidden="true" /></span>
                </Link>
              </Spot>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
export function FaqSection() {
  return (
    <section id="faq" className="section has-bg" data-bg="सवाल" aria-labelledby="faq-h">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Questions</p>
          <SectionTitle id="faq-h" text="Aksar pooche jaane wale sawal (FAQs)" />
          <p>Fees, documents, timeline aur hum kya kar sakte hain aur kya nahi, sab ke seedhe jawab.</p>
        </Reveal>
        <Reveal>
          <Faq items={FAQS} category="general" searchable />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Final CTA ───────── */
export function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-h">
      <div className="container final__grid">
        <Reveal className="final__in">
          <SectionTitle id="final-h" text="Koi sawal hai? WhatsApp karein ya office aayein" />
          <span className="hi" lang="hi">अपने दस्तावेज़ों के लिए आज ही सही मार्गदर्शन लें।</span>
          <p>
            Bataiye aapko kya chahiye. Process, documents aur cost, sab kaam shuru karne se
            pehle samjha denge.
          </p>
          <div className="hero__cta">
            <WhatsAppButton location="final-cta" className="btn btn--wa btn--lg">
              WhatsApp for Guidance
            </WhatsAppButton>
            <CallButton location="final-cta" className="btn btn--ghost-light btn--lg">
              Call the Office
            </CallButton>
          </div>
        </Reveal>

        <Reveal className="final__chat" delay={0.12}>
          <p className="final__chat-label">Aapka message taiyar hai</p>
          <div className="bubble">
            <span className="bubble__who">Aap</span>
            {DEFAULT_WA_MESSAGE}
            <span className="bubble__tick" aria-hidden="true">
              <Check size={14} />
              <Check size={14} />
            </span>
          </div>
          <TrackedLink
            href={`https://wa.me/${SITE.phone.wa}?text=${encodeURIComponent(DEFAULT_WA_MESSAGE)}`}
            external
            event="whatsapp_click"
            params={{ cta_location: "final-chat" }}
            className="btn btn--wa"
          >
            <WhatsAppIcon size={20} />
            Ye message bhejein
          </TrackedLink>
        </Reveal>
      </div>
    </section>
  );
}
