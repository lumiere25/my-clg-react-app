  import React from 'react'
  import Styles from "./Footer.module.css";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

  const Footer = () => {
    return (
    <div className={Styles["footer_container"]}>
    <div className={Styles['desc']}>
    <h2>Website powered by Chrissa Hanna</h2>
    </div>
    <div className={Styles.icons}>
    <a href="https://www.facebook.com/">
    <FontAwesomeIcon className={Styles.icon_1}icon={faFacebook}/>
    </a>
    <a href="https://www.instagram.com/">
    <FontAwesomeIcon className={Styles.icon_2}icon={faInstagram}/>
    </a>
    <a href="https://www.youtube.com/">
    <FontAwesomeIcon className={Styles.icon_3} icon={faYoutube}/>
    </a>
    <a href="https://twitter.com/home?lang=en">
    <FontAwesomeIcon className={Styles.icon_4} icon={faTwitter}/>
    </a>
    </div>
    </div>
  )
}

   export default Footer;