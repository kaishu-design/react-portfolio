import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const footer = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="footer-back">
      <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item m-3">
              <Link to="https://www.linkedin.com/in/kaishu-kawano/" target='_blank'className="text-decoration-none text-link">Linked in</Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/ProjectsPage" className="text-decoration-none text-link">wantedly</Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/AboutPage"  className="text-decoration-none text-link">Git hub</Link>
            </li>
          </ul>
        </div>

        <div >
          <ul>
            <li style={{ listStyleType: 'none' }}>
              <Link to="/HomePage" className="text-decoration-none text-link">Home</Link>
            </li>
            <li  style={{ listStyleType: 'none' }}>
              <Link to="/ProjectsPage" className="text-decoration-none text-link">Projects</Link>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <Link to="/AboutPage"  className="text-decoration-none text-link">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default footer
