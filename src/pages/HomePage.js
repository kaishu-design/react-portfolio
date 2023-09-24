import React from 'react';
import '../images/myphoto.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="row my-5">
      <div className="col-12">
        <div className="container">
          <div id="about">
            <h2>Hello, I am Kaishu Kawano</h2>
            <img src="../images/myphoto.jpg" alt="Kai" className="my-photo" />
            <p>Software developer</p>
            <Link to="AboutPage">more about me</Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePage;
