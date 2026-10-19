import { SITE } from "@/lib/site";

// Official profiles that belong to this business, for schema.org sameAs.
const profileLinks = () => [SITE.googleProfileUrl, SITE.facebookUrl].filter(Boolean);

// English/Hinglish page -> its Hindi (Devanagari) twin, used for hreflang.
export const HI_TWINS = {
  "/": "/hi/",
  "/passport-services-dewas/": "/hi/passport-services-dewas/",
  "/passport-services-dewas/court-case-passport/": "/hi/court-case-passport/",
  "/passport-services-dewas/lost-passport/": "/hi/lost-passport/",
};

export function languageAlternates(path) {
  const hiPath = HI_TWINS[path];
  if (hiPath) return { "en-IN": path, "hi-IN": hiPath, "x-default": path };
  const enPath = Object.keys(HI_TWINS).find((k) => HI_TWINS[k] === path);
  if (enPath) return { "en-IN": enPath, "hi-IN": path, "x-default": enPath };
  return undefined;
}

export function buildMetadata({ title, description, path, locale = "en_IN" }) {
  const languages = languageAlternates(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path, ...(languages && { languages }) },
    openGraph: {
      type: "website",
      locale,
      siteName: SITE.name,
      title,
      description,
      url: path,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function businessGraph() {
  const business = {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: ["IK Passport Services", "इक़बाल खान पासपोर्ट कंसल्टेंट", "Iqbal Khan Passport Consultant Dewas"],
    url: `${SITE.url}/`,
    logo: `${SITE.url}/android-chrome-512x512.png`,
    description:
      "Independent passport, PAN card and driving licence application assistance in Dewas, Madhya Pradesh.",
    telephone: SITE.phone.tel,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE.phone.tel,
        availableLanguage: ["English", "Hindi", "Hinglish"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Dewas" },
      { "@type": "AdministrativeArea", name: "Madhya Pradesh" },
    ],
    founder: { "@type": "Person", name: SITE.owner },
    knowsAbout: [
      "Passport application assistance",
      "PAN card assistance",
      "Driving licence assistance",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Document assistance services",
      itemListElement: [
        "Passport application assistance",
        "PAN card application and correction assistance",
        "Driving licence application assistance",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
    ...(profileLinks().length && { sameAs: profileLinks() }),
    ...(SITE.hoursSchema && {
      openingHoursSpecification: SITE.hoursSchema.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
    }),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      business,
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: SITE.name,
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE.url}/#business` },
      },
    ],
  };
}

export function pageMetadata(page) {
  const title = page.title.includes("Iqbal Khan") ? page.title : `${page.title} | Iqbal Khan`;
  return buildMetadata({ title, description: page.description, path: page.path });
}

export function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE.url}${t.path}`,
    })),
  };
}

export function serviceSchema(page) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: page.label,
    description: page.description,
    url: `${SITE.url}${page.path}`,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "City", name: "Dewas" },
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#iqbal-khan`,
    name: SITE.owner,
    alternateName: "इक़बाल खान",
    jobTitle: "Passport and document consultant",
    worksFor: { "@id": `${SITE.url}/#business` },
    url: `${SITE.url}/about/`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    knowsAbout: [
      "Passport application assistance",
      "Court case passport guidance",
      "Lost passport re-issue",
      "PAN card assistance",
      "Driving licence assistance",
    ],
    ...(profileLinks().length && { sameAs: profileLinks() }),
  };
}

export function articleSchema(guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.description,
    inLanguage: "en-IN",
    datePublished: SITE.contentReviewedISO,
    dateModified: SITE.contentReviewedISO,
    mainEntityOfPage: `${SITE.url}${guide.path}`,
    author: { "@id": `${SITE.url}/#iqbal-khan` },
    publisher: { "@id": `${SITE.url}/#business` },
  };
}
