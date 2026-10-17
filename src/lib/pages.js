// Content for the dedicated service pages (SRS §7 and §9).
// Written as general guidance. Rules and fees are set by the authorities and
// change, so every page links to the official portal and shows a review date.

export const PAGES = [
  /* ═════════════ PASSPORT ═════════════ */
  {
    path: "/passport-services-dewas/",
    service: "passport",
    kind: "overview",
    label: "Passport services",
    title: "Passport Services in Dewas | Iqbal Khan",
    description:
      "Dewas mein passport banwana hai? Fresh, renewal, Tatkal aur minor passport ke document checklist, online form aur appointment mein madad.",
    h1: "Passport services in Dewas",
    hindi: "देवास में पासपोर्ट आवेदन, रिन्यूअल और तत्काल पासपोर्ट में सहायता",
    intro: [
      "Passport ka application dekhne mein simple lagta hai, lekin naam, date of birth ya address documents mein match na kare to dikkat aa jati hai. Iqbal Khan Passport Consultant Dewas ke applicants ko sahi application type chunne, sahi documents jama karne aur poori taiyari ke saath Passport Seva Kendra pahunchne mein madad karta hai.",
      "Aapko pehla passport chahiye, renewal chahiye, Tatkal chahiye ya bachche ka passport, hum har step simple bhasha mein samjhate hain aur application submit hone tak aapke saath rehte hain.",
    ],
    canDo: [
      "Samjhana ki aapko fresh passport chahiye ya re-issue",
      "Aapke case ke hisaab se document checklist banana",
      "Online application poora karne mein madad",
      "Appointment book karna aur uski taiyari karwana",
      "Naam, date aur address mein mismatch check karna",
      "Submit karne ke baad status ke baare mein guide karna",
    ],
    cannotDo: [
      "Passport issue karna ya approval decide karna",
      "Appointment date ya delivery ki guarantee dena",
      "Aapki jagah biometrics ya verification attend karna",
      "Jahan police verification lagti hai, use replace karna",
    ],
    eligibility: [
      "Indian citizen apply kar sakte hain. Application ka type is par depend karta hai ki aapke paas pehle se passport hai ya nahi.",
      "Aapke documents mein naam, date of birth aur address match hone chahiye.",
      "18 saal se kam umar ke applicants ke liye minor process hota hai, jisme parents ki consent chahiye.",
    ],
    steps: [
      { t: "Tell us your situation", d: "Aapko kaunsi service chahiye aur kya aapke paas pehle passport raha hai, ye hume bata dijiye." },
      { t: "Confirm the application type", d: "Hum bata dete hain ki ye fresh, renewal ya re-issue application hai, aur aapki checklist taiyar kar dete hain." },
      { t: "Complete the online application", d: "Details official Passport Seva portal par bhari jati hain. Official fee aap portal par khud pay karte hain." },
      { t: "Attend your appointment", d: "Verification, photo aur biometrics ke liye originals ke saath Passport Seva Kendra jaiye.", inPerson: true },
      { t: "Police verification, where required", d: "Kuch applications mein verification lagti hai, jisme aapke address par visit ya check ho sakta hai." },
      { t: "Passport dispatch", d: "Approve hone ke baad passport post se aata hai. Tracking mein hum aapko guide karte hain." },
    ],
    mistakes: [
      "Alag alag documents mein naam ki spelling alag hona",
      "Aisa date of birth proof dena jo aapke case mein accept nahi hota",
      "Jahan re-issue chahiye wahan fresh application chunna, ya ulta",
      "Documents ready hone se pehle appointment book kar lena",
      "Appointment par originals bhool jana",
    ],
    faqs: [
      { q: "Fresh passport chahiye ya re-issue, ye kaise pata chalega?", a: "Agar aapne kabhi Indian passport nahi banwaya, to fresh application hoga. Agar passport expire hone wala hai, expire ho gaya hai, kho gaya hai ya kharab ho gaya hai, ya details badalni hain, to re-issue hoga. Aap apna case bata dijiye, hum confirm kar denge." },
      { q: "Kya Passport Seva Kendra jaana padta hai?", a: "Haan. Online application ke baad document verification, photo aur biometrics ke liye appointment par jaana padta hai. Hum taiyari karwa dete hain taaki visit aasaan rahe." },
      { q: "Kya aap mera appointment book kar dete hain?", a: "Haan, official portal par slot chunne aur book karne mein hum madad karte hain. Slot milna authority par depend karta hai, ye hamare control mein nahi hai." },
    ],
    related: ["/passport-services-dewas/fresh-passport/", "/passport-services-dewas/renewal-reissue/", "/passport-services-dewas/tatkal/", "/passport-services-dewas/minor-passport/"],
  },
  {
    path: "/passport-services-dewas/fresh-passport/",
    service: "passport",
    kind: "service",
    label: "Fresh passport",
    title: "Fresh Passport Application Help in Dewas",
    description:
      "Pehli baar passport kaise banwayein? Dewas mein document checklist, online form aur Passport Seva Kendra appointment ki taiyari mein madad.",
    h1: "Fresh passport application help in Dewas",
    hindi: "देवास में पहली बार पासपोर्ट बनवाने में दस्तावेज़ और आवेदन की सहायता",
    intro: [
      "Fresh passport un logon ke liye hai jinhone kabhi Indian passport nahi banwaya. Is application mein documents ka sahi hona sabse zaroori hai, kyunki aap jo bhi detail bharte hain wo aapke official record ka hissa ban jati hai.",
      "Hum sahi proofs jama karne, online form dhyan se bharne aur appointment ki taiyari mein madad karte hain, taaki aapko baar baar chakkar na lagane pade.",
    ],
    canDo: [
      "Sahi application options chunne mein madad",
      "Check karna ki aapke documents ek dusre se match karte hain",
      "Online form sahi tarah se bharna",
      "Appointment ke liye taiyar karna",
    ],
    cannotDo: [
      "Passport issue hoga ya nahi, ye decide karna",
      "Delivery date ka promise karna",
      "Aapki jagah appointment attend karna",
    ],
    eligibility: [
      "Aap Indian citizen hone chahiye aur aapne pehle kabhi passport nahi banwaya hona chahiye.",
      "Date of birth proof ke rules is par depend karte hain ki aap kab paida hue, isliye hum check karte hain ki aapke liye kaunse proofs chalenge.",
      "18 saal se kam umar ke applicants minor passport wala page padhein.",
    ],
    docs: [
      { group: "Proof of address", items: ["Aadhaar", "Electricity, water or gas bill", "Other proof listed on the official portal"] },
      { group: "Proof of date of birth", items: ["Birth certificate", "School leaving or mark sheet certificate, where accepted", "Other proof listed on the official portal"] },
      { group: "Also commonly needed", items: ["Photo ID such as Aadhaar or voter ID", "Education certificate, where applicable", "Originals of everything you upload"] },
    ],
    steps: [
      { t: "Share your situation", d: "Aapki date of birth category aur jo documents aapke paas pehle se hain, wo hume bata dijiye." },
      { t: "Receive your checklist", d: "Hum bata dete hain ki aapke liye kaunse proofs lagenge, aur jo cheez match nahi karti uski taraf dhyan dilate hain." },
      { t: "Complete the online form", d: "Official portal par form bharne mein hum madad karte hain. Official fee aap wahin pay karte hain." },
      { t: "Book the appointment", d: "Passport Seva Kendra mein apna slot chuniye." },
      { t: "Attend with originals", d: "Verification, photo aur biometrics khud jaakar hote hain.", inPerson: true },
      { t: "Track the application", d: "Status, verification aur dispatch ke baare mein hum aapko guide karte hain." },
    ],
    mistakes: [
      "Documents se alag naam bharna",
      "Jahan zaroori hai wahan aisa address proof dena jo aapke apne naam par nahi hai",
      "Saaf na dikhne wale scans upload karna",
      "Appointment par originals na le jana",
    ],
    faqs: [
      { q: "Fresh passport ke liye appointment lena zaroori hai kya?", a: "Zyada tar applicants official portal par appointment book karte hain aur verification, photo aur biometrics ke liye Passport Seva Kendra jaate hain." },
      { q: "Kya police verification zaroori hoti hai?", a: "Ye case par depend karta hai. Kuch applications mein passport issue hone se pehle verification hoti hai aur kuch mein baad mein. Ye authority decide karti hai, aur aapko kya expect karna hai wo hum bata dete hain." },
      { q: "Fresh passport banne mein kitna time lagta hai?", a: "Sab kuch sahi ho to aam taur par 15 to 21 days lagte hain, lekin iski guarantee nahi hai. Timeline passport authorities tay karti hain." },
    ],
    related: ["/passport-services-dewas/minor-passport/", "/passport-services-dewas/tatkal/", "/passport-services-dewas/renewal-reissue/"],
  },
  {
    path: "/passport-services-dewas/renewal-reissue/",
    service: "passport",
    kind: "service",
    label: "Passport renewal and re-issue",
    title: "Passport Renewal and Re-issue in Dewas",
    description:
      "Passport renew kaise karein? Dewas mein expiring, expired, lost ya damaged passport aur naam ya address change ke liye checklist aur appointment madad.",
    h1: "Passport renewal and re-issue in Dewas",
    hindi: "देवास में पासपोर्ट रिन्यूअल और री-इश्यू में मार्गदर्शन",
    intro: [
      "Re-issue unke liye hai jinke paas pehle se passport hai: wo expire hone wala hai ya expire ho chuka hai, kho gaya hai ya kharab ho gaya hai, ya aapki details badal gayi hain. Kaunse documents lagenge, ye is par depend karta hai ki aapka case kaunsa hai.",
      "Hum aapka case confirm karte hain, sahi checklist banate hain aur missing ya mismatch papers ki wajah se hone wali delay se bachne mein madad karte hain.",
    ],
    canDo: [
      "Confirm karna ki aapka kaunsa re-issue case hai",
      "Sahi checklist taiyar karna",
      "Naam, address ya dusri details badalne mein madad",
      "Lost ya damaged passport ke process mein guide karna",
    ],
    cannotDo: [
      "Authority jo step zaroori kehti hai use skip karwana",
      "Delivery date ki guarantee dena",
      "Aapki jagah verification attend karna",
    ],
    eligibility: [
      "Aapke paas Indian passport hai ya pehle raha hai.",
      "Ho sake to expiry se pehle renew karein. Kai countries kuch mahine ki validity maangte hain.",
      "Lost passport ke liye ek additional official process hota hai.",
    ],
    docs: [
      { group: "Your existing passport", items: ["Original passport", "Copies of the first and last pages", "Pages with observations or endorsements, if any"] },
      { group: "If details have changed", items: ["Proof of the new address", "Marriage certificate or other proof for a name change", "Other proof listed on the official portal"] },
      { group: "If the passport is lost or damaged", items: ["Details of the lost or damaged passport", "Police report or affidavit, where required", "Any additional form the portal asks for"] },
    ],
    steps: [
      { t: "Tell us your case", d: "Expiring, expired, lost, damaged ya details change, aapka case kaunsa hai, bata dijiye." },
      { t: "Receive the right checklist", d: "Har case ke documents alag hote hain, isliye hum sirf wahi list karte hain jo aap par lagu hote hain." },
      { t: "Complete the online application", d: "Official portal par bhara jata hai, aur official fee aap khud pay karte hain." },
      { t: "Attend your appointment", d: "Verification aur biometrics Passport Seva Kendra mein hote hain.", inPerson: true },
      { t: "Receive the new passport", d: "Processing ke baad ye post se aata hai. Tracking mein hum aapko guide karte hain." },
    ],
    mistakes: [
      "Travel se bas kuch hafte pehle tak wait karna",
      "Appointment wale din purana passport ghar par chhod dena",
      "Change ke baad address ya naam ka proof update na karna",
      "Lost passport ko simple renewal samajh lena",
    ],
    faqs: [
      { q: "Passport renew kab karwana chahiye?", a: "Portal jitni jaldi allow kare, utni jaldi. Kai countries travel ke time par kuch mahine ki validity bachi hone ki shart rakhte hain, isliye jaldi renew karne se problem nahi aati." },
      { q: "Passport kho gaya hai to kya karein?", a: "Lost passport ke liye ek additional official process hota hai, jisme police report ya affidavit lag sakta hai. Aap hume contact kijiye, hum paperwork aur re-issue application mein guide karenge." },
      { q: "Renewal ke saath naam ya address badal sakte hain kya?", a: "Haan, lekin change ko support karne wale documents chahiye. Aapke case mein authority kaunse proofs accept karti hai, ye hum bata dete hain." },
    ],
    related: ["/passport-services-dewas/tatkal/", "/passport-services-dewas/fresh-passport/", "/passport-services-dewas/minor-passport/"],
  },
  {
    path: "/passport-services-dewas/tatkal/",
    service: "passport",
    kind: "service",
    label: "Tatkal passport guidance",
    title: "Tatkal Passport Guidance in Dewas",
    description:
      "Tatkal passport kaise banwayein? Dewas mein eligibility, documents aur official process ki jaankari. Sirf guidance, delivery date ka promise nahi.",
    h1: "Tatkal passport guidance in Dewas",
    hindi: "तत्काल पासपोर्ट के नियम, दस्तावेज़ और प्रक्रिया की जानकारी",
    intro: [
      "Tatkal un applicants ke liye ek tez official route hai jo qualify karte hain. Iski apni fee hoti hai, supporting documents ki apni list hoti hai aur appointments limited hote hain, isliye har application Tatkal mein nahi ja sakti.",
      "Hum check karne mein madad karte hain ki Tatkal aapke case mein fit hota hai ya nahi, uske specific documents jama karte hain aur sahi tarah se apply karwate hain. Final decision aur timeline authorities ke haath mein hoti hai.",
    ],
    canDo: [
      "Samjhana ki Tatkal aapke liye suitable ho sakta hai ya nahi",
      "Extra supporting documents taiyar karna",
      "Apply karne aur appointment book karne mein madad",
      "Batana ki kya aapke control mein hai aur kya nahi",
    ],
    cannotDo: [
      "Fixed number of days mein delivery ka promise karna",
      "Appointment slots banana",
      "Jo application qualify nahi karti use accept karwana",
    ],
    eligibility: [
      "Tatkal unke liye hai jo official conditions poori karte hain aur zaroori supporting documents de sakte hain.",
      "Appointments limited hote hain aur availability par depend karte hain.",
      "Tatkal fee normal fee se alag hoti hai aur authority tay karti hai.",
    ],
    docs: [
      { group: "Everything for a normal application", items: ["Proof of address", "Proof of date of birth", "Photo ID"] },
      { group: "Tatkal specific", items: ["Supporting documents from the official Tatkal list", "Any additional declaration the portal asks for"] },
    ],
    steps: [
      { t: "Check suitability", d: "Hum aapka case aur official conditions dekhte hain." },
      { t: "Prepare the extra documents", d: "Tatkal mein normal application ke alawa extra supporting documents lagte hain." },
      { t: "Apply on the official portal", d: "Tatkal option chuniye. Official fee aap wahin pay karte hain." },
      { t: "Book the earliest available slot", d: "Slot ki availability authority control karti hai." },
      { t: "Attend in person", d: "Passport Seva Kendra mein verification, photo aur biometrics hote hain.", inPerson: true },
    ],
    mistakes: [
      "Ye maan lena ki har applicant Tatkal ke liye qualify karta hai",
      "Specific supporting documents ready na hona",
      "Fixed delivery date ki ummeed rakhna",
      "Late apply karna aur Tatkal ko safety net samajhna",
    ],
    faqs: [
      { q: "Tatkal passport 1-3 din mein mil jata hai kya?", a: "Tatkal aam application se aam taur par tez hota hai, aur appointment ke baad kai cases kuch din mein aage badh jate hain, lekin iski guarantee nahi hai. Verification aur dispatch authorities ke control mein hote hain." },
      { q: "Kya koi bhi Tatkal mein apply kar sakta hai?", a: "Sirf wahi jo official conditions poori karte hain aur jinke paas zaroori documents hain. Koi bhi fee dene se pehle hum check karne mein madad karte hain." },
      { q: "Tatkal mein zyada paise lagte hain kya?", a: "Haan, official Tatkal fee normal fee se zyada hoti hai. Ye authority tay karti hai aur portal par pay hoti hai." },
    ],
    related: ["/passport-services-dewas/renewal-reissue/", "/passport-services-dewas/fresh-passport/", "/passport-services-dewas/minor-passport/"],
  },
  {
    path: "/passport-services-dewas/minor-passport/",
    service: "passport",
    kind: "service",
    label: "Minor passport",
    title: "Minor Passport Application in Dewas",
    description:
      "Bachche ka passport Dewas mein kaise banwayein? Documents, parents ki consent aur 18 saal se kam ke process mein application se appointment tak madad.",
    h1: "Minor passport application in Dewas",
    hindi: "नाबालिग (बच्चों) के पासपोर्ट के लिए दस्तावेज़ और प्रक्रिया",
    intro: [
      "18 saal se kam umar ke bachche ka passport bhi usi portal aur appointment process se banta hai jisse adult ka, bas parents ki details aur consent ke extra requirements hote hain.",
      "Hum parents ko sahi papers taiyar karne mein madad karte hain, jisme wo forms bhi shamil hain jo tab chahiye jab sirf ek parent aa sakta ho, taaki appointment bekar na jaye.",
    ],
    canDo: [
      "Bachche ki document checklist taiyar karna",
      "Parents ki consent ke requirements samjhana",
      "Application sahi tarah se bharne mein madad",
      "Bachche ke saath appointment ke liye taiyar karna",
    ],
    cannotDo: [
      "Parents ki consent ke rules mein chhoot dilwana",
      "Delivery date ki guarantee dena",
      "Bachche ki jagah appointment attend karna",
    ],
    eligibility: [
      "Apply karte waqt applicant ki umar 18 saal se kam honi chahiye.",
      "Bachche ki taraf se parent ya legal guardian apply karta hai.",
      "Minors ki validity ke rules adults se alag hote hain. Current validity portal par likhi hoti hai.",
    ],
    docs: [
      { group: "For the child", items: ["Birth certificate", "Proof of address", "School identity or other proof, where accepted"] },
      { group: "For the parents", items: ["Parents' passports or identity proof", "Proof of address", "Marriage certificate, where required"] },
      { group: "Consent", items: ["Consent form where only one parent attends", "Any additional form the portal asks for"] },
    ],
    steps: [
      { t: "Share the child's age and situation", d: "Ek parent aa sakta hai ya dono, ye bata dijiye." },
      { t: "Receive the checklist", d: "Isme aapke case mein lagne wale consent forms bhi shamil hain." },
      { t: "Complete the online application", d: "Official portal par bhara jata hai aur fee aap khud pay karte hain." },
      { t: "Attend with your child", d: "Bachcha aam taur par parent ya guardian ke saath appointment par aata hai.", inPerson: true },
      { t: "Track the application", d: "Verification aur dispatch ke baare mein hum aapko guide karte hain." },
    ],
    mistakes: [
      "Zaroori parental consent form ke bina pahunch jana",
      "Aisa birth certificate dena jisme dono parents ke naam nahi hain, jahan wo chahiye",
      "Ye maan lena ki bachche ko aana zaroori nahi hai",
    ],
    faqs: [
      { q: "Kya dono parents ka present hona zaroori hai?", a: "Hamesha nahi. Agar sirf ek parent aata hai, to aam taur par doosre parent ka consent form chahiye hota hai. Aapke case mein kaunsa form lagega, ye hum bata dete hain." },
      { q: "Kya bachche ko appointment par aana padta hai?", a: "Aam taur par haan, parent ya guardian ke saath. Har case mein exact requirement authority decide karti hai." },
      { q: "Minor passport kitne time tak valid rehta hai?", a: "Minors ki validity adults se alag hoti hai, aur current rule official portal par likha hota hai." },
    ],
    related: ["/passport-services-dewas/fresh-passport/", "/passport-services-dewas/renewal-reissue/", "/passport-services-dewas/tatkal/"],
  },

  /* ═════════════ PAN ═════════════ */
  {
    path: "/pan-card-services-dewas/",
    service: "pan-card",
    kind: "overview",
    label: "PAN card services",
    title: "PAN Card Services in Dewas | Iqbal Khan",
    description:
      "Dewas mein naya PAN card, PAN correction, duplicate PAN aur e-PAN banwane mein madad. Pehle details check karein, phir sahi tarah apply karein.",
    h1: "PAN card services in Dewas",
    hindi: "देवास में नया पैन कार्ड, पैन सुधार और ई-पैन में सहायता",
    intro: [
      "PAN ki zyada tar problems tab hoti hain jab Aadhaar, school records aur dusre documents mein details match nahi karti. Hum pehle aapki information check karte hain, phir sahi application mein guide karte hain taaki application mein baar baar dikkat na aaye.",
      "Naya PAN ho, correction ho, reprint ho ya instant e-PAN, hum samjhate hain ki aapke case mein kya lagu hota hai aur aapko kya chahiye hoga.",
    ],
    canDo: [
      "Samjhana ki aapko naya PAN, correction ya reprint chahiye",
      "Aapki details mein mismatch check karna",
      "Official application channels mein guide karna",
      "Samjhana ki instant e-PAN available ho sakta hai ya nahi",
      "Acknowledgement track karne mein madad",
    ],
    cannotDo: [
      "PAN card issue karna ya application decide karna",
      "Processing time ki guarantee dena",
      "Jiske paas pehle se PAN hai, uske liye doosra PAN dilwana",
    ],
    eligibility: [
      "Ek vyakti ke paas sirf ek hi PAN ho sakta hai. Agar aapke paas pehle se hai, to dobara apply karne ke bajay correction ya reprint lijiye.",
      "Minors ka PAN parent ya guardian ke through ban sakta hai.",
      "Instant e-PAN ke liye aam taur par Aadhaar se linked mobile number chahiye, aur ye har case mein available nahi hota.",
    ],
    steps: [
      { t: "Tell us what you need", d: "Naya PAN, correction, reprint ya e-PAN, jo bhi chahiye bata dijiye." },
      { t: "Check your details", d: "Hum aapka naam, date of birth aur parents ke naam documents mein compare karte hain." },
      { t: "Apply through the official channel", d: "Standard application, ya jahan aap qualify karte hain wahan instant e-PAN. Official fee aap khud pay karte hain." },
      { t: "Send documents if required", d: "Kuch cases mein signed form ya documents post se bhejne padte hain.", inPerson: false },
      { t: "Track the acknowledgement", d: "Card aapko post se bheja jata hai. e-PAN electronically milta hai." },
    ],
    mistakes: [
      "Naam ya date of birth ka Aadhaar se alag hona",
      "Pehle se PAN hone par bhi naya PAN apply karna",
      "Instant e-PAN ke liye aisa mobile number dena jo Aadhaar se linked nahi hai",
      "Aisi photo ya signature upload karna jo size rules poore nahi karti",
    ],
    faqs: [
      { q: "Kya bachche ka PAN card ban sakta hai?", a: "Haan. Parent ya guardian bachche ki taraf se apply karta hai. Kaunse documents chahiye, ye hum bata dete hain." },
      { q: "Kya e-PAN valid hota hai?", a: "Haan, e-PAN PAN ka official electronic form hai. Official source se download karne mein hum guide karte hain." },
      { q: "PAN card kho gaya hai, kya naya number banega?", a: "Nahi. Aap apne existing PAN ka reprint mangwate hain. Hum doosra PAN bane bina ye karwane mein madad karte hain." },
    ],
    related: ["/pan-card-services-dewas/correction/"],
  },
  {
    path: "/pan-card-services-dewas/correction/",
    service: "pan-card",
    kind: "service",
    label: "PAN card correction",
    title: "PAN Card Correction in Dewas",
    description:
      "PAN card mein naam ya DOB galat hai? Dewas mein name, date of birth, father's name, address ya photo correction kaise karein, documents aur steps.",
    h1: "PAN card correction in Dewas",
    hindi: "पैन कार्ड में नाम, जन्म तिथि या पता सुधारने की जानकारी",
    intro: [
      "PAN card par naam mein ek galat letter ya galat date of birth ho to bank, tax aur loan ka kaam ruk sakta hai. Iska solution hai sahi documents ke saath correction request. Aapka PAN number nahi badalta.",
      "Hum pehchanne mein madad karte hain ki kaun si details badalni hain, badlav ko prove karne wale documents chunte hain aur request sahi tarah submit karte hain.",
    ],
    canDo: [
      "Ye dhundhna ki aapke documents mein kaun si details alag hain",
      "Sahi supporting documents chunna",
      "Correction request taiyar karna",
      "Shaadi ke baad naam badalne mein madad",
    ],
    cannotDo: [
      "Bina supporting proof ke details badalna",
      "Processing time ki guarantee dena",
      "Aapke liye naya PAN number banana",
    ],
    eligibility: [
      "Koi bhi PAN holder naam, date of birth, father's name, address, gender, photo ya signature mein correction maang sakta hai.",
      "Har change ke liye accepted document hona chahiye.",
      "Aapka PAN number wahi rehta hai aur corrected card issue hota hai.",
    ],
    docs: [
      { group: "Always needed", items: ["Your current PAN details", "Proof of identity", "Proof of address"] },
      { group: "For the specific change", items: ["Date of birth: birth certificate or equivalent", "Name: proof such as a marriage certificate or other accepted document", "Address: a recent address proof", "Photo or signature: as the form requires"] },
    ],
    steps: [
      { t: "Share what is wrong", d: "Kaunse fields galat hain aur sahi kya hone chahiye, ye hume bata dijiye." },
      { t: "Check against your documents", d: "Hum confirm karte hain ki har change ke liye supporting proof hai." },
      { t: "Submit the correction request", d: "Official channel se submit hota hai, aur official fee aap khud pay karte hain." },
      { t: "Send documents if required", d: "Kuch cases mein signed form ya documents post se bhejne pad sakte hain." },
      { t: "Receive the corrected card", d: "Updated card aapko post se milta hai, aur e-PAN download kiya ja sakta hai." },
    ],
    mistakes: [
      "PAN correct karna lekin Aadhaar ka mismatch na sudharna",
      "Bina supporting document ke change submit karna",
      "Kai fields galat hone par sirf ek field correct karna",
      "Naye details proof ke saath consistent na bharna",
    ],
    faqs: [
      { q: "Correction ke baad kya mera PAN number badal jayega?", a: "Nahi. Aapka PAN number wahi rehta hai. Sirf details aur card update hote hain." },
      { q: "Shaadi ke baad PAN mein naam badal sakte hain kya?", a: "Haan, lekin change ko support karne wale documents chahiye, jaise marriage certificate. Authority kya accept karti hai, ye hum bata dete hain." },
      { q: "Aadhaar aur PAN ki details alag hain to kya karein?", a: "Mismatch se linking aur verification mein problem ho sakti hai. Hum decide karne mein madad karte hain ki kaunsa record correct karna hai, taaki dono match karein." },
    ],
    related: ["/pan-card-services-dewas/"],
  },

  /* ═════════════ DRIVING LICENCE ═════════════ */
  {
    path: "/driving-licence-services-dewas/",
    service: "driving-licence",
    kind: "overview",
    label: "Driving licence services",
    title: "Driving Licence Services in Dewas | Iqbal Khan",
    description:
      "Dewas mein learner's licence, permanent driving licence, renewal aur duplicate DL banwane mein madad. Documents ready, taaki RTO visit chhota rahe.",
    h1: "Driving licence services in Dewas",
    hindi: "देवास में ड्राइविंग लाइसेंस आवेदन में सहायता",
    intro: [
      "Driving licence ek sequence hai: pehle learner's licence, phir driving test, phir permanent licence, aur uske baad renewals. Har stage ke apne documents, slots aur rules hote hain, aur ek step chhoot jaye to kai hafte nikal sakte hain.",
      "Hum aapki vehicle category ke hisaab se sequence samjhate hain, documents taiyar karte hain aur official portal par sahi slots book karne mein madad karte hain, taaki aapka RTO visit jitna ho sake chhota rahe.",
    ],
    canDo: [
      "Aapki vehicle category ke liye sahi sequence samjhana",
      "Har stage ke documents taiyar karna",
      "Online application aur slot booking mein madad",
      "Renewal, duplicate aur updates mein guide karna",
      "Learner's test ki taiyari karwana",
    ],
    cannotDo: [
      "Aapki jagah driving test pass karna",
      "Licence issue karna ya application decide karna",
      "Test date ki guarantee dena",
    ],
    eligibility: [
      "Minimum age vehicle category par depend karti hai. Car aur geared two-wheeler ke liye ye aam taur par 18 saal hoti hai, aur low-power two-wheelers aur commercial vehicles ke liye rules alag hote hain.",
      "Aam taur par pehle learner's licence aata hai, phir permanent licence ke liye driving test hota hai.",
      "Kuch steps online hote hain aur kuch khud jaakar.",
    ],
    steps: [
      { t: "Tell us your vehicle category", d: "Two-wheeler, car ya commercial, aur kya aapke paas learner's licence hai, ye bata dijiye." },
      { t: "Receive the checklist", d: "Aap jis stage par hain, uske documents." },
      { t: "Apply on the official portal", d: "Form aur slot booking mein hum madad karte hain. Official fees aap khud pay karte hain." },
      { t: "Attend the test or verification", d: "Biometrics aur driving test RTO ya authorised centre par khud jaakar hote hain.", inPerson: true },
      { t: "Receive your licence", d: "Transport department licence issue karta hai aur post se bhejta hai." },
    ],
    mistakes: [
      "Waiting period khatam hone se pehle permanent licence ke liye apply karna",
      "Learner's licence expire ho jane dena",
      "Documents ka address application se match na karna",
      "Bina taiyari ke test par pahunch jana",
    ],
    faqs: [
      { q: "Kya RTO jaana padta hai?", a: "Haan, biometrics aur driving test ke liye. Process ke baaki hisse online hote hain, aur aapke liye kaunse steps lagu hain ye hum samjhate hain." },
      { q: "Kya aap international driving permit mein madad karte hain?", a: "Haan, international driving permit ke liye apply karne mein hum guide kar sakte hain. Iske liye valid Indian licence chahiye." },
      { q: "Kya bina test ke licence mil sakta hai?", a: "Nahi. Driving test transport department ke liye zaroori hai aur hum use bypass nahi kar sakte." },
    ],
    related: ["/driving-licence-services-dewas/learners-licence/", "/driving-licence-services-dewas/renewal-duplicate/"],
  },
  {
    path: "/driving-licence-services-dewas/learners-licence/",
    service: "driving-licence",
    kind: "service",
    label: "Learner's licence",
    title: "Learner's Licence Help in Dewas",
    description:
      "Dewas mein learner's licence kaise banwayein? Eligibility, documents, online application aur two-wheeler aur car ke test ki taiyari mein madad.",
    h1: "Learner's licence help in Dewas",
    hindi: "लर्नर लाइसेंस के लिए आवेदन और टेस्ट की जानकारी",
    intro: [
      "Learner's licence legally gaadi chalane ka pehla step hai aur permanent licence ka darwaza bhi. Isme sahi documents, online application aur road rules aur signs ka chhota test lagta hai.",
      "Hum aapke documents taiyar karte hain, application mein madad karte hain aur batate hain ki test ke liye kya revise karna hai, taaki process dobara na karna pade.",
    ],
    canDo: [
      "Aapki vehicle category ke liye eligibility check karna",
      "Documents aur photographs taiyar karna",
      "Online application poora karne mein madad",
      "Test ki taiyari aur slot booking mein guide karna",
    ],
    cannotDo: [
      "Aapki jagah test dena",
      "Test date ki guarantee dena",
      "Age rules mein chhoot dilwana",
    ],
    eligibility: [
      "Minimum age vehicle category par depend karti hai. Car aur geared two-wheeler ke liye ye aam taur par 18 saal hoti hai, aur low-power two-wheelers ke liye rules alag hote hain.",
      "Aapke paas age aur address ka valid proof hona chahiye.",
      "Medical declaration ki zaroorat ho sakti hai.",
    ],
    docs: [
      { group: "Required documents", items: ["Proof of age", "Proof of address", "Passport-size photographs", "Medical declaration, where required"] },
      { group: "Good to have", items: ["Aadhaar-linked mobile number", "Originals of every document you upload"] },
    ],
    steps: [
      { t: "Confirm eligibility", d: "Vehicle category aur age check karte hain." },
      { t: "Prepare documents", d: "Proofs, photos aur koi medical declaration." },
      { t: "Apply online", d: "Official portal par bhara jata hai. Official fees aap khud pay karte hain." },
      { t: "Book the test slot", d: "Learner's test ke liye slot chuniye." },
      { t: "Take the test", d: "Test transport department ke bataye tareeke se dena hota hai.", inPerson: true },
      { t: "Receive the learner's licence", d: "Test pass karne ke baad issue hota hai. Ye limited period ke liye valid hota hai, isliye permanent licence ka time par plan banayein." },
    ],
    mistakes: [
      "Test se pehle road signs aur rules revise na karna",
      "Blurred ya bahut bade size ke documents upload karna",
      "Permanent licence ke liye apply karne se pehle learner's licence lapse ho jane dena",
    ],
    faqs: [
      { q: "Learner licence kitne time tak valid rehta hai?", a: "Ye limited period ke liye valid hota hai, aam taur par six months, isliye us time ke andar permanent licence ka test dena hota hai. Current rule official portal par confirm kar lijiye." },
      { q: "Permanent licence ke liye kab apply kar sakte hain?", a: "Aam taur par ek minimum waiting period ke baad, typically 30 days, jab tak learner's licence valid ho." },
      { q: "Kya learner's test mushkil hota hai?", a: "Isme road rules aur signs aate hain. Kya revise karna hai, ye hum bata dete hain taaki aap taiyar rahein." },
    ],
    related: ["/driving-licence-services-dewas/renewal-duplicate/", "/driving-licence-services-dewas/"],
  },
  {
    path: "/driving-licence-services-dewas/renewal-duplicate/",
    service: "driving-licence",
    kind: "service",
    label: "Driving licence renewal and duplicate",
    title: "Driving Licence Renewal and Duplicate in Dewas",
    description:
      "Driving licence renew karwana hai ya lost DL ka duplicate? Dewas mein address update bhi. Documents aur steps mein madad lein.",
    h1: "Driving licence renewal and duplicate in Dewas",
    hindi: "ड्राइविंग लाइसेंस रिन्यूअल और डुप्लीकेट के लिए सहायता",
    intro: [
      "Driving licence time par renew karwana padta hai, kho jaye ya kharab ho jaye to replace karwana padta hai, aur address badalne par update karwana padta hai. Har case ke documents thode alag hote hain aur har case online shuru kiya ja sakta hai.",
      "Hum confirm karte hain ki aapka case kaunsa hai, documents taiyar karte hain aur application poora karne mein madad karte hain, taaki late penalty aur baar baar visit se bacha ja sake.",
    ],
    canDo: [
      "Expiry se pehle ya baad renewal mein madad",
      "Lost ya damaged licence ke duplicate mein guide karna",
      "Address aur details change mein madad",
      "Sahi documents aur photographs taiyar karna",
    ],
    cannotDo: [
      "Late renewal ki penalty hatwana",
      "Processing time ki guarantee dena",
      "Aapki jagah biometrics dena",
    ],
    eligibility: [
      "Aapke paas India mein issue hua driving licence hona chahiye.",
      "Expiry se pehle renew karna sabse aasaan hai. Expiry ke baad grace period lag sakta hai, aur usse late renewal par penalty ya extra steps lag sakte hain.",
      "Lost licence ke liye police complaint ya affidavit ki zaroorat ho sakti hai.",
    ],
    docs: [
      { group: "For renewal", items: ["Existing driving licence", "Proof of address", "Passport-size photographs", "Medical declaration, where required"] },
      { group: "For a duplicate", items: ["Details of the lost or damaged licence", "Police complaint or affidavit, where required", "Proof of address"] },
      { group: "For address or detail change", items: ["Proof of the new address", "Existing driving licence"] },
    ],
    steps: [
      { t: "Tell us your case", d: "Renewal, duplicate ya update, aapka case bata dijiye." },
      { t: "Receive the checklist", d: "Sirf wahi documents jo aapke case par lagu hote hain." },
      { t: "Apply on the official portal", d: "Form mein hum madad karte hain. Official fees aap khud pay karte hain." },
      { t: "Visit for biometrics if required", d: "Kuch cases mein RTO jaana padta hai.", inPerson: true },
      { t: "Receive the licence", d: "Transport department issue karta hai aur post se bhejta hai." },
    ],
    mistakes: [
      "Grace period khatam hone tak wait karna",
      "Application ka address proof se match na karna",
      "Jahan zaroori ho wahan original licence saath na le jana",
    ],
    faqs: [
      { q: "Licence expire ho gaya hai to kya karein?", a: "Grace period lag sakta hai, uske baad renewal mein penalty ya extra steps ho sakte hain. Expiry date ke saath hume contact kijiye, hum aapke options samjha denge." },
      { q: "Licence kho gaya hai, duplicate mil sakta hai kya?", a: "Haan. Application par duplicate issue hota hai, aksar police complaint ya affidavit ke saath. Aapke case mein kya chahiye, hum bata dete hain." },
      { q: "Licence par address badal sakte hain kya?", a: "Haan, naye address ke proof ke saath. Update poora karne mein hum madad karte hain." },
    ],
    related: ["/driving-licence-services-dewas/learners-licence/", "/driving-licence-services-dewas/"],
  },
];

export const getPage = (path) => PAGES.find((p) => p.path === path);
export const getOverview = (service) =>
  PAGES.find((p) => p.service === service && p.kind === "overview");
export const subpages = (service) =>
  PAGES.filter((p) => p.service === service && p.kind === "service");

export const POPULAR = [
  { title: "Fresh passport", text: "Pehli baar passport, documents aur form filling mein madad", path: "/passport-services-dewas/fresh-passport/", icon: "FileText" },
  { title: "Renewal and re-issue", text: "Expiring, expired, lost ya damaged passport ke liye", path: "/passport-services-dewas/renewal-reissue/", icon: "RefreshCcw" },
  { title: "Tatkal guidance", text: "Tez official route: eligibility aur documents ki jaankari", path: "/passport-services-dewas/tatkal/", icon: "Zap" },
  { title: "Minor passport", text: "18 saal se kam ke liye, parents ki consent ke saath", path: "/passport-services-dewas/minor-passport/", icon: "Baby" },
  { title: "New PAN and e-PAN", text: "Pehli baar mein sahi apply karein, ya instant e-PAN check karein", path: "/pan-card-services-dewas/", icon: "IdCard" },
  { title: "PAN correction", text: "Naam, date of birth, address ya photo ki correction", path: "/pan-card-services-dewas/correction/", icon: "PenLine" },
  { title: "Learner's licence", text: "Eligibility, documents aur test ki taiyari", path: "/driving-licence-services-dewas/learners-licence/", icon: "CalendarCheck" },
  { title: "DL renewal and duplicate", text: "Licence renew karein, replace karein ya update karein", path: "/driving-licence-services-dewas/renewal-duplicate/", icon: "Car" },
];
