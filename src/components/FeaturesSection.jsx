import React from 'react';
import '../styles/FeaturesSection.css';

function FeaturesSection() {
  return (
    <div className="features-section">
      <div className="container">
        <h2 className="text-center mb-4">Discover Our Commitment to Excellence</h2>
        <p className="text-center mb-5">A Commitment to Luxury and Customer Satisfaction</p>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="feature-card">
              <img src="images/feature1.jpg" alt="Feature 1" className="feature-img-1" />
              <div className="feature-overlay">
                <h5>A Promise Reflected in Every Window</h5>
                <p>At VIPDrive, we believe that luxury is not just a service—it's a promise. Our premium cars offer unmatched comfort and style, ensuring every journey is a first-class experience.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="feature-card">
              <img src="images/feature2.jpg" alt="Feature 2" className="feature-img-2" />
              <div className="feature-overlay">
                <h5>Promise of Purposeful Innovation</h5>
                <p>Experience the latest advancements in automotive technology, crafted to meet your needs for efficiency, security, and style.</p>
              </div>
            </div>

            <div className="feature-card">
              <img src="images/feature3.jpg" alt="Feature 3" className="feature-img-3" />
              <div className="feature-overlay">
                <h5>Thinking For Customers Benefit</h5>
                <p>We offer personalized solutions and exceptional service to make your travel experience seamless and rewarding.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="feature-card">
              <img src="images/feature4.jpg" alt="Feature 4" className="feature-img-4" />
              <div className="feature-overlay">
                <h5>Protecting Green Environment</h5>
                <p>We prioritize eco-friendly practices, ensuring that luxury travel can also be sustainable and responsible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;