export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="card">
        <div className="cardPad">
          <h2>❓ FAQ</h2>

          <div className="list">
            <div className="item">
              <div className="ico">🎒</div>
              <div>
                <b>Zaini?</b><br />
                <span className="tiny">Sì, controlli all’ingresso.</span>
              </div>
            </div>

            <div className="item">
              <div className="ico">💳</div>
              <div>
                <b>Cash o carta?</b><br />
                <span className="tiny">Consigliata carta.</span>
              </div>
            </div>

            <div className="item">
              <div className="ico">📸</div>
              <div>
                <b>Video?</b><br />
                <span className="tiny">Sì, no attrezzatura pro.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
