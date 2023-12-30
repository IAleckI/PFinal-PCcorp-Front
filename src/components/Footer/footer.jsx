import React from "react";
import styles from "./footer.module.css";

import logoGithub from "../../Assets/Logos/logo-github.png";

const Footer = () => {
  return (
    <hr className={styles.separator} />,
    <footer className={styles.footer}>

      <div className={styles.socialIcons}>
        <p className={styles.clickableText}>Repositorio completo de la aplicacion en: </p>
        <a
          href="https://github.com/IAleckI/PFinal-PCcorp-Front"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoGithub} alt="Github" className={styles.githubIcon} />
        </a>
      </div>
      <hr className={styles.separator} />

      <div className={styles.columnContainer}>
        <div className={styles.column}>
          <a href="#" className={styles.clickableText}>
            Enlace 1
          </a>
        </div>

        <div className={styles.column}>
          <a href="#" className={styles.clickableText}>
            Enlace 2
          </a>
        </div>

        <div className={styles.column}>
          <a href="#" className={styles.clickableText}>
            Enlace 3
          </a>
        </div>

      </div>
      <p className={styles.copyrightText}>© {new Date().getFullYear()} All rights reserved with 💙 by PCorp.</p>
    </footer>
  );
};

export default Footer;
