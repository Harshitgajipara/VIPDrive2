import React from "react";
import "../styles/ContactUsSection.css";

const ContactUsSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-left">
          <img src="./images/contactUs.svg" alt="Logo" className="logo" />
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-desc">
            Email, call, or complete the form to learn how Snappy can solve your messaging problem.
          </p>
          <div className="contact-details">
            <p>info@snappy.io</p>
            <p>321-221-231</p>
            <a href="#">Customer Support</a>
          </div>

          <div className="contact-columns">
            <div>
              <h4>Customer Support</h4>
              <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>
            <div>
              <h4>Feedback and Suggestions</h4>
              <p>We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.</p>
            </div>
            <div>
              <h4>Media Inquiries</h4>
              <p>For media-related questions or press inquiries, please contact us at media@snappyapp.com.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-right">
          <div className="contact-card">
            <h2>Get in Touch</h2>
            <p className="subtext">You can reach us anytime</p>
            <form className="form">
              <div className="row">
                <input type="text" placeholder="First name" className="input" />
                <input type="text" placeholder="Last name" className="input" />
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

              <textarea placeholder="How can we help?" rows="4" className="input textarea full" />
              <button type="submit" className="submit-btn">Submit</button>
              <p className="disclaimer">
                By contacting us, you agree to our <a href="#">Terms of service</a> and <a href="#">Privacy Policy</a>.
              </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
