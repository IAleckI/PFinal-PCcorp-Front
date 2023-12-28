import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Detail } from "./Views/Index";
import { NavBar } from "./components/Index";

function App() {
  return (
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route pa th="/detail" element={<Detail />} />
      </Routes>
  );
}

export default App;
