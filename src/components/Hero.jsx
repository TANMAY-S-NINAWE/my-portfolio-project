import { FiArrowDown, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import ImageWithFallback from "./ImageWithFallback";
import SocialLinks from "./SocialLinks";

function Hero() {
  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-greeting">{personalInfo.greeting}</p>
          <h1 id="hero-title" className="hero-name gradient-text">
            {personalInfo.name}
          </h1>
          <p className="hero-role">{personalInfo.title}</p>
          <p className="hero-intro">{personalInfo.intro}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowDown aria-hidden="true" />
            </a>
            <a href={personalInfo.resumeUrl} download className="btn btn-ghost">
              <FiDownload aria-hidden="true" /> Download Resume
            </a>
          </div>

          <SocialLinks />
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <ImageWithFallback
              src={personalInfo.profileImage}
              alt={`Portrait of ${personalInfo.name}`}
              className="hero-photo"
              fallbackLabel={initials}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
