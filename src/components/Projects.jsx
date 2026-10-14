import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" title="Projects" subtitle="A selection of things I have designed and built." />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
