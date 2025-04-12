import React from 'react';
import '../styles/HeroSection.css';
import Title from './Title';

function HeroSection() {
  return (
    <section className="HeroSection">
      <img className="heroImg" src="images/Hero.jpg" alt="Hero" />
      <Title />
      {/* <div className="overLayDiv">
        <h1>Arrive in Style, Leave in <span class="text-info">Luxury!</span></h1>
      </div>
      <div className="heroBookBtn">
        <h2>Book Your Dream Car Now</h2>
        <button type="button" class="btn btn-outline-primary">Book</button>
      </div> */}
      <div className="heroBookBtn">
        <button type="button" class="button-85">Book</button>
      </div>
    </section>
  );
}

export default HeroSection;
