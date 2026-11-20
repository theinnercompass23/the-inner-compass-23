export interface CityData {
  slug: string;
  countrySlug: string;
  countryName: string;
  name: string;
  stateOrRegion: string;
  tier: 1 | 2 | 3;
  population: string;
  timezone: string;
  heroImage: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localContext: string;
  situations: string[];
  faqs: { q: string; a: string }[];
  nearbyCitySlugs: string[];
}

export const CITIES_DATA: CityData[] = [
  // ================= UNITED STATES =================
  {
    slug: "new-york",
    countrySlug: "united-states",
    countryName: "United States",
    name: "New York City",
    stateOrRegion: "New York",
    tier: 1,
    population: "19.6 Million (Metro)",
    timezone: "Eastern Time (EST / EDT, UTC-5)",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200",
    tagline: "Someone to Talk to in New York City — Confidential Human Listening",
    metaTitle: "Someone to Talk to in New York City — Human Emotional Support | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in NYC? Connect with a compassionate human listener. Real people, real conversations, no judgment. Private 1-on-1 support via WhatsApp.",
    intro: "New York City is one of the most vibrant cities on earth, yet it also has one of the highest concentrations of single-person households and late-night loneliness. Surrounded by millions of people, you can still feel entirely alone. Haven provides a private, comforting space to be heard without judgment.",
    localContext: "Living in NYC involves intense career competition, soaring rents, and crowded subway cars that paradoxically amplify personal isolation. When relationships fracture or work pressure mounts, traditional therapy can cost $200+ per session with long waiting lists. Haven offers immediate, non-clinical human listening.",
    situations: [
      "Feeling lonely in a tiny studio apartment late at night",
      "Grief and disorientation after an unexpected breakup in the city",
      "Corporate burnout, imposter syndrome, and high-pressure career fatigue",
      "Family relationship tension thousands of miles away",
      "Insomnia and overthinking between midnight and 4:00 AM"
    ],
    faqs: [
      {
        q: "Do you have a physical office in NYC?",
        a: "No. Haven is an online human peer listening service delivered completely remotely over WhatsApp. This ensures 100% privacy and comfort without needing to commute to an office."
      },
      {
        q: "What hours can I connect in New York?",
        a: "We support Eastern Standard Time (EST) with daytime, evening, and late-night booking slots available."
      }
    ],
    nearbyCitySlugs: ["boston", "chicago"]
  },
  {
    slug: "los-angeles",
    countrySlug: "united-states",
    countryName: "United States",
    name: "Los Angeles",
    stateOrRegion: "California",
    tier: 1,
    population: "12.8 Million (Metro)",
    timezone: "Pacific Time (PST / PDT, UTC-8)",
    heroImage: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&q=80&w=1200",
    tagline: "Human Listening Service & Emotional Support in Los Angeles",
    metaTitle: "Someone to Talk to in Los Angeles — Private Human Peer Listening | Haven",
    metaDescription: "Feeling lonely, anxious, or heartbroken in LA? Connect with an attentive human listener. Real people, real conversations, no judgment. 1-on-1 WhatsApp emotional support.",
    intro: "Behind the sunny skies and creative energy of Los Angeles, many residents struggle with transient social networks, traffic isolation, and career volatility. Having someone neutral who listens with genuine empathy brings immense comfort.",
    localContext: "LA can feel sprawling and emotionally isolating. When a relationship ends or creative projects stall, carrying the emotional weight alone feels overwhelming. Haven offers a gentle, judgment-free sounding board.",
    situations: [
      "Creative industry burnout and career volatility",
      "Heartbreak and post-breakup isolation in Southern California",
      "Difficulty building deep, dependable friendships",
      "Late-night overthinking and quiet personal struggles"
    ],
    faqs: [
      {
        q: "What time can I book in Los Angeles?",
        a: "We accommodate Pacific Standard Time (PST/PDT) throughout the afternoon and late evening."
      }
    ],
    nearbyCitySlugs: ["san-francisco", "seattle"]
  },
  {
    slug: "chicago",
    countrySlug: "united-states",
    countryName: "United States",
    name: "Chicago",
    stateOrRegion: "Illinois",
    tier: 1,
    population: "9.4 Million (Metro)",
    timezone: "Central Time (CST / CDT, UTC-6)",
    heroImage: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=1200",
    tagline: "Empathetic Human Peer Listening in Chicago",
    metaTitle: "Someone to Talk to in Chicago — Emotional Support Online | Haven",
    metaDescription: "Feeling lonely or stressed in Chicago? Connect with a compassionate human listener. Real people, real conversations, no judgment. 1-on-1 support via WhatsApp.",
    intro: "Chicago's deep winter freeze and demanding metropolitan pace can intensify feelings of isolation. When you need to talk about relationship heartache, marital tension, or quiet stress, Haven is here to listen.",
    localContext: "Long winter months in the Windy City make reaching out in person challenging. Having an immediate, private WhatsApp ear gives Chicagoans an approachable outlet to speak freely.",
    situations: [
      "Winter seasonal loneliness and confinement",
      "Navigating divorce, separation, and marital strain",
      "Workplace burnout in corporate and logistics sectors",
      "Overcoming grief and personal transitions"
    ],
    faqs: [
      {
        q: "Is this service therapy?",
        a: "No. Haven is non-clinical human peer support. We do not provide clinical therapy or medical treatment; we provide attentive, non-judgmental human listening."
      }
    ],
    nearbyCitySlugs: ["new-york", "boston"]
  },
  {
    slug: "san-francisco",
    countrySlug: "united-states",
    countryName: "United States",
    name: "San Francisco & Bay Area",
    stateOrRegion: "California",
    tier: 1,
    population: "4.7 Million (Metro)",
    timezone: "Pacific Time (PST / PDT, UTC-8)",
    heroImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=1200",
    tagline: "Confidential Human Emotional Listening in the Bay Area",
    metaTitle: "Someone to Talk to in San Francisco — Private Human Support | Haven",
    metaDescription: "Overwhelmed by tech pressure, imposter syndrome, or loneliness in SF? Talk to a compassionate human listener. Real people, no AI bots, no judgment.",
    intro: "In the capital of artificial intelligence, what people need most is genuine human connection. The Bay Area's intense startup culture, high cost of living, and hyper-intellectual environment can leave deep emotional needs neglected.",
    localContext: "Tech professionals and transplants in Silicon Valley often feel pressured to appear effortlessly successful. Admitting you are lonely, heartbroken, or anxious feels vulnerable. Haven offers a private sanctuary separate from tech circles.",
    situations: [
      "Startup burnout, founder stress, and imposter syndrome",
      "Transplant loneliness and feeling emotionally disconnected",
      "Navigating modern dating heartbreak in the Bay Area",
      "Seeking a non-AI, real human voice to confide in"
    ],
    faqs: [
      {
        q: "Do you use AI in your conversations?",
        a: "Never. Haven is 100% human-to-human. Every conversation is with a real, attentive person who listens with empathy."
      }
    ],
    nearbyCitySlugs: ["los-angeles", "seattle"]
  },
  {
    slug: "seattle",
    countrySlug: "united-states",
    countryName: "United States",
    name: "Seattle",
    stateOrRegion: "Washington",
    tier: 1,
    population: "4.0 Million (Metro)",
    timezone: "Pacific Time (PST / PDT, UTC-8)",
    heroImage: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&q=80&w=1200",
    tagline: "Warm Human Listening Through the Seattle Winter",
    metaTitle: "Someone to Talk to in Seattle — Human Emotional Support | Haven",
    metaDescription: "Feeling isolated by the Seattle Freeze or seasonal blues? Connect with a compassionate human listener. Real people, real conversations, no judgment.",
    intro: "The Pacific Northwest's overcast skies and the well-known 'Seattle Freeze' can make forming close, supportive bonds difficult. When you are hurting or lonely, you don't have to carry the weight alone.",
    localContext: "Relocating for major tech employers in Seattle often leaves newcomers isolated. Haven provides a warm, confidential ear to unburden your thoughts without social awkwardness.",
    situations: [
      "Seasonal affective blues and long winter darkness",
      "Overcoming the difficulty of finding genuine friends in Seattle",
      "Heartbreak and loneliness when living far from home",
      "Late-night overthinking and quiet emotional distress"
    ],
    faqs: [
      {
        q: "What timezones work for Seattle residents?",
        a: "We support Pacific Time (PST/PDT) with afternoon and late-night availability."
      }
    ],
    nearbyCitySlugs: ["san-francisco", "vancouver"]
  },
  {
    slug: "boston",
    countrySlug: "united-states",
    countryName: "United States",
    name: "Boston",
    stateOrRegion: "Massachusetts",
    tier: 1,
    population: "4.9 Million (Metro)",
    timezone: "Eastern Time (EST / EDT, UTC-5)",
    heroImage: "https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&q=80&w=1200",
    tagline: "Empathetic Human Peer Support in Greater Boston",
    metaTitle: "Someone to Talk to in Boston — Human Listening Service | Haven",
    metaDescription: "Feeling academic pressure, loneliness, or heartbreak in Boston? Connect with an attentive human listener. Real people, real conversations, no judgment.",
    intro: "Boston's concentration of universities, hospitals, and biotech firms creates an ambitious, driven environment where admitting emotional vulnerability feels difficult. Haven provides a non-judgmental space to speak freely.",
    localContext: "Students, researchers, and young professionals in Boston frequently face acute stress and living-alone loneliness. Having an outside, impartial listener offers immediate clarity.",
    situations: [
      "Academic and professional performance pressure",
      "Relationship heartbreak and feeling misunderstood",
      "Winter isolation in New England",
      "Family conflicts and life transitions"
    ],
    faqs: [
      {
        q: "Can I connect privately?",
        a: "Yes. All conversations are 1-on-1 via WhatsApp with full confidentiality."
      }
    ],
    nearbyCitySlugs: ["new-york", "chicago"]
  },

  // ================= UNITED KINGDOM =================
  {
    slug: "london",
    countrySlug: "united-kingdom",
    countryName: "United Kingdom",
    name: "London",
    stateOrRegion: "Greater London",
    tier: 1,
    population: "9.7 Million (Metro)",
    timezone: "GMT / BST (UTC+0 / UTC+1)",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200",
    tagline: "Someone to Talk to in London — Confidential Human Listening",
    metaTitle: "Someone to Talk to in London — Human Emotional Support | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in London? Connect with a compassionate human listener. Real people, real conversations, no judgment. 1-on-1 support via WhatsApp.",
    intro: "London is a bustling global metropolis, but living among nearly ten million people often feels profoundly lonely. In crowded tube carriages and shared flats, finding someone who genuinely listens without judgment is rare. Haven provides that safe space.",
    localContext: "The London grind, high rents, and transient friendships lead many young professionals and long-time residents to suffer in silence. NHS talking therapies often have waiting lists of 6 to 18 weeks. Haven offers immediate, non-clinical human peer support.",
    situations: [
      "Flatmate disconnection and living alone in Greater London",
      "Relationship breakups, divorce, and dating exhaustion",
      "Corporate burnout in Canary Wharf and the City",
      "Dark winter evenings and feeling invisible in the crowd",
      "Midnight anxiety when friends are asleep"
    ],
    faqs: [
      {
        q: "How does Haven compare to NHS services?",
        a: "Haven offers non-clinical peer support with zero waiting lists. We do not provide clinical psychiatric prescriptions, but rather a warm, confidential human ear."
      },
      {
        q: "What London hours are covered?",
        a: "We support GMT and BST hours throughout the day and late into the night."
      }
    ],
    nearbyCitySlugs: ["manchester", "birmingham", "bristol"]
  },
  {
    slug: "manchester",
    countrySlug: "united-kingdom",
    countryName: "United Kingdom",
    name: "Manchester",
    stateOrRegion: "North West",
    tier: 1,
    population: "2.9 Million (Metro)",
    timezone: "GMT / BST (UTC+0 / UTC+1)",
    heroImage: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=1200",
    tagline: "Empathetic Human Listening Support in Manchester",
    metaTitle: "Someone to Talk to in Manchester — Human Peer Listening | Haven",
    metaDescription: "Feeling lonely or stressed in Manchester? Connect with an attentive human listener. Real people, real conversations, no judgment. Private WhatsApp support.",
    intro: "Manchester is celebrated for its warmth and vibrant culture, but personal struggles, breakups, and family strain can leave someone feeling isolated. Having a dedicated person who listens changes everything.",
    localContext: "From the city center to Greater Manchester, people often hesitate to burden close friends with deep personal sadness. Haven provides an impartial, respectful confidant.",
    situations: [
      "Feeling lonely despite a lively social scene",
      "Relationship heartbreak and post-separation sadness",
      "University and early career stress",
      "Late-night insomnia and overthinking"
    ],
    faqs: [
      {
        q: "Is Haven an emergency crisis line?",
        a: "No. If in immediate crisis in the UK, please contact Samaritans on 116 123 or call 999."
      }
    ],
    nearbyCitySlugs: ["london", "leeds", "liverpool"]
  },
  {
    slug: "birmingham",
    countrySlug: "united-kingdom",
    countryName: "United Kingdom",
    name: "Birmingham",
    stateOrRegion: "West Midlands",
    tier: 1,
    population: "2.6 Million (Metro)",
    timezone: "GMT / BST (UTC+0 / UTC+1)",
    heroImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1200",
    tagline: "Compassionate Human Peer Support in Birmingham",
    metaTitle: "Someone to Talk to in Birmingham — Human Listening Service | Haven",
    metaDescription: "Facing family tension, marital strain, or loneliness in Birmingham? Talk to a compassionate human listener. Real people, no judgment. 1-on-1 via WhatsApp.",
    intro: "As the UK's second city, Birmingham is home to diverse communities where traditional expectations often make it hard to talk openly about personal struggles. Haven offers a private, respectful listening ear.",
    localContext: "Marital conflicts, generational expectations, and quiet loneliness can be hard to discuss within family networks. Haven provides complete confidentiality and empathy.",
    situations: [
      "Family conflicts and cultural expectations",
      "Marriage problems and relationship doubts",
      "Loneliness and isolation in the West Midlands",
      "Personal grief and emotional exhaustion"
    ],
    faqs: [
      {
        q: "Can I remain anonymous?",
        a: "Yes. You can share only your first name or a comfortable pseudonym."
      }
    ],
    nearbyCitySlugs: ["london", "manchester"]
  },

  // ================= CANADA =================
  {
    slug: "toronto",
    countrySlug: "canada",
    countryName: "Canada",
    name: "Toronto",
    stateOrRegion: "Ontario",
    tier: 1,
    population: "6.7 Million (Metro)",
    timezone: "Eastern Time (EST / EDT, UTC-5)",
    heroImage: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80&w=1200",
    tagline: "Someone to Talk to in Toronto — Human Emotional Support",
    metaTitle: "Someone to Talk to in Toronto — Human Peer Listening | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in Toronto? Connect with a compassionate human listener. Real people, real conversations, no judgment. Private WhatsApp support.",
    intro: "Toronto is Canada's financial powerhouse, but soaring housing costs, intense professional demands, and harsh winter freezes often lead to a quiet sense of loneliness. Haven offers a safe harbor when you need someone to listen.",
    localContext: "In the Greater Toronto Area (GTA), many individuals live far from their extended families or childhood communities. Carrying relationship breakups or career stress alone is burdensome. Haven provides an immediate, judgment-free ear.",
    situations: [
      "Winter freeze isolation and seasonal emotional dips",
      "High cost of living anxiety and housing stress",
      "Heartbreak and post-breakup loneliness in the city",
      "Immigrant and transplant disconnection"
    ],
    faqs: [
      {
        q: "What hours are available in Toronto?",
        a: "We support Eastern Standard Time (EST) across afternoon, evening, and late-night slots."
      }
    ],
    nearbyCitySlugs: ["montreal", "ottawa", "vancouver"]
  },
  {
    slug: "vancouver",
    countrySlug: "canada",
    countryName: "Canada",
    name: "Vancouver",
    stateOrRegion: "British Columbia",
    tier: 1,
    population: "2.8 Million (Metro)",
    timezone: "Pacific Time (PST / PDT, UTC-8)",
    heroImage: "https://images.unsplash.com/photo-1559511260-66a65e09b245?auto=format&fit=crop&q=80&w=1200",
    tagline: "Empathetic Human Listening Through Rainy Vancouver Days",
    metaTitle: "Someone to Talk to in Vancouver — Human Emotional Support | Haven",
    metaDescription: "Struggling with social isolation, rainy blues, or relationship heartbreak in Vancouver? Connect with an attentive human listener. Real people, no judgment.",
    intro: "Surrounded by mountains and ocean, Vancouver is visually stunning, yet local surveys consistently highlight high levels of social disconnection. When gray rainy days weigh heavily, having someone attentive to talk to brings warmth.",
    localContext: "The 'Vancouver loneliness' phenomenon is well known among residents and newcomers alike. Reaching out to Haven gives you an empathetic, non-clinical listener without long healthcare delays.",
    situations: [
      "Seasonal mood changes during extended rainy months",
      "Difficulty establishing deep, dependable social connections",
      "Relationship heartbreak and personal transitions",
      "Work-life balance burnout and living cost anxiety"
    ],
    faqs: [
      {
        q: "Is Haven crisis intervention?",
        a: "No. For acute crisis support in Canada, please call or text 988."
      }
    ],
    nearbyCitySlugs: ["calgary", "seattle", "toronto"]
  },

  // ================= AUSTRALIA =================
  {
    slug: "sydney",
    countrySlug: "australia",
    countryName: "Australia",
    name: "Sydney",
    stateOrRegion: "New South Wales",
    tier: 1,
    population: "5.4 Million (Metro)",
    timezone: "AEST / AEDT (UTC+10 / UTC+11)",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1200",
    tagline: "Someone to Talk to in Sydney — Private Human Listening Support",
    metaTitle: "Someone to Talk to in Sydney — Human Emotional Support | Haven",
    metaDescription: "Feeling lonely, heartbroken, or stressed in Sydney? Connect with a compassionate human listener. Real people, real conversations, no judgment. 1-on-1 via WhatsApp.",
    intro: "Sydney's iconic harbor and beach culture mask an intense urban pressure cooker. With some of the world's highest housing costs and fast-paced lifestyles, thousands of Sydneysiders struggle with quiet loneliness and relationship stress.",
    localContext: "Whether commuting from the Western Suburbs or living alone in the Eastern Suburbs, carrying life's burdens in silence takes an emotional toll. Haven gives you a private, patient listener right when you need one.",
    situations: [
      "High cost of living pressure and rental stress",
      "Feeling lonely despite busy social calendars",
      "Grief, heartbreak, and post-breakup disorientation",
      "Late-night overthinking when everyone else is asleep"
    ],
    faqs: [
      {
        q: "What Australian hours are covered?",
        a: "We support AEST and AEDT timezones with day and late-night slots."
      }
    ],
    nearbyCitySlugs: ["melbourne", "brisbane", "perth"]
  },
  {
    slug: "melbourne",
    countrySlug: "australia",
    countryName: "Australia",
    name: "Melbourne",
    stateOrRegion: "Victoria",
    tier: 1,
    population: "5.1 Million (Metro)",
    timezone: "AEST / AEDT (UTC+10 / UTC+11)",
    heroImage: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&q=80&w=1200",
    tagline: "Empathetic Human Peer Listening in Melbourne",
    metaTitle: "Someone to Talk to in Melbourne — Human Emotional Support | Haven",
    metaDescription: "Feeling lonely, anxious, or heartbroken in Melbourne? Connect with an attentive human listener. Real people, real conversations, no judgment. Private WhatsApp support.",
    intro: "Melbourne's café laneways and creative spirit make it a cultural capital, but extended winter chill and shifting social circles can create profound isolation. Haven provides a warm, respectful ear to share what's on your heart.",
    localContext: "Young professionals, students, and transplants in Melbourne often experience intense overthinking and relationship strain. Haven offers an approachable, non-clinical outlet without judgment.",
    situations: [
      "Winter isolation and seasonal mood changes",
      "Relationship heartbreak, breakups, and separation",
      "Academic and creative performance pressure",
      "Late-night anxiety and feeling unseen"
    ],
    faqs: [
      {
        q: "Is this service confidential?",
        a: "Yes. All conversations take place in 1-on-1 private encrypted WhatsApp chats."
      }
    ],
    nearbyCitySlugs: ["sydney", "adelaide", "brisbane"]
  },

  // ================= UAE =================
  {
    slug: "dubai",
    countrySlug: "uae",
    countryName: "United Arab Emirates",
    name: "Dubai",
    stateOrRegion: "Dubai",
    tier: 1,
    population: "3.6 Million (Metro)",
    timezone: "Gulf Standard Time (GST, UTC+4)",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200",
    tagline: "Someone to Talk to in Dubai — Private Expat Emotional Support",
    metaTitle: "Someone to Talk to in Dubai — Confidential Expat Listening | Haven",
    metaDescription: "Feeling lonely, stressed, or heartbroken in Dubai? Connect with a compassionate human listener. Real people, real conversations, no judgment. 100% discreet 1-on-1 via WhatsApp.",
    intro: "In a city defined by ambitious career milestones and glamorous lifestyles, admitting you feel lonely or heartbroken is difficult. Over 85% of Dubai's population are expatriates living away from family roots. Haven provides a discreet sanctuary to talk freely.",
    localContext: "Transient friendships, corporate pressure, and high living costs in Dubai can create intense personal stress. Many professionals worry that discussing emotional struggles locally could impact their career. Haven offers complete outside confidentiality and understanding of 'Fadfedah' (فضفضة).",
    situations: [
      "Expat loneliness and feeling far from family support",
      "High corporate expectations and career performance anxiety",
      "Heartbreak and relationship strain in a transient city",
      "Superficial social fatigue and wanting deep, real conversation",
      "Seeking complete discretion without local workplace gossip"
    ],
    faqs: [
      {
        q: "How does the WhatsApp connection work in Dubai?",
        a: "WhatsApp text messaging works smoothly across the UAE. You connect directly with our coordinator for private 1-on-1 messaging."
      },
      {
        q: "Can I speak under a pseudonym?",
        a: "Yes. We respect your complete privacy; you may use a first name or pseudonym."
      }
    ],
    nearbyCitySlugs: ["abu-dhabi", "sharjah"]
  },
  {
    slug: "abu-dhabi",
    countrySlug: "uae",
    countryName: "United Arab Emirates",
    name: "Abu Dhabi",
    stateOrRegion: "Abu Dhabi",
    tier: 1,
    population: "1.6 Million (Metro)",
    timezone: "Gulf Standard Time (GST, UTC+4)",
    heroImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=1200",
    tagline: "Discreet Human Peer Support in Abu Dhabi",
    metaTitle: "Someone to Talk to in Abu Dhabi — Private Expat Emotional Support | Haven",
    metaDescription: "Feeling stressed, lonely, or heartbroken in Abu Dhabi? Connect with an attentive human listener. Real people, real conversations, no judgment. Private WhatsApp support.",
    intro: "Abu Dhabi offers a more measured pace than Dubai, but expat families and professionals still experience the isolation of being thousands of miles from home. Haven gives you a patient, understanding listener whenever life feels heavy.",
    localContext: "From government and energy sector careers to international family life, having an outside confidant who listens without judgment brings immense emotional comfort.",
    situations: [
      "Living far from childhood friends and extended family",
      "Relationship conflict and marital communication hurdles",
      "Career burnout and feeling misunderstood",
      "Quiet late-night loneliness"
    ],
    faqs: [
      {
        q: "What time can I book in Abu Dhabi?",
        a: "We support Gulf Standard Time (GST) with flexible day and night slots."
      }
    ],
    nearbyCitySlugs: ["dubai", "sharjah"]
  },

  // ================= GERMANY =================
  {
    slug: "berlin",
    countrySlug: "germany",
    countryName: "Germany",
    name: "Berlin",
    stateOrRegion: "Berlin",
    tier: 1,
    population: "3.7 Million (City) / 6.1M (Metro)",
    timezone: "CET / CEST (UTC+1 / UTC+2)",
    heroImage: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=1200",
    tagline: "Jemand zum Reden in Berlin — Empathische menschliche Unterstützung",
    metaTitle: "Jemand zum Reden in Berlin — Menschliches Zuhören Online | Haven",
    metaDescription: "Einsam, überfordert oder Liebeskummer in Berlin? Finde jemanden zum Reden. Echte Menschen, echte Gespräche, ohne Vorurteile. Vertraulich über WhatsApp.",
    intro: "Berlin ist pulsierend, kreativ und voller Möglichkeiten — doch gerade hier fühlen sich viele Menschen in der Anonymität der Großstadt verloren. Haven bietet einen geschützten Raum, um Sorgen und Liebeskummer offen auszusprechen.",
    localContext: "Ob internationale Expats oder Einheimische: Zwischen Winterkälte und hektischem Alltag fehlt oft jemand, der einfach nur aufmerksam zuhört. Haven bietet empathisches Zuhören ohne bürokratische Hürden.",
    situations: [
      "Großstadteinsamkeit und das Gefühl, unsichtbar zu sein",
      "Liebeskummer, Trennungsschmerz und Beziehungsfragen",
      "Leistungsdruck im Berufs- und Kreativalltag",
      "Spätabends niemanden zum Reden haben"
    ],
    faqs: [
      {
        q: "In welcher Sprache kann ich sprechen?",
        a: "Wir bieten Unterstützung auf Englisch und Deutsch an."
      }
    ],
    nearbyCitySlugs: ["munich", "frankfurt", "amsterdam"]
  },

  // ================= NETHERLANDS =================
  {
    slug: "amsterdam",
    countrySlug: "netherlands",
    countryName: "Netherlands",
    name: "Amsterdam",
    stateOrRegion: "North Holland",
    tier: 1,
    population: "1.2 Million (City) / 2.5M (Metro)",
    timezone: "CET / CEST (UTC+1 / UTC+2)",
    heroImage: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=1200",
    tagline: "Een Luisterend Oor in Amsterdam — Human Emotional Support",
    metaTitle: "Someone to Talk to in Amsterdam — Luisterend Oor Online | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in Amsterdam? Connect with a compassionate human listener. Real people, real conversations, no judgment.",
    intro: "Amsterdam's historic canals and cycling streets hide a quiet urban loneliness experienced by locals, students, and expats alike. Haven provides a non-judgmental listening ear when you need someone to confide in.",
    localContext: "Fast housing markets, busy social circles, and dark rainy winters can create emotional fatigue. Haven offers a private, accessible sounding board over WhatsApp.",
    situations: [
      "Expat and student loneliness in the Randstad",
      "Relationship heartbreak and personal transitions",
      "Burnout, career pressure, and overthinking",
      "Winter seasonal blues and social disconnect"
    ],
    faqs: [
      {
        q: "Is this service in English?",
        a: "Yes, our listeners communicate fluently in English, serving international expats and locals across Amsterdam."
      }
    ],
    nearbyCitySlugs: ["rotterdam", "berlin", "london"]
  },

  // ================= SINGAPORE =================
  {
    slug: "singapore-city",
    countrySlug: "singapore",
    countryName: "Singapore",
    name: "Singapore Central",
    stateOrRegion: "Singapore",
    tier: 1,
    population: "5.9 Million (Nation)",
    timezone: "Singapore Time (SGT, UTC+8)",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200",
    tagline: "Confidential Human Emotional Listening in Singapore",
    metaTitle: "Someone to Talk to in Singapore — Private Human Support | Haven",
    metaDescription: "Feeling stressed, lonely, or heartbroken in Singapore? Connect with an attentive human listener. Real people, real conversations, no judgment. 1-on-1 via WhatsApp.",
    intro: "Singapore's relentless drive and high performance culture can make pausing to acknowledge emotional strain feel impossible. Haven provides a gentle, confidential space to unburden your thoughts without fear of judgment.",
    localContext: "Long working hours, family expectations, and relationship heartbreaks can lead to silent emotional exhaustion. Haven offers a completely neutral, private peer listener.",
    situations: [
      "High workplace stress, corporate burnout, and long hours",
      "Family pressure and generational expectations",
      "Heartbreak, relationship doubts, and emotional loneliness",
      "Late-night overthinking after exhausting days"
    ],
    faqs: [
      {
        q: "What hours are available in Singapore?",
        a: "We support Singapore Time (SGT) with evening and night-time availability."
      }
    ],
    nearbyCitySlugs: ["dubai", "sydney"]
  },

  // ================= IRELAND =================
  {
    slug: "dublin",
    countrySlug: "ireland",
    countryName: "Ireland",
    name: "Dublin",
    stateOrRegion: "Leinster",
    tier: 1,
    population: "1.4 Million (Metro)",
    timezone: "GMT / IST (UTC+0 / UTC+1)",
    heroImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=1200",
    tagline: "Empathetic Human Peer Listening in Dublin",
    metaTitle: "Someone to Talk to in Dublin — Human Emotional Support | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in Dublin? Connect with a compassionate human listener. Real people, real conversations, no judgment. 1-on-1 via WhatsApp.",
    intro: "Dublin is famed for its warmth and social spirit, yet intense rental stress, tech workplace pressure, and relationship struggles leave many people feeling quietly isolated. Haven offers an impartial ear when you need someone to talk to.",
    localContext: "Many professionals and students living in shared accommodation in Dublin find it hard to discuss personal heartbreak or vulnerability. Haven provides complete confidentiality.",
    situations: [
      "Living alone or in crowded flatshares with no privacy to vent",
      "Tech sector burnout and job market anxiety",
      "Heartbreak, separation, and relationship grief",
      "Late-night overthinking during dark winter months"
    ],
    faqs: [
      {
        q: "Is Haven an emergency service?",
        a: "No. For emergency crisis support in Ireland, contact Samaritans on 116 123 or call 999."
      }
    ],
    nearbyCitySlugs: ["london", "edinburgh"]
  },

  // ================= NEW ZEALAND =================
  {
    slug: "auckland",
    countrySlug: "new-zealand",
    countryName: "New Zealand",
    name: "Auckland",
    stateOrRegion: "North Island",
    tier: 1,
    population: "1.7 Million (Metro)",
    timezone: "NZST / NZDT (UTC+12 / UTC+13)",
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=1200",
    tagline: "Caring Human Emotional Support Across Auckland",
    metaTitle: "Someone to Talk to in Auckland — Human Listening Service | Haven",
    metaDescription: "Feeling lonely, heartbroken, or overwhelmed in Auckland? Connect with a compassionate human listener. Real people, real conversations, no judgment.",
    intro: "Auckland's coastal lifestyle is beautiful, but the pressures of modern life, distance from international family, and relationship sorrow can feel heavy. Haven provides a private, caring person who listens with empathy.",
    localContext: "Whether navigating a tough breakup or feeling distant from friends, having an impartial person to talk to offers instant emotional relief without clinical barriers.",
    situations: [
      "Geographical distance from international family roots",
      "Relationship heartbreak, divorce, and personal transitions",
      "Urban loneliness and feeling disconnected",
      "Nighttime overthinking and personal anxiety"
    ],
    faqs: [
      {
        q: "What hours are available in New Zealand?",
        a: "We accommodate NZST and NZDT hours across the country."
      }
    ],
    nearbyCitySlugs: ["sydney", "melbourne"]
  }
];

export function getCityBySlug(countrySlug: string, citySlug: string): CityData | undefined {
  return CITIES_DATA.find(
    (c) =>
      (c.countrySlug === countrySlug ||
        (countrySlug === "us" && c.countrySlug === "united-states") ||
        (countrySlug === "uk" && c.countrySlug === "united-kingdom") ||
        (countrySlug === "ca" && c.countrySlug === "canada") ||
        (countrySlug === "au" && c.countrySlug === "australia") ||
        (countrySlug === "ae" && c.countrySlug === "uae")) &&
      c.slug === citySlug
  );
}

export function getCitiesByCountry(countrySlug: string): CityData[] {
  return CITIES_DATA.filter(
    (c) =>
      c.countrySlug === countrySlug ||
      (countrySlug === "us" && c.countrySlug === "united-states") ||
      (countrySlug === "uk" && c.countrySlug === "united-kingdom") ||
      (countrySlug === "ca" && c.countrySlug === "canada") ||
      (countrySlug === "au" && c.countrySlug === "australia") ||
      (countrySlug === "ae" && c.countrySlug === "uae")
  );
}
