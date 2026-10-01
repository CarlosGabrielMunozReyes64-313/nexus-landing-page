# Mejoras de SEO, medición y conversión (octubre 2026)

Cambios hechos a partir del *Informe de línea base y oportunidades digitales*
de CNS (26/09/2026). Este documento explica qué cambió, qué hay que revisar y
qué pasos quedan fuera del código.

---

## 1. Qué cambió

### Visibilidad en Google y en la IA
- **Prerenderizado**: cada página se publica como HTML completo. Google,
  ChatGPT, Gemini y las vistas previas de WhatsApp/LinkedIn leen el contenido
  sin ejecutar JavaScript. Ver `scripts/prerender.mjs`.
- **Título, descripción, canonical y Open Graph propios** en cada página.
  Se editan en `src/seo/seo.ts` (objeto `ROUTES`).
- **Datos estructurados (Schema.org)**: Organization/ProfessionalService con
  sede en Candelaria en todas las páginas; Service en cada eje y en RSE para
  MiPymes; FAQPage en RSE para MiPymes; BlogPosting en cada artículo;
  BreadcrumbList en todas.
- **sitemap.xml y robots.txt** se generan solos en cada build.
- **Página 404 real** (`src/pages/NotFound.tsx`): antes cualquier dirección
  mostraba el inicio.
- **Imagen para compartir** (`public/og-nexus.jpg`, 1200×630).
- **Descripción oficial única** en `src/config/site.ts` (`OFFICIAL_DESCRIPTION`).

### Velocidad
- **Código por partes**: cada página descarga solo lo suyo. El JavaScript de
  una página normal pasó de ~958 KB a ~280 KB; Chart.js y jsPDF solo se cargan
  en el demo.
- **Imágenes optimizadas**: de 8,9 MB a 4,9 MB, mismos nombres y formatos.

### Medición
- GA4, Google Tag Manager y Píxel de Meta, activados por variables de entorno
  (ver `.env.example`). Código en `src/lib/analytics.ts`.
- Eventos: `page_view` (cada cambio de página), `generate_lead` (formulario
  enviado; Meta: `Lead`), `whatsapp_click`, `phone_click`, `email_click`
  (Meta: `Contact`).
- Los parámetros `utm_*`, `fbclid` y `gclid` se guardan al llegar y viajan con
  cada formulario: el correo dice de qué campaña vino el contacto.

### Contacto y conversión
- **Botón flotante de WhatsApp** en todo el sitio, con mensaje prellenado.
- **Pie de página y Contacto** con WhatsApp, teléfono, correo y sede.
- **Página `/rse-mipymes`**: landing del piloto «5 cupos» con formulario de
  postulación, RSE Express + RSE por Retos, pasos y preguntas frecuentes.
  Accesos desde Inicio, menú Servicios, eje 3, Contacto, Aliados y el pie.
  El atajo `/piloto` redirige a ella (útil para impresos y pauta).
- **Formulario de contacto**: campo opcional de WhatsApp y opción «MiPyme».
- **Red de Aliados**: bloque «Recomendar una empresa» (referidos por WhatsApp).
- **Blog**: 4 artículos nuevos con URL propia sobre las búsquedas en
  crecimiento. Los artículos con texto completo enlazan a su página.

### Ajustes de lanzamiento
- Las cifras de la portada se ven desde la carga (antes «+0»).
- El año del pie se actualiza solo.
- El equipo muestra nombres completos y admite foto y LinkedIn.
- Las tarjetas de pilares de la portada enlazan a su eje.

---

## 2. Qué deben revisar antes de publicar

- [ ] **Correo visible**: `contacto@nexussostenible.co` (tomado del documento de
      identidad corporativa). Confirmar que funciona o cambiarlo en
      `src/config/site.ts`.
- [ ] **Textos del piloto** en `src/data/rseMipymes.ts`: descripción de RSE
      Express y RSE por Retos, pasos y la respuesta «¿Cuánto cuesta?»
      (dice que para las 5 empresas está financiado por la Cámara de Comercio
      de Palmira).
- [ ] **Los 4 artículos nuevos** en `src/data/blog/articulos.js`: son borradores
      con información general. Revisar y ajustar la fecha (`date` e `isoDate`).
- [ ] **Backend actualizado** (repositorio aparte): las postulaciones llegan con
      el asunto `[Piloto RSE MiPymes]` y todos los campos.

---

## 3. Cómo editar lo más común

| Qué                                   | Dónde                                         |
|---------------------------------------|-----------------------------------------------|
| Teléfono, WhatsApp, correo, dirección | `src/config/site.ts` → `SITE`                 |
| Redes sociales y Google Business      | `src/config/site.ts` → `SITE.social`, `googleBusinessUrl` (aparecen solas al llenarlas) |
| Cerrar el piloto                      | `src/config/site.ts` → `PILOT.active = false` |
| Títulos y descripciones para Google   | `src/seo/seo.ts` → `ROUTES`                   |
| Fotos y LinkedIn del equipo           | `src/data/siteData.js` → `TEAM` (`photo`, `linkedin`) |
| Dar URL propia a un artículo antiguo  | Agregarle `body` en `src/data/siteData.js` (formato en `src/data/blog/articulos.js`) |
| Nuevo artículo                        | Agregarlo en `src/data/blog/articulos.js` y en `NEW_ARTICLES` |

Después de cualquier cambio: `npm run build` (o subir a GitHub para que Vercel
lo publique).

---

## 4. Pasos fuera del código (manuales)

1. **Variables en Vercel** (frontend): `VITE_GA4_ID`, `VITE_META_PIXEL_ID`,
   `VITE_GOOGLE_SITE_VERIFICATION` y, si se usa, `VITE_GTM_ID`. Luego Redeploy.
2. **GA4**: en Administrar → Eventos, marcar `generate_lead` y `whatsapp_click`
   como **eventos clave**.
3. **Meta**: en el Administrador de eventos, usar `Lead` como evento de
   conversión de las campañas del piloto. En los anuncios, usar enlaces con UTM,
   por ejemplo:
   `https://www.nexusinnovacion.com/rse-mipymes?utm_source=meta&utm_medium=paid&utm_campaign=piloto-rse`
4. **Google Search Console**: dar de alta `https://www.nexusinnovacion.com`,
   verificar con la etiqueta meta (variable `VITE_GOOGLE_SITE_VERIFICATION`) y
   enviar `sitemap.xml`.
5. **Perfil de Google Business** en Candelaria: categoría «Consultor
   ambiental» o «Servicio de consultoría», horario, fotos, teléfono, WhatsApp,
   web `https://www.nexusinnovacion.com/rse-mipymes`. Luego poner su enlace en
   `SITE.googleBusinessUrl`.
6. **Redes** (LinkedIn, Instagram, Facebook): crearlas con la descripción
   oficial y poner sus enlaces en `SITE.social`.
7. **Equipo**: fotos y LinkedIn de Guillermo, Jaime, Viviana y el equipo.
8. **Política de tratamiento de datos** (Ley 1581 de 2012): el formulario del
   piloto pide autorización; conviene publicar la política de NEXUS y
   enlazarla desde los formularios.
9. **Backend en Vercel**: `ALLOWED_ORIGINS` con
   `https://www.nexusinnovacion.com,https://nexusinnovacion.com` y las
   variables de `.env.example`.

---

## 5. Descripción oficial (copiar igual en todas partes)

**Corta (perfiles, directorios, biografías):**

> Consultora de sostenibilidad, RSE y desarrollo territorial con sede en
> Candelaria, Valle del Cauca.

**Larga (Google Business, LinkedIn «Acerca de»):**

> NEXUS es una consultora de sostenibilidad, RSE y desarrollo territorial con
> sede en Candelaria, Valle del Cauca. Acompaña a gobiernos, empresas, MiPymes,
> cooperación internacional y comunidades en proyectos de ciudades sostenibles,
> biodiversidad y soluciones basadas en la naturaleza, innovación social y
> ciencia, tecnología e innovación.

Repetir la misma descripción en el sitio, Google Business, LinkedIn y
directorios ayuda a que Google, ChatGPT y Gemini ubiquen a NEXUS en su mercado
real (y no como empresa de software).
