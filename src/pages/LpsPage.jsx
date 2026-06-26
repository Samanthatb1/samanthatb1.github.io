import lpsImages from "../data/lpsImages";

export default function LpsPage() {
  return (
    <div className="app">
      <header className="site-header">
        <nav className="site-nav">
          <a href="/" className="nav-link site-name">
            lps
          </a>
        </nav>
      </header>
      <main className="lps-grid">
        {lpsImages.map(({ src }) => (
          <div key={src} className="lps-grid__cell">
            <img
              src={src}
              alt=""
              className="lps-grid__image"
              loading="lazy"
            />
          </div>
        ))}
      </main>
    </div>
  );
}
