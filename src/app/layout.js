import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import MobileContactBar from "@/components/MobileContactBar";
import { MotionProvider, ScrollProgress } from "@/components/Motion";
import { BODY_SCRIPT } from "@/components/SiteScripts";
import { businessGraph } from "@/lib/seo";
import { SITE } from "@/lib/site";

// Self-hosted (files vendored in src/fonts/) so `next build` never depends on
// reaching fonts.googleapis.com/fonts.gstatic.com. Both are the same variable
// fonts next/font/google previously fetched at build time (latin / devanagari
// subsets, regular style, weights 200-800 / 100-900 in one file each).
const sans = localFont({
  src: "../fonts/PlusJakartaSans-latin.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-sans",
});
const hindi = localFont({
  src: "../fonts/NotoSansDevanagari-devanagari.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  preload: false,
  variable: "--font-hi",
});

const TITLE = "Passport Consultant in Dewas | Passport, PAN, DL | Iqbal Khan";
const DESCRIPTION =
  "Dewas mein passport, PAN card aur driving licence banwana hai? Iqbal Khan se document guidance, form filling aur appointment help lein. Call ya WhatsApp karein.";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | Iqbal Khan",
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "passport consultant Dewas",
    "passport agent Dewas",
    "PAN card Dewas",
    "driving licence Dewas",
    "passport renewal Dewas",
    "Tatkal passport Dewas",
    "इक़बाल खान पासपोर्ट देवास",
    "passport seva Dewas",
    "document agent Dewas MP",
    "PAN card agent Dewas",
    "DL renewal Dewas",
    "passport consultant Madhya Pradesh",
    "Iqbal Khan passport Dewas",
    "L-55 supermarket Dewas passport",
    "passport kaise banaye Dewas",
    "passport banwane ka tarika",
    "tatkal passport kitne din mein",
    "PAN card correction kaise kare",
    "driving licence kaise banwaye",
    "learner licence Dewas",
    "court case passport Dewas",
    "court case passport specialist",
    "passport with pending case",
    "lost passport Dewas",
    "passport kho gaya kya karein",
    "देवास पासपोर्ट एजेंट",
    "देवास पैन कार्ड",
    "देवास ड्राइविंग लाइसेंस",
  ],
  authors: [{ name: SITE.owner, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.owner,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
  verification: {
    google: SITE.googleVerification,
    other: { "msvalidate.01": SITE.bingVerification },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  formatDetection: { telephone: false },
  category: "local business",
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Dewas",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#172B4D",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || SITE.gaId;

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${hindi.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://scripts.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        {SITE.clarityId && (
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${SITE.clarityId}");`}
          </Script>
        )}
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileContactBar />
          <FloatingWhatsApp />
        </MotionProvider>
        <JsonLd data={businessGraph()} />
        <script dangerouslySetInnerHTML={{ __html: BODY_SCRIPT }} />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
