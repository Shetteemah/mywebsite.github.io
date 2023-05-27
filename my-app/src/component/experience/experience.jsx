import React from 'react'
import './experience.css';
import {FiUserCheck} from 'react-icons/fi'
import {FaFigma} from 'react-icons/fa'
import {GiBrainstorm} from 'react-icons/gi'
import {DiJavascript1} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
import {RiLayout5Line} from 'react-icons/ri'

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
                <FiUserCheck class="experience__details-icon"/>
                <div class="experience__title"><h4>UX Research</h4></div>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <FaFigma class="experience__details-icon"/>
                <div class="experience__title"><h4>Figma</h4></div>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <GiBrainstorm class="experience__details-icon"/>
                <div class="experience__title"><h4>Prototyping</h4></div>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <RiLayout5Line class="experience__details-icon"/>
                <div class="experience__title"><h4>Wireframing</h4></div>
                <small className='text-light'>Experienced</small>
              </article>
            </div>
          </div>
{/* ======================================================= */}
          <div className="experience__frontend">
            <h3>Frontend</h3>
            <div className="experience__content">
            <article className='experience__details'>
                <DiJavascript1 class="experience__details-icon"/>
                <div class="experience__title"><h4>JavaScript</h4></div>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <GrReactjs class="experience__details-icon"/>
                <div class="experience__title"><h4>React.JS</h4></div>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <TbBrandNextjs class="experience__details-icon"/>
                <div class="experience__title"><h4>Next.JS</h4></div>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <SiTailwindcss class="experience__details-icon"/>
                <div class="experience__title"><h4>Tailwind</h4></div>
                <small className='text-light'>Experienced</small>
              </article>
            </div>
          </div>
{/* ======================================================= */}
      </div>
    </section>
  )
}

export default experience