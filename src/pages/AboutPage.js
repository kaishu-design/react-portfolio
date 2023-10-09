import React from 'react'
import resume from '../pdf/20230929_KaishuKawano_Resume.pdf'

const Portfolio = () => {
  return (
    <div>About me
    <a href={resume} download className="download-btn">button</a>
    </div>
  )
}

export default Portfolio
