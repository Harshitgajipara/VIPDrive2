import React from 'react';
import Card from '../components/Card';
import '../styles/CardSection.css'; // Uses the overhauled spaced layout sheet!

function CardSection2() {
  return (
    <section className="section_our_solution">
      <div className="our_solution_category">
        <div className="solution_cards_box">
          <Card 
            title="Pre-Wedding & PhotoShoot"
            description="Capture your special moments with our luxury cars as the perfect backdrop."
            imageUrl="images/pre-wedding.webp"
            link="/custom-booking"
          />
          <Card 
            title="Wedding Ceremony"
            description="Arrive in style on your big day with our chauffeur-driven luxury cars."
            imageUrl="images/wedding-ceremony.webp"
            link="/custom-booking"
          />
          <Card 
            title="Custom Package"
            description="Tailor your experience with our customizable packages to suit your needs."
            imageUrl="images/custom-package.webp"
            link="/custom-booking"
          />
        </div>
      </div>
    </section>
  );
}

export default CardSection2;
