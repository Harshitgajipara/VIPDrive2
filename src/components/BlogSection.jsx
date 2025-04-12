import React from 'react';
import "../styles/BlogSection.css";

function BlogSection() {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <h1>We drive experiences, not just cars.</h1>
        <p className="subtitle">
          Premium VIP chauffeur service, tailored for elegance and comfort.
        </p>
        <p className="description">
          Explore the art of elite transportation with our expertly curated blog. From booking the perfect ride to maximizing luxury on the go — we’ve got your journey covered.
        </p>
      </div>

      <div className="blog-cards">
        <div className="blog-card">
          <img src="./images/blog1.jpg" alt="Luxury Car Experience" />
          <div className="card-content">
            <h3>Top 5 Benefits of Booking a VIP Chauffeur</h3>
            <p className="date">April 1, 2025</p>
          </div>
        </div>

        <div className="blog-card">
          <img src="./images/blog2.jpg" alt="Luxury Fleet Interior" />
          <div className="card-content">
            <h3>How to Choose the Perfect Car for Your Event</h3>
            <p className="date">March 20, 2025</p>
          </div>
        </div>

        <div className="blog-card">
          <img src="./images/blog3.jpg" alt="VIP Airport Transfer" />
          <div className="card-content">
            <h3>Why Executives Prefer Chauffeured Airport Transfers</h3>
            <p className="date">February 28, 2025</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BlogSection;
