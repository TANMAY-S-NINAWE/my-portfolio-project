import { socialLinks } from '../data/portfolioData';

function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`} aria-label="Social links">
      {socialLinks.map(({ id, label, url, icon: Icon }) => {
        const isExternal = url.startsWith('http');
        return (
          <li key={id}>
            <a
              href={url}
              aria-label={label}
              title={label}
              {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
