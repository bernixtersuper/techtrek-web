export const siteConfig = {
  name: "Tech Trek",
  tagline: "Acercamos el emprendedurismo a los estudiantes del ITBA",
  institution: "ITBA — Instituto Tecnológico de Buenos Aires",
  email: "techtrek@itba.edu.ar",
  socials: {
    linkedin: "https://www.linkedin.com/company/techtrek/",
    instagram: "https://www.instagram.com/techtrekar",
  },
  itbaUrl: "https://www.itba.edu.ar/",
};

export const stats = [
  { value: 300, suffix: "+", label: "Asistentes al Hub 2025" },
  { value: 6, suffix: "", label: "Miembros" },
];

export const events = [
  {
    id: "hub",
    name: "Tech Trek Hub",
    shortName: "Hub",
    description:
      "Evento principal. Más de 300 estudiantes universitarios de todo el país, empresas líderes y emprendedores en un mismo lugar.",
    date: "Agosto 2026",
    location: "Parque de la Innovación, CABA",
    featured: true,
    tag: "Evento Principal",
  },
  {
    id: "visits",
    name: "Tech Trek Visits",
    shortName: "Visits",
    description:
      "Visitamos las oficinas de empresas sponsor a lo largo del año. Un espacio para conocer de adentro cómo trabajan las compañías que están construyendo el futuro.",
    date: "A lo largo del año",
    location: "CABA",
    featured: false,
    tag: "Visitas a Empresas",
  },
  {
    id: "talks",
    name: "Tech Trek Talks",
    shortName: "Talks",
    description:
      "Charlas íntimas con emprendedores reales. No figuras corporativas — personas con historias concretas para contar.",
    date: "A lo largo del año",
    location: "ITBA, CABA",
    featured: false,
    tag: "Serie de Charlas",
  },
  {
    id: "biohack",
    name: "BioHackathon",
    shortName: "BioHack",
    description:
      "12 horas, 15 equipos, 3 desafíos reales de empresas. Estudiantes multidisciplinarios compiten con ideas que resuelven problemas de MedTech, Agro y Pharma.",
    date: "2026",
    location: "ITBA, CABA",
    featured: false,
    tag: "Hackathon",
  },
];

export const team = [
  { name: "Tadeo Scardilli", role: "Director", career: "Lic. Gestión de Negocios y Tecnología", email: "tscardilli@itba.edu.ar", photo: "/images/team/tadeo.jpg", photoCompressed: "/images/team/side-eye/tadeo-side-eye1.png", linkedin: "https://www.linkedin.com/in/tadeoscardilli/" },
  { name: "Bernardo Ortiz", role: "Coordinador", career: "Lic. Gestión de Negocios y Tecnología", email: "bortiz@itba.edu.ar", photo: "/images/team/bernardo.jpg", photoCompressed: "/images/team/side-eye/bernardo-side-eye.png", linkedin: "https://www.linkedin.com/in/bernardo-ortiz-perfil/?locale=en-US" },
  { name: "Victoria Escobar", role: "Coordinador", career: "Bioingeniería", email: "vescobar@itba.edu.ar", photo: "/images/team/victoria1.jpg", photoCompressed: "/images/team/side-eye/victoria-side-eye1.png", linkedin: "https://www.linkedin.com/in/victoriaescobar123/" },
  { name: "Olivia Grosso", role: "Coordinador", career: "Bioingeniería", email: "ogrosso@itba.edu.ar", photo: "/images/team/olivia.jpg", photoCompressed: "/images/team/side-eye/olivia-side-eye.png", linkedin: "https://www.linkedin.com/in/olivia-grosso/" },
  { name: "Tommy Varas", role: "Coordinador", career: "Ingeniería Industrial", email: "tvaras@itba.edu.ar", photo: "/images/team/tommy.jpg", photoCompressed: "/images/team/side-eye/tommy-side-eye.png", linkedin: "https://www.linkedin.com/in/tommyvaras/" },
  { name: "Francisco Galan", role: "Coordinador", career: "Lic. Gestión de Negocios y Tecnología", email: "fragalan@itba.edu.ar", photo: "/images/team/fran1.png", photoCompressed: "/images/team/side-eye/fran_side-eye1.jpg", linkedin: "https://www.linkedin.com/in/franciscoogalan/" },
];

export const sponsorTiers = [
  {
    tier: "Silver",
    perks: [
      "Logo en materiales del evento",
      "Booth en el Hub",
      "Mención en redes sociales",
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
  },
  {
    tier: "Platinum",
    perks: [
      "Todo lo de Gold",
      "Naming rights en un evento",
      "Panel exclusivo con estudiantes",
      "Logo en el escenario principal",
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
  { name: "SF500", src: "/logos/sponsors/SF500.png" },
  { name: "PdI", src: "/logos/sponsors/PdI logo gris.png" },
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
];

export const galleryImages = [
  { src: "/images/hub/alumnosenelhub25.JPG", label: "Hub 2025" },
  { src: "/images/talks/hernankazah1.jpg", label: "TT Talks" },
  { src: "/images/hub/XimenaDiaz-Youniversal-TTHUB24.JPG", label: "Hub 2024" },
  { src: "/images/hub/ProductoSponsorHub25vert.JPG", label: "Hub 2025" },
  { src: "/images/talks/talk-complif.jpg", label: "TT Visits" },
  { src: "/images/talks/hernankazah2.jpg", label: "TT Talks" },
  { src: "/images/hub/Edusolohub25.JPG", label: "Hub 2025" },
  { src: "/images/talks/talk-nico-varrone.jpg", label: "TT Talks" },
];

export interface EventImage {
  src: string;
  alt: string;
}

export interface VisitEdition {
  id: string;
  company: string;
  date: string;
  dateSort: string;
  location: string;
  description: string;
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
  images: EventImage[];
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
      images: [
        { src: "/images/hub/NewtopiaHub25muybuenafoto.JPG", alt: "Hub 2025" },
        { src: "/images/hub/Edusolohub25.JPG", alt: "Hub 2025" },
        { src: "/images/hub/entrevistanewtopioahub.JPG", alt: "Hub 2025" },
        { src: "/images/hub/alumnosenelhub25.JPG", alt: "Hub 2025" },
        { src: "/images/hub/ProductoSponsorHub25vert.JPG", alt: "Hub 2025" },
        { src: "/images/hub/hubpreparacion.JPG", alt: "Hub 2025" },
      ],
    },
    {
      year: "2024",
      date: "Agosto 2024",
      location: "Parque de la Innovación, CABA",
      description:
        "La primera edición del Hub. Emprendedores, estudiantes y empresas en el Parque de la Innovación.",
      images: [
        { src: "/images/hub/XimenaDiaz-Youniversal-TTHUB24.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-speakers-wide.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-speakers.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-speaker1.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-speaker2.JPG", alt: "Hub 2024" },
        { src: "/images/hub/hub24-ximena-bags.JPG", alt: "Hub 2024" },
      ],
    },
  ] as HubEdition[],
};

// Ordered most recent first
export const talkEditions: TalkEdition[] = [
  {
    id: "hernan-kazah",
    speaker: "Hernán Kazah",
    speakerRole: "Co-fundador de Kaszek · MercadoLibre",
    date: "19 de septiembre, 2025",
    dateSort: "2025-09-19",
    location: "ITBA, CABA",
    description:
      "Hernán Kazah recorrió los desafíos de emprender y escalar en Latinoamérica: cómo elegir co-founders, definir roles desde el día uno y aprovechar modelos de negocios digitales. También habló sobre qué buscan realmente los inversores y cómo piensan ante la incertidumbre.",
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
