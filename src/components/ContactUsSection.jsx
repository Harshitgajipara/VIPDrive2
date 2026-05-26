import React, { useState } from 'react';
import '../styles/ContactUsSection.css';

const ContactUsSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact-section" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-left">
          <h2 id="contact-heading" className="contact-title">Contact Us</h2>
          <p className="contact-desc">
            Reach out to us to learn more about our VIP car services and exclusive ride packages.
          </p>
          <div className="contact-details">
            <p>
              <a href="mailto:info@vipdrive.com" aria-label="Email us at info@vipdrive.com">
                info@vipdrive.com
              </a>
            </p>
            <p>
              <a href="tel:+919898983573" aria-label="Call us at +91 98989 83573">
                +91 98989 83573
              </a>
            </p>
            <a href="mailto:info@vipdrive.com">Customer Support</a>
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
            <h3>Get in Touch</h3>
            <p className="subtext">We&apos;re here to assist you anytime</p>
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="input"
                  required
                  aria-label="First name"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="input"
                  required
                  aria-label="Last name"
                />
              </div>
              <div className="row">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input full"
                  required
                  aria-label="Email address"
                />
              </div>
              <div className="row">
                <select
                  className="input select country-code"
                  name="countryCode"
                  aria-label="Country code"
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+62">+62 (Indonesia)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+971">+971 (UAE)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="input phone-input"
                  aria-label="Phone number"
                />
              </div>
              <div className="row">
                <textarea
                  name="message"
                  placeholder="How can we assist you?"
                  rows="4"
                  className="input textarea full"
                  aria-label="Your message"
                />
              </div>
              {submitted && (
                <p className="form-success-msg" role="alert">
                  ✅ Thank you! We&apos;ll get back to you shortly.
                </p>
              )}
              <div className="row">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
              <p className="disclaimer">
                By contacting us, you agree to our{' '}
                <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;