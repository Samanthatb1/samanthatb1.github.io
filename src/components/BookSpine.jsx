export default function BookSpine({ book }) {
  const {
    title,
    author,
    color,
    textColor,
    accentColor,
    width = 28,
    height = 175,
  } = book;

  return (
    <div
      className="book-spine"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        boxShadow: `inset -3px 0 6px rgba(0,0,0,0.25), inset 2px 0 4px rgba(255,255,255,0.08), 2px 0 8px rgba(0,0,0,0.3)`,
        border: `1px solid ${accentColor}22`,
      }}
    >
      <div className="book-tooltip" style={{ background: color, color: textColor, border: `1px solid ${accentColor}55` }}>
        <span className="book-tooltip__title">{title}</span>
        <span className="book-tooltip__author">{author}</span>
      </div>

      <div className="book-spine__band" style={{ backgroundColor: accentColor }} />

      <div className="book-spine__body">
        <span className="book-spine__title" style={{ color: textColor }}>
          {title}
        </span>
        <span className="book-spine__sep" style={{ color: `${accentColor}cc` }}>—</span>
        <span className="book-spine__author" style={{ color: `${textColor}99` }}>
          {author}
        </span>
      </div>

      <div className="book-spine__band" style={{ backgroundColor: accentColor }} />
    </div>
  );
}
