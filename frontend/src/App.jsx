import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import MeusPedidos from "./pages/MeusPedidos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/pedidos" element={<MeusPedidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;