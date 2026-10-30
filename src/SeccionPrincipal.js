
import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">

      <h1>Bienvenidos a SONIC WAVE</h1>

      <p>
        Encuentra los mejores instrumentos musicales y accesorios
        para llevar tu pasión por la música a otro nivel.
      </p>

      <img
        src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1000"
        alt="Guitarra musical"
        className="imagen-destacada"
      />

      <br />

      <button
        className="boton-accion"
        onClick={() => setMostrarMensaje(!mostrarMensaje)}
      >
        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">
          ¡Felicidades! Tienes un 20% de descuento en tu primera compra.
        </p>
      )}

    </main>
  );
}

export default SeccionPrincipal;
