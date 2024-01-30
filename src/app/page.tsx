import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Desarrolador: nahuel_pro_517@hotmail.com</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
      <Image
    src="/blanco-negro-llaves.png"
    alt="Logo de Servis General N.H"
    width={190} // Ajusta el ancho según tus necesidades
    height={190} // Ajusta la altura según tus necesidades
  />
      </div>

      <div className={styles.grid}>
      <Link href="/Nosotros"
         className={styles.card}>
          <h2>
            Nosotros <span>-&gt;</span>
          </h2>
          <p>empresa dedicada al mantenimiento preventivo edilicio.</p>
        </Link>

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
