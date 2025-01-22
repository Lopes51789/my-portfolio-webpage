import React from 'react';
import './navbar.css';
import About from '../about/about';
import Experience from '../experience/experience';
import Projects from '../projects/projects';
import Certificates from '../certificates/certificates';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#" onClick={() => About()}>About</a></li>
        <li><a href="#" onClick={() => Experience()}>Experience</a></li>
        <li><a href="#" onClick={() => Projects()}>Projects</a></li>
        <li><a href="#" onClick={() => Certificates()}>Certificates</a></li>
      </ul>
    </nav>

    
  );
}

export default Navbar;
