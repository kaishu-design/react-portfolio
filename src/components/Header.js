import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item m-3">
          <Link to="/HomePage">Home</Link>
        </li>
        <li class="nav-item m-3">
          <Link to="/ProjectsPage">Projects</Link>
        </li>
        <li class="nav-item m-3">
          <Link to="/AboutPage">About</Link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
  );
}

export default header
