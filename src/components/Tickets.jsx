export default function Tickets() {
  return (
    <section id="biglietti" className="section">
      <div className="card">
        <div className="cardPad">
          <h2>🎟️ Biglietti</h2>

          <div className="grid3">
            <div className="item">
              <div className="ico">💜</div>
              <div>
                <b>Early Bird</b><br />
                <span className="tiny">€19,99</span>
              </div>
            </div>

            <div className="item">
              <div className="ico">🔥</div>
              <div>
                <b>Standard</b><br />
                <span className="tiny">€29,99</span>
              </div>
            </div>

            <div className="item">
              <div className="ico">👑</div>
              <div>
                <b>VIP</b><br />
                <span className="tiny">€59,99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
