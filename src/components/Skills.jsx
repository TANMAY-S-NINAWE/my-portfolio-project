import { skillCategories } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" title="Skills" subtitle="The languages, frameworks, and tools I use every day." />

        {skillCategories.map((category) => (
          <div key={category.id} className="skill-group">
            <h3>{category.title}</h3>
            <div className="skill-grid">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} category={category.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
