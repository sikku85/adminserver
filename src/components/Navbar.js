import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useContext } from 'react';
import AppContext from './Context/AppContext';

export const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const {login,setIsLoggedIn}=useContext(AppContext);
    
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else {
        setActive("nav__menu");
      }
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else {
        setIcon("nav__toggler");
      }
    };

    const closeMenu = () => {
      setActive("nav__menu"); // Close the menu
      setIcon("nav__toggler"); // Reset icon
    };
    const handlelogin=()=>{
        setIsLoggedIn(false);
    }
    
    return (
      <nav className="nav">
        <div className="logo-container">
          <div className="logo first-letter">P</div>
          <div className="logo-text">areeksha.com</div>
        </div>
        <ul className={active}>
          <li className='nav_item'>
            <Link to="/" onClick={closeMenu}>Home <i className="fa-solid fa-house"></i></Link>
          </li>
          <li className='nav_item'>
            <Link to="upload_ApplicationForm" onClick={closeMenu}>Application</Link>
          </li>
          <li className='nav_item'>
            <Link to="upload_Admitcard" onClick={closeMenu}>AdmitCard</Link>
          </li>
          <li className='nav_item'>
            <Link to="upload_Result" onClick={closeMenu}>Result</Link>
          </li>
          <li className="nav_item nav_item_login">
          <Link  to="login" onClick={handlelogin}>{login}</Link>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
};
