export const metadata = {
  metadataBase: new URL("https://my-passport-delta.vercel.app"),
  title: {
    default:
      "Iqbal Khan — Passport, PAN Card & DL Consultant Dewas | इक़बाल खान",
    template: "%s | Iqbal Khan Passport Consultant Dewas",
  },
  verification: {
    google: "u0KGSVnKAEW7gyRvCt_pgQ6k6i7chWW3ab6JuXnvE-U",
  },
  description:
    "Dewas ka sabse trusted passport, PAN card aur Driving Licence agent — Iqbal Khan. 8+ saal ka experience, 12,000+ successful cases. Tatkal available. Call +91 7000 839816.",
  keywords: [
    "passport agent Dewas",
    "passport consultant Dewas",
    "PAN card Dewas",
    "driving licence Dewas",
    "passport renewal Dewas",
    "Tatkal passport Dewas",
    "इक़बाल खान पासपोर्ट देवास",
    "passport seva Dewas",
    "document agent Dewas MP",
    "passport agent near me Dewas",
    "PAN card agent Dewas",
    "DL renewal Dewas",
    "passport consultant Madhya Pradesh",
    "Iqbal Khan passport Dewas",
    "L-55 supermarket Dewas passport",
    "7000839816 passport",
    "9827526564 passport Dewas",
  ],
  authors: [
    { name: "Iqbal Khan", url: "https://my-passport-delta.vercel.app" },
  ],
  creator: "Iqbal Khan Passport Consultant",
  publisher: "Iqbal Khan",
  alternates: {
    canonical: "https://my-passport-delta.vercel.app",
    languages: {
      "en-IN": "https://my-passport-delta.vercel.app",
      "hi-IN": "https://my-passport-delta.vercel.app/hi",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://my-passport-delta.vercel.app",
    siteName: "Iqbal Khan — Passport Consultant Dewas",
    title: "Iqbal Khan — Passport, PAN Card & Driving Licence Expert | Dewas",
    description:
      "Dewas ka no.1 passport consultant. Passport, PAN Card, Driving Licence — same-day response, Tatkal available. 12,000+ happy clients. Call now!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iqbal Khan — Passport PAN Driving Licence Consultant Dewas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqbal Khan — Passport Consultant Dewas | PAN Card | DL",
    description:
      "Trusted passport, PAN card & DL services in Dewas, MP. Tatkal available. +91 7000 839816",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "local business",
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Dewas",
    "geo.position": "22.9623;76.0490",
    ICBM: "22.9623, 76.0490",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://my-passport-delta.vercel.app/#business",
      name: "Iqbal Khan — Passport Consultant",
      alternateName: "IK Passport Services",
      description:
        "Professional passport, PAN card and driving licence consultant in Dewas, Madhya Pradesh.",
      url: "https://my-passport-delta.vercel.app",
      telephone: ["+917000839816", "+919827526564"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Muskan Beauty Palace, L-55 Supermarket",
        addressLocality: "Dewas",
        addressRegion: "Madhya Pradesh",
        postalCode: "455001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.9623",
        longitude: "76.0490",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "12000",
        bestRating: "5",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      priceRange: "₹₹",
      image: "https://my-passport-delta.vercel.app/og-image.png",
      founder: {
        "@type": "Person",
        name: "Iqbal Khan",
        jobTitle: "Passport Consultant",
      },
      areaServed: {
        "@type": "City",
        name: "Dewas",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Document Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Passport Application" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "PAN Card" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Driving Licence" },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Dewas mein passport banwane mein kitna time lagta hai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Normal passport 15–21 working days. Tatkal 1–3 working days. Iqbal Khan complete appointment booking aur document submission handle karte hain.",
          },
        },
        {
          "@type": "Question",
          name: "Iqbal Khan ka office Dewas mein kahan hai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Muskan Beauty Palace, L-55 Supermarket, Dewas, Madhya Pradesh. Contact: +91 7000 839816.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#0A0A0F" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Bebas+Neue&family=Fira+Code:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0A0A0F" }}>
        {children}
      </body>
    </html>
  );
}
