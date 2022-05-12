import React from 'react'
import './footer.css';
import logo from '../../images/logo.png'
import twitter from '../../images/twitter-icon.png'
import facebook from '../../images/fb-icon.png'
import instagram from '../../images/ig-icon.png'
const Footer = () => {
  return (
    <>
    <div className="tanners__footer">
      <div className="tanners__footer-container">
<div className="tanners__footer-overall_container">
  <div className='tanners__footer-first_container'>
    <div className="tanners__footer-logo_container">
    <img src={logo} alt="Company's Logo" className='tanners__footer-logo' />
    </div>
<h1>Tanners's Inn</h1>
  </div>
  <div className='tanners__footer-second_container'>
    <h2><a href='#'>My Account</a></h2>
    <p><a href='#'>My Profile</a></p>
    <p><a href='#'>Account Settings</a></p>
    <p><a href='#'>Check-in History</a></p>
  </div>
  <div className='tanners__footer-third_container'>
    <h2><a href="#">Information</a></h2>
    <p><a href="#">About Us</a></p>
    <p><a href="#"></a>Privacy Policy</p>
    <p><a href="#">Terms and Conditions</a></p>
  </div>
  <div className='tanners__footer-fourth_container'>
    <h2><a href="#">Contact Us</a></h2>
    <div className='tanners__footer-socials'><img src={facebook} alt="Facebook logo" /><p><a href="#">Facebook</a></p></div>
    <div className='tanners__footer-socials'><img src={instagram} alt="Instagram logo" /><p><a href="#">Instagram</a></p></div>
    <div className='tanners__footer-socials'><img src={twitter} alt="Twitter logo" /><p><a href="#">Twitter</a></p></div>
  </div>
</div>
</div>
<div className='tanners__footer-designer_developer' >
  <p>Designed by</p>
  <p>Developed by Firdaws Lamidi</p>
</div>
</div>

    </>
  )
}

export default Footer