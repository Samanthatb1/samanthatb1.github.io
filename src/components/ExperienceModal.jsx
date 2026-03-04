import { useEffect } from "react";

const URL_SPLIT_REGEX = /(https?:\/\/[^\s]+)/g;
const URL_TEST_REGEX = /^https?:\/\/[^\s]+$/;

function renderWithLinks(text) {
  return text.split(URL_SPLIT_REGEX).map((part, i) =>
    URL_TEST_REGEX.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="modal__link">
        {part}
      </a>
    ) : (
      part
    )
  );
}

export default function ExperienceModal({ experience, onClose }) {
  const { title, dateLabel, description, images } = experience;

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="modal__meta">
          <span className="modal__title">{title}</span>
          <span className="modal__date">{dateLabel}</span>
        </div>

        {description && (
          <p className="modal__description">
            {renderWithLinks(description)}
          </p>
        )}

        {images && images.length > 0 && (
          <div className="modal__images">
            {images.map((src, i) =>
              src ? (
                <img
                  key={i}
                  src={src}
                  alt={`${title} image ${i + 1}`}
                  className="modal__extra-image"
                />
              ) : (
                <div key={i} className="modal__extra-image modal__image-placeholder" />
              )
            )}
          </div>
        )}

        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>
    </div>
  );
}
