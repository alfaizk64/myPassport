// Guide articles that answer common passport search questions (Hinglish).
// General information only. Rules, fees and timelines are set by the
// authorities and change, so every guide points readers to the official portal
// and avoids promising approvals, dates or slots.

export const GUIDES = [
  /* 1 ═════════════ DOCUMENTS LIST ═════════════ */
  {
    slug: "passport-documents-list",
    path: "/guides/passport-documents-list/",
    service: "passport",
    title: "Passport Documents List in Hindi | Iqbal Khan",
    description:
      "Passport ke liye kaun se documents chahiye? Address proof, date of birth proof, photo ID, renewal aur minor passport ki checklist simple Hinglish mein.",
    h1: "Passport ke liye kaun se documents chahiye",
    hindi: "पासपोर्ट के लिए ज़रूरी दस्तावेज़ों की सूची: पता, जन्म तिथि, फोटो आईडी और अन्य प्रमाण",
    intro: [
      "Passport ke liye kaun se documents chahiye, ye sabse zyada pucha jane wala sawal hai. Jawab sabke liye ek jaisa nahi hota, kyunki fresh passport, renewal, minor passport aur court case wale application ki checklist thodi alag hoti hai. Is guide mein hum wo documents samjhate hain jo aam taur par maange jate hain.",
      "Ek zaroori baat pehle hi: exact list aapke case par depend karti hai, aur rules time ke saath badal sakte hain. Isliye application bharne se pehle official Passport Seva portal (passportindia.gov.in) par apni category ki current list ek baar zaroor dekh lein.",
    ],
    sections: [
      {
        h2: "Address proof",
        paras: [
          "Address proof mein wahi address hona chahiye jo aap application mein bhar rahe hain. Agar aapne haal hi mein ghar badla hai, to pehle dekh lein ki proof par kaunsa address likha hai.",
        ],
        list: [
          "Aadhaar card",
          "Bijli, paani ya gas ka bill, aam taur par recent",
          "Bank passbook ya rent agreement, jahan portal ki list mein ho",
          "Portal ki list ke baaki accepted documents",
        ],
      },
      {
        h2: "Date of birth ka proof",
        paras: [
          "Date of birth ka proof sabse sensitive hota hai, kyunki yahi galat ya alag hone par application atakti hai. Kaunsa proof chalega, ye is par depend karta hai ki aap kab paida hue aur aapke paas kya available hai.",
          "Apne sab documents mein date of birth ek jaisi honi chahiye. Agar kisi document mein alag hai, to application se pehle use theek karwana behtar hai.",
        ],
        list: [
          "Birth certificate, jo municipal authority ya registrar ne jaari kiya ho",
          "School leaving certificate ya mark sheet, jahan accept ho",
          "Portal ki list ke aur accepted documents",
        ],
      },
      {
        h2: "Photo ID aur education certificate",
        paras: [
          "Photo ID ke taur par Aadhaar ya voter ID jaise documents aam taur par use hote hain. Education certificate sab applicants ke liye nahi lagta, sirf un cases mein jahan portal maange. Pehle se maan kar mat chaliye ki zaroori hoga ya nahi hoga, portal par apna case chun kar dekhein.",
        ],
        list: [
          "Photo ID: Aadhaar, voter ID ya portal ki list ka koi aur document",
          "Education certificate: sirf jahan applicable ho",
          "Upload kiye gaye har document ka original, appointment par dikhane ke liye",
        ],
      },
      {
        h2: "Renewal, lost passport aur minor ke liye alag documents",
        paras: [
          "Agar aapke paas pehle se passport hai, to uske saath kuch extra papers lagte hain. 18 saal se kam umar ke bachche ke case mein parents ke documents aur consent bhi zaroori hote hain.",
        ],
        list: [
          "Renewal: purana original passport, aur uske pehle aur aakhri page ki copy",
          "Naam ya address badalna: badlav ka proof, jaise marriage certificate ya naye address ka proof",
          "Lost ya damaged passport: police report ya affidavit, jahan portal maange",
          "Minor passport: bachche ka birth certificate, parents ke ID ya passport, aur sirf ek parent aaye to consent form",
          "Pending court case: court ka order ya permission, case ke hisaab se",
        ],
      },
      {
        h2: "Documents ready karne ke tips",
        paras: [
          "Sabse zaroori baat ye hai ki naam ki spelling sab documents mein ek jaisi ho. Scans saaf hon, kinare kate hue na hon, aur appointment par originals saath le jayein. Koi bhi document banwane ya fee dene se pehle official portal par list ek baar confirm kar lein.",
          "Agar samajh na aaye ki aapke case mein kya lagega, to Iqbal Khan Passport Consultant, Dewas aapko case ke hisaab se checklist banane mein madad karta hai. Hum sarkari office nahi hain, aur final faisla passport authority ka hota hai.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kya passport ke liye Aadhaar card zaroori hai?",
        a: "Aadhaar aam taur par address proof aur photo ID, dono ke taur par use hota hai, lekin portal ki list mein doosre documents bhi hote hain. Aapke case mein sirf Aadhaar chalega ya doosre bhi, ye official portal par confirm kar lein.",
      },
      {
        q: "Passport ke liye original documents chahiye ya photocopy?",
        a: "Appointment par verification ke liye originals saath le jana chahiye. Copies kitni aur kaunsi chahiye, ye appointment confirmation aur portal par likha hota hai, usi ke hisaab se rakhein.",
      },
      {
        q: "Date of birth ka proof nahi hai to kya karein?",
        a: "Pehle dekhein ki aapke paas birth certificate, school record ya portal ki list ka koi aur document hai ya nahi. Na ho to aam taur par pehle birth certificate ya school record theek karwana padta hai, jiske liye local authority ya school se sampark karna hota hai. Hume apna case bata dijiye, hum batayenge kaunse options dekhne hain.",
      },
    ],
    related: [
      "/passport-services-dewas/fresh-passport/",
      "/passport-services-dewas/renewal-reissue/",
      "/passport-services-dewas/minor-passport/",
      "/passport-services-dewas/court-case-passport/",
    ],
  },

  /* 2 ═════════════ APPOINTMENT ═════════════ */
  {
    slug: "passport-appointment-ki-taiyari",
    path: "/guides/passport-appointment-ki-taiyari/",
    service: "passport",
    title: "Passport Appointment Ki Taiyari | Iqbal Khan",
    description:
      "Passport appointment se pehle kya taiyari karein? Documents, originals, Seva Kendra mein kya hota hai aur aam galtiyan. Dewas se Iqbal Khan ki guidance.",
    h1: "Passport appointment ki taiyari kaise karein",
    hindi: "पासपोर्ट अपॉइंटमेंट की तैयारी: क्या साथ ले जाएँ और वहाँ क्या होता है",
    intro: [
      "Passport ke poore process mein appointment hi wo step hai jahan aapko khud jaana hota hai. Yahan aapke documents asli roop mein dekhe jaate hain, photo li jaati hai aur biometrics hote hain. Isliye is din ki taiyari sabse zyada maayne rakhti hai.",
      "Achhi taiyari ka matlab hai ek hi visit mein kaam ho jaana. Adhoori taiyari ka matlab hai dobara jaana, nayi date lena aur kai dinon ka nuksan. Is guide mein hum batate hain ki jaane se pehle kya check karna chahiye, kya saath le jaana chahiye aur wahan kya hota hai.",
    ],
    sections: [
      {
        h2: "Jaane se pehle ye cheezein check karein",
        paras: [
          "Zyada tar dikkat documents ke aapas mein match na karne se aati hai. Ek baar shanti se baith kar neeche di gayi baaton par nazar daal lein.",
        ],
        list: [
          "Aapka naam har document par bilkul ek jaisa likha ho, spelling sameti",
          "Date of birth har proof par ek jaisi ho",
          "Address proof mein wahi address ho jo application mein diya gaya hai",
          "Har document ka original saath mein ho, sirf photocopy nahi",
          "Purana passport, agar hai, to wo bhi saath rakhein",
          "Minor ke case mein parents ke documents aur zaroori consent taiyar ho",
        ],
      },
      {
        h2: "Appointment wale din kya saath le jayein",
        paras: [
          "Ek file bana lein aur usmein sab kuch ek saath rakhein, taaki counter par kuch dhundhna na pade.",
        ],
        list: [
          "Application ki receipt ya ARN ka print",
          "Address proof ke original documents",
          "Date of birth proof ke original documents",
          "Photo ID jaise Aadhaar",
          "Education certificate, jahan lagu ho",
          "Purana passport aur uski copies, renewal ya re-issue mein",
          "Court case ho to court order aur case ke papers",
        ],
      },
      {
        h2: "Passport Seva Kendra mein kya hota hai",
        paras: [
          "Andar aapke documents originals se milaye jaate hain, aapki photo li jaati hai aur fingerprints liye jaate hain. Staff aapse aapke diye gaye details ke baare mein saadharan sawal puchh sakta hai, aur aapko wahi batana hota hai jo documents mein likha hai.",
          "Iske baad aapki file aage badhti hai. Kai cases mein police verification hoti hai, jo kabhi passport issue hone se pehle aur kabhi baad mein hoti hai. Ye kaise hoga, ye authority tay karti hai, aur aapko SMS ya portal par status milta rehta hai.",
          "Appointment par aapko khud jaana zaroori hai. Koi aur aapki jagah jaakar photo ya biometrics nahi de sakta, isliye din pehle se khali rakhein.",
        ],
      },
      {
        h2: "Aam galtiyan jo ek visit ko do visit bana deti hain",
        list: [
          "Sirf photocopy le jaana aur original ghar bhool jaana",
          "Naam ya date of birth ka documents se match na karna",
          "Address proof kisi aur ke naam par hona, bina zaroori papers ke",
          "Purana passport saath na le jaana",
          "Der se pahunchna, jisse saara schedule bigad jaata hai",
          "Minor ke case mein parents ke documents ya consent adhoore hona",
        ],
      },
      {
        h2: "Taiyari mein hum kaise madad karte hain",
        paras: [
          "Hamare office mein hum pehle aapke documents dekhte hain aur batate hain ki kahan mismatch hai aur usse kaise sahi karna hai. Uske baad aapke case ke hisaab se poori checklist banti hai, application taiyar hoti hai aur aapko bataya jaata hai ki appointment wale din kya expect karna hai.",
          "Dhyan rahe, hum ek independent consultancy hain, government office nahi. Official fee aap khud official portal par bharte hain, approval aur timing authority tay karti hai, aur hum kisi date ki guarantee nahi dete. Agar aap chahte hain ki ye sab koi aapke liye sambhal le, to Dewas mein hum se WhatsApp par baat kar sakte hain.",
        ],
      },
    ],
    faqs: [
      {
        q: "Appointment par kya kya le jana hota hai?",
        a: "Application receipt ya ARN ka print, aur address, date of birth aur photo ID ke original documents. Renewal ya re-issue mein purana passport bhi. Aapke case ki exact list hum pehle se bata dete hain.",
      },
      {
        q: "Kya koi aur meri jagah appointment par ja sakta hai?",
        a: "Nahi. Photo aur biometrics aapke hi liye jaate hain, isliye aapko khud jaana hota hai. Minor ke case mein bachcha parent ya guardian ke saath jaata hai.",
      },
      {
        q: "Documents mein naam alag alag likha hai to kya karein?",
        a: "Pehle usse theek karwana behtar hota hai, kyunki mismatch aage dikkat deta hai. Aap apne documents hamein dikha lijiye, hum bata denge ki kaunsa record sahi karwana chahiye aur kaise.",
      },
    ],
    related: [
      "/passport-services-dewas/fresh-passport/",
      "/passport-services-dewas/renewal-reissue/",
      "/passport-services-dewas/tatkal/",
      "/passport-services-dewas/",
    ],
  },
  {
    slug: "police-verification-kya-hota-hai",
    path: "/guides/police-verification-kya-hota-hai/",
    service: "passport",
    title: "Police Verification Kya Hota Hai | Iqbal Khan",
    description:
      "Passport police verification kya hota hai, kab hota hai, kya documents ready rakhein aur der kyun lagti hai. Simple Hinglish guide, koi time ka vaada nahi.",
    h1: "Passport police verification kya hota hai",
    hindi: "पासपोर्ट पुलिस वेरिफिकेशन क्या होता है, कब होता है और क्या तैयार रखें",
    intro: [
      "Police verification passport process ka wo hissa hai jo log sabse kam samajh pate hain. Isme kya hota hai, kab hota hai aur kya taiyar rakhna chahiye, ye jaan lene se aap der aur pareshani, dono se kaafi had tak bach sakte hain.",
      "Yahan general jaankari di gayi hai. Verification ka tareeka aur samay case, jagah aur authority par depend karta hai, isliye hum koi time ka vaada nahi karte.",
    ],
    sections: [
      {
        h2: "Police verification kya hota hai",
        paras: [
          "Police verification mein local police aapke diye gaye address, naam aur pehchaan ki jaanch karti hai, aur dekhti hai ki aapke khilaf koi aisa record to nahi jo passport mein rukawat bane. Ye jaanch passport authority ke kehne par hoti hai, aur police ki report authority ke faisle ka ek hissa hoti hai.",
        ],
      },
      {
        h2: "Ye kab hoti hai",
        paras: [
          "Har case mein verification ka time ek jaisa nahi hota. Kuch applications mein verification passport issue hone se pehle hoti hai, aur kuch mein baad mein. Renewal ya re-issue mein bhi zaroorat case ke hisaab se hoti hai. Kaunsa case kaise handle hoga, ye authority tay karti hai, aur aapko jo message ya call aaye usi ke hisaab se chalna chahiye.",
          "Jab verification pehle hoti hai, to uski report ka asar aage ke steps par padta hai. Jab baad mein hoti hai, tab bhi aapko wahi taiyari rakhni chahiye, kyunki details sahi aur consistent honi zaroori hain.",
          "Police aapke address par aa sakti hai, ya kuch cases mein aapko police station bula sakti hai. Isliye application mein diya gaya address aur mobile number bilkul sahi hona chahiye.",
        ],
      },
      {
        h2: "Verification ke time kya ready rakhein",
        paras: [
          "Documents ek jagah rakhein, taaki police ke aane ya bulane par aapko dhundhna na pade.",
        ],
        list: [
          "Application receipt ya ARN ka print",
          "Original address proof aur photo ID",
          "Date of birth proof ke original documents",
          "Purana passport, agar hai",
          "Court case ho to court order aur case ke papers",
          "Chalu mobile number, jis par call ya message aa sake",
        ],
      },
      {
        h2: "Der hone ke aam karan",
        paras: [
          "Verification mein der aksar chhoti baaton se hoti hai. Inme se kai karan aap pehle se taiyari karke kam kar sakte hain.",
        ],
        list: [
          "Address mil nahi raha ya address likhne mein galti",
          "Aap ghar par nahi the aur phone bhi nahi utha",
          "Application ka address aur address proof alag hona",
          "Naam ya details documents se match na karna",
          "Pending case ya purane record ki additional checking",
          "Local level par workload ya procedure, jo aapke control mein nahi hota",
        ],
      },
      {
        h2: "Verification ke dauran kya karein aur kya na karein",
        list: [
          "Poochhe gaye sawalon ka sahi aur seedha jawab dein, jo documents mein likha hai wahi batayein",
          "Pehchaan aur address ke original documents dikhane ke liye tayyar rakhein",
          "Pehle se call ya message aaye to usi time par available rahein",
          "Galat ya adhuri jaankari kabhi na dein, isse application par seedha asar padta hai",
          "Kisi middleman ko verification ke naam par paise na dein",
        ],
      },
      {
        h2: "Agar verification mein dikkat aaye",
        paras: [
          "Agar police ya authority koi additional document ya clarification maange, to jaldi aur sahi jawab dein. Portal par status aur SMS ya email dekhte rahein. Verification ke naam par koi unofficial paise maange, to dena nahi chahiye.",
          "Court case ya purana record hone par apna vakeel aur court order saath rakhein. Final faisla authority ka hota hai. Iqbal Khan Passport Consultant, Dewas aapko batata hai ki aapke case mein kya expect karna hai aur kaunse papers ready rakhne hain, lekin hum verification ki jagah nahi le sakte aur kisi time ka vaada nahi karte.",
        ],
      },
    ],
    faqs: [
      {
        q: "Police verification kitne din mein hoti hai?",
        a: "Iska koi fixed jawab nahi hai. Ye case, address, local police aur authority par depend karta hai, isliye hum koi din nahi bata sakte. Sahi address aur ready documents se der kam ho sakti hai.",
      },
      {
        q: "Kya police verification ke liye police station jaana padta hai?",
        a: "Kai cases mein police aapke address par aati hai, aur kuch mein station bulaya ja sakta hai. Aapko jo call, message ya notice aaye, usi ke hisaab se chalein.",
      },
      {
        q: "Police verification mein dikkat aaye to kya hota hai?",
        a: "Adverse report ya mismatch hone par authority aapse jawab ya extra documents maang sakti hai, ya application par alag faisla le sakti hai. Kya hoga, ye case par depend karta hai. Authority ke message ko ignore na karein aur jaldi sahi documents dein.",
      },
    ],
    related: [
      "/passport-services-dewas/fresh-passport/",
      "/passport-services-dewas/court-case-passport/",
      "/passport-services-dewas/renewal-reissue/",
    ],
  },

  /* 4 ═════════════ NAME OR ADDRESS CHANGE ═════════════ */
  {
    slug: "passport-name-ya-address-change",
    path: "/guides/passport-name-ya-address-change/",
    service: "passport",
    title: "Passport Name ya Address Change Kaise Karein | Iqbal Khan",
    description:
      "Passport mein name ya address change karwana hai? Shaadi, gazette aur address ke proof kaun se lagte hain aur kya le jaana hota hai. Dewas se guidance.",
    h1: "Passport mein name ya address change kaise karein",
    hindi: "पासपोर्ट में नाम या पता बदलने की प्रक्रिया: री-इश्यू और ज़रूरी प्रमाण",
    intro: [
      "Shaadi ke baad naam badalna ho, ya naye ghar mein jaane ke baad address, passport mein ye badlav aam taur par re-issue application ke zariye hote hain. Is guide mein hum samjhate hain ki kya karna padta hai aur kaunse proofs aam taur par chalte hain.",
      "Kaunsa proof accept hoga aur kaunse steps lagenge, ye case par depend karta hai aur rules badal sakte hain. Isliye apply karne se pehle official portal passportindia.gov.in par ek baar confirm kar lein.",
    ],
    sections: [
      {
        h2: "Change kaise hota hai",
        paras: [
          "Passport par details badalne ke liye naya passport nahi banta, balki maujooda passport ka re-issue hota hai. Ismein sabse ahem baat ye hai ki badlav ka sahi proof ho aur naye details har document mein ek jaise hon. Appointment par purane passport ke saath ye proofs dikhane hote hain, aur approve hone par naye details ke saath passport milta hai.",
          "Agar aapka passport expiry ke kareeb hai, to kai cases mein renewal ke saath hi badlav karwa lena aasaan rehta hai, kyunki alag alag application nahi karni padti. Aapke case mein kya sahi rahega, ye portal par dekhein ya hum se puchh lein.",
        ],
      },
      {
        h2: "Naam badalne ke aam cases",
        paras: [
          "Naam badalne mein sabse zaroori baat ye hai ki aapke naye naam ka proof ho, aur baaki ID documents mein bhi naam ek jaisa ho. Isse aage mismatch ki dikkat kam hoti hai.",
          "Kai cases mein affidavit ya aur supporting papers bhi maange ja sakte hain. Kya lagega, ye aapke case aur portal ki current list par depend karta hai. Bachche ka naam badalna ho to parents ke documents aur consent bhi lag sakte hain.",
        ],
        list: [
          "Shaadi ke baad naam ya surname badalna, marriage certificate ke saath",
          "Naam ya spelling sudharna, jab aapke baaki records mein sahi naam ho",
          "Gazette notification, jab naam kanooni taur par badla gaya ho aur portal maange",
          "Shaadi tootne ke baad naam mein badlav, divorce ke papers ke saath",
          "Pati ya patni ka naam add ya hatana, jo case ke hisaab se alag hota hai",
        ],
      },
      {
        h2: "Address badalne ke liye proofs",
        paras: [
          "Naya address bharne ke liye usi address ka proof chahiye. Naya address kisi aur shehar ya state mein ho, to Passport Seva Kendra aur verification ki baatein case ke hisaab se alag ho sakti hain.",
        ],
        list: [
          "Aadhaar, jis par naya address update ho",
          "Recent bijli, paani ya gas ka bill",
          "Rent agreement, jahan portal ki list mein ho",
          "Portal ki list ke aur accepted documents",
        ],
      },
      {
        h2: "Appointment par kya le jayein",
        list: [
          "Purana original passport",
          "Purane passport ke pehle aur aakhri page ki copy, aur jin pages par observation ya endorsement ho",
          "Badlav ka proof: marriage certificate, gazette ya naye address ka proof",
          "Application receipt ya ARN ka print",
          "ID aur address ke original documents",
        ],
      },
      {
        h2: "Aam galtiyan aur madad",
        paras: [
          "Sabse aam galti ye hoti hai ki naam badal gaya par baaki documents purane naam par hi rah gaye, ya address proof naye address ka nahi hai. Aise mismatch se application mein query aa sakti hai. Apply karne se pehle sab documents ek jaise kar lein, aur jahan PAN mein bhi naam badalna ho wahan use bhi saath mein plan karein.",
          "Hum sarkari office nahi hain, lekin Iqbal Khan Passport Consultant, Dewas aapke case ke hisaab se sahi proofs chunne aur re-issue application ki taiyari mein madad karta hai. Final faisla passport authority ka hota hai.",
        ],
      },
    ],
    faqs: [
      {
        q: "Shaadi ke baad passport mein naam kaise badlein?",
        a: "Re-issue application mein naya naam bharte hain aur marriage certificate jaisa proof dete hain. Exact documents portal par confirm karein, kyunki case ke hisaab se alag ho sakte hain.",
      },
      {
        q: "Kya passport mein address badalna zaroori hai?",
        a: "Ye case par depend karta hai. Passport par purana address hone se kuch kaamon mein mismatch ho sakta hai, isliye kai log renewal ke samay ya alag se address update karwate hain. Aapke case mein kya zaroori hai, ye official portal par dekhein.",
      },
      {
        q: "Kya naam badalne ke liye naya passport banwana padta hai?",
        a: "Naam badalne ke liye aam taur par re-issue application karni hoti hai, jisme naye details ke saath passport issue hota hai. Process aur official fee portal par dekh kar hi aage badhein.",
      },
    ],
    related: [
      "/passport-services-dewas/renewal-reissue/",
      "/passport-services-dewas/tatkal/",
      "/pan-card-services-dewas/correction/",
      "/passport-services-dewas/",
    ],
  },

  /* 5 ═════════════ REJECT OR DELAY ═════════════ */
  {
    slug: "passport-reject-ya-delay-hone-ke-karan",
    path: "/guides/passport-reject-ya-delay-hone-ke-karan/",
    service: "passport",
    title: "Passport Reject ya Delay Hone Ke Karan | Iqbal Khan",
    description:
      "Passport delay ya reject kyun hota hai? Mismatch, galat DOB proof, incomplete documents, police report aur court case ke karan, aur bachne ke tarike.",
    h1: "Passport reject ya delay hone ke karan aur bachne ke tarike",
    hindi: "पासपोर्ट में देरी या अस्वीकृति के आम कारण और उनसे बचने के तरीके",
    intro: [
      "Passport mein delay ya refusal ka sabse bada karan aam taur par koi chhoti galti hoti hai, jaise naam ki spelling alag hona ya galat proof lagana. Kuch karan aapke control mein nahi hote, lekin kai karan sahi taiyari se roke ja sakte hain.",
      "Yahan general karan diye gaye hain. Kisi bhi application ka faisla passport authority karti hai, aur koi consultant ya agent approval ya date ki guarantee nahi de sakta.",
    ],
    sections: [
      {
        h2: "Delay aur reject mein fark",
        paras: [
          "Delay ka matlab aam taur par ye hota hai ki application abhi process mein hai, par kisi step par ruki hui hai, jaise query, verification ya documents ka intezaar. Reject ya refusal mein authority application par negative faisla leti hai aur uska karan batati hai.",
          "Dono mein pehla kadam ek hi hai: authority ka message dhyan se padhna aur samajhna ki asli karan kya hai.",
        ],
      },
      {
        h2: "Details ka mismatch",
        paras: [
          "Naam, date of birth, parents ke naam ya address agar form aur documents mein alag hon, to authority query bhej sakti hai ya application rok sakti hai. Chhoti spelling ka fark bhi dikkat bana sakta hai.",
          "Form submit karne se pehle har detail ko apne documents se ek-ek karke compare karein.",
        ],
      },
      {
        h2: "Galat ya kamzor documents",
        list: [
          "Date of birth ka aisa proof jo aapke case mein accept nahi hota",
          "Address proof jo aapke apne naam par nahi ya purana address dikhata hai",
          "Dhundhle, kate hue ya adhure scans",
          "Zaroori document chhoot jana, jaise purana passport ya consent form",
          "Appointment par originals saath na le jana",
        ],
      },
      {
        h2: "Police verification aur record se jude karan",
        paras: [
          "Pending court case hone par aam taur par bina court ki permission ke passport nahi milta, isliye court order pehle taiyar rakhein.",
        ],
        list: [
          "Verification mein address na milna ya aapse sampark na ho pana",
          "Adverse police report",
          "Pending court case ya FIR, jahan court ki permission zaroori ho",
          "Pehle ke passport par koi objection ya impound ka record",
        ],
      },
      {
        h2: "Authority ke message ko ignore karna",
        paras: [
          "Kai baar authority email, SMS ya portal par query bhejti hai. Agar aap time par jawab nahi dete ya galat document dete hain, to application aur lambi chal sakti hai. Portal par status aur apna email ya SMS regular dekhte rahein. Appointment miss karna bhi delay ka karan ban sakta hai.",
        ],
      },
      {
        h2: "Delay se kaise bachein",
        list: [
          "Apply karne se pehle documents ki official list se apna case match karein",
          "Sab documents mein naam aur date of birth ek jaise rakhein",
          "Saaf scans upload karein aur originals saath le jayein",
          "Pending case ho to court order ke saath apply karein",
          "Travel se bahut pehle apply karein, aakhri waqt ke bharose na rahein",
          "Query aaye to turant jawab dein",
        ],
        paras: [
          "Agar application reject ya refuse ho jaye, to authority ka letter ya message dhyan se padhein. Usme karan aur aage ka official route likha hota hai. Iqbal Khan Passport Consultant, Dewas aapka case dekhkar batata hai ki kaunsi cheez pehle theek karni chahiye, lekin hum sarkari office nahi hain aur approval ya date ki guarantee nahi dete.",
        ],
      },
    ],
    faqs: [
      {
        q: "Passport reject hone ke kya karan hote hain?",
        a: "Aam karan hain details ka mismatch, galat ya adhura document, date of birth proof ka accept na hona, adverse police report aur pending court case. Aapke case mein exact karan authority ke letter ya message mein likha hota hai.",
      },
      {
        q: "Passport mein delay ho raha hai to kya karein?",
        a: "Pehle portal par status aur apna email ya SMS dekhein ki koi query to nahi aayi. Query ho to jaldi jawab dein. Query na ho to portal par diye gaye official helpline ya grievance option ka use karein. Kisi fixed time ka vaada koi nahi kar sakta.",
      },
      {
        q: "Kya pending court case se passport reject ho jata hai?",
        a: "Aam taur par bina court ki permission ke passport nahi milta, isliye pending case mein court order ke saath apply karna hota hai. Final faisla passport authority ka hota hai, aur result ki guarantee koi nahi de sakta.",
      },
    ],
    related: [
      "/passport-services-dewas/court-case-passport/",
      "/passport-services-dewas/fresh-passport/",
      "/passport-services-dewas/renewal-reissue/",
    ],
  },

  /* 6 ═════════════ FAKE AGENTS AND WEBSITES ═════════════ */
  {
    slug: "fake-passport-agent-aur-website-se-kaise-bachein",
    path: "/guides/fake-passport-agent-aur-website-se-kaise-bachein/",
    service: "passport",
    title: "Fake Passport Agent se Kaise Bachein | Iqbal Khan",
    description:
      "Fake passport website aur agent se kaise bachein? Official portal, official fee vs service charge, red flags aur check karne ke tarike, Hinglish mein.",
    h1: "Fake passport agent aur website se kaise bachein",
    hindi: "फर्जी पासपोर्ट वेबसाइट और एजेंट से कैसे बचें: आधिकारिक पोर्टल, फीस और चेतावनी के संकेत",
    intro: [
      "Passport ke naam par kai fake websites aur agents active hain jo fast passport ya pakke appointment ka lalach dete hain. Inse bachna mushkil nahi hai agar aap kuch basic baatein jaan lein. Is guide mein hum official portal, official fee aur agent ki service charge ka fark, aur red flags samjhate hain.",
      "Yaad rakhein ki passport sirf sarkari authority issue karti hai, aur application official portal passportindia.gov.in par hi hoti hai. Koi bhi consultant, hum bhi, sarkari office nahi hain.",
    ],
    sections: [
      {
        h2: "Official portal kaunsa hai",
        paras: [
          "Official Passport Seva portal ka address passportindia.gov.in hai. Address mein gov.in zaroor dekhein. Kuch fake sites milte julte naam aur sarkari logo jaisa design use karti hain. Search result ya ad mein sabse upar dikhne wali site official ho, ye zaroori nahi hai. Address bar mein spelling dekhein, ya seedha browser mein portal ka address type karein.",
          "Passport ke naam par aane wale SMS, WhatsApp link ya call par bharosa na karein. Kisi link par click karne ya app download karne se pehle address aur publisher ka naam check kar lein.",
        ],
      },
      {
        h2: "Official fee aur agent ki service charge",
        paras: [
          "Official fee wo hai jo sarkar tay karti hai aur jo aap portal ke payment page par pay karte hain. Agent ya consultant ki service charge uski apni fees hoti hai, jo form bharne, documents check karne aur guidance jaisi madad ke liye li jati hai. Dono alag hone chahiye, aur agent ko dono alag batane chahiye.",
        ],
        list: [
          "Official fee: portal par pay hoti hai, application type par depend karti hai aur uski receipt milti hai",
          "Service charge: consultant ki apni fee, jo kaam shuru karne se pehle batayi jani chahiye",
          "Fee ke naam par jo bhi rakam maangi jaye aur receipt na mile, uspar sawal karein",
        ],
      },
      {
        h2: "Red flags jin par dhyan dein",
        paras: [
          "Appointment slots portal par authority control karti hai. Koi bhi insaan slot ki guarantee nahi de sakta.",
        ],
        list: [
          "Guaranteed appointment ya guaranteed passport date ka vaada",
          "Advance paisa maangna aur receipt na dena",
          "Official fee kisi personal UPI ya bank account mein maangna",
          "Aapse OTP ya password maangna",
          "Sarkari officer se jaan-pehchaan ka dava",
          "Bahut kam samay mein sab kuch ho jane ka vaada",
        ],
      },
      {
        h2: "Kaise check karein",
        list: [
          "Address bar mein passportindia.gov.in dekhein",
          "Payment sirf portal ke payment page par karein, kisi personal account mein nahi",
          "Application ka ARN aur payment receipt khud portal par login karke verify karein",
          "Agent se office ka pata, phone number aur service charge ka breakup puchhein",
          "Apne documents kisi ko bhejne se pehle dekhein ki kisko aur kyun bhej rahe hain",
          "Logon ke experience aur reviews dekhein",
        ],
      },
      {
        h2: "Agar dhokha ho jaye",
        paras: [
          "Agar aapne kisi fake site ya agent ko paisa de diya ho, to payment ka screenshot aur saari details sambhal kar rakhein. Apne bank ko turant batayein aur National Cyber Crime Reporting Portal ya 1930 helpline par report karein. Jitni jaldi report hogi, utna behtar hai.",
          "Hamare office mein official fee aap khud portal par pay karte hain, aur hamari service charge kaam shuru karne se pehle alag se batayi jati hai. Hum sarkari office nahi hain, aur appointment ya delivery date ki guarantee nahi dete.",
        ],
      },
    ],
    faqs: [
      {
        q: "Passport ki official website kaunsi hai?",
        a: "Official Passport Seva portal passportindia.gov.in hai. Address mein gov.in dekh kar hi aage badhein. Isse milte julte naam wali baaki sites official nahi hain.",
      },
      {
        q: "Agent ko passport ke liye kitna paisa dena chahiye?",
        a: "Official fee portal par tay hoti hai, aur agent ki service charge alag hoti hai jo agent apne hisaab se tay karta hai. Isliye koi ek fixed amount nahi bata sakte. Dono ka breakup message ya likhit mein lein, aur receipt zaroor lein.",
      },
      {
        q: "Kya koi agent pakka appointment dila sakta hai?",
        a: "Nahi. Appointment slots portal par authority control karti hai. Jo agent guaranteed slot ka vaada kare, usse savdhan rahein.",
      },
    ],
    related: [
      "/passport-services-dewas/",
      "/passport-services-dewas/fresh-passport/",
      "/passport-services-dewas/renewal-reissue/",
      "/passport-services-dewas/tatkal/",
    ],
  },

  /* 7 ═════════════ PAN DOCUMENTS LIST ═════════════ */
  {
    slug: "pan-card-documents-list",
    path: "/guides/pan-card-documents-list/",
    service: "pan-card",
    title: "PAN Card Documents List | Iqbal Khan",
    description:
      "PAN card ke liye kaun se documents chahiye? New PAN, correction aur e-PAN ke liye identity, address aur date of birth proof ki checklist, Hinglish mein.",
    h1: "PAN card ke liye kaun se documents chahiye",
    hindi: "पैन कार्ड के लिए ज़रूरी दस्तावेज़ों की सूची: पहचान, पता और जन्म तिथि प्रमाण",
    intro: [
      "PAN card banwane ya correction karwane se pehle sabse zyada pucha jane wala sawal yahi hai: kaun se documents lagenge. Jawab is par depend karta hai ki aapko naya PAN chahiye, kisi detail mein correction, ya duplicate.",
      "General list yahan di gayi hai. Exact document kis case mein chalega, ye official portal (protean, UTIITSL ya incometax.gov.in, aap jahan se apply kar rahe hain) par apni category ke hisaab se zaroor confirm kar lein.",
    ],
    sections: [
      {
        h2: "Proof of identity",
        paras: [
          "Identity proof wahi naam dikhana chahiye jo aap application mein bhar rahe hain. Spelling mein chhota sa fark bhi aage dikkat de sakta hai.",
        ],
        list: [
          "Aadhaar card",
          "Voter ID ya driving licence, jahan portal ki list mein ho",
          "Portal ki list ke baaki accepted documents",
        ],
      },
      {
        h2: "Proof of address aur date of birth",
        paras: [
          "Address proof mein current address hona chahiye. Date of birth ka proof sabse sensitive document hai, kyunki PAN aur Aadhaar ki date mismatch hone par verification atak sakti hai.",
        ],
        list: [
          "Aadhaar card, aam taur par dono (identity aur address) ke liye chalta hai",
          "Bijli, paani ya gas ka bill, aam taur par recent",
          "Birth certificate ya school leaving certificate, date of birth ke liye",
        ],
      },
      {
        h2: "Photo, signature aur instant e-PAN",
        paras: [
          "Physical PAN card ke liye photo aur signature chahiye, jo portal ke size aur format rules follow karte hon. Instant e-PAN ek alag, tez route hai jo sabke liye available nahi hota.",
        ],
        list: [
          "Passport-size photograph aur signature, physical card ke liye",
          "Aadhaar-linked, active mobile number, instant e-PAN ke liye",
          "Correction ke liye: jo detail badalni hai uska supporting proof, jaise naam ke liye marriage certificate",
        ],
      },
      {
        h2: "Documents ready karne ke tips",
        paras: [
          "Sabse zaroori baat ye hai ki naam aur date of birth Aadhaar se bilkul match karein, kyunki mismatch application mein sabse zyada dikkat deta hai. Scans saaf hon aur size limit ke andar hon.",
          "Agar samajh na aaye ki aapke case mein kya lagega, to Iqbal Khan Passport Consultant, Dewas aapko case ke hisaab se checklist banane mein madad karta hai. Hum sarkari office nahi hain, aur final faisla income tax authority ka hota hai.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kya PAN card ke liye sirf Aadhaar kaafi hai?",
        a: "Zyada tar cases mein Aadhaar identity aur address, dono proof ke taur par chalta hai, lekin date of birth ke liye alag document bhi maanga ja sakta hai. Aapke case mein kya lagega, ye official portal par apni category chun kar confirm karein.",
      },
      {
        q: "Correction ke liye kaun se documents chahiye?",
        a: "Jo bhi detail badalni hai, uska supporting proof chahiye, jaise naam ke liye marriage certificate ya date of birth ke liye birth certificate. Baaki existing PAN details aur identity proof bhi saath lagte hain.",
      },
      {
        q: "Instant e-PAN ke liye alag se document bhejne padte hain kya?",
        a: "Nahi, ye Aadhaar aur uske saath linked mobile number se hota hai, agar aap is route ke liye eligible hon. Eligible na hone par standard application ka route lena padta hai, jisme upar di gayi list ke documents lagte hain.",
      },
    ],
    related: ["/pan-card-services-dewas/", "/pan-card-services-dewas/correction/"],
  },

  /* 8 ═════════════ E-PAN DOWNLOAD ═════════════ */
  {
    slug: "e-pan-card-download-kaise-kare",
    path: "/guides/e-pan-card-download-kaise-kare/",
    service: "pan-card",
    title: "e-PAN Card Download Kaise Kare | Iqbal Khan",
    description:
      "e-PAN card download kaise karein? Instant e-PAN aur protean/NSDL se bana PAN, dono ke liye official steps aur common dikkatein, simple Hinglish mein.",
    h1: "e-PAN card download kaise karein",
    hindi: "ई-पैन कार्ड डाउनलोड करने का तरीका: इंस्टेंट ई-पैन और सामान्य आवेदन, दोनों के लिए",
    intro: [
      "e-PAN PAN card ka official digital version hai aur zyada tar jagah physical card jaisa hi valid hota hai. Dikkat tab hoti hai jab pata nahi chalta ki download kahan se karna hai, kyunki ye is par depend karta hai ki aapka PAN kaise bana tha.",
      "Yahan general route batayein gaye hain. Exact page aur steps portal time ke saath badal sakte hain, isliye official website par jaakar hi aage badhein.",
    ],
    sections: [
      {
        h2: "Pehle ye confirm karein: aapka PAN kaise bana tha",
        paras: [
          "Agar aapne Income Tax e-filing portal se instant e-PAN liya tha (sirf Aadhaar ke through), to use wahin se download karte hain. Agar aapka PAN protean (pehle NSDL) ya UTIITSL ke through bana tha, to download bhi usi portal se hota hai. Dono route alag hain, isliye pehle apna case confirm kar lein.",
        ],
      },
      {
        h2: "Instant e-PAN download karna",
        paras: [
          "Income Tax e-filing portal par instant e-PAN ka option milta hai, jahan PAN ya Aadhaar number, date of birth aur OTP se verify karke PDF download hoti hai.",
        ],
        list: [
          "Income Tax e-filing website par jaayein aur instant e-PAN ka section dhundhein",
          "PAN ya Aadhaar number aur date of birth bharein",
          "Aadhaar-linked mobile number par aaya OTP enter karein",
          "PDF download karein, jo password-protected hoti hai",
        ],
      },
      {
        h2: "Protean ya UTIITSL se bana PAN download karna",
        paras: [
          "In portals par PAN number ya acknowledgement number, date of birth aur captcha se verify hota hai, uske baad OTP bhi lag sakta hai.",
        ],
        list: [
          "Protean ya UTIITSL ki official website par e-PAN download section dhundhein",
          "PAN ya acknowledgement number aur date of birth bharein",
          "OTP ya captcha se verify karein",
          "PDF download karein",
        ],
      },
      {
        h2: "PDF nahi khul raha ya aam dikkatein",
        paras: [
          "e-PAN ki PDF password-protected hoti hai, aam taur par date of birth DDMMYYYY format mein password hota hai, lekin exact format portal par hi confirm karein. Kuch downloads free hote hain aur kuch samay ya count ki limit ke baad chhoti si fee lag sakti hai, jo amount authority tay karti hai.",
          "Agar OTP nahi aa raha, to check karein ki mobile number Aadhaar se linked aur active hai ya nahi. Dikkat bani rahe to Iqbal Khan Passport Consultant, Dewas aapko sahi portal aur steps batane mein madad karta hai.",
        ],
      },
    ],
    faqs: [
      {
        q: "e-PAN download karne ke liye konsi website sahi hai?",
        a: "Ye is par depend karta hai ki aapka PAN kaise bana tha: Aadhaar-based instant e-PAN Income Tax e-filing portal se, aur protean ya UTIITSL se bana PAN unki apni website se download hota hai. Confused hon to hum apna case samjhakar sahi portal batane mein madad karte hain.",
      },
      {
        q: "e-PAN download karna free hai kya?",
        a: "Zyada tar cases mein issue hone ke kuch samay tak free hota hai, uske baad chhoti si fee lag sakti hai. Exact amount aur time limit badal sakte hain, isliye official portal par hi confirm karein.",
      },
      {
        q: "e-PAN ki PDF ka password kya hota hai?",
        a: "Aam taur par date of birth DDMMYYYY format mein hoti hai, lekin ye bhi portal ke hisaab se thoda alag ho sakta hai. Download page par diya gaya instruction follow karein.",
      },
    ],
    related: ["/pan-card-services-dewas/", "/pan-card-services-dewas/correction/"],
  },

  /* 9 ═════════════ DL DOCUMENTS LIST ═════════════ */
  {
    slug: "driving-licence-documents-list",
    path: "/guides/driving-licence-documents-list/",
    service: "driving-licence",
    title: "Driving Licence Documents List | Iqbal Khan",
    description:
      "Driving licence ke liye kaun se documents chahiye? Learner's, permanent, renewal aur duplicate DL ki checklist, simple Hinglish mein, Dewas se.",
    h1: "Driving licence ke liye kaun se documents chahiye",
    hindi: "ड्राइविंग लाइसेंस के लिए ज़रूरी दस्तावेज़ों की सूची: लर्नर से लेकर रिन्यूअल तक",
    intro: [
      "Driving licence ka document kaunsa lagega, ye is par depend karta hai ki aap kis stage par hain: pehli baar learner's licence, usse permanent licence, ya expiry ke baad renewal aur duplicate. Is guide mein sab stages ki list ek jagah di gayi hai.",
      "Exact list RTO aur state ke hisaab se thodi alag ho sakti hai. Apply karne se pehle official Sarathi portal (sarathi.parivahan.gov.in) par apni state aur category ki current list ek baar zaroor dekh lein.",
    ],
    sections: [
      {
        h2: "Learner's licence ke liye",
        list: [
          "Proof of age",
          "Proof of address",
          "Passport-size photographs",
          "Medical declaration, jahan vehicle category ke hisaab se lagu ho",
        ],
      },
      {
        h2: "Permanent licence ke liye",
        paras: [
          "Permanent licence, learner's licence ke upar banta hai, isliye uske documents bhi saath lagte hain.",
        ],
        list: [
          "Learner's licence (valid honi chahiye)",
          "Proof of address, agar learner's licence banne ke baad badla ho",
          "Passport-size photographs",
        ],
      },
      {
        h2: "Renewal ke liye",
        list: [
          "Existing driving licence",
          "Proof of address",
          "Passport-size photographs",
          "Medical declaration, jahan lagu ho (jaise ek certain age ke baad)",
        ],
      },
      {
        h2: "Duplicate ya address change ke liye",
        list: [
          "Lost ya damaged licence ki details",
          "Police complaint ya affidavit, jahan portal maange",
          "Address change ke liye naye address ka proof",
        ],
      },
      {
        h2: "Documents ready karne ke tips",
        paras: [
          "Naam aur address application aur proof mein ek jaise hone chahiye. Photos clear aur recent hon. Kisi bhi stage par apply karne se pehle official portal par list ek baar confirm kar lein.",
          "Apna case samajh na aaye to Iqbal Khan Passport Consultant, Dewas aapko stage ke hisaab se checklist banane mein madad karta hai. Hum sarkari office nahi hain, aur final faisla transport department ka hota hai.",
        ],
      },
    ],
    faqs: [
      {
        q: "Learner's aur permanent licence ke documents alag hote hain kya?",
        a: "Permanent licence ke liye learner's licence hi sabse zaroori document hota hai, uske saath address proof aur photos lagte hain. Agar address badal gaya ho to naya proof bhi dena padta hai.",
      },
      {
        q: "Renewal ke liye medical certificate hamesha lagta hai kya?",
        a: "Nahi, ye vehicle category aur applicant ki age par depend karta hai. Kai cases mein ek certain age ke baad medical declaration maangi jaati hai. Apna case portal par confirm kar lein.",
      },
      {
        q: "Licence kho gaya ho to original licence ke bina bhi kaam ho sakta hai kya?",
        a: "Haan, duplicate application mein lost licence ki details aur aam taur par police complaint ya affidavit chahiye, original ki zaroorat nahi hoti. Exact requirement state ke hisaab se thodi alag ho sakti hai.",
      },
    ],
    related: ["/driving-licence-services-dewas/", "/driving-licence-services-dewas/learners-licence/", "/driving-licence-services-dewas/renewal-duplicate/"],
  },

  /* 10 ═════════════ RTO VISIT AND TEST ═════════════ */
  {
    slug: "rto-visit-aur-driving-test-ki-taiyari",
    path: "/guides/rto-visit-aur-driving-test-ki-taiyari/",
    service: "driving-licence",
    title: "RTO Visit aur Driving Test Ki Taiyari | Iqbal Khan",
    description:
      "RTO visit aur driving test mein kya hota hai, kya saath le jayein aur aam galtiyan. Learner's test ho ya permanent licence test, Dewas se guidance.",
    h1: "RTO visit aur driving test ki taiyari kaise karein",
    hindi: "आरटीओ विज़िट और ड्राइविंग टेस्ट की तैयारी: क्या साथ ले जाएँ और क्या उम्मीद करें",
    intro: [
      "Online application ke baad driving licence process mein jo ek step khud jaakar karna padta hai, wo hai RTO ya authorised centre ki visit: learner's test ho ya permanent licence ka driving test. Yahan taiyari hi ek visit mein kaam poora karne ki sabse badi chaabi hai.",
      "Ye general jaankari hai. Exact process RTO aur state ke hisaab se thoda alag ho sakta hai, isliye apne slot confirmation mein diye gaye instructions zaroor padhein.",
    ],
    sections: [
      {
        h2: "Visit se pehle kya check karein",
        list: [
          "Application aur documents mein naam, date of birth aur address ek jaise hon",
          "Learner's licence valid ho, agar permanent licence ke liye test dene jaa rahe hain",
          "Slot ka din, samay aur location confirm kar lein",
          "Jis vehicle se test dena hai, wo chalu haalat mein ho",
        ],
      },
      {
        h2: "Saath kya le jayein",
        list: [
          "Slot booking ya application ki receipt ka print",
          "Address aur age proof ke original documents",
          "Learner's licence, permanent licence test ke liye",
          "Medical declaration, jahan lagu ho",
        ],
      },
      {
        h2: "RTO mein kya hota hai",
        paras: [
          "Learner's test aam taur par computer-based hota hai, jisme road signs aur traffic rules ke sawal aate hain. Permanent licence ke test mein ek official aapke saath gaadi mein basic driving skills check karta hai, jaise control, parking aur signals.",
          "Dono mein pass hone ka ek minimum score ya standard hota hai, jo official rules tay karte hain. Pass hone ke baad licence process aage badhta hai, aur fail hone par dobara slot book karna padta hai.",
        ],
      },
      {
        h2: "Aam galtiyan jo test rok deti hain",
        list: [
          "Road signs aur rules revise kiye bina test par pahunchna",
          "Original documents ke bajay sirf photocopy le jaana",
          "Learner's licence expire ho chuki hona",
          "Der se pahunchna ya slot time miss kar dena",
        ],
      },
      {
        h2: "Taiyari mein hum kaise madad karte hain",
        paras: [
          "Hum aapke documents pehle check karte hain, batate hain test ke liye kya revise karna hai aur slot booking mein guide karte hain. Actual test dena aapko khud hota hai, koi aur aapki jagah nahi de sakta.",
          "Hum sarkari office nahi hain, aur test pass hoga ya nahi, ye transport department tay karta hai. Agar aap chahte hain ki taiyari mein koi aapke saath ho, to Dewas mein hum se WhatsApp par baat kar sakte hain.",
        ],
      },
    ],
    faqs: [
      {
        q: "Driving test mein kya kya puchha ya check kiya jata hai?",
        a: "Learner's test mein road signs aur traffic rules ke sawal aate hain, computer par. Permanent licence ke test mein ek official gaadi mein basic driving skills, jaise control aur parking, check karta hai.",
      },
      {
        q: "Test fail ho jaye to kya hota hai?",
        a: "Dobara slot book karna padta hai aur phir se test dena hota hai. Kitne dinon baad dobara try kar sakte hain, ye official rules tay karte hain.",
      },
      {
        q: "Kya koi aur meri jagah test de sakta hai?",
        a: "Nahi. Test khud dena zaroori hai, kyunki licence aapke naam par issue hota hai aur identity verify ki jaati hai.",
      },
    ],
    related: ["/driving-licence-services-dewas/learners-licence/", "/driving-licence-services-dewas/renewal-duplicate/", "/driving-licence-services-dewas/"],
  },
];

export const getGuide = (slug) => GUIDES.find((g) => g.slug === slug);
