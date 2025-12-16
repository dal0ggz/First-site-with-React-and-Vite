import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickInfo from "./components/QuickInfo";
import Info from "./components/Info";
import Lineup from "./components/Lineup";
import Schedule from "./components/Schedule";
import Tickets from "./components/Tickets";
import Arrive from "./components/Arrive";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="wrap hero">
        <div className="heroGrid">
          <Hero />
          <QuickInfo />
        </div>

        <Info />
        <Lineup />
        <Schedule />
        <Tickets />
        <Arrive />
        <FAQ />

        <Footer />
      </main>
    </>
  );
}
