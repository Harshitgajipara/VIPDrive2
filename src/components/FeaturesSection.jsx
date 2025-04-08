import React from 'react';
import '../styles/FeaturesSection.css';

function FeaturesSection() {
  return (
    <div class="features-section container mt-5">
      <h2 class="text-center mb-4">Discover Our Commitment to Excellence</h2>
      <p class="text-center mb-5">A Commitment to Sustainability and Customer Satisfaction</p>
      <div class="features-section-inner row justify-content-center">
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="feature-card side-feature-card">
            <img src="images/feature1.jpg" alt="Feature 1" class="feature-img-1"/>
            <div class="feature-overlay">
              <h5>A Promise Reflected in Every Window</h5>
              <p>Our windows are designed to enhance your home's beauty and functionality, ensuring quality and reliability in every installation.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="feature-card middle-feature-card">
            <img src="images/feature2.jpg" alt="Feature 2" class="feature-img-2"/>
            <div class="feature-overlay">
              <h5>Promise of Purposeful Innovation</h5>
              <p>Experience the latest advancements in door and window technology, crafted to meet your needs for efficiency, security, and style.</p>
            </div>
          </div>
          <div class="feature-card middle-feature-card mt-4">
            <img src="images/feature3.jpg" alt="Feature 3" class="feature-img-3"/>
            <div class="feature-overlay">
              <h5>Protecting Green Environment</h5>
              <p>We prioritize eco-friendly materials and practices, making it easy for you to contribute to a healthier planet with every purchase.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="feature-card side-feature-card">
            <img src="images/feature4.jpg" alt="Feature 4" class="feature-img-4"/>
            <div class="feature-overlay">
              <h5>Thinking For Customers Benefit</h5>
              <p>We offer personalized solutions and exceptional service to make your home improvement journey seamless and rewarding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
