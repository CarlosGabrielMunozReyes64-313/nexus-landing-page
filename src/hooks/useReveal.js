import { useEffect, useRef, useState } from 'react';

/*
  useReveal — Hook ligero de animación al hacer scroll.
  Usa un único IntersectionObserver por elemento y se desconecta en cuanto
  el elemento entra en pantalla (animación de una sola vez), por lo que el
  costo de cómputo es mínimo.

  Devuelve { ref, shown }:
    · ref   → se asigna al elemento a observar.
    · shown → pasa a `true` cuando el elemento es visible (o de inmediato si
              el usuario prefiere menos movimiento).

  Uso típico:
    const { ref, shown } = useReveal();
    <div ref={ref} className={`reveal${shown ? ' is-visible' : ''}`}>…</div>
*/
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Respetar la preferencia de menos movimiento: mostrar sin animar.
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // Si IntersectionObserver no existe, mostrar directamente.
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return { ref, shown };
}
