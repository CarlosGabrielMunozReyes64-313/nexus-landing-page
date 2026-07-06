import { SERVICE_VALUES } from '../../data/siteData';
import ServiceIcon, { ServiceIconName } from '../icons/ServiceIcons';
import './ServiceValues.css';

// Franja de valores diferenciales que se muestra bajo el mosaico de servicios.
export default function ServiceValues() {
  return (
    <div className="svc-values">
      {SERVICE_VALUES.map((v) => (
        <div className="svc-value" key={v.title}>
          <div className="svc-value-icon" aria-hidden="true">
            <ServiceIcon name={v.icon as ServiceIconName} />
          </div>
          <div>
            <h4 className="svc-value-title">{v.title}</h4>
            <p className="svc-value-text">{v.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
