import Link from 'next/link';
import './Nosotros.css'
import Nav from '../Componentes/Nav';


export default function Nosotros () {
    return (
        <>
       <Nav/>
        <div className="Nosotros">
        <h1 className='titulo-nosotros'>
        Nosotros
        </h1>
              
        <br />
                <div className="servicio-contenedor">                    
            <p>Nos dedicamos al mantenimiento de heladera,instalacion de aire acondicionado,secarropas y heladeras.
                 </p>
            <br />
            <div className="contenedor-imagenes">
            <img className='imagen-servicio' src="aire1.jpg" alt="servicio" />
            <img className='imagen-servicio' src="aire2.jpg" alt="servicio" />
            </div>
        </div>
        </div>
        </>
    )
}