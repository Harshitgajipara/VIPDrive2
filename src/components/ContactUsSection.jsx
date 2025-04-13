import React from "react";
import "../styles/ContactUsSection.css";

const ContactUsSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-left">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-desc">
            Reach out to us to learn more about our VIP car services and exclusive ride packages.
          </p>
          <div className="contact-details">
            <p>info@vipdrive.com</p>
            <p>989898 3573</p>
            <a href="#">Customer Support</a>
          </div>

          <div className="contact-columns">
            <div>
              <h4>Customer Support</h4>
              <p>Our dedicated team is available 24/7 to assist you with any inquiries or booking needs.</p>
            </div>
            <div>
              <h4>Feedback and Suggestions</h4>
              <p>Your feedback helps us enhance our services. Share your thoughts to help us serve you better.</p>
            </div>
            <div>
              <h4>Media Inquiries</h4>
              <p>For media-related questions or press inquiries, please contact us at media@vipdrive.com.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-right">
          <div className="contact-card">
            <h2>Get in Touch</h2>
            <p className="subtext">We're here to assist you anytime</p>
            <form className="form">
              <div className="row">
                <input type="text" placeholder="First name" className="input" />
                <input type="text" placeholder="Last name" className="input" />
              </div>
              <div className="row">
                <input type="email" placeholder="Your email" className="input full" />
              </div>

              <div className="row">
                <select className="input select country-code">
                  <option>+62</option>
                  <option>+91</option>
                  <option>+1</option>
                </select>
                <input type="text" placeholder="Phone number" className="input phone-input" />
              </div>
              <div className="row">
                <textarea placeholder="How can we assist you?" rows="4" className="input textarea full" />
              </div>
              <div className="row">
                <button type="submit" className="submit-btn">Submit</button>
              </div>
              <p className="disclaimer">
                By contacting us, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;