import type { CSSProperties } from 'react';
import { useRef, useState, useEffect, Children } from 'react';
import './Carousel.css';

/*
  Carousel — Carrusel horizontal reutilizable.
  ------------------------------------------------------------------
  · Muestra varios elementos a la vez (responsivo) y se desplaza con
    flechas ‹ ›. Usa scroll nativo con "scroll-snap", así funciona
    también con gesto/táctil y rueda del ratón.
  · `minSlide` controla el ancho mínimo de cada tarjeta (px); con eso
    el número de tarjetas visibles se ajusta solo al ancho disponible.

  Props:
    · minSlide  → ancho mínimo de cada slide en px (por defecto 260).
    · ariaLabel → etiqueta accesible del carrusel.
    · children  → cada hijo se trata como una "diapositiva".
*/
export default function Carousel({ children, minSlide = 260, ariaLabel = 'Carrusel' }) {
  const viewportRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const slides = Children.toArray(children);

  const updateArrows = () => {
    const el = viewportRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = viewportRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  const scrollByDir = (dir) => {
    const el = viewportRef.current;
    if (!el) return;
    // Desplaza aproximadamente el 85% del ancho visible.
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <div className="nx-carousel" role="group" aria-label={ariaLabel}>
      <button
        type="button"
        className="nx-carousel-arrow prev"
        onClick={() => scrollByDir(-1)}
        disabled={!canPrev}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div
        className="nx-carousel-viewport"
        ref={viewportRef}
        style={{ '--nx-slide-min': `${minSlide}px` } as CSSProperties}
      >
        <div className="nx-carousel-track">
          {slides.map((child, i) => (
            <div className="nx-carousel-slide" key={i}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="nx-carousel-arrow next"
        onClick={() => scrollByDir(1)}
        disabled={!canNext}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}
