export default function Arrive() {
  return (
    <section id="come-arrivare" className="section">
      <div className="card">
        <div className="cardPad">
          <h2>📍 Come arrivare</h2>

          <div className="list">
            <div className="item">
              <div className="ico">🚶</div>
              <div>
                <b>A piedi:</b> dal centro ~20 min
              </div>
            </div>

            <div className="item">
              <div className="ico">🚌</div>
              <div>
                <b>Navetta:</b> ogni 30 min
              </div>
            </div>

            <div className="item">
              <div className="ico">🚗</div>
              <div>
                <b>Auto:</b> parcheggi vicini
              </div>
            </div>
          </div>

          <div className="note">
            🗺️ L’indirizzo definitivo verrà comunicato sui social.
          </div>
        </div>
      </div>

      <div className="card">
        <div className="cardPad">
          <h2>🗺️ Mappa</h2>

          <div className="mapBox">
            <iframe
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Cuneo&output=embed"
              title="Mappa Cuneo"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
