import React from 'react'
import './experience.css';


const Experience = () => {
  let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("tanners__experience-carousel_dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
  
}
showSlides();
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
    <div className="tanners__experience-carousel">
      <div className="tanners__experience-carousel_images-container">
        <div className='tanners__experience-carousel_overall-container mySlides fade'>
        <div className="tanners__experience-carousel_image-container_one">
         <div className="tanners__experience-carousel_dark-background">
         <div className="tanners__experience-carousel_content"><span>Food</span></div>  
         </div>  
        </div> 
        </div>
        <div className='tanners__experience-carousel_overall-container mySlides fade'>
        <div className="tanners__experience-carousel_image-container_two">
          <div className="tanners__experience-carousel_dark-background">
            <div className="tanners__experience-carousel_content">
          <span>Yoga</span>
          </div>
          </div>
        </div>
</div>
<div className='tanners__experience-carousel_overall-container mySlides fade'>
        <div className="tanners__experience-carousel_image-container_three">
           <div className="tanners__experience-carousel_dark-background">
             <div className="tanners__experience-carousel_content">
          <span>Room service</span>
          </div>
          </div>
        </div>
</div>
        </div> 
      </div>
      <div className="tanners__experience-carousel_dot-container">
  <span class="tanners__experience-carousel_dot"></span> 
  <span class="tanners__experience-carousel_dot"></span> 
  <span class="tanners__experience-carousel_dot"></span> 
</div>

    </>
  )
}

export default Experience