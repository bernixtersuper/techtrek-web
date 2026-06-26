export type Lang = "es" | "en";

const es = {
  nav: {
    events: "Eventos",
    about: "Nosotros",
    sponsors: "Sponsors",
    join: "Sumate",
    beASponsor: "Ser Sponsor",
  },
  hero: {
    pre1: "Donde el",
    highlight1: "talento",
    pre2: "se encuentra con el",
    highlight2: "futuro",
    tagline:
      "Acercamos el emprendedurismo a los estudiantes universitarios a través del Hub, Talks y BioHackathon.",
    cta1: "Ver Eventos",
    cta2: "Ser Sponsor",
  },
  stats: {
    eyebrow: "Números que hablan",
  },
  events: {
    eyebrow: "Lo que hacemos",
    heading1: "Nuestros",
    heading2: "Eventos",
    cta: "Ver ediciones",
  },
  ttsv: {
    eyebrow: "Tech Trek Silicon Valley",
    heading1: "Un viaje",
    heading2: "único",
    description:
      "Dos semanas en Silicon Valley y San Francisco: visitas a empresas, cenas con ingenieros de la NASA, founders y emprendedores, y una forma distinta de pensar el mundo.",
    badge: "Único en el ITBA",
    cta: "Ver edición 2025",
  },
  gallery: {
    eyebrow: "Momentos reales",
    heading1: "Así se",
    heading2: "vive",
  },
  showreel: {
    eyebrow: "Hub 2025",
    heading1: "Voces del",
    heading2: "ecosistema",
    caption: "Entrevistas a founders, inversores y builders — Tech Trek Hub 2025",
  },
  interviews: {
    eyebrow: "TT Entrevistas",
    heading1: "Founders",
    heading2: "en primera",
    heading3: "persona",
    description:
      "Hablamos con emprendedores argentinos que están construyendo algo real. Sin filtro, sin guión.",
    cta: "Ver todas en Instagram →",
  },
  about: {
    eyebrow: "Quienes somos",
    heading1: "Somos",
    heading2: "estudiantes",
    heading3: "del ITBA",
    p1: "No somos una empresa. No somos una ONG. Somos estudiantes que creen que el ecosistema emprendedor argentino necesita más conexión con la próxima generación de fundadores.",
    p2: "Tech Trek nació en el ITBA para acercar a estudiantes de ingeniería, administración y carreras afines con emprendedores, inversores y empresas que estan cambiando las reglas del juego.",
    itbaFull: "Instituto Tecnológico de Buenos Aires",
    teamLabel: "El equipo",
  },
  sponsors: {
    eyebrow: "Sponsors",
    heading1: "Sé parte",
    heading2: "del cambio",
    trusted: "Confiaron en nosotros",
    cta: "¿Querés sumarte?",
    ctaDesc: "Escribinos y te contamos todas las formas de colaborar con nosotros.",
  },
  newsletter: {
    eyebrow: "Comunidad",
    tabStudent: "Estudiante",
    tabCompany: "Empresa",
    descStudent: "Hub, Talks, Visits y más. Todo en tu mail. Antes que nadie.",
    descCompany:
      "Dejanos tu contacto y nuestro equipo se comunica con ustedes para encontrar la mejor forma de trabajar juntos.",
    labelName: "Nombre",
    placeholderName: "Tu nombre",
    labelEmail: "Email",
    placeholderEmail: "tu@mail.com",
    labelCompany: "Empresa",
    placeholderCompany: "Nombre de la empresa",
    labelNotes: "Notas",
    optional: "(opcional)",
    placeholderNotesStudent: "¿Qué estudiás? ¿Qué evento te interesa más?",
    placeholderNotesCompany: "¿En qué están interesados? ¿Tienen alguna consulta?",
    error: "Algo falló. Revisá tu conexión e intentá de nuevo.",
    loading: "Enviando...",
    submitStudent: "Anotarme",
    submitCompany: "Enviar",
    successLabel: "Listo",
    successStudentTitle: "Ya estás en la lista.",
    successStudentSub: "Te avisamos cuando haya novedades.",
    successCompanyTitle: "Gracias por el interés.",
    successCompanySub: "Nuestro equipo se va a contactar con ustedes.",
  },
  footer: {
    events: "Eventos",
    about: "Nosotros",
    sponsors: "Sponsors",
    join: "Sumate",
    initiative: "Una iniciativa del ITBA",
  },
  eventFooterNav: {
    explore: "Seguir explorando",
    backHome: "Volver a inicio",
  },
  eventNav: {
    back: "Inicio",
  },
  teamAccordion: {
    team: "Equipo",
  },
};

const en: typeof es = {
  nav: {
    events: "Events",
    about: "About",
    sponsors: "Sponsors",
    join: "Join",
    beASponsor: "Be a Sponsor",
  },
  hero: {
    pre1: "Where",
    highlight1: "talent",
    pre2: "meets",
    highlight2: "the future",
    tagline:
      "We bring entrepreneurship closer to university students through the Hub, Talks, and BioHackathon.",
    cta1: "See Events",
    cta2: "Be a Sponsor",
  },
  stats: {
    eyebrow: "Numbers that speak",
  },
  events: {
    eyebrow: "What we do",
    heading1: "Our",
    heading2: "Events",
    cta: "See editions",
  },
  ttsv: {
    eyebrow: "Tech Trek Silicon Valley",
    heading1: "A one-of-a-kind",
    heading2: "journey",
    description:
      "Two weeks in Silicon Valley and San Francisco: company visits, dinners with NASA engineers, founders and entrepreneurs, and a completely different way of seeing the world.",
    badge: "Unique at ITBA",
    cta: "See 2025 edition",
  },
  gallery: {
    eyebrow: "Real moments",
    heading1: "This is how",
    heading2: "it feels",
  },
  showreel: {
    eyebrow: "Hub 2025",
    heading1: "Voices from",
    heading2: "the ecosystem",
    caption: "Interviews with founders, investors and builders — Tech Trek Hub 2025",
  },
  interviews: {
    eyebrow: "TT Interviews",
    heading1: "Founders",
    heading2: "in their own",
    heading3: "words",
    description:
      "We talked with Argentine entrepreneurs who are building something real. No filter, no script.",
    cta: "See all on Instagram →",
  },
  about: {
    eyebrow: "Who we are",
    heading1: "We are",
    heading2: "students",
    heading3: "from ITBA",
    p1: "We're not a company. We're not an NGO. We are students who believe the Argentine entrepreneurial ecosystem needs more connection with the next generation of founders.",
    p2: "Tech Trek was born at ITBA to bring engineering, business, and related students closer to entrepreneurs, investors, and companies that are changing the rules of the game.",
    itbaFull: "Instituto Tecnológico de Buenos Aires",
    teamLabel: "The team",
  },
  sponsors: {
    eyebrow: "Sponsors",
    heading1: "Be part of",
    heading2: "the change",
    trusted: "They trusted us",
    cta: "Want to join?",
    ctaDesc: "Write to us and we'll tell you all the ways to collaborate.",
  },
  newsletter: {
    eyebrow: "Community",
    tabStudent: "Student",
    tabCompany: "Company",
    descStudent: "Hub, Talks, Visits and more. All in your inbox. Before anyone else.",
    descCompany:
      "Leave us your contact and our team will reach out to find the best way to work together.",
    labelName: "Name",
    placeholderName: "Your name",
    labelEmail: "Email",
    placeholderEmail: "you@mail.com",
    labelCompany: "Company",
    placeholderCompany: "Company name",
    labelNotes: "Notes",
    optional: "(optional)",
    placeholderNotesStudent: "What are you studying? Which event interests you most?",
    placeholderNotesCompany: "What are you interested in? Any questions?",
    error: "Something went wrong. Check your connection and try again.",
    loading: "Sending...",
    submitStudent: "Sign me up",
    submitCompany: "Send",
    successLabel: "Done",
    successStudentTitle: "You're on the list.",
    successStudentSub: "We'll notify you when there's news.",
    successCompanyTitle: "Thanks for your interest.",
    successCompanySub: "Our team will get in touch with you.",
  },
  footer: {
    events: "Events",
    about: "About",
    sponsors: "Sponsors",
    join: "Join",
    initiative: "An ITBA initiative",
  },
  eventFooterNav: {
    explore: "Keep exploring",
    backHome: "Back to home",
  },
  eventNav: {
    back: "Home",
  },
  teamAccordion: {
    team: "Team",
  },
};

export const translations = { es, en };
export type Translations = typeof es;
