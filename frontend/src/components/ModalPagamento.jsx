export default function ModalPagamento({ valor, fechar, confirmar }) {

  const pix = "00020126360014BR.GOV.BCB.PIX0114SEU-PIX-AQUI...";

  function copiarPix() {
    navigator.clipboard.writeText(pix);
    alert("PIX copiado!");
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Pagamento via PIX</h3>

        <p><strong>Valor:</strong> R$ {valor}</p>

        {/* QR CODE */}
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${pix}`}
          alt="QR Code PIX"
        />

        <p>Ou copie o código:</p>

        <div className="pix">{pix}</div>

        <button className="btn" onClick={copiarPix}>
          Copiar PIX
        </button>

        <br /><br />

        <button className="btn" onClick={confirmar}>
          Já paguei
        </button>

        <br /><br />

        <button onClick={fechar}>Fechar</button>
      </div>
    </div>
  );
}