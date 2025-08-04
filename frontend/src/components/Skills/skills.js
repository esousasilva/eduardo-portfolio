import React from 'react';
import './skills.css';
import { FaPython, FaFigma, FaReact, FaDatabase, FaGithub} from "react-icons/fa";
import { FaDartLang, FaFlutter} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

export const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>About Me</span>
      <span className='skillDescription'>I am a Software Engineer with a strong foundation in full-stack development, cloud deployment, and modern software architecture. Originally from Brazil, I began my journey in technology with a background in Medical Physics, later transitioning into software engineering to pursue my passion for building scalable, user-centered solutions.
        <br/><br/>In 2022 I relocated to the United States and earned a Master of Science in Computer Science with a specialization in Software Engineering from Seattle University. This experience sharpened both my technical and problem-solving skills, and deepened my commitment to continuous learning and innovation.
        I have since developed and deployed web and mobile applications using technologies such as React, Node.js, Flutter and Firebase. I bring a user-first mindset, a collaborative work ethic, and a strong ability to adapt quickly in fast-paced environments. I’m particularly interested in roles that allow me to contribute to impactful products and grow as an engineer alongside a motivated and mission-driven team.
        <br/><br/>The following are some of the programming languages and frameworks with which I have worked:
      </span>
      <div className='skillBars'>
        <span className='skillsBox'>
          <div className='skillBar'>
          <FaPython className='skillBarLogo'/>
          <div className='skillBarText'>
            <h2 className='skillName'>Python</h2>
          </div>
          </div>
          <div className='skillBar'>
            <FaDartLang className='skillBarLogo'/>
            <div className='skillBarText'>
              <h2>Dart</h2>
            </div>
          </div>
          <div className='skillBar'>
            <FaReact className='skillBarLogo'/>
            <div className='skillBarText'>
              <h2>React</h2>
            </div>
          </div>
          <div className='skillBar'>
            <FaDatabase className='skillBarLogo'/>
            <div className='skillBarText'>
              <h2>SQL</h2>
            </div>
          </div>
        </span>

        <span className='skillsBox'>
          <div className='skillBar'>
          <IoLogoJavascript className='skillBarLogo'/>
          <div className='skillBarText'>
            <h2>JavaScript</h2>
          </div>
          </div>
          <div className='skillBar'>
            <FaFigma className='skillBarLogo'/>
            <div className='skillBarText'>
              <h2>Figma</h2>
            </div>
          </div>
          <div className='skillBar'>
            <FaFlutter className='skillBarLogo'/>
            <div className='skillBarText'>
              <h2>Flutter</h2>
            </div>
          </div>
          <div className='skillBar'>
            <FaGithub className='skillBarLogo'/>
            <div className='skillBarText'>
              <h2>GitHub</h2>
            </div>
          </div>
        </span>
      </div>
    </section>
  )
}

export default Skills;
