function Timeline({ items, label }) {
  return (
    <ol className="timeline" aria-label={label}>
      {items.map((item) => (
        <li key={item.id} className="timeline-item">
          <span className="timeline-dot" aria-hidden="true" />
          <div className="card">
            <p className="timeline-period">{item.period}</p>
            <h4>{item.title}</h4>
            <p className="timeline-sub">{item.subtitle}</p>
            {item.description && <p>{item.description}</p>}
            {item.points && (
              <ul className="bullet-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
