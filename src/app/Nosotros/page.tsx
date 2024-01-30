import './Nosotros.css'

export default function Nosotros () {
    return (
        <div className="Nosotros">
            <h1 className="servicio-title">ServiNH</h1>
            <br />
                <div className="Nosotros-contenedor">                    
            <p>Bien venidos a Escalibur "el calaboso del nerd" somos una tienda que se centra en el diseño y venta de ropa para hombre, mujeres, niñas y niño, presentando un gran impacto visual, con ideas alternativas dedicado a la cultura pop, anime, manga y sus variantes.
                 </p>
            <br />
            <div className="contenedor-imagenes">
            <img className='imagen-servicio' src="lombor.jpg" alt="indumetaria" />
            <img className='imagen-servicio' src="nirvana.jpg" alt="indumentaria" />
            </div>
                </div>
        </div>
    )
}