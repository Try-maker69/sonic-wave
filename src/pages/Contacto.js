
import React from "react";

function Contacto() {
  return (
    <main className="pagina-tienda">
      <section className="encabezado-tienda">
        <span className="etiqueta-tienda">ESTAMOS PARA AYUDARTE</span>
        <h1>Hablemos de música</h1>
        <p>Estamos aquí para resolver tus dudas y ayudarte a encontrar lo que necesitas.</p>
      </section>

      <section className="contacto-contenedor">
        <div className="tarjeta-contacto">
          <h2>Correo electrónico</h2>
          <p>contacto@sonicwave.com</p>
        </div>

        <div className="tarjeta-contacto">
          <h2>Teléfono</h2>
          <p>300 000 0000</p>
        </div>

        <div className="tarjeta-contacto">
          <h2>Horario de atención</h2>
          <p>Lunes a sábado</p>
          <p>9:00 a. m. - 6:00 p. m.</p>
        </div>
      </section>
    </main>
  );
}

export default Contacto;
