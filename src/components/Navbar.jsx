import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../styles/Navbar.css";

const NavList = ({ openNav, handleScroll }) => {
  return (
    <ul className={`nav-list ${openNav ? 'open' : ''}`}>
      <li><a href="#" onClick={(e) => handleScroll(e, 'section_our_solution')}>Packages</a></li>
      <li><a href="#" onClick={(e) => handleScroll(e, 'features-section')}>Features</a></li>
      <li><a href="#" onClick={(e) => handleScroll(e, 'testimonial-section')}>Testimonial</a></li>
      <li><a href="#parallax-world-of-ugg" >About Us</a></li>
      <li><a href="#" onClick={(e) => handleScroll(e, 'contact-section')}>Contact Us</a></li>
      <li><a href="#" onClick={(e) => handleScroll(e, 'blog-section')}>Blogs</a></li>
    </ul>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (event, className) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${scrollUp ? "nav-visible" : "nav-hidden"}`}>
      <div className="navbar-inner">
        <a href="/" className="logo">
          <span>VIPDrive</span>
        </a>

        <div className="desktop-nav">
          <NavList openNav={openNav} handleScroll={handleScroll} />
        </div>

        <div className="toggle-btn" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <XMarkIcon className="icon" /> : <Bars3Icon className="icon" />}
        </div>
      </div>

      <div className={`mobile-nav ${openNav ? "open" : ""}`}>
        <NavList openNav={openNav} handleScroll={handleScroll} />
      </div>
    </nav>
  );
};

export default Navbar;