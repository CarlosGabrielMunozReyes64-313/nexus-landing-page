import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo, headTags } from './seo';

/*
  SeoHead — Mantiene el <head> al día cuando se navega dentro del sitio.
  En la primera carga el HTML ya viene con estas etiquetas (prerenderizado);
  aquí solo se reemplazan al cambiar de ruta. Las etiquetas gestionadas
  llevan el atributo data-seo.
*/
export default function SeoHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    const head = document.head;
    head.querySelectorAll('[data-seo]').forEach((el) => el.remove());

    for (const { tag, attrs = {}, text } of headTags(seo)) {
      if (tag === 'title') {
        document.title = text || '';
        continue;
      }
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      el.setAttribute('data-seo', '');
      if (text) el.textContent = text;
      head.appendChild(el);
    }
  }, [pathname]);

  return null;
}
