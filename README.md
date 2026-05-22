# Tech Trek — Landing Page

Landing page oficial de [Tech Trek ITBA](https://www.instagram.com/techtrekar), la iniciativa estudiantil del ITBA que acerca el ecosistema emprendedor a la próxima generación de fundadores.

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  page.tsx          # Composición de secciones
  globals.css       # Animaciones globales (marquee, etc.)
components/
  sections/         # Una sección por archivo (Hero, Events, About, Sponsors, ...)
  ui/               # Componentes reutilizables (AnimatedSection, Nav, Footer)
data/
  content.ts        # Toda la info del sitio: equipo, eventos, sponsors, galería
public/
  images/           # Fotos del equipo y galería
  logos/            # Logo de Tech Trek, ITBA y sponsors
  videos/           # Videos de fondo
```

## Actualizar contenido

Todo el contenido editable está en `data/content.ts`:

- **Equipo** — agregar/editar miembros en el array `team`. Cada miembro acepta `photo` (foto normal) y `photoCompressed` (foto side-eye para el hover del vecino).
- **Eventos** — array `events`.
- **Sponsors** — array `pastSponsors`. Los logos van en `public/logos/sponsors/`.
- **Galería** — array `galleryImages`. Las fotos van en `public/images/`.
- **Reels de Instagram** — array `instagramReels` con los IDs de cada reel.

## Contribuir

Si sos parte del equipo de Tech Trek o colaborador, los PRs son bienvenidos. Cualquier mejora de diseño, contenido o código es un buen motivo para abrir uno.

## Contacto

techtrek@itba.edu.ar
