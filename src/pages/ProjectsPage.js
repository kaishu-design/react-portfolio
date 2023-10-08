import React from 'react'
import step1 from '../images/tutorial/1.sign-in.jpg';
import step2_1 from '../images/tutorial/2.home.jpg';
import step3_2 from '../images/tutorial/3.ingredientsG.jpg';
import step3_1 from '../images/tutorial/3.pantry.jpg';
import step4_1 from '../images/tutorial/4.preference.jpg';
import step4_2 from '../images/tutorial/4.thinking.jpg';
import step5 from '../images/tutorial/5.recipes.png';
import step6_2 from '../images/tutorial/6.recipe-notes-fav.png';
import step6_3 from '../images/tutorial/6.recipe-notes.png';
import step6_4 from '../images/tutorial/6.recipe.png';
import step7 from '../images/tutorial/7.fav.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const center = 'd-flex justify-content-center'

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
            <div className='col-7 d-flex justify-content-center'>
              ①
              <img src={step1} alt='step1' className='tutorial-img' />
              <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
              ②
              <img src={step2_1} alt='step1' className='tutorial-img' />
            </div>
            <div className='col-5 step-info'>
              <h2>STEP 1</h2>
              <p>
                ①Sign in with your email and password,<br></br>
                ②then you can see home page as a right image.
                </p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-7 d-flex justify-content-center'>
              ①
              <img src={step3_1} alt='step2' className='tutorial-img-2' />
              ②
              <img src={step3_2} alt='step2' className='tutorial-img' />
            </div>
            <div className='col-5 step-info'>
              <h2>STEP 2</h2>
              <p>
                ①Tap <FontAwesomeIcon icon={faAppleWhole} /><br></br>
                Select the ingredients you always have so that you don't need to select all the time you search for recipe.<br></br>
                <div style={{ marginBottom: '1em' }}></div>
                Tap <FontAwesomeIcon icon={faUtensils} /><br></br>
                Select the ingredients you have. You can even speak to the app after tap the mic icon!<br></br>
                When you all set, tap the button "Next Step".
              </p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-7 d-flex justify-content-center'>
              ①
              <img src={step4_1} alt='step1' className='tutorial-img' />
              <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
              ②
              <img src={step4_2} alt='step1' className='tutorial-img' />
            </div>
            <div className='col-5 step-info'>
              <h2>STEP 3</h2>
              <p>
                ①Set the available time and number of people.<br></br>
                ②When you tap the button "Find Recipes!", the cute Lemon comes up start to search the recipes for you!
              </p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-7 d-flex justify-content-center'>
              ①
              <img src={step5} alt='step1' className='tutorial-img' />
              <FontAwesomeIcon icon={faArrowRight} className='arrow'/>
              ②
              <img src={step6_4} alt='step1' className='tutorial-img' />
            </div>
            <div className='col-5 step-info'>
              <h2>STEP 4</h2>
                <p>
                  ①Here are recipes!!
                  You can see the title of recipe, steps for cooking, number of people and time to cook.<br></br>
                  ②Now you just follow the recipe and enjoy your meal!
                </p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-7 d-flex justify-content-center'>
            <img src={step6_2} alt='step1' className='ms-5 tutorial-img' />
            <img src={step6_3} alt='step1' className='ms-4 tutorial-img' />
              </div>
            <div className='col-5 step-info'>
              <h2>Optional 1</h2>
              <p>You can leave the note, uploadd the photos and add to you favorite recipe at the bottom of the recipe page!</p>
            </div>
          </div>
        </div>

        <div className="project-card row card my-4">
          <div className='row projrct-info'>
            <div className='col-7 d-flex justify-content-center'>
              <img src={step7} alt='step1' className='tutorial-img' />
            </div>
            <div className='col-5 step-info'>
              <h2>Optional 2</h2>
              <p>You can access to your favorite recipe from <FontAwesomeIcon icon={faHeart} /> icon in the navbar.</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}


export default Project
