import React from 'react'
import step1 from '../images/tutorial/1.sign-in.jpg';
import step2_1 from '../images/tutorial/2.home.jpg';
import step2_2 from '../images/tutorial/2.home-favorite.jpg';
import step3_2 from '../images/tutorial/3.ingredientsG.jpg';
import step3_1 from '../images/tutorial/3.pantry.jpg';
import step4_1 from '../images/tutorial/4.preference.jpg';
import step4_2 from '../images/tutorial/4.thinking.jpg';
import step5 from '../images/tutorial/5.recipes.png';
import step6_1 from '../images/tutorial/6.recipe-gallery.png';
import step6_2 from '../images/tutorial/6.recipe-notes-fav.png';
import step6_3 from '../images/tutorial/6.recipe-notes.png';
import step6_4 from '../images/tutorial/6.recipe.png';
import step7 from '../images/tutorial/7.fav.png';

const center = 'd-flex justify-content-center'

const stepone = 'step1'
const steptwo = 'step2'
const stepthree = 'step3'
const stepfour = 'step4'
const stepfive = 'step5'
const stepsix = 'step6'

const Project = () => {
  return (
    <div className='container'>
      <div className={`${center} head-title mt-5`}>
        <h1>leMake</h1>
      </div>
      <div className={`${center} card title-line mt-3`}></div>

      <div className='step-cards'>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-6 d-flex justify-content-center'>
              <img src={step1} alt='step1' className='tutorial-img' />
              <img src={step2_1} alt='step1' className='tutorial-img' />
            </div>
            <div className='col-6 projrct-title'>
              <h2>STEP 1</h2>
              <p>{stepone}</p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-6 d-flex justify-content-center'>
              <img src={step3_1} alt='step1' className='tutorial-img' />
              <img src={step3_2} alt='step1' className='tutorial-img' />
            </div>
            <div className='col-6 projrct-title'>
              <h2>STEP 2</h2>
              <p>{steptwo}</p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-6 d-flex justify-content-center'>
              <img src={step4_1} alt='step1' className='tutorial-img' />
              <img src={step4_2} alt='step1' className='tutorial-img' />
            </div>
            <div className='col-6 projrct-title'>
              <h2>STEP 3</h2>
              <p>{stepthree}</p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-6 d-flex justify-content-center'>
              <img src={step5} alt='step1' className='tutorial-img' />
            </div>
            <div className='col-6 projrct-title'>
              <h2>STEP 4</h2>
              <p>{stepfour}</p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-6 d-flex justify-content-center'>
              <img src={step6_4} alt='step1' className='tutorial-img' />
              </div>
            <div className='col-6 projrct-title'>
              <h2>STEP 5</h2>
              <p>{stepfive}</p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-6 d-flex justify-content-center'>
              <img src={step7} alt='step1' className='tutorial-img' />
            </div>
            <div className='col-6 projrct-title'>
              <h2>STEP 6</h2>
              <p>{stepsix}</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}


export default Project
