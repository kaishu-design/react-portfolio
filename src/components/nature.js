import React from 'react'
import one from '../images/gallery/P1015018.jpg'
import two from '../images/gallery/7A1522CF-39C9-48EE-82BF-50A5587CED0B.JPG'
import three from '../images/gallery/IMG_7575_Original.JPG'

const nature = () => {
  return (
    <div className='row d-flex justify-content-evenly'>
        <img src={one} alt="one" className='col-3 nature-photo' />
        <img src={two} alt="two" className='col-3 nature-photo' />
        <img src={three} alt="three" className='col-3 nature-photo' />
        <img src={one} alt="one" className='col-3 nature-photo' />
        <img src={two} alt="two" className='col-3 nature-photo' />
        <img src={three} alt="three" className='col-3 nature-photo' />
    </div>
  )
}

export default nature
