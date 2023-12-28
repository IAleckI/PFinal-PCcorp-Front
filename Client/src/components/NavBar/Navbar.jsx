import { Link } from "react-router-dom";

const NavBar = () => {

  const tokenLogin = false;
  return (
    // <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li class="nav-item dropdown">
    //           <a
    //             class="nav-link dropdown-toggle"
    //             href="#"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul class="dropdown-menu">
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr class="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link disabled" aria-disabled="true">
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //       <form class="d-flex" role="search">
    //         <input
    //           class="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button class="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>

<nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">

  <div class="container-fluid">

    <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        {/* <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        /> */}
        <Link to="/">
        <img alt="logo"/>
        </Link>
      </a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/catalogo">Catalogo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/builds">Build</a>
        </li>
      </ul>

      <button data-mdb-collapse-init="true" class="navbar-toggler" type="button" data-mdb-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i></button>
    </div>

    <div class="d-flex align-items-center">

     
        <div class="d-flex justify-items-center">

          <form class="nav-search ">
            <input class="nav-search-input form-control-lg border-0" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
            <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
          
        <div >
          <button class="btn btn-secondary"> 
            <a href="#"><i class="bi bi-cart2 "></i></a>
          </button>
        </div>

         {/* este es el dropdown que tiene que estar solamente si esta logeado */}
        {tokenLogin?<div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a  class="dropdown-item" href="#">Cerrar Sesion</a></li>
          </ul>
          
        </div> :
        <div>
          <a>Log In/Sing Up</a>
        </div>}

        
    </div>

  </div>

</nav>

  );
};

export default NavBar;
