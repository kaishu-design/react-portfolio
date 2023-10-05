import React from 'react'
import lemake from '../images/le-make-img.png'
import { Link } from 'react-router-dom';

const leMake = {
  name: "LE'MAKE",
  description:
  "This app provides tailored recipes based on your current ingredient inventory, available time, and the number of people you intend to cook for.\n" +
  "I involved this project with three Melborne members fully online.",
  techStack:
  "Framework: Ruby on Rails\n" +
  "Languages: HTML, Sass, Ruby, JavaScript\n" +
  "Design: Figma,\n" +
  "Source Code Management: GitHub\n" +
  "Project Management: Trello\n" +
  "Collaboration: Slack\n" +
  "Computer: Mac",
  img: lemake
};

const RentAChef =  {
  name: "Rent a chef",
  description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
  techStack:"Rails, Sass, HTML, JavaScript, Figma, Github",
  img: lemake
};

const Photographer =  {
  name: "Photographer web page",
  description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
  techStack:"React, CSS, HTML, Figma, Github",
  img: lemake
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
          <div className="mb-2">
            <h2  className="text-center">{leMake.name}</h2>
          </div>
          <div className='row'>
            <img src={leMake.img} alt={leMake.name} className='col-5 p-5' />
            <div className='col-7 projrct-info fs-5 p-5'>
              <div className='mb-3 projrct-desc'>
                {leMake.description.split('\n').map((line, index) => (
                  <p key={index} className="m-0">{line}</p>
                ))}
              </div>
              <div className='mb-3 projrct-techStack'>
                {leMake.techStack.split('\n').map((line, index) => (
                  <p key={index} className="m-0">{line}</p>
                ))}
              </div>
              <div className="d-flex justify-content-end">
                  <Link to="https://github.com/kaishu-design" className="btn btn-outline-secondary text-decoration-none ms-3">Code</Link>
                  <Link to="/ProjectsPage" className="btn btn-outline-secondary text-decoration-none ms-3">See more</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
        <div className="mb-2">
            <h2  className="text-center">{RentAChef.name}</h2>
          </div>
          <div className='row projrct-info'>
            <div className='col-8 projrct-title'>
              <p>{RentAChef.description}</p>
              <p>Tech stack : {RentAChef.techStack}</p>
            </div>
            <img src={RentAChef.img} alt={RentAChef.name} className='col-4' />
          </div>
        </div>

        <div className="project-card row card my-4">
        <div className="mb-2">
            <h2  className="text-center">{Photographer.name}</h2>
          </div>
          <div className='row projrct-info'>
            <img src={Photographer.img} alt={Photographer.name} className='col-4' />
            <div className='col-8 projrct-title'>
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
