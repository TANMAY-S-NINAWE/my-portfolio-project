import { FiDownload } from 'react-icons/fi';

function MobileMenu({ id, items, activeId, resumeUrl, onNavigate }) {
  return (
    <nav id={id} className="mobile-menu" aria-label="Mobile navigation">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              className={activeId === item.id ? 'active' : ''}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a href={resumeUrl} download className="btn btn-primary" onClick={onNavigate}>
        <FiDownload aria-hidden="true" /> Resume
      </a>
    </nav>
  );
}

export default MobileMenu;
