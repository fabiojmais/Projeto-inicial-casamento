export default function Galeria() {
  const fotos = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg"
  ];

  return (
    <section className="section">
      <h2>Momentos especiais</h2>

      <div className="gallery">
        {fotos.map((foto, index) => (
          <img key={index} src={foto} />
        ))}
      </div>
    </section>
  );
}