import React from 'react'
import './about.css';
const About = () => {
  return (
    <div className="tanners__about">
      <div>
      <div className='tanners__about-heading'>
      <h1>ABOUT</h1>
      <h2>2000+ Customers <br/> each year</h2>
      </div>
      <div className='tanners__about-container'>
        <div className="tanners__about-section">
          <h3>1500<span>+</span></h3>
          <p>Visits yearly</p>
        </div>
        <div className="tanners__about-section">
          <h3>1000<span>+</span></h3>
          <p>Engagements</p>
        </div>
        <div className="tanners__about-section">
          <h3>1M<span>+</span></h3>
          <p>Social Followers</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About