import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../images/logo.png'
import { useLayoutEffect } from 'react';

const Menu = () => (
  <>
    <li><a href="#home">Home</a></li>
    <li><a href="#rooms">Rooms</a></li>
    <li><a href="#About">About</a></li>
  </>
)

const Navbar = () => {
  useLayoutEffect(() => {
    const navbar = document.querySelector('.tanners__navbar');
    let scrolled = false;
    window.onscroll = function () {
      if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
          navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
          navbar.style.transform = 'translateY(0)';
          scrolled = true;
        }, 200);
      } else {
        navbar.classList.add('top');
        scrolled = false;
      }
    };
    
  }, [])

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='tanners__navbar top'>
      <div className="tanners__navbar-container">
        <div className="tanners__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="tanners__navbar-links_container">
          <Menu />
        </ul>
        <div className="tanners__navbar-sign">
          <button className='tanners__navbar-login'>Log In</button>
          <button className='tanners__navbar-signup'>Sign Up</button>
        </div>
        <div className="tanners__navbar-menu">
          {toggleMenu ?
            <RiCloseLine className='tanners__navbar-menu_delete' size={27} onClick={() => setToggleMenu(false)} /> :
            <RiMenu3Line className="tanners__navbar-menu_menuline" size={27} onClick={() => setToggleMenu(true)} />
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
    </div>
  )
}

export default Navbar