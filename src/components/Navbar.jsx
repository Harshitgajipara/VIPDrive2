import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="NavbarSection">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">Brand</a>

          {/* Navbar Toggler for mobile */}
          <button
            className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
            <a className="nav-link" href="#features">Features</a>
            <a className="nav-link" href="#about">About Us</a>
            <a className="nav-link" href="#contact">Contact</a>
            <a className="nav-link" href="#blog">Blog</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
