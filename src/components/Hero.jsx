export default function Hero() {
  return (
    <section className="card heroCard">
      <div className="cardPad">
        <div className="badgeRow">
          <span className="badge">📍 <strong>Cuneo</strong> • Pala Borcelle</span>
          <span className="badge">📅 <strong>10 Luglio</strong></span>
          <span className="badge">⏰ <strong>15:30 – 23:30</strong></span>
          <span className="badge">🎟️ <strong>All Ages</strong> (vedi regole)</span>
        </div>

        <div className="eyebrow">Nuova veste 2025 · format open-air</div>

        <h1>
          Cuneo <span className="gradText">Block Party</span> <br />
          Hip-Hop Weekender
        </h1>

        <p className="lead">
          Un layout tutto nuovo: dj set e showcase distribuiti tra spazi outdoor, installazioni light e food court artigianale.
          Porta la crew, scopri nuove facce e vivi la città come un playground creativo.
        </p>

        <div className="ctaRow">
          <a className="btn btnPrimary" href="#biglietti">🎟️ Prenota adesso</a>
          <a className="btn btnGhost" href="#lineup">🔥 Scopri gli ospiti</a>
          <span className="tiny">Evento dimostrativo • mockup grafico</span>
        </div>

        <div className="heroMeta">
          <div className="metaBox">
            <div className="n">2 stage incrociati</div>
            <div className="l">Main plaza + tunnel club</div>
          </div>
          <div className="metaBox">
            <div className="n">Food market</div>
            <div className="l">Cucina locale + opzioni veggie</div>
          </div>
          <div className="metaBox">
            <div className="n">Art corner</div>
            <div className="l">Live painting e merch in limited</div>
          </div>
        </div>

        <div className="note">
          🌤️ Ingresso dalle 15:30 con badge digitale. <br />
          🔗 Hashtag ufficiale: <b>#CuneoBlockParty</b> • IG/TikTok: <b>@reallygreatsite</b>
        </div>
      </div>
    </section>
  );
}
