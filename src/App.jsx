import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, LoginView, Detail } from "./Views/Index";


function App() {
  return (
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginView />} />
        <Route pa th="/detail" element={<Detail />} />
      </Routes>
  );
}

export default App;
