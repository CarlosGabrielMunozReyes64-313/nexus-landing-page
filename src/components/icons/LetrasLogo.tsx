import letrasColor from '../../assets/Logo_Nexus/LogoNexusLETRAS.png';
import letrasWhite from '../../assets/Logo_Nexus/LogoNexusLETRAS_white.png';

export default function LetrasLogo() {
  return (
    <span className="logo-swap logo-swap--letters">
      <img className="logo-swap-img logo-swap-img--color" src={letrasColor} alt="NEXUS" />
      <img className="logo-swap-img logo-swap-img--white" src={letrasWhite} alt="" aria-hidden="true" />
    </span>
  );
}