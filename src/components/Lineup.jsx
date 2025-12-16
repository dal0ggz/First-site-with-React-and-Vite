const artists = [
  "Juliana Silva",
  "Ketut Susilo",
  "Kim Chun Hei",
  "Kimberly Nguyen",
  "Korina Villanueva",
  "Matt Zhang",
];

export default function Lineup() {
  return (
    <section id="lineup" className="section">
      <div className="card">
        <div className="cardPad">
          <h2>🔥 Line Up</h2>
          <div className="lineup">
            {artists.map((a, i) => (
              <span key={i} className="pill">🎤 {a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
