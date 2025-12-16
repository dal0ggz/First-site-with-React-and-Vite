export default function Navbar() {
  return (
    <header className="topbar">
      <div className="wrap">
        <div className="brand">
          <div className="logo"></div>
          <div>
            <div style={{ fontSize: "15px", lineHeight: 1.1 }}>
              Cuneo <span className="gradText">Hip-Hop</span> Festival
            </div>
            <div style={{ fontSize: "12px", opacity: 0.7 }}>
              Official Info • 🎤🎧🔥
            </div>
          </div>
        </div>

        <nav>
          <a href="#lineup">Line Up</a>
          <a href="#biglietti">Biglietti</a>
        </nav>
      </div>
    </header>
  );
}
