import { faPlaystation } from "@fortawesome/free-brands-svg-icons"
import {
  faDesktop,
  faGamepad,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BoxIT | Home</title>
      </Head>
      <section className={styles.mainHero}>
        <h1>
          Box<span className={styles.it}>IT</span> | Servicios Informaticos
        </h1>
        <div className={styles.preDescription}>
          <h2>
            Box<span className={styles.it}>IT</span>
          </h2>
          <p>
            Servicios Informaticos, para el hogar o pequeñas y grandes empresas
          </p>
        </div>
      </section>
      <div className={styles.about}>
        <h2>Quienes somos?</h2>
        <div className={styles.aboutDescription}>
          <p>
          Box<span className={styles.it}>IT</span> ofrece servicios informaticos y web, que abarca tanto el el mantenimiento y/o creacion de sitios web. Y el mantenimiento, armado, y reparacion de PC, Notebook, Consolas de video juegos.<br/>
          Asi como tambien la posibilidad de reacondicionar equipos viejos para darle un nuevo uso.
          </p>
        </div>
        <h2>Servicios</h2>
        <div className={styles.aboutCardContainer}>
          
          <div className={styles.card}>
            <div className={styles.aboutCard}>
              <FontAwesomeIcon className={styles.icon} icon={faGlobe} />
              <p>Creacion de paginas web</p>
              <p>
                Creacion y mantenimiento de sitios web desarrollados a medida de las necesidades del cliente.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.aboutCard}>
              <FontAwesomeIcon className={styles.icon} icon={faDesktop} />
              <p>Mantenimiento de PC</p>
              <p>
                Reparacion y mantenimiento de PC, Notebook. Instalacion de sistemas operativos (Widnows o GNU/Linux)
              </p>
            </div>
          </div>
          <div className={styles.card}>
          <div className={styles.aboutCard}>
            <FontAwesomeIcon className={styles.icon} icon={faGamepad} />
            <p>Mantenimiento y flasheo</p>
            <p>
              Mantenimiento y flasheo de consolas (PS3, PS4), instalacion de juegos, actualizacion de hardware.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
