"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/Cta";
import Icon from "@/components/Icon";
import { NAV, SERVICES } from "@/lib/content";
import { SITE } from "@/lib/site";

const SECTION_IDS = ["home", "services", "how-it-works", "about", "faq", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`hdr${scrolled ? " is-scrolled" : ""}`}>
      <div className="container hdr__row">
        <Link href="/" className="brand" aria-label="Iqbal Khan Passport Consultant, home">
          <Image
            src={SITE.logo}
            alt="Iqbal Khan Passport Consultant, Dewas"
            width={1978}
            height={638}
            priority
            sizes="(max-width: 980px) 190px, 230px"
            className="brand__logo"
          />
        </Link>

        <nav className="nav" aria-label="Main">
          {NAV.map((n) =>
            n.label === "Services" ? (
              <div className="nav__item" key={n.href}>
                <Link
                  href={`/${n.href}`}
                  aria-current={active === "services" ? "true" : undefined}
                >
                  Services
                  <ChevronDown size={15} aria-hidden="true" />
                </Link>
                <div className="menu" role="group" aria-label="Service pages">
                  {SERVICES.map((s) => (
                    <Link key={s.id} href={s.path}>
                      <span className={`menu__ico menu__ico--${s.tone}`}>
                        <Icon name={s.icon} size={20} />
                      </span>
                      <span>
                        <strong>{s.name}</strong>
                        <small lang="hi">{s.hindi}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={n.href}
                href={`/${n.href}`}
                aria-current={active === n.href.slice(1) ? "true" : undefined}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hdr__actions">
          <CallButton location="header" className="btn btn--ghost btn--sm">
            Call
          </CallButton>
          <WhatsAppButton location="header" className="btn btn--wa btn--sm">
            WhatsApp
          </WhatsAppButton>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-nav" className="mnav" data-open={open}>
        <nav aria-label="Mobile">
          {NAV.map((n) => (
            <div key={n.href}>
              <Link href={`/${n.href}`} className="mnav__link" onClick={() => setOpen(false)}>
                {n.label}
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
              {n.label === "Services" &&
                SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={s.path}
                    className="mnav__link mnav__sub"
                    onClick={() => setOpen(false)}
                  >
                    {s.name}
                    <ChevronRight size={16} aria-hidden="true" />
                  </Link>
                ))}
            </div>
          ))}
        </nav>
        <div className="mnav__cta">
          <CallButton location="mobile-menu">Call</CallButton>
          <WhatsAppButton location="mobile-menu">WhatsApp</WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
