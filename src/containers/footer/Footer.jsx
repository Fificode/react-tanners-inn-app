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
    <h2><button>My Account</button></h2>
    <p><button>My Profile</button></p>
    <p><button>Account Settings</button></p>
    <p><button>Check-in History</button></p>
  </div>
  <div className='tanners__footer-third_container'>
    <h2><button>Information</button></h2>
    <p><button>About Us</button></p>
    <p><button>Privacy Policy</button></p>
    <p><button>Terms and Conditions</button></p>
  </div>
  <div className='tanners__footer-fourth_container'>
    <h2><button>Contact Us</button></h2>
    <div className='tanners__footer-socials'><img src={facebook} alt="Facebook logo" /><p><button>Facebook</button></p></div>
    <div className='tanners__footer-socials'><img src={instagram} alt="Instagram logo" /><p><button>Instagram</button></p></div>
    <div className='tanners__footer-socials'><img src={twitter} alt="Twitter logo" /><p><button>Twitter</button></p></div>
  </div>
</div>
</div>
<div className='tanners__footer-designer_developer' >
  <p>Designed by DesignBro</p>
  <p>Developed by Firdaws Lamidi</p>
</div>
</div>

    </>
  )
}

export default Footer