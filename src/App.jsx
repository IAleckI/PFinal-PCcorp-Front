import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Detail, Login , Catalogo, AboutUs } from "./Views/Index";

function App() {
  return (
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
  );
}

export default App;
