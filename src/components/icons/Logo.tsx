import logoColor from '../../assets/Logo_Nexus/soloLogoNEXUS.png';
import logoWhite from '../../assets/Logo_Nexus/soloLogoNEXUS_white.png';

// Doble imagen superpuesta: el navbar hace el cross-fade por CSS según el scroll.
export default function Logo() {
  return (
    <span className="logo-swap logo-swap--symbol">
      <img className="logo-swap-img logo-swap-img--color" src={logoColor} alt="Símbolo NEXUS" />
      <img className="logo-swap-img logo-swap-img--white" src={logoWhite} alt="" aria-hidden="true" />
    </span>
  );
}