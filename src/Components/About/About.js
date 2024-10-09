import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Ayaz_Passport from '../../assets/Ayaz_Passport.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>
            About me
        </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img className='passport' src={Ayaz_Passport} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>A passionate frontend developer with knowledge of HTML, CSS, JavaScript, and with basic frameworks like React, eager to build interactive websites. Eager to learn and implement modern web design principles, I strive to create responsive, user-friendly websites and applications that enhance user experiences and solve real-world problems.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>React</p><hr style={{width:"80%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h2>4+</h2>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h2>Crack TCS NQT</h2>
            <p>DIGITAL LEVEL</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h2>CERTIFICATION</h2>
            <p>IN JAVA</p>
        </div>
      </div>
    </div>
  )
}

export default About