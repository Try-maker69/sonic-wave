
import React from "react";
import { Link } from "react-router-dom";

const instrumentos = [
  {
  id: "guitarras-electricas",
  nombre: "Guitarras eléctricas",
  descripcion: "Potencia tu sonido con guitarras diseñadas para cada estilo musical.",
  imagen: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=700"
},
  {
  id: "guitarras-acusticas",
  nombre: "Guitarras acústicas",
  descripcion: "Disfruta de un sonido natural y cálido en cada interpretación.",
  imagen: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=700"
},
  {
  id: "pianos-teclados",
  nombre: "Pianos y teclados",
  descripcion: "Explora nuevas melodías y crea composiciones increíbles.",
  imagen: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=700"
},
  {
  id: "baterias",
  nombre: "Baterías",
  descripcion: "Marca el ritmo con instrumentos de gran calidad.",
  imagen: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=700"
},
  {
  id: "bajos-electricos",
  nombre: "Bajos eléctricos",
  descripcion: "Dale profundidad y personalidad al sonido de tu banda.",
  imagen: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=700"
},
];

function Instrumentos() {
  return (
    <main className="pagina-tienda">
      <section className="encabezado-tienda">
        <span className="etiqueta-tienda">SONIC WAVE COLLECTION</span>
        <h1>Encuentra tu sonido</h1>
        <p>Descubre instrumentos diseñados para llevar tu música más lejos.</p>
      </section>

      <section className="catalogo-productos">
        {instrumentos.map((producto, index) => (
          <article className="tarjeta-producto" key={index}>
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="informacion-producto">
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <Link
  to={`/producto/${producto.id}`}
  className="boton-producto"
>
  Ver producto
</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Instrumentos;
