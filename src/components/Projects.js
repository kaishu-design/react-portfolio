import React from 'react'
import '../images/le-make-img.png'
import { Link } from 'react-router-dom';

const leMake = {
  name: "LE'MAKE",
  description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
  techStack:"Rails, Sass, HTML, JavaScript, Figma, Github",
  img: 'le-make-img.png'
};

const RentAChef =  {
  name: "Rent a chef",
  description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
  techStack:"Rails, Sass, HTML, JavaScript, Figma, Github",
  img: 'le-make-img.png'
};

const Photographer =  {
  name: "Photographer web page",
  description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
  techStack:"React, CSS, HTML, Figma, Github",
  img: 'le-make-img.png'
};

const center = 'd-flex justify-content-center'

const Projects = () => {
  return (
    <div className='container'>
      <div className={`${center} head-title`}>
        <h1 className="mt-5">Projects</h1>
      </div>
      <div className={`${center} card title-line`}></div>

      <div className='project-cards'>
        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <img src={leMake.img} alt={leMake.name} className='col-4' />
            <div className='col-8 projrct-title'>
              <h2>{leMake.name}</h2>
              <p>{leMake.description}</p>
              <p>Tech stack : {leMake.techStack}</p>
                <Link to="/ProjectsPage" className="text-decoration-none float-end see-more-text">See more</Link>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-8 projrct-title'>
              <h2>{RentAChef.name}</h2>
              <p>{RentAChef.description}</p>
              <p>Tech stack : {RentAChef.techStack}</p>
            </div>
            <img src={RentAChef.img} alt={RentAChef.name} className='col-4' />
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <img src={Photographer.img} alt={Photographer.name} className='col-4' />
            <div className='col-8 projrct-title'>
              <h2>{Photographer.name}</h2>
              <p>{Photographer.description}</p>
              <p>Tech stack : {Photographer.techStack}</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Projects
