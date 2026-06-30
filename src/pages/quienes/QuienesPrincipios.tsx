import { CORPORATE_VALUES } from '../../data/siteData';
import IdentityBlock from '../../components/IdentityBlock/IdentityBlock';
import ImgPrincipios from '../../assets/Quienes/Los-principios-que-guian-cada-decision.jpg';

// Vista "Nuestros Principios": únicamente los valores corporativos.
export default function QuienesPrincipios() {
  return (
    <section>
      <div className="section-inner">
        <IdentityBlock
          image={ImgPrincipios}
          alt="Equipo de NEXUS colaborando con la comunidad"
          tag="Valores Corporativos"
          title="Los principios que guían cada decisión"
          intro="Seis valores definen nuestra forma de operar y son el criterio con el que evaluamos cada proyecto, alianza y resultado."
          items={CORPORATE_VALUES}
        />
      </div>
    </section>
  );
}
