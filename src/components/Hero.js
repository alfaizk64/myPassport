import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/Cta";
import HeroVisual from "@/components/HeroVisual";
import Icon from "@/components/Icon";
import { Up, Words } from "@/components/Motion";
import OpenNow from "@/components/OpenNow";
import { HERO_POINTS } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__mesh" aria-hidden="true">
        <span />
        <span />
      </div>
      <span className="hero__bgword" lang="hi" aria-hidden="true">देवास</span>
      <div className="container hero__grid">
        <div className="hero__copy">
          <Up as="p" delay={0.05} className="eyebrow">
            Passport • PAN Card • Driving Licence · Dewas
          </Up>

          <h1 id="hero-title">
            <span className="line">
              <Words text="Your Documents." start={0.1} />
            </span>
            <span className="line">
              <span className="hl">
                <Words text="The Right Guidance." start={0.3} />
              </span>
            </span>
            <span className="line">
              <Words text="A Simpler Process." start={0.55} />
            </span>
          </h1>

          <p className="lead">
            <strong>Passport Consultant in Dewas</strong> — get guidance with applications,
            document requirements and appointment preparation from Iqbal Khan.
          </p>

          <Up as="p" delay={0.2} className="hi">
            Passport, PAN Card aur Driving Licence banwana hai? Befikar raho, hum form
            filling se lekar final document tak guide karte hain.
          </Up>

          <Up delay={0.3} className="hero__cta">
            <WhatsAppButton
              location="hero"
              className="btn btn--wa btn--lg"
              message="Hello, I need free guidance with a document application in Dewas."
            >
              WhatsApp for Free Guidance
            </WhatsAppButton>
            <a href="#services" className="btn btn--ghost btn--lg">
              Explore Our Services
              <ArrowRight className="arrow" size={20} aria-hidden="true" />
            </a>
          </Up>

          <Up delay={0.4} className="hero__status">
            <OpenNow />
          </Up>

          <Up as="ul" delay={0.5} className="hero__points" aria-label="Why people choose us">
            {HERO_POINTS.map((p) => (
              <li key={p.text}>
                <span className="ico">
                  <Icon name={p.icon} size={18} />
                </span>
                {p.text}
              </li>
            ))}
          </Up>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
