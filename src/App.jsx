import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


import {
  Home,
  Detail,
  Catalogo,
  Wishlist,
  RegisterComponent,
  FormCreate,
  AboutUs,
  Cart,
  Login,
  UserBoard,
  Dashboard
} from "./Views/Index";
import { GetToken } from "./components/Index";
import { Verify } from "./components/Index";
import { jwtDecode } from "jwt-decode";
import LogoutButton from "./components/Logout/LogoutComponent";

function App() {

  const token = localStorage.getItem("USER_INFO");
  const decode = token ? jwtDecode(token) : { ban: null };
  const isBanned = decode.ban === true; 

  if (isBanned) {
    return (
      <div>
      <h2>You are not authorized to access this page</h2>
      <LogoutButton />
      </div>
    );
  }

  const [setRedirectToGraphQL] = useState(false);
  const newTabRef = useRef(null);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const newTab = window.open("https://back-mans.onrender.com/graphql", "_blank");
  //     newTabRef.current = newTab;

  //     setRedirectToGraphQL(true);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterComponent />} />
      {!GetToken() ? <Route path="/login" element={<Login />} /> : null}
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/dashboard/create" element={<FormCreate />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account/:id" element={<UserBoard />} />
      {!GetToken() ? <Route path="/verify" element={<Verify />} /> : null}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
