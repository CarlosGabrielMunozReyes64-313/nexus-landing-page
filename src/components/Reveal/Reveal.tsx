import { useReveal } from '../../hooks/useReveal';
import './Reveal.css';

/*
  Reveal — Envoltorio que aplica una animación sutil de aparición al entrar
  en pantalla. Ligero: una sola vez por elemento (ver useReveal).

  Props:
    · as        → etiqueta a renderizar (por defecto 'div').
    · variant   → 'up' | 'left' | 'right' | 'fade' | 'zoom'  (dirección).
    · delay     → retardo en ms para escalonar elementos hermanos.
    · className → clases extra.
*/
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}: any) {
  const { ref, shown } = useReveal();
  const Component: any = Tag;

  return (
    <Component
      ref={ref}
      className={`reveal reveal-${variant}${shown ? ' is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Component>
  );
}
