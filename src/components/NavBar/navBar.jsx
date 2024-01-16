import Style from "./navBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import homelogo from "../../Assets/Logos/home.png";
import bolsalogo from "../../Assets/Logos/bolsa.png";
import usuario from "../../Assets/Logos/usuario.png";
import wishlist from "../../Assets/Logos/wishlist.png";
import { NavLink, Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const token = localStorage.getItem("USER_INFO")
  const image = localStorage.getItem("USER_IMAGE")
  
  return (
    <nav className={Style.navbar}>
      <div className={Style.firstNavbar}>
        <Link to={"/"}> <img src={homelogo} alt="logo"  className={Style.logo}/></Link>
        <div className={Style.searchBar}>
          <SearchBar/>
        </div>
        <div className={Style.navbar_user}>
          <Link to={"/wishlist"}><img src={wishlist} alt="wishlist" /></Link>
          <Link to={"/cart"}><img src={bolsalogo} alt="bolsa" /></Link>
          {token
          ? <Link to={"/account/profile"}> <img className={Style.profileImage} src={image} alt="user" /></Link>
          : <Link to={"/login"}><img src={usuario} alt="user" /></Link>}
        </div>
      </div>
      <div className={Style.secondNavbar}>
        <LocationNav location="/"  tittle='HOME'/>
        <LocationNav location="/catalogo" tittle='CATALOGO'/>
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
