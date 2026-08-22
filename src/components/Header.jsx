export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <span className="site-name">samantha grieco</span>
        <span className="nav-divider">|</span>
        <a
          href="mailto:samantha.ngrieco@gmail.com"
          className="nav-link"
        >
          samantha.ngrieco@gmail.com
        </a>
        <span className="nav-divider">|</span>
        <a
          href="https://sngrieco.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          substack
        </a>
        <span className="nav-divider">|</span>
        <a
          href="https://www.linkedin.com/in/sngrieco/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          linkedin
        </a>
      </nav>
      <p className="nav-subtitle">click each box to learn more</p>
    </header>
  );
}
