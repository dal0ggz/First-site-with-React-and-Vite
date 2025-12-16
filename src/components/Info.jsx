export default function Info() {
  return (
    <section id="info" className="section">
      <div className="card">
        <div className="cardPad">
          <h2>ℹ️ Informazioni evento</h2>
          <p>
            <b>Cuneo Hip-Hop Festival</b> è un evento urbano con live e showcase,
            pensato per una giornata intensa: sound, luci e crowd energy.
          </p>

          <div className="list">
            <div className="item">
              <div className="ico">📅</div>
              <div><b>Data:</b> 10 Luglio</div>
            </div>
            <div className="item">
              <div className="ico">⏰</div>
              <div><b>Orario:</b> 15:30 – 23:30</div>
            </div>
            <div className="item">
              <div className="ico">📍</div>
              <div><b>Location:</b> Pala Borcelle, Cuneo</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="cardPad">
          <h2>🎒 Cosa portare</h2>

          <div className="grid3">
            <div className="item">
              <div className="ico">🪪</div>
              <div><b>Documento</b></div>
            </div>
            <div className="item">
              <div className="ico">💧</div>
              <div><b>Acqua</b></div>
            </div>
            <div className="item">
              <div className="ico">🧢</div>
              <div><b>Outfit comodo</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
