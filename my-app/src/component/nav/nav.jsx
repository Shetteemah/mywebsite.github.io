import React from 'react';
import './nav.css';
import {CiHome} from 'react-icons/ci';
import {CiUser} from 'react-icons/ci';
import {AiOutlineBook} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {FiFeather} from 'react-icons/fi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
	<nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><CiHome/></a>
    <a href="#about" onClick={() => setActiveNav('#anout')} className={activeNav === '#anout' ? 'active' : ''}><CiUser/></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiFeather/></a>
  </nav>
  )
}

export default Nav
