import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer class="footer">
    <div class="footer-content">
        <div class="footer-logo">
            <span>★</span>
        </div>
        <div class="footer-columns">
            <div class="footer-column">
                <h4>Platform</h4>
                <ul>
                    <li>Wiz CNAPP</li>
                    <li>Wiz Code</li>
                    <li>Wiz Cloud</li>
                    <li>Wiz Defend</li>
                    <li>Integrations</li>
                    <li>Environments</li>
                    <li>Documentation</li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Learn</h4>
                <ul>
                    <li>Customer stories</li>
                    <li>Train Your Team For Cloud</li>
                    <li>Blog</li>
                    <li>CloudSec Academy</li>
                    <li>Resources Center</li>
                    <li>Cloud threat landscape</li>
                    <li>Cloud Security Assessment</li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Company</h4>
                <ul>
                    <li>About Wiz</li>
                    <li>Join the team</li>
                    <li>Newsroom</li>
                    <li>Events</li>
                    <li>Contact us</li>
                    <li>Trust Center</li>
                    <li>Our partners</li>
                </ul>
            </div>
        </div>
        <div class="footer-social">
            <div class="language-select">
                <span>🌐 English (US)</span>
            </div>
            <div class="social-icons">
                <span>✖</span>
                <span>🔗</span>
                <span>📘</span>
                <span>📡</span>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© 2025 Wiz, Inc.</p>
        <ul>
            <li>Status</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Modern Slavery Statement</li>
            <li>Cookie Settings</li>
        </ul>
    </div>
  </footer>
  );
}

export default Footer;
