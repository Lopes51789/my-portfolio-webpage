import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#section1">About</a></li>
        <li><a href="#section2">Experience</a></li>
        <li><a href="#section3">Projects</a></li>
        <li><a href="#section4">Certificates</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
