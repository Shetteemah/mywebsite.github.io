import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/experience'
import Services from './component/services/services'
import Portfolio from './component/portfolio/portfolio'
import Testimonials from './component/testimonials/testimonials'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'

const App = () => {
  return (
	<div>
		<Header/>
		{/* <Nav /> */}
		{/* <About /> */}
		<Experience />
		<Services />
		<Portfolio />
		<Testimonials />
		{/* <Contact /> */}
		{/* <Footer /> */}
	</div>
  )
}

export default App