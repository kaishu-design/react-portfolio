import React from 'react'
import Introduce from '../components/Introduce.js';
import Gallery from '../components/Gallery.js';
// import { useMediaQuery } from 'react-responsive'

const Portfolio = () => {
  return (
    <div className='container'>
        <Introduce/>
        <Gallery/>
    </div>
  )
}

export default Portfolio
