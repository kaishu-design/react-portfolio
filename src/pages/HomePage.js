import React from 'react';
import '../images/myphoto.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="row my-5">
      <div className="col-12">
        <div className="container">
          <div className="frofile d-flex justify-content-around">
            <div className="my-name">
              <h2 className="text-center">Hello! I AM KAISHU KAWANO</h2>
              <h4 className="text-center mt-3">Software developer</h4>
            </div>
            <div className="my-photo">
              <img src="../images/myphoto.jpg" alt="Kai" className="my-photo" />
            </div>
          </div>
          <div className="skills">
            <p>HTML, CSS, Javascript, React, Ruby on Rails, SQL, Figma, Github, Project management</p>
            <div className="btn btn-outline-secondary see-more">
              <Link to="AboutPage" className="text-decoration-none see-more-text">more about me</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePage;
