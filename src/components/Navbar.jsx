import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../styles/Navbar.css";

const NavList = () => {
  return (
    <ul className="nav-list">
      <li><a href="#">Products</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Support</a></li>
    </ul>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        <a href="#" className="logo">
          <img
            src="./images/Logo3.png"
            alt="VIP Booking"
          />
        </a>

        <div className="desktop-nav">
          <NavList />
        </div>

        <div className="toggle-btn" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <XMarkIcon className="icon" /> : <Bars3Icon className="icon" />}
        </div>
      </div>

      <div className={`mobile-nav ${openNav ? "open" : ""}`}>
        <NavList />
      </div>
    </nav>
  );
};

export default Navbar;
