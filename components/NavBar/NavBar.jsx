import styles from "./NavBar.module.css"
import logo from "../../assets/images/BoorIT.png"
import Image from "next/image"
import Link from "next/link"

function NavBar() {
  return (
    <>
      <div className={styles.container}>
        {/* <Image src={logo} alt="Logo de la Empresa." className={styles.Logo} width={80} height={80} /> */}
        <div className={styles.logoContainer}>
        <div className={styles.border1}>
        </div>
        <p className={styles.logo}>Box<span>IT</span></p>
        </div>
        <ul>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
