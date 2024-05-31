"use client";

import Link from 'next/link';
import { useState } from 'react';
import './Nav.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <button className="nav-toggle" onClick={toggleMenu}>
                &#9776;
            </button>
            <ul className={`nav-lista ${isOpen ? 'open' : ''}`}>
                <li className="nav-item">
                    <Link href="/">
                        <img src="blanco-negro-llaves-inicio2.png" alt="inicio" />
                    </Link>
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
