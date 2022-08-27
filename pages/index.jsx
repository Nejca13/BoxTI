import {
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { faArrowAltCircleDown, faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons"
import {
  faDesktop,
  faGamepad,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BoxIT | Home</title>
      </Head>
      <section className={styles.mainHero} id="hero">
        <h1>
          Box<span className={styles.it}>IT</span> | Servicios Informaticos
        </h1>
        <div className={styles.preDescription}>
          <p>
            Servicios Informaticos, para pequeñas y grandes empresas
          </p>
        </div>
        <a href="#about">
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            className={styles.moreInfo}
          />
        </a>
      </section>
      <section className={styles.about} id="about">
        <h2>
          Que es Box<span className={styles.it}>IT</span>?
        </h2>
        <div className={styles.aboutDescription}>
          <p>
            Box<span className={styles.it}>IT</span> ofrece servicios
            informaticos y web, que abarca tanto la creacion como el
            mantenimiento de sitios web. Y el armado, reparacion y mantenimiento
            de PC, Notebook, Consolas de video juegos.
            <br />
            Asi como tambien la posibilidad de reacondicionar equipos viejos
            para darle un nuevo uso.
          </p>
        </div>
      </section>
      <section id="service" className={styles.service}>
        <h2>Servicios</h2>
        <div className={styles.aboutCardContainer}>
          <div className={styles.card}>
            <div className={styles.aboutCard}>
              <FontAwesomeIcon className={styles.icon} icon={faGlobe} />
              <p>
                <strong>Creacion de paginas web</strong>
              </p>
              <p>
                Creacion y mantenimiento de sitios web desarrollados a medida de
                las necesidades del cliente.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.aboutCard}>
              <FontAwesomeIcon className={styles.icon} icon={faDesktop} />
              <p>
                <strong>Mantenimiento de PC</strong>
              </p>
              <p>
                Reparacion y mantenimiento de PC, Notebook. Instalacion de
                sistemas operativos (Windows o GNU/Linux)
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.aboutCard}>
              <FontAwesomeIcon className={styles.icon} icon={faGamepad} />
              <p>
                <strong>Mantenimiento y flasheo</strong>
              </p>
              <p>
                Mantenimiento y flasheo de consolas (PS3, PS4), instalacion de
                juegos, actualizacion de hardware.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton
        icon={faWhatsapp}
        bgColor="#00bb2d"
        bottom="15px"
        href="https://wa.me/+542984406895"
        target="_blank"
      />
      <WhatsAppButton
        icon={faTelegramPlane}
        bgColor="royalblue"
        bottom="75px"
        href="https://t.me/Nicolas_Contreras"
        target="_blank"
      />
      <WhatsAppButton 
        icon={faArrowAltCircleUp}
        bottom="135px"
        bgColor="rgba(0,0,0, 0.6)"
        href="#hero"
        target=""
      />
    </div>
  )
}
