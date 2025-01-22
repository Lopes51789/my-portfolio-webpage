import React from 'react';
import './sociallinks.css';
import GitHubLogo from '../../../components/images/github.png';
import LinkedInLogo from '../../../components/images/linkedin.png';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://linkedin.com/in/gabriellopescarvalho" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInLogo} alt="LinkedIn" />
      </a>
      <a className ="social-link" href="https://github.com/Lopes51789" target="_blank" rel="noopener noreferrer">
        <img src={GitHubLogo} alt="GitHub" />
      </a>
    </div>
  );
}

export default SocialLinks;
