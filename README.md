# NEXUS – Sitio web (React + Vite)

> **Octubre 2026:** el sitio ahora se **prerenderiza** (cada página sale como
> HTML completo para Google y la IA), mide con GA4/Meta y tiene la página
> `/rse-mipymes` del piloto. Detalles, pasos manuales y qué revisar en
> **[MEJORAS-SEO-Y-CONVERSION.md](./MEJORAS-SEO-Y-CONVERSION.md)**.

Refactorización del sitio corporativo de NEXUS desde un único archivo HTML a un
proyecto React modular, con rutas reales (`react-router-dom`), componentes
reutilizables y todo el contenido separado en un archivo de datos.

## Requisitos

- Node.js 18 o superior
- npm (o pnpm / yarn)

## Cómo ejecutarlo

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compila y prerenderiza a producción en /dist
                 # (incluye sitemap.xml, robots.txt y 404.html)
npm run preview  # sirve la build de producción
```

## Estructura del proyecto

```
nexus-react/
├── index.html                 # HTML raíz de Vite (carga la fuente Montserrat)
├── package.json
├── vite.config.ts
├── scripts/prerender.mjs      # Genera el HTML de cada página, sitemap y robots
└── src/
    ├── main.tsx               # Entrada del navegador (hidrata el HTML)
    ├── entry-server.tsx       # Entrada del prerenderizado (Node, en el build)
    ├── routes.tsx             # Páginas cargadas por partes (code splitting)
    ├── App.tsx                # Layout (Navbar + rutas + Footer) y enrutado
    ├── config/site.ts         # Datos de contacto, descripción oficial, piloto
    ├── seo/seo.ts             # Títulos, descripciones y datos estructurados
    ├── lib/analytics.ts       # GA4, GTM, Píxel de Meta y eventos
    ├── styles/
    │   └── global.css         # Estilos originales, intactos
    ├── data/
    │   └── siteData.js        # TODO el contenido editable del sitio
    ├── components/
    │   ├── Navbar.jsx          # Navegación con NavLink (clase active automática)
    │   ├── Footer.jsx
    │   ├── Hero.jsx            # Encabezado reutilizable (variante grande / -sm)
    │   ├── StatsBar.jsx        # Cifras de impacto
    │   ├── ValorBox.jsx        # Propuesta de valor
    │   ├── PillarCard.jsx      # Tarjeta de pilar estratégico
    │   ├── TeamCard.jsx        # Tarjeta de equipo
    │   ├── ServiceTabs.jsx     # Pestañas de ejes (estado con useState)
    │   ├── ProjectCard.jsx     # Tarjeta de portafolio
    │   ├── AgendaCard.jsx      # Tarjeta de agenda global
    │   ├── AllyCard.jsx        # Tarjeta de aliado
    │   ├── BlogCard.jsx        # Tarjeta de artículo
    │   ├── ContactForm.jsx     # Formulario controlado + toast
    │   ├── Toast.jsx           # Notificación
    │   ├── ScrollToTop.jsx     # Sube al inicio al cambiar de ruta
    │   └── icons/
    │       ├── Logo.jsx        # Isotipo SVG
    │       └── PillarIcons.jsx # Iconos SVG de los pilares
    └── pages/
        ├── Inicio.jsx
        ├── Quienes.jsx
        ├── Ejes.jsx
        ├── Portafolio.jsx
        ├── Alianzas.jsx
        ├── Blog.jsx
        └── Contacto.jsx
```

## Decisiones de diseño

- **Enrutamiento real**: se reemplazó el `showPage()` basado en `display:none`
  por `react-router-dom`. Cada sección es ahora una ruta con su propia URL
  (`/`, `/quienes`, `/ejes`, etc.), lo que mejora SEO, navegación y el botón
  "atrás" del navegador.
- **Contenido como datos**: textos, listas, proyectos, equipo, blog, etc. viven
  en `src/data/siteData.js`. Para editar el sitio normalmente no hace falta tocar
  el JSX.
- **Estilos intactos**: `global.css` es el CSS original sin cambios de diseño.
  Solo se ampliaron los selectores de la barra de navegación para que apliquen
  también a los enlaces (`<a>`) de React Router, además de a los `<button>`.
- **Estado local con hooks**: las pestañas de ejes (`ServiceTabs`) y el
  formulario de contacto (`ContactForm`) usan `useState` en lugar de manipular
  el DOM directamente.
