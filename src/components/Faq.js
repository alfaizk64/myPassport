"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { WhatsAppButton } from "@/components/Cta";
import { track } from "@/lib/analytics";

export default function Faq({ items, category = "general", searchable = false }) {
  const [open, setOpen] = useState(-1);
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const visible = items
    .map((it, i) => ({ ...it, i }))
    .filter((it) => !needle || `${it.q} ${it.a}`.toLowerCase().includes(needle));

  return (
    <div className="faq">
      {searchable && (
        <div className="faq__search">
          <label htmlFor={`faq-search-${category}`}>Apna sawal dhundhein</label>
          <div className="faq__field">
            <Search size={20} aria-hidden="true" />
            <input
              id={`faq-search-${category}`}
              type="search"
              inputMode="search"
              autoComplete="off"
              placeholder="jaise: fees, time, documents, RTO"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <p className="faq__count" aria-live="polite">
            {needle ? `${visible.length} jawab mile` : `${items.length} sawal`}
          </p>
        </div>
      )}

      {visible.map((it) => {
        const isOpen = open === it.i;
        const id = `faq-${category}-${it.i}`;
        return (
          <div className="faq__item" data-open={isOpen} key={it.q}>
            <h3>
              <button
                type="button"
                id={`${id}-q`}
                className="faq__q"
                aria-expanded={isOpen}
                aria-controls={`${id}-a`}
                onClick={() => {
                  setOpen(isOpen ? -1 : it.i);
                  if (!isOpen)
                    track("faq_expand", { faq_category: category, faq_id: `${category}-${it.i + 1}` });
                }}
              >
                {it.q}
                <ChevronDown size={22} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`${id}-a`}
              role="region"
              aria-labelledby={`${id}-q`}
              className="faq__panel"
              inert={!isOpen}
            >
              <div className="faq__inner">
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}

      {searchable && needle && visible.length === 0 && (
        <div className="faq__empty">
          <p>Is naam se koi sawal nahi mila. Seedha puchh lijiye, hum batayenge.</p>
          <WhatsAppButton location="faq-empty" message={`Hello, mera sawal hai: ${q.trim()}`}>
            WhatsApp par puchhein
          </WhatsAppButton>
        </div>
      )}
    </div>
  );
}
