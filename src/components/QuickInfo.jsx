export default function QuickInfo() {
  return (
    <aside className="card sideCard">
      <div className="cardPad">
        <p className="title">Dashboard evento</p>

        <div className="kpi">
          <div className="box">
            <div className="n">1 Day pass</div>
            <div className="l">Live • DJ set • Showcase</div>
          </div>
          <div className="box">
            <div className="n">2 Stage</div>
            <div className="l">Main plaza + Tunnel</div>
          </div>
          <div className="box">
            <div className="n">Food Market</div>
            <div className="l">🍜 Bao, tacos, gelato</div>
          </div>
          <div className="box">
            <div className="n">Merch Hub</div>
            <div className="l">🧢 Tee • Poster • Stickers</div>
          </div>
        </div>

        <div className="divider"></div>

        <p className="title">Aggiornamenti rapidi</p>
        <div className="list">
          <div className="item">
            <div className="ico">⚡</div>
            <div>
              <b>Early Bird</b><br />
              <span className="tiny">Tariffe promo fino a esaurimento.</span>
            </div>
          </div>

          <div className="item">
            <div className="ico">🚌</div>
            <div>
              <b>Navetta</b><br />
              <span className="tiny">Loop dal centro città ogni 30 minuti.</span>
            </div>
          </div>

          <div className="item">
            <div className="ico">🎥</div>
            <div>
              <b>Content Zone</b><br />
              <span className="tiny">Area video e meet & greet dalle 17:00.</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
