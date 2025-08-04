import React, { useState} from 'react';
import './navbar.css';
import logo from '../../assets/edu-logo.png'
import { FaRegMessage } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About Me</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
      </div>
      <div className='contactMeButton'>
        <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>
          <FaRegMessage alt='' className='desktopMenuImg' />Contact Me
        </button>
      </div>


      <RiMenu3Fill className='mobileMenuIcon' onClick={() => setShowMenu(!showMenu)}></RiMenu3Fill>
      <div className='mobileMenu'style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>About Me</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} duration={500} className='mobileMenuListItem' onClick={() => setShowMenu(false)}>Contact Me</Link>
      </div>
    </nav>
  )
}

export default Navbar