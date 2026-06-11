export default function PillarCard({ pillar }) {
  return (
    <article className="pillar-tile">
      <div className="pillar-tile-icon">
        <img src={pillar.icon} alt="" />
      </div>
      <h3 className="pillar-tile-title">{pillar.title}</h3>
    </article>
  );
}
