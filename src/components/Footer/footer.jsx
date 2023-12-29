import styles from './footer.module.css';
import logoGithub from '../../Assets/Logos/logo-github.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 PCorp Web. Todos los derechos reservados.</p>
      <a
        href="https://github.com/IAleckI/PFinal-PCcorp-Front"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={logoGithub}
          alt="GitHub Logo"
        />
      </a>
    </footer>
  );
};

export default Footer;