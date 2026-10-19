"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";
import OpenNow from "@/components/OpenNow";
import { ADDRESS_ONE_LINE, SITE } from "@/lib/site";

// The pointer tilt is done with CSS variables set by the shared script (data-tilt).
export default function IdCardFlip() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="idflip" data-tilt="9 7">
      <div className="idflip__tilt">
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
      </div>

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
