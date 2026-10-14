import { FiExternalLink, FiGithub } from 'react-icons/fi';
import ImageWithFallback from './ImageWithFallback';

function ProjectCard({ title, description, image, technologies, github, liveDemo }) {
  return (
    <article className="card project-card">
      <div className="project-media">
        <ImageWithFallback src={image} alt={`${title} screenshot`} fallbackLabel={title} />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tag-list" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="badge">{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a href={github} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer" aria-label={`${title} source code on GitHub`}>
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <a href={liveDemo} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer" aria-label={`${title} live demo`}>
            <FiExternalLink aria-hidden="true" /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
