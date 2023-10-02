import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const header = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid header-back">
    <Link to="/HomePage" className="text-decoration-none title-link">Portfolio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
      <ul className="navbar-nav tm-2">
        <li className="nav-item m-3">
          <Link to="/HomePage" className="text-decoration-none text-link">Home</Link>
        </li>
        <li className="nav-item m-3">
          <Link to="/ProjectsPage" className="text-decoration-none text-link">Projects</Link>
        </li>
        <li className="nav-item m-3">
          <Link to="/AboutPage"  className="text-decoration-none text-link">About</Link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
  );
}

export default header
