import React from 'react';
import './intro.css';
import bg from '../../assets/eduardo.png';
import { MdWork } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-scroll';

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='myName'>Eduardo</span> <br/> Software Engineer  </span>
        <p className='introParagraph'>Designing and implementing modern web solutions with <br/>React, Node.Js and RESTful architecture.</p>
        <span className='buttonsIntro'>
          <Link><button className='hireMeBtn' onClick={() => window.open('/Eduardo_s_resume.pdf', '_blank')}> <MdWork className='hireMeIcon'></MdWork><span className='hireMe'>Resume</span></button></Link>
          <Link><button className='hireMeBtn' onClick={() => window.open("https://www.linkedin.com/in/esousasilva/", '_blank')}> <FaLinkedin className='hireMeIcon'></FaLinkedin><span className='hireMe'>LinkedIn</span></button></Link>
        </span>
      </div>
      <img src={bg} alt='' className="bg" />
    </section>
  )
}

export default Intro;