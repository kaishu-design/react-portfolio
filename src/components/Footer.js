import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const wantedly = "https://theme.zdassets.com/theme_assets/650189/6d25a979173b46b210b08e3e42289b1bf3e12bdc.ico"

const footer = () => {
  return (
    <nav className="navbar navbar-expand-lg header-back">
      <div className="footer">
        <div className="collapse navbar-collapse d-flex justify-content-evenly px-5" id="navbarNav">
          <div>
            <p>Kaishu Kawano</p>
            <p>Email : kaishu0520@gmail.com</p>
          </div>
          <div className="text-center footer-sns-links">
              <a href="https://www.linkedin.com/in/kaishu-kawano/" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="footer-sns-link"/>
            </a>
              <a href="https://www.wantedly.com/id/kaishu" target='_blank' rel="noreferrer">
              <img src={wantedly} alt="wantedly" className="footer-wantedly mx-3 mb-2"/>
            </a>
              <a href="https://github.com/kaishu-design" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faSquareGithub} style={{color: "#ff9d2e",}} className="footer-sns-link" />
            </a>
          </div>

          <div >
          <ul className="navbar-nav">
            <li className="nav-item fs-6">
              <Link to="/" className="text-decoration-none text-link">Home</Link>
            </li>
            <li className="nav-item mx-3 fs-6">
              <Link to="/Project" className="text-decoration-none text-link">Project</Link>
            </li>
            <li className="nav-item fs-6">
              <Link to="/About"  className="text-decoration-none text-link">About</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default footer
