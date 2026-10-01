import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./TeamCard.css";

// Devuelve solo el primer nombre ("Jaime Andrés Marín" -> "Jaime").
function firstName(fullName = "") {
  return fullName.trim().split(/\s+/)[0] || fullName;
}

// Tarjeta de un integrante del equipo. Recibe un objeto `member`.
//
// `variant`:
//   - 'directivo'  → tarjeta con foto circular (o iniciales), nombre y cargo
//                    al frente. Pensada para el Equipo Directivo.
//   - 'consultor'  → tarjeta con iniciales grandes y nombre. Equipo de
//                    Consultores.
// En ambas, al pasar el cursor la tarjeta gira (efecto) y al hacer clic se
// abre un modal con el perfil completo. Las fotos se añaden con `member.photo`.
//
// Campos del objeto `member`:
//   - name      (obligatorio)  nombre completo
//   - initials  (obligatorio)  iniciales para el respaldo sin foto
//   - role, bio (opcionales)   información relevante
//   - position  (opcional)     cargo corto (p. ej. "Directora General")
//   - photo     (opcional)     imagen importada o URL para la foto
//   - profile   (opcional)     CV ampliado (title, summary, education, experience, skills)
export default function TeamCard({
  member,
  variant = "consultor",
  showRoleOnFront = false,
}) {
  const [open, setOpen] = useState(false);
  const profile = member.profile;
  const photo = member.photo; // opcional
  const intro = profile?.summary || member.bio; // evita duplicar bio + resumen
  // Cargo corto para mostrar en la tarjeta (p. ej. "Directora General").
  const frontRole = member.position || member.role;
  const isDir = variant === "directivo";

  // Cerrar con Escape y bloquear el scroll del fondo mientras el modal está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* ── Tarjeta: gira al pasar el cursor y revela el cargo en el reverso ── */}
      <button
        type="button"
        className={`team-card team-card--${variant}`}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Ver perfil de ${member.name}${member.role ? ` — ${member.role}` : ""}`}
      >
        <div className="team-card-flip">
          {/* Frente */}
          <div className="team-card-face team-card-front">
            {isDir ? (
              <div className="team-front team-front--dir">
                <div className="team-avatar">
                  {photo ? (
                    <img
                      src={photo}
                      alt={member.name}
                      className="team-avatar-img"
                    />
                  ) : (
                    <span className="team-avatar-initials">
                      {member.initials}
                    </span>
                  )}
                </div>
                <div className="team-front-name team-front-name--full">{member.name}</div>
                <span className="team-front-sep" aria-hidden="true" />
                {showRoleOnFront && frontRole && (
                  <div className="team-front-role" title={frontRole}>
                    {frontRole}
                  </div>
                )}
              </div>
            ) : (
              <div className="team-front team-front--con">
                {photo ? (
                  <span className="team-avatar team-avatar--con">
                    <img
                      src={photo}
                      alt={member.name}
                      className="team-avatar-img"
                    />
                  </span>
                ) : (
                  <span className="team-con-initials">{member.initials}</span>
                )}
                <span
                  className="team-front-sep team-front-sep--con"
                  aria-hidden="true"
                />
                <div className="team-front-name team-front-name--con team-front-name--full">
                  {member.name}
                </div>
              </div>
            )}
          </div>

          {/* Reverso: cargo / rol */}
          <div className="team-card-face team-card-back" aria-hidden="true">
            <span className="team-back-initials">{member.initials}</span>
            <span className="team-back-name">{member.name}</span>
            {frontRole && <span className="team-back-role">{frontRole}</span>}
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
                  <img
                    src={photo}
                    alt={member.name}
                    className="team-modal-photo"
                  />
                ) : (
                  <div className="team-modal-photo team-modal-photo--fallback">
                    {member.initials}
                  </div>
                )}
                <div className="team-modal-id">
                  <h3 className="team-modal-name">{member.name}</h3>
                  {member.role && (
                    <p className="team-modal-role">{member.role}</p>
                  )}
                  {member.linkedin && (
                    <a
                      className="team-modal-linkedin"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver perfil en LinkedIn
                    </a>
                  )}
                </div>
              </aside>

              {/* Columna de contenido: información relevante + perfil */}
              <div className="team-modal-content">
                {profile?.title && (
                  <p className="team-modal-title">{profile.title}</p>
                )}

                {intro && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">Resumen Profesional</h4>
                    <p className="team-modal-text">{intro}</p>
                  </section>
                )}

                {profile?.experience?.length > 0 && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">
                      Experiencia Profesional Destacada
                    </h4>
                    <ul className="team-modal-list team-modal-list-rich">
                      {profile.experience.map((exp) => (
                        <li key={`${exp.role}-${exp.org}`}>
                          <span className="team-modal-item-title">
                            {exp.role}
                          </span>
                          {exp.org && (
                            <span className="team-modal-item-org">
                              {" "}
                              | {exp.org}
                            </span>
                          )}
                          {exp.detail && (
                            <p className="team-modal-item-detail">
                              {exp.detail}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {profile?.skills?.length > 0 && (
                  <section className="team-modal-section">
                    <h4 className="team-modal-heading">
                      Competencias Técnicas y Tecnológicas
                    </h4>
                    <ul className="team-modal-list team-modal-list-rich">
                      {profile.skills.map((skill) => (
                        <li key={skill.area}>
                          <span className="team-modal-item-title">
                            {skill.area}:
                          </span>
                          {skill.detail && (
                            <span className="team-modal-item-detail-inline">
                              {" "}
                              {skill.detail}
                            </span>
                          )}
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
    </>
  );
}
