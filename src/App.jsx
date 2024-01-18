import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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

function App() {
  const token = localStorage.getItem("USER_INFO");
  const decode = token ? jwtDecode(token) : { ban: null };
  const isBanned = decode.ban === "true";

  if (isBanned) {
    return (
      <h2>You are not authorized to access this page</h2>
    );
  }

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
