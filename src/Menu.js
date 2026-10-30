
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <Link to="/" className="logo">
        SONIC WAVE
      </Link>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/instrumentos">Instrumentos</Link></li>
        <li><Link to="/accesorios">Accesorios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
