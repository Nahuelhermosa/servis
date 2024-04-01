import Link from 'next/link';
import './Servicio.css';
import Nav from '../Componentes/Nav';

export default function Servicio() {
  return (
    <>
    <Nav/>
    <div className="Servicio">
        <h1 className='titulo-servicio'>
        Servicio
        </h1>
     
      <br />
      <p className='info'>
        Empresa especializada en REFRIGERACIÓN (instalación de aire acondicionado, arreglo de heladeras, frizzer y cámaras),
        LAVARROPAS y SECARROPAS (especialista en arreglos de lavarropas de carga frontal, superior y secarropas).
        Somos una empresa que se dedica al arreglo de split y heladeras, poseemos las herramientas indicadas para su detección y arreglo posterior.
        Soldamos caños, cambiamos motores, hacemos cargas de gas.
      </p>
      <br />
    </div>
    </>
  );
}
