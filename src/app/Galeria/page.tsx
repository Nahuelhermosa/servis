import Link from 'next/link';
import './Galeria.css'
import Nav from '../Componentes/Nav';

export default function Nosotros () {
    return (
         <>
        <Nav/>
        <div className="Galeria">
        <h1 className='titulo-galeria'>
          Galeria
        </h1>
        <br />
        <div className="servicio-contenedor">                    
            <p>Nos dedicamos al mantenimiento de heladera,instalacion de aire acondicionado,secarropas y heladeras.
                 </p>
            <br />
            <div className="contenedor-imagenes">
            <img className='imagen-servicio' src="secarropas.jpg" alt="servicio" />
            <img className='imagen-servicio' src="lavarropas.jpg" alt="servicio" />
            </div>
        </div>
        </div>
        </>
    )
}