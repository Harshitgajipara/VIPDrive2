import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/general/Footer.css';

// Smooth-scroll to a section anchor by element ID.
// If the element doesn't exist (e.g. on a non-home page), navigate home first.
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const footerLinks = [
  { label: 'Packages',   id: 'section_our_solution' },
  { label: 'Features',   id: 'features-section'     },
  { label: 'Testimonial',id: 'testimonial-section'  },
  { label: 'Contact Us', id: 'contact-section'      },
  { label: 'Blogs',      id: 'blog-section'         },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="logo-social">
                    <div className="logo">
                        <Link to="/" aria-label="VIPDrive — Home">
                            <img src="./images/Logo2.svg" alt="logo" className="logo-icon" />
                        </Link>
                    </div>
                    <div className="social-icons">
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-github"></i>
                    </div>
                </div>
                <ul className="footer-links">
                    {footerLinks.map(({ label, id }) => (
                        <li key={id}>
                            <button
                                className="footer-link-btn"
                                onClick={() => scrollToSection(id)}
                                aria-label={`Navigate to ${label} section`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
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

