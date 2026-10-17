import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/Cta";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="nf">
      <div className="container">
        <div className="nf__in">
          <span className="nf__code" aria-hidden="true">404</span>
          <h1>This page could not be found</h1>
          <p>
            The link may be old or mistyped. You can head back to the home page or
            contact the office directly.
          </p>
          <div className="hero__cta" style={{ justifyContent: "center" }}>
            <Link href="/" className="btn btn--navy btn--lg">
              Go to the home page
            </Link>
            <WhatsAppButton location="404" className="btn btn--wa btn--lg">
              WhatsApp Us
            </WhatsAppButton>
            <CallButton location="404" className="btn btn--ghost btn--lg">
              Call the Office
            </CallButton>
          </div>
        </div>
      </div>
    </section>
  );
}
