import React from 'react'
import './aboutus.css';
import {Experience, About} from '../../components'
const AboutUs = () => {
  return (
    <div className='tanners__aboutus'>
      <div className="tanners__aboutus-experience">
      <div className="tanners__aboutus-experience_container">
        <h3>EXPERIENCE</h3>
      <Experience />
      </div>
      </div>
      <About />
    </div>
  )
}

export default AboutUs