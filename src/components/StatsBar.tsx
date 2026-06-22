import { useEffect, useRef, useState } from 'react';
import { STATS } from '../../data/siteData';
import './StatsBar.css';

/*
  Separa '+20' -> { pre:'+', n:20, suf:'' }, '12+' -> { pre:'', n:12, suf:'+' }.
  Conserva el signo y solo anima la cifra.
*/
function parseNum(value) {
  const s = String(value);
  const match = s.match(/\d[\d.,]*/);
  if (!match) return { pre: s, n: 0, suf: '', decimals: 0 };
  const numText = match[0];
  const idx = match.index;
  const clean = numText.replace(/,/g, '');
  return {
    pre: s.slice(0, idx),
    n: parseFloat(clean),
    suf: s.slice(idx + numText.length),
    decimals: (clean.split('.')[1] || '').length,
  };
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/*
  Cuenta desde 0 hasta `value` cuando `active` es true (easeOutCubic: rápido y
  progresivo). Cuando `active` es false, vuelve a 0.
*/
function StatNumber({ value, active, duration = 1200 }) {
  const { pre, n, suf, decimals } = parseNum(value);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef();

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);

    if (!active) {
      setDisplay(0);
      return;
    }
    if (prefersReducedMotion()) {
      setDisplay(n);
      return;
    }

    let startTime;
    const tick = (t) => {
      if (startTime === undefined) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(n * eased);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setDisplay(n);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [active, n, duration]);

  const shown = decimals ? display.toFixed(decimals) : Math.round(display).toLocaleString('es');

  return (
    <span>
      {pre}
      {shown}
      {suf}
    </span>
  );
}

// Barra de cifras de impacto (página de inicio).
export default function StatsBar() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Calcula si la barra está dentro de la franja central del viewport.
    // - Si subes y la barra queda por debajo de la pantalla -> visible = false
    // - Si bajas y la barra vuelve a entrar               -> visible = true
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visible = r.top < vh * 0.9 && r.bottom > vh * 0.1;
      setActive(visible); // si el valor no cambia, React no re-renderiza
    };

    check(); // estado inicial al cargar
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  return (
    <div className="stats-bar" ref={ref}>
      <div className="stats-inner">
        {STATS.map((stat) => (
          <div key={stat.label}>
            {/* key depende de `active`: al volverse visible, el número se
                vuelve a montar y la animación reinicia desde 0 sí o sí. */}
            <div className="stat-num">
              <StatNumber key={active ? 'on' : 'off'} value={stat.num} active={active} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
