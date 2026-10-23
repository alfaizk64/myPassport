import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/Cta";
import HeroVisual from "@/components/HeroVisual";
import Icon from "@/components/Icon";
import OpenNow from "@/components/OpenNow";
import { HERO_POINTS } from "@/lib/content";

// Server component: everything here is visible on first paint (plain markup,
// CSS-only entrance). See the "Hero entrance" note in globals.css for why —
// this content sits in the initial viewport and is Google's LCP candidate.
function HWords({ text, start = 0 }) {
  return text.split(" ").map((w, i) => (
    <span key={`${w}-${i}`}>
      <span className="hw">
        <span className="hw__in" style={{ "--hd": `${(start + i * 0.07).toFixed(2)}s` }}>
          {w}
        </span>
      </span>{" "}
    </span>
  ));
}

const riseStyle = (delay) => ({ "--hd": `${delay}s` });

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
          <p className="eyebrow hero-rise" style={riseStyle(0.05)}>
            Passport • PAN Card • Driving Licence · Dewas
          </p>

          <h1 id="hero-title">
            <span className="line">
              <HWords text="Passport Consultant" start={0.1} />
            </span>
            <span className="line">
              <span className="hl">
                <HWords text="in Dewas." start={0.3} />
              </span>
            </span>
            <span className="line">
              <HWords text="Documents, Simplified." start={0.55} />
            </span>
          </h1>

          <p className="lead">
            Get guidance with applications, document requirements and appointment
            preparation from Iqbal Khan, your local passport consultant in Dewas.
          </p>

          <p className="hi hero-rise" style={riseStyle(0.2)}>
            Passport, PAN Card aur Driving Licence banwana hai? Befikar raho, hum form
            filling se lekar final document tak guide karte hain.
          </p>

          <div className="hero__cta hero-rise" style={riseStyle(0.3)}>
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
          </div>

          <div className="hero__status hero-rise" style={riseStyle(0.4)}>
            <OpenNow />
          </div>

          <ul className="hero__points hero-rise" style={riseStyle(0.5)} aria-label="Why people choose us">
            {HERO_POINTS.map((p) => (
              <li key={p.text}>
                <span className="ico">
                  <Icon name={p.icon} size={18} />
                </span>
                {p.text}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
