import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Detail, Login ,Register ,Catalogo } from "./Views/Index";

function App() {
  return (
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
  );
}

export default App;
