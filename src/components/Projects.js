import React from 'react'
import '../images/le-make-img.png'

const myProjects = [
  {
    id:  1,
    name: "Photographer web page",
    description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
    img: 'le-make-img.png'
  },
  {
    id:  2,
    name: "LE'MAKE",
    description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
    img: 'le-make-img.png'
  },
  {
    id:  3,
    name: "Rent a chef",
    description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
    img: 'le-make-img.png'
  },
]

const center = 'd-flex justify-content-center'

const Projects = () => {
  return (

        <div className='container'>
          <div className={`${center} head-title`}>
            <h1>Projects</h1>
          </div>
          <div className={`${center} card title-line`}></div>

          <div className="row my-4">
                {myProjects.map(project => (
                  <div key={project.id} className={`${center} col-12 projrctCard`}>
                    <div classNmae='project-title'>
                      <h2>{project.name}</h2>
                      <div className='row projrct-info'>
                        <p className='col-8'>{project.description}</p>
                        <img src={project.img} alt={project.name} className='col-4' />
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
  )
}

export default Projects
