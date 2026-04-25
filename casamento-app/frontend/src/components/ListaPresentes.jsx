import { useState } from "react";
import ModalPagamento from "./ModalPagamento";

export default function ListaPresentes() {

  const [modal, setModal] = useState(false);
  const [valorAtual, setValorAtual] = useState(0);
  const [confirmados, setConfirmados] = useState([]);
  const [valorLivre, setValorLivre] = useState("");

  const presentes = [
    { nome: "Geladeira", valor: 2500 },
    { nome: "Fogão", valor: 1200 },
    { nome: "Micro-ondas", valor: 600 },
    { nome: "Máquina de lavar", valor: 1800 },
    { nome: "Cama", valor: 900 },
    { nome: "Colchão", valor: 800 },
    { nome: "Sofá", valor: 2000 },
    { nome: "Mesa de jantar", valor: 1500 },
    { nome: "TV", valor: 2200 },
    { nome: "Air fryer", valor: 400 },
    { nome: "Jogo de panelas", valor: 500 },
    { nome: "Talheres", valor: 200 },
    { nome: "Cafeteira", valor: 300 },
    { nome: "Guarda-roupa", valor: 1800 },
    { nome: "Ventilador", valor: 250 },
    { nome: "Ar-condicionado", valor: 2500 },
    { nome: "Lua de mel", valor: 3000 },
    { nome: "Decoração", valor: 700 },
    { nome: "Cortinas", valor: 400 },
    { nome: "Tapetes", valor: 350 }
  ];

  function abrirModal(valor) {
    setValorAtual(valor);
    setModal(true);
  }

  function confirmarPagamento() {
    setConfirmados([...confirmados, valorAtual]);
    setModal(false);
  }

  return (
    <section id="presentes" className="section">
      <h2>Lista de Presentes</h2>

      <div className="grid">
        {presentes.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.nome}</h3>
            <p className="price">R$ {item.valor}</p>

            {confirmados.includes(item.valor) ? (
              <p className="done">Presenteado</p>
            ) : (
              <button className="btn" onClick={() => abrirModal(item.valor)}>
                Presentear
              </button>
            )}
          </div>
        ))}
      </div>

      <br /><br />

      <h3>Contribuição livre</h3>

      <input
        type="number"
        placeholder="Digite o valor"
        value={valorLivre}
        onChange={(e) => setValorLivre(e.target.value)}
      />

      <br /><br />

      <button className="btn" onClick={() => abrirModal(valorLivre)}>
        Contribuir
      </button>

      {modal && (
        <ModalPagamento
          valor={valorAtual}
          fechar={() => setModal(false)}
          confirmar={confirmarPagamento}
        />
      )}
    </section>
  );
}