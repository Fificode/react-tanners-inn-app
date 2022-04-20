import React, {useState} from 'react'
import  { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../images/logo.png'

const Menu = () => (
  <>
  <li><a href="#home">Home</a></li>
<li><a href="#rooms">Rooms</a></li>
<li><a href="#About">About</a></li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
<div className="tanners__navbar-menu">
{toggleMenu? 
<RiCloseLine color='#fff' size={27} onClick = {() => setToggleMenu(false)} />:
<RiMenu3Line color='#fff' size={27} onClick = {() => setToggleMenu(true)} />
}
{
  toggleMenu && (
    <div className="tanners__navbar-menu_container scale-up-center ">
      <ul className='tanners__navbar-menu_container-links'>
<Menu />
      </ul>
      <div className="tanners__navbar-menu_container-links_sign">
        <button className='tanners__navbar-menu_login'>Log In</button>
  <button className='tanners__navbar-menu_signup'>Sign Up</button>
      </div>
    </div>
  )
}
</div>
    </div>
  )
}

export default Navbar