import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import useScrollLock from '../hooks/useScrollLock';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'Packages', target: 'section_our_solution', type: 'scroll' },
  { label: 'Features', target: 'features-section', type: 'scroll' },
  { label: 'Testimonial', target: 'testimonial-section', type: 'scroll' },
  { label: 'About Us', target: 'about-section', type: 'scroll' },
  { label: 'Contact Us', target: 'contact-section', type: 'scroll' },
  { label: 'Blogs', target: 'blog-section', type: 'scroll' },
];

const NavList = ({ openNav, onLinkClick }) => {
  const handleScrollClick = (e, target) => {
    e.preventDefault();
    onLinkClick();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className={`nav-list ${openNav ? 'open' : ''}`} role="list">
      {navLinks.map(({ label, target }) => (
        <li key={target}>
          <a
            href={`#${target}`}
            onClick={(e) => handleScrollClick(e, target)}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Lock body scroll when mobile nav is open
  useScrollLock(openNav);

  // Stable scroll handler — no re-render dependency on lastScrollY
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeNav = () => setOpenNav(false);

  return (
    <nav
      className={`navbar ${isVisible ? 'nav-visible' : 'nav-hidden'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        <a href="/" className="logo" aria-label="VIPDrive — Home">
          <span>VIPDrive</span>
        </a>

        <div className="desktop-nav" role="menubar">
          <NavList openNav={openNav} onLinkClick={closeNav} />
        </div>

        <button
          className="toggle-btn"
          onClick={() => setOpenNav(!openNav)}
          aria-label={openNav ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={openNav}
          aria-controls="mobile-nav"
        >
          {openNav ? (
            <XMarkIcon className="icon" aria-hidden="true" />
          ) : (
            <Bars3Icon className="icon" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav ${openNav ? 'open' : ''}`}
        aria-hidden={!openNav}
      >
        <NavList openNav={openNav} onLinkClick={closeNav} />
      </div>
    </nav>
  );
};

export default Navbar;