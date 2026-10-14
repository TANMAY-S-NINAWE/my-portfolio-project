import { useState } from 'react';

function ImageWithFallback({ src, alt, className = '', fallbackLabel = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <span aria-hidden="true">{fallbackLabel}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}

export default ImageWithFallback;
