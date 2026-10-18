import QRCode from "qrcode";
import { ExternalLink } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Motion";
import TrackedLink from "@/components/TrackedLink";
import { SITE } from "@/lib/site";

export default async function ReviewCta() {
  if (!SITE.googleReviewUrl) return null;

  const svg = await QRCode.toString(SITE.googleReviewUrl, {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#172B4D", light: "#FFFFFF" },
  });

  return (
    <section className="section section--tight has-bg" data-bg="समीक्षा" aria-labelledby="rv-h">
      <div className="container">
        <Reveal className="rv">
          <div className="rv__copy">
            <p className="eyebrow">Google review</p>
            <SectionTitle id="rv-h" text="Aapka ek review, kisi aur ka bharosa" />
            <p>
              Agar hamari madad se aapka kaam aasaan hua, to Google par apna sachcha
              experience likhiye. 30 second lagte hain aur dusre applicants ko sahi faisla
              lene mein madad milti hai.
            </p>
            <div className="hero__cta">
              <TrackedLink
                href={SITE.googleReviewUrl}
                external
                event="review_click"
                params={{ cta_location: "review-section" }}
                className="btn btn--saffron btn--lg"
              >
                Google par review likhein
                <ExternalLink size={18} aria-hidden="true" />
              </TrackedLink>
              {SITE.googleProfileUrl && (
                <TrackedLink
                  href={SITE.googleProfileUrl}
                  external
                  event="directions_click"
                  params={{ cta_location: "review-section-listing" }}
                  className="btn btn--ghost-light btn--lg"
                >
                  Hamari Google listing
                </TrackedLink>
              )}
            </div>
          </div>

          <figure className="rv__qr">
            <div
              role="img"
              aria-label="QR code jo Google review form kholta hai"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
            <figcaption>
              Phone camera se scan karein
              <small>aur seedha review likhein</small>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
