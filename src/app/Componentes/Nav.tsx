import Link from 'next/link';
import './Nav.css';

export default function Nav() {
    return (
      <nav className="nav">
        <ul className="nav-lista">
          <li className="nav-item">
            <Link href="/">
              <img src="blanco-negro-llaves-inicio2.png" alt="inicio" />
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Nosotros">Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link href="/Servicio">Servicio</Link>
          </li>
         
          <li className="nav-item">
            <Link href="/Galeria">Galeria</Link>
          </li>
          <li className="nav-item">
            <Link href="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    );
  }