"use client";

import { useState } from "react";
import * as m from "motion/react-m";
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { RotateCw } from "lucide-react";
import OpenNow from "@/components/OpenNow";
import { ADDRESS_ONE_LINE, SITE } from "@/lib/site";

export default function IdCardFlip() {
  const [flipped, setFlipped] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });

  return (
    <div
      className="idflip"
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
      <m.div className="idflip__tilt" style={{ rotateX, rotateY }}>
        <div className="idflip__card" data-flipped={flipped}>
          <div className="idflip__face idflip__front" aria-hidden={flipped}>
            <div className="idflip__top">
              <span>Document consultant</span>
              <span>Dewas · MP</span>
            </div>
            <div className="idflip__mid">
              <span className="idflip__mono">IK</span>
              <span className="idflip__chip" />
            </div>
            <div>
              <h3>Iqbal Khan</h3>
              <p>Passport · PAN Card · Driving Licence</p>
            </div>
          </div>

          <div className="idflip__face idflip__back" aria-hidden={!flipped}>
            <div className="idflip__top">
              <span>Office</span>
              <OpenNow />
            </div>
            <address>{ADDRESS_ONE_LINE}</address>
            <ul>
              <li>{SITE.phone.display}</li>
              <li>{SITE.alternatePhone.display}</li>
              {SITE.hours && <li>{SITE.hours}</li>}
            </ul>
          </div>
        </div>
      </m.div>

      <button
        type="button"
        className="idflip__btn"
        aria-pressed={flipped}
        onClick={() => setFlipped((v) => !v)}
      >
        <RotateCw size={16} aria-hidden="true" />
        {flipped ? "Wapas dekhein" : "Card palatein"}
      </button>
    </div>
  );
}
