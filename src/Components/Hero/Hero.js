import React from 'react'
import './Hero.css'
import Profile1 from '../../assets/Profile1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='heroimg' src={Profile1} alt="" />
      <h1><span>I'm Md Ayaz Alam,</span> frontend developer</h1>
      <p>I am a frontend developer from Kolkata, India. Passion for creating responsive, user-friendly web interfaces.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero