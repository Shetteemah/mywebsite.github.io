import React from 'react'
import './header.css';
import CTA from './CTA'
import HeaderSocials from './HeaderSocials';
import LOGO from '../../img/shettima logo 150px.png'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='logo'>
          <img src={LOGO} alt='logo' />
        </div>
        <h5>Hello there! I am </h5>
        <h1>Shettima</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />

      <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header
