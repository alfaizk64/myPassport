import { SITE } from "@/lib/site";

export function buildMetadata({ title, description, path }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
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
    ...(SITE.googleProfileUrl && { sameAs: [SITE.googleProfileUrl] }),
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
