
import React from "react";
import { useParams, Link } from "react-router-dom";

const productos = {
  "guitarras-electricas": {
    nombre: "Guitarras eléctricas",
    precio: "$1.250.000",
    descripcion: "Guitarras eléctricas ideales para rock, pop y diferentes estilos musicales.",
    imagen: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=900"
  },
  "guitarras-acusticas": {
    nombre: "Guitarras acústicas",
    precio: "$650.000",
    descripcion: "Guitarras acústicas con un sonido cálido y natural.",
    imagen: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=900"
  },
  "pianos-teclados": {
    nombre: "Pianos y teclados",
    precio: "$1.800.000",
    descripcion: "Teclados musicales para principiantes y músicos experimentados.",
    imagen: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900"
  },
  "baterias": {
    nombre: "Baterías",
    precio: "$2.300.000",
    descripcion: "Baterías para crear ritmos y acompañar tus presentaciones.",
    imagen: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=900"
  },
  "bajos-electricos": {
    nombre: "Bajos eléctricos",
    precio: "$1.100.000",
    descripcion: "Bajos eléctricos para darle profundidad a tu música.",
    imagen: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=900"
  },
  "audifonos": {
    nombre: "Audífonos",
    precio: "$250.000",
    descripcion: "Audífonos para disfrutar cada detalle de tu música.",
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900"
  },
  "microfonos": {
    nombre: "Micrófonos",
    precio: "$350.000",
    descripcion: "Micrófonos para grabación, voces y presentaciones.",
    imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=900"
  },
  "cuerdas": {
    nombre: "Cuerdas",
    precio: "$45.000",
    descripcion: "Cuerdas para mantener tus instrumentos siempre listos.",
    imagen: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=900"
  },
  "equipos-sonido": {
    nombre: "Equipos de sonido",
    precio: "$950.000",
    descripcion: "Equipos para complementar tus presentaciones musicales.",
    imagen: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=900"
  }
};

function ProductoDetalle() {
  const { id } = useParams();
  const producto = productos[id];

  if (!producto) {
    return (
      <main className="pagina-tienda">
        <h1>Producto no encontrado</h1>
        <Link to="/instrumentos">Volver a la tienda</Link>
      </main>
    );
  }

  return (
    <main className="pagina-tienda">
      <section className="detalle-producto">
        <img src={producto.imagen} alt={producto.nombre} />

        <div className="detalle-informacion">
          <span className="etiqueta-tienda">SONIC WAVE STORE</span>
          <h1>{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <h2>{producto.precio} COP</h2>

          <p className="disponibilidad">Disponible para consultar</p>

          <Link
  to={
    ["audifonos", "microfonos", "cuerdas", "equipos-sonido"].includes(id)
      ? "/accesorios"
      : "/instrumentos"
  }
  className="boton-inicio"
>
  Volver a la tienda
</Link>
        </div>
      </section>
    </main>
  );
}

export default ProductoDetalle;
