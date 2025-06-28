import React from "react";
import Card from "../components/Card";
import "../styles/CardSection.css";

function CardSection() {
  return (
    <div className="section_our_solution">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="our_solution_category">
          <div className="solution_cards_box">
            {/* Card 1 */}
            <Card
              title="Pre-Wedding & PhotoShoot"
              description="Capture your special moments with our luxury cars as the perfect backdrop."
              imageUrl="images/pre-wedding.jpg"
              link="/photoshoottrip.html"
            />

            {/* Card 2 */}
            <Card
              title="Wedding Ceremony"
              description="Arrive in style on your big day with our chauffeur-driven luxury cars."
              imageUrl="images/wedding-ceremony.jpg"
              link="#"
            />

            {/* Card 3 */}

            <Card
              title="Custom Package"
              description="Tailor your experience with our customizable packages to suit your needs."
              imageUrl="images/custom-package.jpg"
              link="/custom-booking"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
