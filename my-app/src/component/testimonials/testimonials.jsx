import React from 'react'
import './testimonials.css';
import AVTR_1 from '../../img/jessica.jpg'
import AVTR_2 from '../../img/lee.jpg'
import AVTR_3 from '../../img/nabila.jpg'
import AVTR_4 from '../../img/tope.jpg'

const data = [
  {
    image: AVTR_1,
    title: 'Jessica C.',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium alias, fuga numquam obcaecati atque libero consequatur sit eum dignissimos sint odit, accusamus animi vitae vero iste deserunt, ea quisquam corrupti?'
  },
  {
    image: AVTR_2,
    title: 'Yough L.',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium alias, fuga numquam obcaecati atque libero consequatur sit eum dignissimos sint odit, accusamus animi vitae vero iste deserunt, ea quisquam corrupti?'
  },
  {
    image: AVTR_3,
    title: 'Shaza M.',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium alias, fuga numquam obcaecati atque libero consequatur sit eum dignissimos sint odit, accusamus animi vitae vero iste deserunt, ea quisquam corrupti?'
  },
  {
    image: AVTR_4,
    title: 'Tope A.',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium alias, fuga numquam obcaecati atque libero consequatur sit eum dignissimos sint odit, accusamus animi vitae vero iste deserunt, ea quisquam corrupti?'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Words from happy colleagues and users.</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({image, title, review}, index) => {
            return (
              <article key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={image} alt='Avatar one'/>
              </div>
              <div className="client__details">
                <h5 className='client__name'>{title}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default testimonials