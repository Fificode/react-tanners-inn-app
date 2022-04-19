import React from 'react'
import './navbar.css';
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <div className='tanners__navbar'>
      <div className="tanners__navbar-links_logo">
        <img src={logo} alt="Logo" />
      </div>
<ul className="tanners__navbar-links_container">
<li><a href="#home">Home</a></li>
<li><a href="#rooms">Rooms</a></li>
<li><a href="#About">About</a></li>
</ul>
<div className="tanners__navbar-sign">
  <button className='tanners__navbar-login'>Log In</button>
  <button className='tanners__navbar-signup'>Sign Up</button>
</div>
    </div>
  )
}

export default Navbar