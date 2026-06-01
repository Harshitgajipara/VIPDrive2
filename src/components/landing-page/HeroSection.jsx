import React from 'react';
import '../../styles/landing-page/HeroSection.css';
import Title from './Title';

function HeroSection() {
  return (
    <section className="HeroSection" aria-label="Hero banner">
      <img
        className="heroImg"
        src="images/Hero.webp"
        alt="Luxury VIPDrive car on a scenic road"
        width="1920"
        height="1080"
        loading="eager"
        fetchpriority="high"
      />
      <Title />
      <div className="heroBookBtn">
        <a href="/custom-booking" className="button-85" role="button">
          Book Now
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
