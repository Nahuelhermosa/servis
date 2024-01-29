import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          
          <code className={styles.code}>nahuel_pro_517@hotmail.com</code>
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
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Nosotros <span>-&gt;</span>
          </h2>
          <p>empresa dedicada al mantenimiento preventivo edilicio.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Servicios <span>-&gt;</span>
          </h2>
          <p>Empresa dedicada a la refrigeracion,plomeria y electricidad.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Galeria <span>-&gt;</span>
          </h2>
          <p>muestra de nuestros trabajos realizados.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contacto <span>-&gt;</span>
          </h2>
          <p>
            donde poder obtener nuestros servicios o consulta sobre presupuestos.
          </p>
        </a>
      </div>
    </main>
  );
}
