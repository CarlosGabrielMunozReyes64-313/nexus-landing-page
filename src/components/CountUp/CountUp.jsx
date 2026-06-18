import { useEffect, useRef, useState } from 'react';

/*
  CountUp — Anima un número de 0 hasta su valor objetivo cuando entra en
  pantalla, como un marcador deportivo. Conserva el prefijo/sufijo del texto
  original (p. ej. «+40» o «12+»).

  · value     → número objetivo (entero).
  · prefix    → texto antes del número (ej. «+»).
  · suffix    → texto después del número (ej. «+»).
  · duration  → duración en ms (por defecto 1800 → bastante < 3s).

  El conteo arranca en 0 y, al hacerse visible para el usuario (o al recargar
  si ya está en pantalla), avanza progresivamente con una curva de
  desaceleración hasta el valor final.
*/
export default function CountUp({ value, prefix = '', suffix = '', duration = 1800 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduce) {
        setDisplay(value);
        return;
      }

      const start = performance.now();
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const tick = (now) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(t);
        setDisplay(Math.round(eased * value));
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(value); // asegura el valor exacto al final
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/*
  Divide una cadena como «+40» o «12+» en { prefix, value, suffix }.
  Si no hay dígitos, devuelve el texto tal cual como prefix.
*/
export function parseStatNum(raw) {
  const str = String(raw).trim();
  const match = str.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { prefix: str, value: null, suffix: '' };
  return { prefix: match[1] || '', value: parseInt(match[2], 10), suffix: match[3] || '' };
}
