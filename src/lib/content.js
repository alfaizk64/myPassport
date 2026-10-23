// Visitor-facing copy. Voice: friendly Hinglish (Hindi + English) like the
// original site, with official-process caveats so nothing reads as a guarantee.
// Service lists, starting prices and typical timelines are carried over.

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const HERO_POINTS = [
  { icon: "MapPin", text: "Dewas mein local office, seedha milke help" },
  { icon: "Scale", text: "Clear fees: government fee aur service charge alag batate hain" },
  { icon: "ClipboardCheck", text: "Document checklist aur form filling mein poora saath" },
];

export const SERVICES = [
  {
    id: "passport",
    path: "/passport-services-dewas/",
    name: "Passport Services",
    hindi: "पासपोर्ट सहायता",
    badge: "Most requested",
    icon: "Plane",
    tone: "navy",
    summary:
      "Fresh application se renewal tak, lost se re-issue tak. Court case passport mein specialist. Appointment booking aur Tatkal guidance bhi.",
    items: [
      { title: "Fresh application", text: "Pehli baar passport banwana hai? Sahi type, document check aur form filling mein madad." },
      { title: "Renewal and re-issue", text: "Expire hone wala, expire ho chuka, kho gaya ya kharab passport, aur details change karwane ke liye." },
      { title: "Tatkal / emergency", text: "Aap eligible hain ya nahi, kaun se extra documents lagenge aur appointment kaise milta hai." },
      { title: "Minor passport", text: "18 saal se kam ke liye documents, parents ki consent aur poora process." },
      { title: "Lost passport", text: "Passport kho gaya, chori hua ya kharab hua: report, documents aur re-issue application." },
      { title: "Court case passport (specialist)", text: "Pending court case ke saath passport: court order, documents aur application, hamari specialty." },
      { title: "Appointment booking", text: "Slot chunna aur verification, photo aur biometrics ki taiyari." },
      { title: "Status tracking", text: "Application kahan tak pahunchi, aur har stage par aapko kya karna hai." },
    ],
    docs: [
      "Proof of address",
      "Proof of date of birth",
      "Photo ID such as Aadhaar",
      "Education certificate, where applicable",
      "Old passport, for renewal",
      "Parents' details and consent, for minors",
    ],
    price: "Charges vary by case",
    timeline: { normal: "Depends on your case and passport authorities", fast: "Tatkaal eligibility and processing depend on official rules" },
    inPerson:
      "Aapko Passport Seva Kendra ke appointment par documents verification, photo aur biometrics ke liye khud jaana hota hai. Hum aapko taiyar karte hain, par aapki jagah koi aur nahi ja sakta.",
    official: {
      label: "Official Passport Seva portal",
      href: "https://www.passportindia.gov.in",
    },
    waMessage: "Hello, I need guidance with a passport application in Dewas.",
    cta: "WhatsApp about a passport",
  },
  {
    id: "pan-card",
    path: "/pan-card-services-dewas/",
    name: "PAN Card Services",
    hindi: "पैन कार्ड सहायता",
    badge: "e-PAN instant",
    icon: "IdCard",
    tone: "saffron",
    summary:
      "Naya PAN, correction, e-PAN aur duplicate card, official NSDL aur UTIITSL channels se bina confusion ke.",
    items: [
      { title: "New PAN", text: "Sahi application route aur kaun si details aur documents lagenge, iski guidance." },
      { title: "Name / DOB correction", text: "Name, date of birth, father ka naam, address, photo ya signature, supporting documents ke saath sahi karwana." },
      { title: "Lost / duplicate", text: "Kho gaye PAN ka reprint, bina naya number liye." },
      { title: "e-PAN same day", text: "Instant electronic PAN aapko mil sakta hai ya nahi, aur use download kaise karein." },
      { title: "Minor to adult", text: "Bachche ke 18 saal ke hone par PAN details update karna." },
      { title: "Business PAN", text: "Firm, company aur dusre business ke liye PAN." },
    ],
    docs: [
      "Proof of identity",
      "Proof of address",
      "Proof of date of birth",
      "Photograph and signature, for a physical card",
      "Aadhaar-linked mobile number, for instant e-PAN",
      "Documents supporting the correction",
    ],
    price: "Starting ₹299",
    timeline: { normal: "3–7 days", fast: "e-PAN: same-day availability depends on eligibility and the applicable process" },
    inPerson:
      "Zyada tar steps online hote hain. Kuch cases mein signed form ya documents post se bhejne padte hain, ye hum shuru mein hi bata dete hain.",
    official: {
      label: "Official Income Tax portal",
      href: "https://www.incometax.gov.in",
    },
    waMessage: "Hello, I need guidance with a PAN card application in Dewas.",
    cta: "WhatsApp about PAN",
  },
  {
    id: "driving-licence",
    path: "/driving-licence-services-dewas/",
    name: "Driving Licence Services",
    hindi: "ड्राइविंग लाइसेंस सहायता",
    badge: "RTO support",
    icon: "Car",
    tone: "green",
    summary:
      "Learner's se permanent licence tak, renewal aur international permit. Documents pehle se ready, taaki RTO visit chhota rahe.",
    items: [
      { title: "Learner's licence", text: "Vehicle category ke hisaab se eligibility, documents, online application aur test ki taiyari." },
      { title: "Permanent DL", text: "Learner's se permanent licence aur driving test ka slot book karna." },
      { title: "DL renewal", text: "Expiry se pehle ya baad mein renew karna, aur grace period nikal jaye to kya hoga." },
      { title: "International DL", text: "International driving permit ke liye apply kaise karein." },
      { title: "Address change", text: "Licence par address aur dusri details update karwana." },
      { title: "Lost / duplicate DL", text: "Licence kho gaya ya kharab ho gaya to duplicate ke liye apply karna." },
    ],
    docs: [
      "Proof of age",
      "Proof of address",
      "Passport-size photographs",
      "Medical declaration, where required",
      "Learner's licence, for the permanent licence",
      "Existing licence, for renewal or duplicate",
    ],
    price: "Starting ₹3500",
    timeline: { normal: "15–30 days", fast: "Appointment slot guidance, subject to availability" },
    inPerson:
      "Biometrics aur driving test RTO ya authorised centre par khud jaakar dene hote hain. Documents pehle se ready hon to visit aam taur par chhota rehta hai.",
    official: {
      label: "Official Parivahan Sarathi portal",
      href: "https://sarathi.parivahan.gov.in",
    },
    waMessage: "Hello, I need guidance with a driving licence in Dewas.",
    cta: "WhatsApp about a licence",
  },
];

export const STEPS = [
  {
    title: "Call ya WhatsApp karein",
    text: "Batayein kaunsi service chahiye aur situation kya hai. Hum aapke case ki document checklist bhej denge. Pehle message mein ID documents mat bhejiye.",
    who: "Aap",
    lead: "Kaam tabhi smooth hota hai jab details sahi hon aur jahan zaroori ho aap khud maujood hon.",
    icon: "MessageCircle",
  },
  {
    title: "Documents share karein, hum verify karte hain",
    text: "Jo documents maange gaye hain wo WhatsApp par bhejein ya office aayein. Hum check karke application ready karte hain.",
    who: "Hamara office",
    lead: "Hum aapki taiyari sambhalte hain: sahi route, checklist, form aur appointment.",
    icon: "FileCheck",
  },
  {
    title: "Application aur appointment",
    text: "Hum application submit karne aur appointment ya test ki taiyari mein madad karte hain. Aapko tracking ID milta hai.",
    who: "Saath mein",
    icon: "ListChecks",
  },
  {
    title: "Official process, document ready",
    text: "Jo steps mein aapki presence zaroori hai wo aap complete karte hain, status par hum guide karte hain. Office se collect karein ya doorstep delivery chunein.",
    who: "Govt authority",
    icon: "Landmark",
  },
];

export const RESPONSIBILITIES = [
  {
    who: "Aap",
    icon: "UserRound",
    points: [
      "Sahi details aur genuine documents dena",
      "Appointment, test aur biometrics ke liye khud aana",
      "Official fees official portal par bharna",
      "Submit se pehle sab kuch ek baar check karna",
    ],
  },
  {
    who: "Hamara office",
    icon: "Handshake",
    points: [
      "Aapke case ka sahi route samjhana",
      "Tailored document checklist dena",
      "Form bharne mein help aur mismatch check karna",
      "Status aur next steps par guide karna",
    ],
  },
  {
    who: "Authority",
    lead: "Final faisla, fees aur timing sirf authority ke haath mein hota hai.",
    icon: "Landmark",
    points: [
      "Documents verify karti hai",
      "Approval aur issue ka faisla karti hai",
      "Official fees aur rules tay karti hai",
      "Appointment aur processing time control karti hai",
    ],
  },
];

const startingPrice = (id) =>
  SERVICES.find((s) => s.id === id).price.replace("Starting ", "");

export const FAQS = [
  {
    q: "Passport banwane mein kitna time lagta hai Dewas mein?",
    a: "Timeline aapke case, appointment availability aur passport authorities par depend karta hai, Tatkaal mein bhi eligibility aur processing official rules se tay hoti hai. Ye kisi bhi tarah ki guarantee nahi hai. Appointment, verification aur delivery passport authority ke control mein hai. Appointment booking se lekar submission tak hum guide karte hain.",
  },
  {
    q: "Iqbal Khan ka office kahan hai?",
    a: "Muskan Beauty Palace, L-55 Supermarket, Dewas, Madhya Pradesh. Phone: +91 7000 839816 ya +91 9827526564, ya seedha WhatsApp karein.",
  },
  {
    q: "Court case chal raha hai to kya passport ban sakta hai?",
    a: "Aam taur par haan, lekin court ki permission ke saath. Court case wale passport hamari specialty hai: hum aapke vakeel ke saath milkar documents, court order ka sahi use aur application sambhalte hain. Hum vakeel nahi hain, aur final faisla court aur passport authority ka hota hai.",
  },
  {
    q: "Passport kho gaya to kya karein?",
    a: "Sabse pehle police ko report karein aur copy rakhein. Phir hum batate hain ki re-issue application aur documents kaise taiyar karne hain. Lost passport ki official fee alag hoti hai aur authority tay karti hai.",
  },
  {
    q: "PAN card mein galti hai, kya ho sakta hai?",
    a: "Bilkul, correction ho sakta hai. Name, DOB, address ya photo, sab sahi karwa sakte hain, bas supporting documents chahiye. PAN number wahi rehta hai. Aap bataiye kya galat hai, hum batayenge Aadhaar aur purane PAN ke saath aur kya lagega.",
  },
  {
    q: "Driving Licence ke liye RTO jaana padega?",
    a: "Biometrics aur driving test ke liye ek visit zaroori hai. Documents pehle se ready hon to RTO mein aam taur par 30–45 minute lagte hain. Baaki process online hota hai aur hum batate hain aapke licence ke liye kaunse steps lagte hain.",
  },
  {
    q: "Kya mera data safe rehta hai?",
    a: "Aapke documents sirf aapki application ke liye use hote hain, access sirf office ke logon tak limited hai aur kaam hone ke baad copies delete kar di jaati hain. Details ke liye privacy policy padhein.",
  },
  {
    q: "Dewas ke bahar bhi help milegi?",
    a: "Haan. Poore Madhya Pradesh mein WhatsApp aur phone par guidance dete hain. Jin steps mein aapka khud jaana zaroori hai, jaise biometrics ya driving test, wo official centre par karne honge.",
  },
  {
    q: "Kya aap government office ya official website hain?",
    a: "Nahi. Hum ek independent consultancy hain jo aapko application taiyar karne aur submit karne mein madad karti hai. Passport, PAN card aur driving licence sirf sarkari authority jaari karti hai aur official application official portal par hi hoti hai.",
  },
  {
    q: "Kya approval ya delivery date ki guarantee milti hai?",
    a: "Nahi. Eligibility, approval, appointment aur processing time authority tay karti hai. Hum application sahi tarah se karwate hain taaki chhoti galtiyon se der na ho, par result ya date ka vaada nahi kar sakte.",
  },
  {
    q: "Aapki fees kitni hai?",
    a: `Hamara Passport consultancy charge case ke hisaab se alag hota hai. PAN card ke liye ${startingPrice("pan-card")} aur Driving Licence ke liye ${startingPrice("driving-licence")} se shuru hoti hai. Exact amount aapke case par depend karta hai aur kaam shuru karne se pehle WhatsApp par confirm hota hai. Government fees authority tay karti hai.`,
  },
  {
    q: "Pehle kaun se documents bhejne hain?",
    a: "Pehle koi document nahi. Bas batayein kaunsi service chahiye aur situation kya hai. Hum bata denge kaunse documents lagenge aur kaise share karne hain, taaki aapko ID documents bekar mein na bhejne pade.",
  },
];

export const FOOTER_SERVICE_LINKS = [
  { label: "Court case passport (specialist)", href: "/passport-services-dewas/court-case-passport/" },
  { label: "Lost passport help", href: "/passport-services-dewas/lost-passport/" },
  { label: "Fresh passport", href: "/passport-services-dewas/fresh-passport/" },
  { label: "Passport renewal and re-issue", href: "/passport-services-dewas/renewal-reissue/" },
  { label: "Tatkal passport guidance", href: "/passport-services-dewas/tatkal/" },
  { label: "Minor passport", href: "/passport-services-dewas/minor-passport/" },
  { label: "New PAN card and e-PAN", href: "/pan-card-services-dewas/" },
  { label: "PAN card correction", href: "/pan-card-services-dewas/correction/" },
  { label: "Learner's licence", href: "/driving-licence-services-dewas/learners-licence/" },
  { label: "DL renewal and duplicate", href: "/driving-licence-services-dewas/renewal-duplicate/" },
];
