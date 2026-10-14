import { navItems, personalInfo } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="logo">
            {personalInfo.logoText}
          </a>
          <p className="footer-desc">{personalInfo.shortBio}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
      <p className="container copyright">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
