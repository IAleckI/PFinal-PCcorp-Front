import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home, Detail , Catalogo, Wishlist, RegisterComponent, FormCreate, AboutUs, Cart, Login } from "./Views/Index";
import { GetToken} from "./components/Index";

function App() {
  return (
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterComponent/>} />
        {!GetToken() ? <Route path="/login" element={<Login/>} /> : null}
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/createProduct" element={<FormCreate/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
  );
}

export default App;
