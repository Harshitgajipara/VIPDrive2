import React from 'react';
import Card from '../components/Card2';
import '../styles/CardSection2.css';

function CardSection() {
  return (
    <section className="cardComponent">
      <div className="row">
        <div className="col-sm-4">
          <Card 
            title="Pre-Wedding & PhotoShoot"
            description="Capture your special moments with our luxury cars as the perfect backdrop."
            imageUrl="images/pre-wedding.jpg"
            link="/photoshoottrip.html"
          />
        </div>

        <div className="col-sm-4">
          <Card 
            title="Wedding Ceremony"
            description="Arrive in style on your big day with our chauffeur-driven luxury cars."
            imageUrl="images/wedding-ceremony.jpg"
            link="#"
          />
        </div>

        <div className="col-sm-4">
          <Card 
            title="Custom Package"
            description="Tailor your experience with our customizable packages to suit your needs."
            imageUrl="images/custom-package.jpg"
            link="#"
          />
        </div>
      </div>
    </section>
  );
}

export default CardSection;
