import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './TeamCard.css';

// Tarjeta de un integrante del equipo. Recibe un objeto `member`.
// Si `member.profile` existe, muestra el botón "Ver perfil profesional"
// que abre un modal con el CV ampliado.
export default function TeamCard({ member }) {
  const [open, setOpen] = useState(false);
  const profile = member.profile;

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
    <div className="team-card">
      <div className="team-header">
        <div className="team-avatar">{member.initials}</div>
      </div>
      <div className="team-body">
        <div className="team-name">{member.name}</div>
        <div className="team-role">{member.role}</div>
        <p className="team-bio">{member.bio}</p>

        {profile && (
          <button type="button" className="team-profile-btn" onClick={() => setOpen(true)}>
            Ver perfil profesional
          </button>
        )}
      </div>

      {profile &&
        open &&
        createPortal(
          <div
            className="team-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={`Perfil profesional de ${member.name}`}
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

              <div className="team-modal-head">
                <div className="team-modal-avatar">{member.initials}</div>
                <div>
                  <h3 className="team-modal-name">{member.name}</h3>
                  {profile.title && <p className="team-modal-title">{profile.title}</p>}
                </div>
              </div>

              <div className="team-modal-content">
                {profile.summary && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">Resumen Profesional</h4>
                    <p className="team-modal-text">{profile.summary}</p>
                  </section>
                )}

                {profile.education?.length > 0 && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">Formación Académica</h4>
                    <ul className="team-modal-list">
                      {profile.education.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {profile.experience?.length > 0 && (
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

                {profile.skills?.length > 0 && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">Competencias Técnicas y Tecnológicas</h4>
                    <ul className="team-modal-list team-modal-list-rich">
                      {profile.skills.map((skill) => (
                        <li key={skill.area}>
                          <span className="team-modal-item-title">{skill.area}:</span>
                          {skill.detail && <span className="team-modal-item-detail-inline"> {skill.detail}</span>}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
