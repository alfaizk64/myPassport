"use client";

import * as m from "motion/react-m";
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Check, ClipboardCheck, IdCard, Landmark, UserRound } from "lucide-react";
import { WhatsAppButton } from "@/components/Cta";
import Icon from "@/components/Icon";
import { EASE } from "@/components/Motion";
import OpenNow from "@/components/OpenNow";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { HERO_POINTS } from "@/lib/content";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

function Words({ text, start = 0 }) {
  return text.split(" ").map((w, i) => (
    <span key={`${w}-${i}`}>
      <span className="w">
        <m.span
          data-reveal
          className="w__in"
          initial={{ y: "115%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75, delay: start + i * 0.07, ease: EASE }}
        >
          {w}
        </m.span>
      </span>{" "}
    </span>
  ));
}

const list = { hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: 1.1 } } };
const row = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
};
const tick = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", stiffness: 420, damping: 16 } },
};
const CHECKLIST = ["Proof of address", "Proof of date of birth", "Photo ID"];
const rise = (delay) => ({
  initial: { opacity: 0, y: 30, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.85, delay, ease: EASE },
});

function HeroVisual() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 110, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 110, damping: 18 });

  return (
    <div
      className="hv-wrap"
      aria-hidden="true"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="hv">
        <div className="hv__glow" />
        <m.div className="hv__stage" style={{ rotateX, rotateY }}>
          <m.div data-reveal className="hd hd--book" {...rise(0.15)}>
            <svg className="stamp__ring" viewBox="0 0 100 100">
              <defs>
                <path id="stamp-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="9" fontWeight="800" letterSpacing="1" fill="currentColor">
                <textPath href="#stamp-circle" textLength="236" lengthAdjust="spacing">
                  DEWAS • MADHYA PRADESH • PASSPORT • PAN • LICENCE •
                </textPath>
              </text>
            </svg>
            <span className="hd__emblem">
              <Landmark />
            </span>
            <span className="hd__title">PASSPORT</span>
            <span className="hd__hi" lang="hi">पासपोर्ट</span>
            <span className="hd__mrz">{"P<IND<<<<<<<<<<<<<<<<"}</span>
          </m.div>

          <m.div data-reveal className="hd hd--pan" {...rise(0.3)}>
            <div className="hd__top">
              <span className="hd__label">PAN CARD</span>
              <IdCard />
            </div>
            <div className="hd__body">
              <span className="hd__photo"><UserRound /></span>
              <span className="hd__lines"><i /><i /><i /></span>
            </div>
            <span className="hd__chip" />
          </m.div>

          <m.div data-reveal className="hd hd--dl" {...rise(0.45)}>
            <div className="hd__top">
              <span className="hd__label">DRIVING LICENCE</span>
              <Icon name="Car" />
            </div>
            <div className="hd__body">
              <span className="hd__photo"><UserRound /></span>
              <span className="hd__lines"><i /><i /><i /></span>
            </div>
            <span className="hd__chip" />
          </m.div>

          <m.div data-reveal className="hv__checklist" {...rise(0.6)}>
            <p className="hv__card-title">
              <ClipboardCheck />
              Aapki document checklist
            </p>
            <m.div variants={list} initial="hidden" animate="show" className="hv__rows">
              {CHECKLIST.map((t) => (
                <m.div key={t} className="hv__row" variants={row}>
                  <m.span className="hv__tick" variants={tick}>
                    <Check strokeWidth={3} />
                  </m.span>
                  {t}
                </m.div>
              ))}
            </m.div>
          </m.div>

          <m.div data-reveal className="hv__chat" {...rise(0.75)}>
            <span className="wa"><WhatsAppIcon /></span>
            <span>Hello, I need guidance with a passport application in Dewas.</span>
          </m.div>
        </m.div>
      </div>
    </div>
  );
}

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
          <m.p data-reveal className="eyebrow" {...up(0.05)}>
            Passport • PAN Card • Driving Licence · Dewas
          </m.p>

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
            Get guidance with applications, document requirements and appointment
            preparation from Iqbal Khan Passport Consultant in Dewas.
          </p>

          <m.p data-reveal className="hi" {...up(0.2)}>
            Passport, PAN Card aur Driving Licence banwana hai? Befikar raho, hum form
            filling se lekar final document tak guide karte hain.
          </m.p>

          <m.div data-reveal className="hero__cta" {...up(0.3)}>
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
          </m.div>

          <m.div data-reveal className="hero__status" {...up(0.4)}>
            <OpenNow />
          </m.div>

          <m.ul
            data-reveal
            className="hero__points"
            {...up(0.5)}
            aria-label="Why people choose us"
          >
            {HERO_POINTS.map((p) => (
              <li key={p.text}>
                <span className="ico">
                  <Icon name={p.icon} size={18} />
                </span>
                {p.text}
              </li>
            ))}
          </m.ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
