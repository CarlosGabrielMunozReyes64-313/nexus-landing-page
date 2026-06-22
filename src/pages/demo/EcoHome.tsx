import { Link } from 'react-router-dom';
import DemoNav from './DemoNav';
import styles from './EcoHome.module.css';

interface CalcCard {
  icon: string;
  iconClass?: string;
  title: string;
  desc: string;
  features: string[];
  to: string;
  cta: string;
}

const CALCULADORAS: CalcCard[] = [
  {
    icon: '🌱',
    title: 'Huella de Carbono',
    desc: 'Calcula las emisiones de CO₂ que generas con tus actividades diarias como transporte, consumo de energía, alimentación y estilo de vida.',
    features: [
      'Transporte personal y público',
      'Consumo energético del hogar',
      'Hábitos alimentarios',
      'Residuos y reciclaje',
    ],
    to: '/proyecto-demo/carbono',
    cta: 'Calcular Huella de Carbono',
  },
  {
    icon: '💧',
    iconClass: styles.cardIconBlue,
    title: 'Huella Hídrica',
    desc: 'Descubre cuánta agua consumes directa e indirectamente a través de tus actividades agrícolas y pecuarias.',
    features: [
      'Consumo en agricultura',
      'Producción pecuaria',
      'Interpretación de resultados',
      'Recomendaciones de ahorro',
    ],
    to: '/proyecto-demo/hidrica',
    cta: 'Calcular Huella Hídrica',
  },
  {
    icon: '📊',
    iconClass: styles.cardIconDark,
    title: 'Dashboard Analítico',
    desc: 'Visualiza tu huella de carbono con gráficas interactivas, comparativas anuales y un panel de impacto ambiental.',
    features: [
      'Distribución de emisiones',
      'Comparativa vs. metas 2030',
      'Tendencia temporal',
      'Geovisor regional',
    ],
    to: '/proyecto-demo/dashboard',
    cta: 'Abrir Dashboard',
  },
];

const INFO = [
  {
    icon: '📊',
    title: 'Conciencia',
    text: 'Conoce el impacto real de tus acciones diarias en el medio ambiente y toma decisiones más informadas.',
  },
  {
    icon: '🎯',
    title: 'Acción',
    text: 'Recibe recomendaciones personalizadas para reducir tu impacto ambiental de manera efectiva.',
  },
  {
    icon: '🌱',
    title: 'Cambio',
    text: 'Forma parte del cambio hacia un futuro más sostenible y contribuye a la preservación del planeta.',
  },
  {
    icon: '💡',
    title: 'Educación',
    text: 'Aprende sobre sostenibilidad y descubre nuevas formas de vivir de manera más responsable.',
  },
];

export default function EcoHome() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <DemoNav />

        <header className={styles.header}>
          <div className={styles.logo}>🌍</div>
          <h1 className={styles.title}>Calculadora de Huella Ecológica</h1>
          <p className={styles.subtitle}>
            Descubre tu impacto ambiental y aprende cómo reducir tu huella en el planeta. Calcula
            tanto tu huella de carbono como tu huella hídrica de manera sencilla y obtén
            recomendaciones personalizadas.
          </p>
        </header>

        <section className={styles.intro}>
          <h2>¿Qué es la Huella Ecológica?</h2>
          <p className={styles.introText}>
            La huella ecológica mide el impacto que tienen nuestras actividades diarias sobre el
            medio ambiente. Incluye desde las emisiones de carbono que generamos hasta el agua que
            consumimos. Conocer tu huella ecológica es el primer paso para adoptar un estilo de vida
            más sostenible y contribuir a la preservación de nuestro planeta.
          </p>
        </section>

        <div className={styles.grid}>
          {CALCULADORAS.map((c) => (
            <article className={styles.card} key={c.title}>
              <div className={`${styles.cardIcon} ${c.iconClass ?? ''}`}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <ul className={styles.features}>
                {c.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to={c.to} className={styles.btn}>
                {c.cta}
              </Link>
            </article>
          ))}
        </div>

        <section className={styles.info}>
          <h2>¿Por qué es importante calcular tu huella ecológica?</h2>
          <div className={styles.infoGrid}>
            {INFO.map((it) => (
              <div className={styles.infoItem} key={it.title}>
                <div className={styles.infoIcon}>{it.icon}</div>
                <h4>{it.title}</h4>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            © {new Date().getFullYear()} Calculadora de Huella Ecológica · Proyecto demo integrado en
            NEXUS 🌍
          </p>
        </footer>
      </div>
    </div>
  );
}
