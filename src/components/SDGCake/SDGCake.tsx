import { useMemo } from 'react';
import { ODS_DATA, ODS_LAYERS } from '../../data/siteData';
import './SDGCake.css';

/*
  SDGCake — Modelo "pastel de bodas" de los ODS (Stockholm Resilience Centre).
  ----------------------------------------------------------------------------
  · Carga TODAS las imágenes de  src/assets/iconos_inicio/ODS/  de forma
    dinámica (import.meta.glob de Vite). No importa el nombre exacto del
    archivo: basta con que contenga el número del ODS (p. ej. "ODS4.png",
    "ods-04.png", "ods08.jpg" → 4, 4, 8). Si hay varias imágenes para el mismo
    ODS se conserva una sola.
  · Distribuye cada ODS en su capa (Economía / Sociedad / Biosfera) y coloca
    el ODS 17 como eje en la cima, igual que el gráfico de referencia.
  · Tiene movimiento sutil (flotación e ingreso animado) y, al pasar el cursor
    o enfocar un ícono, revela la aplicación concreta dentro de NEXUS.
*/

// Carga ansiosa de todos los íconos de la carpeta ODS (cualquier extensión).
const ODS_FILES = import.meta.glob(
  '../../assets/iconos_inicio/ODS/*.{png,jpg,jpeg,svg,webp,PNG,JPG,JPEG,SVG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);

// ¿Es uno de los íconos de respaldo que vienen incluidos? (ods-04.png …)
// Si el usuario coloca sus propios íconos (p. ej. ODS4.png, ods5.jpg), esos
// tienen prioridad sobre los de respaldo.
function isFallbackName(file) {
  return /^ods-\d/i.test(file);
}

// Construye el mapa  número-de-ODS → url-de-imagen  a partir de los nombres.
function buildIconMap() {
  const map = {}; // num -> { url, file }
  for (const [path, url] of Object.entries(ODS_FILES)) {
    const file = path.split('/').pop() || '';
    const digits = (file.match(/\d+/) || [])[0];
    if (!digits) continue;
    const num = parseInt(digits, 10);
    const existing = map[num];
    if (!existing) {
      map[num] = { url, file };
    } else if (isFallbackName(existing.file) && !isFallbackName(file)) {
      // Reemplaza el respaldo por el ícono propio del usuario.
      map[num] = { url, file };
    }
  }
  // Devuelve solo num -> url
  const out = {};
  for (const [num, v] of Object.entries(map)) out[num] = v.url;
  return out;
}

export default function SDGCake() {
  const iconMap = useMemo(buildIconMap, []);

  const byLayer = useMemo(() => {
    const groups = { cima: [], economia: [], sociedad: [], biosfera: [] };
    ODS_DATA.forEach((o) => groups[o.layer]?.push(o));
    return groups;
  }, []);

  const cima = byLayer.cima[0];

  // Reparte los íconos de una capa en dos columnas (izquierda / derecha).
  const renderIcon = (o, i) => {
    const icon = iconMap[o.num];
    return (
      <div
        className="ods-chip"
        key={o.num}
        tabIndex={0}
        style={{ '--delay': `${(i % 4) * 0.6}s` }}
        aria-label={`ODS ${o.num}: ${o.title}. ${o.apply}`}
      >
        <span className="ods-chip-inner">
          {icon ? (
            <img src={icon} alt={`ODS ${o.num} — ${o.title}`} loading="lazy" />
          ) : (
            <span className="ods-chip-fallback">{o.num}</span>
          )}
        </span>
        <span className="ods-tip" role="tooltip">
          <strong>
            ODS {o.num} · {o.title}
          </strong>
          {o.apply}
        </span>
      </div>
    );
  };

  const layerBlock = (key) => {
    const items = byLayer[key];
    const mid = Math.ceil(items.length / 2);
    const left = items.slice(0, mid);
    const right = items.slice(mid);
    return (
      <div className={`cake-layer cake-${key}`} key={key}>
        <div className="cake-wing left">{left.map(renderIcon)}</div>
        <div className="cake-core">
          <span className="cake-layer-name">{ODS_LAYERS[key].label}</span>
          <span className={`cake-disk disk-${key}`} aria-hidden="true" />
        </div>
        <div className="cake-wing right">{right.map(renderIcon)}</div>
      </div>
    );
  };

  return (
    <div
      className="sdg-cake"
      role="img"
      aria-label="Modelo de pastel de bodas de los ODS: la economía depende de la sociedad y la sociedad depende de la biosfera, con las alianzas (ODS 17) como eje."
    >
      <span className="cake-spine" aria-hidden="true" />

      {/* Cima: ODS 17 como eje del modelo */}
      <div className="cake-top">
        <span className="cake-arrow" aria-hidden="true">▲</span>
        {cima && (
          <div
            className="ods-chip ods-chip--axis"
            tabIndex={0}
            aria-label={`ODS ${cima.num}: ${cima.title}. ${cima.apply}`}
          >
            <span className="ods-chip-inner">
              {iconMap[cima.num] ? (
                <img src={iconMap[cima.num]} alt={`ODS ${cima.num} — ${cima.title}`} />
              ) : (
                <span className="ods-chip-fallback">{cima.num}</span>
              )}
            </span>
            <span className="ods-tip" role="tooltip">
              <strong>
                ODS {cima.num} · {cima.title}
              </strong>
              {cima.apply}
            </span>
          </div>
        )}
      </div>

      {/* Las tres capas del modelo */}
      {layerBlock('economia')}
      {layerBlock('sociedad')}
      {layerBlock('biosfera')}

      <span className="cake-arrow bottom" aria-hidden="true">▼</span>
    </div>
  );
}
