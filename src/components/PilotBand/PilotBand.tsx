import { Link } from 'react-router-dom';
import { PILOT } from '../../config/site';
import './PilotBand.css';

/*
  PilotBand — Puerta de entrada para MiPymes en la página de inicio.
  Suma el segmento pyme sin tocar el mensaje principal (gobiernos y
  cooperación). Se adapta solo cuando el piloto se cierra.
*/
export default function PilotBand() {
  return (
    <section className="pilot-band" aria-labelledby="pilot-band-title">
      <div className="pilot-band-inner">
        <div>
          <h2 id="pilot-band-title" className="pilot-band-title">
            {PILOT.active
              ? `¿Tiene una MiPyme en ${PILOT.municipalities.join(' o ')}? Abrimos ${PILOT.slots} cupos para empezar en RSE.`
              : '¿Tiene una MiPyme en el Valle del Cauca? Empiece en RSE con un reto concreto.'}
          </h2>
          <p className="pilot-band-text">
            Diagnóstico con IA, un reto concreto y acompañamiento experto
            {PILOT.active ? `, financiado por el programa de la ${PILOT.funder}.` : '.'}
          </p>
        </div>
        <Link className="btn-primary pilot-band-btn" to="/rse-mipymes">
          {PILOT.active ? 'Ver el piloto' : 'RSE para MiPymes'}
        </Link>
      </div>
    </section>
  );
}
