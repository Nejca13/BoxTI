import { useState } from "react"
import styles from "./NavBar.module.css"
import Link from "next/link"
import Logo from "../Logo/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

function NavBar() {
  const [hambStatus, setHambStatus] = useState(faBars)
  
  const hamb = () => {
    let menu = document.getElementById('hambMenu')
    menu.classList.toggle(styles.active)
    if(hambStatus == faBars){
      setHambStatus(faXmark)
    }
    if(hambStatus == faXmark){
      setHambStatus(faBars)
    }
    document.getElementById('ulMenu').classList.toggle(styles.active)
    
  }
  return (
    <>
      <div className={styles.container}>
        <Logo/>
        
          <FontAwesomeIcon icon={hambStatus} id="hambMenu" className={styles.hambMenu} onClick={hamb}/>
        
        <ul className={styles.mobileNav} id="ulMenu">
          <li onClick={hamb}><Link href="#_1">Inicio</Link></li>
          <li onClick={hamb}><Link href="#about">Nosotros</Link></li>
          <li onClick={hamb}><Link href="#service">Servicios</Link></li>
          <li onClick={hamb}><Link href="#contact">Contacto</Link></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
