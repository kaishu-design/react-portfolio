import React, { useState, useEffect } from 'react';
import ProjectCards from './ProjectCards.js';

const center = 'd-flex justify-content-center'

const Projects = () => {

    // difine the useStrate
  const [marginTop, setMarginTop] = useState('');
    // when innerWindow is over 1200, screen design changes
  useEffect(() => {
  const handleResize = () => {
    window.innerWidth >= 1200? setMarginTop('xl') : setMarginTop('lg');
  }
  // call handleResize function when the screen is resized.
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    <div className='container'>
      <div className={`${center} head-title`}>
        <h1 className={`${marginTop === 'xl' ? 'mt-5' : 'responsive-margin'}`}>Projects</h1>
      </div>
      <div className={`${center} card title-line`}></div>

      <ProjectCards />

    </div>
  )
}

export default Projects
