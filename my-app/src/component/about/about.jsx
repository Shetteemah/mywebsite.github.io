import React from 'react'
import './about.css';
import ME from '../../img/me-greyscale.jpg';
import {AiOutlineBook} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const about = () => {
  return (
  <section id='about'>
	  <h5>Learn More</h5>
    <h1>About Me</h1>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
        <article className='about__card'>
            <AiOutlineBook className='about__icon'/>
            <h5>Experience</h5>
            <small>5+ Years In UX Design & Frontend</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Globally</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>3 Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptatibus quae voluptatem quibusdam quos
          dolorum quas natus voluptatum. Quisquam, quae. Quisquam, quae.
          Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
          Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default about