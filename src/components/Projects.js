import React from 'react'

const myProjects = [
  {
    id:  1,
    name: "Photographer web page",
    description: "web page"
  },
  {
    id:  2,
    name: "LE'MAKE",
    description: "Recipe app"
  },
  {
    id:  3,
    name: "Rent a chef",
    description: "Rent a chef"
  }
]

const Projects = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center head-title'>
        <h1>Projects</h1>
      </div>
      <div className='d-flex justify-content-center card title-line'></div>

      <div className="row my-5">
        <div className="col-12">
            {myProjects.map(project => (
              <div key={project.id} className="card">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
