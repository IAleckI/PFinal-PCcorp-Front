import Style from "./navBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import homelogo from "../../Assets/Logos/home.png";
import bolsalogo from "../../Assets/Logos/bolsa.png";
import usuario from "../../Assets/Logos/usuario.png";
import wishlist from "../../Assets/Logos/wishlist.png";
import { NavLink, Link, useLocation } from "react-router-dom";
import LogoutButton from "../Logout/LogoutComponent";

const NavBar = () => {
  
  
  return (
    <nav className={Style.navbar}>
      <div className={Style.firstNavbar}>
        <Link to={"/"}><img src={homelogo} alt="logo"  className={Style.logo}/></Link>
        <SearchBar/>
        <div className={Style.navbar_user}>
          <Link to={"/wishlist"}><img src={wishlist} alt="wishlist" /></Link>
          <Link to={"/cart"}><img src={bolsalogo} alt="bolsa" /></Link>
          <Link to={"/login"}><img src={usuario} alt="user" /></Link>
          <LogoutButton />
        </div>
      </div>
      <div className={Style.secondNavbar}>
        <LocationNav location="/"  tittle='HOME'/>
        <LocationNav location="/catalogo" tittle='CATALOGO'/>
        <LocationNav location="/build" tittle='ARMA TU PC'/>
        <LocationNav location="/destacados" tittle='DESTACADOS'/>
        <LocationNav location="/AboutUs" tittle='¿QUIENES SOMOS?'/>
      </div>
    </nav>
  );
};



const LocationNav = ({ location, tittle }) => {
  const loc = useLocation().pathname

  return (
    <div className={`${loc === location
    ? Style.location_active 
    : Style.location}`}>
      <NavLink to={location}>
        <h2>{tittle}</h2>
      </NavLink>
    </div>
  )
}

export default NavBar;
