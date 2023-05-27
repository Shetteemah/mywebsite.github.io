import React from 'react'
import './portfolio.css';
import PHOTO_1 from '../../img/clock.gif'
import PHOTO_2 from '../../img/shettima logo 500px.png'
import PHOTO_3 from '../../img/me-greyscale.jpg'
import PHOTO_4 from '../../img/me-no-bg.png'
import PHOTO_5 from '../../img/clock.png'
import PHOTO_6 from '../../img/shettima logo 150px.png'
import {RiGithubLine} from 'react-icons/ri'

const data = [
  {
    id: 1,
    image: PHOTO_1,
    title: 'Clock App',
    github: 'https://github.com/Shetteemah/digital_clock.git',
    demo: 'https://github.com/Shetteemah/digital_clock.git'
  },
  {
    id: 2,
    image: PHOTO_2,
    title: 'Clock App',
    github: 'https://github.com/Shetteemah/digital_clock.git',
    demo: 'https://github.com/Shetteemah/digital_clock.git'
  },
  {
    id: 3,
    image: PHOTO_3,
    title: 'Clock App',
    github: 'https://github.com/Shetteemah/digital_clock.git',
    demo: 'https://github.com/Shetteemah/digital_clock.git'
  },
  {
    id: 4,
    image: PHOTO_4,
    title: 'Clock App',
    github: 'https://github.com/Shetteemah/digital_clock.git',
    demo: 'https://github.com/Shetteemah/digital_clock.git'
  },
  {
    id: 5,
    image: PHOTO_5,
    title: 'Clock App',
    github: 'https://github.com/Shetteemah/digital_clock.git',
    demo: 'https://github.com/Shetteemah/digital_clock.git'
  },
  {
    id: 6,
    image: PHOTO_6,
    title: 'Clock App',
    github: 'https://github.com/Shetteemah/digital_clock.git',
    demo: 'https://github.com/Shetteemah/digital_clock.git'
  }
]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'><RiGithubLine/> Repo</a>
                <a href='https://github.com/Shetteemah/digital_clock.git' className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>  
            )
          })
        }
      </div>
    </section>

  )
}

export default portfolio