export const siteConfig = {
  name: "Tech Trek",
  tagline: "Acercamos el emprendedurismo a los estudiantes del ITBA",
  taglineEn: "We bring entrepreneurship closer to ITBA students",
  institution: "ITBA — Instituto Tecnológico de Buenos Aires",
  email: "techtrek@itba.edu.ar",
  socials: {
    linkedin: "https://www.linkedin.com/company/techtrek/",
    instagram: "https://www.instagram.com/techtrekar",
  },
  itbaUrl: "https://www.itba.edu.ar/",
};

export const stats = [
  { value: 350, suffix: "+", label: "Asistentes al Hub 2025", labelEn: "Hub 2025 Attendees" },
  { value: 6, suffix: "", label: "Miembros", labelEn: "Members" },
];

export const events = [
  {
    id: "hub",
    name: "Tech Trek Hub",
    shortName: "Hub",
    description:
      "Evento principal. Más de 350 estudiantes universitarios de todo el país, empresas líderes y emprendedores en un mismo lugar.",
    descriptionEn:
      "Main event. Over 350 university students from across the country, leading companies and entrepreneurs all in one place.",
    date: "Agosto 2026",
    dateEn: "August 2026",
    location: "Parque de la Innovación, CABA",
    featured: true,
    tag: "Evento Principal",
    tagEn: "Main Event",
  },
  {
    id: "visits",
    name: "Tech Trek Visits",
    shortName: "Visits",
    description:
      "Visitamos las oficinas de empresas sponsor a lo largo del año. Un espacio para conocer de adentro cómo trabajan las compañías que están construyendo el futuro.",
    descriptionEn:
      "We visit sponsor companies throughout the year. An inside look at how the companies building the future actually work.",
    date: "A lo largo del año",
    dateEn: "Throughout the year",
    location: "CABA",
    featured: false,
    tag: "Visitas a Empresas",
    tagEn: "Company Visits",
  },
  {
    id: "talks",
    name: "Tech Trek Talks",
    shortName: "Talks",
    description:
      "Charlas íntimas con emprendedores reales. No figuras corporativas — personas con historias concretas para contar.",
    descriptionEn:
      "Intimate talks with real entrepreneurs. Not corporate figures, people with concrete stories to tell.",
    date: "A lo largo del año",
    dateEn: "Throughout the year",
    location: "ITBA, CABA",
    featured: false,
    tag: "Serie de Charlas",
    tagEn: "Talk Series",
  },
  {
    id: "biohack",
    name: "BioHackathon",
    shortName: "BioHack",
    description:
      "12 horas, 15 equipos, 3 desafíos reales de empresas. Estudiantes multidisciplinarios compiten con ideas que resuelven problemas de MedTech, Agro y Pharma.",
    descriptionEn:
      "12 hours, 15 teams, 3 real company challenges. Multidisciplinary students compete with ideas that solve MedTech, Agro and Pharma problems.",
    date: "2026",
    dateEn: "2026",
    location: "ITBA, CABA",
    featured: false,
    tag: "Hackathon",
    tagEn: "Hackathon",
  },
];

export const team = [
  { name: "Tadeo Scardilli", role: "Director", career: "Lic. Gestión de Negocios y Tecnología", careerEn: "Business Management and Technology", email: "tscardilli@itba.edu.ar", photo: "/images/team/tadeo.jpg", photoCompressed: "/images/team/side-eye/tadeo-side-eye1.png", linkedin: "https://www.linkedin.com/in/tadeoscardilli/" },
  { name: "Bernardo Ortiz", role: "Coordinador", career: "Lic. Gestión de Negocios y Tecnología", careerEn: "Business Management and Technology", email: "bortiz@itba.edu.ar", photo: "/images/team/bernardo.jpg", photoCompressed: "/images/team/side-eye/bernardo-side-eye.png", linkedin: "https://www.linkedin.com/in/bernardo-ortiz-perfil/?locale=en-US" },
  { name: "Victoria Escobar", role: "Coordinador", career: "Bioingeniería", careerEn: "Bioengineering", email: "vescobar@itba.edu.ar", photo: "/images/team/victoria1.jpg", photoCompressed: "/images/team/side-eye/victoria-side-eye1.png", linkedin: "https://www.linkedin.com/in/victoriaescobar123/" },
  { name: "Olivia Grosso", role: "Coordinador", career: "Bioingeniería", careerEn: "Bioengineering", email: "ogrosso@itba.edu.ar", photo: "/images/team/olivia.jpg", photoCompressed: "/images/team/side-eye/olivia-side-eye.png", linkedin: "https://www.linkedin.com/in/olivia-grosso/" },
  { name: "Tommy Varas", role: "Coordinador", career: "Ingeniería Industrial", careerEn: "Industrial Engineering", email: "tvaras@itba.edu.ar", photo: "/images/team/tommy.jpg", photoCompressed: "/images/team/side-eye/tommy-side-eye.png", linkedin: "https://www.linkedin.com/in/tommyvaras/" },
  { name: "Francisco Galan", role: "Coordinador", career: "Lic. Gestión de Negocios y Tecnología", careerEn: "Business Management and Technology", email: "fragalan@itba.edu.ar", photo: "/images/team/fran1.png", photoCompressed: "/images/team/side-eye/fran_side-eye1.jpg", linkedin: "https://www.linkedin.com/in/franciscoogalan/" },
];

export const sponsorTiers = [
  {
    tier: "Silver",
    perks: [
      "Logo en materiales del evento",
      "Booth en el Hub",
      "Mención en redes sociales",
    ],
    perksEn: [
      "Logo on event materials",
      "Booth at the Hub",
      "Social media mention",
    ],
  },
  {
    tier: "Gold",
    perks: [
      "Todo lo de Silver",
      "Stand destacado",
      "Charla de 10 min en el Hub",
      "Acceso a base de CVs",
    ],
    perksEn: [
      "Everything in Silver",
      "Featured booth",
      "10-min talk at the Hub",
      "Access to CV database",
    ],
  },
  {
    tier: "Platinum",
    perks: [
      "Todo lo de Gold",
      "Naming rights en un evento",
      "Panel exclusivo con estudiantes",
      "Logo en el escenario principal",
    ],
    perksEn: [
      "Everything in Gold",
      "Naming rights on an event",
      "Exclusive student panel",
      "Logo on the main stage",
    ],
  },
];

export const pastSponsors = [
  { name: "AWS", src: "/logos/sponsors/aws.png" },
  { name: "NaranjaX", src: "/logos/sponsors/Naranjax.png" },
  { name: "Pan American Energy", src: "/logos/sponsors/pae.png" },
  { name: "Cocos Capital", src: "/logos/sponsors/cocos.webp" },
  { name: "JP Morgan", src: "/logos/sponsors/jpmorganwhitee.png" },
  { name: "Complif", src: "/logos/sponsors/complifgris.avif" },
  { name: "PedidosYa", src: "/logos/sponsors/png-transparent-pedidosya-hd-logo-removebg-preview.png" },
  { name: "Embajada USA", src: "/logos/sponsors/embassyusa.png" },
  { name: "Rohde & Schwarz", src: "/logos/sponsors/Rohde&shwarz.png.png" },
  { name: "SF500", src: "/logos/sponsors/SF500white.png" },
  { name: "PdI", src: "/logos/sponsors/PdI-logo-blanco.png" },
];

export const instagramReels = [
  { id: "DYiRi9jPfSa", caption: "Entrevistas con emprendedores - Bianca" },
  { id: "DX-JSKZvpg2", caption: "Entrevistas con emprendedores - Opal" },
  { id: "DYQLF5pPjjs", caption: "Entrevistas con emprendedores - Rels" },
];

export const marqueeKeywords = [
  "Emprendedurismo",
  "Innovación",
  "ITBA",
  "Silicon Valley",
  "Startups",
  "Networking",
  "BioHack",
  "Hub",
  "Talks",
  "Tech",
  "Argentina",
  "Comunidad",
  "Talento"
];

export const marqueeKeywordsEn = [
  "Entrepreneurship",
  "Innovation",
  "ITBA",
  "Silicon Valley",
  "Startups",
  "Networking",
  "BioHack",
  "Hub",
  "Talks",
  "Tech",
  "Argentina",
  "Community",
  "Talent",
];

// Order matches fixed bento layout in Gallery.tsx:
// [wide][tall] / [sq][sq][tall] / [tall][wide] / [tall][sq][sq]
export const galleryImages = [
  { src: "/images/talks/hernankazah1.jpg",                  label: "Hernán Kazah",  href: "/events/talks#hernan-kazah" },// 2 sq
  { src: "/images/hub/alumnosenelhub25.JPG",                label: "Hub 2025",      href: "/events/hub#hub-2025" },      // 0 wide
  { src: "/images/hub/ProductoSponsorHub25vert.JPG",        label: "Hub 2025",      href: "/events/hub#hub-2025" },      // 1 tall
  { src: "/images/hub/XimenaDiaz-Youniversal-TTHUB24.JPG", label: "Hub 2024",      href: "/events/hub#hub-2024" },      // 3 sq
  { src: "/images/hub/Edusolohub25.JPG",                    label: "Hub 2025",      href: "/events/hub#hub-2025" },      // 6 sq
  { src: "/images/talks/talk-complif.jpg",                  label: "Complif",       href: "/events/visits#complif" },    // 5 wide
  { src: "/images/talks/hernankazah2.jpg",                  label: "Hernán Kazah",  href: "/events/talks#hernan-kazah" },// 4 tall
  { src: "/images/events/talks/jeremy-kraayenbrink/selfie-jeremy.jpg", label: "Jeremy Kraayenbrink", href: "/events/talks#jeremy-kraayenbrink" },// 7 sq
];

export interface EventImage {
  src: string;
  alt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  email: string;
}

export interface VisitEdition {
  id: string;
  company: string;
  date: string;
  dateSort: string;
  location: string;
  description: string;
  descriptionEn?: string;
  coverImage: string;
  images: EventImage[];
}

export interface TalkEdition {
  id: string;
  speaker: string;
  speakerRole: string;
  date: string;
  dateSort: string;
  location: string;
  description: string;
  descriptionEn?: string;
  coverImage: string;
  images: EventImage[];
}

// Ordered most recent first
export const visitEditions: VisitEdition[] = [
  {
    id: "complif",
    company: "Complif",
    date: "21 de mayo, 2025",
    dateSort: "2025-05-21",
    location: "ITBA, CABA",
    description:
      "Visitamos las oficinas de Complif para conocer de adentro cómo construyeron una startup de compliance en el mercado financiero. Una charla sin filtros sobre los desafíos de operar en un sector regulado y escalar en Argentina.",
    descriptionEn:
      "We visited Complif's offices to get an inside look at how they built a compliance startup in the financial market. An unfiltered conversation about the challenges of operating in a regulated sector and scaling in Argentina.",
    coverImage: "/images/events/visits/complif/audiencia-speaker.jpg",
    images: [
      { src: "/images/events/visits/complif/speakers.jpg", alt: "Speakers de Complif" },
      { src: "/images/events/visits/complif/speakers-wider.jpg", alt: "Speakers de Complif" },
      { src: "/images/events/visits/complif/speakers-ramallo.jpg", alt: "Speaker mirando a Ramallo" },
      { src: "/images/events/visits/complif/speakers-caramutti.jpg", alt: "Speaker mirando a Caramutti" },
      { src: "/images/events/visits/complif/caramutti.jpg", alt: "Caramutti" },
      { src: "/images/events/visits/complif/speakers-riendose.jpg", alt: "Speakers de Complif" },
    ],
  },
  {
    id: "pedidosya",
    company: "PedidosYa",
    date: "10 de marzo, 2025",
    dateSort: "2025-03-10",
    location: "CABA",
    description:
      "El equipo de PedidosYa abrió las puertas de su auditorio para contarnos los desafíos de escalar una plataforma de delivery en América Latina. Tecnología, cultura y aprendizajes de uno de los unicornios de la región.",
    descriptionEn:
      "The PedidosYa team opened the doors of their auditorium to share the challenges of scaling a delivery platform across Latin America. Technology, culture, and lessons from one of the region's unicorns.",
    coverImage: "/images/events/visits/pedidosya/tt-team-speaker.jpg",
    images: [
      { src: "/images/events/visits/pedidosya/ultrawide.jpg", alt: "Auditorio de PedidosYa" },
      { src: "/images/events/visits/pedidosya/bienvenida.jpg", alt: "Bienvenida en PedidosYa" },
      { src: "/images/events/visits/pedidosya/speaker-audiencia.jpg", alt: "Speaker y audiencia" },
      { src: "/images/events/visits/pedidosya/speaker-primera-fila.jpg", alt: "Speaker con primera fila" },
      { src: "/images/events/visits/pedidosya/audiencia-back.jpg", alt: "Audiencia desde atras" },
    ],
  },
];

export interface HubEdition {
  year: string;
  date: string;
  location: string;
  description: string;
  descriptionEn?: string;
  images: EventImage[];
  team: TeamMember[];
}

export const hubPage = {
  coverImage: "/images/hub/alumnosenelhub25.JPG",
  editions: [
    {
      year: "2025",
      date: "Agosto 2025",
      location: "Parque de la Innovación, CABA",
      description:
        "Más de 300 estudiantes universitarios de todo el país, empresas líderes y emprendedores en un mismo lugar.",
      descriptionEn:
        "Over 300 university students from across the country, leading companies and entrepreneurs all in one place.",
      images: [
        { src: "/images/hub/NewtopiaHub25muybuenafoto.JPG", alt: "Hub 2025" },
        { src: "/images/hub/Edusolohub25.JPG", alt: "Hub 2025" },
        { src: "/images/hub/entrevistanewtopioahub.JPG", alt: "Hub 2025" },
        { src: "/images/hub/alumnosenelhub25.JPG", alt: "Hub 2025" },
        { src: "/images/hub/ProductoSponsorHub25vert.JPG", alt: "Hub 2025" },
        { src: "/images/hub/hubpreparacion.JPG", alt: "Hub 2025" },
      ],
      team: [
        { name: "Santiago Moreno",       role: "Director",    email: "samoreno@itba.edu.ar" },
        { name: "Eduardo Tormakh",       role: "Director",    email: "etormakh@itba.edu.ar" },
        { name: "Tadeo Scardilli",       role: "Coordinador", email: "tscardilli@itba.edu.ar" },
        { name: "Tomas Puiggari Medici", role: "Coordinador", email: "tpuiggarimedici@itba.edu.ar" },
        { name: "Maria Eugenia Arrinda", role: "Coordinador", email: "marrinda@itba.edu.ar" },
        { name: "Eloisa Aleman Monch",   role: "Coordinador", email: "ealemanmonch@itba.edu.ar" },
        { name: "Julian Guerrero",       role: "Coordinador", email: "jguerrero@itba.edu.ar" },
      ],
    },
    {
      year: "2024",
      date: "Agosto 2024",
      location: "Parque de la Innovación, CABA",
      description:
        "La primera edición del Hub. Emprendedores, estudiantes y empresas en el Parque de la Innovación.",
      descriptionEn:
        "The first Hub edition. Entrepreneurs, students and companies at the Parque de la Innovación.",
      images: [
        { src: "/images/hub/XimenaDiaz-Youniversal-TTHUB24.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-speakers-wide.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-speakers.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-speaker1.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-speaker2.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-ximena-bags.JPG", alt: "Hub 2024" },
      ],
      team: [
        { name: "Martín Hecht",       role: "Director",    email: "mhecht@itba.edu.ar" },
        { name: "María Luján Lladó",  role: "Director",    email: "mallado@itba.edu.ar" },
        { name: "Santiago Allende",   role: "Coordinador", email: "sallende@itba.edu.ar" },
        { name: "Santiago Moreno",    role: "Coordinador", email: "samoreno@itba.edu.ar" },
        { name: "Eduardo Tormakh",    role: "Coordinador", email: "etormakh@itba.edu.ar" },
        { name: "Paloma Tralma",      role: "Coordinador", email: "ptralma@itba.edu.ar" },
      ],
    },
  ] as HubEdition[],
};

export interface TTSVEdition {
  year: string;
  dates: string;
  location: string;
  paragraphs: string[];
  paragraphsEn?: string[];
  teamMembers: TeamMember[];
  coverImage: string;
  images: EventImage[];
}

// Ordered most recent first
export const ttsvEditions: TTSVEdition[] = [
  {
    year: "2025",
    dates: "23 enero – 4 febrero, 2025",
    location: "San Francisco, California",
    paragraphs: [
      "Del 23 de enero al 4 de febrero viajamos a San Francisco para aprender del ecosistema emprendedor. Los primeros días vivimos en una casa en Silicon Valley junto a ingenieros de la NASA, NVIDIA y emprendedores desarrollando sus propios proyectos. Cada cena era una clase universitaria.",
      "Visitamos Apple, Intel, NVIDIA, Matternet, Tesla, Stanford, Google, Amazon, LinkedIn, GitHub, Vercel y Founders Inc., entre muchos otros. Organizamos un panel en Varian junto al Consulado General de Argentina en Los Angeles y un happy hour con graduados del ITBA en Mountain View.",
      "Lo mejor fue conocer personas unidas por la misma mentalidad: pensar en grande y no conformarse con poco. Recorrer Silicon Valley con amigos te cambia la forma de ver el mundo.",
    ],
    paragraphsEn: [
      "From January 23 to February 4 we traveled to San Francisco to learn from the entrepreneurial ecosystem. The first days we lived in a house in Silicon Valley alongside NASA and NVIDIA engineers and entrepreneurs developing their own projects. Every dinner was a university lecture.",
      "We visited Apple, Intel, NVIDIA, Matternet, Tesla, Stanford, Google, Amazon, LinkedIn, GitHub, Vercel and Founders Inc., among many others. We organized a panel at Varian alongside the Argentine Consulate General in Los Angeles and a happy hour with ITBA alumni in Mountain View.",
      "The best part was meeting people united by the same mindset: thinking big and not settling for less. Touring Silicon Valley with friends changes the way you see the world.",
    ],
    teamMembers: [
      { name: "Santiago Moreno",      role: "Director",    email: "samoreno@itba.edu.ar" },
      { name: "Eduardo Tormakh",      role: "Director",    email: "etormakh@itba.edu.ar" },
      { name: "Tadeo Scardilli",      role: "Coordinador", email: "tscardilli@itba.edu.ar" },
      { name: "Tomas Puiggari Medici",role: "Coordinador", email: "tpuiggarimedici@itba.edu.ar" },
      { name: "Maria Eugenia Arrinda",role: "Coordinador", email: "marrinda@itba.edu.ar" },
      { name: "Eloisa Aleman Monch",  role: "Coordinador", email: "ealemanmonch@itba.edu.ar" },
      { name: "Julian Guerrero",      role: "Coordinador", email: "jguerrero@itba.edu.ar" },
    ],
    coverImage: "/images/ttsv25.png",
    images: [
      { src: "/images/ttsv/team.jpg",       alt: "Equipo Tech Trek Silicon Valley 2025" },
      { src: "/images/ttsv/linkedin.jpg",   alt: "Visita a LinkedIn" },
      { src: "/images/ttsv/happyrobot.jpg", alt: "HappyRobot con Marcos Diehl" },
      { src: "/images/ttsv/vercel.jpg",     alt: "Visita a Vercel" },
      { src: "/images/ttsv/team2.jpg",      alt: "Tech Trek Silicon Valley 2025" },
      { src: "/images/ttsv/team3.jpg",      alt: "Tech Trek Silicon Valley 2025" },
      { src: "/images/ttsv/team4.jpg",      alt: "Tech Trek Silicon Valley 2025" },
    ],
  },
];

// Ordered most recent first
export const talkEditions: TalkEdition[] = [
  {
    id: "jeremy-kraayenbrink",
    speaker: "Jeremy Kraayenbrink",
    speakerRole: "Fundador de Un Mate",
    date: "25 de junio, 2026",
    dateSort: "2026-06-25",
    location: "ITBA, CABA",
    description:
      "Un Mate no empezó vendiéndole a individuos: empezó exportando en volumen a embajadas y organismos internacionales. Jeremy Kraayenbrink construyó la marca al revés: primero el mundo, después Argentina. Habló de innovar en un rubro tradicional, de ver las copias como validación y no como robo, de delegar sin perder el alma del negocio, y de aplicar la mentalidad del atleta al emprendimiento. Su motor: del porqué al qué, del qué al cómo.",
    descriptionEn:
      "Un Mate didn't start selling to individuals: it started exporting in bulk to embassies and international organizations. Jeremy Kraayenbrink built the brand in reverse: first the world, then Argentina. He talked about innovating in a traditional industry, seeing copies as validation instead of theft, delegating without losing the soul of the business, and applying an athlete's mindset to entrepreneurship.",
    coverImage: "/images/events/talks/jeremy-kraayenbrink/cover.jpg",
    images: [
      { src: "/images/events/talks/jeremy-kraayenbrink/jeremy-tommy-hablando.jpg", alt: "Jeremy Kraayenbrink y Tommy en la charla" },
      { src: "/images/events/talks/jeremy-kraayenbrink/jeremy-tommy.jpg",          alt: "Jeremy Kraayenbrink con Tommy Varas" },
      { src: "/images/events/talks/jeremy-kraayenbrink/selfie-jeremy.jpg",         alt: "Selfie con Jeremy Kraayenbrink" },
      { src: "/images/events/talks/jeremy-kraayenbrink/audiencia-2.jpg",           alt: "Audiencia en la Talk de Jeremy" },
    ],
  },
  {
    id: "hernan-kazah",
    speaker: "Hernán Kazah",
    speakerRole: "Co-fundador de Kaszek · MercadoLibre",
    date: "19 de septiembre, 2025",
    dateSort: "2025-09-19",
    location: "ITBA, CABA",
    description:
      "Hernán Kazah recorrió los desafíos de emprender y escalar en Latinoamérica: cómo elegir co-founders, definir roles desde el día uno y aprovechar modelos de negocios digitales. También habló sobre qué buscan realmente los inversores y cómo piensan ante la incertidumbre.",
    descriptionEn:
      "Hernán Kazah covered the challenges of entrepreneurship and scaling in Latin America: how to choose co-founders, define roles from day one, and leverage digital business models. He also spoke about what investors really look for and how they think under uncertainty.",
    coverImage: "/images/talks/hernankazah1.jpg",
    images: [
      { src: "/images/talks/hernankazah2.jpg", alt: "Hernán Kazah TT Talks" },
      { src: "/images/talks/hernankazah3.jpg", alt: "Hernán Kazah TT Talks" },
    ],
  },
  {
    id: "nico-varrone",
    speaker: "Nico Varrone",
    speakerRole: "Piloto de Fórmula 2",
    date: "26 de noviembre, 2025",
    dateSort: "2025-11-26",
    location: "ITBA, CABA",
    description:
      "Nico Varrone contó lo que hay detrás de una carrera en el automovilismo de elite: las inversiones, los sponsors, los sacrificios y la mentalidad para competir en Europa desde Argentina.",
    descriptionEn:
      "Nico Varrone shared what lies behind a career in elite motorsport: the investments, sponsors, sacrifices, and the mindset needed to compete in Europe from Argentina.",
    coverImage: "/images/events/talks/nico-varrone/audiencia-speaker.jpg",
    images: [
      { src: "/images/events/talks/nico-varrone/audiencia-riendose.jpg", alt: "Audiencia riendose con el speaker" },
      { src: "/images/events/talks/nico-varrone/entrevistador-speaker.jpg", alt: "Entrevistador y Nico Varrone" },
      { src: "/images/events/talks/nico-varrone/audiencia-logo.jpg", alt: "Audiencia y speaker con logo TT" },
      { src: "/images/events/talks/nico-varrone/speaker-estudiantes.jpg", alt: "Nico Varrone con estudiantes" },
      { src: "/images/events/talks/nico-varrone/audiencia-back.jpg", alt: "Audiencia desde atras" },
    ],
  },
];
