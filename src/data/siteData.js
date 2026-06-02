// =====================================================
//  NEXUS – Datos del sitio
//  Todo el contenido editable vive aquí, para que los
//  componentes queden limpios y el contenido sea fácil
//  de mantener sin tocar el JSX.
// =====================================================

// ── Navegación principal ──────────────────────────────
// `to` es la ruta de react-router. `cta` marca el botón destacado.
export const NAV_ITEMS = [
  { label: 'Inicio', to: '/' },
  { label: 'Quiénes Somos', to: '/quienes' },
  { label: 'Ejes Estratégicos', to: '/ejes' },
  { label: 'Portafolio', to: '/portafolio' },
  { label: 'Alianzas', to: '/alianzas' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contáctenos', to: '/contacto', cta: true },
]

// ── Cifras de impacto (Inicio) ────────────────────────
export const STATS = [
  { num: '+20', label: 'Años de experiencia acumulada en perfiles clave' },
  { num: '+40', label: 'Proyectos ejecutados en Colombia y la región' },
  { num: '12+', label: 'Aliados estratégicos: academia, gobierno, sector privado' },
  { num: '4', label: 'Ejes estratégicos alineados con agendas globales' },
]

// ── Propuesta de valor (Inicio) ───────────────────────
export const VALOR_ITEMS = [
  {
    title: 'Evidencia científica + saber local',
    text: 'Integramos metodologías rigurosas con el conocimiento territorial de actores locales.',
  },
  {
    title: 'Articulación multisectorial',
    text: 'Gestionamos alianzas entre academia, gobierno, empresa y sociedad civil.',
  },
  {
    title: 'Alineación con agendas internacionales',
    text: 'Diseñamos proyectos que acceden a fondos climáticos, de biodiversidad y cooperación.',
  },
  {
    title: 'Innovación aplicada y resultados medibles',
    text: 'Cada intervención produce evidencia, aprendizaje y transformación concreta.',
  },
]

export const SDG_BADGES = ['ODS 11', 'ODS 13', 'ODS 15', 'MGB 2030', 'SbN/UICN', 'CTI']

// ── Pilares estratégicos (Inicio) ─────────────────────
// `icon` referencia el nombre del componente SVG en components/icons/PillarIcons.jsx
export const PILLARS = [
  {
    icon: 'home',
    title: 'Ciudades y Territorios Sostenibles',
    text: 'Planificación urbana y territorial con enfoque ecosistémico. Infraestructura verde y azul, movilidad sostenible, gestión de residuos y diseño de ecobarrios que armonizan la vida humana con la naturaleza.',
  },
  {
    icon: 'globe',
    title: 'Biodiversidad y Soluciones basadas en la Naturaleza',
    text: 'La naturaleza como infraestructura. Restauración ecológica, bioeconomía, valoración de servicios ecosistémicos y gestión de paisajes bajo estándares UICN y el Marco Global de Biodiversidad Kunming-Montreal.',
  },
  {
    icon: 'people',
    title: 'Innovación Social y Gobernanza',
    text: 'Participación comunitaria genuina, diseño participativo de políticas, fortalecimiento institucional y transformación cultural. Construimos capacidades locales para que la sostenibilidad sea un proceso endógeno.',
  },
  {
    icon: 'activity',
    title: 'Ciencia, Tecnología e Innovación (CTI)',
    text: 'Investigación aplicada, análisis geoespacial y SIG, bioprospección, metagenómica y transferencia de conocimiento. Convertimos el dato científico en decisión estratégica para gobiernos y organizaciones.',
  },
]

// ── Equipo senior (Quiénes Somos) ─────────────────────
export const TEAM = [
  {
    initials: 'RV',
    name: 'Robert Vivas',
    role: 'Diseño Participativo · Sostenibilidad Territorial',
    bio: 'Experto en procesos de diseño participativo y planificación territorial sostenible con más de 15 años liderando proyectos de transformación urbana y comunitaria en Colombia y América Latina. Especialista en gobernanza ambiental y gestión de paisajes culturales.',
  },
  {
    initials: 'GV',
    name: 'Guillermo Vélez',
    role: 'Ecología · SIG · Análisis Territorial',
    bio: 'Ecólogo con maestría en ciencias ambientales y formación avanzada en administración pública. Especializado en análisis geoespacial, gestión ambiental territorial, tecnología e innovación en sostenibilidad. Experiencia en programas de gestión de residuos sólidos y proyectos de inversión pública ambiental.',
  },
  {
    initials: 'VS',
    name: 'Viviana Sánchez',
    role: 'Gestión Pública · Innovación Social',
    bio: 'Especialista en gestión pública territorial e innovación social con experiencia en formulación y evaluación de políticas públicas ambientales, gerencia de proyectos con cooperación internacional y fortalecimiento de capacidades institucionales en gobiernos locales.',
  },
]

// ── Ejes estratégicos / pestañas de servicios ─────────
export const SERVICES = [
  {
    id: 'tab1',
    tab: 'Territorios Sostenibles',
    icon: '🏙️',
    svcTitle: 'Ciudades y Territorios Sostenibles',
    svcSub: 'Planificación · Infraestructura verde · Residuos',
    name: 'Eje 1: Ciudades y Territorios Sostenibles',
    desc: 'Diseñamos estrategias de transformación urbana y territorial que integran la sostenibilidad como componente estructural de la planificación. Nuestro enfoque combina análisis espacial, participación ciudadana y metodologías de resiliencia climática para producir territorios que funcionen mejor para las personas y los ecosistemas.',
    list: [
      'Planificación urbana sostenible y ordenamiento territorial con SIG',
      'Diseño e implementación de infraestructura verde y azul',
      'Programas de Basura Cero y gestión sostenible de residuos sólidos',
      'Diseño de ecobarrios participativos (metodología Cali, Yumbo)',
      'Evaluación de riesgo climático y estrategias de adaptación municipal',
      'Gestión de movilidad sostenible y espacio público biofílico',
    ],
  },
  {
    id: 'tab2',
    tab: 'Biodiversidad y SbN',
    icon: '🌿',
    svcTitle: 'Biodiversidad y Soluciones basadas en la Naturaleza',
    svcSub: 'Restauración · Bioeconomía · Estándares UICN',
    name: 'Eje 2: Biodiversidad y Soluciones basadas en la Naturaleza',
    desc: 'La naturaleza es la infraestructura más eficiente que existe. Diseñamos intervenciones que restauran, conservan y aprovechan de manera sostenible el capital natural como base del desarrollo territorial, alineadas con el Marco Global de Biodiversidad Kunming-Montreal 2030 y los estándares de la UICN.',
    list: [
      'Restauración ecológica de ecosistemas degradados y áreas estratégicas',
      'Diseño de corredores biológicos y gestión de paisajes',
      'Valoración de servicios ecosistémicos y capital natural',
      'Estrategias de bioeconomía y uso sostenible de la biodiversidad',
      'Aplicación de estándares UICN y herramientas del Marco Global de Biodiversidad',
      'Monitoreo de biodiversidad con tecnología y bioinformática',
    ],
  },
  {
    id: 'tab3',
    tab: 'Innovación Social',
    icon: '🤝',
    svcTitle: 'Innovación Social y Gobernanza',
    svcSub: 'Participación · Políticas públicas · Capacidades',
    name: 'Eje 3: Innovación Social y Gobernanza',
    desc: 'La sostenibilidad es, antes que todo, un proyecto colectivo. Acompañamos a comunidades, gobiernos e instituciones en la construcción de acuerdos, capacidades y estructuras de gobernanza que hagan posible la transición hacia modelos de desarrollo más justos, resilientes e inclusivos.',
    list: [
      'Procesos de participación comunitaria y diseño colaborativo',
      'Formulación y evaluación de políticas públicas ambientales y territoriales',
      'Fortalecimiento institucional de gobiernos locales y entidades ambientales',
      'Transformación cultural y estrategias de apropiación social del conocimiento',
      'Metodologías de innovación social para el desarrollo rural y urbano',
      'Diseño de mecanismos de gobernanza ambiental participativa',
    ],
  },
  {
    id: 'tab4',
    tab: 'CTI',
    icon: '🔬',
    svcTitle: 'Ciencia, Tecnología e Innovación',
    svcSub: 'I+D · SIG · Bioprospección · Transferencia',
    name: 'Eje 4: Proyectos Estratégicos de CTI',
    desc: 'Articulamos la frontera del conocimiento científico con las necesidades reales de los territorios. Desde la metagenómica hasta el análisis geoespacial avanzado, convertimos la investigación aplicada en herramientas concretas para la toma de decisiones en sostenibilidad y desarrollo.',
    list: [
      'Investigación, desarrollo e innovación aplicada en sostenibilidad ambiental',
      'Bioprospección, metagenómica y biotecnología para la bioeconomía',
      'Análisis geoespacial avanzado y sistemas de información geográfica (SIG)',
      'Desarrollo de bioproductos: biofertilizantes, coagulantes naturales, biocontroladores',
      'Transferencia de conocimiento y apropiación social de la CTI',
      'Formulación de proyectos BPIN y convocatorias de Minciencias',
    ],
  },
]

// ── Portafolio de proyectos ───────────────────────────
// `cat` es la clase de color (cat-urban, cat-bio, cat-agua, cat-corp)
export const PROJECTS = [
  {
    cat: 'cat-urban',
    catLabel: 'Urbanismo y Resiliencia',
    title: 'Ecobarrios Cali',
    desc: 'Diseño participativo de barrios sostenibles en el Valle del Cauca. Integración de infraestructura verde, gestión comunitaria del agua y estrategias de resiliencia climática urbana.',
  },
  {
    cat: 'cat-urban',
    catLabel: 'Urbanismo y Resiliencia',
    title: 'Ecobarrios Yumbo',
    desc: 'Transformación de entornos urbano-industriales con soluciones basadas en la naturaleza y modelos de gobernanza ambiental comunitaria en municipio de Yumbo, Valle del Cauca.',
  },
  {
    cat: 'cat-bio',
    catLabel: 'Bioeconomía e I+D',
    title: 'Metagenómica del Fique',
    desc: 'Investigación del microbioma en subproductos del fique (Furcraea sp.) para identificar cepas con potencial biotecnológico en la producción de biofertilizantes y biocontroladores.',
  },
  {
    cat: 'cat-bio',
    catLabel: 'Bioeconomía e I+D',
    title: 'Desarrollo de Biofertilizantes',
    desc: 'Formulación y validación de bioproductos para la agricultura sostenible, reduciendo la dependencia de agroquímicos y fortaleciendo la bioeconomía regional en el suroccidente colombiano.',
  },
  {
    cat: 'cat-agua',
    catLabel: 'Gestión del Agua y Suelo',
    title: 'Coagulantes Naturales',
    desc: 'Investigación y aplicación de coagulantes de origen vegetal para el tratamiento de aguas residuales, como alternativa sostenible y de bajo costo a productos químicos convencionales.',
  },
  {
    cat: 'cat-agua',
    catLabel: 'Gestión del Agua y Suelo',
    title: 'Restauración Post-Minería',
    desc: 'Estrategias de restauración ecológica de suelos degradados por actividades mineras, incluyendo selección de especies nativas, enmiendas biológicas y monitoreo de recuperación.',
  },
  {
    cat: 'cat-corp',
    catLabel: 'Gestión Ambiental Corporativa',
    title: 'Implementación ISO 14001',
    desc: 'Acompañamiento integral a empresas en la implementación del Sistema de Gestión Ambiental ISO 14001:2015, desde diagnóstico hasta certificación y mejora continua del desempeño ambiental.',
  },
  {
    cat: 'cat-corp',
    catLabel: 'Gestión Ambiental Corporativa',
    title: 'Ganadería Baja en Carbono',
    desc: 'Diseño e implementación de estrategias de ganadería sostenible y baja en emisiones, integrando sistemas silvopastoriles y medición de huella de carbono en fincas ganaderas del suroccidente.',
  },
  {
    cat: 'cat-urban',
    catLabel: 'Urbanismo y Resiliencia',
    title: 'NEXUS Ecosistemas Resilientes',
    desc: 'Estudio de línea base y metodología para el proyecto CLIMALAB de resiliencia climática en Buenaventura y Jamundí, con análisis territorial y diagnóstico socioambiental participativo.',
  },
]

// ── Agendas globales (Alianzas) ───────────────────────
export const AGENDAS = [
  {
    icon: '🌐',
    title: 'Objetivos de Desarrollo Sostenible (ODS)',
    text: 'Todos nuestros proyectos contribuyen a metas específicas de los ODS, con énfasis en ODS 11 (ciudades sostenibles), ODS 13 (acción climática) y ODS 15 (vida de ecosistemas terrestres).',
  },
  {
    icon: '🦋',
    title: 'Marco Global de Biodiversidad Kunming-Montreal',
    text: 'Aplicamos las metas del MGB 2030 en el diseño de proyectos de conservación, restauración y uso sostenible de la biodiversidad, facilitando el acceso a financiamiento del GEF y fondos climáticos.',
  },
  {
    icon: '🌱',
    title: 'Soluciones basadas en la Naturaleza (SbN/UICN)',
    text: 'Integramos el estándar global de SbN de la UICN en la formulación de proyectos de infraestructura verde, restauración y adaptación climática, asegurando rigor metodológico internacional.',
  },
  {
    icon: '🏛️',
    title: 'ICLEI y Redes de Ciudades Sostenibles',
    text: 'Articulamos gobiernos locales con redes globales como ICLEI para el intercambio de experiencias, acceso a herramientas técnicas y posicionamiento en agendas de política climática urbana.',
  },
]

// ── Red de aliados (Alianzas) ─────────────────────────
export const ALLIES = [
  { logo: 'SN', name: 'SENA', type: 'Formación para el trabajo y CTI' },
  { logo: 'UC', name: 'Universidad del Cauca', type: 'Investigación y academia' },
  { logo: 'GL', name: 'Gobiernos Locales', type: 'Alcaldías y gobernaciones' },
  { logo: 'CI', name: 'Cooperación Internacional', type: 'GEF · BID · PNUD · GIZ' },
]

// ── Artículos del blog ────────────────────────────────
export const BLOG_POSTS = [
  {
    emoji: '🌿',
    bg: '#E8F5EF',
    topic: 'Soluciones basadas en la Naturaleza',
    title: '¿Qué son las SbN y por qué están transformando la planificación territorial?',
    preview: 'El estándar global de la UICN y el Marco Global de Biodiversidad abren una nueva era para los proyectos de infraestructura verde y restauración ecológica a escala territorial...',
  },
  {
    emoji: '🌡️',
    bg: '#E1F0F5',
    topic: 'Resiliencia Climática',
    title: 'Ciudades que respiran: infraestructura verde como estrategia de adaptación',
    preview: 'Análisis de casos exitosos de ecobarrios y corredores ecológicos urbanos que demuestran el valor económico y social de la naturaleza integrada en el diseño de la ciudad...',
  },
  {
    emoji: '🔬',
    bg: '#E8F5E9',
    topic: 'Biodiversidad y Biotecnología',
    title: 'Metagenómica territorial: leer el suelo para entender el ecosistema',
    preview: 'Cómo el análisis del microbioma de suelos y subproductos agroindustriales abre oportunidades para la bioeconomía regional y el desarrollo sostenible basado en la ciencia...',
  },
  {
    emoji: '🏙️',
    bg: '#F3E5F5',
    topic: 'Innovación Territorial',
    title: 'Gobernanza ambiental participativa: lecciones desde los ecobarrios del Valle',
    preview: 'El caso de los ecobarrios en Cali y Yumbo muestra que la participación genuina es el factor diferenciador entre proyectos de impacto real y documentos que terminan archivados...',
  },
  {
    emoji: '💧',
    bg: '#E3F2FD',
    topic: 'Gestión del Agua',
    title: 'Coagulantes naturales: ciencia local para el tratamiento del agua',
    preview: 'Investigación y resultados de la aplicación de coagulantes de origen vegetal como alternativa sostenible, accesible y eficiente para el tratamiento de agua en comunidades rurales...',
  },
  {
    emoji: '🤝',
    bg: '#FFF8E1',
    topic: 'Cooperación Internacional',
    title: 'Cómo acceder a fondos climáticos internacionales: guía práctica para municipios',
    preview: 'Los mecanismos del GEF, GCF y PNUD están disponibles para municipios colombianos. Lo que falta es conocer las reglas del juego y formular proyectos sólidos con enfoque territorial...',
  },
]

// ── Formulario de contacto: opciones de los select ────
export const CONTACT_ORG_TYPES = [
  'Gobierno municipal o departamental',
  'Empresa privada',
  'Cooperación internacional',
  'Academia / Universidad',
  'Organización comunitaria o social',
  'Otro',
]

export const CONTACT_INTEREST_AREAS = [
  'Ciudades y Territorios Sostenibles',
  'Biodiversidad y Soluciones basadas en la Naturaleza',
  'Innovación Social y Gobernanza',
  'Ciencia, Tecnología e Innovación (CTI)',
  'Múltiples ejes / Proyecto integral',
]

export const CONTACT_TARGETS = [
  'Gobiernos municipales y departamentales con retos de planificación sostenible',
  'Empresas que buscan certificación ambiental o estrategias de sostenibilidad corporativa',
  'Comunidades y organizaciones sociales en procesos de desarrollo territorial',
  'Organismos de cooperación internacional con programas en Colombia y la región',
  'Universidades y centros de investigación interesados en alianzas CTI',
]

// ── Footer ────────────────────────────────────────────
export const FOOTER_NAV = [
  { label: 'Inicio', to: '/' },
  { label: 'Quiénes Somos', to: '/quienes' },
  { label: 'Ejes Estratégicos', to: '/ejes' },
  { label: 'Portafolio', to: '/portafolio' },
  { label: 'Alianzas', to: '/alianzas' },
  { label: 'Blog', to: '/blog' },
]

export const FOOTER_TOPICS = [
  { label: 'Territorios Sostenibles', to: '/ejes' },
  { label: 'Biodiversidad y SbN', to: '/ejes' },
  { label: 'Innovación Social', to: '/ejes' },
  { label: 'CTI', to: '/ejes' },
]
