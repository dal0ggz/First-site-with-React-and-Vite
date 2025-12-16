export default function Hero() {
  return (
    <section className="card">
      <div className="cardPad">
        <div className="badgeRow">
          <span className="badge">📍 <strong>Cuneo</strong> • Pala Borcelle</span>
          <span className="badge">📅 <strong>10 Luglio</strong></span>
          <span className="badge">⏰ <strong>15:30 – 23:30</strong></span>
          <span className="badge">🎟️ <strong>All Ages</strong> (regole sotto)</span>
        </div>

        <h1>
          FESTIVAL <span className="gradText">MUSIC</span><br />
          HIP-HOP 🎤
        </h1>

        <p className="lead">
          Una giornata full vibe tra <b>live show</b>, artisti emergenti, ospiti speciali, food area 🌮 e after energy fino a sera.
          Porta la crew, alza il volume e vivi Cuneo come non l’hai mai vista. 💜
        </p>

        <div className="ctaRow">
          <a className="btn btnPrimary" href="#biglietti">🎟️ Prendi i biglietti</a>
          <a className="btn btnGhost" href="#lineup">🔥 Vedi la line up</a>
          <span className="tiny">*Evento inventato per esercizio grafico/scolastico.</span>
        </div>

        <div className="note">
          ✅ Consiglio: salva questa pagina e mostrala all’ingresso. <br />
          📸 Hashtag: <b>#CuneoHipHopFest</b> • IG/TikTok: <b>@reallygreatsite</b>
        </div>
      </div>
    </section>
  );
}
