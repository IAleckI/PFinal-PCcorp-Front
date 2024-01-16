import "./App.css";
import { Routes, Route } from "react-router-dom";

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
  AdminDeleteComponent,
} from "./Views/Index";
import { GetToken } from "./components/Index";
import { Verify } from "./components/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterComponent />} />
      {!GetToken() ? <Route path="/login" element={<Login />} /> : null}
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/:id" element={<Detail />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/create" element={<FormCreate />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account/:id" element={<UserBoard />} />
      {!GetToken() ? <Route path="/verify" element={<Verify />} /> : null}

      {/* Esta ruta es solo para testing, no afecta el proyecto en general, el "element" puede ser cualquier componente */}
      <Route path="/testing" element={<AdminDeleteComponent />} />
    </Routes>
  );
}

export default App;
