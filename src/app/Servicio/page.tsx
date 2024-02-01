import Link from 'next/link';
import './Servicio.css';

export default function Servicio() {
  return (
    <div className="Servicio">
      <Link href="/">
        <h1>
        <img className="imagen-container" src="blanco-negro-llaves.png" alt="<Home/>" />
        ServisNH
        </h1>
      </Link>
      <br />
      <h2>
        Empresa especializada en REFRIGERACIÓN (instalación de aire acondicionado, arreglo de heladeras, frizzer y cámaras),
        LAVARROPAS y SECARROPAS (especialista en arreglos de lavarropas de carga frontal, superior y secarropas).
        Somos una empresa que se dedica al arreglo de split y heladeras, poseemos las herramientas indicadas para su detección y arreglo posterior.
        Soldamos caños, cambiamos motores, hacemos cargas de gas.
      </h2>
      <br />
    </div>
  );
}
