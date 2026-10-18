"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { WhatsAppButton } from "@/components/Cta";
import Icon from "@/components/Icon";

// Desktop: three panels, the active one expands. Mobile: a tap accordion.
export default function ServiceExplorer({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="xp">
      {items.map((s, i) => {
        const on = active === i;
        return (
          <article
            key={s.id}
            className={`xp__panel xp__panel--${s.tone}`}
            data-active={on}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse" && window.matchMedia("(min-width: 980px)").matches) {
                setActive(i);
              }
            }}
          >
            <Icon name={s.icon} size={260} className="xp__mark" strokeWidth={1} />

            <button
              type="button"
              className="xp__head"
              aria-expanded={on}
              aria-controls={`xp-${s.id}`}
              onClick={() => setActive(i)}
            >
              <span className="xp__ico"><Icon name={s.icon} size={28} /></span>
              <span className="xp__vname" aria-hidden="true">{s.name}</span>
              <span className="xp__name">
                {s.name}
                <small lang="hi">{s.hindi}</small>
              </span>
              <span className="xp__price">{s.price}</span>
              <span className="xp__plus" aria-hidden="true"><Plus size={22} /></span>
            </button>

            <div id={`xp-${s.id}`} className="xp__body" inert={!on}>
              <div className="xp__inner">
                <p className="xp__sum">{s.summary}</p>

                <p className="xp__label">Popular kaam</p>
                <ul className="xp__chips">
                  {s.chips.map((c) => (
                    <li key={c.path}>
                      <Link href={c.path} className={c.badge ? "is-hot" : undefined}>
                        {c.title}
                        {c.badge && <em>{c.badge}</em>}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <dl className="xp__meta">
                  <div>
                    <dt>Our charge</dt>
                    <dd>{s.price}</dd>
                  </div>
                  <div>
                    <dt>Typical time</dt>
                    <dd>{s.timeline.normal}</dd>
                  </div>
                  <div>
                    <dt>Fast option</dt>
                    <dd>{s.timeline.fast}</dd>
                  </div>
                </dl>

                <div className="xp__cta">
                  <Link href={s.path} className="btn btn--saffron">
                    Poori detail dekhein
                    <ArrowRight className="arrow" size={18} aria-hidden="true" />
                  </Link>
                  <WhatsAppButton
                    location={`explorer-${s.id}`}
                    service={s.id}
                    message={s.waMessage}
                    className="btn btn--wa"
                  >
                    WhatsApp karein
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
