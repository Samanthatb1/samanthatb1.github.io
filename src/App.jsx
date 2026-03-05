import { useState, useCallback } from "react";
import Header from "./components/Header";
import ExperienceGrid from "./components/ExperienceGrid";
import ExperienceModal from "./components/ExperienceModal";
import Bookshelf from "./components/Bookshelf";
import experiences from "./data/experiences";
import books from "./data/books";

export default function App() {
  const [selected, setSelected] = useState(null);

  const handleSelect = useCallback((exp) => {
    setSelected(exp);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <div className="app">
      <Header />
      <ExperienceGrid
        experiences={experiences}
        onSelect={handleSelect}
        selectedId={selected?.id ?? null}
      />
      <footer className="site-quote">
        <p className="site-quote__text">
          "it has always seemed to me that my existence consisted purely and exclusively of nothing but the most outrageous nonsense. as long as i can remember, every incident and every impulse of my existence has served only to perpetrate one episode after another of conspicuous nonsense, each completely outrageous in its nonsensicality."
        </p>
        <p className="site-quote__attribution">— thomas ligotti</p>
      </footer>
      <Bookshelf books={books} />
      {selected && (
        <ExperienceModal experience={selected} onClose={handleClose} />
      )}
    </div>
  );
}
