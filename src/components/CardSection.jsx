import React from "react";
import Card from "../components/Card";
import "../styles/CardSection.css";

function CardSection() {
  return (
    <div className="section_our_solution" id="section_our_solution">
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
              link="/wedding_ceremony.html"
              external
            />

            {/* Card 3 */}

            <Card
              title="Special Organized Trips"
              description="Custom-designed travel plans crafted for your comfort, style, and unforgettable moments."
              imageUrl="images/special-organized-trips.jpg"
              link="/packages/sot"
            />

            {/* Card 4 */}

            <Card
              title="Custom Package"
              description="Tailor your experience with our customizable packages to suit your needs."
              imageUrl="images/custom-package.jpg"
              link="/custom-booking"
            />

            {/* Card 5 */}

            <Card
              title="Book a Car"
              description="Choose from our premium fleet of luxury chauffeur-driven cars for any occasion."
              imageUrl="images/car.webp"
              link="/our_fleet_luxury_chauffeur_rentals.html"
              external
            />

            {/* Card 6 */}

            <Card
              title="Customize Journey"
              description="Design your own bespoke travel experience — every detail tailored to your desires."
              imageUrl="images/car2.webp"
              link="/bespoke_journeys.html"
              external
            />

            {/* Card 7 */}

            <Card
              title="Photography & Videography"
              description="Capture every precious moment with our cinematic storytelling and visual memory services."
              imageUrl="images/pre-wedding.jpg"
              link="/photography_videography.html"
              external
            />

            {/* Card 8 */}

            <Card
              title="Honeymoon"
              description="Begin your forever with a personalized honeymoon journey crafted for romance and luxury."
              imageUrl="images/car3.webp"
              link="/honeymoon.html"
              external
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
