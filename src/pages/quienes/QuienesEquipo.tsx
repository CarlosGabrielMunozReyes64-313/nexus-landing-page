import { TEAM } from '../../data/siteData';
import TeamCard from '../../components/TeamCard/TeamCard';

// Íconos (inline) para los encabezados del equipo, al estilo de la referencia.
function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function TalentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 3l.9 1.9L22 6l-2.1.9L19 9l-.9-2.1L16 6l2.1-1.1L19 3z" />
    </svg>
  );
}

// Encabezado de grupo: ícono en círculo + rótulo + línea con punto al final.
function TeamGroupHead({ icon, label }) {
  return (
    <div className="team-head">
      <span className="team-head-icon">{icon}</span>
      <h3 className="team-head-label">{label}</h3>
      <span className="team-head-line" aria-hidden="true" />
    </div>
  );
}

// Vista "Nuestro Equipo de Trabajo": equipo directivo + consultores + mensaje
// de cierre, replicando la composición de la referencia.
export default function QuienesEquipo() {
  return (
    <section className="team-section">
      <div className="section-inner">
        <div className="section-tag">Equipo</div>
        <h2 className="section-title team-section-title">Nuestro equipo</h2>
        <p className="section-body team-section-intro">
          Contamos con un equipo multidisciplinario de profesionales comprometidos con la
          sostenibilidad, la innovación y el desarrollo territorial.
        </p>

        {/* Equipo Directivo (Guillermo, Jaime, Viviana) */}
        <TeamGroupHead icon={<PeopleIcon />} label="Equipo Directivo" />
        <div className="grid-3 team-grid team-grid--dir">
          {TEAM.slice(0, 3).map((member) => (
            <TeamCard key={member.name} member={member} variant="directivo" showRoleOnFront />
          ))}
        </div>

        {/* Equipo de Consultores (resto del equipo) */}
        <TeamGroupHead icon={<StarIcon />} label="Equipo de Consultores" />
        <div className="team-grid team-grid--con">
          {TEAM.slice(3).map((member) => (
            <TeamCard key={member.name} member={member} variant="consultor" />
          ))}
        </div>

        {/* Mensaje de cierre */}
        <div className="team-closing">
          <span className="team-closing-icon">
            <TalentIcon />
          </span>
          <div className="team-closing-body">
            <h3 className="team-closing-heading">El talento detrás de cada solución</h3>
            <p className="team-closing-desc">
              Un equipo diverso, experto y comprometido con generar impacto positivo y sostenible en
              los territorios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
