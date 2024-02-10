import Link from 'next/link';
import './Galeria.css'

export default function Nosotros () {
    return (
        <div className="Galeria">
        <Link href="/">
        <h1>
          <img className="imagen-container" src="blanco-negro-llaves-inicio2.png" alt="<Home/>" />
          Galeria
        </h1>
        </Link>
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
    )
}