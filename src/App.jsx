import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Detail, Login  ,Catalogo , RegisterComponent } from "./Views/Index";

function App() {
  return (
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterComponent/>} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
  );
}

export default App;
