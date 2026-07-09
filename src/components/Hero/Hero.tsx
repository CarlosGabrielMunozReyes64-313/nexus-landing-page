import HeroCarousel from '../HeroCarousel/HeroCarousel';
// Imagen de fondo para los hero compactos (Quiénes, Ejes, Portafolio, Alianzas, Blog).
import cienagaBg from '../../assets/hero-pages/WhatsApp Image 2026-06-16 at 3.25.19 PM.jpeg';
// Versiones en blanco del logo para que se lean nítidas sobre el hero oscuro.
import simboloBlanco from '../../assets/Logo_Nexus/soloLogoNEXUS_white.png';
import letrasBlanco from '../../assets/Logo_Nexus/LogoNexusLETRAS_white.png';
import './Hero.css';

// Encabezado (hero) reutilizable.
// - `small`: variante compacta. Lleva la imagen de Ciénaga como fondo.
// - `carousel`: carrusel de imágenes de fondo (solo Inicio, sin Ciénaga).
// - `brand`: muestra el logo de NEXUS (símbolo + letras + lema) en grande.
export default function Hero({
  tag,
  title,
  subtitle,
  small = false,
  carousel = false,
  brand = false,
  children,
}) {
  const bgStyle = small ? { backgroundImage: `url(${cienagaBg})` } : undefined;

  // Clases del contenedor. `hero-centered` (solo cuando hay `brand`, es decir
  // el hero de Inicio) centra título, subtítulo y botones.
  const heroClass = [
    'hero',
    small ? 'hero-sm hero-bg' : '',
    brand ? 'hero-centered' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={heroClass} style={bgStyle}>
      {carousel && <HeroCarousel />}
      <div className="hero-inner">
        {brand && (
          <div className="hero-brand">
            <img className="hero-brand-symbol" src={simboloBlanco} alt="Símbolo NEXUS" />
            <img
              className="hero-brand-letters"
              src={letrasBlanco}
              alt="NEXUS — Alianzas e innovación"
            />
          </div>
        )}
        {tag && <div className="hero-tag">{tag}</div>}
        {title && <h1>{title}</h1>}
        {subtitle && <p className="hero-sub">{subtitle}</p>}
        {children && <div className="hero-btns">{children}</div>}
      </div>
    </div>
  );
}
