export default function Schedule() {
  return (
    <section id="orari" className="section">
      <div className="card">
        <div className="cardPad">
          <h2>🕒 Orari & Programma</h2>

          <div className="schedule">
            <div className="row">
              <div className="time">15:30</div>
              <div>
                <b>Gates Open</b>
                <div className="tiny">Controlli + warm up</div>
              </div>
              <div className="stage">ENTRY</div>
            </div>

            <div className="row">
              <div className="time">17:30</div>
              <div>
                <b>Showcase</b>
                <div className="tiny">Artisti emergenti</div>
              </div>
              <div className="stage">UNDER</div>
            </div>

            <div className="row">
              <div className="time">20:30</div>
              <div>
                <b>Special Guest</b>
                <div className="tiny">Set sorpresa</div>
              </div>
              <div className="stage">MAIN</div>
            </div>

            <div className="row">
              <div className="time">23:30</div>
              <div>
                <b>End</b>
                <div className="tiny">Ultime navette</div>
              </div>
              <div className="stage">EXIT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
