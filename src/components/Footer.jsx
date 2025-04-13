import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-top">
            <div className="logo-social">
            <div className="logo">
                <img src="./images/Logo2.svg" alt="logo" className="logo-icon" />
                <h3>VIPDrive</h3>
            </div>
            <div className="social-icons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-github"></i>
            </div>
            </div>
            <ul className="footer-links">
            <li>Packages</li>
            <li>Features</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            </ul>
        </div>
        <hr />
        <p className="copyright">
            © Copyright 2025, All Rights Reserved by VIPDrive.
        </p>
    </footer>

  );
}

export default Footer;
