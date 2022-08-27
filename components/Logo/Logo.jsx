import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.border1}></div>
      <p className={styles.logo}>
        Box<span>IT</span>
      </p>
    </div>
  )
}

export default Logo
