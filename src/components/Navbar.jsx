import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { navItems, personalInfo } from '../data/portfolioData';
import useActiveSection from '../hooks/useActiveSection';
import MobileMenu from './MobileMenu';

const sectionIds = navItems.map((item) => item.id);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled || isMenuOpen ? 'navbar-solid' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="logo" onClick={closeMenu}>
          {personalInfo.logoText}
        </a>

        <nav aria-label="Primary" className="nav-desktop">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeId === item.id ? 'active' : ''}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={personalInfo.resumeUrl} download className="btn btn-primary btn-sm nav-resume">
          <FiDownload aria-hidden="true" /> Resume
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <MobileMenu
          id="mobile-menu"
          items={navItems}
          activeId={activeId}
          resumeUrl={personalInfo.resumeUrl}
          onNavigate={closeMenu}
        />
      )}
    </header>
  );
}

export default Navbar;
