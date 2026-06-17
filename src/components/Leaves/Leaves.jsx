import { useMemo } from 'react';
import './Leaves.css';

/*
  Leaves — Partículas muy sutiles de hojas verdes que caen sobre el fondo
  claro del sitio, a la manera de un cerezo (pero en verde). Son MUY pocas y
  de baja opacidad: apenas se notan al observar la página unos segundos.

  · Capa fija sobre el contenido, sin capturar clics (pointer-events: none).
  · Cada hoja tiene posición, tamaño, duración y desfase aleatorios para que
    el movimiento se vea natural.
  · Se desactiva si el usuario prefiere menos movimiento.
*/

const LEAF_COUNT = 9; // muy pocas, deliberadamente

const GREENS = ['#3f7e44', '#4c9f38', '#2f9e6e', '#56a045', '#1f7a52'];

function makeLeaves(n) {
  const leaves = [];
  for (let i = 0; i < n; i++) {
    leaves.push({
      id: i,
      left: Math.round((i / n) * 100 + (Math.random() * 8 - 4)), // repartidas a lo ancho
      size: 8 + Math.round(Math.random() * 7), // 8–15px (minúsculas)
      duration: 16 + Math.round(Math.random() * 12), // 16–28s (lento)
      delay: -Math.round(Math.random() * 24), // arranque desfasado
      drift: 24 + Math.round(Math.random() * 40), // deriva horizontal
      color: GREENS[i % GREENS.length],
      sway: 5 + Math.round(Math.random() * 4),
    });
  }
  return leaves;
}

export default function Leaves() {
  const leaves = useMemo(() => makeLeaves(LEAF_COUNT), []);

  return (
    <div className="leaves-layer" aria-hidden="true">
      {leaves.map((l) => (
        <span
          key={l.id}
          className="leaf"
          style={{
            left: `${l.left}%`,
            width: `${l.size}px`,
            height: `${l.size}px`,
            color: l.color,
            '--dur': `${l.duration}s`,
            '--delay': `${l.delay}s`,
            '--drift': `${l.drift}px`,
            '--sway': `${l.sway}s`,
          }}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
            <path d="M12 2C7 6 3 9 3 14a9 9 0 0018 0c0-5-4-8-9-12z" opacity="0.9" />
            <path
              d="M12 4c0 6 0 12 0 17"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.8"
              fill="none"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
