import Link from 'next/link';
import './Contacto.css'
import Nav from '../Componentes/Nav';
export default function Contacto () {
    return (
        <>
        <Nav/>
        <div className='contacto'>
            
        <h1 className='titulo'>
        Contacto
        </h1>
      
            <br />
            <p className='info'>Ante cualquier duda acerca de la garantia de las consolas y los accesorios deportivos seran respondida a la brebedad muchas gracias.</p>
            <br />

            <form name="contacto" data-netlify="true" netlify-honeypot="bot-field" hidden> 
            <input type="text" name='nombre' />
            <input type="email" name='email' />
            <textarea name="comentario" ></textarea>
            </form>

            <form method='post' className='formulario'>
                <label>
                    Nombre:
                    <input type="text" name='nombre' />
                </label>
                <label>
                    Mail:
                    <input type="email" name='email' />
                </label>
                <label>
                    Comentarios:
                    <textarea name="comentario" ></textarea>
                </label>
                <input type="hidden" name="form-name" value="contacto" />
                <button type="submit">Enviar</button>
            </form>
            
            </div>
        </>
    )
}