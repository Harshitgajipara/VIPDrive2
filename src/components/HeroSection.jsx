import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="HeroSection">
      <img className="heroImg" src="images/heroImg.jpg" alt="Hero" />
      <div className="overLayDiv">
        <h1>Arrive in Style, Leave in <span class="text-info">Luxury!</span></h1>
      </div>
      <div className="heroBookBtn">
        <h2>Book Your Dream Car Now</h2>
        <button type="button" class="btn btn-outline-primary">Book</button>
      </div>
    </section>
  );
}

export default HeroSection;
