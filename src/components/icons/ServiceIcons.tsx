// Set de iconos de línea para las tarjetas del mosaico de servicios.
// Heredan el color mediante `stroke="currentColor"`, de modo que cada tarjeta
// los tiñe según el color de su eje.

const base = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const I = {
  clipboard: (
    <svg {...base}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4a2 2 0 012-2h2a2 2 0 012 2" />
      <path d="M8.5 10l1.5 1.5L13 8.5" />
      <path d="M8.5 15l1.5 1.5L13 13.5" />
    </svg>
  ),
  document: (
    <svg {...base}>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  ),
  recycle: (
    <svg {...base}>
      <path d="M7 19h10a2 2 0 001.7-3l-1.3-2.2" />
      <path d="M12 4.5l2.8 4.9" />
      <path d="M4.7 12.5L3.4 15a2 2 0 00.3 2.3" />
      <path d="M9.2 4.5a2 2 0 00-2.6.9L5.3 7.6" />
      <path d="M6.5 13.5l-1.8-1 1-1.8M14.8 9.4l2-.6-.6-2M9 19l-1.6 1.4L9 22" />
    </svg>
  ),
  circular: (
    <svg {...base}>
      <path d="M20 12a8 8 0 10-2.3 5.6" />
      <path d="M20 8v4h-4" />
      <path d="M12 8v4l2.5 1.5" />
    </svg>
  ),
  mapLayers: (
    <svg {...base}>
      <path d="M12 21s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  ),
  droplet: (
    <svg {...base}>
      <path d="M12 3s6 6.4 6 10.5A6 6 0 016 13.5C6 9.4 12 3 12 3z" />
      <path d="M9.5 14a2.5 2.5 0 002.5 2.5" />
    </svg>
  ),
  chartSearch: (
    <svg {...base}>
      <path d="M4 20V6M4 20h16" />
      <rect x="7" y="13" width="2.5" height="4" />
      <rect x="11.5" y="9" width="2.5" height="8" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M18.8 10.8L21 13" />
    </svg>
  ),
  network: (
    <svg {...base}>
      <circle cx="12" cy="6" r="2.2" />
      <circle cx="6" cy="17" r="2.2" />
      <circle cx="18" cy="17" r="2.2" />
      <path d="M10.5 7.6L7.4 15M13.5 7.6L16.6 15M8.2 17h7.6" />
    </svg>
  ),
  docLeaf: (
    <svg {...base}>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 16c0-2 1.5-3.5 4-3.5C13 15 11 16.5 9 16z" />
    </svg>
  ),
  budget: (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M12 16v4M8 20h8" />
      <path d="M12 8.5v3M10.8 11.4c0 .7.6 1.1 1.2 1.1s1.2-.4 1.2-1.1-.6-1-1.2-1.2-1.2-.5-1.2-1.1.6-1 1.2-1 1.2.4 1.2 1" />
    </svg>
  ),
  leaf: (
    <svg {...base}>
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
      <path d="M5 19c3-5 6-7 10-8.5" />
    </svg>
  ),
  seedling: (
    <svg {...base}>
      <path d="M12 21v-7" />
      <path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5z" />
      <path d="M12 12c0-3 2-5 5-5 0 3-2 5-5 5z" />
    </svg>
  ),
  microscope: (
    <svg {...base}>
      <path d="M6 21h12" />
      <path d="M9 21a5 5 0 007-4.5" />
      <path d="M11 5l3-1.5 1.8 3.6L13 8.6z" />
      <path d="M12.4 7.8l-2 4" />
      <path d="M8.5 13.5l3.5 1.7" />
    </svg>
  ),
  water: (
    <svg {...base}>
      <path d="M4 9c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 4 0" />
      <path d="M4 14c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 4 0" />
      <path d="M4 19c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 4 0" />
    </svg>
  ),
  shield: (
    <svg {...base}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  mountains: (
    <svg {...base}>
      <path d="M3 19l5-8 3.5 5" />
      <path d="M10 19l5-9 6 9z" />
    </svg>
  ),
  coins: (
    <svg {...base}>
      <ellipse cx="9" cy="7" rx="5" ry="2.5" />
      <path d="M4 7v4c0 1.4 2.2 2.5 5 2.5" />
      <ellipse cx="15" cy="14" rx="5" ry="2.5" />
      <path d="M10 14v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" />
    </svg>
  ),
  book: (
    <svg {...base}>
      <path d="M4 5.5A2.5 2.5 0 016.5 3H12v16H6.5A2.5 2.5 0 004 21z" />
      <path d="M20 5.5A2.5 2.5 0 0017.5 3H12v16h5.5a2.5 2.5 0 012.5 2.5z" />
    </svg>
  ),
  handshake: (
    <svg {...base}>
      <path d="M8 12l2.5-2.5a1.5 1.5 0 012 0L15 12" />
      <path d="M3 8l4-2 5 3 3-1 6 3" />
      <path d="M21 8l-3 6-3-2" />
      <path d="M3 8l3 7 3-2" />
    </svg>
  ),
  dashboard: (
    <svg {...base}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 13v3M11 12v4M15 14v2" />
    </svg>
  ),
  satellite: (
    <svg {...base}>
      <path d="M5 15l4-4 4 4-4 4a2 2 0 01-2.8 0l-1.2-1.2a2 2 0 010-2.8z" />
      <path d="M11 5l3 3M14 4l2 2M9 13l2-2" />
      <path d="M16 8a4 4 0 010 5.6M18 6a7 7 0 010 9.4" />
    </svg>
  ),
  globe: (
    <svg {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 010 18 14 14 0 010-18z" />
    </svg>
  ),
  code: (
    <svg {...base}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
    </svg>
  ),
  signal: (
    <svg {...base}>
      <path d="M12 20v-6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M8.5 8.5a5 5 0 000 7M15.5 8.5a5 5 0 010 7" />
      <path d="M6 6a8 8 0 000 12M18 6a8 8 0 010 12" />
    </svg>
  ),
  database: (
    <svg {...base}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
      <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13" />
      <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
    </svg>
  ),
  chip: (
    <svg {...base}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 10.5h4v4h-4z" />
      <path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2" />
    </svg>
  ),
  target: (
    <svg {...base}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  ),
};

export type ServiceIconName = keyof typeof I;

export default function ServiceIcon({ name }: { name: ServiceIconName }) {
  return I[name] ?? I.document;
}

// Mapa eje → icono por posición del servicio. Elegido para dar variedad visual
// y una lectura temática por eje (verde, azul, morado, ámbar).
export const ICON_MAP: Record<string, ServiceIconName[]> = {
  tab1: [
    'clipboard', 'document', 'recycle', 'circular', 'mapLayers',
    'droplet', 'chartSearch', 'network', 'docLeaf', 'budget',
  ],
  tab2: [
    'seedling', 'microscope', 'leaf', 'network', 'water',
    'mountains', 'shield', 'leaf', 'coins', 'seedling',
  ],
  tab3: [
    'document', 'dashboard', 'network', 'handshake', 'network',
    'recycle', 'water', 'coins', 'book', 'mapLayers',
  ],
  tab4: [
    'satellite', 'globe', 'code', 'chartSearch', 'signal',
    'dashboard', 'document', 'database', 'chip', 'mapLayers',
  ],
};
