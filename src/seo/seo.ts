// =====================================================
//  SEO · Títulos, descripciones y datos estructurados
//  Una sola fuente para:
//   · el prerenderizado (HTML que leen Google, ChatGPT, WhatsApp…)
//   · el navegador (al cambiar de página dentro del sitio)
//   · el sitemap.xml
// =====================================================
import { SITE, PILOT } from '../config/site';
import { SERVICES } from '../data/siteData';
import { RSE_FAQ } from '../data/rseMipymes';
import { ARTICLES, getArticle, articlePath, type BlogPost } from '../lib/blog';

export const OG_IMAGE = '/og-nexus.jpg';
export const LOGO_IMAGE = '/logo-nexus.png';

export type SeoData = {
  path: string;
  title: string;
  description: string;
  image: string;
  type: 'website' | 'article';
  noindex?: boolean;
  jsonLd: object[];
  breadcrumb?: { name: string; path: string }[];
};

type RouteSeo = {
  title: string;
  description: string;
  noindex?: boolean;
  breadcrumb?: { name: string; path: string }[];
  extraJsonLd?: () => object[];
  priority?: number;
  changefreq?: string;
};

const abs = (path: string) =>
  path.startsWith('http') ? path : path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`;
const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

const home = { name: 'Inicio', path: '/' };
const quienes = { name: 'Quiénes somos', path: '/quienes/modelo' };
const servicios = { name: 'Servicios', path: '/servicios' };
const blog = { name: 'Blog', path: '/blog' };
const demo = { name: 'Calculadora de huella ecológica', path: '/proyecto-demo' };

function serviceJsonLd(name: string, description: string, path: string, audience?: string) {
  return {
    '@type': 'Service',
    '@id': `${abs(path)}#service`,
    name,
    description,
    url: abs(path),
    provider: { '@id': ORG_ID },
    areaServed: SITE.areaServed.map((n) => ({ '@type': 'Place', name: n })),
    ...(audience ? { audience: { '@type': 'BusinessAudience', name: audience } } : {}),
  };
}

function ejeSeo(index: number): RouteSeo {
  const s = (SERVICES as any[])[index];
  const path = `/servicios/eje-${index + 1}`;
  const offers = (s.list || []).map((it: any) => it.label).slice(0, 20);
  return {
    title: `${s.svcTitle} | NEXUS`,
    description: s.desc,
    breadcrumb: [home, servicios, { name: s.svcTitle, path }],
    extraJsonLd: () => [
      {
        ...serviceJsonLd(s.svcTitle, s.desc, path),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: s.svcTitle,
          itemListElement: offers.map((label: string) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: label },
          })),
        },
      },
    ],
    priority: 0.8,
  };
}

// ── Rutas estáticas ──────────────────────────────────
export const ROUTES: Record<string, RouteSeo> = {
  '/': {
    title: 'NEXUS | Consultora de sostenibilidad y RSE en el Valle del Cauca',
    description:
      'Consultora de sostenibilidad, RSE y desarrollo territorial con sede en Candelaria, Valle del Cauca. Proyectos con gobiernos, empresas, MiPymes y cooperación.',
    priority: 1,
    changefreq: 'weekly',
  },
  '/quienes/modelo': {
    title: 'Quiénes somos | NEXUS · Candelaria, Valle del Cauca',
    description:
      'NEXUS une ciencia, territorio, innovación y gobernanza para el desarrollo sostenible. Conozca nuestra misión, visión y modelo de trabajo.',
    breadcrumb: [home, quienes],
    priority: 0.7,
  },
  '/quienes/principios': {
    title: 'Nuestros principios | NEXUS',
    description:
      'Los valores que guían cada decisión de NEXUS en sostenibilidad, RSE y desarrollo territorial en el suroccidente colombiano.',
    breadcrumb: [home, quienes, { name: 'Principios', path: '/quienes/principios' }],
    priority: 0.5,
  },
  '/quienes/desafios': {
    title: 'Desafíos estratégicos | NEXUS',
    description:
      'Los retos territoriales, ambientales y sociales que NEXUS aborda en Colombia y la forma en que los enfrentamos.',
    breadcrumb: [home, quienes, { name: 'Desafíos estratégicos', path: '/quienes/desafios' }],
    priority: 0.5,
  },
  '/quienes/equipo': {
    title: 'Nuestro equipo | NEXUS',
    description:
      'Equipo multidisciplinario de NEXUS: ecología, gestión pública, innovación social, RSE, SIG, diseño y gestión de proyectos.',
    breadcrumb: [home, quienes, { name: 'Equipo', path: '/quienes/equipo' }],
    priority: 0.6,
  },
  '/servicios': {
    title: 'Servicios de sostenibilidad, RSE y territorio | NEXUS',
    description:
      'Servicios en cuatro ejes: ciudades y territorios sostenibles, biodiversidad y SbN, innovación social y RSE, y proyectos de ciencia, tecnología e innovación.',
    breadcrumb: [home, servicios],
    priority: 0.9,
  },
  '/servicios/eje-1': ejeSeo(0),
  '/servicios/eje-2': ejeSeo(1),
  '/servicios/eje-3': ejeSeo(2),
  '/servicios/eje-4': ejeSeo(3),
  '/rse-mipymes': {
    title: 'RSE para MiPymes en el Valle del Cauca | NEXUS',
    description: PILOT.active
      ? `RSE práctica para MiPymes de Palmira y Candelaria: diagnóstico con IA, un reto concreto y acompañamiento experto. Piloto ${PILOT.year} con ${PILOT.slots} cupos.`
      : 'RSE práctica para MiPymes del Valle del Cauca: diagnóstico con IA, un reto concreto y acompañamiento experto desde Candelaria.',
    breadcrumb: [home, servicios, { name: 'RSE para MiPymes', path: '/rse-mipymes' }],
    extraJsonLd: () => [
      serviceJsonLd(
        'RSE para MiPymes: RSE Express y RSE por Retos',
        'Diagnóstico de responsabilidad social asistido por IA, un reto concreto y acompañamiento experto para micro, pequeñas y medianas empresas del Valle del Cauca.',
        '/rse-mipymes',
        'MiPymes del Valle del Cauca',
      ),
      {
        '@type': 'FAQPage',
        '@id': `${abs('/rse-mipymes')}#faq`,
        mainEntity: RSE_FAQ.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
    priority: 0.9,
    changefreq: 'weekly',
  },
  '/portafolio': {
    title: 'Proyectos y experiencia | NEXUS',
    description:
      'Portafolio de NEXUS con clientes, territorios y cifras: Basura Cero Popayán, Soluciones basadas en la Naturaleza con ICLEI, Política de RSE y más.',
    breadcrumb: [home, { name: 'Proyectos', path: '/portafolio' }],
    priority: 0.8,
  },
  '/alianzas': {
    title: 'Red de aliados y cooperación | NEXUS',
    description:
      'Aliados y agendas internacionales con los que NEXUS articula proyectos de sostenibilidad, incluido el programa de innovación de la Cámara de Comercio de Palmira.',
    breadcrumb: [home, { name: 'Red de aliados', path: '/alianzas' }],
    priority: 0.6,
  },
  '/blog': {
    title: 'Blog de sostenibilidad y RSE | NEXUS',
    description:
      'Artículos sobre RSE para pymes, informes de sostenibilidad, greenwashing, soluciones basadas en la naturaleza, bioeconomía y gestión territorial en Colombia.',
    breadcrumb: [home, blog],
    priority: 0.7,
    changefreq: 'weekly',
  },
  '/contacto': {
    title: 'Contacto | NEXUS · Candelaria, Valle del Cauca',
    description:
      'Escríbanos por WhatsApp, correo o formulario. NEXUS es una consultora de sostenibilidad, RSE y desarrollo territorial con sede en Candelaria, Valle del Cauca.',
    breadcrumb: [home, { name: 'Contacto', path: '/contacto' }],
    priority: 0.8,
  },
  '/proyecto-demo': {
    title: 'Calculadora de huella ecológica (demo) | NEXUS',
    description:
      'Calcule su huella de carbono e hídrica con la herramienta demo de NEXUS: factores configurables, datos regionales de Colombia y reporte en PDF.',
    breadcrumb: [home, demo],
    priority: 0.6,
  },
  '/proyecto-demo/carbono': {
    title: 'Calculadora de huella de carbono | NEXUS',
    description:
      'Estime la huella de carbono de su hogar o empresa y compárela con los promedios nacional y mundial. Herramienta demo de NEXUS.',
    breadcrumb: [home, demo, { name: 'Huella de carbono', path: '/proyecto-demo/carbono' }],
    priority: 0.5,
  },
  '/proyecto-demo/hidrica': {
    title: 'Calculadora de huella hídrica | NEXUS',
    description:
      'Estime el consumo de agua asociado a actividades agrícolas y pecuarias con datos regionales. Herramienta demo de NEXUS.',
    breadcrumb: [home, demo, { name: 'Huella hídrica', path: '/proyecto-demo/hidrica' }],
    priority: 0.5,
  },
  '/proyecto-demo/dashboard': {
    title: 'Dashboard de huella ecológica | NEXUS',
    description: 'Panel de resultados de la calculadora de huella ecológica de NEXUS.',
    noindex: true, // depende de datos del usuario: no aporta a buscadores
  },
};

export const NOT_FOUND_SEO: RouteSeo = {
  title: 'Página no encontrada | NEXUS',
  description: 'La página que busca no existe o cambió de dirección.',
  noindex: true,
};

// ── Datos estructurados globales ─────────────────────
export function organizationJsonLd() {
  const sameAs = [
    ...Object.values(SITE.social),
    SITE.googleBusinessUrl,
  ].filter(Boolean);
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.brandName,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    logo: abs(LOGO_IMAGE),
    image: abs(OG_IMAGE),
    description: SITE.longDescription,
    slogan: 'Innovación y Alianzas para el Desarrollo Sostenible',
    telephone: SITE.phoneE164,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      ...(SITE.address.streetAddress ? { streetAddress: SITE.address.streetAddress } : {}),
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: SITE.areaServed.map((n) => ({ '@type': 'Place', name: n })),
    knowsAbout: [
      'Responsabilidad social empresarial (RSE)',
      'RSE para MiPymes',
      'Sostenibilidad corporativa',
      'Informes de sostenibilidad',
      'Desarrollo territorial',
      'Soluciones basadas en la Naturaleza',
      'Biodiversidad',
      'Gestión ambiental urbana',
      'Economía circular',
      'Huella de carbono',
      'Innovación social',
      'Ciencia, tecnología e innovación',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: SITE.phoneE164,
        email: SITE.email,
        areaServed: 'CO',
        availableLanguage: ['es'],
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: { '@id': ORG_ID },
  };
}

function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

function articleJsonLd(post: BlogPost) {
  const url = abs(articlePath(post));
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.preview,
    datePublished: post.isoDate || undefined,
    dateModified: post.isoDate || undefined,
    inLanguage: SITE.language,
    articleSection: post.topic,
    author: { '@type': 'Organization', name: post.author || 'Equipo NEXUS', url: `${SITE.url}/` },
    publisher: { '@id': ORG_ID },
    image: abs(post.image || OG_IMAGE),
    mainEntityOfPage: url,
  };
}

function trim(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

function build(path: string, r: RouteSeo, type: SeoData['type'] = 'website', extra: object[] = []): SeoData {
  const page = {
    '@type': 'WebPage',
    '@id': `${abs(path)}#webpage`,
    url: abs(path),
    name: r.title,
    description: r.description,
    inLanguage: SITE.language,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  };
  const graph: object[] = [organizationJsonLd(), websiteJsonLd()];
  if (!r.noindex) {
    graph.push(page);
    if (r.breadcrumb?.length) graph.push(breadcrumbJsonLd(r.breadcrumb));
    graph.push(...(r.extraJsonLd ? r.extraJsonLd() : []), ...extra);
  }
  return {
    path,
    title: r.title,
    description: trim(r.description),
    image: OG_IMAGE,
    type,
    noindex: r.noindex,
    breadcrumb: r.breadcrumb,
    jsonLd: [{ '@context': 'https://schema.org', '@graph': graph }],
  };
}

/** Normaliza la ruta: sin barra final, sin query ni hash. */
export function normalizePath(pathname: string): string {
  const p = (pathname || '/').split(/[?#]/)[0].replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

/** Datos SEO para una ruta. Si no existe, devuelve los de «no encontrada». */
export function getSeo(pathname: string): SeoData {
  const path = normalizePath(pathname);
  if (ROUTES[path]) return build(path, ROUTES[path]);

  const m = path.match(/^\/blog\/([^/]+)$/);
  const post = m ? getArticle(m[1]) : undefined;
  if (post) {
    const r: RouteSeo = {
      title: `${post.title} | NEXUS`,
      description: post.preview,
      breadcrumb: [home, blog, { name: post.title, path }],
    };
    const seo = build(path, r, 'article', [articleJsonLd(post)]);
    if (post.image) seo.image = post.image;
    return seo;
  }
  return build(path, NOT_FOUND_SEO);
}

// ── Etiquetas del <head> ─────────────────────────────
type Tag = { tag: 'title' | 'meta' | 'link' | 'script'; attrs?: Record<string, string>; text?: string };

export function headTags(seo: SeoData): Tag[] {
  const url = abs(seo.path);
  const image = abs(seo.image);
  const tags: Tag[] = [
    { tag: 'title', text: seo.title },
    { tag: 'meta', attrs: { name: 'description', content: seo.description } },
    { tag: 'meta', attrs: { name: 'robots', content: seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: SITE.locale } },
    { tag: 'meta', attrs: { property: 'og:type', content: seo.type } },
    { tag: 'meta', attrs: { property: 'og:title', content: seo.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: seo.description } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { tag: 'meta', attrs: { property: 'og:image:alt', content: 'NEXUS – Innovación y Alianzas para el Desarrollo Sostenible' } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: seo.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: seo.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  ];
  if (!seo.noindex) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: url } });
  }
  for (const data of seo.jsonLd) {
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, text: JSON.stringify(data) });
  }
  return tags;
}

const escAttr = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escText = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** HTML de las etiquetas (para el prerenderizado). Llevan data-seo para
 *  que el navegador pueda reemplazarlas al navegar. */
export function headHtml(seo: SeoData): string {
  return headTags(seo)
    .map(({ tag, attrs = {}, text }) => {
      const a = Object.entries({ ...attrs, 'data-seo': '' })
        .map(([k, v]) => (v === '' ? k : `${k}="${escAttr(v)}"`))
        .join(' ');
      if (tag === 'meta' || tag === 'link') return `<${tag} ${a}>`;
      // En JSON-LD se escapa «<» para que nunca cierre el <script>.
      const body = tag === 'script' ? (text || '').replace(/</g, '\\u003c') : escText(text || '');
      return `<${tag} ${a}>${body}</${tag}>`;
    })
    .join('\n    ');
}

// ── Rutas a prerenderizar y sitemap ──────────────────
export const PRERENDER_ROUTES: string[] = [
  ...Object.keys(ROUTES),
  ...ARTICLES.map((p) => articlePath(p)),
];

export type SitemapEntry = { loc: string; lastmod?: string; priority: number; changefreq: string };

export function sitemapEntries(buildDate: string): SitemapEntry[] {
  const entries: SitemapEntry[] = Object.entries(ROUTES)
    .filter(([, r]) => !r.noindex)
    .map(([path, r]) => ({
      loc: abs(path),
      lastmod: buildDate,
      priority: r.priority ?? 0.5,
      changefreq: r.changefreq ?? 'monthly',
    }));
  for (const p of ARTICLES) {
    entries.push({ loc: abs(articlePath(p)), lastmod: p.isoDate || buildDate, priority: 0.7, changefreq: 'yearly' });
  }
  return entries;
}

export { SITE };
