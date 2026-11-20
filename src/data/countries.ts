export interface CountryData {
  slug: string;
  shortCode: string;
  name: string;
  flag: string;
  currency: string;
  symbol: string;
  timezones: string[];
  heroImage: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  listeningExplanation: string;
  situations: string[];
  tier1CitySlugs: string[];
  tier2CitySlugs: string[];
  tier3CitySlugs: string[];
  faqs: { q: string; a: string }[];
  emergencyDisclaimer: string;
}

export const COUNTRIES_DATA: CountryData[] = [
  {
    slug: "united-states",
    shortCode: "us",
    name: "United States",
    flag: "🇺🇸",
    currency: "USD",
    symbol: "$",
    timezones: ["EST (UTC-5)", "CST (UTC-6)", "MST (UTC-7)", "PST (UTC-8)"],
    heroImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1200",
    tagline: "Human Emotional Support & Confidential Peer Listening in the USA",
    metaTitle: "Someone to Talk to Online in USA — Human Listening Service | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in the US? Connect with a compassionate human listener. Real people, real conversations, no judgment. Private 1-on-1 support via WhatsApp.",
    intro: "Life in fast-paced American cities often brings an unexpected sense of profound isolation. From living alone in high-rent apartments in New York or San Francisco to experiencing quiet breakups late at night in Texas or California, having someone who listens without judgment provides immediate comfort.",
    listeningExplanation: "Haven offers non-clinical human peer listening. We are not psychiatric doctors, clinicians, or medical providers. Our service is designed for everyday adults navigating loneliness, relationship stress, heartbreak, divorce, or emotional exhaustion who need an attentive, empathetic sounding board without expensive therapy fees or clinical labels.",
    situations: [
      "Loneliness from living alone in large metropolitan centers",
      "Late-night overthinking and insomnia after midnight",
      "Grief and heartbreak following a sudden relationship breakup",
      "Marital tension, separation decisions, and divorce recovery",
      "Tech career burnout, imposter syndrome, and corporate pressure",
      "Family conflicts and feeling misunderstood by childhood circles"
    ],
    tier1CitySlugs: ["new-york", "los-angeles", "chicago", "san-francisco", "seattle", "boston"],
    tier2CitySlugs: ["austin", "dallas", "houston", "miami", "denver", "atlanta"],
    tier3CitySlugs: ["portland", "raleigh", "nashville"],
    faqs: [
      {
        q: "How does Haven differ from licensed therapy in the US?",
        a: "Haven provides non-clinical human peer listening. While therapy focuses on medical diagnoses and treatment plans, Haven offers a compassionate, judgment-free space to speak your mind freely without insurance paperwork, waitlists, or clinical files."
      },
      {
        q: "What US timezones are available for conversations?",
        a: "We support Eastern (EST/EDT), Central (CST/CDT), Mountain (MST/MDT), and Pacific (PST/PDT) timezones. You can pick your convenient slot in our booking form."
      },
      {
        q: "How does the WhatsApp conversation work?",
        a: "After you submit your request, our coordinator connects with you on WhatsApp (+91 8810381949). You will be paired with a dedicated human listener for a private, encrypted 1-on-1 chat."
      },
      {
        q: "Is Haven an emergency crisis hotline?",
        a: "No. Haven is non-clinical emotional listening. If you are in immediate physical danger, severe mental crisis, or experiencing thoughts of self-harm, please dial 988 (the US Suicide & Crisis Lifeline) or 911 immediately."
      }
    ],
    emergencyDisclaimer: "Haven is a non-clinical human peer listening service. If you are experiencing an acute mental health emergency or thoughts of self-harm, please call 988 (Suicide & Crisis Lifeline) or 911."
  },
  {
    slug: "united-kingdom",
    shortCode: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    symbol: "£",
    timezones: ["GMT / BST (UTC+0 / UTC+1)"],
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
    tagline: "Human Listening Service & Empathetic Peer Support in the UK",
    metaTitle: "Someone to Talk to Online UK — Human Listening & Emotional Support | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in the UK? Connect with a compassionate human listener. Real people, real conversations, no judgment. Private 1-on-1 support for London, Manchester, and nationwide via WhatsApp.",
    intro: "British culture frequently encourages us to keep our feelings bottled up, but carrying heavy grief, relationship conflict, or silent loneliness is exhausting. Whether you are in London, Manchester, Edinburgh, or a quiet village, Haven gives you a confidential space to speak openly without shame.",
    listeningExplanation: "NHS talking therapies in the UK often have months-long waiting lists, while many people do not need medical psychiatric treatment—they simply need someone patient to talk to. Haven provides an immediate, safe, and confidential human connection right when you need to be heard.",
    situations: [
      "Metropolitan loneliness and feeling disconnected in shared flats",
      "Winter darkness and seasonal emotional low periods",
      "Navigating painful breakups, divorce, or legal separation",
      "Workplace burnout in corporate, creative, or healthcare sectors",
      "Family relationship tension and feeling unseen by relatives",
      "Late-night overthinking when friends are unavailable"
    ],
    tier1CitySlugs: ["london", "manchester", "birmingham"],
    tier2CitySlugs: ["edinburgh", "bristol", "leeds", "glasgow", "liverpool"],
    tier3CitySlugs: ["cardiff", "nottingham", "sheffield"],
    faqs: [
      {
        q: "How does Haven compare to NHS services?",
        a: "Haven offers non-clinical peer support with zero waiting lists. We do not provide clinical psychiatric prescriptions, but rather a warm, confidential human ear."
      },
      {
        q: "What hours are available for UK residents?",
        a: "We accommodate morning, afternoon, and late-night sessions across GMT and BST hours."
      },
      {
        q: "Is Haven an emergency service?",
        a: "No. If you are in immediate danger or acute mental crisis, please contact Samaritans at 116 123, call 111, or dial 999 in an emergency."
      }
    ],
    emergencyDisclaimer: "Haven is non-clinical human listening. If you are in crisis, please contact the Samaritans at 116 123 or call 999."
  },
  {
    slug: "canada",
    shortCode: "ca",
    name: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    symbol: "C$",
    timezones: ["Eastern (UTC-5)", "Central (UTC-6)", "Mountain (UTC-7)", "Pacific (UTC-8)"],
    heroImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200",
    tagline: "Empathetic Human Emotional Support Across Canadian Cities",
    metaTitle: "Someone to Talk to Online Canada — Human Emotional Support | Haven",
    metaDescription: "Feeling lonely, isolated, or heartbroken in Canada? Connect with an attentive human listener. Real people, real conversations, no judgment. Private 1-on-1 support for Toronto, Vancouver, Montreal, and Calgary.",
    intro: "Canada's vast geography, cold winter freeze, and high cost of living in major centers like Toronto and Vancouver can leave individuals feeling deeply isolated. Having a dedicated person who listens without judgment creates an immediate sense of relief.",
    listeningExplanation: "We provide respectful, confidential peer conversations. Our listeners are not clinical therapists, which means there are no formal diagnostic questionnaires or clinical files. Just real, genuine human support.",
    situations: [
      "Sub-zero winter isolation and seasonal affective struggles",
      "High rent, housing stress, and financial anxiety",
      "Immigrant and relocation loneliness far from family roots",
      "Heartbreak, post-breakup loneliness, and marital separation",
      "Academic and professional performance pressure"
    ],
    tier1CitySlugs: ["toronto", "vancouver", "montreal"],
    tier2CitySlugs: ["calgary", "ottawa", "edmonton"],
    tier3CitySlugs: ["halifax", "victoria", "saskatoon"],
    faqs: [
      {
        q: "How do Canadian timezones work for appointments?",
        a: "Our system coordinates slots for Eastern, Central, Mountain, and Pacific times, ensuring prompt availability."
      },
      {
        q: "Is this service confidential?",
        a: "Yes, 100%. What you share in your WhatsApp conversation stays strictly private."
      }
    ],
    emergencyDisclaimer: "Haven is not a medical crisis line. For emergency mental health support in Canada, call or text 988."
  },
  {
    slug: "australia",
    shortCode: "au",
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    symbol: "A$",
    timezones: ["AEST / AEDT (UTC+10/11)", "ACST (UTC+9:30)", "AWST (UTC+8)"],
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    tagline: "Human Emotional Listening & Compassionate Support in Australia",
    metaTitle: "Someone to Talk to Online Australia — Human Listening Service | Haven",
    metaDescription: "Feeling lonely, heartbroken, or stressed in Australia? Connect with an attentive human listener. Real people, real conversations, no judgment. Private support for Sydney, Melbourne, Brisbane, and Perth.",
    intro: "Australia's major coastal cities boast beautiful outdoor lifestyles, yet urban loneliness and relationship strain affect millions. From Sydney's intense pace to Perth's geographical distance, having someone to unburden your thoughts to brings peace of mind.",
    listeningExplanation: "Haven offers safe, accessible peer listening. We give you full human presence without clinical checklists, making emotional relief approachable whenever you feel stuck or invisible.",
    situations: [
      "Urban loneliness in high-density Sydney and Melbourne suburbs",
      "Timezone distance from overseas families and loved ones",
      "Fly-In Fly-Out (FIFO) lifestyle strain and partner isolation",
      "Heartbreak, separation, and marriage difficulties",
      "Late-night anxiety and difficulty switching off"
    ],
    tier1CitySlugs: ["sydney", "melbourne", "brisbane"],
    tier2CitySlugs: ["perth", "adelaide", "canberra"],
    tier3CitySlugs: ["gold-coast", "newcastle", "hobart"],
    faqs: [
      {
        q: "What Australian hours are covered?",
        a: "We support Australian Eastern (AEST/AEDT), Central, and Western (AWST) hours with day and nighttime availability."
      },
      {
        q: "Is Haven an emergency crisis service?",
        a: "No. If in immediate danger, please dial 000 or contact Lifeline Australia at 13 11 14."
      }
    ],
    emergencyDisclaimer: "Haven is non-clinical peer support. For crisis support in Australia, call Lifeline on 13 11 14 or emergency 000."
  },
  {
    slug: "uae",
    shortCode: "ae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    currency: "AED",
    symbol: "AED",
    timezones: ["GST (UTC+4)"],
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200",
    tagline: "Discreet Expat Emotional Support & Human Listening in Dubai & Abu Dhabi",
    metaTitle: "Someone to Talk to in Dubai & UAE — Private Expat Emotional Support | Haven",
    metaDescription: "Feeling lonely, stressed, or heartbroken in Dubai or Abu Dhabi? Connect with a compassionate human listener. Real people, real conversations, no judgment. 100% confidential 1-on-1 peer support via WhatsApp.",
    intro: "Behind the luxury and rapid career milestones of Dubai and Abu Dhabi, over 85% of residents are expatriates living thousands of miles away from family support networks. High expectations and transient friendships can make admitting loneliness difficult. Haven provides a private sanctuary to share your real feelings freely.",
    listeningExplanation: "We offer private, non-judgmental human conversations with complete discretion. We respect cultural nuances, understand the concept of 'Fadfedah' (فضفضة — unburdening your heart), and never share your identity with employers or third parties.",
    situations: [
      "Expat loneliness and superficial social fatigue",
      "High corporate expectations and career performance anxiety",
      "Relationship heartbreak in a transient city",
      "Family separation and feeling misunderstood across borders",
      "Seeking a confidential, discreet outlet without local gossip"
    ],
    tier1CitySlugs: ["dubai", "abu-dhabi"],
    tier2CitySlugs: ["sharjah"],
    tier3CitySlugs: [],
    faqs: [
      {
        q: "Why is Haven particularly suited for UAE expats?",
        a: "We offer complete neutrality and discretion. You can talk openly under a first name without worrying about social circles or work records."
      },
      {
        q: "How does the WhatsApp connection work?",
        a: "WhatsApp text messaging works seamlessly across the UAE. You connect directly with our coordinator for private 1-on-1 messaging."
      }
    ],
    emergencyDisclaimer: "Haven is non-clinical peer listening. For emergencies in the UAE, please dial 999."
  },
  {
    slug: "germany",
    shortCode: "de",
    name: "Germany",
    flag: "🇩🇪",
    currency: "EUR",
    symbol: "€",
    timezones: ["CET / CEST (UTC+1 / UTC+2)"],
    heroImage: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=1200",
    tagline: "Jemand zum Reden — Empathische menschliche Unterstützung in Deutschland",
    metaTitle: "Jemand zum Reden Online Deutschland — Menschliche Unterstützung | Haven",
    metaDescription: "Einsam, überfordert oder Liebeskummer in Berlin, München oder Frankfurt? Finde jemanden zum Reden. Echte Menschen, echte Gespräche, ohne Vorurteile. Vertraulich über WhatsApp.",
    intro: "In einer geschäftigen, leistungsorientierten Gesellschaft fühlen sich viele Menschen still und allein gelassen. Ob in Berlin, München oder Frankfurt — manchmal braucht man einfach ein menschliches Gegenüber, das vorurteilsfrei und geduldig zuhört.",
    listeningExplanation: "Haven bietet empathisches, nicht-klinisches Zuhören. Wir sind keine Psychiater oder Ärzte, sondern verständnisvolle Menschen, die Ihnen Raum geben, Sorgen, Liebeskummer oder Einsamkeit von der Seele zu reden.",
    situations: [
      "Einsamkeit in Großstädten und Anonymität des Alltags",
      "Liebeskummer, Trennungsschmerz und Beziehungsprobleme",
      "Beruflicher Leistungsdruck und Überforderung",
      "Familiäre Konflikte und das Gefühl, unverstanden zu sein",
      "Nachtgrübeln, wenn niemand erreichbar ist"
    ],
    tier1CitySlugs: ["berlin", "munich", "frankfurt"],
    tier2CitySlugs: ["hamburg", "cologne", "dusseldorf"],
    tier3CitySlugs: [],
    faqs: [
      {
        q: "Ist Haven eine Psychotherapie?",
        a: "Nein. Haven bietet psychosoziales, menschliches Zuhören auf Augenhöhe ohne Diagnosen oder therapeutische Behandlung."
      },
      {
        q: "Wie läuft das Gespräch ab?",
        a: "Diskret und unkompliziert über WhatsApp. Sie vereinbaren eine passende Uhrzeit und sprechen vertraulich mit einer verständnisvollen Person."
      }
    ],
    emergencyDisclaimer: "Haven ersetzt keine medizinische Notfallversorgung. In akuten Krisen wenden Sie sich bitte an die Telefonseelsorge (0800 111 0 111) oder den Notruf 112."
  },
  {
    slug: "netherlands",
    shortCode: "nl",
    name: "Netherlands",
    flag: "🇳🇱",
    currency: "EUR",
    symbol: "€",
    timezones: ["CET / CEST (UTC+1 / UTC+2)"],
    heroImage: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=1200",
    tagline: "Een Luisterend Oor — Human Emotional Support in the Netherlands",
    metaTitle: "Iemand om Mee te Praten Online — Luisterend Oor Nederland | Haven",
    metaDescription: "Voel je je eenzaam of overweldigd in Amsterdam of Rotterdam? Vind een luisterend oor. Echte mensen, echte gesprekken, zonder oordeel. Vertrouwelijk via WhatsApp.",
    intro: "Even in compact, vibrant Dutch cities like Amsterdam and Rotterdam, social isolation and relationship heartbreak can weigh heavily. In the Netherlands, where having a 'luisterend oor' (listening ear) is deeply cherished, Haven provides a non-judgmental space to share your thoughts.",
    listeningExplanation: "Haven offers peer listening and compassionate dialogue without clinical bureaucracy or healthcare waiting times. Available in English for both Dutch nationals and the large international expat community.",
    situations: [
      "Urban loneliness in dynamic Dutch university and expat hubs",
      "Relationship heartbreak, breakups, and divorce grief",
      "Burnout, performance pressure, and overthinking",
      "Relocation challenges for expats living in the Randstad"
    ],
    tier1CitySlugs: ["amsterdam", "rotterdam"],
    tier2CitySlugs: ["utrecht", "the-hague"],
    tier3CitySlugs: [],
    faqs: [
      {
        q: "Is this service in English or Dutch?",
        a: "Our listeners converse fluently in English, serving both local residents and international expats across the Netherlands."
      }
    ],
    emergencyDisclaimer: "Haven is non-clinical listening. For emergencies in the Netherlands, call 112 or contact 113 Zelfmoordpreventie."
  },
  {
    slug: "singapore",
    shortCode: "sg",
    name: "Singapore",
    flag: "🇸🇬",
    currency: "SGD",
    symbol: "S$",
    timezones: ["SGT (UTC+8)"],
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200",
    tagline: "Confidential Human Listening & Peer Support in Singapore",
    metaTitle: "Someone to Talk to Online Singapore — Confidential Human Support | Haven",
    metaDescription: "Feeling stressed, lonely, or overwhelmed in Singapore? Connect with an attentive human listener. Real people, real conversations, no judgment. Private 1-on-1 support via WhatsApp.",
    intro: "Singapore's intense work tempo and societal expectations often make it hard to pause and admit when you are struggling. Behind professional success, many individuals carry silent heartbreak, family expectations, and personal loneliness. Haven offers a gentle, judgment-free space to speak your mind.",
    listeningExplanation: "We provide accessible human peer listening. Completely private, separate from work and local institutions, allowing you to unburden your mind in total comfort.",
    situations: [
      "High workplace stress, long hours, and burnout",
      "Family pressure and traditional generational expectations",
      "Relationship breakup grief and emotional isolation",
      "Late-night overthinking after long workdays"
    ],
    tier1CitySlugs: ["singapore-city"],
    tier2CitySlugs: [],
    tier3CitySlugs: [],
    faqs: [
      {
        q: "How does booking work in Singapore?",
        a: "Choose your preferred Singapore Time (SGT) slot in our form, and our coordinator will confirm on WhatsApp."
      }
    ],
    emergencyDisclaimer: "Haven is non-clinical peer support. For crisis intervention in Singapore, contact SOS at 1-767 or emergency 995."
  },
  {
    slug: "ireland",
    shortCode: "ie",
    name: "Ireland",
    flag: "🇮🇪",
    currency: "EUR",
    symbol: "€",
    timezones: ["GMT / IST (UTC+0 / UTC+1)"],
    heroImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=1200",
    tagline: "Empathetic Human Listening & Emotional Support in Ireland",
    metaTitle: "Someone to Talk to Online Ireland — Human Listening Service | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in Dublin, Cork, or Galway? Connect with a compassionate human listener. Real people, real conversations, no judgment.",
    intro: "Despite Ireland's renowned warmth and friendly conversation, personal isolation, housing strain in Dublin, and relationship breakups can make someone feel completely alone. Haven offers a private, respectful listening ear when you need someone neutral to confide in.",
    listeningExplanation: "We offer non-clinical human peer support with zero judgment. No clinical records or referrals needed.",
    situations: [
      "Living alone and feeling isolated in Dublin or Cork",
      "Relationship breakups, divorce, and personal transitions",
      "Career stress in high-tempo tech and corporate sectors",
      "Late-night loneliness and personal anxiety"
    ],
    tier1CitySlugs: ["dublin"],
    tier2CitySlugs: ["cork", "galway"],
    tier3CitySlugs: [],
    faqs: [
      {
        q: "Is Haven available across all Irish counties?",
        a: "Yes, our service is completely online via WhatsApp and accessible from Dublin, Cork, Galway, Limerick, and everywhere in Ireland."
      }
    ],
    emergencyDisclaimer: "Haven is non-clinical listening. For crisis support in Ireland, call Samaritans at 116 123 or emergency 999/112."
  },
  {
    slug: "new-zealand",
    shortCode: "nz",
    name: "New Zealand",
    flag: "🇳🇿",
    currency: "NZD",
    symbol: "NZ$",
    timezones: ["NZST / NZDT (UTC+12 / UTC+13)"],
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=1200",
    tagline: "Caring Human Emotional Listening Across New Zealand / Aotearoa",
    metaTitle: "Someone to Talk to Online New Zealand — Human Peer Support | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in Auckland, Wellington, or Christchurch? Connect with a compassionate human listener. Real conversations, no judgment.",
    intro: "In Aotearoa New Zealand, community matters, but reaching out to friends when you are hurting can feel daunting. Whether you are living in Auckland, Wellington, or a rural township, Haven gives you an impartial, confidential person who listens with empathy.",
    listeningExplanation: "Safe, respectful peer listening over WhatsApp without medical jargon, high private therapy fees, or clinical barriers.",
    situations: [
      "Urban isolation in Auckland and Wellington",
      "Geographical isolation from international family",
      "Relationship heartbreak, divorce, and family stress",
      "Nighttime overthinking and personal loneliness"
    ],
    tier1CitySlugs: ["auckland"],
    tier2CitySlugs: ["wellington", "christchurch"],
    tier3CitySlugs: [],
    faqs: [
      {
        q: "What New Zealand hours are supported?",
        a: "We support NZST and NZDT hours across the North and South Islands."
      }
    ],
    emergencyDisclaimer: "Haven is non-clinical peer support. In a crisis in New Zealand, call or text 1737 or dial 111."
  }
];

export function getCountryBySlug(slug: string): CountryData | undefined {
  return COUNTRIES_DATA.find((c) => c.slug === slug || c.shortCode === slug);
}
