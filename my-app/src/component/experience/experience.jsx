import React from 'react'
import './experience.css';
import {GrUserExpert} from 'react-icons/gr'
import {FaFigma} from 'react-icons/fa'
import {GiBrainstorm} from 'react-icons/gi'
// import {FaFigma} from 'react-icons/fa'

const experience = () => {
  return (
    <section id='experience'>
      <h5>I'm pretty decent in the following areas</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
          <div className="experience__UX">
            <h3>User Experience Design</h3>
            <div className="experience__content">
            <article className='experience__details'>
                <GrUserExpert/>
                <h4>UX Research</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <FaFigma/>
                <h4>Figma</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <GiBrainstorm/>
                <h4>UX Research</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <GrUserExpert/>
                <h4>UX Research</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>
          </div>
          <div className="experience__frontend">
          
          </div>
          <div className="experience__c">
          
          </div>
          <div className="experience__cpp">
          
          </div>
              </div>
    </section>
  )
}

export default experience