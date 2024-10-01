import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './images/logo.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to="/" className="link">
         <img src={Logo} alt="" srcset="" className="Logo" />
        </Link>
      </div>
      {!isOpen && (
        <div className="menu-icon" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </div>
      )}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/gralley" className="link">Menbers Gralley</Link>
          <Link to="/videos" className="link">Videos</Link>
          <Link to="/contact" className="link">Contact</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/services" className="link">Services</Link>
        </div>
        <div className="nav-button">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
