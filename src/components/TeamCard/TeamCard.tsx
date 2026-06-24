import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './TeamCard.css';

// Devuelve solo el primer nombre ("Jaime Andrés Marín" -> "Jaime").
function firstName(fullName = '') {
  return fullName.trim().split(/\s+/)[0] || fullName;
}

// Tarjeta de un integrante del equipo. Recibe un objeto `member`.
// En el frente solo se muestran la foto y el primer nombre.
// Al hacer clic se abre un modal (80% de la pantalla) con la información
// relevante (nombre, rol y perfil) y el perfil profesional ampliado si existe.
//
// Campos del objeto `member`:
//   - name      (obligatorio)  nombre completo
//   - initials  (obligatorio)  iniciales para el respaldo sin foto
//   - role, bio (opcionales)   información relevante
//   - photo     (opcional)     imagen importada o URL para la foto
//   - profile   (opcional)     CV ampliado (title, summary, education, experience, skills)
export default function TeamCard({ member, showRoleOnFront = false }) {
  const [open, setOpen] = useState(false);
  const profile = member.profile;
  const photo = member.photo; // opcional
  const intro = profile?.summary || member.bio; // evita duplicar bio + resumen

  // Cerrar con Escape y bloquear el scroll del fondo mientras el modal está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* ── Tarjeta: gira al pasar el cursor y revela el cargo en el reverso ── */}
      <button
        type="button"
        className="team-card"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Ver perfil de ${member.name}${member.role ? ` — ${member.role}` : ''}`}
      >
        <div className="team-card-flip">
          {/* Frente: foto + primer nombre */}
          <div className="team-card-face team-card-front">
            <div className="team-photo">
              {photo ? (
                <img src={photo} alt={member.name} className="team-photo-img" />
              ) : (
                <span className="team-photo-fallback">{member.initials}</span>
              )}
              <span className="team-photo-veil" aria-hidden="true" />
              {showRoleOnFront && member.role ? (
                <span className="team-photo-caption">
                  <span className="team-caption-name">{firstName(member.name)}</span>
                  <span className="team-photo-role" title={member.role}>
                    {member.role}
                  </span>
                </span>
              ) : (
                <span className="team-photo-name">{firstName(member.name)}</span>
              )}
            </div>
          </div>

          {/* Reverso: cargo / rol */}
          <div className="team-card-face team-card-back" aria-hidden="true">
            <span className="team-back-initials">{member.initials}</span>
            <span className="team-back-name">{firstName(member.name)}</span>
            {member.role && <span className="team-back-role">{member.role}</span>}
            <span className="team-back-hint">Ver perfil completo</span>
          </div>
        </div>
      </button>

      {/* ── Modal con la información completa ── */}
      {open &&
        createPortal(
          <div
            className="team-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={`Perfil de ${member.name}`}
            onClick={() => setOpen(false)}
          >
            <div className="team-modal" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="team-modal-close"
                aria-label="Cerrar"
                onClick={() => setOpen(false)}
              >
                ×
              </button>

              {/* Columna visual: foto + identificación */}
              <aside className="team-modal-media">
                {photo ? (
                  <img src={photo} alt={member.name} className="team-modal-photo" />
                ) : (
                  <div className="team-modal-photo team-modal-photo--fallback">
                    {member.initials}
                  </div>
                )}
                <div className="team-modal-id">
                  <h3 className="team-modal-name">{member.name}</h3>
                  {member.role && <p className="team-modal-role">{member.role}</p>}
                </div>
              </aside>

              {/* Columna de contenido: información relevante + perfil */}
              <div className="team-modal-content">
                {profile?.title && <p className="team-modal-title">{profile.title}</p>}

                {intro && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">Resumen Profesional</h4>
                    <p className="team-modal-text">{intro}</p>
                  </section>
                )}

                {profile?.education?.length > 0 && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">Formación Académica</h4>
                    <ul className="team-modal-list">
                      {profile.education.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {profile?.experience?.length > 0 && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">Experiencia Profesional Destacada</h4>
                    <ul className="team-modal-list team-modal-list-rich">
                      {profile.experience.map((exp) => (
                        <li key={`${exp.role}-${exp.org}`}>
                          <span className="team-modal-item-title">{exp.role}</span>
                          {exp.org && <span className="team-modal-item-org"> | {exp.org}</span>}
                          {exp.detail && <p className="team-modal-item-detail">{exp.detail}</p>}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {profile?.skills?.length > 0 && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">Competencias Técnicas y Tecnológicas</h4>
                    <ul className="team-modal-list team-modal-list-rich">
                      {profile.skills.map((skill) => (
                        <li key={skill.area}>
                          <span className="team-modal-item-title">{skill.area}:</span>
                          {skill.detail && (
                            <span className="team-modal-item-detail-inline"> {skill.detail}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
