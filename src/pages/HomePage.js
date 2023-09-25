import React from 'react';
import '../images/myphoto.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="row my-5">
      <div className="col-12">
        <div className="container">
          <div className="d-flex justify-content-around">
            <div>
              <h2>Hello!<br />I'M KAISHU KAWANO</h2>
              <h4 className="mt-3" >Software engineer</h4>
            </div>
              <img src="../images/myphoto.jpg" alt="Kai" className="my-photo" />
          </div>
          <div className="skills">
            <p>HTML, CSS, Sass, Ruby, Rails,React, Javascript, SQL, Figma,Github,Project management</p>
          </div>
          <div>
          <button className="btn btn-outline-secondary float-end btn-about-me">
            <Link to="AboutPage" className="btn-about-me-text">more about me</Link>
          </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePage;
