import Hero from '../components/Hero';
import ServiceTabs from '../components/ServiceTabs';

export default function Ejes() {
  return (
    <>
      <Hero
        small
        tag="Soluciones de Vanguardia"
        title={
          <>
            Cuatro ejes que definen <span>nuestro alcance</span>
          </>
        }
      />

      <ServiceTabs />
    </>
  );
}
