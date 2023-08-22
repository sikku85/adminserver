import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.css"

export const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    return (
      <nav className="nav">
        <a href="#" className="nav__brand">
          ParikhaResult
        </a>
        <ul className={active}>
        
          <Link to="/">Home</Link>
          <Link to="upload_ApplicationForm">Upload Application</Link>
          <Link to="upload_Admitcard">Upload AdmitCard</Link>
          <Link to="upload_Result">Upload Result</Link>

          <li className="nav__item">
            <a href="#" className="nav__link">
              login
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
  
}
