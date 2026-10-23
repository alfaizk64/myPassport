// Single source of truth for business facts. Anything set to null is
// unconfirmed and is simply not shown on the site (SRS §15, §24).

export const SITE = {
  name: "Iqbal Khan Passport Consultant",
  shortName: "IK Passport",
  owner: "Iqbal Khan",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://my-passport-delta.vercel.app"
  ).replace(/\/$/, ""),
  gaId: "G-2TWVEG42FE", // Google Analytics 4 measurement ID
  bingVerification: "A851564D25A55E8AABC55810BFE7A8B3",
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
    line1: "Front of Rajiv Gandhi Statue, L-55, Super Market, Old Town, Gomti Nagar",
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
  // Real figures from the owner's Google Business Profile (checked 2026-10-23).
  googleRating: { value: "5.0", count: 15 },
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
    { name: "Century Snooker Academy Dewas", badge: "Local Guide", rating: 5, text: "Great experience, fastest work!" },
    {
      name: "Aman Shaikh",
      rating: 5,
      text: "Iqbal Khan Passport Consultant, Dewas – Excellent Service & Support!\n\nMera Iqbal Khan bhai ke saath passport banwane ka experience bahut hi achha raha. Documents ki taiyari se lekar appointment booking aur passport office verification tak, unhone har step par proper guidance aur full support diya. Unki sabse achhi baat yeh hai ki woh har process ko itni aasani aur detail mein samjhate hain ki kisi bhi tarah ki confusion nahi hoti.\n\nUnka behaviour bhi bahut friendly aur professional hai. Har doubt ka patiently jawab dete hain, sahi information dena aur poore process mein saath dena unki service ko aur bhi behtar banata hai. Unke knowledge aur experience ki wajah se passport banwane ka poora process mere liye kaafi easy aur tension-free raha.\n\nAgar aap Dewas mein passport banwana chahte hain aur ek reliable consultant ki talash mein hain, toh main Iqbal Khan Bhai ko personally recommend karunga. Yahan aapko sirf guidance hi nahi, balki har step par achha support bhi milta hai.\n\nThank you, Iqbal Khan Bhai, itni achhi service, cooperation aur support ke liye! 🙏🏼\n\nHighly Recommended for Passport Consultancy in Dewas!",
    },
    {
      name: "Rajveer Tomar",
      rating: 5,
      text: "Dewas mein passport banwane ke liye Iqbal Khan Passport Consultant bahut hi achhe aur trustworthy consultant hain! Inka service dene ka tarika bahut professional aur supportive hai. Passport banwane ke har step mein proper guidance dete hain, chahe document verification ho, application submission, appointment booking ya passport office ki formalities.\n\nMujhe inki sabse achhi baat yeh lagi ki yeh har cheez clearly samjhate hain aur kisi bhi doubt ya query ke liye achhe se guide karte hain. Inka experience aur knowledge passport banwane ke poore process ko kaafi easy aur hassle-free bana deta hai, especially un logon ke liye jo pehli baar passport banwa rahe hain ya apni family ke liye apply kar rahe hain.\n\nAgar aap Dewas mein passport banwana chahte hain aur ek reliable, experienced aur trustworthy consultant ki talash mein hain, toh Iqbal Khan Passport Consultant definitely ek achha option hai. Inki service se bahut satisfaction mila. Highly recommended! 🙏🙏",
    },
    {
      name: "Rehan Shaikh",
      rating: 5,
      text: "Mera Iqbal Khan Passport Consultant, Dewas ke saath experience bahut achha raha. Passport banwane ke liye documents collect karne se lekar unki preparation, appointment aur passport office verification tak, unhone har step par achhe se guide kiya. Sab kuch unhone itne achhe se samjhaya ki mujhe kahin bhi koi confusion nahi hoti.\n\nInka baat karne ka tarika bhi bahut achha hai aur jab bhi koi doubt hota tha, toh ve properly samjhate the aur help karte the. Inki knowledge aur experience ki wajah se poora process kaafi easy aur tension-free raha.\n\nAgar aap bhi Dewas mein passport banwana chahte hain, toh ek baar Iqbal Khan se zaroor contact karein. Main personally inki service recommend karunga. Bahut achhi service aur support ke liye thank you, Iqbal bhai! 🙏🙏",
    },
    {
      name: "Ujjawal Ujjawal",
      rating: 5,
      text: "इकबाल खान पासपोर्ट कंसल्टेंट से मेरा अनुभव बहुत अच्छा रहा। इन्होंने पासपोर्ट से जुड़े काम में काफी मदद की और पूरी प्रक्रिया को आसान बना दिया। इनका व्यवहार भी बहुत अच्छा है और इन्होंने हर बात अच्छे से समझाई। पासपोर्ट से संबंधित किसी भी काम के लिए मैं इन्हें जरूर recommend करूँगा। 😊",
    },
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
