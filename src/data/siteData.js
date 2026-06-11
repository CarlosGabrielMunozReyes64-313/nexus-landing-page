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
];

// ── Cifras de impacto (Inicio) ────────────────────────
export const STATS = [
  { num: '+20', label: 'Años de experiencia acumulada en perfiles clave' },
  { num: '+40', label: 'Proyectos ejecutados en Colombia y la región' },
  { num: '12+', label: 'Aliados estratégicos: academia, gobierno, sector privado' },
  { num: '4', label: 'Ejes estratégicos alineados con agendas globales' },
];

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
];

export const SDG_BADGES = [
  { label: 'ODS 11', icon: new URL('../assets/iconos_inicio/ods-11.png', import.meta.url).href },
  { label: 'ODS 13', icon: new URL('../assets/iconos_inicio/ods-13.png', import.meta.url).href },
  { label: 'ODS 15', icon: new URL('../assets/iconos_inicio/ods-15.png', import.meta.url).href },
  {
    label: 'MGB 2030',
    icon: new URL('../assets/iconos_inicio/mgb-2030.png', import.meta.url).href,
  },
  {
    label: 'SbN/UICN',
    icon: new URL('../assets/iconos_inicio/sbn-uicn.png', import.meta.url).href,
  },
  { label: 'C+T+I', icon: new URL('../assets/iconos_inicio/cti.png', import.meta.url).href },
];

// ── Pilares estratégicos (Inicio) ─────────────────────
// `icon` ahora referencia una imagen en src/assets/iconos_inicio
export const PILLARS = [
  { icon: '/iconos_inicio/home.png', title: 'Ciudades y Territorios Sostenibles' },
  {
    icon: '/iconos_inicio/globe.png',
    title: 'Biodiversidad y Soluciones basadas en la Naturaleza',
  },
  { icon: '/iconos_inicio/people.png', title: 'Innovación Social y Gobernanza' },
  { icon: '/iconos_inicio/activity.png', title: 'Ciencia, Tecnología e Innovación (C+T+I)' },
];

// ── Equipo senior (Quiénes Somos) ─────────────────────
// Cada integrante: { initials, name, role, bio }. Opcionalmente puede
// incluir `profile` con el CV ampliado (resumen, formación, experiencia y
// competencias); cuando existe, la tarjeta muestra "Ver perfil completo".
export const TEAM = [
  {
    initials: 'GV',
    name: 'Guillermo',
    role: 'Ecólogo · Consultor e Investigador',
    bio: 'Ecólogo con formación doctoral (cand.) y dos maestrías en ciencias. Especialista en planificación territorial, gestión integral de residuos —políticas de Basura Cero, valorización de RCD, NFU y compostaje— y tecnologías de precisión para el monitoreo ambiental, con un enfoque riguroso basado en el método científico y estándares internacionales.',
    profile: {
      title:
        'Ecólogo | Consultor e Investigador. Especialista en Planificación Territorial, Gestión Ambiental y Políticas de Transformación de Residuos',
      summary:
        'Ecólogo de profesión con una sólida formación de posgrado y experiencia integral en la formulación, coordinación y evaluación de proyectos de desarrollo territorial, gestión ambiental y sostenibilidad. Investigador y consultor con capacidades demostradas en el diseño de flujos operacionales para infraestructuras de gestión integral de residuos (enfocado en políticas de Basura Cero, valorización de RCD, NFU y compostaje) y en la aplicación de tecnologías de precisión para la planificación y el monitoreo ambiental. Experiencia en la articulación comunitaria y la docencia en contextos de producción rural. Posee un fuerte enfoque analítico basado en el método científico, modelamiento técnico y rigurosidad metodológica bajo estándares internacionales.',
      education: [
        'Profesional en Ecología',
        'Doctorado (Cand.) en Gestión de la Innovación Tecnológica — UTEL Universidad',
        'Maestría en Ciencias en Ingeniería Ambiental',
        'Maestría en Ciencias en Conservación y Manejo de Vida Silvestre',
        'Pregrado en Administración Pública (9.º semestre) — Escuela Superior de Administración Pública (ESAP)',
      ],
      experience: [
        {
          role: 'Consultor Técnico Ambiental',
          org: 'Actualización del PGIRS — DAFE Popayán',
          detail:
            'Desarrollo de informes técnicos finales, estructuración de anexos contractuales y planeación estratégica para la gestión integral de residuos sólidos en el municipio.',
        },
        {
          role: 'Contratista e Investigador',
          org: 'Servicio Nacional de Aprendizaje (SENA)',
          detail:
            'Líder de proyectos de investigación aplicada (SGPS), con énfasis en la evaluación del impacto de la educación no formal en unidades de producción ganadera y análisis metodológicos complejos mediante el Análisis de Redes Sociales (ARS).',
        },
        {
          role: 'Consultor en Transferencia Tecnológica',
          org: 'Maser Colombia & Stevens Water Monitoring Systems',
          detail:
            'Asesoría técnica y comercial para la implementación de sistemas avanzados de monitoreo de suelos (HydraGO y HydraGO FLEX) aplicados a la agricultura de precisión y la gestión del agua.',
        },
        {
          role: 'Comisionado y Gestor Comunitario',
          org: 'Zonas de Intervención (Cauca: Piamonte, Toribío, Calibío)',
          detail:
            'Coordinación de transferencias técnicas en campo, levantamiento de muestreos bióticos/abióticos y vinculación de comunidades locales en planes de ordenamiento territorial.',
        },
      ],
      skills: [
        {
          area: 'Sistemas de Información Geográfica (SIG)',
          detail:
            'Dominio de ArcMap y QGIS para análisis espacial, mapeo de zonas de riesgo o planificación agroecológica.',
        },
        {
          area: 'Modelamiento Hidráulico',
          detail:
            'Manejo de herramientas como HEC-RAS y EPANET para el diseño de redes y la simulación de flujos de agua.',
        },
        {
          area: 'Metodología de Investigación',
          detail:
            'Análisis de Redes Sociales (ARS), formulación de proyectos bajo el marco lógico de la administración pública y redacción científico-técnica.',
        },
      ],
    },
  },
  {
    initials: 'JM',
    name: 'Jaime Andrés Marín Molina',
    role: 'Especialista Senior SbN · Ecología',
    bio: 'Ingeniero Agrónomo con más de 20 años de experiencia en gestión ambiental, agricultura sostenible, monitoreo ecosistémico y manejo de recursos naturales. Especialista en diseño e implementación de estrategias de resiliencia climática, restauración ecológica, gestión del agua y análisis territorial para la aplicación de Soluciones Basadas en la Naturaleza.',
  },
  {
    initials: 'VS',
    name: 'Viviana María Sánchez Escobar',
    role: 'Profesional Social y Participativo',
    bio: 'Administradora Pública, Especialista en Gerencia Social y Magíster en Gerencia para la Innovación Social. Cuenta con más de 13 años de experiencia en coordinación interinstitucional, participación ciudadana, sostenibilidad urbana y formulación de proyectos climáticos. Experta en procesos de gobernanza territorial, concertación comunitaria y construcción participativa de soluciones ambientales y sociales.',
  },
  {
    initials: 'JS',
    name: 'Juan David Sandoval Gaviria',
    role: 'Especialista SIG · Geomática',
    bio: 'Geógrafo bilingüe con experiencia en análisis geoespacial, ordenamiento territorial y gestión de información ambiental. Especialista en Sistemas de Información Geográfica (SIG), modelación territorial, cartografía temática y análisis socioambiental para la planificación, priorización y monitoreo de intervenciones basadas en la naturaleza.',
  },
  {
    initials: 'PS',
    name: 'Paola Andrea Sánchez Escobar',
    role: 'Profesional Logística',
    bio: 'Economista y Especialista en Gerencia en Logística Integral, con amplia experiencia en planeación operativa, administración de recursos, seguimiento financiero y gestión logística. Su experiencia contribuye a garantizar la eficiencia operativa, el control de recursos y la adecuada coordinación administrativa de los proyectos.',
  },
  {
    initials: 'RV',
    name: 'Robert Armando Vivas Tovar',
    role: 'Profesional Diseño',
    bio: 'Diseñador Industrial con más de 10 años de experiencia en sostenibilidad, innovación social y participación comunitaria. Especialista en el diseño y facilitación de metodologías de cocreación para la formulación e implementación de Soluciones Basadas en la Naturaleza (SbN), integrando comunidades, actores institucionales y sectores productivos. Cuenta con experiencia en economía circular, cambio climático, restauración ecológica y gobernanza ambiental, incluyendo la estrategia Ecobarrios Cali.',
  },
  {
    initials: 'DC',
    name: 'Derly Andrea Cabrera Gómez',
    role: 'Ingeniera de Implementación SbN',
    bio: 'Gerente de Proyectos PMP® con experiencia en los sectores gubernamental, industrial y de salud. Especialista en planificación estratégica, gestión de riesgos, seguimiento de proyectos, aseguramiento de la calidad y control de cumplimiento. Aporta capacidades para la coordinación operativa, el monitoreo de indicadores, la gestión de información y la articulación técnica para la implementación efectiva de Soluciones Basadas en la Naturaleza.',
  },
  {
    initials: 'CM',
    name: 'Carlos Gabriel Muñoz',
    role: 'Asistente Técnico y de Campo',
    bio: 'Técnico en Desarrollo de Software en formación, con conocimientos en gestión de información, bases de datos, herramientas digitales y soporte operativo. Apoya las actividades de levantamiento, procesamiento y organización de información técnica, así como el seguimiento y la sistematización de resultados del proyecto.',
  },
];

// ── Ejes estratégicos / pestañas de servicios ─────────
// Cada eje: id, tab (rótulo de la pestaña), svcTitle (título), name (rótulo
// pequeño), desc (intro) y list, donde cada ítem es { label, text }.
export const SERVICES = [
  {
    id: 'tab1',
    tab: 'Gobernanza',
    icon: '🏛️',
    svcTitle: 'Gobernanza Territorial e Innovación Pública',
    svcSub: 'Conocimiento · Decisión · Transparencia',
    name: 'Eje 1',
    desc: 'Este eje se centra en el fortalecimiento institucional y la cocreación de políticas públicas basadas en datos, conectando a la academia, el sector público y las comunidades.',
    list: [
      {
        label: 'Gestión del Conocimiento y Formación',
        text: 'Desarrollo de capacidades a través de procesos de educación no formal e investigación-acción participativa para líderes comunitarios y funcionarios públicos.',
      },
      {
        label: 'Herramientas de Soporte a la Decisión',
        text: 'Implementación de metodologías analíticas para optimizar la planificación e inversión pública en el territorio.',
      },
      {
        label: 'Democratización de la Información',
        text: 'Espacios de transparencia y acceso a datos clave para mejorar el control social y la gestión comunitaria.',
      },
    ],
  },
  {
    id: 'tab2',
    tab: 'Ambiente y Riesgo',
    icon: '🌧️',
    svcTitle: 'Sostenibilidad Ambiental y Gestión del Riesgo',
    svcSub: 'Hidrología · Monitoreo · Paisaje',
    name: 'Eje 2',
    desc: 'Orientado a responder a las dinámicas ecológicas de los ecosistemas locales mediante el monitoreo de precisión y la planificación basada en la evidencia física del territorio.',
    list: [
      {
        label: 'Modelamiento Hidráulico e Hidrológico',
        text: 'Integración de herramientas avanzadas para la delimitación de zonas de inundación, análisis de cuencas y gestión del riesgo de desastres.',
      },
      {
        label: 'Monitoreo Ambiental de Precisión',
        text: 'Incorporación de redes de sensores (como tecnologías de monitoreo de suelos y variables hidroclimáticas) para optimizar la toma de decisiones en sectores clave como el agua rural y la agricultura de precisión.',
      },
      {
        label: 'Planificación del Paisaje y Conservación',
        text: 'Evaluación de la conectividad ecológica y el impacto del cambio de uso del suelo, garantizando la preservación de las fuentes hídricas estratégicas.',
      },
    ],
  },
  {
    id: 'tab3',
    tab: 'Economía Circular',
    icon: '♻️',
    svcTitle: 'Economía Circular y Metabolismo Urbano-Rural',
    svcSub: 'RCD · NFU y orgánicos · PGIRS',
    name: 'Eje 3',
    desc: 'Diseñado para transformar el enfoque tradicional de gestión de residuos en un modelo de valorización y desarrollo económico sostenible que mitigue los impactos ambientales en los municipios.',
    list: [
      {
        label: 'Valorización de Residuos de Construcción y Demolición (RCD)',
        text: 'Estrategias para la reconversión técnica y el diseño de plantas de transformación de RCD en materiales e infraestructura para el propio territorio.',
      },
      {
        label: 'Gestión de Neumáticos Fuera de Uso (NFU) y Orgánicos',
        text: 'Desarrollo de cadenas de valor para el aprovechamiento de NFU y la implementación de sistemas macro de compostaje técnico para el cierre de ciclos de nutrientes.',
      },
      {
        label: 'Optimización de PGIRS',
        text: 'Modernización operativa, flujos de procesos y esquemas de seguimiento técnico para los Planes de Gestión Integral de Residuos Sólidos con un enfoque real de Basura Cero.',
      },
    ],
  },
  {
    id: 'tab4',
    tab: 'TIG y Datos',
    icon: '🛰️',
    svcTitle: 'Tecnologías de la Información Geográfica (TIG) e Infraestructura de Datos',
    svcSub: 'SIG · Redes hídricas · Plataforma web',
    name: 'Eje 4',
    desc: 'El núcleo tecnológico que soporta toda la plataforma, permitiendo la visualización espacial, el análisis multitemporal y el despliegue de soluciones cartográficas accesibles.',
    list: [
      {
        label: 'Análisis Espacial y Georreferenciación',
        text: 'Procesamiento de datos mediante QGIS, ArcMap y herramientas de código abierto para el ordenamiento territorial y el catastro multipropósito.',
      },
      {
        label: 'Sistemas de Información Hidráulica e Infraestructura',
        text: 'Modelación y diagnóstico de redes de acueductos rurales y sistemas de saneamiento básico.',
      },
      {
        label: 'Plataforma Web Interactiva (NEXUS)',
        text: 'Un entorno digital intuitivo que integra visores geográficos, tableros de control (dashboards) e indicadores clave de desarrollo territorial en tiempo real.',
      },
      {
        label: 'Enfoque Metodológico Transversal Análisis de Redes Sociales (ARS)',
        text: 'Como metodología transversal a todos los ejes, NEXUS aplicará el Análisis de Redes Sociales (ARS), entendido estrictamente como la evaluación del tejido de actores, flujos de confianza e interacciones institucionales, alejado del concepto de redes sociales digitales. Esto permitirá mapear las alianzas estratégicas, identificar cuellos de botella en la gobernanza y medir el impacto real de la transferencia de conocimiento en el territorio.',
      },
    ],
  },
];

// Metodología transversal a todos los ejes (se muestra bajo el banner).
export const ARS_METHODOLOGY = {
  tag: '',
  title: '',
  text: '',
};

// ── Portafolio de proyectos ───────────────────────────
// `cat` es la clase de color (cat-urban, cat-bio, cat-agua, cat-corp)
export const PROJECTS = [
  {
    cat: 'cat-sost',
    catLabel: 'Sostenibilidad y Ambiente',
    title: 'Estrategias de Sostenibilidad Corporativa',
    desc: 'Diseño e implementación de hojas de ruta de sostenibilidad alineadas con estándares ESG y los Objetivos de Desarrollo Sostenible, integrando criterios ambientales, sociales y de gobernanza en la estrategia empresarial.',
  },
  {
    cat: 'cat-sost',
    catLabel: 'Sostenibilidad y Ambiente',
    title: 'Medición de Huella de Carbono',
    desc: 'Cuantificación de emisiones de gases de efecto invernadero y diseño de planes de reducción y compensación para empresas y territorios, con base en metodologías internacionales reconocidas.',
  },
  {
    cat: 'cat-bio',
    catLabel: 'Biodiversidad',
    title: 'Estudios de Línea Base y Conservación',
    desc: 'Caracterización de ecosistemas, levantamiento de línea base de biodiversidad y formulación de planes de manejo y conservación para proyectos productivos y territoriales.',
  },
  {
    cat: 'cat-bio',
    catLabel: 'Biodiversidad',
    title: 'Restauración Ecológica',
    desc: 'Diseño e implementación de procesos de restauración de ecosistemas degradados con especies nativas, enmiendas biológicas y monitoreo de recuperación a largo plazo.',
  },
  {
    cat: 'cat-gob',
    catLabel: 'Gobernanza',
    title: 'Fortalecimiento Institucional',
    desc: 'Acompañamiento a entidades públicas y organizaciones en el diseño de políticas, mecanismos de participación y procesos de toma de decisiones para una gestión ambiental y territorial más eficaz.',
  },
  {
    cat: 'cat-gob',
    catLabel: 'Gobernanza',
    title: 'Gestión de Conflictos Socioambientales',
    desc: 'Diseño de espacios de diálogo y mecanismos de concertación entre actores para prevenir y transformar conflictos asociados al uso de los recursos naturales.',
  },
  {
    cat: 'cat-social',
    catLabel: 'Innovación Social',
    title: 'Proyectos con Comunidades',
    desc: 'Diseño y gestión de iniciativas de impacto con metodologías participativas, fortaleciendo capacidades locales y promoviendo soluciones sostenibles construidas desde el territorio.',
  },
  {
    cat: 'cat-social',
    catLabel: 'Innovación Social',
    title: 'Modelos de Negocio con Impacto',
    desc: 'Estructuración de emprendimientos y modelos de negocio social que articulan rentabilidad con beneficio ambiental y comunitario en la región.',
  },
  {
    cat: 'cat-alianzas',
    catLabel: 'Alianzas y Articulación',
    title: 'Articulación Multi-Actor',
    desc: 'Conexión y coordinación entre sector privado, entidades públicas, academia y comunidades para estructurar proyectos colaborativos de desarrollo sostenible.',
  },
  {
    cat: 'cat-alianzas',
    catLabel: 'Alianzas y Articulación',
    title: 'Cooperación y Movilización de Recursos',
    desc: 'Identificación de fuentes de financiación (cooperación internacional, regalías, fondos públicos y privados) y acompañamiento en la formulación de propuestas para acceder a ellas.',
  },
  {
    cat: 'cat-proyectos',
    catLabel: 'Estructuración de Proyectos',
    title: 'Formulación y Gestión de Proyectos',
    desc: 'Diseño, formulación y gestión integral de proyectos territoriales, desde la conceptualización hasta la consecución de recursos y la implementación.',
  },
  {
    cat: 'cat-proyectos',
    catLabel: 'Estructuración de Proyectos',
    title: 'Gestión del Conocimiento',
    desc: 'Sistematización de experiencias, generación de conocimiento aplicado y transferencia de aprendizajes para escalar soluciones sostenibles en distintos territorios.',
  },
];

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
];

// ── Red de aliados (Alianzas) ─────────────────────────
export const ALLIES = [];

// ── Artículos del blog ────────────────────────────────
export const BLOG_POSTS = [
  {
    emoji: '🌿',
    bg: '#E8F5EF',
    topic: 'Soluciones basadas en la Naturaleza',
    title: '¿Qué son las SbN y por qué están transformando la planificación territorial?',
    preview:
      'El estándar global de la UICN y el Marco Global de Biodiversidad abren una nueva era para los proyectos de infraestructura verde y restauración ecológica a escala territorial...',
  },
  {
    emoji: '🌡️',
    bg: '#E1F0F5',
    topic: 'Resiliencia Climática',
    title: 'Ciudades que respiran: infraestructura verde como estrategia de adaptación',
    preview:
      'Análisis de casos exitosos de ecobarrios y corredores ecológicos urbanos que demuestran el valor económico y social de la naturaleza integrada en el diseño de la ciudad...',
  },
  {
    emoji: '🔬',
    bg: '#E8F5E9',
    topic: 'Biodiversidad y Biotecnología',
    title: 'Metagenómica territorial: leer el suelo para entender el ecosistema',
    preview:
      'Cómo el análisis del microbioma de suelos y subproductos agroindustriales abre oportunidades para la bioeconomía regional y el desarrollo sostenible basado en la ciencia...',
  },
  {
    emoji: '🏙️',
    bg: '#F3E5F5',
    topic: 'Innovación Territorial',
    title: 'Gobernanza ambiental participativa: lecciones desde los ecobarrios del Valle',
    preview:
      'El caso de los ecobarrios en Cali y Yumbo muestra que la participación genuina es el factor diferenciador entre proyectos de impacto real y documentos que terminan archivados...',
  },
  {
    emoji: '💧',
    bg: '#E3F2FD',
    topic: 'Gestión del Agua',
    title: 'Coagulantes naturales: ciencia local para el tratamiento del agua',
    preview:
      'Investigación y resultados de la aplicación de coagulantes de origen vegetal como alternativa sostenible, accesible y eficiente para el tratamiento de agua en comunidades rurales...',
  },
  {
    emoji: '🤝',
    bg: '#FFF8E1',
    topic: 'Cooperación Internacional',
    title: 'Cómo acceder a fondos climáticos internacionales: guía práctica para municipios',
    preview:
      'Los mecanismos del GEF, GCF y PNUD están disponibles para municipios colombianos. Lo que falta es conocer las reglas del juego y formular proyectos sólidos con enfoque territorial...',
  },
];

// ── Formulario de contacto: opciones de los select ────
export const CONTACT_ORG_TYPES = [
  'Gobierno municipal o departamental',
  'Empresa privada',
  'Cooperación internacional',
  'Academia / Universidad',
  'Organización comunitaria o social',
  'Otro',
];

export const CONTACT_INTEREST_AREAS = [
  'Ciudades y Territorios Sostenibles',
  'Biodiversidad y Soluciones basadas en la Naturaleza',
  'Innovación Social y Gobernanza',
  'Ciencia, Tecnología e Innovación (CTI)',
  'Múltiples ejes / Proyecto integral',
];

export const CONTACT_TARGETS = [
  'Gobiernos municipales y departamentales con retos de planificación sostenible',
  'Empresas que buscan certificación ambiental o estrategias de sostenibilidad corporativa',
  'Comunidades y organizaciones sociales en procesos de desarrollo territorial',
  'Organismos de cooperación internacional con programas en Colombia y la región',
  'Universidades y centros de investigación interesados en alianzas CTI',
];

// ── Footer ────────────────────────────────────────────
export const FOOTER_NAV = [
  { label: 'Inicio', to: '/' },
  { label: 'Quiénes Somos', to: '/quienes' },
  { label: 'Ejes Estratégicos', to: '/ejes' },
  { label: 'Portafolio', to: '/portafolio' },
  { label: 'Alianzas', to: '/alianzas' },
  { label: 'Blog', to: '/blog' },
];

export const FOOTER_TOPICS = [
  { label: 'Territorios Sostenibles', to: '/ejes' },
  { label: 'Biodiversidad y SbN', to: '/ejes' },
  { label: 'Innovación Social', to: '/ejes' },
  { label: 'CTI', to: '/ejes' },
];

// =====================================================
//  IDENTIDAD CORPORATIVA 2026
//  Contenido oficial tomado del documento de identidad
//  corporativa. Bloque añadido sin modificar lo anterior.
// =====================================================

// ── Datos de la empresa (razón social, contacto) ──────
export const COMPANY_INFO = {
  legalName: 'NEXUS: Innovación y Alianzas para un Futuro Sostenible S.A.S.',
  shortName: 'NEXUS S.A.S.',
  tagline: 'Innovación y Alianzas para un Futuro Sostenible',
  city: 'Santiago de Cali, Valle del Cauca, Colombia',
  email: 'nexus@innovacion.com.co',
};

// ── Quiénes Somos (descripción oficial) ───────────────
export const ABOUT_INTRO = [
  'NEXUS: Innovación y Alianzas para un Futuro Sostenible S.A.S. es una empresa colombiana especializada en la articulación de soluciones estratégicas para la transformación territorial, social y ambiental. Nacemos de la convicción de que los desafíos más complejos de nuestro tiempo —el cambio climático, la desigualdad territorial, la transición energética y la brecha tecnológica— solo pueden resolverse desde la cooperación intersectorial y la innovación aplicada.',
  'Operamos en la intersección entre el sector público, el sector privado, la academia y las comunidades, formulando, ejecutando e interviniendo proyectos de alto impacto en los ámbitos ambiental, social, educativo, tecnológico, energético e industrial. Nuestra metodología combina el rigor técnico de la investigación con la agilidad de las soluciones escalables, garantizando resultados medibles y sostenibles en cada territorio donde actuamos.',
  'Desde el departamento del Valle del Cauca, en su capital Santiago de Cali, con proyección nacional e internacional, NEXUS lidera procesos de I+D+i, interventoría, consultoría, comercio sostenible y gestión logística integral, apalancados en tecnologías avanzadas, inteligencia de datos y alianzas estratégicas de largo plazo. Somos más que una empresa: somos un ecosistema de transformación comprometido con construir el futuro que el planeta y sus comunidades necesitan.',
];

// ── Misión y Visión oficiales ─────────────────────────
export const MISSION = {
  heading: 'Nuestra razón de ser',
  text: 'En NEXUS diseñamos, ejecutamos e intervenimos proyectos que transforman territorios y mercados hacia la sostenibilidad, articulando actores del sector público, privado, académico y social bajo estándares de transparencia, innovación y rigor técnico. Generamos soluciones escalables en I+D+i, energía, medio ambiente, infraestructura y desarrollo territorial que crean valor duradero para las comunidades, los ecosistemas y las instituciones, contribuyendo activamente a los desafíos globales del cambio climático, la equidad y la transición hacia economías más resilientes e inclusivas.',
};

export const VISION = {
  heading: 'Hacia dónde vamos',
  text: 'Al 2035, NEXUS será reconocido en Colombia y Latinoamérica como el socio estratégico de referencia para la transformación sostenible de territorios, consolidando un modelo de innovación intersectorial replicable que integra tecnologías avanzadas, políticas públicas basadas en evidencia y alianzas de largo alcance. Lideraremos en I+D+i aplicado, interventoría de impacto, energía renovable y desarrollo territorial, siendo un actor clave en la arquitectura de soluciones frente a los desafíos climáticos, sociales y económicos de nuestra región.',
};

// ── Valores corporativos ──────────────────────────────
export const CORPORATE_VALUES = [
  {
    title: 'Sostenibilidad como mandato estratégico',
    text: 'Cada decisión, proyecto y alianza que desarrollamos integra criterios de viabilidad ambiental, social y económica a largo plazo. La sostenibilidad no es un diferencial: es nuestra base de operación.',
  },
  {
    title: 'Innovación orientada al impacto',
    text: 'Aplicamos metodologías de I+D+i, tecnologías emergentes e inteligencia de datos para generar soluciones que resuelven problemas reales. Innovamos con propósito: cada desarrollo debe ser escalable, medible y replicable en los territorios donde actuamos.',
  },
  {
    title: 'Transparencia y gobernanza responsable',
    text: 'Gestionamos cada recurso, proceso y alianza con ética, trazabilidad y rendición de cuentas. La confianza de nuestros clientes, socios y comunidades se construye con hechos verificables y comunicación abierta.',
  },
  {
    title: 'Colaboración intersectorial',
    text: 'Creemos que la transformación territorial requiere la convergencia del sector público, el privado, la academia y la sociedad civil. Facilitamos esas intersecciones y construimos sinergias que ningún actor podría lograr en solitario.',
  },
  {
    title: 'Inclusión y equidad territorial',
    text: 'Diseñamos soluciones que reducen brechas y amplían oportunidades para poblaciones y territorios históricamente excluidos. La equidad no es un objetivo secundario: es un criterio de evaluación de cada proyecto que ejecutamos.',
  },
  {
    title: 'Resiliencia y adaptabilidad',
    text: 'Operamos en entornos complejos e inciertos —climáticos, regulatorios y sociales— y desarrollamos la capacidad institucional de anticipar, adaptarnos y prosperar ante los cambios del entorno global y local.',
  },
];

// ── Desafíos estratégicos que nos definen ─────────────
export const STRATEGIC_CHALLENGES = [
  {
    title: 'Transición energética justa',
    text: 'Acompañar a territorios y empresas en el tránsito hacia energías renovables, garantizando que los beneficios lleguen a las comunidades más vulnerables.',
  },
  {
    title: 'Adaptación y mitigación climática',
    text: 'Diseñar e intervenir proyectos que fortalezcan la resiliencia territorial frente al cambio climático, la degradación ambiental y los eventos extremos.',
  },
  {
    title: 'Cierre de brechas tecnológicas',
    text: 'Facilitar la transformación digital de sectores productivos, instituciones públicas y comunidades rurales mediante soluciones accesibles y escalables.',
  },
  {
    title: 'Políticas públicas basadas en evidencia',
    text: 'Posicionar a NEXUS como actor técnico de referencia en el diseño de instrumentos de política para la sostenibilidad y el desarrollo territorial.',
  },
  {
    title: 'Internacionalización sostenible',
    text: 'Desarrollar mercados y alianzas en Latinoamérica para proyectos de alto impacto que conecten financiamiento internacional con necesidades locales.',
  },
  {
    title: 'Economía circular e innovación social',
    text: 'Impulsar modelos de negocio que regeneren recursos, reduzcan residuos y generen valor social en los territorios donde operamos.',
  },
  {
    title: 'Gobernanza territorial e institucional',
    text: 'Actuamos como puente estratégico entre la institucionalidad y el territorio: articulamos actores públicos, privados y comunitarios, y co-diseñamos esquemas de gobernanza con trazabilidad, participación ciudadana y rendición de cuentas, generando estructuras de decisión más equitativas, eficientes y resilientes.',
  },
];

// ── Nuestra propuesta de valor (capacidades) ──────────
export const VALUE_PROPOSITION = [
  {
    title: 'I+D+i Aplicado',
    text: 'Metodologías avanzadas y tecnologías emergentes al servicio de problemas concretos en sectores estratégicos.',
  },
  {
    title: 'Interventoría de Impacto',
    text: 'Supervisión técnica, administrativa, financiera y ambiental que garantiza transparencia, calidad y resultados en la ejecución de proyectos.',
  },
  {
    title: 'Alianzas Estratégicas',
    text: 'Articulación de redes intersectoriales que amplifican el alcance y la sostenibilidad de cada iniciativa.',
  },
  {
    title: 'Consultoría Territorial',
    text: 'Asesoría especializada en sostenibilidad, RSE, políticas públicas y desarrollo territorial con enfoque de resultados medibles.',
  },
  {
    title: 'Comercio Sostenible',
    text: 'Facilitamos la exportación, importación y comercialización de bienes y servicios con certificaciones y estándares globales de sostenibilidad.',
  },
  {
    title: 'Logística e Infraestructura',
    text: 'Optimización integral de cadenas de suministro y proyectos de infraestructura con criterios de eficiencia y sostenibilidad.',
  },
];

// ── Casos de impacto / clientes reales (Portafolio) ───
export const CASE_STUDIES = [
  {
    client: 'ICLEI',
    logo: new URL('../assets/logos_portafolio/iclei.jpeg', import.meta.url).href,
    year: '2025',
    type: 'Soluciones basadas en la Naturaleza',
    title: 'Dos SbN para la gestión del riesgo y la resiliencia climática',
    desc: 'Diseño de dos Soluciones basadas en la Naturaleza (SbN) para la gestión del riesgo de desastres y la resiliencia climática, alineadas con estándares internacionales y herramientas especializadas. El proceso aseguró un enfoque metodológico integral y participativo, incorporando principios de protección, equidad de género e inclusión.',
    locations: ['Barranquilla, Atlántico', 'Copacabana, Antioquia'],
    tags: ['SbN', 'Gestión del riesgo', 'Resiliencia climática', 'Equidad de género', 'Inclusión'],
  },
  {
    client: 'Inversiones López',
    logo: new URL('../assets/logos_portafolio/inversiones-lopez.jpeg', import.meta.url).href,
    year: '2025',
    type: 'Responsabilidad Social Empresarial · ASG',
    title: 'Política Institucional de RSE con criterios ASG',
    desc: 'Formulación, diseño y entrega de la Política Institucional de Responsabilidad Social Empresarial, conforme a los criterios ASG (Ambientales, Sociales y de Gobernanza). La metodología comprendió diagnóstico, análisis normativo y de riesgos, matriz de materialidad, diseño del documento institucional de política y construcción de indicadores SMART, complementada con talleres de cocreación.',
    locations: ['Yopal, Casanare', 'San José del Guaviare, Guaviare'],
    tags: [
      'RSE',
      'Criterios ASG',
      'Matriz de materialidad',
      'Indicadores SMART',
      'Talleres de cocreación',
    ],
  },
];
