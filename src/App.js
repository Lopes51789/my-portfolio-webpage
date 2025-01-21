import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import SocialLinks from './components/sociallinks.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero">
        <video className="background-video" autoPlay loop muted>
        <source src="/src/components/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        <div className="content">
        <img className="profile-pic" src="/src/components/thumbnail__52_3503.jpg" alt="Gabriel Lopes Carvalho" />
          <h1>Gabriel Lopes Carvalho</h1>
          <p>Software Developer/Data Analyst</p>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
