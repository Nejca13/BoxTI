import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./WhatsAppButton.module.css"

const WhatsAppButton = ({icon, bgColor, bottom, href, target}) => {
  return (
    <div className={styles.container}>
      <a style={{backgroundColor: bgColor, bottom: bottom}} href={href} target={target}>
        <div className={styles.svgwrapper1}>
          <div className={styles.svgwrapper}>
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
      </a>
    </div>
  )
}

export default WhatsAppButton
