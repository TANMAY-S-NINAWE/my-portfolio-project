function SkillCard({ name, category, icon: Icon, level }) {
  return (
    <article className="card skill-card">
      <div className="skill-icon" aria-hidden="true">
        <Icon />
      </div>
      <div className="skill-body">
        <h4>{name}</h4>
        <p className="skill-category">{category}</p>
        {typeof level === 'number' && (
          <div
            className="skill-meter"
            role="progressbar"
            aria-label={`${name} proficiency`}
            aria-valuenow={level}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span style={{ width: `${level}%` }} />
          </div>
        )}
      </div>
    </article>
  );
}

export default SkillCard;
