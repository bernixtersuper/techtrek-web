# Tech Trek Web — Claude Code Guide

Landing page de Tech Trek ITBA. Next.js 15 + TypeScript + Tailwind + Framer Motion.

## Correr el proyecto

```bash
npm run dev   # localhost:3000
npm run build
```

## Lo más importante: data/content.ts

**Todo el contenido editable está acá.** Para cambiar texto, fotos, o listas, solo tocar este archivo:

- `team` — miembros del equipo. Cada uno tiene `photo` (foto normal) y `photoCompressed` (foto side-eye que aparece cuando un vecino hace hover). Las fotos van en `public/images/team/` y `public/images/team/side-eye/`.
- `events` — Hub, Talks, BioHackathon.
- `pastSponsors` — logos del carrusel. Los archivos van en `public/logos/sponsors/`.
- `galleryImages` — fotos del bento grid. Van en `public/images/`.
- `instagramReels` — IDs de reels de Instagram (solo el ID, no la URL completa).
- `siteConfig` — nombre, mail, redes sociales, URL del ITBA.
- `stats` — números que aparecen en la sección de stats.

## Estructura de secciones

`app/page.tsx` define el orden. Cada sección es un componente en `components/sections/`:

```
Hero → Marquee → Stats → Events → TTSV → Gallery → HypeVideo → Showreel → Interviews → About → Sponsors → Contact → Footer
```

Para agregar una sección nueva: crear el componente en `components/sections/` e importarlo en `app/page.tsx`.

## Diseño

| Token | Valor |
|---|---|
| Amarillo | `#eec416` |
| Negro fondo | `#0d0d0d` / `#0a0a0a` |
| Gris texto | `#999999` |
| Heading font | Syne, `fontWeight: 600` (nunca 800, queda muy ancho) |
| Body font | Inter |

Animaciones de entrada: usar `<AnimatedSection>` de `components/ui/AnimatedSection.tsx`. Acepta `delay`, `direction` ("up" | "left" | "right").

## Casos de uso comunes

**Agregar un sponsor:**
1. Poner el logo en `public/logos/sponsors/`
2. Agregar `{ name: "...", src: "/logos/sponsors/archivo.png" }` al array `pastSponsors` en `data/content.ts`

**Agregar foto de equipo:**
1. Poner la foto en `public/images/team/nombre.jpg`
2. Actualizar el campo `photo` del miembro en `team` dentro de `data/content.ts`
3. Opcional: generar foto side-eye con ChatGPT, ponerla en `public/images/team/side-eye/nombre-side-eye.png` y actualizar `photoCompressed`

**Agregar un reel de Instagram:**
1. Copiar el ID del reel de la URL (la parte después de `/reel/`)
2. Agregar `{ id: "...", caption: "..." }` al array `instagramReels` en `data/content.ts`

**Cambiar orden de secciones:** editar el orden de imports en `app/page.tsx`.
