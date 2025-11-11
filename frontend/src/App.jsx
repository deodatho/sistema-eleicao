import { Routes, Route, Link } from "react-router-dom";
import Cadastro from "./pages/Register_usr";
import Uservote from "./pages/Vote";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registro from "./pages/Register_admin";
import Dashboard from "./pages/Dashboard";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/votacao" element={<Uservote />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registo" element={<Registro />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
