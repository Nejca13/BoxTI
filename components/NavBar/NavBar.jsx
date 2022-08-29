import styles from "./NavBar.module.css"
import Link from "next/link"
import Logo from "../Logo/Logo"

function NavBar() {
  return (
    <>
      <div className={styles.container}>
        {/* <Image src={logo} alt="Logo de la Empresa." className={styles.Logo} width={80} height={80} /> */}
        <Logo/>
        <ul>
          <li><Link href="#_1">Inicio</Link></li>
          <li><Link href="#about">Nosotros</Link></li>
          <li><Link href="#service">Servicios</Link></li>
          <li><Link href="#">Contacto</Link></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
