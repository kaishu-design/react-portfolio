import React from 'react'
import ProjectCards from './ProjectCards.js';

const center = 'd-flex justify-content-center'

const Projects = () => {
  return (
    <div className='container'>
      <div className={`${center} head-title`}>
        <h1 className="mt-5">Projects</h1>
      </div>
      <div className={`${center} card title-line`}></div>

      <ProjectCards />

    </div>
  )
}

export default Projects
