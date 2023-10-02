import React from 'react'
import '../images/le-make-img.png'

const leMake = {
  name: "LE'MAKE",
  description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
  img: 'le-make-img.png'
};

const RentAChef =  {
  name: "Rent a chef",
  description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
  img: 'le-make-img.png'
};

const Photographer =  {
  name: "Photographer web page",
  description: "An avatar, in the context of digital media and online communication, is a visual representation or image that is used to represent a person, user, or entity in a virtual or digital environment. Avatars are often used in various online platforms, social media networks, forums, video games, and virtual worlds. Here's a more detailed description of avatars:",
  img: 'le-make-img.png'
};

const center = 'd-flex justify-content-center'

const Projects = () => {
  return (
    <div className='container'>
      <div className={`${center} head-title`}>
        <h1>Projects</h1>
      </div>
      <div className={`${center} card title-line`}></div>

      <div className='project-card m-5'>
        <div className="le-make row my-4">
          <div className={`${center} col-12 projrct-title`}>
            <h2>{leMake.name}</h2>
          </div>
          <div className='row projrct-info'>
            <img src={leMake.img} alt={leMake.name} className='col-4' />
            <p className='col-8'>{leMake.description}</p>
          </div>
        </div>

        <div className="rent-chef row my-4">
          <div className={`${center} col-12 projrct-title`}>
            <h2>{RentAChef.name}</h2>
          </div>
          <div className='row projrct-info'>
            <p className='col-8'>{RentAChef.description}</p>
            <img src={RentAChef.img} alt={RentAChef.name} className='col-4' />
          </div>
        </div>

        <div className="photographer row my-4">
          <div className={`${center} col-12 projrct-title`}>
            <h2>{Photographer.name}</h2>
          </div>
          <div className='row projrct-info'>
            <img src={Photographer.img} alt={Photographer.name} className='col-4' />
            <p className='col-8'>{Photographer.description}</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Projects
