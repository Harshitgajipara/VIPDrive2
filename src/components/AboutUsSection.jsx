import React from 'react';
import '../styles/AboutUsSection.css';

function AboutUsSection() {
  return (
    <div class="about-us-section">
      <img src="images/car2.jpg" alt="Background" class="background-image"/>
      <div class="content">
        <div class="title">
          <h1>About Us</h1>
        </div>
        <div class="mission">
          <h2>Our Mission</h2>
        </div>
        <div class="description">
          <p>Creating a brighter future with us</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
