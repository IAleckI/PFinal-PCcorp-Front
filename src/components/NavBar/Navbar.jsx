import React from "react";
import styles from "./navBar.module.css";
import homelogo from "../../Assets/Logos/home.jpg";
import lupalogo from "../../Assets/Logos/lupa.png";
import bolsalogo from "../../Assets/Logos/bolsa.png";
import notificacion from "../../Assets/Logos/notificacion.png";
import usuario from "../../Assets/Logos/usuario.png";
import wishlist from "../../Assets/Logos/wishlist.png";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <img
          src={homelogo}
          alt="Home Logo"
          className={styles.homelogo}
          onClick={() => (window.location.href = "/")}
        />
      </div>

      <div className={styles.centerContent}>
        <input type="text" placeholder= "  Search" className={styles.searchBar} />
        <img src={lupalogo} alt="Lupa Logo" className={styles.icon} />
      </div>

      <div className={styles.rightSection}>
        <button className={styles.Button}>
          <img src={bolsalogo} alt="Bolsa Logo" className={styles.icon} />
        </button>
        <button className={styles.Button}>
          <img src={wishlist} alt="Wishlist Logo" className={styles.icon} />
        </button>
        <button className={styles.Button}>
          <img
            src={notificacion}
            alt="Notificacion Logo"
            className={styles.icon}
          />
        </button>
        <button className={styles.Button}>
          <img src={usuario} alt="Usuario Logo" className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
