
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function SeccionPrincipal() {
  const categorias = [
    {
      nombre: "Guitarras",
      imagen: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=700",
      enlace: "/instrumentos"
    },
    {
      nombre: "Pianos y teclados",
      imagen: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=700",
      enlace: "/instrumentos"
    },
    {
      nombre: "Baterías",
      imagen: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=700",
      enlace: "/instrumentos"
    },
    {
      nombre: "Accesorios",
      imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
      enlace: "/accesorios"
    }
  ];

  return (
    <main className="inicio">

      <section className="portada-inicio">
        <div className="contenido-portada">
          <span className="subtitulo-portada">
            BIENVENIDO A SONIC WAVE
          </span>

          <h1>
            EL SONIDO QUE <br />
            <span>TE DEFINE</span>
          </h1>

          <p>
            Encuentra los instrumentos y accesorios ideales
            para expresar tu talento y llevar tu música
            a otro nivel.
          </p>

          <div className="botones-portada">
            <Link to="/instrumentos" className="boton-inicio">
              Explorar instrumentos
            </Link>

            <Link to="/accesorios" className="boton-secundario">
              Ver accesorios
            </Link>
          </div>
        </div>
      </section>

      <section className="seccion-categorias">
        <div className="titulo-seccion">
          <span>EXPLORA NUESTRA TIENDA</span>
          <h2>Encuentra tu instrumento</h2>
          <p>Todo lo que necesitas para crear tu propio sonido.</p>
        </div>

        <div className="rejilla-categorias">
          {categorias.map((categoria, index) => (
            <Link
              to={categoria.enlace}
              className="tarjeta-categoria"
              key={index}
            >
              <img src={categoria.imagen} alt={categoria.nombre} />
              <div className="nombre-categoria">
                <h3>{categoria.nombre}</h3>
                <span>Explorar →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="banner-promocion">
        <div>
          <span>SONIC WAVE EXCLUSIVE</span>
          <h2>LA MÚSICA NO TIENE LÍMITES</h2>
          <p>Descubre nuevas posibilidades para tu talento musical.</p>
          <Link to="/instrumentos" className="boton-inicio">
            Descubrir colección
          </Link>
        </div>
      </section>

      <section className="beneficios-inicio">
        <div>
          <h3>♪</h3>
          <h4>Calidad musical</h4>
          <p>Instrumentos para acompañar tu talento.</p>
        </div>

        <div>
          <h3>♫</h3>
          <h4>Gran variedad</h4>
          <p>Encuentra diferentes opciones para ti.</p>
        </div>

        <div>
          <h3>★</h3>
          <h4>Atención personalizada</h4>
          <p>Estamos aquí para ayudarte.</p>
        </div>
      </section>

    </main>
  );
}

export default SeccionPrincipal;
