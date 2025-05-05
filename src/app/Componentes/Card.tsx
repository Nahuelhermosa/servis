'use client';
import { useState } from 'react';
import Image from 'next/image';
import './Card.css';

interface Producto {
  imagen: string;
  titulo: string;
  descripcion: string;
}

export default function Card({ producto }: { producto: Producto }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='grillas'>
      <div className="card image-container">
        {isLoading && <div className="loader" />}
        <Image
          className="imagen-producto-venta"
          src={`/${producto.imagen}`} // 🧠 Agregado `/` al principio
          alt={producto.titulo}
          width={300}
          height={300}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}
