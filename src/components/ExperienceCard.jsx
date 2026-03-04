export default function ExperienceCard({ experience, onClick, dimmed }) {
  const { title, dateLabel, headerImage } = experience;

  return (
    <button
      className={`experience-card ${dimmed ? "experience-card--dimmed" : ""}`}
      onClick={onClick}
      aria-label={`View ${title}`}
    >
      <div className="experience-card__image-wrapper">
        {headerImage ? (
          <img
            src={headerImage}
            alt={title}
            className="experience-card__image"
          />
        ) : (
          <div className="experience-card__placeholder" />
        )}
      </div>
      <div className="experience-card__meta">
        <span className="experience-card__title">{title}</span>
        <span className="experience-card__date">{dateLabel}</span>
      </div>
    </button>
  );
}
