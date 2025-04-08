import React from 'react';
import "../styles/ContactUsSection.css";

function ContactUsSection() {
  return (
    <div class="contact-section">
      <img src="images/contact3.jpg" alt="Contact Image" class="background-image"/>
      <div class="contact-content">
        <h3>How can we help you?</h3>
        <h1>Contact us</h1>
        <p>We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
        <div class="contact-info">
          <p><span>📍</span> Aaryan Eminent, Chanakyaputi Rd, Ghatlodiya, Ahmedabad, Gujarat - 380061</p>
          <p><span>📞</span> +91 98 98 98 35 75</p>
          <p><span>✉️</span> <a href="mailto:mail@sleeknote.com">vipdrive@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
