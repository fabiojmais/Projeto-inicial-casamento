import "../styles/global.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Aline & Noivo</h1>
        <p>Vamos celebrar nosso amor 💍</p>

        <button
          className="hero-btn"
          onClick={() =>
            document
              .getElementById("presentes")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Ver lista de presentes
        </button>
      </div>
    </section>
  );
}