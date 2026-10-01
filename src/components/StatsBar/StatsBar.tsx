import { STATS } from '../../data/siteData';
import CountUp, { parseStatNum } from '../CountUp/CountUp';
import './StatsBar.css';

// Barra de cifras de impacto (página de inicio).
// La cifra final viene en el HTML; si está fuera de pantalla, se anima al llegar a ella.
export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {STATS.map((stat, i) => {
          const { prefix, value, suffix } = parseStatNum(stat.num);
          return (
            <div key={stat.label} className="stat-item">
              <div className="stat-num">
                {value === null ? (
                  stat.num
                ) : (
                  <CountUp
                    value={value}
                    prefix={prefix}
                    suffix={suffix}
                    duration={1700 + i * 120}
                  />
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
