import React from 'react';
import './sociallinks.css';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="[https://github.com/Lopes51789]" target="_blank" rel="noopener noreferrer">
        <img src="[path-to-github-icon.png]" alt="GitHub" />
      </a>
      <a href="[https://linkedin.com/in/gabriellopescarvalho]" target="_blank" rel="noopener noreferrer">
        <img src="[path-to-linkedin-icon.png]" alt="LinkedIn" />
      </a>
      <a href="[mailto:your-email@example.com]" target="_blank" rel="noopener noreferrer">
        <img src="[path-to-email-icon.png]" alt="Email" />
      </a>
    </div>
  );
}

export default SocialLinks;
