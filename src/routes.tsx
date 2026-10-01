import { lazyPage, type LazyPage } from './lib/lazyPage';

// ── Páginas (cada una en su propio archivo JS) ──
export const Inicio = lazyPage(() => import('./pages/Inicio'));
export const Portafolio = lazyPage(() => import('./pages/Portafolio'));
export const Alianzas = lazyPage(() => import('./pages/Alianzas'));
export const Blog = lazyPage(() => import('./pages/Blog'));
export const BlogPost = lazyPage(() => import('./pages/BlogPost'));
export const Contacto = lazyPage(() => import('./pages/Contacto'));
export const RseMipymes = lazyPage(() => import('./pages/RseMipymes'));
export const NotFound = lazyPage(() => import('./pages/NotFound'));

// Quiénes Somos
export const QuienesLayout = lazyPage(() => import('./pages/quienes/QuienesLayout'));
export const QuienesModelo = lazyPage(() => import('./pages/quienes/QuienesModelo'));
export const QuienesPrincipios = lazyPage(() => import('./pages/quienes/QuienesPrincipios'));
export const QuienesDesafios = lazyPage(() => import('./pages/quienes/QuienesDesafios'));
export const QuienesEquipo = lazyPage(() => import('./pages/quienes/QuienesEquipo'));

// Servicios
export const ServiciosLayout = lazyPage(() => import('./pages/servicios/ServiciosLayout'));
export const ServiciosTodos = lazyPage(() => import('./pages/servicios/ServiciosTodos'));
export const ServicioEje = lazyPage(() => import('./pages/servicios/ServicioEje'));

// Proyecto demo (Chart.js y jsPDF solo se descargan aquí)
export const DemoLayout = lazyPage(() => import('./pages/demo/DemoLayout'));
export const EcoHome = lazyPage(() => import('./pages/demo/EcoHome'));
export const HuellaCarbono = lazyPage(() => import('./pages/demo/HuellaCarbono'));
export const HuellaHidrica = lazyPage(() => import('./pages/demo/HuellaHidrica'));
export const EcoDashboard = lazyPage(() => import('./pages/demo/EcoDashboard'));

const ALL: LazyPage[] = [
  Inicio, Portafolio, Alianzas, Blog, BlogPost, Contacto, RseMipymes, NotFound,
  QuienesLayout, QuienesModelo, QuienesPrincipios, QuienesDesafios, QuienesEquipo,
  ServiciosLayout, ServiciosTodos, ServicioEje,
  DemoLayout, EcoHome, HuellaCarbono, HuellaHidrica, EcoDashboard,
];

/** Servidor (prerenderizado): todas las páginas listas antes de renderizar. */
export function preloadAll() {
  return Promise.all(ALL.map((p) => p.preload()));
}

/** Navegador: solo lo que necesita la página actual, antes de hidratar. */
export function preloadForPath(pathname: string) {
  const p = pathname.replace(/\/+$/, '') || '/';
  const pages: LazyPage[] = [];
  if (p === '/') pages.push(Inicio);
  else if (p.startsWith('/quienes')) {
    pages.push(QuienesLayout);
    if (p.endsWith('/principios')) pages.push(QuienesPrincipios);
    else if (p.endsWith('/desafios')) pages.push(QuienesDesafios);
    else if (p.endsWith('/equipo')) pages.push(QuienesEquipo);
    else pages.push(QuienesModelo);
  } else if (p.startsWith('/servicios')) {
    pages.push(ServiciosLayout, /\/eje-\d$/.test(p) ? ServicioEje : ServiciosTodos);
  } else if (p === '/portafolio') pages.push(Portafolio);
  else if (p === '/alianzas') pages.push(Alianzas);
  else if (p === '/blog') pages.push(Blog);
  else if (p.startsWith('/blog/')) pages.push(BlogPost, NotFound);
  else if (p === '/contacto') pages.push(Contacto);
  else if (p === '/rse-mipymes') pages.push(RseMipymes);
  else if (p.startsWith('/proyecto-demo')) {
    pages.push(DemoLayout);
    if (p.endsWith('/carbono')) pages.push(HuellaCarbono);
    else if (p.endsWith('/hidrica')) pages.push(HuellaHidrica);
    else if (p.endsWith('/dashboard')) pages.push(EcoDashboard);
    else pages.push(EcoHome);
  } else pages.push(NotFound);
  return Promise.all(pages.map((pg) => pg.preload()));
}
