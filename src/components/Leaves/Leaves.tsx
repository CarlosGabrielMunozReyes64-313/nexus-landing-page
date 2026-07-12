import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import './Leaves.css';
import ojaImg from '../../assets/particles/oja.png';

/*
  Leaves — Partículas muy sutiles de hojas que caen sobre el fondo claro del
  sitio, a la manera de un cerezo (pero en verde). Ahora cada partícula usa la
  imagen real de una hoja (src/assets/particles/oja.png).

  · Capa fija sobre el contenido, sin capturar clics (pointer-events: none).
  · Cada hoja tiene posición, TAMAÑO, duración y desfase aleatorios para que
    el movimiento se vea natural. Se conserva el rango de tamaños original
    (8–15px), de modo que las hojas siguen siendo minúsculas pero varían.
  · Se desactiva si el usuario prefiere menos movimiento.
*/

const LEAF_COUNT = 9; // muy pocas, deliberadamente

function makeLeaves(n) {
  const leaves = [];
  for (let i = 0; i < n; i++) {
    leaves.push({
      id: i,
      left: Math.round((i / n) * 100 + (Math.random() * 8 - 4)),
      size: 33 + Math.round(Math.random() * 7),
      duration: 16 + Math.round(Math.random() * 12),
      delay: -Math.round(Math.random() * 24),
      drift: 24 + Math.round(Math.random() * 40),
      sway: 5 + Math.round(Math.random() * 4),
      spin: 280 + Math.round(Math.random() * 140),
      tilt: Math.round(Math.random() * 360),
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
            '--dur': `${l.duration}s`,
            '--delay': `${l.delay}s`,
            '--drift': `${l.drift}px`,
            '--sway': `${l.sway}s`,
            '--spin': `${l.spin}deg`,
            '--tilt': `${l.tilt}deg`,
          } as CSSProperties}
        >
          <img src={ojaImg} alt="" className="leaf-img" draggable="false" />
        </span>
      ))}
    </div>
  );
}
