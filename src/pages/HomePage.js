import React from 'react';
import '../images/myphoto.jpg';
import Profile from '../components/Profile.js';
import Projects from '../components/Projects.js';

const HomePage = () => {
  return (
  <div className="row my-5">
    <div className="col-12">
      <Profile />

      <Projects />
    </div>
  </div>
  );
}

export default HomePage;
