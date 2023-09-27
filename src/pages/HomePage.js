import React from 'react';
import '../images/myphoto.jpg';
import Profile from '../components/Profile.js';
import Projects from '../components/Projects.js';

const HomePage = () => {
  return (
    <div>
      <Profile />

      <Projects />
    </div>
  );
}

export default HomePage;
