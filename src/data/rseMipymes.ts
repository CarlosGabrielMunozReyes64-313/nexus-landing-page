// =====================================================
//  Contenido de la página «RSE para MiPymes» (/rse-mipymes)
//  Revise y ajuste estos textos: describen RSE Express y RSE por
//  Retos en términos generales. Las preguntas frecuentes también
//  alimentan los datos estructurados que leen Google y la IA.
// =====================================================
import { PILOT } from '../config/site';

export const RSE_MIPYMES_HERO = {
  tag: 'RSE para MiPymes',
  title: 'RSE práctica para MiPymes del Valle del Cauca',
  subtitle:
    'Diagnóstico con IA, un reto concreto y acompañamiento experto desde Candelaria.',
};

export const RSE_REASONS = [
  {
    title: 'Clientes que preguntan',
    text: 'Empresas grandes y entidades públicas piden a sus proveedores información sobre prácticas laborales, ambientales y éticas. Tener respuestas claras abre puertas.',
  },
  {
    title: 'Un equipo que se queda',
    text: 'Mejores condiciones y un propósito claro ayudan a atraer y retener talento, uno de los retos más grandes de una empresa pequeña.',
  },
  {
    title: 'Ahorros visibles',
    text: 'Revisar consumos de energía, agua y materiales casi siempre revela desperdicios que cuestan dinero.',
  },
  {
    title: 'Confianza en el territorio',
    text: 'En Palmira y Candelaria la relación con la comunidad pesa. La RSE la vuelve una gestión y no un gesto aislado.',
  },
];

export const RSE_OFFER = [
  {
    name: 'RSE Express',
    summary: 'Diagnóstico rápido asistido por inteligencia artificial.',
    points: [
      'Un cuestionario guiado sobre las prácticas actuales de la empresa.',
      'Un diagnóstico del punto de partida en temas laborales, ambientales, de clientes, proveedores y comunidad.',
      'Prioridades claras para decidir por dónde empezar, revisadas por el equipo de NEXUS.',
    ],
  },
  {
    name: 'RSE por Retos',
    summary: 'Un reto concreto, implementado con acompañamiento experto.',
    points: [
      'La empresa elige un reto con impacto real: residuos, bienestar del equipo, proveedores locales, relación con la comunidad u otro.',
      'Definimos juntos un indicador, una línea base y una meta.',
      'Acompañamos la implementación y ayudamos a comunicar los resultados con evidencia.',
    ],
  },
];

// Es una secuencia real (el orden importa), por eso va numerada.
export const RSE_STEPS = [
  { title: 'Postúlese', text: 'Complete el formulario o escríbanos por WhatsApp.' },
  { title: 'Diagnóstico con IA', text: 'RSE Express ubica el punto de partida de la empresa.' },
  { title: 'Elija su reto', text: 'Definimos con usted un reto concreto y medible.' },
  { title: 'Acompañamiento', text: 'Implementamos el reto con apoyo experto y medimos el avance.' },
];

export const RSE_FAQ = [
  {
    q: '¿Qué es la RSE para una MiPyme?',
    a: 'Es la forma en que la empresa gestiona sus efectos sobre su equipo, clientes, proveedores, comunidad y ambiente, más allá de cumplir la ley. En una MiPyme empieza por conocer esos impactos y mejorar uno a la vez.',
  },
  {
    q: '¿Quiénes pueden postularse al piloto?',
    a: `Micro, pequeñas y medianas empresas de ${PILOT.municipalities.join(' y ')}, de cualquier sector. Hay ${PILOT.slots} cupos.`,
  },
  {
    q: '¿Cuánto cuesta?',
    a: `Para las ${PILOT.slots} empresas del piloto, el acompañamiento está financiado por el programa «${PILOT.program}» de la ${PILOT.funder}.`,
  },
  {
    q: '¿Necesitamos experiencia previa en sostenibilidad?',
    a: 'No. El diagnóstico parte de lo que la empresa ya hace, y el reto se elige según su tamaño y sus recursos.',
  },
  {
    q: '¿Qué hace la inteligencia artificial en el diagnóstico?',
    a: 'Ayuda a organizar las respuestas de la empresa y a identificar prioridades con rapidez. El equipo de NEXUS revisa el resultado y lo conversa con la empresa.',
  },
  {
    q: '¿Qué pasa si no quedamos entre los 5 cupos?',
    a: 'Le contactamos para contarle otras formas de trabajar con NEXUS en RSE, y le avisamos cuando abramos nuevas convocatorias.',
  },
];

export const PILOT_FORM_OPTIONS = {
  municipios: ['Palmira', 'Candelaria', 'Otro municipio del Valle del Cauca'],
  sectores: [
    'Comercio',
    'Industria / manufactura',
    'Agroindustria y agricultura',
    'Servicios',
    'Construcción',
    'Turismo, alimentos y bebidas',
    'Transporte y logística',
    'Otro',
  ],
  empleados: ['1 a 10 personas', '11 a 50 personas', '51 a 200 personas', 'Más de 200 personas'],
};
