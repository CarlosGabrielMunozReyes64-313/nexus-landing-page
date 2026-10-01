import { useEffect, useRef, useState } from "react";
import "./CountUp.css";

/*
  CountUp — Cifra de impacto que cuenta desde 0 hasta su valor (p. ej. «+20»).

  · Siempre se anima: si la cifra ya está en pantalla al cargar, cuenta de
    inmediato; si está más abajo, cuenta cuando la persona llega a ella.
  · La cifra FINAL viene escrita en el HTML, así Google, la IA y las vistas
    previas leen los logros reales. Mientras carga la página se oculta un
    instante (ver CountUp.css) para que el conteo arranque desde 0 sin que
    se vea un salto de «+20» a «+0».
  · Cuenta también en equipos con las animaciones apagadas: solo cambian
    los dígitos, nada se desplaza por la pantalla.

  Props:
  · value     → número objetivo (entero).
  · prefix    → texto antes del número (ej. «+»).
  · suffix    → texto después del número (ej. «+»).
  · duration  → duración del conteo en ms.
*/
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
}) {
  const [display, setDisplay] = useState(value);
  const [state, setState] = useState<"pending" | "ready">("pending");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Nota: el conteo se muestra aunque el equipo tenga las animaciones
    // apagadas («reducir movimiento»): solo cambian los dígitos, nada se
    // desplaza por la pantalla.
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      setState("ready");
      return;
    }

    // Arranca en 0 (la cifra estaba oculta, así que no se nota el cambio).
    setDisplay(0);
    setState("ready");

    let raf = 0;
    let timer = 0;
    const run = () => {
      const start = performance.now();
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(easeOutCubic(t) * value));
        if (t < 1) raf = requestAnimationFrame(tick);
        else setDisplay(value);
      };
      raf = requestAnimationFrame(tick);
    };

    // Cuenta cuando la cifra está a la vista (de inmediato si ya lo está).
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          obs.disconnect();
          timer = window.setTimeout(run, 150);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="countup" data-state={state}>
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
  if (!match) return { prefix: str, value: null, suffix: "" };
  return {
    prefix: match[1] || "",
    value: parseInt(match[2], 10),
    suffix: match[3] || "",
  };
}
