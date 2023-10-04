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
        <div className="frofile d-flex justify-content-center">
          <div className="my-name">
            <h2 className="my-name">Hello!<br />I AM KAISHU KAWANO</h2>
            <h4 className="job-title">Software developer</h4>
            <SkillList />
          </div>
          <div className="card photo-card">
            <div className="my-photo">
              <img src={myPhoto} alt="Kai" className="my-photo" />
            </div>
            <div className="text-center sns-link">
              <a href="https://www.linkedin.com/in/kaishu-kawano/" >
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.wantedly.com/id/kaishu" >
              <img src={wantedly} alt="wantedly" className="wantedly m-2" />
              </a>
              <a href="https://github.com/kaishu-design" >
              <FontAwesomeIcon icon={faSquareGithub} style={{color: "#ff9d2e",}} />
              </a>
            </div>
              <Link to="/AboutPage" className="text-center btn btn-outline-secondary text-decoration-none see-more-text">more about me</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default prodfile
