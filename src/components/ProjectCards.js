import React, { useRef, useEffect } from 'react'
import lemake from '../images/le-make-img.png'
import rentChefHome from '../images/top_page.png'
import rentChefList from '../images/list.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const leMake = {
  name: "LE'MAKE",
  description:
  "This app provides tailored recipes based on your current ingredient inventory, available time, and the number of people you intend to cook for.\n" +
  "This was developed using speech recognition and ChatGPT technology.",
  techStack:
  "Team Collaboration: Worked with a team of three members remotely.\n" +
  "Framework: Ruby on Rails\n" +
  "Languages: HTML, Sass, Ruby, JavaScript\n" +
  "Design: Figma\n" +
  "Source Code Management: GitHub\n" +
  "Project Management: Trello\n" +
  "Collaboration: Slack\n" +
  "Computer: Mac",
  img: lemake
};

const RentAChef =  {
  name: "Rent a chef",
  description:
  "This app allows you to rent a chefs from various chef offers based on the location and cuisines.\n" +
  "As a user, you can browse the chef offers using search box, make a booking and check your booking details.\n" +
  "As a chef, you can create and update the offers and check your booking.",
  techStack:
  "Team Collaboration: Worked with a team of three members remotely.\n" +
  "Framework: Ruby on Rails\n" +
  "Languages: HTML, Sass, Ruby, JavaScript\n" +
  "Design: Figma\n" +
  "Source Code Management: GitHub\n" +
  "Project Management: Trello\n" +
  "Collaboration: Slack\n" +
  "Computer: Mac",
  img1: rentChefHome,
  img2: rentChefList,

};

const Photographer =  {
  name: "Photographer web page",
  description:
  "The most crucial aspect of this project is the design that matches with the photographer's vision. I create the design based on the photographer's initial concept, and we collaborate on refining our ideas together \n" +
  "I am wroking on this project right now and the page will be released on public soon.",
  techStack:
  "Type of work: Freelance\n" +
  "Framework: React\n" +
  "Languages: HTML, Sass, JavaScript\n" +
  "Design: Figma\n" +
  "Source Code Management: GitHub\n" +
  "Collaboration: in person\n" +
  "Computer: Mac",
};

const ProjectCards = () => {
  return (
    <div className='project-cards-container'>

        <div className="project-card row card my-4">
          <div className="mb-2">
            <h2  className="text-center">{leMake.name}</h2>
          </div>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} xl={5}>
                <div className='text-center'>
                    <img src={leMake.img} alt={leMake.name} className='lemake-image' />
                </div>
              </Col>
              <Col xs={12} xl={7}>
                <div className='projrct-info fs-5'>
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
                      <Link to="https://github.com/HoraceLChen/LEMAKE" className="btn btn-outline-secondary text-decoration-none ms-3"  target='_blank' rel="noreferrer">See Code</Link>
                      <Link to="/Project" className="btn btn-outline-secondary text-decoration-none ms-3">See tutorial</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="project-card row card my-4">
          <div className="mb-2">
            <h2  className="text-center">{RentAChef.name}</h2>
          </div>
          <div className='row'>
            <div className='d-flex justify-content-center mt-2'>
              <img src={RentAChef.img1} alt={RentAChef.name} className='mx-3 rentChef-image' />
              <img src={RentAChef.img2} alt={RentAChef.name} className='mx-3 rentChef-image' />
            </div>
            <div className='col-12 projrct-info fs-5 p-5 pb-0'>
              <div className='mb-3 projrct-desc'>
                {RentAChef.description.split('\n').map((line, index) => (
                  <p key={index} className="m-0">{line}</p>
                ))}
              </div>
              <div className='mb-3 projrct-techStack'>
                {RentAChef.techStack.split('\n').map((line, index) => (
                  <p key={index} className="m-0">{line}</p>
                ))}
              </div>
              <div className="d-flex justify-content-end">
                  <Link to="https://github.com/HoraceLChen/GOOD-CHEF" className="btn btn-outline-secondary text-decoration-none ms-3"  target='_blank' rel="noreferrer">See code</Link>
              </div>
            </div>
            <div className='col-12 text-center'>
            </div>
          </div>
        </div>

      </div>

  )
}

export default ProjectCards
