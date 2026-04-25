"use client";
import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   BRAND TOKENS  —  Saffron / Deep Navy / Cream palette
   Inspired by Indian flag tricolor: authority + warmth
═══════════════════════════════════════════════════════════ */
const B = {
  saffron: "#FF6B1A",
  safLight: "#FF8C47",
  safDim: "rgba(255,107,26,0.12)",
  safBorder: "rgba(255,107,26,0.28)",
  navy: "#0A0A0F",
  navyMid: "#10101A",
  navyCard: "#13131F",
  navyBorder: "rgba(255,255,255,0.07)",
  cream: "#F5EDD6",
  creamDim: "rgba(245,237,214,0.55)",
  green: "#22C55E",
  greenDim: "rgba(34,197,94,0.12)",
  text: "#E8E4DA",
  textMid: "rgba(232,228,218,0.6)",
  textLow: "rgba(232,228,218,0.35)",
};

/* ═══════════════════════════════════════════════════════════  DATA  */
const SERVICES = [
  {
    id: "passport",
    emoji: "✈️",
    title: "Passport",
    hindi: "पासपोर्ट",
    accent: B.saffron,
    accentDim: B.safDim,
    accentBorder: B.safBorder,
    badge: "सबसे Popular",
    desc: "Fresh application se lekar renewal tak — sab kuch hum karte hain. Appointment booking, document verification, aur Tatkal urgent cases bhi.",
    descEn:
      "Fresh to renewal, minor to adult, lost to re-issue. We handle every passport type end-to-end.",
    features: [
      { icon: "📋", t: "Fresh Application" },
      { icon: "🔄", t: "Renewal & Re-issue" },
      { icon: "⚡", t: "Tatkal / Emergency" },
      { icon: "👶", t: "Minor Passport" },
      { icon: "📅", t: "Appointment Booking" },
      { icon: "🔍", t: "Status Tracking" },
    ],
    normal: "15–21 Days",
    fast: "1–3 Days (Tatkal)",
    price: "Starting ₹799",
  },
  {
    id: "pan",
    emoji: "🪪",
    title: "PAN Card",
    hindi: "पैनकार्ड",
    accent: "#FACC15",
    accentDim: "rgba(250,204,21,0.1)",
    accentBorder: "rgba(250,204,21,0.25)",
    badge: "e-PAN Instant",
    desc: "Naya PAN banwana ho, koi correction ho, ya card kho gaya ho — NSDL/UTIITSL se seedha process karte hain.",
    descEn:
      "New PAN, corrections, e-PAN, duplicate — complete NSDL & UTIITSL processing without confusion.",
    features: [
      { icon: "🆕", t: "New PAN" },
      { icon: "✏️", t: "Name / DOB Correction" },
      { icon: "🔁", t: "Lost / Duplicate" },
      { icon: "⚡", t: "e-PAN Same Day" },
      { icon: "👨‍👩‍👧", t: "Minor to Adult" },
      { icon: "🏢", t: "Business PAN" },
    ],
    normal: "3–7 Days",
    fast: "Same Day (e-PAN)",
    price: "Starting ₹299",
  },
  {
    id: "dl",
    emoji: "🚗",
    title: "Driving Licence",
    hindi: "ड्राइविंग लाइसेंस",
    accent: "#34D399",
    accentDim: "rgba(52,211,153,0.1)",
    accentBorder: "rgba(52,211,153,0.25)",
    badge: "RTO Support",
    desc: "Learner's licence se permanent DL tak — sab documents ready, RTO mein aapka time minimum ho.",
    descEn:
      "Learner's to permanent DL, renewal, international DL — we prep everything so your RTO visit takes 30 mins.",
    features: [
      { icon: "📄", t: "Learner's Licence" },
      { icon: "🏆", t: "Permanent DL" },
      { icon: "📅", t: "DL Renewal" },
      { icon: "🌍", t: "International DL" },
      { icon: "📍", t: "Address Change" },
      { icon: "🔁", t: "Lost / Duplicate DL" },
    ],
    normal: "15–30 Days",
    fast: "Priority Slot",
    price: "Starting ₹599",
  },
];

const STEPS = [
  {
    n: "01",
    icon: "💬",
    t: "Call or WhatsApp",
    d: "+91 7000 839816 par call karein ya WhatsApp karein. 5 minute mein aapko poori checklist mil jaayegi.",
  },
  {
    n: "02",
    icon: "📂",
    t: "Documents Share Karein",
    d: "WhatsApp pe photos send karein ya office aayein. Hum verify karke application ready karenge.",
  },
  {
    n: "03",
    icon: "🚀",
    t: "Hum Submit Karte Hain",
    d: "Authority ke paas submit — tracking ID aapko milta hai. Hum followup karte hain.",
  },
  {
    n: "04",
    icon: "🎉",
    t: "Document Ready!",
    d: "Office se collect karein ya doorstep delivery — aapki choice.",
  },
];

const TRUST = [
  { icon: "🏆", v: "8+", l: "Saal ka Experience" },
  { icon: "😊", v: "12K+", l: "Khush Clients" },
  { icon: "✅", v: "98%", l: "Success Rate" },
  { icon: "⭐", v: "4.9★", l: "Google Rating" },
];

const FAQS = [
  {
    q: "Passport banwane mein kitna time lagta hai Dewas mein?",
    a: "Normal 15–21 working days, Tatkal 1–3 days. Hum appointment booking se lekar submission tak sab handle karte hain.",
  },
  {
    q: "Iqbal Khan ka office kahan hai?",
    a: "Muskan Beauty Palace, L-55 Supermarket, Dewas, Madhya Pradesh. Phone: +91 7000 839816 ya +91 9827526564.",
  },
  {
    q: "PAN card mein galti hai — kya ho sakta hai?",
    a: "Bilkul! Name, DOB, address ya photo — sab correct kar sakte hain. Sirf Aadhaar aur purana PAN bhejo, hum baaki karte hain.",
  },
  {
    q: "Driving Licence ke liye RTO jaana padega?",
    a: "Biometrics ke liye ek visit chahiye, lekin hum sab documents ready kar dete hain to RTO mein sirf 30–45 min lagte hain.",
  },
  {
    q: "Kya data safe rehta hai?",
    a: "100% safe. Aapke documents sirf aapki application ke liye use hote hain aur kaam hone ke baad delete kar diye jaate hain.",
  },
  {
    q: "Dewas ke bahar bhi help milegi?",
    a: "Online guidance dete hain — WhatsApp pe documents bhejo, hum process karte hain. Poore MP mein clients hain hamare.",
  },
];

/* ═══════════════════════════════════════════════════════════  HOOK  */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, v];
}

/* ═══════════════════════════════════════════════════════════  CSS  */
const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; background: ${B.navy}; color: ${B.text}; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: ${B.navy}; }
  ::-webkit-scrollbar-thumb { background: ${B.saffron}; border-radius: 99px; }
  ::selection { background: ${B.safDim}; color: ${B.saffron}; }

  @keyframes fadeUp   { from{opacity:0;transform:translateY(44px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
  @keyframes floatUp  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
  @keyframes floatUpB { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(4deg)} }
  @keyframes marq     { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes pulse    { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
  @keyframes ring     { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(1.8);opacity:0} }
  @keyframes shimmer  { from{background-position:200% center} to{background-position:-200% center} }
  @keyframes spin     { to{transform:rotate(360deg)} }
  @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
  @keyframes countUp  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

  .vu  { opacity:0; transform:translateY(40px); transition:opacity 0.75s ease, transform 0.75s ease; }
  .vu.in { opacity:1; transform:translateY(0); }
  .d1{transition-delay:.08s} .d2{transition-delay:.16s} .d3{transition-delay:.24s}
  .d4{transition-delay:.32s} .d5{transition-delay:.40s} .d6{transition-delay:.48s}

  .glass {
    background: rgba(255,255,255,0.028);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid ${B.navyBorder};
  }
  .lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .lift:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(0,0,0,0.45); }

  .btn-saffron {
    display:inline-flex; align-items:center; gap:10px;
    padding:15px 28px; border-radius:14px; border:none; cursor:pointer;
    font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:15px;
    background: linear-gradient(135deg, ${B.saffron}, ${B.safLight});
    color:#fff; text-decoration:none;
    box-shadow: 0 8px 32px rgba(255,107,26,0.45);
    transition:all 0.3s; position:relative; overflow:hidden;
  }
  .btn-saffron::after { content:''; position:absolute; inset:0; background:rgba(255,255,255,0.15); opacity:0; transition:0.3s; border-radius:14px; }
  .btn-saffron:hover::after { opacity:1; }
  .btn-saffron:hover { transform:translateY(-3px); box-shadow:0 16px 44px rgba(255,107,26,0.55); }

  .btn-outline {
    display:inline-flex; align-items:center; gap:10px;
    padding:15px 28px; border-radius:14px;
    font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:15px;
    background:transparent; color:${B.text}; text-decoration:none;
    border:1.5px solid rgba(255,255,255,0.12); cursor:pointer;
    transition:all 0.3s;
  }
  .btn-outline:hover { background:rgba(255,255,255,0.06); border-color:rgba(255,255,255,0.22); transform:translateY(-2px); }

  .btn-wa {
    display:inline-flex; align-items:center; gap:10px;
    padding:15px 28px; border-radius:14px; border:none; cursor:pointer;
    font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:15px;
    background: linear-gradient(135deg,#25D366,#128C7E);
    color:#fff; text-decoration:none;
    box-shadow: 0 8px 32px rgba(37,211,102,0.4);
    transition:all 0.3s;
  }
  .btn-wa:hover { transform:translateY(-3px); box-shadow:0 16px 44px rgba(37,211,102,0.55); }

  .nav-a {
    font-size:14px; font-weight:600; color:${B.textMid};
    text-decoration:none; padding:9px 15px; border-radius:9px;
    transition:all 0.2s; cursor:pointer; background:none; border:none;
    font-family:'Plus Jakarta Sans',sans-serif; white-space:nowrap;
  }
  .nav-a:hover { color:${B.saffron}; background:${B.safDim}; }

  .svc-tab {
    flex:1; min-width:90px; padding:12px 8px; border:none; cursor:pointer;
    border-radius:14px; font-family:'Plus Jakarta Sans',sans-serif;
    font-weight:700; font-size:13px; transition:all 0.35s cubic-bezier(.4,0,.2,1);
    display:flex; flex-direction:column; align-items:center; gap:5px;
  }

  .faq-btn {
    width:100%; padding:20px 24px; background:none; border:none; cursor:pointer;
    display:flex; justify-content:space-between; align-items:center; gap:16px;
    color:${B.text}; font-family:'Plus Jakarta Sans',sans-serif;
    font-weight:700; font-size:15px; text-align:left; transition:color 0.2s;
  }
  .faq-btn:hover { color:${B.saffron}; }

  /* Mobile overrides */
  @media (max-width:768px) {
    .hide-mob  { display:none !important; }
    .show-mob  { display:flex !important; }
    .g2 { grid-template-columns:1fr !important; }
    .g3 { grid-template-columns:1fr !important; }
    .g4 { grid-template-columns:1fr 1fr !important; }
    .svc-detail { grid-template-columns:1fr !important; }
    .footer-grid { grid-template-columns:1fr 1fr !important; }
    .hero-btns { flex-direction:column !important; align-items:stretch !important; }
    .hero-btns a, .hero-btns button { justify-content:center; }
    .stats-row { gap:16px !important; }
    .step-num { font-size:38px !important; }
  }
  @media (min-width:769px) {
    .show-mob { display:none !important; }
  }
  @media (max-width:480px) {
    .g4 { grid-template-columns:1fr !important; }
    .svc-tabs { gap:6px !important; }
    .svc-tab  { padding:10px 6px !important; font-size:12px !important; }
    .footer-grid { grid-template-columns:1fr !important; }
  }
`;

/* ═══════════════════════════════════════════════════════════  MAIN  */
export default function IqbalKhanPage() {
  const [activeId, setActiveId] = useState("passport");
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const svc = SERVICES.find((s) => s.id === activeId);

  /* scroll nav */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* smooth scroll helper — fixes the "See Services" bug */
  const go = useCallback(
    (href) => {
      setMenuOpen(false);
      setTimeout(
        () => {
          const el = document.querySelector(href);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top, behavior: "smooth" });
          }
        },
        menuOpen ? 300 : 0,
      );
    },
    [menuOpen],
  );

  /* InView refs */
  const [heroRef, heroIn] = useInView(0.05);
  const [svcRef, svcIn] = useInView(0.08);
  const [stepRef, stepIn] = useInView(0.08);
  const [trustRef, trustIn] = useInView(0.1);
  const [ctaRef, ctaIn] = useInView(0.15);
  const [faqRef, faqIn] = useInView(0.08);

  /* phone numbers */
  const PH1 = "+917000839816";
  const PH2 = "+919827526564";
  const WA = `https://wa.me/${PH1}?text=Namaste%20Iqbal%20Bhai!%20Mujhe%20document%20help%20chahiye.`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ══════════ NAVBAR ══════════ */}
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 max(16px,4%)",
          background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(28px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,107,26,0.1)" : "none",
          transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Iqbal Khan Passport Consultant Home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              flexShrink: 0,
              background: `linear-gradient(135deg,${B.saffron},#FF3D00)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              boxShadow: `0 4px 18px rgba(255,107,26,0.5)`,
              fontFamily: "'Bebas Neue',sans-serif",
              color: "#fff",
              letterSpacing: 1,
            }}
          >
            IK
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: 20,
                letterSpacing: 1,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              IQBAL KHAN
            </div>
            <div
              style={{
                fontSize: 10,
                color: B.saffron,
                fontWeight: 700,
                letterSpacing: 2.5,
                lineHeight: 1,
                marginTop: 2,
              }}
            >
              PASSPORT CONSULTANT
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          className="hide-mob"
          role="navigation"
          aria-label="Main"
          style={{ display: "flex", gap: 2 }}
        >
          {[
            ["Services", "#services"],
            ["How It Works", "#how"],
            ["Why Us", "#why"],
            ["FAQ", "#faq"],
          ].map(([l, h]) => (
            <button key={l} className="nav-a" onClick={() => go(h)}>
              {l}
            </button>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
          <a
            href={`tel:${PH1}`}
            className="btn-outline hide-mob"
            style={{ padding: "9px 16px", fontSize: 13 }}
          >
            📞 Free Call
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-saffron"
            style={{ padding: "10px 18px", fontSize: 13 }}
          >
            💬 <span className="hide-mob">WhatsApp</span>
            <span className="show-mob" style={{ display: "none" }}>
              Chat
            </span>
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mob"
            aria-label="Toggle menu"
            style={{
              background: menuOpen ? B.safDim : "rgba(255,255,255,0.06)",
              border: `1px solid ${menuOpen ? B.safBorder : "rgba(255,255,255,0.1)"}`,
              borderRadius: 10,
              width: 40,
              height: 40,
              display: "none",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              color: menuOpen ? B.saffron : "#fff",
              fontSize: 18,
              transition: "all 0.2s",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            zIndex: 499,
            background: "rgba(10,10,15,0.97)",
            backdropFilter: "blur(28px)",
            borderBottom: `1px solid ${B.navyBorder}`,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "16px max(16px,4%) 24px",
            animation: "slideDown 0.25s ease",
          }}
        >
          {[
            ["🛫 Passport", "#services"],
            ["🪪 PAN Card", "#services"],
            ["🚗 Driving Licence", "#services"],
            ["⚙️ How It Works", "#how"],
            ["🏆 Why Us", "#why"],
            ["❓ FAQ", "#faq"],
          ].map(([l, h]) => (
            <button
              key={l}
              className="nav-a"
              onClick={() => go(h)}
              style={{
                textAlign: "left",
                padding: "14px 16px",
                fontSize: 15,
                width: "100%",
              }}
            >
              {l}
            </button>
          ))}
          <div
            style={{ height: 1, background: B.navyBorder, margin: "8px 0" }}
          />
          <a
            href={`tel:${PH1}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "13px 16px",
              color: B.text,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            📞 +91 7000 839816
          </a>
          <a
            href={`tel:${PH2}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "13px 16px",
              color: B.text,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            📞 +91 9827526564
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ margin: "8px 0 0", justifyContent: "center" }}
          >
            💬 WhatsApp Karo
          </a>
        </div>
      )}

      <main>
        {/* ══════════ HERO ══════════ */}
        <section
          id="home"
          aria-label="Hero"
          style={{
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "100px max(16px,5%) 80px",
            position: "relative",
            overflow: "hidden",
            background: `radial-gradient(ellipse 110% 70% at 50% -10%, rgba(255,107,26,0.16) 0%, transparent 65%)`,
          }}
        >
          {/* Decorative grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(rgba(255,107,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,26,0.04) 1px, transparent 1px)`,
              backgroundSize: "52px 52px",
              pointerEvents: "none",
            }}
          />

          {/* Blobs */}
          <div
            style={{
              position: "absolute",
              top: "12%",
              left: "-8%",
              width: 480,
              height: 480,
              borderRadius: "50%",
              background: `radial-gradient(circle,rgba(255,107,26,0.14),transparent 70%)`,
              filter: "blur(70px)",
              pointerEvents: "none",
              animation: "floatUp 9s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              right: "-8%",
              width: 380,
              height: 380,
              borderRadius: "50%",
              background: `radial-gradient(circle,rgba(255,61,0,0.1),transparent 70%)`,
              filter: "blur(70px)",
              pointerEvents: "none",
              animation: "floatUpB 12s ease-in-out infinite",
            }}
          />

          {/* IK monogram watermark */}
          <div
            style={{
              position: "absolute",
              right: "-2%",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "clamp(160px,22vw,320px)",
              color: "rgba(255,107,26,0.04)",
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            IK
          </div>

          <div
            ref={heroRef}
            style={{
              position: "relative",
              textAlign: "center",
              maxWidth: 860,
              width: "100%",
            }}
          >
            {/* Pill */}
            <div
              className={`vu ${heroIn ? "in" : ""}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: B.safDim,
                border: `1px solid ${B.safBorder}`,
                borderRadius: 100,
                padding: "7px 18px",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: B.green,
                  boxShadow: `0 0 10px ${B.green}`,
                  animation: "pulse 2.5s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: 13, fontWeight: 700, color: B.saffron }}>
                देवास का No.1 Passport Consultant — 8+ साल का भरोसा
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`vu d1 ${heroIn ? "in" : ""}`}
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "clamp(2.8rem,9vw,7rem)",
                letterSpacing: "2px",
                lineHeight: 0.95,
                marginBottom: 24,
                color: "#fff",
              }}
            >
              IQBAL KHAN
              <br />
              <span
                style={{
                  background: `linear-gradient(90deg,${B.saffron},${B.safLight})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                PASSPORT
              </span>
              <br />
              <span
                style={{
                  fontSize: "0.6em",
                  color: B.creamDim,
                  letterSpacing: "4px",
                }}
              >
                CONSULTANT · DEWAS
              </span>
            </h1>

            <p
              className={`vu d2 ${heroIn ? "in" : ""}`}
              style={{
                fontSize: "clamp(1rem,2.2vw,1.18rem)",
                color: B.textMid,
                lineHeight: 1.85,
                marginBottom: 44,
                maxWidth: 600,
                margin: "0 auto 44px",
              }}
            >
              Passport, PAN Card aur Driving Licence banwana hai?{" "}
              <strong style={{ color: B.text }}>Befikar raho.</strong>
              <br />
              Hum sab handle karte hain — form filling se lekar final document
              tak. Dewas ka sabse trusted naam.
            </p>

            {/* CTAs */}
            <div
              className={`vu d3 ${heroIn ? "in" : ""} hero-btns`}
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                💬 WhatsApp Karo: +91 7000 839816
              </a>
              <button className="btn-outline" onClick={() => go("#services")}>
                Hamare Services Dekho ↓
              </button>
            </div>

            {/* Trust row */}
            <div
              className={`vu d4 ${heroIn ? "in" : ""} stats-row`}
              style={{
                marginTop: 52,
                display: "flex",
                gap: 28,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                "🔒 100% Secure",
                "⚡ Same-Day Response",
                "✅ Govt Process",
                "🏠 Doorstep Support",
              ].map((b) => (
                <span
                  key={b}
                  style={{ fontSize: 13, color: B.textLow, fontWeight: 500 }}
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Scroll cue */}
            <div
              className={`vu d5 ${heroIn ? "in" : ""}`}
              style={{
                marginTop: 56,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 1,
                  height: 44,
                  background: `linear-gradient(to bottom, ${B.saffron}, transparent)`,
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  color: B.textLow,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                Scroll
              </span>
            </div>
          </div>
        </section>

        {/* ══════════ STATS MARQUEE ══════════ */}
        <div
          style={{
            overflow: "hidden",
            borderTop: "1px solid rgba(255,107,26,0.1)",
            borderBottom: "1px solid rgba(255,107,26,0.1)",
            background: "rgba(255,107,26,0.04)",
            padding: "18px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              animation: "marq 22s linear infinite",
              width: "max-content",
            }}
          >
            {[...TRUST, ...TRUST, ...TRUST, ...TRUST].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "0 36px",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: 20 }}>{s.icon}</span>
                <span
                  style={{
                    fontFamily: "'Fira Code',monospace",
                    fontWeight: 700,
                    fontSize: 20,
                    color: B.saffron,
                  }}
                >
                  {s.v}
                </span>
                <span
                  style={{ fontSize: 13, color: B.textLow, fontWeight: 500 }}
                >
                  {s.l}
                </span>
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: B.safBorder,
                    marginLeft: 24,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ SERVICES ══════════ */}
        <section
          id="services"
          aria-label="Our services"
          style={{ padding: "96px max(16px,5%)" }}
        >
          <div ref={svcRef} style={{ maxWidth: 1120, margin: "0 auto" }}>
            {/* Header */}
            <div
              className={`vu ${svcIn ? "in" : ""}`}
              style={{ textAlign: "center", marginBottom: 52 }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: B.safDim,
                  border: `1px solid ${B.safBorder}`,
                  borderRadius: 100,
                  padding: "5px 18px",
                  fontSize: 12,
                  fontWeight: 800,
                  color: B.saffron,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Hamare Services
              </span>
              <h2
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(2.2rem,5vw,4rem)",
                  letterSpacing: "2px",
                  color: "#fff",
                  marginBottom: 14,
                }}
              >
                KYA CHAHIYE <span style={{ color: B.saffron }}>AAPKO?</span>
              </h2>
              <p
                style={{
                  color: B.textMid,
                  fontSize: 15,
                  maxWidth: 500,
                  margin: "0 auto",
                }}
              >
                Apna service choose karein — hum poora process handle karte
                hain.
              </p>
            </div>

            {/* Tabs */}
            <div
              className={`vu d1 ${svcIn ? "in" : ""} svc-tabs`}
              style={{
                display: "flex",
                gap: 10,
                maxWidth: 480,
                margin: "0 auto 44px",
                padding: 8,
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${B.navyBorder}`,
                borderRadius: 20,
              }}
            >
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  aria-label={s.title}
                  className="svc-tab"
                  style={{
                    background: activeId === s.id ? s.accentDim : "transparent",
                    color: activeId === s.id ? s.accent : B.textLow,
                    boxShadow:
                      activeId === s.id
                        ? `0 0 0 1.5px ${s.accentBorder}, 0 8px 24px ${s.accent}22`
                        : "none",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{s.emoji}</span>
                  <span style={{ lineHeight: 1.2 }}>
                    {s.title.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Detail card */}
            <div
              key={activeId}
              className={`vu d2 ${svcIn ? "in" : ""} svc-detail`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 28,
                background: `radial-gradient(ellipse at top left, ${svc.accentDim}, transparent 55%), rgba(255,255,255,0.02)`,
                border: `1px solid ${svc.accentBorder}`,
                borderRadius: 28,
                padding: "clamp(24px,5%,52px)",
                animation: "fadeIn 0.35s ease",
              }}
            >
              {/* Left */}
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: svc.accentDim,
                    color: svc.accent,
                    border: `1px solid ${svc.accentBorder}`,
                    borderRadius: 8,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: 2.5,
                    padding: "5px 12px",
                    marginBottom: 20,
                    textTransform: "uppercase",
                  }}
                >
                  {svc.badge}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  <span style={{ fontSize: 42 }}>{svc.emoji}</span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: "clamp(1.8rem,4vw,3rem)",
                        letterSpacing: "1px",
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: 14, color: B.textLow, marginTop: 4 }}>
                      {svc.hindi}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    color: B.textMid,
                    lineHeight: 1.8,
                    marginBottom: 8,
                    fontSize: 14,
                  }}
                >
                  {svc.desc}
                </p>
                <p
                  style={{
                    color: B.textLow,
                    lineHeight: 1.7,
                    marginBottom: 28,
                    fontSize: 13,
                  }}
                >
                  {svc.descEn}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    marginBottom: 32,
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    { l: "Normal", v: svc.normal },
                    { l: "Fast Track", v: svc.fast },
                    { l: "Starting At", v: svc.price },
                  ].map((p) => (
                    <div
                      key={p.l}
                      style={{
                        flex: "1 1 100px",
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${B.navyBorder}`,
                        borderRadius: 12,
                        padding: "13px 14px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 10,
                          color: B.textLow,
                          textTransform: "uppercase",
                          letterSpacing: 1.5,
                          marginBottom: 6,
                        }}
                      >
                        {p.l}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Fira Code',monospace",
                          fontWeight: 700,
                          fontSize: 13,
                          color: svc.accent,
                        }}
                      >
                        {p.v}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={`${WA}&text=Namaste%20Iqbal%20Bhai!%20Mujhe%20${encodeURIComponent(svc.title)}%20mein%20help%20chahiye.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 28px",
                    borderRadius: 12,
                    background: svc.accent,
                    color: svc.id === "pan" ? "#000" : "#fff",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: 15,
                    boxShadow: `0 8px 28px ${svc.accent}55`,
                    transition: "all 0.3s",
                  }}
                >
                  {svc.title} Apply Karo →
                </a>
              </div>

              {/* Right: feature grid */}
              <div>
                <p
                  style={{
                    fontSize: 11,
                    color: B.textLow,
                    textTransform: "uppercase",
                    letterSpacing: 2.5,
                    marginBottom: 16,
                    fontWeight: 700,
                  }}
                >
                  Kya Kya Milega
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  {svc.features.map((f) => (
                    <div
                      key={f.t}
                      className="lift glass"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "13px 14px",
                        borderRadius: 12,
                      }}
                    >
                      <span style={{ fontSize: 18, flexShrink: 0 }}>
                        {f.icon}
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          color: B.textMid,
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        {f.t}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: "16px 18px",
                    background: svc.accentDim,
                    border: `1px dashed ${svc.accentBorder}`,
                    borderRadius: 14,
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: 20 }}>💡</span>
                  <p
                    style={{ fontSize: 13, color: B.textMid, lineHeight: 1.7 }}
                  >
                    Confuse ho?{" "}
                    <strong style={{ color: svc.accent }}>
                      Free mein poochho
                    </strong>{" "}
                    — WhatsApp karo, 5 min mein bata denge kya chahiye.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ HOW IT WORKS ══════════ */}
        <section
          id="how"
          aria-label="How it works"
          style={{
            padding: "80px max(16px,5%)",
            background: "rgba(255,255,255,0.015)",
            borderTop: `1px solid ${B.navyBorder}`,
            borderBottom: `1px solid ${B.navyBorder}`,
          }}
        >
          <div ref={stepRef} style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div
              className={`vu ${stepIn ? "in" : ""}`}
              style={{ textAlign: "center", marginBottom: 52 }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: B.greenDim,
                  border: "1px solid rgba(34,197,94,0.2)",
                  borderRadius: 100,
                  padding: "5px 18px",
                  fontSize: 12,
                  fontWeight: 800,
                  color: B.green,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Seedha Simple
              </span>
              <h2
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(2rem,4.5vw,3.5rem)",
                  letterSpacing: "2px",
                  color: "#fff",
                }}
              >
                4 STEPS MEIN <span style={{ color: B.green }}>DONE!</span>
              </h2>
            </div>
            <div
              className="g4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 18,
              }}
            >
              {STEPS.map((s, i) => (
                <div
                  key={s.n}
                  className={`vu d${i + 1} lift glass ${stepIn ? "in" : ""}`}
                  style={{
                    borderRadius: 22,
                    padding: "26px 20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="step-num"
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 14,
                      fontFamily: "'Bebas Neue',sans-serif",
                      fontSize: 52,
                      color: "rgba(255,107,26,0.07)",
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: B.safDim,
                      border: `1px solid ${B.safBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      marginBottom: 18,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h4
                    style={{
                      fontWeight: 800,
                      fontSize: 15,
                      marginBottom: 10,
                      color: "#fff",
                    }}
                  >
                    {s.t}
                  </h4>
                  <p
                    style={{ fontSize: 13, color: B.textLow, lineHeight: 1.75 }}
                  >
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ WHY US ══════════ */}
        <section
          id="why"
          aria-label="Why choose Iqbal Khan"
          style={{ padding: "96px max(16px,5%)" }}
        >
          <div ref={trustRef} style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div
              className={`vu ${trustIn ? "in" : ""}`}
              style={{ textAlign: "center", marginBottom: 52 }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: B.safDim,
                  border: `1px solid ${B.safBorder}`,
                  borderRadius: 100,
                  padding: "5px 18px",
                  fontSize: 12,
                  fontWeight: 800,
                  color: B.saffron,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Kyun Choose Karein
              </span>
              <h2
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(2rem,4.5vw,3.5rem)",
                  letterSpacing: "2px",
                  color: "#fff",
                }}
              >
                IQBAL BHAI PE{" "}
                <span style={{ color: B.saffron }}>BHAROSA KYO?</span>
              </h2>
            </div>

            {/* Stats cards big */}
            <div
              className="g4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 18,
                marginBottom: 24,
              }}
            >
              {TRUST.map((s, i) => (
                <div
                  key={s.l}
                  className={`vu d${i + 1} lift glass ${trustIn ? "in" : ""}`}
                  style={{
                    borderRadius: 22,
                    padding: "28px 20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                  <div
                    style={{
                      fontFamily: "'Bebas Neue',sans-serif",
                      fontSize: 40,
                      color: B.saffron,
                      letterSpacing: "1px",
                      lineHeight: 1,
                    }}
                  >
                    {s.v}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: B.textLow,
                      marginTop: 8,
                      fontWeight: 500,
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="g3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 18,
              }}
            >
              {[
                {
                  icon: "⚡",
                  t: "Same-Day Reply",
                  d: "Har query ka jawab ghanton mein — koi ghosting nahin, koi delay nahin.",
                },
                {
                  icon: "🔒",
                  t: "Data 100% Safe",
                  d: "Aapke documents sirf aapki application ke liye. DPDPA 2023 compliant. Kaam hone ke baad delete.",
                },
                {
                  icon: "✅",
                  t: "Govt Process Only",
                  d: "Sirf official govt procedures — koi shortcut nahin, koi fake receipt nahin.",
                },
                {
                  icon: "🏠",
                  t: "Ghar Baithe Help",
                  d: "Office nahi aa sakte? WhatsApp pe guidance milegi. Select areas mein doorstep pickup bhi.",
                },
                {
                  icon: "📊",
                  t: "98% Success Rate",
                  d: "Sahi documents + sahi process = rejection practically zero. Pehli baar mein kaam ban jata hai.",
                },
                {
                  icon: "💰",
                  t: "Clear Pricing",
                  d: "Koi hidden charge nahin. Pehle hi bata dete hain — govt fee + service fee, bas itna.",
                },
              ].map((w, i) => (
                <div
                  key={w.t}
                  className={`vu d${(i % 3) + 1} lift glass ${trustIn ? "in" : ""}`}
                  style={{ borderRadius: 22, padding: "26px 22px" }}
                >
                  <div style={{ fontSize: 30, marginBottom: 14 }}>{w.icon}</div>
                  <h4
                    style={{
                      fontWeight: 800,
                      fontSize: 15,
                      marginBottom: 10,
                      color: "#fff",
                    }}
                  >
                    {w.t}
                  </h4>
                  <p
                    style={{ fontSize: 13, color: B.textLow, lineHeight: 1.75 }}
                  >
                    {w.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA BANNER ══════════ */}
        <section
          aria-label="Contact us"
          style={{ padding: "0 max(16px,5%) 96px" }}
        >
          <div
            ref={ctaRef}
            className={`vu ${ctaIn ? "in" : ""}`}
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              background: `linear-gradient(135deg,rgba(255,107,26,0.18),rgba(255,61,0,0.1))`,
              border: `1px solid ${B.safBorder}`,
              borderRadius: 32,
              padding: "clamp(40px,6%,76px) clamp(20px,6%,76px)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `radial-gradient(circle at 20% 50%,rgba(255,107,26,0.14),transparent 50%), radial-gradient(circle at 80% 50%,rgba(255,61,0,0.1),transparent 50%)`,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "-3%",
                top: "50%",
                transform: "translateY(-50%)",
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "clamp(80px,14vw,200px)",
                color: "rgba(255,107,26,0.05)",
                lineHeight: 1,
                pointerEvents: "none",
              }}
            >
              IK
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  fontSize: 52,
                  marginBottom: 12,
                  animation: "floatUpB 4s ease-in-out infinite",
                }}
              >
                🚀
              </div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(2rem,5vw,3.8rem)",
                  letterSpacing: "2px",
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                ABHI CONTACT KARO
              </h2>
              <p
                style={{
                  color: B.textMid,
                  marginBottom: 44,
                  maxWidth: 520,
                  margin: "0 auto 44px",
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
              >
                Free consultation + document checklist — WhatsApp pe 5 minute
                mein. Dewas mein sabse fast service.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa"
                  style={{ fontSize: 16, padding: "16px 36px" }}
                >
                  💬 WhatsApp: +91 7000 839816
                </a>
                <a
                  href={`tel:${PH1}`}
                  className="btn-outline"
                  style={{ fontSize: 16, padding: "16px 36px" }}
                >
                  📞 Call Karo: +91 7000 839816
                </a>
              </div>
              <p style={{ marginTop: 20, color: B.textLow, fontSize: 13 }}>
                Ya phir:{" "}
                <a
                  href={`tel:${PH2}`}
                  style={{
                    color: B.saffron,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  +91 9827526564
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section
          id="faq"
          aria-label="FAQ"
          style={{ padding: "60px max(16px,5%) 100px" }}
        >
          <div ref={faqRef} style={{ maxWidth: 780, margin: "0 auto" }}>
            <div
              className={`vu ${faqIn ? "in" : ""}`}
              style={{ textAlign: "center", marginBottom: 48 }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: B.safDim,
                  border: `1px solid ${B.safBorder}`,
                  borderRadius: 100,
                  padding: "5px 18px",
                  fontSize: 12,
                  fontWeight: 800,
                  color: B.saffron,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Sawaal Jawab
              </span>
              <h2
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                  letterSpacing: "2px",
                  color: "#fff",
                }}
              >
                AAPKE <span style={{ color: B.saffron }}>SAWAAL</span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FAQS.map((f, i) => (
                <div
                  key={i}
                  className={`vu d${Math.min(i + 1, 6)} ${faqIn ? "in" : ""}`}
                  style={{
                    background:
                      openFaq === i ? B.safDim : "rgba(255,255,255,0.025)",
                    border:
                      openFaq === i
                        ? `1px solid ${B.safBorder}`
                        : `1px solid ${B.navyBorder}`,
                    borderRadius: 16,
                    overflow: "hidden",
                    transition: "all 0.3s",
                  }}
                >
                  <button
                    className="faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span
                      style={{
                        color: openFaq === i ? B.saffron : B.text,
                        transition: "color 0.2s",
                      }}
                    >
                      {f.q}
                    </span>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background:
                          openFaq === i ? B.safDim : "rgba(255,255,255,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: openFaq === i ? B.saffron : B.textLow,
                        fontSize: 20,
                        transition: "all 0.3s",
                        transform: openFaq === i ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div
                      style={{
                        padding: "0 24px 22px",
                        color: B.textMid,
                        fontSize: 14,
                        lineHeight: 1.85,
                        animation: "fadeIn 0.25s ease",
                      }}
                    >
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer
        role="contentinfo"
        style={{
          background: B.navyMid,
          borderTop: `1px solid ${B.navyBorder}`,
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "64px max(16px,5%) 44px",
          }}
        >
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1.6fr",
              gap: 40,
            }}
          >
            {/* Brand column */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 13,
                    background: `linear-gradient(135deg,${B.saffron},#FF3D00)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Bebas Neue',sans-serif",
                    color: "#fff",
                    fontSize: 20,
                    letterSpacing: 1,
                  }}
                >
                  IK
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Bebas Neue',sans-serif",
                      fontSize: 20,
                      letterSpacing: 1,
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    IQBAL KHAN
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: B.saffron,
                      fontWeight: 800,
                      letterSpacing: 2.5,
                      marginTop: 2,
                    }}
                  >
                    PASSPORT CONSULTANT
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: B.textLow,
                  lineHeight: 1.85,
                  marginBottom: 22,
                  maxWidth: 270,
                }}
              >
                Dewas ka sabse bharosemand passport, PAN card aur Driving
                Licence agent. 8+ saal, 12,000+ khush clients.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[
                  { href: WA, icon: "💬" },
                  { href: `tel:${PH1}`, icon: "📞" },
                  { href: `tel:${PH2}`, icon: "📱" },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${B.navyBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 17,
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = B.safDim;
                      e.currentTarget.style.borderColor = B.safBorder;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor = B.navyBorder;
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h5
                style={{
                  fontWeight: 800,
                  fontSize: 12,
                  color: B.textLow,
                  textTransform: "uppercase",
                  letterSpacing: 2.5,
                  marginBottom: 20,
                }}
              >
                Services
              </h5>
              <nav aria-label="Footer services">
                {[
                  "Passport — Fresh",
                  "Passport Renewal",
                  "Tatkal Passport",
                  "Minor Passport",
                  "PAN Card — New",
                  "PAN Correction",
                  "Driving Licence",
                  "DL Renewal",
                  "International DL",
                ].map((l) => (
                  <button
                    key={l}
                    onClick={() => go("#services")}
                    style={{
                      display: "block",
                      fontSize: 13,
                      color: B.textLow,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      marginBottom: 10,
                      padding: 0,
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      textAlign: "left",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = B.saffron)}
                    onMouseOut={(e) => (e.target.style.color = B.textLow)}
                  >
                    {l}
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick links */}
            <div>
              <h5
                style={{
                  fontWeight: 800,
                  fontSize: 12,
                  color: B.textLow,
                  textTransform: "uppercase",
                  letterSpacing: 2.5,
                  marginBottom: 20,
                }}
              >
                Quick Links
              </h5>
              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["How It Works", "#how"],
                ["Why Us", "#why"],
                ["FAQ", "#faq"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <button
                  key={l}
                  onClick={() => go(h)}
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: B.textLow,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginBottom: 10,
                    padding: 0,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    textAlign: "left",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = B.saffron)}
                  onMouseOut={(e) => (e.target.style.color = B.textLow)}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h5
                style={{
                  fontWeight: 800,
                  fontSize: 12,
                  color: B.textLow,
                  textTransform: "uppercase",
                  letterSpacing: 2.5,
                  marginBottom: 20,
                }}
              >
                Hamare Sampark
              </h5>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 16px",
                    background: B.greenDim,
                    border: "1px solid rgba(34,197,94,0.2)",
                    borderRadius: 12,
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                >
                  <span style={{ fontSize: 20 }}>💬</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: B.textLow,
                        marginBottom: 3,
                      }}
                    >
                      WhatsApp
                    </div>
                    <div
                      style={{ fontSize: 14, fontWeight: 800, color: B.green }}
                    >
                      +91 7000 839816
                    </div>
                  </div>
                </a>
                <a
                  href={`tel:${PH1}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 16px",
                    background: B.safDim,
                    border: `1px solid ${B.safBorder}`,
                    borderRadius: 12,
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                >
                  <span style={{ fontSize: 20 }}>📞</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: B.textLow,
                        marginBottom: 3,
                      }}
                    >
                      Call
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: B.saffron,
                      }}
                    >
                      +91 7000 839816
                    </div>
                  </div>
                </a>
                <a
                  href={`tel:${PH2}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${B.navyBorder}`,
                    borderRadius: 12,
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: 20 }}>📱</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: B.textLow,
                        marginBottom: 3,
                      }}
                    >
                      Alternate
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: B.textMid,
                      }}
                    >
                      +91 9827526564
                    </div>
                  </div>
                </a>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${B.navyBorder}`,
                    borderRadius: 12,
                  }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0 }}>📍</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: B.textLow,
                        marginBottom: 3,
                      }}
                    >
                      Office
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: B.textMid,
                        lineHeight: 1.7,
                      }}
                    >
                      Muskan Beauty Palace,
                      <br />
                      L-55 Supermarket, Dewas, MP
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${B.navyBorder}`,
                    borderRadius: 12,
                  }}
                >
                  <span style={{ fontSize: 18 }}>🕙</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: B.textLow,
                        marginBottom: 2,
                      }}
                    >
                      Timing
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: B.textMid,
                      }}
                    >
                      Mon–Sat: 9 AM – 8 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${B.navyBorder}`,
            padding: "20px max(16px,5%)",
          }}
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 13, color: B.textLow }}>
              © 2025 Iqbal Khan Passport Consultant, Dewas.
              <span style={{ color: "rgba(232,228,218,0.2)" }}>
                {" "}
                Govt ka official representative nahin hai.
              </span>
            </p>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              {["Privacy Policy", "Terms", "Sitemap"].map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    fontSize: 12,
                    color: B.textLow,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = B.saffron)}
                  onMouseOut={(e) => (e.target.style.color = B.textLow)}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════ FLOATING WA BUTTON ══════════ */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Iqbal Khan"
        style={{
          position: "fixed",
          bottom: 24,
          right: 20,
          zIndex: 600,
          width: 62,
          height: 62,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#25D366,#128C7E)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 30,
          boxShadow: "0 4px 28px rgba(37,211,102,0.6)",
          textDecoration: "none",
          transition: "transform 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 1C7.716 1 1 7.716 1 16c0 2.628.672 5.1 1.852 7.254L1 31l7.95-1.824A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1z"
            fill="#fff"
          />
          <path
            d="M23.2 20.4c-.32-.16-1.893-.934-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.214-.374.24-.694.08-.32-.16-1.35-.498-2.573-1.587-.95-.847-1.59-1.893-1.777-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.626-.526-.54-.72-.55l-.613-.01c-.213 0-.56.08-.854.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.827.763.33 1.36.526 1.823.673.767.24 1.466.207 2.02.127.616-.093 1.893-.774 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.134-.293-.214-.614-.374z"
            fill="#25D366"
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: -6,
            borderRadius: "50%",
            border: "2px solid rgba(37,211,102,0.55)",
            animation: "ring 2.4s ease-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: -14,
            borderRadius: "50%",
            border: "2px solid rgba(37,211,102,0.25)",
            animation: "ring 2.4s ease-out 0.7s infinite",
          }}
        />
      </a>
    </>
  );
}
