import React from "react";
import styles from "./footer.module.css";

import logoGithub from "../../Assets/Logos/logo-github.png";

const Footer = () => {
  return (
    (<hr className={styles.separator} />),
    (
      <footer className={styles.footer}>
        <div className={styles.socialIcons}>
          <p className={styles.clickableText}>
            Repositorio completo de la aplicacion en:{" "}
          </p>
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
            <a
              href="https://tycpcorp.blogspot.com/2024/01/terminos-y-condiciones-de-pcorp.html"
              target="_blank"
              className={styles.clickableText}
            >
              TYC
            </a>
          </div>

          <div className={styles.column}>
            <a onClick={()=>window.location.href='/AboutUs'} className={styles.clickableText}>
              About us
            </a>
          </div>

          <div className={styles.column}>
            <a
              href="https://forms.gle/pnV8ndPC7eAZc3MfA"
              target="_blank"
              className={styles.clickableText}
            >
              Reclama Aqui
            </a>
          </div>
        </div>
        <p className={styles.copyrightText}>
          © {new Date().getFullYear()} All rights reserved with 💙 by PCorp.
        </p>
      </footer>
    )
  );
};

export default Footer;
