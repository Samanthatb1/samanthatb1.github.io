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
          href="https://www.goodreads.com/user/show/107264502-sam"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          goodreads
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
    </header>
  );
}
