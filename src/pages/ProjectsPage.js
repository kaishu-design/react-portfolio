import React from 'react'

const center = 'd-flex justify-content-center'

const stepone = 'step1'
const steptwo = 'step2'
const stepthree = 'step3'
const stepfour = 'step4'

const Project = () => {
  return (
    <div className='container'>
      <div className={`${center} head-title mt-5`}>
        <h1>leMake</h1>
      </div>
      <div className={`${center} card title-line mt-3`}></div>

      <div className='project-cards'>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <img src='le-make-img.png' alt='step1' className='col-4' />
            <div className='col-8 projrct-title'>
              <h2>STEP 1</h2>
              <p>{stepone}</p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <img src='le-make-img.png' alt='step1' className='col-4' />
            <div className='col-8 projrct-title'>
              <h2>STEP 2</h2>
              <p>{steptwo}</p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <img src='le-make-img.png' alt='step1' className='col-4' />
            <div className='col-8 projrct-title'>
              <h2>STEP 3</h2>
              <p>{stepthree}</p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <img src='le-make-img.png' alt='step1' className='col-4' />
            <div className='col-8 projrct-title'>
              <h2>STEP 4</h2>
              <p>{stepfour}</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}


export default Project
