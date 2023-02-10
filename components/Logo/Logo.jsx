import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <a className={styles.logoContainer}>
      <p className={styles.logo}>
        Nej<span>ca</span>
      </p>
    </a>
  )
}

export default Logo
