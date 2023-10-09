import React from 'react'
import myPhoto from '../images/myphoto.jpg';
import SkillList from './SkillList.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const wantedly = "https://theme.zdassets.com/theme_assets/650189/6d25a979173b46b210b08e3e42289b1bf3e12bdc.ico"

const prodfile = () => {
  return (

  <div className="row my-5">
    <div className="col-12">
      <div className="container">
        <div className="profile d-flex justify-content-center">
          <div className="my-name">
            <h2 className="my-name">Hello!<br />I AM KAISHU KAWANO</h2>
            <h4 className="job-title">Software developer</h4>
            <SkillList />
          </div>
          <div className="card photo-card">
            <div className="my-photo">
              <img src={myPhoto} alt="Kai" className="my-photo" />
            </div>
            <div className="text-center sns-links">
              <a href="https://www.linkedin.com/in/kaishu-kawano/" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="sns-link"/>
              </a>
              <a href="https://www.wantedly.com/id/kaishu" target='_blank' rel="noreferrer">
              <img src={wantedly} alt="wantedly" className="wantedly mx-3 mb-3"/>
              </a>
              <a href="https://github.com/kaishu-design" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faSquareGithub} style={{color: "#ff9d2e",}} className="sns-link" />
              </a>
            </div>
              <Link to="/AboutPage" className="text-center btn btn-outline-secondary text-decoration-none mx-5 mt-3">About me</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default prodfile
