import React from 'react';
import './App.css';
import Navbar from './components/toolss/navbar/navbar.js';
import SocialLinks from './components/toolss/sociallinks/sociallinks.js';
import profilePic from './components/images/photo1.jpg';
import backgroundVideo from './components/images/video3.mp4';
import Subtitles from './components/toolss/subtitles/subtitles.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="content">
          <img className="profile-pic" src={profilePic} alt="Gabriel Lopes Carvalho" />
          <h1>Gabriel Lopes Carvalho</h1>
          <Subtitles />
        </div>
      </div>

    <div className="footer">
    <SocialLinks />
      <p>&copy; 2023 Gabriel Lopes Carvalho. All rights reserved.</p>
    </div>
    </div>
  );
}

export default App;