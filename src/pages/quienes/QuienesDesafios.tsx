import { STRATEGIC_CHALLENGES } from '../../data/siteData';
import IdentityBlock from '../../components/IdentityBlock/IdentityBlock';
import ImgRetos from '../../assets/Quienes/Los-retos-que-nos-definen.jpg';

// Vista "Desafíos Estratégicos": únicamente los retos que definen a NEXUS.
export default function QuienesDesafios() {
  return (
    <section>
      <div className="section-inner">
        <IdentityBlock
          image={ImgRetos}
          alt="Paisaje con energía renovable y territorio sostenible"
          tag="Desafíos Estratégicos"
          title="Los retos que nos definen"
          intro="NEXUS orienta su crecimiento y propuesta de valor en torno a los grandes desafíos que marcarán las próximas décadas en Colombia y la región."
          items={STRATEGIC_CHALLENGES}
        />
      </div>
    </section>
  );
}
