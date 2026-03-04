import ExperienceCard from "./ExperienceCard";

export default function ExperienceGrid({ experiences, onSelect, selectedId }) {
  const sorted = [...experiences].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <main className="experience-grid">
      {sorted.map((exp) => (
        <ExperienceCard
          key={exp.id}
          experience={exp}
          onClick={() => onSelect(exp)}
          dimmed={selectedId !== null && selectedId !== exp.id}
        />
      ))}
    </main>
  );
}
