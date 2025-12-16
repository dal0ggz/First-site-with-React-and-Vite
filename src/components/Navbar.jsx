export default function Navbar() {
  return (
    <header className="topbar">
      <div className="wrap">
        <div className="brand">
          <div className="logo"></div>
          <div>
            <div className="title">Cuneo Block Party</div>
            <div className="tagline">Hip-Hop Weekender • live, arti visive e street food</div>
          </div>
        </div>

        <nav>
          <a href="#lineup">Line up</a>
          <a href="#biglietti">Biglietti</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
