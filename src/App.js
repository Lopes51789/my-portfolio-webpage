import React from 'react';
import './App.css';
import Navbar from './components/toolss/navbar/navbar.js';
import SocialLinks from './components/toolss/sociallinks/sociallinks.js';
import profilePic from './components/images/photo1.jpg';
import backgroundVideo from './components/images/video3.mp4';
import Subtitles from './components/toolss/subtitles/subtitles.js';
import About from './components/toolss/about/about.js';
import Experiences from './components/toolss/experience/experience.js';
import Projects from './components/toolss/projects/projects.js';
import Certificates from './components/toolss/certificates/certificates.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero">
        <div className='intro'>
          <video className="background-video" autoPlay loop muted playbackRate="0.5">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="content">
            <img className="profile-pic" src={profilePic} alt="Gabriel Lopes Carvalho" />
            <h1 className='name'>Gabriel Lopes Carvalho</h1>
            <Subtitles />
            <SocialLinks />
          </div>
        </div>

        

    </div>
      <div className="content2">
        <div className="about">
          <About />
        </div>
        
        <div className="experiences">
          <Experiences />
        </div>
        <div className="projects">
          <Projects />
        </div>
      </div>
      <div className="certificates">
          <Certificates />
      </div>
    
    </div>
  );
}

export default App;