import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {FiGithub} from 'react-icons/fi'
import {CiTwitter} from 'react-icons/ci'

const HeaderSocials = () => {
  return (
	<div className='header__socials'>
		<a href="https://linkedin.com/in/shetteemah" target='_blank'><CiLinkedin/></a>
		<a href="https://github.com/shetteemah" target='_blank'><FiGithub/></a>
		<a href="https://twitter.com/shetteemah" target='_blank'><CiTwitter/></a>
	</div>
  )
}

export default HeaderSocials