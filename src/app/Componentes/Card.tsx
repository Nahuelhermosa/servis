import './Card.css';

interface Producto {
  imagen: string;
  titulo: string;
  descripcion: string;

}

export default function Card({ producto }: { producto: Producto }) {
  return (
    <div className='grillas'>
      <div className="card">
        <img className="imagen-producto-venta"src={producto.imagen} alt="" />
        <div className="card-content">
          <h2>{producto.titulo}</h2> 
        </div>
      </div>
    </div>
  );
}