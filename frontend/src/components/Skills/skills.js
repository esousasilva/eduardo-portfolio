import React from 'react';
import './skills.css';
import { FaPython } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDescription'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</span>
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
