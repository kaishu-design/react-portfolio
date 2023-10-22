import React from 'react'

const gallery = () => {
  return (
    <div class="container">
      <div className='d-flex justify-content-center'>
        <h4>Gallery</h4>
      </div>
      <div className='gallery-box'>

      <div className='genre d-flex justify-content-center'>
        <div className='card p-1 m-2'>nature</div>
        <div className='card p-1 m-2'>Landscape</div>
        <div className='card p-1 m-2'>Others</div>
      </div>
      <div className='photos-container d-flex justify-content-center'>
        photos
      </div>
      </div>
    </div>
  )
}

export default gallery
