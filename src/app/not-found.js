import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { CallButton, WhatsAppButton } from "@/components/Cta";
import Icon from "@/components/Icon";
import { SERVICES } from "@/lib/content";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="nf" aria-labelledby="nf-h">
      <span className="nf__ghost" aria-hidden="true">404</span>
      <div className="container nf__in">
        <div className="nf__card">
          <p className="nf__badge">
            <Search size={16} aria-hidden="true" />
            Page nahi mila
          </p>

          <h1 id="nf-h">
            Ye page kahin kho gaya,
            <span className="hl"> par aapka kaam nahi</span>
          </h1>

          <p className="nf__lead">
            Link purana ho sakta hai ya address mein typo ho sakta hai. Neeche se apni
            service chunein, ya seedha hum se baat karein.
          </p>

          <div className="hero__cta nf__cta">
            <WhatsAppButton location="404" className="btn btn--wa btn--lg">
              WhatsApp Karein
            </WhatsAppButton>
            <CallButton location="404" className="btn btn--ghost btn--lg">
              Call the Office
            </CallButton>
          </div>

          <div className="nf__links">
            {SERVICES.map((s) => (
              <Link key={s.id} href={s.path} className={`nf__link nf__link--${s.tone}`}>
                <span className="nf__ico">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="nf__txt">
                  <strong>{s.name}</strong>
                  <small lang="hi">{s.hindi}</small>
                </span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>

          <p className="nf__more">
            <Link href="/">Home page</Link>
            <Link href="/guides/">Guides</Link>
            <Link href="/about/">About Iqbal Khan</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/hi/" lang="hi">हिन्दी</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
