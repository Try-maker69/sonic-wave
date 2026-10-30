import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Menu";
import SeccionPrincipal from "./SeccionPrincipal";
import Instrumentos from "./pages/Instrumentos";
import Accesorios from "./pages/Accesorios";
import Contacto from "./pages/Contacto";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="contenedor-app">
        <Menu />

        <Routes>
          <Route path="/" element={<SeccionPrincipal />} />
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

