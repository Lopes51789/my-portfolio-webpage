import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
