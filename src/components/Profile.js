import React from 'react'
import myPhoto from '../images/myphoto.jpg';
import SkillList from './SkillList.js';
import { Link } from 'react-router-dom';

const prodfile = () => {
  return (

  <div className="row my-5">
  <div className="col-12">
    <div className="container">
      <div className="frofile d-flex justify-content-around">
        <div className="my-name">
          <h2 className="text-center">Hello! I AM KAISHU KAWANO</h2>
          <h4 className="text-center job-title">Software developer</h4>
          <SkillList />
        </div>
        <div className="my-photo">
          <img src={myPhoto} alt="Kai" className="my-photo" />
        </div>
      </div>
        <div className="see-more">
          <Link to="/AboutPage" className="text-decoration-none see-more-text">more about me</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default prodfile
