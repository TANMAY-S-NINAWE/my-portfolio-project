import { FiCheckCircle } from "react-icons/fi";
import { aboutData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function About() {
  const { biography, stats, highlights, technologies, currentFocus } =
    aboutData;

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          title="About me"
          subtitle="A bit about who I am and how I work."
        />

        <div className="about-grid">
          <div className="card about-bio">
            {biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="stats">
            {stats.map((stat) => (
              <div key={stat.id} className="card stat">
                <dd className="gradient-text">{stat.value}</dd>
                <dt>{stat.label}</dt>
              </div>
            ))}
          </dl>

          <div className="card">
            <h3>Career highlights</h3>
            <ul className="check-list">
              {highlights.map((item) => (
                <li key={item}>
                  <FiCheckCircle aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Technologies I work with</h3>
            <ul className="tag-list">
              {technologies.map((tech) => (
                <li key={tech} className="badge">
                  {tech}
                </li>
              ))}
            </ul>
            <h3 className="mt">Current focus</h3>
            <ul className="tag-list">
              {currentFocus.map((item) => (
                <li key={item} className="badge badge-outline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
