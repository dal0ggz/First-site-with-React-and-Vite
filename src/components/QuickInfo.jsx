export default function QuickInfo() {
  return (
    <aside className="card sideCard">
      <div className="cardPad">
        <p className="title">🎉 Quick Info</p>

        <div className="kpi">
          <div className="box">
            <div className="n">1 Day</div>
            <div className="l">Live • DJ Set • Showcase</div>
          </div>
          <div className="box">
            <div className="n">2 Stage</div>
            <div className="l">Main + Underground</div>
          </div>
          <div className="box">
            <div className="n">Food Area</div>
            <div className="l">🍔🌯🥤 Opzioni veggie</div>
          </div>
          <div className="box">
            <div className="n">Merch</div>
            <div className="l">🧢 Tee • Poster • Stickers</div>
          </div>
        </div>

        <div className="divider"></div>

        <p className="title">📣 Annunci</p>
        <div className="list">
          <div className="item">
            <div className="ico">⚡</div>
            <div>
              <b>Early Bird</b><br />
              <span className="tiny">Sconti fino a esaurimento.</span>
            </div>
          </div>

          <div className="item">
            <div className="ico">🚌</div>
            <div>
              <b>Navetta</b><br />
              <span className="tiny">Da centro città → venue (orari sotto).</span>
            </div>
          </div>

          <div className="item">
            <div className="ico">🔊</div>
            <div>
              <b>Sound Check</b><br />
              <span className="tiny">Inizio live dalle 16:00.</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
