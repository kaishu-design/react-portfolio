import React, { useState, useEffect } from 'react';
import myPhoto from '../images/myphoto.jpg';
import SkillList from './SkillList.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../pdf/20230929_KaishuKawano_Resume.pdf'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const wantedly = "https://theme.zdassets.com/theme_assets/650189/6d25a979173b46b210b08e3e42289b1bf3e12bdc.ico"

const Prodfile = () => {
    // difine the useStrate
  const [screenSize, setScreenSize] = useState('');
    // when innerWindow is over 1200, screen design changes
  useEffect(() => {
  const handleResize = () => {
    window.innerWidth >= 1200? setScreenSize('xl') : setScreenSize('lg');
  }
  // call handleResize function when the screen is resized.
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (

  <div className="row my-5">
    <div className="col-12">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} xl={7} className="order-2 order-xl-1">
            <div className='profile-name d-flex justify-content-center'>
              <div className="my-name">
                <h2 className="my-name">Hello!<br />I AM KAISHU KAWANO</h2>
                <h4 className="job-title">Software developer</h4>
                <SkillList />
              </div>
            </div>
          </Col>

          <Col xs={12} xl={5} className="order-1 order-xl-2">
            <div className={`profile-photo d-flex justify-content-${screenSize === 'xl' ? 'start' : 'center'}`}>
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
                  <div className='d-flex justify-content-center mt-3'>
                    <a href={resume} download className="btn btn-outline-secondary text-decoration-none ms-2"><FontAwesomeIcon icon={faDownload} style={{color: "#6c757d",}}/>Resume</a>
                    <Link to="/About" className="btn btn-outline-secondary text-decoration-none ms-2">About me</Link>
                  </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
     </div>
   </div>
  )
}

export default Prodfile
