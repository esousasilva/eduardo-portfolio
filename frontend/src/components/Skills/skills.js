import React from 'react';
import './skills.css';
import { FaPython } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>About Me</span>
      <span className='skillDescription'>I am a Software Engineer with a strong foundation in full-stack development, cloud deployment, and modern software architecture. Originally from Brazil, I began my journey in technology with a background in Medical Physics, later transitioning into software engineering to pursue my passion for building scalable, user-centered solutions.

After teaching myself English, I relocated to the United States and earned a Master of Science in Computer Science with a specialization in Software Engineering from Seattle University. This experience sharpened both my technical and problem-solving skills, and deepened my commitment to continuous learning and innovation.

I have since developed and deployed web and mobile applications using technologies such as React, Node.js, Flutter, Firebase, Docker, and Google Cloud. I bring a user-first mindset, a collaborative work ethic, and a strong ability to adapt quickly in fast-paced environments. I’m particularly interested in roles that allow me to contribute to impactful products and grow as an engineer alongside a motivated and mission-driven team.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <FaPython className='skillBarLogo'/>
          <div className='skillBarText'>
            <h2>Python</h2>
            <p>I'm good at Python!</p>
          </div>
        </div>
        <div className='skillBar'>
          <FaFigma className='skillBarLogo'/>
          <div className='skillBarText'>
            <h2>Figma</h2>
            <p>I'm good at Figma!</p>
          </div>
        </div>
        <div className='skillBar'>
          <FaReact className='skillBarLogo'/>
          <div className='skillBarText'>
            <h2>React</h2>
            <p>I'm good at React!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
