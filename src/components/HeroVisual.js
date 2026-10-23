"use client";

import * as m from "motion/react-m";
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { Check, ClipboardCheck, IdCard, Landmark, UserRound } from "lucide-react";
import Icon from "@/components/Icon";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// The card entrance below is plain CSS (see .hv-card-in in globals.css), not
// Framer, for the same LCP reason as Hero.js: this sits in the initial
// viewport. The pointer-tilt stays on Framer Motion — useMotionValue starts
// at rotateX/rotateY: 0deg, a normal fully-visible state, so it never hides
// anything or depends on JS finishing before first paint.
const CHECKLIST = ["Proof of address", "Proof of date of birth", "Photo ID"];
const cardStyle = (delay) => ({ "--hd": `${delay}s` });

export default function HeroVisual() {
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
          <div className="hd hd--book hv-card-in" style={cardStyle(0.15)}>
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
          </div>

          <div className="hd hd--pan hv-card-in" style={cardStyle(0.3)}>
            <div className="hd__top">
              <span className="hd__label">PAN CARD</span>
              <IdCard />
            </div>
            <div className="hd__body">
              <span className="hd__photo"><UserRound /></span>
              <span className="hd__lines"><i /><i /><i /></span>
            </div>
            <span className="hd__chip" />
          </div>

          <div className="hd hd--dl hv-card-in" style={cardStyle(0.45)}>
            <div className="hd__top">
              <span className="hd__label">DRIVING LICENCE</span>
              <Icon name="Car" />
            </div>
            <div className="hd__body">
              <span className="hd__photo"><UserRound /></span>
              <span className="hd__lines"><i /><i /><i /></span>
            </div>
            <span className="hd__chip" />
          </div>

          <div className="hv__checklist hv-card-in" style={cardStyle(0.6)}>
            <p className="hv__card-title">
              <ClipboardCheck />
              Aapki document checklist
            </p>
            <div className="hv__rows">
              {CHECKLIST.map((t, i) => (
                <div key={t} className="hv__row hv-row-in" style={{ "--hd": `${1.1 + i * 0.16}s` }}>
                  <span className="hv__tick hv-tick-in" style={{ "--hd": `${1.15 + i * 0.16}s` }}>
                    <Check strokeWidth={3} />
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="hv__chat hv-card-in" style={cardStyle(0.75)}>
            <span className="wa"><WhatsAppIcon /></span>
            <span>Hello, I need guidance with a passport application in Dewas.</span>
          </div>
        </m.div>
      </div>
    </div>
  );
}
