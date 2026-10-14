import { FiDownload } from 'react-icons/fi';
import { achievements, education, personalInfo } from '../data/portfolioData';
// import { achievements, education, experience, personalInfo } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Timeline from './Timeline';

function Resume() {
  return (
    <section id="resume" className="section section-alt" aria-labelledby="resume-title">
      <div className="container">
        <SectionHeading id="resume-title" title="Resume" subtitle="My education, work history, and recognition." />

        <div className="resume-grid">
          {/* <div>
            <h3 className="resume-col-title">Experience</h3>
            <Timeline items={experience} label="Work experience" />
          </div> */}
          <div>
            <h3 className="resume-col-title">Education</h3>
            <Timeline items={education} label="Education" />
          </div>
        </div>

        <h3 className="resume-col-title achievements-title">Achievements</h3>
        <div className="achievement-grid">
          {achievements.map((group) => (
            <div key={group.id} className="card">
              <h4>{group.category}</h4>
              <ul className="achievement-list">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <span className="achievement-year">{item.year}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="resume-cta">
          <a href={personalInfo.resumeUrl} download className="btn btn-primary btn-lg">
            <FiDownload aria-hidden="true" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
