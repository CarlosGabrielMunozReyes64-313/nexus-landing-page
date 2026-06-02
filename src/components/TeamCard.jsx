// Tarjeta de un integrante del equipo. Recibe un objeto `member`.
export default function TeamCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-header">
        <div className="team-avatar">{member.initials}</div>
      </div>
      <div className="team-body">
        <div className="team-name">{member.name}</div>
        <div className="team-role">{member.role}</div>
        <p className="team-bio">{member.bio}</p>
      </div>
    </div>
  )
}
