import React from "react";
import { Link } from "react-router-dom";

const accesorios = [
  {
  id: "audifonos",
  nombre: "Audífonos",
  descripcion: "Escucha cada detalle con una experiencia de sonido envolvente.",
  imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
},
  {
  id: "microfonos",
  nombre: "Micrófonos",
  descripcion: "Captura voces e instrumentos con claridad y precisión.",
  imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=700"
},
  {
  id: "cuerdas",
  nombre: "Guitarras y cuerdas",
  descripcion: "Mantén tu instrumento listo para cada presentación.",
  imagen: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=700"
},
  {
  id: "equipos-sonido",
  nombre: "Equipos de sonido",
  descripcion: "Complementa tus presentaciones con equipos de calidad.",
  imagen: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=700"
}
];

function Accesorios() {
  return (
    <main className="pagina-tienda">
      <section className="encabezado-tienda">
        <span className="etiqueta-tienda">SONIC WAVE ACCESSORIES</span>
        <h1>Los detalles hacen la música</h1>
        <p>Encuentra los accesorios ideales para complementar tu pasión musical.</p>
      </section>

      <section className="catalogo-productos">
        {accesorios.map((producto, index) => (
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

export default Accesorios;
