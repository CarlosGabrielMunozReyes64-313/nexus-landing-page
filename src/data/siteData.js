// =====================================================
//  NEXUS – Datos del sitio
//  Todo el contenido editable vive aquí, para que los
//  componentes queden limpios y el contenido sea fácil
//  de mantener sin tocar el JSX.
// =====================================================

// ── Navegación principal ──────────────────────────────
// `to` es la ruta de react-router. `cta` marca el botón destacado.
export const NAV_ITEMS = [
  { label: "Inicio", to: "/" },
  {
    label: "Quiénes Somos",
    to: "/quienes",
    children: [
      { label: "Nuestro Modelo", to: "/quienes/modelo" },
      { label: "Nuestros Principios", to: "/quienes/principios" },
      { label: "Desafíos Estratégicos", to: "/quienes/desafios" },
      { label: "Nuestro equipo de Trabajo", to: "/quienes/equipo" },
    ],
  },
  {
    label: "Servicios",
    to: "/servicios",
    children: [
      { label: "Todos los Servicios", to: "/servicios", end: true },
      { label: "Ciudades y Territorios Sostenibles", to: "/servicios/eje-1" },
      { label: "Biodiversidad, SbN y Agroecología", to: "/servicios/eje-2" },
      {
        label: "Innovación Social y Responsabilidad Territorial",
        to: "/servicios/eje-3",
      },
      {
        label: "Proyectos CTI · Ciencia, Tecnología e Innovación",
        to: "/servicios/eje-4",
      },
    ],
  },
  { label: "Proyectos", to: "/portafolio" },
  { label: "Red de Aliados", to: "/alianzas" },
  { label: "Blog", to: "/blog" },
  { label: "Contáctenos", to: "/contacto", cta: true },
];

// ── Cifras de impacto (Inicio) ────────────────────────
export const STATS = [
  { num: "+20", label: "Proyectos ejecutados" },
  { num: "4", label: "Ejes estratégicos" },
  { num: "43", label: "Servicios especializados" },
  { num: "6+", label: "Sectores atendidos" },
];

// ── Propuesta de valor (Inicio) ───────────────────────
export const VALOR_ITEMS = [
  {
    title: "Evidencia científica + saber local",
    text: "Integramos metodologías rigurosas con el conocimiento territorial de actores locales.",
  },
  {
    title: "Articulación multisectorial",
    text: "Gestionamos alianzas entre academia, gobierno, empresa y sociedad civil.",
  },
  {
    title: "Alineación con agendas internacionales",
    text: "Diseñamos proyectos que acceden a fondos climáticos, de biodiversidad y cooperación.",
  },
  {
    title: "Innovación aplicada y resultados medibles",
    text: "Cada intervención produce evidencia, aprendizaje y transformación concreta.",
  },
];

export const SDG_BADGES = [
  {
    label: "MGB 2030",
    icon: new URL("../assets/iconos_inicio/mgb-2030.png", import.meta.url).href,
  },
  {
    label: "SbN/UICN",
    icon: new URL("../assets/iconos_inicio/sbn-uicn.png", import.meta.url).href,
  },
  {
    label: "C+T+I",
    icon: new URL("../assets/iconos_inicio/activity.png", import.meta.url).href,
  },
];

// ── Pilares estratégicos (Inicio) ─────────────────────
// `icon` ahora referencia una imagen en src/assets/iconos_inicio
export const PILLARS = [
  {
    icon: new URL("../assets/iconos_inicio/home.png", import.meta.url).href,
    title: "Ciudades y Territorios Sostenibles",
  },
  {
    icon: new URL("../assets/iconos_inicio/globe.png", import.meta.url).href,
    title: "Biodiversidad, SbN y Agroecología",
  },
  {
    icon: new URL("../assets/iconos_inicio/people.png", import.meta.url).href,
    title: "Innovación Social y Responsabilidad Territorial",
  },
  {
    icon: new URL("../assets/iconos_inicio/activity.png", import.meta.url).href,
    title: "Proyectos CTI · Ciencia, Tecnología e Innovación",
  },
];

export const TEAM = [
  {
    initials: "GV",
    name: "Guillermo Alberto Vélez Tobar",
    position: "Co-fundador · Director Científico y Técnico",
    role: "Ecólogo M.Sc. · Consultor e Investigador",
    bio: "Ecólogo M.Sc. (Universidad Nacional, Heredia, Costa Rica) y candidato doctoral en Ciencias Ambientales (Universidad del Cauca). Especialista en planificación territorial, gestión integral de residuos —políticas de Basura Cero, valorización de RCD, NFU y compostaje— y tecnologías de precisión para el monitoreo ambiental, con un enfoque riguroso basado en el método científico y estándares internacionales.",
    profile: {
      title:
        "Ecólogo | Consultor e Investigador. Especialista en Planificación Territorial, Gestión Ambiental y Políticas de Transformación de Residuos",
      summary:
        "Ecólogo de profesión con una sólida formación de posgrado y experiencia integral en la formulación, coordinación y evaluación de proyectos de desarrollo territorial, gestión ambiental y sostenibilidad. Investigador y consultor con capacidades demostradas en el diseño de flujos operacionales para infraestructuras de gestión integral de residuos (enfocado en políticas de Basura Cero, valorización de RCD, NFU y compostaje) y en la aplicación de tecnologías de precisión para la planificación y el monitoreo ambiental. Experiencia en la articulación comunitaria y la docencia en contextos de producción rural. Posee un fuerte enfoque analítico basado en el método científico, modelamiento técnico y rigurosidad metodológica bajo estándares internacionales.",
      education: [
        "Ecólogo M.Sc. — Universidad Nacional, Heredia, Costa Rica (2003)",
        "Candidato doctoral en Ciencias Ambientales — Universidad del Cauca",
        "Maestrando en IoT — UNAD",
        "Estudiante de Administración Pública Territorial (8.º-9.º semestre) — ESAP",
      ],
      experience: [
        {
          role: "Consultor Técnico Ambiental",
          org: "Actualización del PGIRS — DAFE Popayán",
          detail:
            "Desarrollo de informes técnicos finales, estructuración de anexos contractuales y planeación estratégica para la gestión integral de residuos sólidos en el municipio.",
        },
        {
          role: "Contratista e Investigador",
          org: "Servicio Nacional de Aprendizaje (SENA)",
          detail:
            "Líder de proyectos de investigación aplicada (SGPS), con énfasis en la evaluación del impacto de la educación no formal en unidades de producción ganadera y análisis metodológicos complejos mediante el Análisis de Redes Sociales (ARS).",
        },
        {
          role: "Consultor en Transferencia Tecnológica",
          org: "Maser Colombia & Stevens Water Monitoring Systems",
          detail:
            "Asesoría técnica y comercial para la implementación de sistemas avanzados de monitoreo de suelos (HydraGO y HydraGO FLEX) aplicados a la agricultura de precisión y la gestión del agua.",
        },
        {
          role: "Comisionado y Gestor Comunitario",
          org: "Zonas de Intervención (Cauca: Piamonte, Toribío, Calibío)",
          detail:
            "Coordinación de transferencias técnicas en campo, levantamiento de muestreos bióticos/abióticos y vinculación de comunidades locales en planes de ordenamiento territorial.",
        },
      ],
      skills: [
        {
          area: "Sistemas de Información Geográfica (SIG)",
          detail:
            "Dominio de ArcMap y QGIS para análisis espacial, mapeo de zonas de riesgo o planificación agroecológica.",
        },
        {
          area: "Modelamiento Hidráulico",
          detail:
            "Manejo de herramientas como HEC-RAS y EPANET para el diseño de redes y la simulación de flujos de agua.",
        },
        {
          area: "Metodología de Investigación",
          detail:
            "Análisis de Redes Sociales (ARS), formulación de proyectos bajo el marco lógico de la administración pública y redacción científico-técnica.",
        },
      ],
    },
  },
  {
    initials: "JM",
    name: "Jaime Andrés Marín Molina",
    position: "Director Comercial",
    role: "Especialista Senior SbN · Ecología",
    bio: "Ingeniero Agrónomo con más de 20 años de experiencia en gestión ambiental, agricultura sostenible, monitoreo ecosistémico y manejo de recursos naturales. Especialista en diseño e implementación de estrategias de resiliencia climática, restauración ecológica, gestión del agua y análisis territorial para la aplicación de Soluciones Basadas en la Naturaleza.",
  },
  {
    initials: "VS",
    name: "Viviana María Sánchez Escobar",
    position: "Socia · Representante Legal",
    role: "Liderazgo Institucional · Gestión Empresarial · Innovación Social · RSE · Sostenibilidad",
    bio: "Administradora Pública, Especialista en Gerencia Social y Magíster en Gerencia para la Innovación Social. Cuenta con más de 13 años de experiencia en coordinación interinstitucional, participación ciudadana, sostenibilidad urbana y formulación de proyectos climáticos. Experta en procesos de gobernanza territorial, concertación comunitaria y construcción participativa de soluciones ambientales y sociales.",
  },
  {
    initials: "JS",
    name: "Juan David Sabogal Gaviria",
    role: "Profesional SIG / Especialista en Educación en Derechos Humanos",
    bio: "Geógrafo bilingüe con experiencia en análisis geoespacial, ordenamiento territorial y gestión de información socioambiental. Especialista en Educación en Derechos Humanos, amplia experiencia en Sistemas de Información Geográfica (SIG), modelación territorial, cartografía temática y análisis socioambiental para la planificación, priorización y monitoreo de intervenciones basadas en la naturaleza.",
  },
  {
    initials: "PS",
    name: "Paola Andrea Sánchez Escobar",
    role: "Profesional Logística",
    bio: "Economista y Especialista en Gerencia en Logística Integral, con amplia experiencia en planeación operativa, administración de recursos, seguimiento financiero y gestión logística. Su experiencia contribuye a garantizar la eficiencia operativa, el control de recursos y la adecuada coordinación administrativa de los proyectos.",
  },
  {
    initials: "RV",
    name: "Robert Armando Vivas Tovar",
    role: "Profesional Diseño",
    bio: "Diseñador Industrial con más de 10 años de experiencia en sostenibilidad, innovación social y participación comunitaria. Especialista en el diseño y facilitación de metodologías de cocreación para la formulación e implementación de Soluciones Basadas en la Naturaleza (SbN), integrando comunidades, actores institucionales y sectores productivos. Cuenta con experiencia en economía circular, cambio climático, restauración ecológica y gobernanza ambiental, incluyendo la estrategia Ecobarrios Cali.",
  },
  {
    initials: "DC",
    name: "Derly Andrea Cabrera Gómez",
    role: "Ingeniera de Implementación SbN",
    bio: "Gerente de Proyectos PMP® con experiencia en los sectores gubernamental, industrial y de salud. Especialista en planificación estratégica, gestión de riesgos, seguimiento de proyectos, aseguramiento de la calidad y control de cumplimiento. Aporta capacidades para la coordinación operativa, el monitoreo de indicadores, la gestión de información y la articulación técnica para la implementación efectiva de Soluciones Basadas en la Naturaleza.",
  },
  {
    initials: "CM",
    name: "Carlos Gabriel Muñoz",
    role: "Asistente Técnico y de Campo",
    bio: "Técnico en Desarrollo de Software en formación, con conocimientos en gestión de información, bases de datos, herramientas digitales y soporte operativo. Apoya las actividades de levantamiento, procesamiento y organización de información técnica, así como el seguimiento y la sistematización de resultados del proyecto.",
  },
];

// ── Ejes estratégicos / pestañas de servicios ─────────
// Cada eje: id, tab (rótulo de la pestaña), svcTitle (título), name (rótulo
// pequeño), desc (intro) y list, donde cada ítem es { label, text }.
export const SERVICES = [
  {
    id: "tab1",
    tab: "Ciudades y Territorios",
    icon: "🏙️",
    svcTitle: "Ciudades y Territorios Sostenibles",
    svcSub:
      "Planificación · Saneamiento · Inversión pública · Economía circular",
    name: "Eje 1",
    desc: "Planificación urbana y rural, saneamiento, inversión pública y economía circular ante entes territoriales y ministerios.",
    list: [
      {
        label: "Formulación de Proyectos de Inversión Pública (MGA-DNP)",
        text: "Documentos técnicos, marco lógico y fichas EBI/BPIN para viabilizar recursos estatales.",
      },
      {
        label: "Diagnóstico y Plan de Ciudades Verdes (Ley 2476/2025)",
        text: "Línea base de biodiversidad urbana, inventario de espacios verdes y azules y hoja de ruta de cumplimiento para municipios y áreas metropolitanas.",
      },
      {
        label:
          "Determinantes Ambientales y Ordenamiento alrededor del Agua para POT/PBOT/EOT",
        text: "Incorporación de la estructura ecológica, el ciclo hídrico y la gestión del riesgo en procesos de revisión y ajuste de los instrumentos de ordenamiento territorial.",
      },
      {
        label: "Formulación y Actualización de PGIRS",
        text: "Planes municipales de residuos sólidos alineados con la normatividad de aprovechamiento y el ordenamiento territorial.",
      },
      {
        label: "Estructuración de Estrategias «Basura Cero»",
        text: "Modelo técnico, operativo y financiero para minimizar residuos y optimizar rutas y estaciones de clasificación.",
      },
      {
        label: "Diseño de Infraestructura Ambiental para Economía Circular",
        text: "Prefactibilidad y diseño conceptual de plantas de compostaje, valorización de RCD y pellets o biogás.",
      },
      {
        label: "Estructuración de Zonas Francas de Economía Popular",
        text: "Expediente técnico y financiero (14 documentos) para postular polígonos bajo el régimen fiscal de incentivos.",
      },
      {
        label: "Formulación de Proyectos de Acueducto y Saneamiento Rural",
        text: "Diagnóstico y viabilización de infraestructura hídrica veredal ante el MVCT.",
      },
      {
        label: "Estudios de Localización Multicriterio (AHP/TOPSIS)",
        text: "Análisis geoespacial y estadístico para ubicar infraestructura crítica, rellenos sanitarios o plantas de transferencia.",
      },
      {
        label: "Elaboración de Tratados Territoriales",
        text: "Concertación y caracterización socioeconómica regional para viabilizar macroproyectos de infraestructura.",
      },
      {
        label: "Trámites de Licenciamiento y Permisos Ambientales",
        text: "Gestión técnica y jurídica ante CRC y ANLA para concesiones de agua, vertimientos y ocupación de cauces.",
      },
      {
        label:
          "Asesoría en Planificación Presupuestal y Gestión Fiscal Municipal",
        text: "Apoyo a secretarías de planeación y hacienda para alinear el Plan de Desarrollo con los presupuestos ambientales.",
      },
    ],
    tools: [
      "Sistema MGA-DNP — Metodología General Ajustada",
      "Ley 2476/2025 — Ley de Ciudades Verdes",
      "PGAU 2025-2035 — Política de Gestión Ambiental Urbana",
      "ICAU — Indicadores de Calidad Ambiental Urbana (MinAmbiente)",
      "Decreto 670/2025 y Resolución 1257/2021 (RCD)",
      "Decreto 1317/2025 — Zonas Francas de Economía Popular",
      "Marco normativo MVCT para acueductos rurales",
      "Análisis multicriterio AHP/TOPSIS (Excel + QGIS)",
      "QGIS 3.44, ArcGIS, Global Mapper",
      "Normativa CRC, ANLA y MADS vigente",
      "Ley 388/1997, Decreto 1076/2015, Decreto 2981/2013",
    ],
    deliverables: [
      "Documentos MGA completos: BPIN, EBI, MML, anexos técnicos",
      "PGIRS / Plan de Acción Basura Cero con cronograma e indicadores",
      "Diagnóstico de biodiversidad urbana y plan de cumplimiento Ley 2476/2025",
      "Documento técnico de determinantes ambientales para revisión de POT",
      "Estudios de prefactibilidad con diseños conceptuales",
      "Expediente Zona Franca — 14 documentos completos",
      "Tratado Territorial con caracterización socioeconómica y KMZ",
      "Informes de diagnóstico ambiental con cartografía temática",
      "Documentos de permisos listos para radicación CRC/ANLA",
    ],
  },
  {
    id: "tab2",
    tab: "Biodiversidad y SbN",
    icon: "🌿",
    svcTitle: "Biodiversidad, SbN y Agroecología",
    svcSub: "Ecología · Agroecosistemas · Conservación · Soluciones climáticas",
    name: "Eje 2",
    desc: "Rigor de las ciencias ecológicas aplicado a agroecosistemas sostenibles, conservación biótica y soluciones climáticas basadas en la naturaleza.",
    list: [
      {
        label: "Diseño de Sistemas Agroecológicos y Agroforestales",
        text: "Policultivos y arreglos agroforestales con especies nativas para mejorar el suelo, regular microclimas y producir sin agroquímicos.",
      },
      {
        label: "Bioprospección y Valoración de Especies Nativas",
        text: "Caracterización fitoquímica de flora silvestre con potencial agroindustrial, cosmético o biotecnológico (ej. Sapindus saponaria).",
      },
      {
        label: "Transición y Reconversión Agroecológica de Cultivos",
        text: "Acompañamiento a fincas y asociaciones para sustituir agroquímicos por biofertilizantes y control biológico.",
      },
      {
        label: "Diagnósticos Ecosistémicos y Caracterización de Biodiversidad",
        text: "Inventarios de flora y fauna terrestre y acuática en áreas de influencia de proyectos agropecuarios o energéticos.",
      },
      {
        label: "Monitoreo Limnológico y Bioindicación de Calidad de Agua",
        text: "Evaluación de fuentes hídricas mediante taxonomía de macroinvertebrados (Índice BMWP/Col).",
      },
      {
        label: "Elaboración de Planes de Manejo Ambiental (PMA) de Cuencas",
        text: "Directrices de conservación y zonificación para microcuencas de acueductos rurales o distritos de riego.",
      },
      {
        label:
          "Soluciones Basadas en la Naturaleza (SbN) para Gestión del Riesgo",
        text: "Barreras vivas, humedales artificiales y zonas de amortiguación contra inundaciones, remoción en masa e incendios.",
      },
      {
        label: "Formulación de Proyectos de Restauración Ecológica",
        text: "Planes de recuperación para alta montaña, bosque andino y bosque seco tropical, con núcleos de dispersión y especies clave.",
      },
      {
        label: "Valoración y Cartografía de Servicios Ecosistémicos",
        text: "Valoración espacial y económica de regulación hídrica, carbono y polinización para esquemas de Pago por Servicios Ambientales (PSA).",
      },
      {
        label: "Diseño de Huertos Circulares Urbanos y Comunitarios",
        text: "Agricultura urbana para la seguridad alimentaria, el manejo de residuos orgánicos y el tejido social.",
      },
    ],
    tools: [
      "Índices bióticos BMWP/Col, EPT e IBF — calidad de agua",
      "Claves taxonómicas Roldán (1988), Merritt & Cummins (1984)",
      "Metodologías IUCN para SbN y restauración ecológica",
      "MapBiomas Colombia Colección 3.0 (1985-2024)",
      "NEXUS FireEngine — simulación SOC Drossel-Schwabl",
      "Google Earth Engine — análisis de cobertura vegetal",
      "Clasificación de zonas de vida Holdridge",
      "R / STATISTICA — análisis multivariado",
    ],
    deliverables: [
      "Diseño de sistema agroforestal con cronograma e insumos por especie",
      "Informe de bioprospección con análisis fitoquímico y hoja de ruta",
      "PMA de cuenca con programas de monitoreo y cartografía de zonificación",
      "EIA completo — biótico, abiótico y socioeconómico",
      "Inventario taxonómico con índices de diversidad e interpretación ecológica",
      "Informe limnológico BMWP/Col con fisicoquímica integrada",
      "Mapa de servicios ecosistémicos con valoración económica por unidad",
      "Proyecto de restauración ecológica: núcleos, especies y presupuesto",
    ],
  },
  {
    id: "tab3",
    tab: "Innovación Social",
    icon: "🤝",
    svcTitle: "Innovación Social y Responsabilidad Territorial",
    svcSub: "Articulación de actores · Gobernanza · RSE · Prospectiva",
    name: "Eje 3",
    desc: "Articulación de actores, gobernanza participativa, gestión de conflictos socioambientales y estrategias corporativas de sostenibilidad.",
    list: [
      {
        label:
          "Diseño de Planes Estratégicos de RSE y Sostenibilidad (2026-2030)",
        text: "Políticas corporativas bajo estándares ISO 26000 y reporte GRI.",
      },
      {
        label: "Auditoría y Dashboards de Indicadores ESG",
        text: "Métricas ambientales, sociales y de gobernanza para monitorear riesgos y cumplir estándares de inversión.",
      },
      {
        label: "Análisis de Conflictos Socioambientales con Prospectiva",
        text: "Metodologías MICMAC, MACTOR y SMIC para mapear actores, variables clave y escenarios de resolución.",
      },
      {
        label:
          "Elaboración de Planes de Relacionamiento y Gestión Social (PRGS)",
        text: "Estrategias de coexistencia y valor compartido entre empresas minero-energéticas o de infraestructura y comunidades.",
      },
      {
        label:
          "Facilitación de Procesos de Consulta Previa y Participación Ciudadana",
        text: "Coordinación metodológica y logística para un diálogo transparente y acuerdos legales con comunidades étnicas y rurales.",
      },
      {
        label: "Fortalecimiento Organizacional para Recicladores de Oficio",
        text: "Planes de acción, inclusión en la cadena de valor municipal y formalización de asociaciones de reciclaje.",
      },
      {
        label: "Diagnósticos de Gobernanza Territorial y Agua",
        text: "Evaluación de capacidades comunitarias e institucionales para la gestión colectiva del agua.",
      },
      {
        label: "Modelos de Negocios en Bioeconomía y Economía Circular",
        text: "Asesoría a emprendimientos rurales para transformar subproductos agrícolas en bioinsumos o empaques ecológicos.",
      },
      {
        label: "Diseño de Programas de Educación Ambiental Territorial",
        text: "Guías didácticas, escuelas del agua y módulos formativos para contextos escolares y comunitarios.",
      },
      {
        label: "Caracterización Socioeconómica y Líneas Base Comunitarias",
        text: "Demografía, medios de vida y cartografía social en áreas de influencia directa de proyectos.",
      },
    ],
    tools: [
      "ISO 26000:2010 / GRI Standards / Principios del Ecuador",
      "Análisis prospectivo MICMAC y MACTOR (Lipsor)",
      "SMIC — construcción de escenarios de futuro",
      "Marco de Medios de Vida Sostenibles MMVS/DFID",
      "Decreto 1320/1998 — Consulta Previa (Colombia)",
      "Convenio OIT 169 — Derechos de Pueblos Indígenas",
      "ODS / Agenda 2030 — marco de reporte corporativo",
      "Análisis de Redes Sociales (SNA) para mapeo de actores",
    ],
    deliverables: [
      "Política RSE y plan estratégico 2026-2030 con KPI por dimensión",
      "Dashboard ESG interactivo con indicadores trazables",
      "Matriz de stakeholders con estrategias de comunicación diferenciadas",
      "PRGS completo para presentación ante CRC, ANLA o financiadores",
      "Informe prospectivo MICMAC/MACTOR con escenarios y recomendaciones",
      "Diagnóstico de gobernanza con indicadores de seguimiento institucional",
      "Programa de educación ambiental: módulos y guías didácticas",
      "Caracterización socioeconómica con cartografía e indicadores de línea base",
    ],
  },
  {
    id: "tab4",
    tab: "Proyectos CTI",
    icon: "🛰️",
    svcTitle: "Proyectos CTI · Ciencia, Tecnología e Innovación",
    svcSub:
      "Geoespacial · Teledetección · Analítica ambiental · Soluciones digitales",
    name: "Eje 4",
    desc: "Procesamiento geoespacial, teledetección, analítica ambiental y soluciones digitales a medida.",
    list: [
      {
        label: "Análisis Multitemporal de Coberturas del Suelo",
        text: "Imágenes satelitales y datos geoespaciales (1985-2024) con MapBiomas para documentar la dinámica territorial.",
      },
      {
        label: "Modelado y Simulación Digital de Riesgos Ambientales",
        text: "Modelos algorítmicos para simular incendios forestales, inundaciones y expansión urbana.",
      },
      {
        label: "Desarrollo de GeoVisores Web Personalizados",
        text: "Plataformas interactivas (FastAPI/Leaflet) para visualizar y exportar capas en SHP, GeoJSON y KML.",
      },
      {
        label: "Automatización de Procesamiento Geoespacial (Scripts R/Python)",
        text: "Flujos reproducibles en Jupyter para análisis espacial y minería de datos ambientales.",
      },
      {
        label: "Diseño e Implementación de Redes de Monitoreo IoT Ambiental",
        text: "Redes de sensores en tiempo real para humedad del suelo, calidad del aire y caudales, con transmisión remota.",
      },
      {
        label:
          "Implementación y Reporte de Indicadores de Calidad Ambiental Urbana (ICAU)",
        text: "Levantamiento, cálculo y automatización de los indicadores del ICAU para autoridades ambientales urbanas y CAR, con tableros de seguimiento y reporte al SIAC.",
      },
      {
        label: "Programación de Dashboards Analíticos Estratégicos",
        text: "Tableros interactivos en React y TailwindCSS para KPI ambientales y geográficos.",
      },
      {
        label:
          "Formulación de Proyectos de Investigación para Convocatorias CTI",
        text: "Metodología, presupuesto y estado del arte para postular ante el Ministerio de Ciencias o cooperación internacional.",
      },
      {
        label: "Construcción de Bases de Datos Espaciales Estandarizadas",
        text: "Bases geográficas de activos territoriales y metadatos listas para entrega institucional.",
      },
      {
        label: "Desarrollo de Aplicaciones de IA Aplicada a SIG",
        text: "Asistentes de IA para consultar, filtrar y reportar variables geográficas del territorio.",
      },
      {
        label: "Cartografía Participativa Digitalizada",
        text: "Mapeo social comunitario con georreferenciación móvil para levantar información predial o de recursos locales.",
      },
    ],
    tools: [
      "QGIS 3.44, ArcGIS, Global Mapper — análisis geoespacial",
      "Google Earth Engine (JavaScript API) — teledetección",
      "MapBiomas Colombia Colección 3.0 (series 1985-2024)",
      "Python: GeoPandas, Rasterio, Shapely, Jupyter Notebooks",
      "R / RStudio — geoestadística y análisis espacial",
      "React + TailwindCSS + Chart.js — dashboards interactivos",
      "FastAPI + Anthropic API — asistentes IA territoriales",
      "NEXUS FireEngine — simulación SOC Drossel-Schwabl",
    ],
    deliverables: [
      "Serie cartográfica multitemporal (20+ mapas PDF + KMZ)",
      "GeoVisor web con capas dinámicas y exportación institucional",
      "Dashboard analítico con KPI en tiempo real y exportación",
      "Batería ICAU calculada, documentada y lista para reporte institucional",
      "Scripts R/Python documentados en Jupyter Notebooks",
      "Sistema IoT: arquitectura, sensores y visualización de datos",
      "Propuesta CTI con estado del arte y presupuesto desglosado",
      "Base de datos espacial ISO 19115 lista para radicación",
      "Aplicación IA-SIG con asistente y reporte georreferenciado",
    ],
  },
];

// Metodología transversal a todos los ejes (se muestra bajo el banner).
export const ARS_METHODOLOGY = {
  tag: "",
  title: "",
  text: "",
};

// ── Valores diferenciales (franja bajo el mosaico de servicios) ──
export const SERVICE_VALUES = [
  {
    icon: "target",
    title: "Enfoque integral",
    text: "Abordamos los desafíos desde una perspectiva técnica, social, ambiental y financiera.",
  },
  {
    icon: "shield",
    title: "Rigor y calidad",
    text: "Aplicamos metodologías reconocidas y cumplimos con los más altos estándares.",
  },
  {
    icon: "handshake",
    title: "Impacto real",
    text: "Generamos soluciones que producen resultados medibles y sostenibles en el tiempo.",
  },
  {
    icon: "leaf",
    title: "Innovación y sostenibilidad",
    text: "Promovemos prácticas innovadoras para construir territorios resilientes y regenerativos.",
  },
];

// ── Portafolio de proyectos ───────────────────────────
// `cat` es la clase de color (cat-urban, cat-bio, cat-agua, cat-corp)
export const PROJECTS = [
  {
    cat: "cat-sost",
    catLabel: "Sostenibilidad y Ambiente",
    image: new URL("../assets/servicios/sost-estrategia.svg", import.meta.url)
      .href,
    title: "Estrategias de Sostenibilidad Corporativa",
    desc: "Hojas de ruta de sostenibilidad alineadas con estándares ESG y los ODS, integradas en la estrategia empresarial.",
  },
  {
    cat: "cat-sost",
    catLabel: "Sostenibilidad y Ambiente",
    image: new URL("../assets/servicios/sost-carbono.svg", import.meta.url)
      .href,
    title: "Medición de Huella de Carbono",
    desc: "Cuantificación de emisiones GEI y planes de reducción y compensación para empresas y territorios, con metodologías reconocidas.",
  },
  {
    cat: "cat-bio",
    catLabel: "Biodiversidad",
    image: new URL("../assets/servicios/bio-linea-base.svg", import.meta.url)
      .href,
    title: "Estudios de Línea Base y Conservación",
    desc: "Línea base de biodiversidad y planes de manejo y conservación para proyectos productivos y territoriales.",
  },
  {
    cat: "cat-bio",
    catLabel: "Biodiversidad",
    image: new URL("../assets/servicios/bio-restauracion.svg", import.meta.url)
      .href,
    title: "Restauración Ecológica",
    desc: "Restauración de ecosistemas degradados con especies nativas, enmiendas biológicas y monitoreo a largo plazo.",
  },
  {
    cat: "cat-gob",
    catLabel: "Gobernanza",
    image: new URL("../assets/servicios/gob-institucional.svg", import.meta.url)
      .href,
    title: "Fortalecimiento Institucional",
    desc: "Acompañamiento a entidades públicas en políticas, participación y toma de decisiones para una gestión territorial más eficaz.",
  },
  {
    cat: "cat-gob",
    catLabel: "Gobernanza",
    image: new URL("../assets/servicios/gob-conflictos.svg", import.meta.url)
      .href,
    title: "Gestión de Conflictos Socioambientales",
    desc: "Espacios de diálogo y concertación para prevenir y transformar conflictos por el uso de recursos naturales.",
  },
  {
    cat: "cat-social",
    catLabel: "Innovación Social",
    image: new URL(
      "../assets/servicios/social-comunidades.svg",
      import.meta.url,
    ).href,
    title: "Proyectos con Comunidades",
    desc: "Iniciativas de impacto con metodologías participativas que fortalecen capacidades locales y soluciones desde el territorio.",
  },
  {
    cat: "cat-social",
    catLabel: "Innovación Social",
    image: new URL("../assets/servicios/social-negocios.svg", import.meta.url)
      .href,
    title: "Modelos de Negocio con Impacto",
    desc: "Emprendimientos y modelos de negocio social que unen rentabilidad con beneficio ambiental y comunitario.",
  },
  {
    cat: "cat-alianzas",
    catLabel: "Alianzas y Articulación",
    image: new URL(
      "../assets/servicios/alianzas-multiactor.svg",
      import.meta.url,
    ).href,
    title: "Articulación Multi-Actor",
    desc: "Coordinación entre sector privado, Estado, academia y comunidades para proyectos colaborativos de desarrollo sostenible.",
  },
  {
    cat: "cat-alianzas",
    catLabel: "Alianzas y Articulación",
    image: new URL("../assets/servicios/alianzas-recursos.svg", import.meta.url)
      .href,
    title: "Cooperación y Movilización de Recursos",
    desc: "Identificación de fuentes de financiación (cooperación, regalías, fondos públicos y privados) y formulación de propuestas para acceder a ellas.",
  },
  {
    cat: "cat-proyectos",
    catLabel: "Estructuración de Proyectos",
    image: new URL(
      "../assets/servicios/proyectos-formulacion.svg",
      import.meta.url,
    ).href,
    title: "Formulación y Gestión de Proyectos",
    desc: "Formulación y gestión integral de proyectos territoriales, de la idea a los recursos y la implementación.",
  },
  {
    cat: "cat-proyectos",
    catLabel: "Estructuración de Proyectos",
    image: new URL(
      "../assets/servicios/proyectos-conocimiento.svg",
      import.meta.url,
    ).href,
    title: "Gestión del Conocimiento",
    desc: "Sistematización de experiencias y transferencia de aprendizajes para escalar soluciones en distintos territorios.",
  },
];

// ── Agendas globales (Alianzas) ───────────────────────
export const AGENDAS = [
  {
    icon: "🇨🇴",
    title: "PGAU 2025-2035 y Ley de Ciudades Verdes",
    text: "Alineamos nuestros cuatro ejes con los componentes de la Política de Gestión Ambiental Urbana 2025-2035 del MinAmbiente y acompañamos el cumplimiento de la Ley 2476 de 2025, el marco nacional que rige la agenda ambiental de las ciudades colombianas.",
  },
  {
    icon: "🌐",
    title: "Objetivos de Desarrollo Sostenible (ODS)",
    text: "Todos nuestros proyectos contribuyen a metas específicas de los ODS, con énfasis en ODS 11 (ciudades sostenibles), ODS 13 (acción climática) y ODS 15 (vida de ecosistemas terrestres).",
  },
  {
    icon: "🦋",
    title: "Marco Global de Biodiversidad Kunming-Montreal",
    text: "Aplicamos las metas del MGB 2030 en el diseño de proyectos de conservación, restauración y uso sostenible de la biodiversidad, facilitando el acceso a financiamiento del GEF y fondos climáticos.",
  },
  {
    icon: "🌱",
    title: "Soluciones basadas en la Naturaleza (SbN/UICN)",
    text: "Integramos el estándar global de SbN de la UICN en la formulación de proyectos de infraestructura verde, restauración y adaptación climática, asegurando rigor metodológico internacional.",
  },
  {
    icon: "🏛️",
    title: "ICLEI y Redes de Ciudades Sostenibles",
    text: "Articulamos gobiernos locales con redes globales como ICLEI para el intercambio de experiencias, acceso a herramientas técnicas y posicionamiento en agendas de política climática urbana.",
  },
];

// ── Red de aliados (Alianzas) ─────────────────────────
// CÓMO AÑADIR UN ALIADO:
//  · logo → deja el archivo en `src/assets/aliados/` y referencia su ruta.
//  · name → nombre del aliado.
//  · type → etiqueta corta (sector/actividad).
//  · desc → descripción de la organización.
//  · url  → sitio web (se abre en pestaña nueva desde el botón con ícono de enlace).
export const ALLIES = [
  {
    logo: new URL("../assets/aliados/maser.png", import.meta.url).href,
    name: "Maser",
    type: "Equipos e instrumentación ambiental",
    desc: "Compañía colombiana dedicada a la distribución, representación y asesoría de equipos e instrumentos que contribuyen a mejorar la calidad del medio ambiente.",
    url: "https://www.maser.com.co/nosotros",
  },
  {
    logo: new URL("../assets/aliados/analisis-ambiental.png", import.meta.url)
      .href,
    name: "Análisis Ambiental",
    type: "Ingeniería y laboratorio",
    desc: "Asesoría en todos los procesos de ingeniería y laboratorio que requieran las empresas.",
    url: "https://aambiental.co/home/",
  },
  {
    logo: new URL(
      "../assets/aliados/camara-comercio-palmira.png",
      import.meta.url,
    ).href,
    name: "Programa Tu Ciudad Innova y se Reinventa a la Acción",
    type: "Cámara de Comercio de Palmira",
    desc: "Iniciativa de la Cámara de Comercio de Palmira que impulsa la innovación y la reinvención del territorio, articulando actores locales para llevar las ideas a la acción.",
    url: "https://www.ccpalmira.org.co/",
  },
];

// ── Artículos del blog ────────────────────────────────
// CÓMO REEMPLAZAR EL CONTENIDO (fácil):
//  · image    → ruta de la imagen del artículo. Deja el archivo en `public/blog/`
//               y pon aquí su ruta, p. ej. '/blog/sbn-iclei.jpg'.
//               Si lo dejas como '' (vacío), se usa el emoji sobre fondo verde como respaldo.
//  · emoji/bg → respaldo visual cuando NO hay imagen (emoji + color de fondo).
//  · topic    → categoría corta (se muestra como etiqueta verde).
//  · title    → titular del artículo.
//  · preview  → resumen de 2-3 líneas.
//  · date / author / readTime → metadatos (fecha, autor, tiempo de lectura).
export const BLOG_POSTS = [
  {
    image: "",
    emoji: "🌿",
    bg: "#E8F5EF",
    topic: "Soluciones basadas en la Naturaleza",
    title:
      "Dos SbN para la gestión del riesgo: la experiencia con ICLEI en Barranquilla y Copacabana",
    preview:
      "Diseñamos dos Soluciones basadas en la Naturaleza alineadas con el estándar global de la UICN, integrando gestión del riesgo de desastres, resiliencia climática y un enfoque participativo con equidad de género e inclusión. Compartimos el método y los aprendizajes del proceso.",
    date: "04 jun 2026",
    author: "Equipo NEXUS",
    readTime: "7 min",
  },
  {
    image: "",
    emoji: "🧭",
    bg: "#EAF6F0",
    topic: "Responsabilidad Social · ASG",
    title:
      "De la teoría a la práctica: construir una Política de RSE con criterios ASG e indicadores SMART",
    preview:
      "A partir del trabajo con Inversiones López, recorremos cómo se formula una política institucional de Responsabilidad Social Empresarial: diagnóstico, análisis normativo y de riesgos, matriz de materialidad, indicadores SMART y talleres de cocreación con los equipos.",
    date: "28 may 2026",
    author: "Equipo NEXUS",
    readTime: "8 min",
  },
  {
    image: "",
    emoji: "🏘️",
    bg: "#E6F4EC",
    topic: "Urbanismo y Gobernanza",
    title:
      "Ecobarrios en Cali y Yumbo: qué cambia cuando la comunidad lidera la gobernanza ambiental",
    preview:
      "El diseño participativo de barrios sostenibles —infraestructura verde, gestión comunitaria del agua y soluciones basadas en la naturaleza en entornos urbano-industriales— muestra que la participación genuina es lo que separa un proyecto de impacto real de un documento archivado.",
    date: "19 may 2026",
    author: "Equipo NEXUS",
    readTime: "6 min",
  },
  {
    image: "",
    emoji: "🔬",
    bg: "#E8F5EF",
    topic: "Bioeconomía e I+D",
    title:
      "Leer el microbioma del fique: bioeconomía a partir de un residuo agroindustrial",
    preview:
      "La metagenómica aplicada a subproductos del fique (Furcraea sp.) permite identificar cepas con potencial biotecnológico para biofertilizantes y biocontroladores. Así convertimos un residuo regional en una oportunidad de bioeconomía basada en ciencia.",
    date: "12 may 2026",
    author: "Equipo NEXUS",
    readTime: "9 min",
  },
  {
    image: "",
    emoji: "⛏️",
    bg: "#EAF6F0",
    topic: "Gestión del Suelo",
    title:
      "Devolverle vida al suelo: restauración ecológica después de la minería",
    preview:
      "Recuperar suelos degradados por actividades mineras exige más que sembrar: selección de especies nativas, enmiendas biológicas y monitoreo riguroso de la recuperación. Explicamos la estrategia que usamos para cerrar ciclos y restaurar funciones ecosistémicas.",
    date: "02 may 2026",
    author: "Equipo NEXUS",
    readTime: "6 min",
  },
  {
    image: "",
    emoji: "🐄",
    bg: "#E6F4EC",
    topic: "Ganadería Sostenible",
    title:
      "Ganadería que captura carbono: sistemas silvopastoriles en el suroccidente",
    preview:
      "Diseñar ganadería baja en emisiones es posible integrando sistemas silvopastoriles y medición de huella de carbono en finca. Mostramos cómo se combinan productividad, bienestar animal y captura de carbono en predios reales de la región.",
    date: "23 abr 2026",
    author: "Equipo NEXUS",
    readTime: "7 min",
  },
  {
    image: "",
    emoji: "💧",
    bg: "#E8F5EF",
    topic: "Gestión del Agua",
    title:
      "Tratar agua con plantas: coagulantes naturales para comunidades rurales",
    preview:
      "Los coagulantes de origen vegetal son una alternativa sostenible, accesible y de bajo costo frente a los químicos convencionales para el tratamiento de aguas. Compartimos resultados de su aplicación y por qué importan en contextos rurales del suroccidente.",
    date: "15 abr 2026",
    author: "Equipo NEXUS",
    readTime: "5 min",
  },
  {
    image: "",
    emoji: "🌱",
    bg: "#EAF6F0",
    topic: "Agricultura Sostenible",
    title:
      "Biofertilizantes y biocontroladores: menos agroquímicos, más bioeconomía regional",
    preview:
      "La formulación y validación de bioproductos para la agricultura reduce la dependencia de agroquímicos y fortalece la bioeconomía del suroccidente colombiano. Explicamos el camino desde el laboratorio hasta el campo y su impacto en la sostenibilidad productiva.",
    date: "07 abr 2026",
    author: "Equipo NEXUS",
    readTime: "8 min",
  },
];

// ── Formulario de contacto: opciones de los select ────
export const CONTACT_ORG_TYPES = [
  "Gobierno municipal o departamental",
  "Empresa privada",
  "Cooperación internacional",
  "Academia / Universidad",
  "Organización comunitaria o social",
  "Otro",
];

export const CONTACT_INTEREST_AREAS = [
  "Ciudades y Territorios Sostenibles",
  "Biodiversidad y Soluciones basadas en la Naturaleza",
  "Innovación Social y Gobernanza",
  "Ciencia, Tecnología e Innovación (CTI)",
  "Múltiples ejes / Proyecto integral",
];

export const CONTACT_TARGETS = [
  "Gobiernos municipales y departamentales con retos de planificación sostenible",
  "Empresas que buscan certificación ambiental o estrategias de sostenibilidad corporativa",
  "Comunidades y organizaciones sociales en procesos de desarrollo territorial",
  "Organismos de cooperación internacional con programas en Colombia y la región",
  "Universidades y centros de investigación interesados en alianzas CTI",
];

// ── Footer ────────────────────────────────────────────
export const FOOTER_NAV = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes" },
  { label: "Servicios", to: "/servicios" },
  { label: "Proyectos", to: "/portafolio" },
  { label: "Red de Aliados", to: "/alianzas" },
  { label: "Blog", to: "/blog" },
];

export const FOOTER_TOPICS = [
  { label: "Territorios Sostenibles", to: "/servicios" },
  { label: "Biodiversidad y SbN", to: "/servicios" },
  { label: "Innovación Social", to: "/servicios" },
  { label: "CTI", to: "/servicios" },
];

// =====================================================
//  IDENTIDAD CORPORATIVA 2026
//  Contenido oficial tomado del documento de identidad
//  corporativa. Bloque añadido sin modificar lo anterior.
// =====================================================

// ── Datos de la empresa (razón social, contacto) ──────
export const COMPANY_INFO = {
  legalName: "NEXUS — Innovación y Alianzas para el Desarrollo Sostenible",
  shortName: "NEXUS",
  tagline: "Innovación y Alianzas para el Desarrollo Sostenible",
  city: "Popayán, Cauca, Colombia",
  coverage: "Suroccidente colombiano y proyectos nacionales",
  web: "nexussostenible.co",
  email: "contacto@nexussostenible.co",
  legalRep: "Viviana María Sánchez Escobar",
  scientificDirector: "Guillermo A. Vélez Tobar, Ecólogo M.Sc.",
};

// ── Quiénes Somos (descripción oficial) ───────────────
export const ABOUT_INTRO = [
  "NEXUS — Innovación y Alianzas para el Desarrollo Sostenible es una firma consultora colombiana especializada en la articulación de conocimiento científico, herramientas tecnológicas avanzadas y gestión territorial para impulsar procesos de transformación sostenible en municipios, empresas, comunidades e instituciones. Fundada en Candelaria, Valle, Palmira, NEXUS opera en la intersección entre la academia, el sector público y la empresa privada, ofreciendo soluciones integrales que combinan rigor técnico con sensibilidad social y visión estratégica de largo plazo.",
  "La naturaleza multidisciplinaria de NEXUS le permite abordar desafíos complejos donde convergen la planificación urbana, la gestión ambiental, la agroecología, la responsabilidad social corporativa y la innovación tecnológica aplicada. Esta capacidad diferencial es resultado de un equipo con formación de posgrado, experiencia institucional en entidades del orden municipal, departamental y nacional, y un historial comprobado en proyectos de alta complejidad técnica y financiera.",
  "NEXUS se posiciona como el aliado estratégico que transforma la información en conocimiento accionable, los diagnósticos en planes ejecutables y las alianzas en resultados medibles. Nuestra propuesta descansa en la integración de metodologías científicas de vanguardia con herramientas digitales, la capacidad de articular actores heterogéneos —Estado, empresa, comunidad y academia— en torno a objetivos comunes, y la producción de entregables de calidad institucional, listos para radicación ante organismos financiadores, autoridades ambientales y entes de control.",
];

// ── Misión y Visión oficiales ─────────────────────────
export const MISSION = {
  heading: "Nuestra razón de ser",
  text: "Generar soluciones técnicas y científicas de alto impacto que contribuyan al desarrollo territorial sostenible, articulando actores estratégicos, conocimiento aplicado y tecnología innovadora para transformar los territorios colombianos en espacios de equidad, resiliencia y prosperidad ambiental.",
};

export const VISION = {
  heading: "Hacia dónde vamos",
  text: "Para 2035, consolidarnos como la principal firma consultora en desarrollo sostenible del suroccidente colombiano, reconocida por la excelencia técnica de sus servicios, la solidez de sus alianzas y su contribución efectiva a los Objetivos de Desarrollo Sostenible y a la Política de Gestión Ambiental Urbana 2025-2035.",
};

// ── Valores corporativos ──────────────────────────────
export const CORPORATE_VALUES = [
  {
    title: "Rigor Científico",
    text: "Cada intervención se sustenta en el método científico, el modelamiento técnico y estándares metodológicos internacionales. La evidencia, no la intuición, guía nuestras decisiones y entregables.",
  },
  {
    title: "Integridad Institucional",
    text: "Actuamos con ética, trazabilidad y rendición de cuentas en cada recurso, proceso y alianza. La confianza de clientes, socios y comunidades se construye con hechos verificables.",
  },
  {
    title: "Innovación Aplicada",
    text: "Integramos herramientas digitales de última generación —analítica geoespacial, IoT e inteligencia artificial— para convertir la información en conocimiento accionable y soluciones escalables.",
  },
  {
    title: "Responsabilidad Social",
    text: "Combinamos el rigor técnico con la sensibilidad social, diseñando soluciones que reducen brechas y amplían oportunidades para las comunidades de los territorios donde trabajamos.",
  },
  {
    title: "Enfoque Territorial",
    text: "Partimos de la comprensión profunda de cada contexto para producir intervenciones técnicamente sólidas y, a la vez, social y políticamente viables en el territorio.",
  },
];

// ── Desafíos estratégicos que nos definen ─────────────
export const STRATEGIC_CHALLENGES = [
  {
    title: "Transición energética justa",
    text: "Acompañar a territorios y empresas en el tránsito hacia energías renovables, garantizando que los beneficios lleguen a las comunidades más vulnerables.",
  },
  {
    title: "Adaptación y mitigación climática",
    text: "Diseñar e intervenir proyectos que fortalezcan la resiliencia territorial frente al cambio climático, la degradación ambiental y los eventos extremos.",
  },
  {
    title: "Cierre de brechas tecnológicas",
    text: "Facilitar la transformación digital de sectores productivos, instituciones públicas y comunidades rurales mediante soluciones accesibles y escalables.",
  },
  {
    title: "Políticas públicas basadas en evidencia",
    text: "Posicionar a NEXUS como actor técnico de referencia en el diseño de instrumentos de política para la sostenibilidad y el desarrollo territorial.",
  },
  {
    title: "Internacionalización sostenible",
    text: "Desarrollar mercados y alianzas en Latinoamérica para proyectos de alto impacto que conecten financiamiento internacional con necesidades locales.",
  },
  {
    title: "Economía circular e innovación social",
    text: "Impulsar modelos de negocio que regeneren recursos, reduzcan residuos y generen valor social en los territorios donde operamos.",
  },
  {
    title: "Gobernanza territorial e institucional",
    text: "Actuamos como puente estratégico entre la institucionalidad y el territorio: articulamos actores públicos, privados y comunitarios, y co-diseñamos esquemas de gobernanza con trazabilidad, participación ciudadana y rendición de cuentas, generando estructuras de decisión más equitativas, eficientes y resilientes.",
  },
];

// ── Nuestra propuesta de valor (capacidades) ──────────
export const VALUE_PROPOSITION = [
  {
    title: "Ciencia y tecnología integradas",
    text: "Integramos metodologías científicas de vanguardia con herramientas digitales de última generación: analítica geoespacial, teledetección, IoT e inteligencia artificial aplicada al territorio.",
  },
  {
    title: "Articulación multiactor",
    text: "Conectamos actores heterogéneos —Estado, empresa, comunidad y academia— en torno a objetivos comunes, construyendo alianzas que ningún actor podría lograr en solitario.",
  },
  {
    title: "Entregables de calidad institucional",
    text: "Producimos documentos técnicos listos para radicación ante organismos financiadores, autoridades ambientales y entes de control, con rigor metodológico y trazabilidad.",
  },
];

// ── Alineación con la PGAU 2025-2035 (Portafolio) ─────
// Marco de política nacional: Política de Gestión Ambiental Urbana
// 2025-2035, aprobada por el Comité de Gerencia del MinAmbiente el
// 10 de noviembre de 2025 y publicada el 19 de noviembre de 2025.
// Cada componente de la política se cruza con el eje de NEXUS que lo
// atiende y con los proyectos de referencia que ya lo evidencian.
export const PGAU_FRAMEWORK = {
  tag: "Marco de Política Nacional",
  title: "Alineación con la PGAU 2025-2035",
  intro:
    "La Política de Gestión Ambiental Urbana 2025-2035 del Ministerio de Ambiente y Desarrollo Sostenible define la hoja de ruta ambiental de las ciudades colombianas hasta 2035, con visión al 2050. Sus cuatro componentes coinciden con los cuatro ejes de trabajo de NEXUS. Este es el cruce entre la política y lo que ya ejecutamos.",
  source: "MinAmbiente · Aprobada el 10 de noviembre de 2025",
  sourceUrl:
    "https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/politica-de-gestion-ambiental-urbana/",
};

export const PGAU_ALIGNMENT = [
  {
    code: "C1",
    cat: "eje-4",
    component: "Información y conocimiento",
    policy:
      "Consolidar instrumentos de gestión del conocimiento que articulen experiencias locales, regionales y nacionales como insumo para la toma de decisiones.",
    eje: "Eje 4 · Proyectos CTI",
    response:
      "Analítica geoespacial, teledetección multitemporal, redes IoT, geovisores y bases de datos espaciales estandarizadas para producir la evidencia que la política exige.",
    projects: [
      "MapBiomas Colombia — expansión urbana 1985-2024",
      "PRISM GeoVisor v4 / GuilleIA",
    ],
  },
  {
    code: "C2",
    cat: "eje-1",
    component: "Planificación y ordenamiento territorial",
    policy:
      "Mejorar la incorporación efectiva de variables ambientales y de sostenibilidad en la planificación urbana, con enfoque urbano-regional y multiescalar.",
    eje: "Eje 1 · Ciudades y Territorios Sostenibles",
    response:
      "Formulación de proyectos de inversión pública (MGA-DNP), PGIRS, estudios de localización multicriterio y tratados territoriales que llevan la variable ambiental al instrumento de planificación.",
    projects: [
      "Tratado Territorial Rincón Payanés",
      "Zona Franca de Economía Popular — Popayán",
    ],
  },
  {
    code: "C3",
    cat: "eje-12",
    component: "Transformación",
    policy:
      "Generar cambios reales en la calidad ambiental urbana en temas estratégicos: economía circular, biodiversidad urbana, SbN y resiliencia climática.",
    eje: "Ejes 1 + 2 · Economía circular y SbN",
    response:
      "Estrategias Basura Cero, infraestructura de valorización, Soluciones basadas en la Naturaleza para gestión del riesgo, restauración ecológica y huertos circulares urbanos.",
    projects: [
      "Programa Basura Cero — Popayán",
      "Dos SbN con ICLEI — Barranquilla y Copacabana",
    ],
  },
  {
    code: "C4",
    cat: "eje-3",
    component: "Gobernanza y participación",
    policy:
      "Fortalecer la gobernanza ambiental, la coordinación institucional y la participación efectiva de actores públicos, privados y de la sociedad civil.",
    eje: "Eje 3 · Innovación Social y Responsabilidad Territorial",
    response:
      "Análisis prospectivo de conflictos socioambientales, planes de relacionamiento, diagnósticos de gobernanza del agua y fortalecimiento de organizaciones de recicladores.",
    projects: [
      "RSE ILC — Inversiones López Cadavid",
      "Diagnóstico Microcuenca La Chuscala",
    ],
  },
];

// Principios de la PGAU que operan como criterios transversales de NEXUS.
export const PGAU_PRINCIPLES = [
  "Territorialidad integrada y multiescalar",
  "Biodiversidad como eje estratégico del desarrollo",
  "Equidad socioecológica y participación",
  "Gobernanza multinivel y colaborativa",
  "Resiliencia climática y transición energética justa",
  "Innovación y gestión del conocimiento",
  "Circularidad y metabolismo urbano",
];

// ── Casos de impacto / clientes reales (Portafolio) ───
export const CASE_STUDIES = [
  {
    client: "ICLEI",
    logo: new URL("../assets/logos_portafolio/iclei.jpeg", import.meta.url)
      .href,
    year: "2025",
    type: "Soluciones basadas en la Naturaleza",
    title: "Dos SbN para la gestión del riesgo y la resiliencia climática",
    desc: "Diseño de dos Soluciones basadas en la Naturaleza (SbN) para la gestión del riesgo de desastres y la resiliencia climática, alineadas con estándares internacionales y herramientas especializadas. El proceso aseguró un enfoque metodológico integral y participativo, incorporando principios de protección, equidad de género e inclusión.",
    locations: ["Barranquilla, Atlántico", "Copacabana, Antioquia"],
    pgau: "PGAU C3 · Transformación",
    tags: [
      "SbN",
      "Gestión del riesgo",
      "Resiliencia climática",
      "Equidad de género",
      "Inclusión",
    ],
  },
  {
    client: "Inversiones López",
    logo: new URL(
      "../assets/logos_portafolio/inversiones-lopez.jpeg",
      import.meta.url,
    ).href,
    year: "2025",
    type: "Responsabilidad Social Empresarial · ASG",
    title: "Política Institucional de RSE con criterios ASG",
    desc: "Formulación, diseño y entrega de la Política Institucional de Responsabilidad Social Empresarial, conforme a los criterios ASG (Ambientales, Sociales y de Gobernanza). La metodología comprendió diagnóstico, análisis normativo y de riesgos, matriz de materialidad, diseño del documento institucional de política y construcción de indicadores SMART, complementada con talleres de cocreación.",
    locations: ["Yopal, Casanare", "San José del Guaviare, Guaviare"],
    pgau: "PGAU C4 · Gobernanza y participación",
    tags: [
      "RSE",
      "Criterios ASG",
      "Matriz de materialidad",
      "Indicadores SMART",
      "Talleres de cocreación",
    ],
  },
];

// ── Proyectos de referencia (Portafolio) ──────────────
// Proyectos ejecutados reales de NEXUS con monto, estado y eje asociado.
// `cat` mapea a la clase de color de la etiqueta de eje.
export const REFERENCE_PROJECTS = [
  {
    n: 1,
    cat: "eje-1",
    eje: "Eje 1",
    monto: "~$39.000 M COP",
    estado: "En ejecución",
    pgau: "C3 · Transformación",
    title: "Programa Basura Cero — Popayán",
    desc: "~8 proyectos MGA articulados: ECA, Planta RCD, NFU, Pellets, Biogás, 15 camiones compactadores, PIGRSU y compostera La Patojita. Enmarcado en el Decreto 670/2025.",
  },
  {
    n: 2,
    cat: "eje-1",
    eje: "Eje 1",
    monto: "MVCT",
    estado: "Subsanación",
    pgau: "C2 · Planificación y OT",
    title: "Acueducto Interveredal El Hogar",
    desc: "Veredas Altamira, El Hogar, San Juan, El Cabuyo y Quintana. Subsanación ante el MVCT (radicado 2025ER0034547).",
  },
  {
    n: 3,
    cat: "eje-12",
    eje: "Eje 1+2",
    monto: "3.2 MW",
    estado: "Formulación",
    pgau: "C2 · Planificación y OT",
    title: "PCH Sajandí (VATIA S.A. E.S.P.)",
    desc: "Pequeña central hidroeléctrica a filo de agua en El Juncal, Patía (Cauca). Tratado Territorial, PRGS, KMZ y Gantt de obra.",
  },
  {
    n: 4,
    cat: "eje-12",
    eje: "Eje 1+2",
    monto: "9.9 MW",
    estado: "Formulado",
    pgau: "C2 · Planificación y OT",
    title: "PCH Florida II",
    desc: "Las Piedras y Quintana, Popayán. EIA + PMA completo y caracterización socioeconómica de 8 veredas.",
  },
  {
    n: 5,
    cat: "eje-3",
    eje: "Eje 3",
    monto: "ESG 2026-30",
    estado: "Entregado",
    pgau: "C4 · Gobernanza y participación",
    title: "RSE ILC — Inversiones López Cadavid (BIOMAX / MAXIMOTOS)",
    desc: "Plan de RSE 2026-2030 bajo ISO 26000 / ESG. Cobertura en Guaviare, Guainía, Casanare y Bogotá D.C.",
  },
  {
    n: 6,
    cat: "eje-1",
    eje: "Eje 1",
    monto: "MinCIT",
    estado: "Formulado",
    pgau: "C2 · Planificación y OT",
    title: "Zona Franca de Economía Popular — Popayán",
    desc: "Decreto 1317/2025. 14 documentos: plan de acción, modelo financiero, MinCIT, Acuerdo de Concejo y 3 polígonos KML.",
  },

  {
    n: 8,
    cat: "eje-4",
    eje: "Eje 4",
    monto: "Académico",
    estado: "Presentado",
    pgau: "C1 · Información y conocimiento",
    title: "MapBiomas Colombia — Premio 2.ª Edición Académica",
    desc: "Expansión urbana de Popayán 1985-2024 con la Colección 3.0. 20 mapas y 4 Jupyter Notebooks.",
  },
  {
    n: 9,
    cat: "eje-2",
    eje: "Eje 2",
    monto: "Consultoría",
    estado: "Entregado",
    pgau: "C1 · Información y conocimiento",
    title: "Diagnóstico Ambiental Microcuenca La Chuscala",
    desc: "Copacabana. Caracterización hidrológica, problemática ambiental y análisis institucional.",
  },
  {
    n: 10,
    cat: "eje-4",
    eje: "Eje 4",
    monto: "Tech / SbN",
    estado: "Operativo",
    pgau: "C1 · Información y conocimiento",
    title: "NEXUS FireEngine — Simulador SOC",
    desc: "Modelo Drossel-Schwabl con barreras SbN, transporte de brasas y propagación sobre imágenes satelitales.",
  },
  {
    n: 11,
    cat: "eje-4",
    eje: "Eje 4",
    monto: "Tech / SIG",
    estado: "Operativo",
    pgau: "C1 · Información y conocimiento",
    title: "PRISM GeoVisor v4 / GuilleIA",
    desc: "Asistente IA territorial (FastAPI + Anthropic) integrado con un visor SIG multiformato.",
  },
  {
    n: 12,
    cat: "eje-2",
    eje: "Eje 2",
    monto: "Investigación",
    estado: "En desarrollo",
    pgau: "C3 · Transformación",
    title: "Bioprospección de Sapindus saponaria",
    desc: "Investigación aplicada: análisis bioquímico, estrategia agroforestal y comparativa de jabones.",
  },
];

// ── ODS · Modelo "pastel de bodas" (Inicio) ───────────
// Cada ODS relevante para NEXUS, con su título oficial, su color oficial,
// la capa del modelo de Rockström (Stockholm Resilience Centre) a la que
// pertenece y la aplicación concreta dentro de NEXUS (mostrada al pasar el
// cursor). El icono se resuelve dinámicamente desde
// src/assets/iconos_inicio/ODS/ por el número de ODS (ver SDGCake).
export const ODS_LAYERS = {
  economia: { label: "ECONOMÍA", color: "#A21942" },
  sociedad: { label: "SOCIEDAD", color: "#FF3A21" },
  biosfera: { label: "BIOSFERA", color: "#3F7E44" },
};

export const ODS_DATA = [
  {
    num: 17,
    layer: "cima",
    title: "Alianzas para Lograr los Objetivos",
    apply:
      "Es probablemente el ODS más representativo de NEXUS por su enfoque en cooperación internacional, alianzas público-privadas y articulación multisectorial.",
  },
  {
    num: 8,
    layer: "economia",
    title: "Trabajo Decente y Crecimiento Económico",
    apply:
      "Generación de empleo, fortalecimiento empresarial, desarrollo económico territorial y proyectos de innovación.",
  },
  {
    num: 9,
    layer: "economia",
    title: "Industria, Innovación e Infraestructura",
    apply:
      "Transformación digital, innovación tecnológica, gestión de proyectos, fortalecimiento de infraestructura institucional y tecnológica.",
  },
  {
    num: 10,
    layer: "economia",
    title: "Reducción de las Desigualdades",
    apply:
      "Proyectos orientados a poblaciones vulnerables, desarrollo regional y acceso a oportunidades.",
  },
  {
    num: 12,
    layer: "economia",
    title: "Producción y Consumo Responsables",
    apply:
      "Implementación de estrategias ASG, RSE, economía circular y sostenibilidad empresarial.",
  },
  {
    num: 7,
    layer: "sociedad",
    title: "Energía Asequible y No Contaminante",
    apply:
      "Formulación de pequeñas centrales hidroeléctricas y acompañamiento a territorios en la transición energética justa, garantizando que los beneficios lleguen a las comunidades.",
  },
  {
    num: 4,
    layer: "sociedad",
    title: "Educación de Calidad",
    apply:
      "Formación, capacitaciones, fortalecimiento de capacidades institucionales, diplomados y transferencia de conocimiento.",
  },
  {
    num: 5,
    layer: "sociedad",
    title: "Igualdad de Género",
    apply:
      "Incorporación de enfoques de inclusión y equidad en proyectos sociales y territoriales.",
  },
  {
    num: 11,
    layer: "sociedad",
    title: "Ciudades y Comunidades Sostenibles",
    apply:
      "Proyectos de desarrollo urbano sostenible, ecobarrios, planificación territorial y fortalecimiento municipal.",
  },
  {
    num: 16,
    layer: "sociedad",
    title: "Paz, Justicia e Instituciones Sólidas",
    apply:
      "Fortalecimiento institucional, gobernanza, transparencia, gestión pública y participación ciudadana.",
  },
  {
    num: 13,
    layer: "biosfera",
    title: "Acción por el Clima",
    apply:
      "Soluciones Basadas en la Naturaleza (SbN), gestión ambiental, mitigación y adaptación al cambio climático.",
  },
  {
    num: 14,
    layer: "biosfera",
    title: "Vida Submarina",
    apply:
      "Gestión ambiental de áreas urbano-costeras: erosión costera, calidad de aguas y protección de ecosistemas marino-costeros en el enfoque urbano-regional.",
  },
  {
    num: 6,
    layer: "biosfera",
    title: "Agua Limpia y Saneamiento",
    apply:
      "Gestión integral del recurso hídrico, saneamiento básico, modelación de redes de acueducto rural y protección de fuentes hídricas estratégicas.",
  },
  {
    num: 15,
    layer: "biosfera",
    title: "Vida de Ecosistemas Terrestres",
    apply:
      "Restauración ecológica, conservación de la biodiversidad, conectividad de ecosistemas y planificación del paisaje en los territorios.",
  },
];

// ── Calendario ambiental (conmemoraciones del año) ────
// month: 1-12 · day: día del mes · usado por el carrusel del Blog.
export const ENVIRO_DATES = [
  { month: 2, day: 2, title: "Día Mundial de los Humedales" },
  { month: 3, day: 3, title: "Día Mundial de la Vida Silvestre" },
  { month: 3, day: 21, title: "Día Internacional de los Bosques" },
  { month: 3, day: 22, title: "Día Mundial del Agua" },
  { month: 3, day: 23, title: "Día Meteorológico Mundial" },
  { month: 4, day: 22, title: "Día Internacional de la Madre Tierra" },
  { month: 5, day: 22, title: "Día Internacional de la Diversidad Biológica" },
  { month: 6, day: 5, title: "Día Mundial del Medio Ambiente" },
  { month: 6, day: 8, title: "Día Mundial de los Océanos" },
  {
    month: 6,
    day: 17,
    title: "Día Mundial de Lucha contra la Desertificación y la Sequía",
  },
  { month: 6, day: 28, title: "Día Mundial del Árbol (Colombia)" },
  { month: 7, day: 7, title: "Día Internacional de la Conservación del Suelo" },
  {
    month: 7,
    day: 26,
    title: "Día Internacional para la Conservación del Ecosistema de Manglares",
  },
  { month: 8, day: 9, title: "Día Internacional de los Pueblos Indígenas" },
  {
    month: 9,
    day: 7,
    title: "Día Internacional del Aire Limpio por un Cielo Azul",
  },
  {
    month: 9,
    day: 16,
    title: "Día Internacional de la Preservación de la Capa de Ozono",
  },
  { month: 9, day: 22, title: "Día Mundial Sin Automóvil" },
  {
    month: 10,
    day: 1,
    title: "Día Internacional del Café (sostenibilidad agrícola)",
  },
  {
    month: 10,
    day: 13,
    title: "Día Internacional para la Reducción del Riesgo de Desastres",
  },
  { month: 10, day: 16, title: "Día Mundial de la Alimentación" },
  { month: 10, day: 24, title: "Día Internacional contra el Cambio Climático" },
  { month: 10, day: 31, title: "Día Mundial de las Ciudades" },
  {
    month: 11,
    day: 5,
    title: "Día Mundial de Concienciación sobre los Tsunamis",
  },
  {
    month: 11,
    day: 6,
    title:
      "Día Internacional para la Prevención de la Explotación del Medio Ambiente en la Guerra y los Conflictos Armados",
  },
  { month: 11, day: 21, title: "Día Mundial de la Pesca" },
  { month: 12, day: 5, title: "Día Mundial del Suelo" },
  { month: 12, day: 11, title: "Día Internacional de las Montañas" },
];
