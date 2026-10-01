import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ENVIRO_DATES } from '../../data/siteData';
import './EnviroCalendar.css';

const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];
const MONTH_ABBR = [
  'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
  'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC',
];

// Emoji por categoría según palabras clave del título.
function emojiFor(title) {
  const t = title.toLowerCase();
  if (t.includes('humedal') || t.includes('agua') || t.includes('océano') || t.includes('pesca'))
    return '💧';
  if (t.includes('bosque') || t.includes('árbol') || t.includes('selva')) return '🌳';
  if (t.includes('suelo') || t.includes('desertificación') || t.includes('montañ')) return '⛰️';
  if (t.includes('clima') || t.includes('meteoro') || t.includes('aire') || t.includes('ozono'))
    return '🌍';
  if (t.includes('vida silvestre') || t.includes('diversidad') || t.includes('manglar'))
    return '🦋';
  if (t.includes('pueblos indígenas')) return '🪶';
  if (t.includes('café') || t.includes('alimentación') || t.includes('madre tierra')) return '🌱';
  if (t.includes('ciudad') || t.includes('automóvil')) return '🏙️';
  if (t.includes('riesgo') || t.includes('tsunami') || t.includes('desastre')) return '⚠️';
  return '🍃';
}

export default function EnviroCalendar() {
  // Ordenar por mes y día.
  const dates = useMemo(
    () =>
      [...ENVIRO_DATES].sort((a, b) => (a.month - b.month) || (a.day - b.day)),
    []
  );

  // Empezar en la próxima conmemoración. En el HTML prerenderizado se usa la
  // fecha del build (así coincide al hidratar); luego se ajusta a la de hoy.
  const indexFor = useCallback(
    (m: number, d: number) => {
      const idx = dates.findIndex((x) => x.month > m || (x.month === m && x.day >= d));
      return idx === -1 ? 0 : idx;
    },
    [dates]
  );
  const buildDate = typeof __BUILD_DATE__ === 'string' ? __BUILD_DATE__ : '';
  const [bm, bd] = buildDate ? buildDate.split('-').slice(1).map(Number) : [1, 1];
  const [index, setIndex] = useState(() => indexFor(bm, bd));

  useEffect(() => {
    const now = new Date();
    setIndex(indexFor(now.getMonth() + 1, now.getDate()));
  }, [indexFor]);
  const [paused, setPaused] = useState(false);
  const count = dates.length;

  const go = useCallback(
    (next) => setIndex((i) => ((next % count) + count) % count),
    [count]
  );
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Auto-avance suave (se pausa al interactuar / hover y con reduce-motion).
  useEffect(() => {
    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 4500);
    return () => clearInterval(id);
  }, [paused, count]);

  // Swipe táctil.
  const touch = useRef({ x: 0, active: false });
  const onTouchStart = (e) => {
    touch.current = { x: e.touches[0].clientX, active: true };
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    if (!touch.current.active) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
    touch.current.active = false;
  };

  const current = dates[index];

  return (
    <div
      className="enviro-cal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Calendario ambiental"
    >
      <div className="enviro-cal-head">
        <div>
          <div className="enviro-cal-tag">Agenda Ambiental</div>
          <h3 className="enviro-cal-title">Calendario de conmemoraciones</h3>
        </div>
        <div className="enviro-cal-counter" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
          <span>/{String(count).padStart(2, '0')}</span>
        </div>
      </div>

      <div
        className="enviro-cal-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          className="enviro-cal-arrow prev"
          onClick={prev}
          aria-label="Conmemoración anterior"
        >
          ‹
        </button>

        <div className="enviro-cal-viewport">
          <div
            className="enviro-cal-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {dates.map((item, i) => (
              <div
                className="enviro-cal-slide"
                key={`${item.month}-${item.day}-${i}`}
                aria-hidden={i !== index}
              >
                <article className="enviro-card">
                  <div className="enviro-card-date">
                    <span className="enviro-card-day">{item.day}</span>
                    <span className="enviro-card-month">{MONTH_ABBR[item.month - 1]}</span>
                  </div>
                  <div className="enviro-card-body">
                    <span className="enviro-card-emoji" aria-hidden="true">
                      {emojiFor(item.title)}
                    </span>
                    <p className="enviro-card-name">{item.title}</p>
                    <span className="enviro-card-full">
                      {item.day} de {MONTHS[item.month - 1]}
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button
          className="enviro-cal-arrow next"
          onClick={next}
          aria-label="Siguiente conmemoración"
        >
          ›
        </button>
      </div>

      {/* Puntos de navegación (agrupados por mes para no saturar) */}
      <div className="enviro-cal-dots" role="tablist" aria-label="Ir a una fecha">
        {dates.map((item, i) => (
          <button
            key={`dot-${i}`}
            className={`enviro-dot${i === index ? ' active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`${item.day} de ${MONTHS[item.month - 1]}: ${item.title}`}
            aria-selected={i === index}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
