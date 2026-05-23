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
  { value: 6, suffix: "", label: "Coordinadores" },
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
  { name: "Tadeo Scardilli", role: "Director", career: "Lic. Gestión de Negocios y Tecnología", email: "tscardilli@itba.edu.ar", photo: "/images/team/tadeo.jpg", photoCompressed: "/images/team/side-eye/tadeo-side-eye.png", linkedin: "https://www.linkedin.com/in/tadeoscardilli/" },
  { name: "Bernardo Ortiz", role: "Coordinador", career: "Lic. Gestión de Negocios y Tecnología", email: "bortiz@itba.edu.ar", photo: "/images/team/bernardo.jpg", photoCompressed: "/images/team/side-eye/bernardo-side-eye.png", linkedin: "https://www.linkedin.com/in/bernardo-ortiz-perfil/?locale=en-US" },
  { name: "Tommy Varas", role: "Coordinador", career: "Ingeniería Industrial", email: "tvaras@itba.edu.ar", photo: "/images/team/tommy.jpg", photoCompressed: "/images/team/side-eye/tommy-side-eye.png", linkedin: "https://www.linkedin.com/in/tommyvaras/" },
  { name: "Francisco Galan", role: "Coordinador", career: "Lic. Gestión de Negocios y Tecnología", email: "fragalan@itba.edu.ar", photo: "/images/team/fran1.png", photoCompressed: "/images/team/side-eye/fran_side-eye1.jpg", linkedin: "https://www.linkedin.com/in/franciscoogalan/" },
  { name: "Victoria Escobar", role: "Coordinador", career: "Bioingeniería", email: "vescobar@itba.edu.ar", photo: "/images/team/victoria.jpg", photoCompressed: "/images/team/side-eye/victoria-side-eye.png", linkedin: "https://www.linkedin.com/in/victoriaescobar123/" },
  { name: "Olivia Grosso", role: "Coordinador", career: "Bioingeniería", email: "ogrosso@itba.edu.ar", photo: "/images/team/olivia.jpg", photoCompressed: "/images/team/side-eye/olivia-side-eye.png", linkedin: "https://www.linkedin.com/in/olivia-grosso/" },
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
  { id: "DX-JSKZvpg2", caption: "Entrevistas con emprendedores" },
  { id: "DYQLF5pPjjs", caption: "Entrevistas con emprendedores" },
  { id: "DYiRi9jPfSa", caption: "Entrevistas con emprendedores" },
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
  { src: "/images/hub/XimenaDiaz-Youniversal-TTHUB24.JPG", label: "Hub 2024" },
  { src: "/images/talks/HKazah1.jpg", label: "TT Talks" },
  { src: "/images/hub/Edusolohub25.JPG", label: "Hub 2025" },
  { src: "/images/talks/talk-complif.jpg", label: "TT Visits" },
  { src: "/images/talks/HKazah2.jpg", label: "TT Talks" },
  { src: "/images/talks/talk-nico-varrone.jpg", label: "TT Talks" },
];
