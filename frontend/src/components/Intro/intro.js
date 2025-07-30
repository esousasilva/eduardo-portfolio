import React from 'react';
import './intro.css';
import bg from '../../assets/eduardo.png';
import { MdWork } from "react-icons/md";
import { Link } from 'react-scroll';

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='myName'>Eduardo</span> <br/> Software Engineer  </span>
        <p className='introParagraph'>I am a skilled software engineer with experience in creating websites.</p>
        <Link><button className='hireMeBtn'> <MdWork className='hireMeIcon'></MdWork><span className='hireMe'>Hire Me</span></button></Link>
      </div>
      <img src={bg} alt='' className="bg" />
    </section>
  )
}

export default Intro;