import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>WhatsApp +54 11 66784827</code>
        </p>
        <div>
          <a
            href="https://porfolio-swart-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            Nahuel Eduardo Hermosa
          </a>
        </div>
      </div>

      <div className={styles.center}>
      <Image
    src="/blanco-negro-llaves.png"
    alt="Logo de Servis General N.H"
    width={190} // Ajusta el ancho 
    height={190} // Ajusta la altura 
  />
      </div>

      <div className={styles.grid}>
     

        <Link href="/Servicio"
          className={styles.card}>
          <h2>
            Servicios <span>-&gt;</span>
          </h2>
          <p>Empresa dedicada a la refrigeracion,plomeria y electricidad.</p>
        </Link>

        <Link href="/Galeria"
          className={styles.card}>
          <h2>
            Galeria <span>-&gt;</span>
          </h2>
          <p>muestra de nuestros trabajos realizados.</p>
        </Link>

        <Link href="/Contacto"
          className={styles.card}>
          <h2>
            Contacto <span>-&gt;</span>
          </h2>
          <p>
            donde poder obtener nuestros servicios o consulta sobre presupuestos.
          </p>
        </Link>
      </div>
    </main>
  );
}
