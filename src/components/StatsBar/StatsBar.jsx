import { STATS } from '../../data/siteData'
import './StatsBar.css';

// Barra de cifras de impacto (página de inicio).
export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="stat-num">{stat.num}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
