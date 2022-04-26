import React from 'react'
import './experience.css';


const Experience = () => {
  return (
    <>
    <div className="tanners__experience">
      <div className="tanners__experience-images_container">
        <div className='tanners__experience-overall_container'>
        <div className="tanners__experience-image_container-one">
         <div className="tanners__experience-dark_background">
         <div className="tanners__experience-content"><span>Food</span></div>  
         </div>  
        </div> 
        </div>
        <div className='tanners__experience-overall_container'>
        <div className="tanners__experience-image_container-two">
          <div className="tanners__experience-dark_background">
            <div className="tanners__experience-content">
          <span>Yoga</span>
          </div>
          </div>
        </div>
</div>
<div className='tanners__experience-overall_container'>
        <div className="tanners__experience-image_container-three">
           <div className="tanners__experience-dark_background">
             <div className="tanners__experience-content">
          <span>Room service</span>
          </div>
          </div>
        </div>
</div>
        </div> 
      </div>
    </>
  )
}

export default Experience