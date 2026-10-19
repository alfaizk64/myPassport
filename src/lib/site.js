// Single source of truth for business facts. Anything set to null is
// unconfirmed and is simply not shown on the site (SRS §15, §24).

export const SITE = {
  name: "Iqbal Khan Passport Consultant",
  shortName: "IK Passport",
  owner: "Iqbal Khan",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://my-passport-delta.vercel.app"
  ).replace(/\/$/, ""),
  googleVerification: "u0KGSVnKAEW7gyRvCt_pgQ6k6i7chWW3ab6JuXnvE-U",

  phone: {
    display: "+91 7000 839816",
    tel: "+917000839816",
    wa: "917000839816",
  },
  alternatePhone: {
    display: "+91 9827526564",
    tel: "+919827526564",
  },

  address: {
    line1: "Muskan Beauty Palace, L-55 Supermarket",
    city: "Dewas",
    region: "Madhya Pradesh",
    postalCode: "455001",
    country: "IN",
  },
  // Exact pin from the business listing shared by the owner.
  geo: { lat: "22.9641865", lng: "76.0579748" },

  // Confirmed correct by the owner on 2026-10-18 (hours and starting prices).
  hours: "Monday to Saturday, 9:00 AM to 8:00 PM",
  hoursSchema: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],

  // Hidden until the owner can back them with records or the live profile.
  // Previous site claimed: 8+ years, 12K+ clients, 98% success, 4.9 stars.
  // Set any of these to show it in the trust strip. Ratings are not put in schema: Google ignores a business rating about itself.
  experienceSince: null, // e.g. 2018 -> "8+ years of experience"
  clientsServed: null, // e.g. "12,000+"
  logo: "/PassportLogo.webp",
  googleReviewUrl: "https://g.page/r/CVx-uy-uA4giEAI/review", // opens the Google review form
  googleProfileUrl: "https://maps.app.goo.gl/AXPC2pmdq7R2MDmX7", // Google Maps listing shared by the owner
  facebookUrl: "https://www.facebook.com/profile.php?id=61588720019452",
  googleRating: null, // e.g. { value: 4.9, count: 120 } from the real profile
  // Exact pin: in Google Maps open the business > Share > Embed a map > copy the src="..." URL here.
  mapEmbedUrl: null,
  photos: { consultant: "/iqbalKhanAboutSection.webp", office: null }, // e.g. "/images/iqbal-khan.jpg"
  // Real public Google reviews, copied word for word from the owner's listing (2026-10-18).
  reviews: [
    {
      name: "Mustakim Shaikh",
      badge: "Local Guide",
      rating: 5,
      featured: true,
      text: "Very good services, he helped me with end to end process from document collecting to passport office verifications for my entire family. Even his knowledge and expertise helped me get passport of my 4 years son in single attempt within a week.\nHighly Recommended 👍👍",
    },
    {
      name: "Yash Dubey",
      rating: 5,
      text: "I had a great experience with Iqbal Khan Passport Consultant. The entire passport process was handled smoothly and professionally. They guided me at every step, from documentation to final submission, making everything stress-free.\n\nTheir communication was clear, and they were always available to answer my questions. The work was completed within the promised time without any hassle.\n\nHighly recommended for anyone looking for reliable and efficient passport consultancy services.",
    },
    {
      name: "Mohammed Anas Khan",
      rating: 5,
      text: "Excellent service and a great experience! Iqbal Khan Passport Consultant provides fast, reliable, and professional service. They guide you through the entire passport process, from document preparation to submission, and explain everything clearly. The staff is helpful, supportive, and responsive to all queries. The process was smooth and hassle-free.\n\nHighly recommended for anyone looking for trustworthy passport consultancy services in Dewas. Thank you for the excellent service!",
    },
    {
      name: "Arpit Sharma",
      rating: 5,
      text: "Great consulting service 👍\nProfessional and reliable\nHelpful and knowledgeable\nExcellent guidance provided\nQuick and efficient support",
    },
    { name: "Hasim Shaikh", rating: 5, text: "Kaam kafi acha hai kafi fast hai" },
    { name: "Sameer Shaikh", rating: 5, text: "Good service, cant complain." },
    { name: "Irshad Shaikh", rating: 5, text: "Excellent work" },
    { name: "Rajveer Singh", rating: 5, text: "provide proper guidance and have a experties" },
    { name: "Kunal Choudhary", rating: 5, text: "good experience nice work.👍👍" },
  ],

  contentReviewed: "17 October 2026",
  contentReviewedISO: "2026-10-17",
};

export const ADDRESS_ONE_LINE = `${SITE.address.line1}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`;

export const DEFAULT_WA_MESSAGE =
  "Hello, I need guidance with a document application in Dewas.";

export function waLink(message = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${SITE.phone.wa}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${SITE.phone.tel}`;

export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${SITE.geo.lat},${SITE.geo.lng}`;

export const mapEmbedSrc =
  SITE.mapEmbedUrl ||
  `https://www.google.com/maps?q=${encodeURIComponent(SITE.name)}&ll=${SITE.geo.lat},${SITE.geo.lng}&z=17&output=embed`;

export const DISCLAIMER =
  "Iqbal Khan Passport Consultant provides independent document and application assistance. The business is not a government department or official government website. Final eligibility, approval, appointments and processing times are determined by the relevant authorities.";
