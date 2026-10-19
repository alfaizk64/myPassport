import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { FOOTER_SERVICE_LINKS, NAV } from "@/lib/content";
import { ADDRESS_ONE_LINE, DISCLAIMER, SITE, telLink, waLink } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr__grid">
          <div>
            <Link href="/" className="brand brand--chip" aria-label="Iqbal Khan Passport Consultant, home">
              <Image
                src={SITE.logo}
                alt="Iqbal Khan Passport Consultant, Dewas"
                width={1978}
                height={638}
                sizes="230px"
                className="brand__logo"
              />
            </Link>
            <p>
              Independent passport, PAN card and driving licence assistance in Dewas,
              Madhya Pradesh.
            </p>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {FOOTER_SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Explore</h3>
            <ul>
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link href={`/${n.href}`}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/guides/">Guides</Link>
              </li>
              <li>
                <Link href="/about/">About Iqbal Khan</Link>
              </li>
              <li>
                <Link href="/hi/" lang="hi">हिन्दी में पढ़ें</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <address>
              {ADDRESS_ONE_LINE}
              <br />
              <TrackedLink href={telLink} event="phone_click" params={{ cta_location: "footer" }}>
                {SITE.phone.display}
              </TrackedLink>
              <br />
              <TrackedLink
                href={`tel:${SITE.alternatePhone.tel}`}
                event="phone_click"
                params={{ cta_location: "footer-alt" }}
              >
                {SITE.alternatePhone.display}
              </TrackedLink>
              <br />
              <TrackedLink
                href={waLink()}
                external
                event="whatsapp_click"
                params={{ cta_location: "footer" }}
              >
                Message on WhatsApp
              </TrackedLink>
              {SITE.googleReviewUrl && (
                <>
                  <br />
                  <TrackedLink
                    href={SITE.googleReviewUrl}
                    external
                    event="review_click"
                    params={{ cta_location: "footer" }}
                  >
                    Google par review dein
                  </TrackedLink>
                </>
              )}
              {SITE.hours && (
                <>
                  <br />
                  {SITE.hours}
                </>
              )}
            </address>
          </div>
        </div>

        <div className="ftr__disclaimer">
          <p>{DISCLAIMER}</p>
          <div className="ftr__bottom">
            <span>
              &copy; {year} {SITE.name}, Dewas
            </span>
            <nav aria-label="Legal">
              <Link href="/privacy-policy/">Privacy Policy</Link>
              <Link href="/terms/">Terms and Disclaimer</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
