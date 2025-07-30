import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import { FaRegMessage } from "react-icons/fa6";
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About Me</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <FaRegMessage alt='' className='desktopMenuImg' />Contact Me
      </button>
    </nav>
  )
}

export default Navbar