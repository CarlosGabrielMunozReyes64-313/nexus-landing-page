// Iconos de los pilares estratégicos.
// Cada clave coincide con el campo `icon` en data/siteData.js (PILLARS).

const common = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#024029',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Home() {
  return (
    <svg {...common}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  )
}

function Globe() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function People() {
  return (
    <svg {...common}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function Activity() {
  return (
    <svg {...common}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

// Mapa nombre -> componente, para renderizar dinámicamente desde los datos.
const PillarIcons = {
  home: Home,
  globe: Globe,
  people: People,
  activity: Activity,
}

export default PillarIcons
