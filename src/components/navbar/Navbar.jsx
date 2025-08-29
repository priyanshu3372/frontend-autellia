import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logoImage from '../../assets/images/logo.jpg'
import gsap from 'gsap'
import './Navbar.css'

const Navbar = () => {
useEffect(()=>{
  const tl = gsap.timeline();
  tl.from("ul li",{opacity:0, y:-50, stagger:0.12})
})
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="logo-img" />
      </div>

        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/industries" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Industries
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contacts" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>


      <button type="button">Book a Demo</button>

    </nav>
  )
}

export default Navbar